var body = document.querySelector(".full-content");
var menuBtn = document.querySelector(".menu-btn");
menuBtn.addEventListener("click", function() {
  body.classList.toggle("active");
  menuBtn.classList.toggle("active");
  if (menuBtn.innerHTML === "menu") {
    menuBtn.innerHTML = "close";
  } else {
    menuBtn.innerHTML = "menu";
  };
});