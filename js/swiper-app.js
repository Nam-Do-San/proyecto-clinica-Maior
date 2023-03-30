
// portada principal
var swiper = new Swiper(".swiper-index", {
    spaceBetween: 10,
    centeredSlides: true,
    effect: "fade",
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


// 
var swiper = new Swiper(".swiper-main", {
    spaceBetween: 30,
    effect: "fade",
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
});



var swiper = new Swiper(".swiper-laser", {
    spaceBetween: 30,
    effect: "fade",
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    // navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev",
    // },
    pagination: {
        el: ".swiper-pagination",
        clickable: false,
        dynamicBullets: true,
    },
});


// 
var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 3,
    spaceBetween: 0,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});