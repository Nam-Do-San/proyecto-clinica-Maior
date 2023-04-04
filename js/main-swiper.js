// page index 

// resultados reales





//
var swiper = new Swiper(".swiper-por-one", {
    slidesPerView: 1,
    spaceBetween:0,
    loop: true,
    effect: "fade",
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    // breakpoints: {
    //     640: {
    //         slidesPerView: 1,
    //         spaceBetween: 20,
    //     },
    //     768: {
    //         slidesPerView: 2,
    //         spaceBetween: 40,
    //     },
    //     1024: {
    //         slidesPerView: 5,
    //         spaceBetween: 25,
    //     },
    // },
});





// testimoniales
var swiper = new Swiper(".swiper-3", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
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


// zonas de depilación
var swiper = new Swiper(".swiper-por-5", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: true,
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
        768: {
            slidesPerView: 5,
            spaceBetween: 25,
        },
    },
});