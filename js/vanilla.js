// ESTE ARCHIVO ES PARA CAMBIAR RECOMENDACIONES DE LAS ZONAS DE DEPILACIÓN LASER (zonas de depilación)

function openTab(event, tabName) {
    var i, tabContent, tab;
  
    tabContent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabContent.length; i++) {
      tabContent[i].style.display = "none";
    }
  
    tab = document.getElementsByClassName("tab");
    for (i = 0; i < tab.length; i++) {
      tab[i].className = tab[i].className.replace("active-tab", "");
    }
  
    document.getElementById(tabName).style.display = "block";
    event.currentTarget.className += " active-tab";
  }
  