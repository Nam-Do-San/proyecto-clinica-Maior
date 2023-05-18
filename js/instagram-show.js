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