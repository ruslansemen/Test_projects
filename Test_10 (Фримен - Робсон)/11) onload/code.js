function init() {
    var planet = document.getElementById("greenplanet");
    console.log(planet.innerHTML);
    planet.innerHTML = "Red Alert: hit by phaser fire!";
    console.log(planet.innerHTML);
}

window.onload = init;
