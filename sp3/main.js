let backToTop = document.getElementById("b2t-btn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
}


function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};
backToTop.addEventListener("click", topFunction);

function themeToggle() {
  document.getElementById("main").classList.toggle("dark");
};