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

    if (window.innerWidth < 700) {
        navbar.setAttribute("inert", "")
    } else {
        navbar.removeAttribute("inert")
    }
}


const navLinks = document.querySelectorAll("nav a")
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        closeSidebar()
    })
})


document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-link");

    function updateActiveLink() {
        const hash = window.location.hash; // "" if no hash
        let found = false;

        navLinks.forEach(link => {
            const linkTarget = link.getAttribute("href");

            if (hash && linkTarget === hash) {
                link.classList.add("active-link");
                found = true;
            } else {
                link.classList.remove("active-link");
            }
        });

        // If no hash match, highlight the home page link
        if (!found) {
            navLinks.forEach(link => {
                if (link.getAttribute("href") === "/index.html") {
                    link.classList.add("active-link");
                }
            });
        }
    }

    // Update on page load
    updateActiveLink();

    // Update when hash changes
    window.addEventListener("hashchange", updateActiveLink);
});



updateNavbar(media)