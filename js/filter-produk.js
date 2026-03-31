document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);

  const category = params.get("category");

  const products = document.querySelectorAll(".grid-produk .product-card");

  if (!category) return;

  products.forEach((product) => {
    const productCategory = product.dataset.category;

    if (productCategory !== category) {
      product.style.display = "none";
    }
  });
});