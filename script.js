// Bouton de remonter de page //
const btn = document.querySelector(".btnGoTop");
btn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

// Carrousel //

const images = [
  "/assets/image/carrousel/img1.jpg",
  "/assets/image/carrousel/img2.jpg",
  "/assets/image/carrousel/img3.jpg",
  "/assets/image/carrousel/img4.jpg",
  "/assets/image/carrousel/img5.jpg",
  "/assets/image/carrousel/img6.jpg",
  "/assets/image/carrousel/img7.jpg",
  "/assets/image/carrousel/img8.jpg",
  "/assets/image/carrousel/img9.jpg",
  "/assets/image/carrousel/img10.jpg",
  "/assets/image/carrousel/img11.jpg",
  "/assets/image/carrousel/img12.jpg",
  "/assets/image/carrousel/img13.jpg",
  "/assets/image/carrousel/img14.jpg",
  "/assets/image/carrousel/img15.jpg",
  "/assets/image/carrousel/img16.jpg",
  "/assets/image/carrousel/img17.jpg",
  "/assets/image/carrousel/img18.jpg",
  "/assets/image/carrousel/img19.jpg",
  "/assets/image/carrousel/img20.jpg",
];
const image = document.getElementById("carousel-image");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");

let currentImageIndex = 0;

image.src = images[currentImageIndex];

nextButton.addEventListener("click", function () {
  currentImageIndex++;
  if (currentImageIndex >= images.length) {
    currentImageIndex = 0;
  }
  image.src = images[currentImageIndex];
});

prevButton.addEventListener("click", function () {
  currentImageIndex--;
  if (currentImageIndex < 0) {
    currentImageIndex = images.length - 1;
  }
  image.src = images[currentImageIndex];
});
