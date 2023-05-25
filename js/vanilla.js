// // tab windonw
// function openTab(evt, tabName) {
//     var i, tabcontent, tablinks;
//     tabcontent = document.getElementsByClassName("tabcontent");
//     for (i = 0; i < tabcontent.length; i++) {
//         tabcontent[i].style.display = "none";
//     }
//     tablinks = document.getElementsByClassName("tablinks");
//     for (i = 0; i < tablinks.length; i++) {
//         tablinks[i].className = tablinks[i].className.replace(" active", "");
//     }
//     document.getElementById(tabName).style.display = "block";
// }

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
  