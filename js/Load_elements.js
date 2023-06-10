window.addEventListener("load", function () {
  loadContent(document.querySelector("head"), "./components/Head.html");
  loadContent(document.querySelector("header"), "./components/Header.html");
  loadContent(document.querySelector("footer"), "./components/Footer.html");
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
