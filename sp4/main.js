const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");
const menu = document.getElementById("menu");
const overlay = document.querySelector(".overlay");
const themeBtn = document.getElementById("theme-btn");

function menuToggle() {
  menu.classList.toggle("active");
  overlay.classList.toggle("active");
};

menuBtn.addEventListener("click", menuToggle);
closeBtn.addEventListener("click", menuToggle);
overlay.addEventListener("click", menuToggle);

menu.querySelectorAll("a").forEach(function(e) {
  e.addEventListener("click", menuToggle);
});

themeBtn.addEventListener("click", function(){
  document.body.classList.toggle("dark-theme");
  if (themeBtn.innerHTML == "dark_mode") {
    themeBtn.innerHTML = "light_mode";
  } else {
    themeBtn.innerHTML = "dark_mode";
  };
});

const observer = new IntersectionObserver(callback, {
  threshold: 0.3
});

document.querySelectorAll("section").forEach(sec => observer.observe(sec));

function callback (entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
      document.querySelectorAll("nav a").forEach(link => {
        link.classList.remove("active");
      });
      const id = entry.target.id;
      document.querySelector(`nav a[href="#${id}"]`).classList.add("active");
    };
  });
};