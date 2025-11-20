const skillItems = document.querySelectorAll('.skill-item');

let duration = 1450; // number animation finishes slightly earlier
let steps = 100;
let interval = duration / steps;

skillItems.forEach(item => {
  let target = parseInt(item.dataset.percent);
  let valueEl = item.querySelector(".skill-value");
  let barEl = item.querySelector(".bar-fill");

  let current = 0;

  // FIX: delay bar fill to trigger CSS transition
  setTimeout(() => {
    barEl.style.width = target + "%";
  }, 10);

  let timer = setInterval(() => {
    current += target / steps;
    let value = Math.floor(current);
    if (value > target) value = target;

    valueEl.textContent = value + "%";

    if (value >= target) clearInterval(timer);

  }, interval);
});