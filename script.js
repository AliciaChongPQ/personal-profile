function addRecommendation() {
  // Get the message of the new recommendation
  let recommendation = document.getElementById("new_recommendation");
  // If the user has left a recommendation, display a pop-up
  if (recommendation.value != null && recommendation.value.trim() != "") {
    console.log("New recommendation added");
    //Call showPopup here
    showPopup(true);
    // Create a new 'recommendation' element and set it's value to the user's message
    var element = document.createElement("div");
    element.setAttribute("class","recommendation");
    element.innerHTML = "\<span\>&#8220;\</span\>" + recommendation.value + "\<span\>&#8221;\</span\>";
    // Add this element to the end of the list of recommendations
    document.getElementById("all_recommendations").appendChild(element); 
    
    // Reset the value of the textarea
    recommendation.value = "";
  }
}

function showPopup(bool) {
  if (bool) {
    document.getElementById('popup').style.visibility = 'visible'
  } else {
    document.getElementById('popup').style.visibility = 'hidden'
  }
}




document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const el = entry.target;
      if (entry.isIntersecting) {
        
        if (el.classList.contains('skill-level')) {
          const percent = el.getAttribute('data-percent');
          el.style.width = percent;
        }
        if (el.classList.contains('text-appear')) {
          el.classList.add('visible');
        }
        // observer.unobserve(el); // animate only once
      }else {
        // Reset for re-animation
        if (el.classList.contains('skill-level')) {
          el.style.width = '0';
        }

        if (el.classList.contains('text-appear')) {
          el.classList.remove('visible');
        }
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.skill-level, .text-appear').forEach(el => {
    observer.observe(el);
  });
});


