const currentPath = window.location.pathname;

// Select all the nav links
const navLinks = document.querySelectorAll('.nav-link');

// Loop through each link and compare its href with the current path
navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPath) {
        link.classList.add('active'); // Add the 'active' class
    } else {
        link.classList.remove('active'); // Remove the 'active' class (optional, for cleanup)
    }
});