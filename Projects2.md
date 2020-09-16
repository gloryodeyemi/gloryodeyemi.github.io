<html>

<head>
  <link rel="stylesheet" href="/assets/css/style.css">
</head>

<body>
  <ul>
    <li><a class="nav" href="Home.html">Home</a></li>
    <li><a class="nav" href="CV2.html">Resume/CV</a></li>
  </ul>

  <!-- DATA SCIENCE -->
  <section>
    <h1>Projects - Data Science</h1>
    <div>
      <h3>10 Academy</h3>
      <p><a href="https://www.10academy.org/">10 Academy</a> identifies, trains and enables exceptionally talented young Africans to have an outsized impact on the world.</p>
      <p>I am currently undergoing a Data Science Training at 10 Academy and this contains my solution to all the weekly challenges given.</p>
      <ul>
        <li><strong>Week 1 - Twitter User Segmentation</strong></li>
        <img src="/assets/images/week1.png" alt="Week 1">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas vitae scel<span id="dots">...</span><span id="more">erisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta.</span></p>
        <p>
          <a href="https://github.com/gloryodeyemi/10AcademyWeeklyChallenges/tree/75ce65fb1d47fd699dd79697c21c711af0a77d96/week1"><button>View Code</button></a>
          <button onclick="myFunction()" id="myBtn2">Read more</button>
        </p>
      </ul>
    </div>
  </section>
  
  <ul>
    <li><a class="nav" href="Home.html">Home</a></li>
    <li><a class="nav" href="CV2.html">Resume/CV</a></li>
  </ul>
  
  <script>
    function myFunction() {
      var dots = document.getElementById("dots");
      var moreText = document.getElementById("more");
      var btnText = document.getElementById("myBtn");
      if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more"; 
        moreText.style.display = "none";
      } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less"; 
        moreText.style.display = "inline";
      }
    }
</script>
</body>
</html>
