const themeBtn = document.getElementById("theme-switch-btn");
const btnBulet = document.querySelector(".btn-bulet");

themeBtn.addEventListener("click", function(){
  btnBulet.classList.toggle("active");
  document.body.classList.toggle("theme-dark");
});