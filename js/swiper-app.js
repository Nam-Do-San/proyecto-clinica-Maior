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
        dynamicBullets:true,
    },
});
