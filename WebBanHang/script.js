const slide = document.querySelectorAll(".slider-content-items");
const prev = document.querySelector(".fa-chevron-left");
const next = document.querySelector(".fa-chevron-right");
let index = 0;

next.addEventListener("click",function () {
    slide[index].classList.remove("active")
    index = (index + 1) % slide.length
    slide[index].classList.add("active")
})

prev.addEventListener("click",function () {
    slide[index].classList.remove("active")
    index = (index - 1 + slide.length) % slide.length
    slide[index].classList.add("active")
})