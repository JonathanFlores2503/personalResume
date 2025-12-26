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




//--------------------------------------------------
// PROJECTS DATA — Add as many as you want
//--------------------------------------------------

const projects = [
    {
        title: "TransLowNet",
        img: "img/img_1.jpg",
        description: "Here goes the detailed description for TransLowNet... Write a long text to see how the layout responds. This is placeholder content.",
        links: [
            {text: "Video", url: "#"},
            {text: "Paper", url: "#"},
            {text: "Official Page", url: "#"}
        ]
    },
    {
        title: "SOMN-IA",
        img: "img/img_2.jpg",
        description: "Here goes the detailed description for SOMN-IA... Long description placeholder to check layout.",
        links: [
            {text: "Video", url: "#"},
            {text: "Website", url: "#"}
        ]
    },
    {
        title: "PJ-System",
        img: "img/img_3.jpg",
        description: "Here goes the detailed description for PJ-System.",
        links: [
            {text: "Video", url: "#"},
            {text: "Press Release", url: "#"},
            {text: "Prototype", url: "#"}
        ]
    },
    {
        title: "Project 01",
        img: "img/img_4.jpg",
        description: "Generic description for project 01.",
        links: [{text: "More Info", url: "#"}]
    },
    {
        title: "Project 02",
        img: "img/img_5.jpg",
        description: "Generic description for project 02.",
        links: [{text: "More Info", url: "#"}]
    },
    {
        title: "Project 03",
        img: "img/img_6.jpg",
        description: "Generic description for project 03.",
        links: [{text: "More Info", url: "#"}]
    }
];

//--------------------------------------------------
// CAROUSEL LOGIC
//--------------------------------------------------

let currentIndex = 0;

const carousel = document.getElementById("projectCarousel");

function renderCarousel() {
    carousel.innerHTML = "";

    // L + C + R = 3 cards visible
    const leftIndex = (currentIndex - 1 + projects.length) % projects.length;
    const rightIndex = (currentIndex + 1) % projects.length;

    const visible = [leftIndex, currentIndex, rightIndex];

    visible.forEach((i, idx) => {
        const p = projects[i];

        const card = document.createElement("div");
        card.className = "project-card";
        if (i === currentIndex) card.classList.add("active");

        card.innerHTML = `
            <img class="project-image" src="${p.img}">
            <div class="project-content">
                <h2>${p.title}</h2>
                <p>${p.description}</p>
                <div class="project-links">
                    ${p.links.map(l => `<a href="${l.url}" target="_blank">${l.text}</a>`).join("")}
                </div>
            </div>
        `;

        carousel.appendChild(card);
    });
}

document.getElementById("nextBtn").onclick = () => {
    currentIndex = (currentIndex + 1) % projects.length;
    renderCarousel();
};

document.getElementById("prevBtn").onclick = () => {
    currentIndex = (currentIndex - 1 + projects.length) % projects.length;
    renderCarousel();
};

// Inicializar
renderCarousel();





const track = document.getElementById("logosTrack");
const originalLogos = Array.from(track.children);

// 1️⃣ Clonar logos hasta cubrir 2× viewport (controlado)
function fillTrackSafely() {
  const viewportWidth = track.parentElement.offsetWidth;
  let trackWidth = track.scrollWidth;

  let i = 0;
  while (trackWidth < viewportWidth * 2 && i < 10) {
    originalLogos.forEach(logo => {
      const clone = logo.cloneNode(true);
      track.appendChild(clone);
    });
    trackWidth = track.scrollWidth;
    i++;
  }
}

fillTrackSafely();

// 2️⃣ Animación infinita real
let x = 0;
const speed = 0.5;

function animate() {
  x -= speed;

  const resetPoint = track.scrollWidth / 2;
  if (Math.abs(x) >= resetPoint) {
    x = 0;
  }

  track.style.transform = `translateX(${x}px)`;
  requestAnimationFrame(animate);
}

animate();

