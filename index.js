document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript loaded!");

    // ✅ Close the navbar when a link is clicked (only in mobile view)
    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", function () {
            const navbarCollapse = document.querySelector(".navbar-collapse");
            if (navbarCollapse.classList.contains("show")) {
                new bootstrap.Collapse(navbarCollapse).hide();
            }
        });
    });

    // ✅ Dynamic Text Animation
    const roles = ["A Web Developer", "A Data Analyst", "A Problem Solver"];
    const dynamicText = document.querySelector(".dynamic-text");
    let currentIndex = 0;

    function updateText() {
        dynamicText.style.opacity = "0"; // Fade out
        setTimeout(() => {
            dynamicText.textContent = roles[currentIndex];
            dynamicText.style.opacity = "1"; // Fade in
            currentIndex = (currentIndex + 1) % roles.length;
        }, 500);
    }

    setInterval(updateText, 3000); // Change text every 3 seconds
});

document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript loaded!");

    // Close the navbar when a link is clicked (only in mobile view)
    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", function () {
            const navbarCollapse = document.querySelector(".navbar-collapse");
            if (navbarCollapse.classList.contains("show")) {
                new bootstrap.Collapse(navbarCollapse).hide();
            }
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript loaded!");

    // ✅ Smooth scrolling for internal links
    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", function () {
            const navbarCollapse = document.querySelector(".navbar-collapse");
            if (navbarCollapse.classList.contains("show")) {
                new bootstrap.Collapse(navbarCollapse).hide();
            }
        });
    });

    // ✅ Dynamic Text Animation
    const roles = ["A Data Analyst", "A Web Developer", "A Problem Solver"];
    const dynamicText = document.querySelector(".dynamic-text");
    let currentIndex = 0;

    function updateText() {
        dynamicText.style.opacity = "0"; // Fade out
        setTimeout(() => {
            dynamicText.textContent = roles[currentIndex];
            dynamicText.style.opacity = "1"; // Fade in
            currentIndex = (currentIndex + 1) % roles.length;
        }, 500);
    }

    setInterval(updateText, 3000); // Change text every 3 seconds
});
