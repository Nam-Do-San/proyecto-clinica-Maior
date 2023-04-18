// archivo de js vanilla


////////////////////////////////////////
// navbar hidden 
////////////////////////////////////////





////////////////////////////////////////
// scroll hidden
////////////////////////////////////////








////////////////////////////////////////
// slider after and before
////////////////////////////////////////
const slider = document.getElementById('before-after-slider');
const before = document.getElementById('before-image');
const beforeImage = before.getElementsByTagName('img')[0];
const resizer = document.querySelector('#resizer');

let active = false;

//Sort overflow out for Overlay Image
document.addEventListener("DOMContentLoaded", function () {
    let width = slider.offsetWidth;
    console.log(width);
    beforeImage.style.width = width + 'px';
});

//Adjust width of image on resize 
window.addEventListener('resize', function () {
    let width = slider.offsetWidth;
    console.log(width);
    beforeImage.style.width = width + 'px';
})

resizer.addEventListener('mousedown', function () {
    active = true;
    resizer.classList.add('resize');

});

document.body.addEventListener('mouseup', function () {
    active = false;
    resizer.classList.remove('resize');
});

document.body.addEventListener('mouseleave', function () {
    active = false;
    resizer.classList.remove('resize');
});

document.body.addEventListener('mousemove', function (e) {
    if (!active) return;
    let x = e.pageX;
    x -= slider.getBoundingClientRect().left;
    slideIt(x);
    pauseEvent(e);
});

resizer.addEventListener('touchstart', function () {
    active = true;
    resizer.classList.add('resize');
});

document.body.addEventListener('touchend', function () {
    active = false;
    resizer.classList.remove('resize');
});

document.body.addEventListener('touchcancel', function () {
    active = false;
    resizer.classList.remove('resize');
});

//calculation for dragging on touch devices
document.body.addEventListener('touchmove', function (e) {
    if (!active) return;
    let x;

    let i;
    for (i = 0; i < e.changedTouches.length; i++) {
        x = e.changedTouches[i].pageX;
    }

    x -= slider.getBoundingClientRect().left;
    slideIt(x);
    pauseEvent(e);
});

function slideIt(x) {
    let transform = Math.max(0, (Math.min(x, slider.offsetWidth)));
    before.style.width = transform + "px";
    resizer.style.left = transform - 0 + "px";
}

//stop divs being selected.
function pauseEvent(e) {
    if (e.stopPropagation) e.stopPropagation();
    if (e.preventDefault) e.preventDefault();
    e.cancelBubble = true;
    e.returnValue = false;
    return false;
}


/////////////////////////////////////////////////////
// SWAP IMG TO TRATAMIENTOS 
////////////////////////////////////////////////////
let depil_btn = document.getElementById('btn-depilacion');
let botox_btn = document.getElementById('btn-toxina');
let hydra_btn = document.getElementById('btn-hydrafacial');

depil_btn.addEventListener('click', function (params) {

    document.getElementById('matrix-after').src="img/bg-services/depilacion-laser/bg-after.jpg";
    document.getElementById('matrix-before').src="img/bg-services/depilacion-laser/bg-before.jpg";
    
})

hydra_btn.addEventListener('click', function (params) {

        document.getElementById('matrix-after').src="img/bg-services/hydrafacial/bg-hydrafacial-after.jpg";
        document.getElementById('matrix-before').src="img/bg-services/hydrafacial/bg-hydrafacial-before.jpg";
        
})

botox_btn.addEventListener('click', function (params) {

    document.getElementById('matrix-after').src="img/bg-services/toxina-botulinica/antes-botox.jpg";
    document.getElementById('matrix-before').src="img/bg-services/toxina-botulinica/despues-botox.jpg";
    
})








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
    })
})

function removeOpen(index1) {
    accordionContent.forEach((item2, index2) => {
        if (index1 != index2) {
            item2.classList.remove("open");

            let des = item2.querySelector(".description");
            des.style.height = "0px";
            item2.querySelector("i").classList.replace("bx-minus", "bx-plus");
        }
    })
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
    modal.classList.remove('invisible');
    modalImg.src = src;
}

// this function is called when the close button is clicked
function closeModal() {
    modal.classList.add('invisible');
}

