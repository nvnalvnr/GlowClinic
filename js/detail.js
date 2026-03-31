const data = {
  hydrafacial: {
    title: "Hydra Facial",
    category: "Facial",
    description: "Deep cleansing dan hidrasi intens untuk kulit sehat.",
    price: "Rp 350.000",
    duration: "45 Menit",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600",
  },

  laser1: {
    title: "Pigmentation Laser",
    category: "Laser",
    description:
      "Mengatasi hiperpigmentasi, noda hitam, dan meratakan warna kulit.",
    price: "Rp 1.010.000",
    duration: "30 Menit",
    image: "https://images.unsplash.com/photo-1588776814546-ec7e1b0f3d3a?w=600",
  },
};

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const item = data[id];

document.getElementById("title").textContent = item.title;
document.getElementById("description").textContent = item.description;
document.getElementById("price").textContent = item.price;
document.getElementById("duration").textContent = item.duration;
document.getElementById("image").src = item.image;

// BREADCRUMB
document.getElementById("breadcrumb").innerHTML = `
<a href="index.html">Beranda</a> / 
<a href="treatment.html">Semua Treatment</a> / 
<a href="treatment.html?category=${item.category.toLowerCase()}">${item.category}</a> / 
<span>${item.title}</span>
`;

document.getElementById("cta").href =
  `https://wa.me/6281315099780?text=Saya ingin booking ${item.title}`;
