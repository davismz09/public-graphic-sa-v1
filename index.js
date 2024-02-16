// Menu
const capa = document.getElementById("capaOpacity");
const openMenu = document.querySelector(".buttonOpenMenu");
const closeMenu = document.querySelector(".buttonCloseMenu");
const containerMenu = document.querySelector(".containerMenuMobile");
const menuMobile = document.querySelector(".menuMobile");
const iconWhatsapp = document.querySelector(".whatsapp-icon");

// Función para controlar el menú móvil
function toggleMenu() {
  containerMenu.classList.toggle("active");
  menuMobile.classList.toggle("active");
  capa.classList.toggle("active");
  openMenu.classList.toggle("inactive");
  iconWhatsapp.classList.toggle("inactive");
  closeMenu.classList.toggle("active");
  closeMenu.classList.toggle("inactive");
}

// Función para cerrar el menú al hacer clic en un enlace
function closeMenuOnClick() {
  const menuMobiles = document.querySelectorAll(".menuMobile");
  menuMobiles.forEach((menuMobile) => {
    containerMenu.classList.remove("active");
    menuMobile.classList.remove("active");
    capa.classList.remove("active");
    openMenu.classList.remove("inactive");
    iconWhatsapp.classList.remove("inactive");
    closeMenu.classList.remove("active");
    closeMenu.classList.add("inactive");
  });
}

// Evento para hacer scroll suave al hacer clic en un enlace interno
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
    closeMenuOnClick();
  });
});

// Eventos para abrir y cerrar el menú
openMenu.addEventListener("click", toggleMenu);
closeMenu.addEventListener("click", toggleMenu);
capa.addEventListener("click", toggleMenu);
