const overlay = document.getElementById("overlayMenu");
const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeMenu");
const panel = document.querySelector(".overlay-panel");

// Abrir
menuBtn.addEventListener("click", () => {
    overlay.classList.add("open");
});

// Cerrar con X
closeBtn.addEventListener("click", () => {
    overlay.classList.remove("open");
});

// Cerrar si hago click fuera del panel
overlay.addEventListener("click", (e) => {
    if (!panel.contains(e.target)) {
        overlay.classList.remove("open");
    }
});
