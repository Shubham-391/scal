import 'flowbite';
import './style.css';
let view = document.querySelector(".view");
// navbar
function navbar() {
  view.classList.toggle("right-[0%]");
  document.querySelector("body").classList.toggle("overflow-hidden");
};

document.querySelector(".navIcon").addEventListener("click", navbar);
function navbar2() {
  view.classList.toggle("right-[0%]");
  document.querySelector("body").classList.remove("overflow-hidden");
};

document.querySelector(".navClose").addEventListener("click", navbar2);
document.querySelector(".home").addEventListener("click", navbar2);
document.querySelector(".about").addEventListener("click", navbar2);
document.querySelector(".choose").addEventListener("click", navbar2);
document.querySelector(".contact").addEventListener("click", navbar2);

$('.slider1').slick({
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: '.prev',
  nextArrow: '.next',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 1,
      }
    },
  ]
});

// back to top

let topIcon = document.getElementById("top");
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    topIcon.style.display = "flex";
  }
  else {
    topIcon.style.display = "none";
  }
});

function up() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

document.getElementById("top").addEventListener("click", up);

// preloader
const preloader = document.getElementById("preloader");
setTimeout(() => {
  document.getElementById("preloader").classList.add("hidden");
  document.body.classList.remove("overflow-hidden")
}, 2000);

