// document.addEventListener("DOMContentLoaded", () => {
//     const filterButtons = document.querySelectorAll(".filter-button");
//     const projectCards = document.querySelectorAll(".project-card");
  
//     // Show all on load
//     projectCards.forEach(card => card.classList.add("show"));
  
//     filterButtons.forEach(button => {
//       button.addEventListener("click", () => {
//         const category = button.dataset.filter;
  
//         // Reset buttons
//         filterButtons.forEach(btn => btn.classList.remove("active"));
//         button.classList.add("active");
  
//         // Filter cards
//         projectCards.forEach(card => {
//           card.classList.remove("show");
//           if (category === "all" || card.classList.contains(category)) {
//             card.classList.add("show");
//           }
//         });
//       });
//     });
//   });
  

document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll(".filter-button");
    const projectCards = document.querySelectorAll(".project-card");
  
    function showProjects(category) {
      projectCards.forEach(card => {
        const matches = category === "all" || card.classList.contains(category);
        card.classList.toggle("show", matches);
      });
    }
  
    // Initial show all
    showProjects("all");
  
    filterButtons.forEach(button => {
      button.addEventListener("click", function () {
        const selectedCategory = this.getAttribute("data-filter");
  
        // Update active state
        filterButtons.forEach(btn => btn.classList.remove("active"));
        this.classList.add("active");
  
        // Filter cards
        showProjects(selectedCategory);
      });
    });
  });
  