'use strict';
window.onload = init;

function init() {
    let images = document.getElementsByTagName('img');
    for (let i = 0; i < images.length; i++) {
        images[i].onclick = changeBigPicture;
    }
}

function changeBigPicture(eventObj) {
    // console.log(eventObj);
    let appDiv = document.getElementById("big_picture");
    appDiv.innerHTML = "";
    let eventElement = eventObj.target;
    let imageNameParts = eventElement.id.split("_");
    let src = "img/gallery/big/" + imageNameParts[1] + ".jpg";
    // let imageDomElement = document.createElement("img");
    // imageDomElement.src = src;
    // appDiv.appendChild(imageDomElement);
    //appDiv.innerHTML = `<img src="${src}"/>`; // альтернативный вариант 1
    appDiv.insertAdjacentHTML("beforeEnd", `<img src="${src}"/>`);
}