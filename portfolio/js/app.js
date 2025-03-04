const navbar = document.getElementById("navbar")
const openButton = document.getElementById("open-sidebar-button")

const media = window.matchMedia("(width < 700px)")

media.addEventListener("change", (e) => updateNavbar(e))

function updateNavbar(e){
    const isMobile = e.matches
    if(isMobile){
        navbar.setAttribute("inert", "")
    }
    else{
        navbar.removeAttribute("inert")
    }
}

function openSidebar(){
    navbar.classList.add("show")
    openButton.setAttribute("aria-expanded", "true")
    navbar.removeAttribute("inert")
}

function closeSidebar(){
    navbar.classList.remove("show")
    openButton.setAttribute("aria-expanded", "false")
    navbar.setAttribute("inert", "")
}

const navLinks = document.querySelectorAll("nav a")
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        closeSidebar()
    })
})


document.addEventListener("DOMContentLoaded", function () {
    let currentPage = window.location.pathname;

    // Normalize URL paths:
    if (currentPage.endsWith("/")) {
        currentPage += "index.html"; // Treat "/cv/" as "/cv/index.html"
    }

    document.querySelectorAll(".nav-link").forEach(link => {
        let linkPath = new URL(link.href, window.location.origin).pathname;

        if (linkPath === currentPage) {
            link.classList.add("active-link");
        }
    });
});

updateNavbar(media)