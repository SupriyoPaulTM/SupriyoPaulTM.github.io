let backToTop = document.getElementById("b2t-btn");
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
backToTop.addEventListener("click", topFunction);