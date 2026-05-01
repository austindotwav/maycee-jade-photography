document.addEventListener('DOMContentLoaded', () => {
    const slidingElements = document.querySelectorAll('.slide-in');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    slidingElements.forEach(element => observer.observe(element));
});