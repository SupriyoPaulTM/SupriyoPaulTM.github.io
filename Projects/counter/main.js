const myBox = document.querySelectorAll(".box");
myBox.forEach(box => {
  box.addEventListener("mouseover", function() {
    let myElement = box.querySelector(".count");
    let count = parseInt(myElement.dataset.count);
    let n = 0;
    let counter = setInterval(() => {
      n++;
      myElement.textContent = n;
      if (n===count) {
        clearInterval(counter);
      };
    }, 1000/count);
  });
});