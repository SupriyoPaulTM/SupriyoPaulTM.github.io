const dateValue = document.getElementById("date-value");
const timeValue = document.getElementById("time-value");
const quoteValue = document.getElementById("quote-value");
const quotes = [
  "It does not matter how slowly you go so long as you do not stop.",
  "Happiness is not something ready made. It comes from your own actions.",
  "Try not to become a man of success, but rather try to become a man of value.",
  "Be sure you put your feet in the right place, then stand firm.",
  "All our dreams can come true, if we have the courage to pursue them.",
  "Never let yesterday use up too much of today.",
  "Success consists of going from failure to failure without loss of enthusiasm.",
  "Either you run the day, or the day runs you.",
  "You must be the change you wish to see in the world.",
  "Before anything else, preparation is the key to success."
  ];
let n = Math.floor(Math.random()*10);
quoteValue.innerHTML = quotes[n];

function startClock() {
  
  let fullDate = new Date();
  dateValue.innerHTML = 
    fullDate.getFullYear()+" / "+
    (fullDate.getMonth()+1)+" / "+
    fullDate.getDate();

  timeValue.innerHTML =
    refine(fullDate.getHours())+" : "+
    refine(fullDate.getMinutes())+" : "+
    refine(fullDate.getSeconds());
  setTimeout(startClock, 1000);
};

function refine(i) {
  if (i<10) {
    i = "0"+i
  };
  return i;
}