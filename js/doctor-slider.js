const slider = document.getElementById("doctorSlider");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

const scrollAmount = 350;

nextBtn.addEventListener("click", () => {
  slider.scrollLeft += scrollAmount;
});

prevBtn.addEventListener("click", () => {
  slider.scrollLeft -= scrollAmount;
});
