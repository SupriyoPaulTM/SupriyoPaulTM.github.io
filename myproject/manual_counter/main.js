const countElement = document.getElementById("count");
const plusElement = document.getElementById("plus");
const minusElement = document.getElementById("minus");
const animationTime = 0.5; /* in second */
let count = 0;
const maxCount = 15;
let localString = localStorage.getItem("userCount");
if (localString !== null) {
  count = Number(JSON.parse(localString));
};

document.addEventListener("keydown", function(event){
  if (event.key === "ArrowUp") {
    countUp();
  } else if (event.key === "ArrowDown") {
    countDown();
  } else if (event.key === "r") {
    resetCount();
  };
});

function countUp() {
  if (count<maxCount) {
    count++;
    plusElement.classList.add("active");
    saveToLocal();
    render();
    setTimeout(function() {
      plusElement.classList.remove("active");
    }, animationTime*1000);
  } else {
    countElement.classList.add("vibrate");
    setTimeout(function() {
      countElement.classList.remove("vibrate");
    }, animationTime*1000);
  }
};

function countDown() {
  if (count>0) {
    count--;
    minusElement.classList.add("active");
    saveToLocal();
    render();
    setTimeout(function() {
      minusElement.classList.remove("active");
    }, animationTime*1000);
  } else {
    countElement.classList.add("vibrate");
    setTimeout(function() {
      countElement.classList.remove("vibrate");
    }, animationTime*1000);
  }
};

function resetCount() {
  count = 0;
  saveToLocal();
  render();
}

function render() {
  countElement.textContent = count;
};

function saveToLocal() {
  let jsonData = JSON.stringify(count);
  localStorage.setItem("userCount", jsonData);
};

render();