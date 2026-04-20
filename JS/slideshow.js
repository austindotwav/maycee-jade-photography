const images = [
    '/images/slideshow/featured-1.jpg',
    '/images/slideshow/featured-2.jpg',
    '/images/slideshow/featured-3.jpg',
    '/images/slideshow/featured-4.jpg',
    '/images/slideshow/featured-5.jpg',
    '/images/slideshow/featured-6.jpg',
    '/images/slideshow/featured-7.jpg',
];

images.forEach((url) => {
    const img = new Image();
    img.src = url;
});

let currentIndex = 0;
const slider = document.getElementById('bg-slider');

function changeBackground() {
    slider.style.backgroundImage = `url('${images[currentIndex]}')`;
    currentIndex = (currentIndex + 1) % images.length;
    console.log(currentIndex);
}

// Rotate every 5 seconds
setInterval(changeBackground, 5000);
changeBackground();