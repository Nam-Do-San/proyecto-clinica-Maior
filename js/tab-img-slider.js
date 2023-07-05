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