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

playBtn.onclick = timer;

let count = 0;
function timer() {
  setInterval(() => {
    let ms = count%100;
    let s = (Math.floor(count/100))%60;
    let m = (Math.floor(count/6000))%60;
    let time = deco(m) + ":" + deco(s) + ":" + deco(ms);
    timeBar.textContent = time;
    stick.style.transform = "translateX(-50%) translateY(-80%) rotate(" + (s*6) + "deg)";
    count++;
  }, 10);
};

function deco(n) {
  if (n<10) {
    return "0"+n;
  } else {
    return n;
  };
};