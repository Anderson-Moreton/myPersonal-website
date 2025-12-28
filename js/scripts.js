// Select the file input, image preview, and the icon
const imageField = document.querySelector("#image-field");
const imagePreview = document.querySelector("#image-preview");
const cardIcon = document.querySelector(".bi.bi-card-image"); // select the icon by its CSS classes

// Function to load the selected image
const loadImage = (e) => {
    const file = e.target.files;

    if (file && file.length > 0) {
        const fileReader = new FileReader();

        fileReader.onload = () => {
            imagePreview.src = fileReader.result; // display the selected image
            cardIcon.style.display = 'none'; // hide the icon when an image is added
        }

        fileReader.readAsDataURL(file[0]); // read the first selected file
    }
};

// Listen for file selection
imageField.addEventListener('change', loadImage);

// Like
document.querySelectorAll('.like-container').forEach(container => {
    const icon = container.querySelector('.like-icon');
    const count = container.querySelector('.like-count');
    let liked = false;

    icon.addEventListener('click', () => {
        liked = !liked;
        let current = parseInt(count.textContent);

        if (liked) {
            count.textContent = current + 1;
            icon.classList.add('liked');
            icon.classList.replace('bi-heart', 'bi-heart-fill');
        } else {
            count.textContent = current - 1;
            icon.classList.remove('liked');
            icon.classList.replace('bi-heart-fill', 'bi-heart');
        }
    });
});