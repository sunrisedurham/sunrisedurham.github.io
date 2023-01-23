// To change the text of the current alert, edit the line below. Make sure the text is in ALL CAPS to comply with the style guide :)
let text = ``

var current_alert = `<div class="sunrise-alert">
    <div class="bg-celebratory-gradient-horizontal" style="display: flex">
        <h1 class="sunrise-dark text-headline" style="padding: 0.5em; margin-bottom: 0;">
            <ALERT TEXT HERE>
        </h1>
        <h1 class="sunrise-dark bi bi-x-square-fill alert-x color-transition-short" onclick="document.getElementsByClassName('sunrise-alert')[0].style.display = 'none';"></h1>
    </div>
</div>`
current_alert = current_alert.replace("<ALERT TEXT HERE>", text)
if (text != ``) {
    document.getElementById("current-alert").outerHTML = current_alert
}