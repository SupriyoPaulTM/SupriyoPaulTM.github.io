function themeswitch() {
  var element = document.getElementById("body");
  element.classList.toggle("darkmode");
}

var navBar = document.getElementById("nav");
var menuIcon = document.getElementById("menu");
var closeIcon = document.getElementById("close");

function navopen() {
  navBar.classList.add("active");
  menuIcon.classList.add("remove");
  closeIcon.classList.remove("remove");
}

function navclose() {
  navBar.classList.remove("active");
  menuIcon.classList.remove("remove");
  closeIcon.classList.add("remove");
}