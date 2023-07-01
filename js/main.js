// archivo de js vanilla

////////////////////////////////////////
// navbar hidden
////////////////////////////////////////
let header = document.getElementById("header");
let sale = document.getElementById("sale");

// scroll var
const scroll_down = document.getElementById("scroll-down");

window.addEventListener("scroll", function (params) {
    // si scroll < 100 - mostrar sale
    if (window.scrollY < 100) {
        sale.classList.remove("hidden");
        // header.classList.remove('md:bg-white');
    } else {
        sale.classList.add("hidden");
        // header.classList.add('md:bg-white');
    }
});

////////////////////////////////////////
// BUTTON TO OPEN AND CLOSE NAV MENU
////////////////////////////////////////
const btn_menu = document.getElementById("btn-menu");
let open = document.getElementById("open");
let close = document.getElementById("close");
const menu_nav = document.getElementById("menu-nav");

btn_menu.addEventListener("click", function (params) {
    open.classList.toggle("hidden");
    menu_nav.classList.toggle("hidden");

    close.classList.toggle("hidden");
    menu_nav.classList.toggle("block");
});

// /////////////////////////////////////////
// botton up

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");
    const btn_whatsapp = document.getElementById("btn-whatsapp");

    if (document.documentElement.scrollTop > 800) {
        btn_whatsapp.style.display = "block";
        scrollToTopBtn.style.display = "block";
    } else {
        btn_whatsapp.style.display = "none";
        scrollToTopBtn.style.display = "none";
    }
}

function scrollToTop() {
    document.documentElement.scrollTop = 0;
}

////////////////////////////////////////
// accordion
////////////////////////////////////////
const accordionContent = document.querySelectorAll(".accordion-content");
accordionContent.forEach((item, index) => {
    let header = item.querySelector(".faq");
    header.addEventListener("click", () => {
        item.classList.toggle("open");

        let description = item.querySelector(".description");
        if (item.classList.contains("open")) {
            description.style.height = `${description.scrollHeight}px`; //scrollHeight property returns the height of an element including padding , but excluding borders, scrollbar or margin
            item.querySelector("i").classList.replace("bx-plus", "bx-minus");
        } else {
            description.style.height = "0px";
            item.querySelector("i").classList.replace("bx-minus", "bx-plus");
        }
        removeOpen(index); //calling the funtion and also passing the index number of the clicked header
    });
});

function removeOpen(index1) {
    accordionContent.forEach((item2, index2) => {
        if (index1 != index2) {
            item2.classList.remove("open");

            let des = item2.querySelector(".description");
            des.style.height = "0px";
            item2.querySelector("i").classList.replace("bx-minus", "bx-plus");
        }
    });
}

////////////////////////////////////////
// active modal
////////////////////////////////////////
// Get the modal by id
var modal = document.getElementById("modal");

// Get the modal image tag
var modalImg = document.getElementById("modal-img");

// this function is called when a small image is clicked
function showModal(src) {
    modal.classList.remove("invisible");
    modalImg.src = src;
}

// this function is called when the close button is clicked
function closeModal() {
    modal.classList.add("invisible");
}
