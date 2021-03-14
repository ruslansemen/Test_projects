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
    setTimeout(reblur, 2000, image);
}

function reblur(image) {
    image.src = image.id + "blur.jpg";
}