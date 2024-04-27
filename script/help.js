// JavaScript Document

// When the user scrolls the page, execute myFunction 
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  var progressBar = document.getElementById("myBar");
  var progressContainer = document.querySelector(".progress-container");

  if (scrolled > 0) {
    progressContainer.style.display = "block";
  } else {
    progressContainer.style.display = "none";
  }

  progressBar.style.width = scrolled + "%";
}