console.log("JS jalan");

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");

  cards.forEach((card, index) => {
    card.addEventListener("click", () => {
      window.location.href = "detail.html?id=" + (index + 1);
    });
  });
});
