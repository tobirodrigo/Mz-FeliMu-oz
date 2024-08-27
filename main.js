const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 30,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    //responsive
    brakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerview: 2
        },
        1024: {
            slidesPerview: 3
        }
    }
  });

// Seleccionamos el header
const header = document.querySelector("header");

// Escuchamos el evento de scroll
window.addEventListener("scroll", function(){
    // Cuando se hace scroll más allá de 80 píxeles, se añade la clase "sticky" al header
    header.classList.toggle("sticky", window.scrollY > 80);
});

document.addEventListener('DOMContentLoaded', function() {
    $('#exampleModal2').modal('show');
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};
