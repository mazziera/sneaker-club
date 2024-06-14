const images = [
  { id: "1", url: "./src/imagens/logotipos/01.jpg" },
  { id: "2", url: "./src/imagens/logotipos/02.jpg" },
  { id: "3", url: "./src/imagens/logotipos/03.jpg" },
  { id: "4", url: "./src/imagens/logotipos/04.jpg" },
  { id: "5", url: "./src/imagens/logotipos/05.jpg" },
  { id: "6", url: "./src/imagens/logotipos/06.jpg" },
  { id: "7", url: "./src/imagens/logotipos/07.jpg" },
  { id: "8", url: "./src/imagens/logotipos/08.jpg" },
  { id: "9", url: "./src/imagens/logotipos/09.jpg" },
  { id: "10", url: "./src/imagens/logotipos/10.jpg" },
  { id: "11", url: "./src/imagens/logotipos/11.jpg" },
];

const containerImages = document.getElementById("container-images");

//carregar as imagens dinamicamente dentro da section "container-items"
const imageLoader = (images, container) => {
  images.forEach((image) => {
    container.innerHTML += `
            <section class = "image-item">
            <a href="#"><img src="${image.url}" /></a>
            </section>
        `;
  });
};

imageLoader(images, containerImages);

let imageItem = document.querySelectorAll(".image-item");

const nextImage = () => {
  containerImages.appendChild(imageItem[0]);

  imageItem = document.querySelectorAll(".image-item");
};

document.querySelector("#next-arrow").addEventListener("click", nextImage);

const previousImage = () => {
  const isLastImage = imageItem[imageItem.length - 1];

  containerImages.insertBefore(isLastImage, imageItem[0]);

  imageItem = document.querySelectorAll(".image-item");
};

document.querySelector("#previous-arrow").addEventListener("click", previousImage);

// funcionalidade de touch swipe
let touchstartX = 0;
let touchendX = 0;

const handleTouchStart = (event) => {
    touchstartX = event.changedTouches[0].screenX;
};

const handleTouchEnd = (event) => {
    touchendX = event.changedTouches[0].screenX;
    handleGesture();
};

const handleGesture = () => {
    if (touchendX < touchstartX - 50) { // Deslizar para a esquerda
        nextImage();
    }
    if (touchendX > touchstartX + 50) { // Deslizar para a direita
        previousImage();
    }
};

containerImages.addEventListener('touchstart', handleTouchStart, false);
containerImages.addEventListener('touchend', handleTouchEnd, false);