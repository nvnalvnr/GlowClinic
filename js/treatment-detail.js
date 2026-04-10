const data = {
  hydrafacial: {
    title: "Hydra Facial",
    category: "Facial",
    description:
      "Hydra Facial adalah perawatan wajah modern yang menggabungkan proses cleansing, exfoliation, extraction, dan hydration dalam satu sesi. Treatment ini membantu membersihkan pori-pori secara mendalam, mengangkat sel kulit mati, serta memberikan hidrasi intensif menggunakan serum khusus. Cocok untuk semua jenis kulit, termasuk kulit kusam dan dehidrasi, sehingga wajah tampak lebih segar, halus, dan bercahaya setelah treatment.",
    price: "Rp 350.000",
    duration: "45 Menit",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600",
  },

  laser1: {
    title: "Pigmentation Laser",
    category: "Laser",
    description:
      "Pigmentation Laser menggunakan teknologi Q-switched Nd:YAG yang efektif untuk mengatasi berbagai masalah hiperpigmentasi seperti melasma, freckles, bintik penuaan, serta bekas jerawat. Treatment ini bekerja dengan menargetkan pigmen berlebih di dalam kulit tanpa merusak jaringan sekitarnya. Selain membantu meratakan warna kulit, perawatan ini juga merangsang regenerasi sel kulit sehingga wajah tampak lebih cerah, bersih, dan sehat. Prosedur ini relatif cepat dengan downtime minimal, sehingga cocok untuk Anda yang menginginkan hasil optimal tanpa mengganggu aktivitas sehari-hari.",
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