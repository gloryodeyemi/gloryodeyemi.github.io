function initializeTheme() {
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    const currentTheme = localStorage.getItem('theme') || 'dark';

    document.documentElement.setAttribute('data-theme', currentTheme);
    updateThemeIcon(currentTheme);

    themeToggle.addEventListener('click', () => {
        const theme = document.documentElement.getAttribute('data-theme');
        const nextTheme = theme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', nextTheme);
        localStorage.setItem('theme', nextTheme);
        updateThemeIcon(nextTheme);
    });

    function updateThemeIcon(theme) {
        themeIcon.className = theme === 'dark' ? 'fas fa-sun theme-icon' : 'fas fa-moon theme-icon';
    }
}

function initializeMobileMenu() {
    const mobileToggle = document.getElementById('mobileToggle');
    const navLinks = document.getElementById('navLinks');
    mobileToggle.addEventListener('click', () => navLinks.classList.toggle('active'));
}

function initializeProjectFilters() {
    document.querySelectorAll('.project-filter').forEach(button => {
        button.addEventListener('click', () => {
            document.querySelectorAll('.project-filter').forEach(item => item.classList.remove('active'));
            button.classList.add('active');
            const filter = button.getAttribute('data-filter');

            document.querySelectorAll('.project-card').forEach(card => {
                const categories = card.getAttribute('data-category').split(' ');
                const show = filter === 'all' || categories.includes(filter);
                card.style.display = show ? '' : 'none';
                card.style.animation = show ? 'fadeInUp .45s ease' : '';
            });
        });
    });
}

function initializeCarousels() {
    document.querySelectorAll('.carousel-container').forEach(carousel => {
        const track = carousel.querySelector('.carousel-track');
        const dots = carousel.querySelectorAll('.dot');
        const total = carousel.querySelectorAll('.carousel-track img').length;
        let current = 0;
        let timer;

        function goTo(index) {
            current = index;
            track.style.transform = `translateX(${-index * 100}%)`;
            dots.forEach((dot, dotIndex) => dot.classList.toggle('active', dotIndex === index));
        }

        function next() {
            goTo((current + 1) % total);
        }

        dots.forEach(dot => {
            dot.addEventListener('click', () => {
                clearInterval(timer);
                goTo(parseInt(dot.dataset.slide, 10));
                timer = setInterval(next, 4000);
            });
        });

        if (total > 1) {
            timer = setInterval(next, 4000);
            carousel.addEventListener('mouseenter', () => clearInterval(timer));
            carousel.addEventListener('mouseleave', () => {
                timer = setInterval(next, 4000);
            });
        }
    });
}

function initializeReveal() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
}

async function loadProjects() {
    const response = await fetch('index.html');
    if (!response.ok) {
        throw new Error('Unable to load projects.');
    }

    const html = await response.text();
    const sourceDocument = new DOMParser().parseFromString(html, 'text/html');
    const sourceGrid = sourceDocument.getElementById('projectsGrid');
    if (!sourceGrid) {
        throw new Error('Unable to find projects.');
    }

    const projectsGrid = document.getElementById('projectsGrid');
    projectsGrid.innerHTML = sourceGrid.innerHTML;
    projectsGrid.querySelectorAll('.project-card').forEach(card => {
        card.style.display = '';
    });

    initializeProjectFilters();
    initializeCarousels();
    initializeReveal();
}

initializeTheme();
initializeMobileMenu();
loadProjects().catch(() => {
    document.getElementById('projectsGrid').innerHTML =
        '<p class="text-center">Projects could not be loaded. Please refresh the page.</p>';
    initializeReveal();
});
