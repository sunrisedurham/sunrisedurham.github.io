function importHTML(el) {
    function reqListener() {
        el.outerHTML = this.responseText;
    }
    var request = new XMLHttpRequest();
    request.addEventListener("load", reqListener);

    let url = el.getAttribute("data-url");
    request.open("GET", url);
    request.send();
    el.outerHTML = navbar;
}