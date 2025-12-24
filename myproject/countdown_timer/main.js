const dialHands = document.getElementsByClassName("lines");
const clockMain = document.querySelector(".clock-main");

for (let i = 0; i < 60; i++) {
  clockMain.innerHTML += "<div class='lines'></div>";
  dialHands[i].style.transform = "rotate(" + (i*6) + "deg)";
};