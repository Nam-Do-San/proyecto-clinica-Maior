// hidden and show with scroll bg header

let header = document.getElementById('header');
let sale = document.getElementById('sale');

// scroll var 
const scroll_down = document.getElementById('scroll-down');

window.addEventListener('scroll', function (params) {
    // if (prevY > window.scrollY){
    //     console.log('subiendo');
    //     // sale.classList.remove('hidden');
    //     // solo aplica bg-black en tamaños - md ipad
    //     // header.classList.remove('md:bg-black'); 
    // }else{
    //     console.log('bajando')
    //     sale.classList.add('hidden');
    //     header.classList.add('md:bg-black')
    // }

    // si scroll < 100 - mostrar sale
    if (window.scrollY < 100) {
        sale.classList.remove('hidden');
        header.classList.remove('md:bg-white');
    }
    else {
        sale.classList.add('hidden');
        header.classList.add('md:bg-white');
    }

    // show arrow show scroll
    // if (window.scrollY > 1000) {
    //     scroll_down.classList.remove('hidden');
    // }
    // else{
    //     scroll_down.classList.add('hidden');
    // }
})

// button to open and close nav menu
const btn_menu = document.getElementById('btn-menu');
let open = document.getElementById('open');
let close = document.getElementById('close');

const menu_nav = document.getElementById('menu-nav');

btn_menu.addEventListener('click', function (params) {
    open.classList.toggle('hidden');
    menu_nav.classList.toggle('hidden');

    close.classList.toggle('hidden');
    menu_nav.classList.toggle('block');
})





// portada principal
// var swiper = new Swiper(".swiper-index", {
//     spaceBetween: 10,
//     centeredSlides: true,
//     loop: true,
//     autoplay: {
//         delay: 5000,
//         disableOnInteraction: false,
//     },
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     },
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
// });

// equipo medico
var swiper = new Swiper(".mySwiper-medico", {
    spaceBetween: 0,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    // navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev",
    // },
});

// testimoniales

var swiper = new Swiper(".swiper-testimonio", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 25,
        },
    },
});
