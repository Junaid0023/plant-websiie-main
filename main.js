const testimonials = [
  {
    image: "asserts/testimonial 1.jpeg",
    name: "Junaid Ishaq",
    location: "Tamale, Asawaba",
    shortQuote: "Absolutely love my monstera!",
    fullQuote: "It arrived fresh and healthy, and the packaging was super eco-friendly. I’ll definitely order again."
  },
  {
    image: "asserts/testimonial 2.jpeg",
    name: "Ama Serwaa",
    location: "Kumasi, Adum",
    shortQuote: "My snake plant is thriving!",
    fullQuote: "I was surprised how vibrant it looked straight out of the box. Great service!"
  },
  {
    image: "asserts/testimonial 3.jpeg",
    name: "Kwame Boadu",
    location: "Accra, East Legon",
    shortQuote: "Super fast delivery.",
    fullQuote: "I ordered on Monday and received it by Wednesday! The plant was healthy and beautiful."
  },
  {
    image: "asserts/testimonial 4.jpeg",
    name: "Akosua Danso",
    location: "Cape Coast",
    shortQuote: "Great quality plants.",
    fullQuote: "The variety and quality were outstanding. I’ve recommended this shop to all my friends."
  },
  {
    image: "asserts/testimonial 1.jpeg",
    name: "Yaw Owusu",
    location: "Takoradi, Anaji",
    shortQuote: "Well-packaged and fresh.",
    fullQuote: "You can tell a lot of care goes into each order. I’m already planning my next purchase."
  }
];




const openMenu = document.querySelector('.open-menu')
const navLinks = document.querySelector('.nav-links')




openMenu.addEventListener('click', ()=>{
    const Isactive = navLinks.classList.toggle('active')
    openMenu.classList.toggle('fa-bars', !Isactive)
    openMenu.classList.toggle('fa-times', Isactive)

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
    index++;
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






// ====================toggle favourite================

// const favorite = document.querySelector('.favorite');

// favorite.addEventListener('click', () => {
//     favorite.classList.toggle('active');
//     console.log('clicked')
// });


 document.addEventListener("DOMContentLoaded", () => {
    const favorite = document.querySelector('.favorite');
    if (favorite) {
      favorite.addEventListener('click', () => {
        favorite.classList.toggle('fa-solid'); // switch between filled and outline
        favorite.classList.toggle('fa-regular');
        favorite.classList.toggle('active');
        console.log('clicked');
      });
    }
  });


// ===================TESTIMONIALS ======================>

    const imageEl = document.querySelector(".image")
    const nameEl = document.querySelector(".name")
    const locationEl = document.querySelector(".location")
    const shortQuoteEl = document.querySelector(".shortQuote")
    const fullQuoteEl = document.querySelector(".fullQuote")

    let currentIndex = 0

    const UpdateTestimonial = () => {
        const {image, name, location, shortQuote, fullQuote} = testimonials[currentIndex]
        imageEl.src = image
        nameEl.textContent = name
        locationEl.textContent = location
        shortQuoteEl.textContent = shortQuote
        fullQuoteEl.textContent = fullQuote
    }

    UpdateTestimonial()

    setInterval(()=> {
          currentIndex = (currentIndex + 1) % testimonials.length;
        UpdateTestimonial()
    },7000)


    //================END OF TESTIMONIALS ==================>