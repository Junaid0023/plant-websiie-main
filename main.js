// hamburger menu

const openMenu = document.querySelector('.open-menu')
const navLinks = document.querySelector('.nav-links')
const closeMenu = document.querySelector('.close-menu');



openMenu.addEventListener('click', ()=>{
    navLinks.classList.toggle('active')

})


const searchBtn = document.querySelector('.searchBtn')
const searchContainer = document.querySelector('.input-mobile')
const mobileClose = document.querySelector('.mobilecloseMenu')

searchBtn.addEventListener('click', ()=>{
    IsActive = searchContainer.classList.toggle('active')

    searchBtn.classList.toggle('fa-magnifying-glass', !IsActive);
    searchBtn.classList.toggle('fa-times', IsActive);

   
})











const slides = document.querySelector(".hero-container");
const images = document.querySelectorAll(".image-container"); 
let index = 0; 
const totalSlides = images.length; 

function moveSlider() {
    slides.style.transform = `translateX(-${index * 100}vw)`; 
}

document.querySelector(".right-arrow").addEventListener("click", function () {
    index = index + 1; 
    if (index >= totalSlides) {
        index = 0; 
    }
    moveSlider();
});


document.querySelector(".left-arrow").addEventListener("click", function () {
    index = index - 1;
    if (index < 0) {
        index = totalSlides - 1;
    }
    moveSlider();
});


setInterval(function () {
    index = index + 1;
    if (index >= totalSlides) {
        index = 0; // Loop back to first image
    }
    moveSlider();
}, 4000);



const items = ['shoes', 'bags', 'phones', 'books']

console.log(items[0])