<html>

<head>
  <link rel="stylesheet" href="/assets/css/style.css">
</head>

<body>
  <!-- DATA SCIENCE -->
  <section>
    <h1>Projects - Data Science</h1>
    <div>
      <h3>10 Academy Projects</h3>
      <p><a href="https://www.10academy.org/">10 Academy</a> identifies, trains and enables exceptionally talented young Africans to have an outsized impact on the world.</p>
      <p>I am currently undergoing a Data Science Training at 10 Academy and this contains my solution to all the weekly challenges given.</p>
      <ul>
        <li><strong>Week 1 - Twitter User Segmentation</strong></li>
        <img src="/assets/images/week1.png" alt="Week 1">
        <p>Nike Inc is planning a new digital campaign in Africa, and wants to understand who the social media influencers are in Africa and in which area fall into (e.g. politics, fashion, art, etc.). This is key to Nike as they don’t want to be associated with the wrong influencers (ethnic and religious polarisation figures for example)<span id="dots">...</span><span id="more">They want to think about:
          <ul>
            <li>Could they try to partner with or hire some key influencers to amplify their planned digital campaign?<li>
            <li>How are the influencers endorsed by key government officials?</li>
            <li>Which topics are important for both influencers and key government officials?</li>
          </ul></span></p>
        <p>
          <a href="https://github.com/gloryodeyemi/10AcademyWeeklyChallenges/tree/75ce65fb1d47fd699dd79697c21c711af0a77d96/week1"><button>View Code</button></a>
          <button onclick="myFunction()" id="myBtn2">Read more</button>
        </p>
      </ul>
    </div>
  </section>
  
  <script>
    function myFunction() {
      var dots = document.getElementById("dots");
      var moreText = document.getElementById("more");
      var btnText = document.getElementById("myBtn2");
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
