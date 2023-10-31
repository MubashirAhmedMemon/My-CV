// 

document.addEventListener("DOMContentLoaded", function () {
    fillProgressBars();
});

function fillProgressBars() {
    const progressBar1 = document.getElementById("progress-bar-1");
    const progressBar2 = document.getElementById("progress-bar-2");
    const progressBar3 = document.getElementById("progress-bar-3");
    const progressBar4 = document.getElementById("progress-bar-4");
    const progressBar5 = document.getElementById("progress-bar-5");
    const progressBar6 = document.getElementById("progress-bar-6");

    progressBar1.style.width = "90%";
    progressBar2.style.width = "90%";
    progressBar3.style.width = "65%";
    progressBar4.style.width = "80%";
    progressBar5.style.width = "30%";
    progressBar6.style.width = "50%";
}
// 

// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}