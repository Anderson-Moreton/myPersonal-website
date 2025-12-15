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