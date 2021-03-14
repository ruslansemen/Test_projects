'use strict';
window.onload = init;

function init() {
    let images = document.getElementsByTagName("img");
    for (let i = 0; i < images.length; i++) {
        images[i].onmouseover = showAnswer;
        images[i].onmouseout = reblur;
    }
}

function showAnswer(eventObj) {
    let image = eventObj.target;
    image.src = image.id + ".jpg";
}

function reblur(eventObj) {
    let image = eventObj.target;
    image.src = image.id + "blur.jpg";
}