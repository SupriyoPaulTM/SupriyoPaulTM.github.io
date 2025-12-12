const wraper =document.getElementById('slider-wraper');
const sliderItems = wraper.querySelectorAll(".slider-item");
const nxtBtn = document.getElementById('nxt-btn');
const prevBtn = document.getElementById('prev-btn');
const bar = document.querySelector(".bar-fill");

let count = 0;
sliderItems.forEach(() => {
  count +=1;
});
let duration = 3;

function init() {
  sliderItems[0].classList.add("center");
  sliderItems[1].classList.add("right");
  sliderItems[count-1].classList.add("left");
  bar.style.width = 100/count+"%";
};
init();

let current = 0;
nxtBtn.onclick = nextImg;
prevBtn.onclick = prevImg;
function nextImg() {
  current = (current + 1) % count;
  let leftIndex  = (current - 1 + count) % count;
  let centerIndex = current;
  let rightIndex = (current + 1) % count;
  for (let i = 0; i < count; i++) {
    sliderItems[i].classList.remove("left","center","right");
  };
  sliderItems[leftIndex].classList.add("left");
  sliderItems[centerIndex].classList.add("center");
  sliderItems[rightIndex].classList.add("right");
  let width = current * 100/(count-1);
  bar.style.width = width+"%";
};

function prevImg() {
  current = (current - 1) % count;
  let leftIndex  = (current + 1 + count) % count;
  let centerIndex = current;
  let rightIndex = (current - 1) % count;
  for (let i = 0; i < count; i++) {
    sliderItems[i].classList.remove("left","center","right");
  };
  sliderItems[leftIndex].classList.add("left");
  sliderItems[centerIndex].classList.add("center");
  sliderItems[rightIndex].classList.add("right");
  let width = current * 100/(count-1);
  bar.style.width = width+"%";
};

setInterval(nextImg, duration*1000);