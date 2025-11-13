const menuBtn = document.getElementById("menuBtn");
const closeMenu = document.getElementById("closeMenu");
const overlay = document.getElementById("overlayMenu");

menuBtn.onclick = () => {
    overlay.style.width = "15%";
};

closeMenu.onclick = () => {
    overlay.style.width = "0%";
};
