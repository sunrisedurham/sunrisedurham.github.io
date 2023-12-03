let navbar = `<nav class="navbar navbar-expand-lg bg-sunrise-dark-overlay">
<div class="container-fluid">
    <button class="navbar-toggler navbar-toggler-sunrise-yellow" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle the navigation bar">
        <span class="navbar-toggler-icon big-navbar-toggler-icon sunrise-yellow-navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
                <a class="btn btn-outline-sunrise-red m-1" href="index.html" id="index">
                    Home
                </a>
            </li>
            
            <li class="nav-item">
                <a class="btn btn-outline-sunrise-red m-1" href="actions.html" id="actions">
                    Recent Actions
                </a>
            </li>
            <li class="nav-item">
                <a class="btn btn-outline-sunrise-red m-1" href="upcoming-actions.html" id="upcoming-actions">
                    Upcoming Actions
                </a>
            </li>
            <li class="nav-item">
                <a class="btn btn-outline-sunrise-red m-1" href="about.html" id="about">
                    About The Hub
                </a>
            </li>
        </ul>
    </div>
</div>
</nav>`
let page = document.getElementById("navbar").getAttribute("data-page")
document.getElementById("navbar").outerHTML = navbar
document.getElementById(page).classList.add("active")

/*<li class="nav-item dropdown">
                <button class="btn btn-outline-sunrise-red m-1" id="campaignDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                    Campaigns
                </button>
                <ul class="dropdown-menu outline-sunrise-yellow bg-sunrise-dark" aria-labelledby="campaignDropdown">
                    <li>
                        <a class="dropdown-item-sunrise-red" href="campaigns/good_jobs_for_all.html">Good Jobs For All</a>
                        <a class="dropdown-item-sunrise-red" href="campaigns/duke_energy.html">Duke Energy</a>
                        <a class="dropdown-item-sunrise-red" href="campaigns/local_politics.html">Local Politics</a>
                        <a class="dropdown-item-sunrise-red" href="campaigns/housing_climate_justice.html">Housing & Climate Justice</a>
                    </li>
                </ul>
            </li>*/
