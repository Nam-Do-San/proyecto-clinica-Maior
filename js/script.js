window.onload = function() {
  var menuItems = document.querySelectorAll("#menu .has-submenu > a");

  for (var i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener("click", function(e) {
      e.preventDefault();
      var submenu = this.nextElementSibling;
      var isActive = this.parentNode.classList.contains("active");

      // Ocultar todos los submenús
      var submenus = document.querySelectorAll(".submenu");
      for (var j = 0; j < submenus.length; j++) {
        submenus[j].style.display = "none";
        submenus[j].parentNode.classList.remove("active");
      }

      // Mostrar el submenú actual
      if (!isActive) {
        submenu.style.display = "block";
        this.parentNode.classList.add("active");
      }
    });
  }
};
