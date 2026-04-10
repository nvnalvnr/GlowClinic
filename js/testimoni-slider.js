const testiSlider = document.getElementById("testimonialSlider");
const nextTesti = document.getElementById("nextTesti");
const prevTesti = document.getElementById("prevTesti");

const scrollTesti = 350;

nextTesti.addEventListener("click", () => {
  testiSlider.scrollLeft += scrollTesti;
});

prevTesti.addEventListener("click", () => {
  testiSlider.scrollLeft -= scrollTesti;
});