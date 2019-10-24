/* FROM: https://www.w3schools.com/howto/howto_js_mobile_navbar.asp */
/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
  var x = document.getElementById("dropdown-links");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}


// 'use strict';
//
// var $toggle = 0;
//
// $(document).ready(function() {
//   $(".dropdown-nav-target").click(function() {
//   	if ($toggle == 0){
//       $(".dropdown-filter-nav-content").slideDown("normal");
//       $toggle = 1;
//   	} else {
//   	$(".dropdown-filter-nav-content").slideUp("normal");
//   	$toggle = 0;
//   	}
// 	}
// }
