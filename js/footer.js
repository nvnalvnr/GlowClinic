const footer = `
<footer class="footer">
  <div class="footer-container">

    <div class="footer-col">
      <h2 class="logo">Glow Clinic</h2>
      <p class="tagline">Healthy Skin, Happy Life ✨</p>

      <div class="footer-info">
        <p><i class="fas fa-map-marker-alt"></i> Sukarame, Indonesia</p>
        <p><i class="fas fa-envelope"></i> glowclinic@gmail.com</p>
        <p><i class="fas fa-phone"></i> 0812-3456-7890</p>
      </div>
    </div>

    <div class="footer-col">
      <h3>Menu</h3>
      <a href="index.html">Beranda</a>
      <a href="treatment.html">Treatment</a>
      <a href="produk.html">Produk</a>
      <a href="contact.html">Kontak</a>
    </div>

    <div class="footer-col">
      <h3>Follow Us</h3>
      <div class="social-icons">
        <i class="fab fa-facebook"></i>
        <i class="fab fa-instagram"></i>
        <i class="fab fa-youtube"></i>
        <i class="fab fa-tiktok"></i>
      </div>
    </div>

  </div>

  <div class="footer-bottom">
    <p>© 2026 Glow Clinic. All Rights Reserved.</p>
  </div>
</footer>
`;

if (!document.querySelector(".footer")) {
  document.body.insertAdjacentHTML("beforeend", footer);
}
