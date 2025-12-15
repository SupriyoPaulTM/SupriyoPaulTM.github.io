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

let btnState = true;
playBtn.onclick = function() {
  lapBtn.classList.remove("active", "disabled");
  resetBtn.classList.remove("active", "disabled");
  lapBtn.classList.add("active");
  resetBtn.classList.add("active");
  if (btnState) {
    start();
    playBtn.textContent = "pause";
    resetBtn.classList.add("disabled");
    btnState = false;
  } else {
    pause();
    playBtn.textContent = "play_arrow";
    lapBtn.classList.add("disabled");
    btnState = true;
  };
};

let count = 0;
let timer = null;
function start() {
  if (timer !== null) {
    return;
  };
  timer = setInterval(() => {
    let ms = count%100;
    let s = (Math.floor(count/100))%60;
    let m = (Math.floor(count/6000))%60;
    let time = deco(m) + ":" + deco(s) + ":" + deco(ms);
    timeBar.textContent = time;
    stick.style.transform = "translateX(-50%) translateY(-80%) rotate(" + (count*0.06) + "deg)";
    count++;
  }, 10);
};
function pause() {
  clearInterval(timer);
  timer = null;
};

function deco(n) {
  if (n<10) {
    return "0"+n;
  } else {
    return n;
  };
};

resetBtn.onclick = function() {
  count = 0;
  lapBtn.classList.remove("active", "disabled");
  resetBtn.classList.remove("active", "disabled");
  timeBar.textContent = "00:00:00";
  stick.style.transform = "translateX(-50%) translateY(-80%) rotate(0deg)";
};