const data = [
  // FACIAL
  {
    nama: "Hydra Facial",
    gambar: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600",
    deskripsi: "Deep cleansing dan hidrasi intens untuk kulit sehat.",
    harga: "Rp 350.000"
  },
  {
    nama: "Brightening Facial",
    gambar: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=600",
    deskripsi: "Mencerahkan wajah kusam dan meratakan warna kulit.",
    harga: "Rp 300.000"
  },
  {
    nama: "Acne Facial",
    gambar: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=600",
    deskripsi: "Mengatasi jerawat dan mengontrol minyak berlebih.",
    harga: "Rp 320.000"
  },

  // PEELING
  {
    nama: "Chemical Peeling",
    gambar: "https://images.unsplash.com/photo-1737215398544-94db22a53a01?w=600",
    deskripsi: "Mengangkat sel kulit mati dan mempercepat regenerasi.",
    harga: "Rp 250.000"
  },
  {
    nama: "Glow Peeling",
    gambar: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600",
    deskripsi: "Membuat kulit tampak lebih cerah dan halus.",
    harga: "Rp 280.000"
  },
  {
    nama: "Mild Peeling",
    gambar: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600",
    deskripsi: "Peeling ringan cocok untuk kulit sensitif.",
    harga: "Rp 220.000"
  },

  // LASER
  {
    nama: "Laser Brightening",
    gambar: "https://plus.unsplash.com/premium_photo-1663039841668-5638c2938153?w=600",
    deskripsi: "Mengurangi noda hitam dan mencerahkan wajah.",
    harga: "Rp 500.000"
  },
  {
    nama: "Acne Laser",
    gambar: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=600",
    deskripsi: "Membantu mengatasi jerawat aktif secara efektif.",
    harga: "Rp 450.000"
  },
  {
    nama: "Rejuvenation Laser",
    gambar: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600",
    deskripsi: "Meremajakan kulit dan mengurangi tanda penuaan.",
    harga: "Rp 600.000"
  },

  // BODYCARE
  {
    nama: "Body Spa",
    gambar: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600",
    deskripsi: "Relaksasi tubuh dengan perawatan spa premium.",
    harga: "Rp 300.000"
  },
  {
    nama: "Body Scrub",
    gambar: "https://images.unsplash.com/photo-1591343395082-e120087004b4?w=600",
    deskripsi: "Mengangkat sel kulit mati dan melembutkan kulit.",
    harga: "Rp 250.000"
  },
  {
    nama: "Body Whitening",
    gambar: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600",
    deskripsi: "Mencerahkan kulit tubuh secara merata.",
    harga: "Rp 400.000"
  }
];

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const item = data[id - 1];

document.getElementById("nama").innerText = item.nama;
document.getElementById("gambar").src = item.gambar;
document.getElementById("deskripsi").innerText = item.deskripsi;
document.getElementById("harga").innerText = item.harga;
