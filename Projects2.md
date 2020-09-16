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
        <img class="project" src="/assets/images/week1.jpg" alt="Week 1">
        <p>Nike Inc is planning a new digital campaign in Africa, and wants to understand who the social media influencers are in Africa and in which area fall into (e.g. politics, fashion, art, etc.). This is key to Nike as they don’t want to be associated with the wrong influencers (ethnic and religious polarisation figures for example). <span id="dots">...</span><span id="more">They want to think about: Could they try to partner with or hire some key influencers to amplify their planned digital campaign?, How are the influencers endorsed by key government officials?, Which topics are important for both influencers and key government officials? The aim is to help Nike Inc. identify top African twitter influencers that is best fit for partnership or hire for its digital campaign in Africa.</span></p>
        <p>
          <a href="https://github.com/gloryodeyemi/10AcademyWeeklyChallenges/tree/75ce65fb1d47fd699dd79697c21c711af0a77d96/week1"><button>View Code</button></a>
          <button onclick="myFunction()" id="myBtn2">Read more</button>
        </p>
        <li><strong>Week 2 - User Analytics in the Telecommunication Industry - Overview</strong></li>
        <img class="project" src="/assets/images/week2.jpg" alt="Week 2">
        <p>You are working for a wealthy investor that specializes in purchasing assets that are undervalued. This investor’s due diligence on all purchases includes a rich analysis of the data that underlies the business, to try to understand the fundamentals of the business and especially to identify opportunities to drive profitability by changing the focus of which products or services are being offered. <span id="dots2">...</span><span id="more2">Your last role with this investor saw you do a rich analysis of a delivery company and you helped to identify that delivery to university students was the most profitable route to follow, and your analysis helped the investor purchase this delivery company and ramp up profits by 25% within 6 months through focussing on the most profitable aspect of the business. This was driven by university students always being hungry, awake at all hours, willing to purchase from a limited food menu and tending to live within a small geographical area. The investor is interested in purchasing TellCo, an existing mobile service provider in the Republic of Pefkakia. TellCo’s current owners have been willing to share their financial information but have never employed anyone to look at their data that is generated automatically by their systems. Your employer wants you to provide a report to analyze opportunities for growth and make a recommendation on whether TellCo is worth buying or selling. You will do this by analyzing a telecommunication dataset that contains useful information about the customers & their activities on the network. </span></p>
        <p>
          <a href="https://github.com/gloryodeyemi/10AcademyWeeklyChallenges/tree/master/week2"><button>View Code</button></a>
          <button onclick="myFunction2()" id="myBtn3">Read more</button>
        </p> 
        <li><strong>Week 3 - User Analytics in the Telecommunication Industry - Overview</strong></li>
        <img class="project" src="/assets/images/week3.jpg" alt="Week 3">
        <p>The project aims to gather insights from South Africa on which public health and social measures are most effective at reducing the spread of Covid-19. It aims to identify which interventions had the most effect on the country and the African Union is looking to the analysis to both drive<span id="dots3">...</span><span id="more3"> policy recommendations to countries in Africa on how to deal with Covid-19 as well as to help countries prepare for future pandemics. The main objective of this project is to quantify the statistical significance of a public health policy introduced by African governments to slow down the spread of COVID-19.</span></p>
        <p>
          <a href="https://github.com/gloryodeyemi/10AcademyWeeklyChallenges/tree/master/week3"><button>View Code</button></a>
          <button onclick="myFunction3()" id="myBtn4">Read more</button>
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
  
  function myFunction2() {
      var dots2 = document.getElementById("dots2");
      var moreText2 = document.getElementById("more2");
      var btnText2 = document.getElementById("myBtn3");
      if (dots2.style.display === "none") {
        dots2.style.display = "inline";
        btnText2.innerHTML = "Read more"; 
        moreText2.style.display = "none";
      } else {
        dots2.style.display = "none";
        btnText2.innerHTML = "Read less"; 
        moreText2.style.display = "inline";
      }
    }
    function myFunction3() {
      var dots3 = document.getElementById("dots3");
      var moreText3 = document.getElementById("more3");
      var btnText3 = document.getElementById("myBtn4");
      if (dots3.style.display === "none") {
        dots3.style.display = "inline";
        btnText3.innerHTML = "Read more"; 
        moreText3.style.display = "none";
      } else {
        dots3.style.display = "none";
        btnText3.innerHTML = "Read less"; 
        moreText3.style.display = "inline";
      }
    }
</script>
</body>
</html>
