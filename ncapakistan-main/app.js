
//Get the button:
volunteerbtn = document.getElementById("volunteerbtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 110 || document.documentElement.scrollTop > 110) {
    volunteerbtn.style.display = "block";
  } else {
    volunteerbtn.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function VolunteerFunction() {
  window.location.replace("pages/volunteer.html");
}

