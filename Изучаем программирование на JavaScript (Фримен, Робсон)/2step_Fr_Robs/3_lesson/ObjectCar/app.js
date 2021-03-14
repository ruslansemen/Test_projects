'use strict';

let fiat = {
    make: "Fiat",
    model: "500",
    year: 1957,
    color: "Medium Blue",
    passengers: 2,
    convertible: false,
    mileage: 88000,
    started: false,
    oilMinLevel: 50,
    oilCurrentLevel: 55,
    fuel: 0,
    start: function () {
        if (this.fuel > 0 && this.oilCurrentLevel > this.oilMinLevel) {
            this.started = true;
            alert("Engine started now.");
        } else {
            alert("Check oil and fuel.");
        }
    },
    stop: function () {
        if (this.started) {
            this.started = false;
            alert("Engine stopped now.");
        } else {
            alert("Chick-chick");
        }

    },
    drive: function () {
        if (this.started) {
            alert("Zoom zoom!");
        } else {
            alert("You need to start the engine first.");
        }
    },
    setOil: function () {
        this.oilCurrentLevel += 10;
        alert("Oil now: " + this.oilCurrentLevel);
    },
    setFuel: function () {
        this.fuel += 20;
        alert("Fuel now: " + this.fuel);
    }
};

fiat.start();
fiat.setFuel();
fiat.setOil();
fiat.start();
fiat.drive();
fiat.stop();
fiat.drive();
