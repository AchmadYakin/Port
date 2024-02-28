// Truncate
const contents = document.querySelectorAll(".content");
const readMores = document.querySelectorAll(".read-more");

readMores.forEach((readMore, index) => {
  readMore.addEventListener("click", function () {
    const content = contents[index];
    if (content.classList.contains("truncate")) {
      content.classList.remove("truncate");
      readMore.textContent = "Tutup";
      // Tambahkan kelas Tailwind untuk indentasi saat konten dibuka
      content.classList.add("indent-8"); // Ubah sesuai kebutuhan Anda
    } else {
      content.classList.add("truncate");
      readMore.textContent = "Baca lebih lanjut";
      // Hapus kelas Tailwind untuk indentasi saat konten disingkat
      content.classList.remove("indent-8");
    }
  });
});

// Navbar fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixednav = header.offsetTop;

  if (window.pageYOffset > fixednav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

// Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// Auto Play
window.onload = function () {
  var videoFrame = document.getElementById("videoFrame");
  videoFrame.removeAttribute("autoplay");
};

window.addEventListener("click", function (e) {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  }
});
