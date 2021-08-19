window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    console.log(window.scrollY);
    header.classList.toggle("sticky", window.scrollY > 0);
})