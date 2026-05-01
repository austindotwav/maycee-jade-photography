const currentPath = window.location.pathname;

// Select all nav links
const navLinks = document.querySelectorAll('.nav-link');

// Loop through each link and compare its href with the current path
navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPath) {
        link.classList.add('active');
    } else {
        link.classList.remove('active');
    }
});