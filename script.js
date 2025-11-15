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


// // ===== PERFECT INFINITE CAROUSEL WITH CENTER ZOOM =====
// const track = document.querySelector('.photo-carousel');
// let items = Array.from(document.querySelectorAll('.photo-item'));

// const speed = 0.8;
// let x = 0;

// // duplicar para loop continuo
// items.forEach(el => track.appendChild(el.cloneNode(true)));
// items = Array.from(document.querySelectorAll('.photo-item'));

// const itemWidth = items[0].offsetWidth + 40;

// // --- CENTER DETECTION THROTTLED ---
// let lastCenterCheck = 0;

// function checkCenter(timestamp) {
//     if (timestamp - lastCenterCheck < 120) return; // throttling
//     lastCenterCheck = timestamp;

//     const center = window.innerWidth / 2;

//     let closest = null;
//     let minDist = Infinity;

//     items.forEach(item => {
//         const rect = item.getBoundingClientRect();
//         const itemCenter = rect.left + rect.width / 2;
//         const dist = Math.abs(center - itemCenter);
//         if (dist < minDist) {
//             minDist = dist;
//             closest = item;
//         }
//     });

//     items.forEach(i => i.classList.remove("center"));
//     if (closest) closest.classList.add("center");
// }

// function animate(timestamp) {
//     x -= speed;
//     track.style.transform = `translate3d(${x}px,0,0)`;

//     const first = items[0];
//     const rect = first.getBoundingClientRect();

//     if (rect.right < 0) {
//         track.appendChild(first);
//         items.push(items.shift());
//         x += itemWidth;
//     }

//     checkCenter(timestamp);

//     requestAnimationFrame(animate);
// }

// animate(0);


/////////////////////////////////




var swiper = new Swiper(".my-carousel", {
  effect: "coverflow",
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  grabCursor: true,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 150,
    modifier: 2,
    slideShadows: false
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: false
  },
  speed: 1500
});
