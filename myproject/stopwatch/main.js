const lines = document.getElementsByClassName("lines");
const innerRing = document.getElementsByClassName("inner-ring")[0];
for (let i = 0; i < 60; i++) {
  innerRing.innerHTML += "<div class='lines'></div>";
  lines[i].style.transform = "rotate(" + (i * 6) + "deg)";
};

const stick = document.getElementById("stick");
const timeBar = document.getElementById("time-bar");
const infoTable = document.getElementById("info-table");
const playBtn = document.getElementById("play-btn");
const lapBtn = document.getElementById("lap-btn");
const resetBtn = document.getElementById("reset-btn");

let count = 0;
let n = 0;
playBtn.onclick = function() {
  if (n === 0) {
    playBtn.textContent = "pause";
    const timer = setInterval(function() {
      
      count++;
    }, 10);
    n=1;
  } else {
    playBtn.textContent = "play_arrow";
    clearInterval(timer);
    n=0;
  };
};

function deco(n) {
  if (n<10) {
    return "0"+n;
  } else {
    return n;
  };
};