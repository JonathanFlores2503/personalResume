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



// ===== CAROUSEL =====
const slides = document.querySelectorAll(".carousel-img");
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((img, i) => {
        img.classList.remove("active");
        if (i === index) img.classList.add("active");
    });
}

document.querySelector(".next").addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
});

document.querySelector(".prev").addEventListener("click", () => {
    currentSlide =
        (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
});

// Auto cambio cada 4s
setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}, 4000);
