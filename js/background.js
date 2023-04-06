const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg","6.jpg"];

const chosenimages = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenimages}`;

document.body.appendChild(bgImage);