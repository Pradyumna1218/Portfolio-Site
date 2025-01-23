var links = document.getElementsByClassName("links");
var contents = document.getElementsByClassName("contents");

function opentab(name) {
    for (let link of links) {
        link.classList.remove("activelink");
    }
    for (let content of contents) {
        content.classList.remove("activecontent");
    }

    document.querySelector(`.links[onclick="opentab('${name}')"]`).classList.add("activelink");
    document.getElementById(name).classList.add("activecontent");
}

document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".navtext ul li a");
    const checkbox = document.getElementById("check");

    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            checkbox.checked = false;
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const checkbox = document.getElementById("check"); // Hamburger menu checkbox
    const skillsTab = document.getElementById("skills");
    const educationTab = document.getElementById("education");

    checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
            // Hide skills and education sections when the menu is toggled
            skillsTab.style.display = "none";
            educationTab.style.display = "none";
        } else {
            // Show the currently active tab when the menu is closed
            const activeTab = document.querySelector(".contents.activecontent");
            if (activeTab) activeTab.style.display = "block";
        }
    });
});
