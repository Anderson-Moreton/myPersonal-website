const imageField = document.querySelector("#image-field");
const imagePreview = document.querySelector("#image-preview");

const loadImage = (e) => {

    const filePath = e.target || window.e.srcElement;

    const file = filePath.files;

    const fileReader = new FileReader();

    fileReader.onload = () => {
        imagePreview.src = fileReader.result;
    }

    fileReader.readAsDataURL(file[0]);

};

imageField.addEventListener("change", loadImage);

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