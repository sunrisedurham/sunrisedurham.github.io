function action(el) {
    var action = `<div class="container-fluid rounded-3 my-2 bg-sunrise-mint outline-sunrise-yellow" style="border-width: 3px; border-style: solid;">
    <h2 class="h2 sunrise-red text-headline my-1">
        <INSERT TITLE HERE>
    </h2>
    <h3 class="h3 sunrise-orange text">
        <INSERT DATE HERE>
    </h3>
    <p class="sunrise-dark text mb-0">
        <INSERT DESCRIPTION HERE>
    </p>
    <a href="<INSERT URL HERE>" target="_blank" rel="noopener noreferrer"><button class="btn btn-sunrise-purple my-2">Sign up here!</button></a>
    </div>`

    let title = el.getAttribute("data-title")
    let date = el.getAttribute("data-date")
    let description = el.getAttribute("data-description")
    let url = el.getAttribute("data-url")
    action = action.replace("<INSERT TITLE HERE>", title)
    action = action.replace("<INSERT DATE HERE>", date)
    action = action.replace("<INSERT DESCRIPTION HERE>", description)
    action = action.replace("<INSERT URL HERE>", url)
    el.outerHTML = action
}