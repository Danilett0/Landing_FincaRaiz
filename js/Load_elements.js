window.addEventListener("load", function () {
  loadContent(document.querySelector("head"), "Landing_FincaRaiz/components/head.html");
  loadContent(document.querySelector("header"), "Landing_FincaRaiz/components/header.html");
  loadContent(document.querySelector("footer"), "Landing_FincaRaiz/components/footer.html");
});

function loadContent(element, file) {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      element.innerHTML = this.responseText;
    }
  };
  xhr.open("GET", file, true);
  xhr.send();
}