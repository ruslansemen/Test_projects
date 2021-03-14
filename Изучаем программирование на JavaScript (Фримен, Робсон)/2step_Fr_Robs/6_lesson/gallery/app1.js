'use strict';
window.onload = init;

function init() {
    let images = document.getElementsByTagName("img");
    for (let i = 0; i < images.length; i++) {
        images[i].onclick = showAnswer;
    }
}

function showAnswer(eventObj) {
    let image = eventObj.target;
    image.src = image.id + ".jpg";
    let a = 5;
    let b = true;
    setTimeout(reblur, 2000, image, a, b);
}

function reblur(image, x, y) {
    image.src = image.id + "blur.jpg";
    console.log(x, y, image);
}