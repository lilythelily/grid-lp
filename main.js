"use strict";

const menuPanel = document.querySelector(".menu-panel");
const hamburgerIcon = document.querySelector(".hamburger");
const overlay = document.querySelector('.overlay');

// === menu display toggle ===

hamburgerIcon.addEventListener("click", () => {
     menuPanel.classList.toggle("rightZero");
     hamburgerIcon.classList.toggle("close");
    overlay.classList.toggle('hide'); 
});
