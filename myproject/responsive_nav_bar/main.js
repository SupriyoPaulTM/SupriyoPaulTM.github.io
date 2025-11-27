const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("menu-close-btn");
const navMenu = document.getElementById("nav-menu");
const invsBar = document.querySelector(".invisible-bar");
function toggleMenu(){
  navMenu.classList.toggle("active");
  invsBar.classList.toggle("active");
};

menuBtn.addEventListener("click", toggleMenu);
closeBtn.addEventListener("click", toggleMenu);
invsBar.addEventListener("click", toggleMenu);