// Menu
const capa = document.getElementById("capaOpacity");
const openMenu = document.querySelector(".buttonOpenMenu");
const closeMenu = document.querySelector(".buttonCloseMenu");
const containerMenu = document.querySelector(".containerMenuMobile");
const menuMobile = document.querySelector(".menuMobile");
const iconWhatsapp = document.querySelector(".whatsapp-icon");

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".menuMobile a");

  links.forEach((link) => {
    link.addEventListener("click", () => {
      // Remover la clase "active" de todos los elementos .menuMobile
      const menuMobiles = document.querySelectorAll(".menuMobile");
      menuMobiles.forEach((menuMobile) => {
        containerMenu.classList.remove("active");
        menuMobile.classList.remove("active");
        capa.classList.remove("active");
        openMenu.classList.remove("inactive");
        iconWhatsapp.classList.remove("inactive");
      });
    });
  });
});

openMenu.addEventListener("click", () => {
  containerMenu.classList.add("active");
  menuMobile.classList.add("active");
  capa.classList.add("active");
  openMenu.classList.add("inactive");
  iconWhatsapp.classList.add("inactive");
});

capa.addEventListener("click", () => {
  containerMenu.classList.remove("active");
  menuMobile.classList.remove("active");
  capa.classList.remove("active");
  openMenu.classList.remove("inactive");
  iconWhatsapp.classList.remove("inactive");
});

closeMenu.addEventListener("click", () => {
  containerMenu.classList.remove("active");
  menuMobile.classList.remove("active");
  capa.classList.remove("active");
  openMenu.classList.remove("inactive");
  iconWhatsapp.classList.remove("inactive");
});
