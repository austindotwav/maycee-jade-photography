const cloudinaryWidget = cloudinary.createUploadWidget({
    cloudName: 'dwhgyftop',
    uploadPreset: 'ml_default',
    folder: 'featured-page',
}, (error, result) => {
    if (!error && result && result.event === "success") {
        console.log('Uploaded image URL:', result.info.secure_url);

        // Add uploaded image to your page
        const gallery = document.querySelector('.row');
        const column = document.createElement('div');
        column.classList.add('column');
        column.innerHTML = `<img src="${result.info.secure_url}" alt="Featured Image">`;
        gallery.appendChild(column);
    }
});

document.getElementById('upload_widget_button').addEventListener('click', () => cloudinaryWidget.open());
