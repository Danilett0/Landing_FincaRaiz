window.addEventListener("load", function () {
  loadContent(document.querySelector("head"), "../components/head.html");
  loadContent(document.querySelector("header"), "../components/header.html");
  loadContent(document.querySelector("footer"), "../components/footer.html");
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