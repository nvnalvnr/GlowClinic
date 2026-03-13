document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);

  const category = params.get("category");

  const cards = document.querySelectorAll(".grid-treatment .card");

  if (!category) {
    return;
  }

  cards.forEach((card) => {
    const cardCategory = card.dataset.category;

    if (cardCategory !== category) {
      card.style.display = "none";
    }
  });
});
