// Hiding preloader
window.addEventListener('load', () => {
    document.querySelector('.preloader').classList.add('hidePreloader');
    document.body.style.overflow = "visible";
});

// navbar toggle
const navBtn = document.querySelector('.navbar-toggler');
const navMenu = document.querySelector('.navbar-collapse');
navBtn.addEventListener('click', () => {
    navMenu.classList.toggle('toggleNav');
});




// stopping transition during resizing
let resizeTimer;
window.addEventListener('resize', () => {
    document.body.classList.add('resize-transition-stopper');
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove('resize-transition-stopper');
    }, 400);
});

// =========================
// NEW: Hero slider
// =========================

const swiper = new Swiper(".hero-slider",{

loop:true,

autoplay:{
delay:4000,
disableOnInteraction:false
},

effect:"fade",

pagination:{
el:".swiper-pagination",
clickable:true
}

});