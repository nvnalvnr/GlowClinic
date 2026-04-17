const products = {
  "vitamin-c": {
    title: "Vitamin C Serum",
    description: "Serum pencerah yang membantu meratakan warna kulit.",
    price: "Rp 150.000",
    image: "https://i.pinimg.com/736x/4a/59/38/4a5938258367d055ee58a0bdacf04108.jpg",
  },
  sunscreen: {
    title: "SPF 50 Sunscreen",
    description: "Perlindungan maksimal dari sinar UV.",
    price: "Rp 120.000",
    image: "https://images.unsplash.com/photo-1556228578-8d89f5a7a5a6?w=600",
  },
};

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  const item = products[id];

  if (!item) {
    document.body.innerHTML = "<h2>Produk tidak ditemukan</h2>";
    return;
  }

  document.getElementById("title").textContent = item.title;
  document.getElementById("description").textContent = item.description;
  document.getElementById("price").textContent = item.price;
  document.getElementById("image").src = item.image;

  document.getElementById("cta").href =
    `https://wa.me/6281315099780?text=Saya ingin membeli ${item.title}`;

  // 🔥 INI DIA (TAMBAHKAN DI SINI)
  const breadcrumb = document.getElementById("breadcrumb");
  breadcrumb.innerHTML = `
    <a href="index.html">Beranda</a> /
    <a href="produk.html">Produk</a> /
    <span>${item.title}</span>
  `;
});
