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
    timeBar.textContent = formating(count);
    stick.style.transform = "translateX(-50%) translateY(-80%) rotate(" + (count*0.06) + "deg)";
    count++;
  }, 10);
};

function pause() {
  clearInterval(timer);
  timer = null;
};

let laps =[];
lapBtn.onclick = function () {
  laps.push(count);
  document.getElementById("info-title").style.display = "flex";
  renderLap();
};

function renderLap() {
  infoTable.querySelectorAll(".lap-info").forEach((e) => {
    e.remove();
  });
  for (let i = 0; i < laps.length; i++) {
    const item = document.createElement("div");
    const lapCount = document.createElement("span");
    const lapTime = document.createElement("span");
    const lapTotal = document.createElement("span");
    item.classList.add("lap-info");
    lapCount.textContent = deco(i+1);
    if (i===0) {
      lapTime.textContent = formating(laps[i]);
    } else {
      lapTime.textContent = formating(laps[i]-laps[i-1]);
    };
    lapTotal.textContent = formating(laps[i]);
    item.append(lapCount, lapTime, lapTotal);
    infoTable.prepend(item);
  };
};

function formating(n) {
  let ms = n%100;
  let s = (Math.floor(n/100))%60;
  let m = (Math.floor(n/6000))%60;
  let time = deco(m) + ":" + deco(s) + ":" + deco(ms);
  return time;
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
  clearInterval(timer);
  timer = null;
  laps =[];
  document.getElementById("info-title").style.display = "none";
  renderLap();
  lapBtn.classList.remove("active", "disabled");
  resetBtn.classList.remove("active", "disabled");
  timeBar.textContent = "00:00:00";
  stick.style.transform = "translateX(-50%) translateY(-80%) rotate(0deg)";
};