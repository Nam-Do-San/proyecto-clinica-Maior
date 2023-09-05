// ESTE ARCHIVO ES PARA LA ZONA DE INSTAGRAM, PERMITE MOSTRAR MAS FOTOS, SOLO ESTA EN EL INDEX

const btnMostrarMas = document.querySelector('#btn-mostrar-mas');
const divsOcultos = document.querySelectorAll('.contenedor-divs div:nth-child(n+10)');

let contador = 0;

btnMostrarMas.addEventListener('click', function() {
  for (let i = contador; i < contador + 6; i++) {
    if (divsOcultos[i]) {
      divsOcultos[i].style.display = 'block';
    }
  }
  contador += 6;
  if (contador >= divsOcultos.length) {
    btnMostrarMas.style.display = 'none';
  }
});






// tab windonw
function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
}