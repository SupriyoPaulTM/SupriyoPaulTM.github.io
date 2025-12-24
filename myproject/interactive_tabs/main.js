const sec = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach((e) => {
  e.addEventListener("click", () => {
    let target = e.dataset.link;
    navLinks.forEach((x) => {
      x.classList.remove("active");
    });
    sec.forEach((x) => {
      x.classList.remove("active");
    });
    e.classList.add("active");
    document.getElementById(target).classList.add("active");
    });
});

document.getElementById("about").classList.add("active");
navLinks.forEach((e) => {
  if (e.dataset.link === "about") {
    e.classList.add("active");
  };
});