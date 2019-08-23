// js courtesy of rik @ superhi.com

const images = [
  "img/1.jpg",
  "img/2.jpg",
  "img/3.jpg",
  "img/4.jpg",
  "img/5.jpg",
  "img/6.jpg",
  "img/7.jpg",
  "img/8.jpg",
  "img/9.jpg",
  "img/10.jpg",
  "img/11.jpg",
  "img/12.jpg",
  "img/13.jpg",
  "img/14.jpg",
  "img/16.jpg",
  "img/17.jpg",
  "img/18.jpg",
  "img/19.jpg",
  "img/20.jpg",
  "img/21.jpg",
  "img/22.jpg",
  "img/23.jpg",
  "img/24.jpg",
  "img/25.jpg",
  "img/26.jpg",
  "img/27.jpg",
  "img/28.jpg",
  "img/29.jpg",
  "img/30.jpg",
  "img/31.jpg",
  "img/32.jpg",
  "img/33.jpg",
  "img/34.jpg",
  "img/35.jpg"
];

let i = 0;

function placeImage(x, y) {
  const nextImage = images[i];
  const img = document.createElement("img");
  img.setAttribute("src", nextImage);
  img.style.left = x + "px";
  img.style.top = y + "px";
  img.style.transform = "translate(-50%, -50%) scale(0.6)";
  document.body.appendChild(img);

  i = i + 1;
  if (i >= images.length) {
    i = 0;
  }
}

document.addEventListener("click", function(event) {
  event.preventDefault();
  placeImage(event.pageX, event.pageY);
});

document.addEventListener("touchend", function(event) {
  event.preventDefault();
  placeImage(event.pageX, event.pageY);
});
