const themeToggle = document.getElementById("theme-toggle");
const themeBulet = document.getElementById("theme-bulet");
const formatToggle = document.getElementById("format-toggle");
const formatBulet = document.getElementById("format-bulet");
const timeField = document.getElementById("time");
const dateField = document.getElementById("date");
const weekName = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const monthName = ["January","February","March","April","May","June","July","August","September","October","November","December"];

let userPref = {"theme": "dark", "format": "12h"};
let localDataString = localStorage.getItem("userPrefData");
if (localDataString !== null) {
  userPref = JSON.parse(localDataString);
};

function darkActive() {
  document.body.classList.add("dark");
  themeBulet.textContent = "light_mode";
  themeBulet.classList.add("active");
};

function lightActive() {
  document.body.classList.remove("dark");
  themeBulet.textContent = "dark_mode";
  themeBulet.classList.remove("active");
};

if (userPref.theme === "dark") {
  darkActive();
};

if (userPref.format !== "12h") {
  formatBulet.classList.add("active");
};

themeToggle.onclick = function() {
  if (userPref.theme === "dark") {
    lightActive();
    userPref.theme = "light";
    saveToLocal();
  } else {
    darkActive();
    userPref.theme = "dark";
    saveToLocal();
  };
};

formatToggle.onclick = function() {
  formatBulet.classList.toggle("active");
  if (userPref.format === "12h") {
    userPref.format = "24h";
  } else {
    userPref.format = "12h"
  };
  saveToLocal();
};

function saveToLocal() {
  let jsonData = JSON.stringify(userPref);
  localStorage.setItem("userPrefData", jsonData);
};

setInterval(function() {
  let timeNdate = new Date();
  let h = timeNdate.getHours();
  let m = timeNdate.getMinutes();
  let s = timeNdate.getSeconds();
  let d = timeNdate.getDate();
  let w = weekName[timeNdate.getDay()];
  let mn = monthName[timeNdate.getMonth()];
  let y = timeNdate.getFullYear();
  
  if (userPref.format === "12h") {
    timeField.textContent = convH(h) + " : " + m + " : " + s + "  " + ampm(h);
  } else {
    timeField.textContent = deco(h) + " : " + m + " : " + s;
  };
  
  dateField.innerHTML = w +"<br>" + d +" "+ mn + ", " + y;
}, 1000);

function ampm (n) {
  if (n<12) {
    return "AM";
  } else {
    return "PM";
  }
};

function convH(n) {
  if (n===0) {
    return "12";
  } else {
    return deco(n%12)
  };
};

function deco(n) {
  if (n<10) {
    return "0"+n;
  } else {
    return n;
  };
};