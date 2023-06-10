window.addEventListener("load", function () {
  setTimeout(function () {
    new WOW().init();
    let EstadoMenu = "cerrado";
    const elements = {
      cuerpo: document,
      linea1: document.getElementById("ln1"),
      linea2: document.getElementById("ln2"),
      linea3: document.getElementById("ln3"),
      menu: document.getElementById("menuh"),
      desplegable: document.getElementById("desplegable"),
    };

    const openMenu = () => {
      elements.desplegable.style.left = "0";
    };

    const closeMenu = () => {
      elements.desplegable.style.left = "-70vw";
    };

    elements.menu.addEventListener("click", function () {
      elements.desplegable.style.display = "flex";
      setTimeout(() => {
        if (EstadoMenu === "cerrado") {
          openMenu();
          EstadoMenu = "abierto";
        } else {
          closeMenu();
          EstadoMenu = "cerrado";
        }
      }, 200);
    });

    window.addEventListener('scroll', function() {

      closeMenu();
  });
  }, 1000);
});
