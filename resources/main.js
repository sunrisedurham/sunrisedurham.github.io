window.onload = function() {
    console.log("Loaded!")
    window.addEventListener('scroll', function() {
        document.body.style.setProperty("--scroll", (window.pageYOffset + window.visualViewport.height) / document.body.scrollHeight);
    })
    document.body.style.setProperty("--nav-height", window.getComputedStyle(document.getElementsByClassName("navbar")[0]).height);
    window.addEventListener('resize', function() {
        document.body.style.setProperty("--nav-height", window.getComputedStyle(document.getElementsByClassName("navbar")[0]).height);
    })
    var darkSchemeIcon = document.querySelector('#favicon-dark');
    var lightSchemeIcon = document.querySelector('#favicon-light');
    const lightModeMediaQuery = window.matchMedia('(prefers-color-scheme: light)');
    lightModeMediaQuery.addEventListener("change", (e) => {
        const lightModeOn = e.matches;
        if (lightModeOn) {
            darkSchemeIcon.remove()
        }
    });
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    darkModeMediaQuery.addEventListener("change", (e) => {
        const darkModeOn = e.matches;
        if (darkModeOn) {
            lightSchemeIcon.remove()
        }
    });
    if (window.matchMedia('(prefers-color-scheme: light)').matches) {
        var darkSchemeIcon = document.querySelector('#favicon-dark');
        darkSchemeIcon.remove()
    }
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        var lightSchemeIcon = document.querySelector('#favicon-light');
        lightSchemeIcon.remove()
    }
}