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
    fuel: 0,
    start: function () {
        if (this.fuel > 0) {
            this.started = true;
        } else {
            alert("The car is on empty, fill up before starting!");
        }
    },
    stop: function () {
        this.started = false;
    },
    drive: function () {
        if (this.started) {
            if (this.fuel > 0) {
                alert(this.make + " " + this.model + " goes zoom zoom!");
                this.fuel -= 1;
            } else {
                alert("Uh oh, out of fuel.");
                this.stop();
            }
        } else {
            alert("You need to start the engine first.");
        }
    },
    addFuel: function (amount) {
        this.fuel += amount;
    }
};

let cadi = {
    make: "GM",
    model: "Cadillac",
    year: 1955,
    color: "tan",
    passenger: 5,
    convertible: false,
    mileage: 12892,
    started: false,
    fuel: 0,
    start: function () {
        if (this.fuel > 0) {
            this.started = true;
        } else {
            alert("The car is on empty, fill up before starting!");
        }
    },
    stop: function () {
        this.started = false;
    },
    drive: function () {
        if (this.started) {
            if (this.fuel > 0) {
                alert(this.make + " " + this.model + " goes zoom zoom!");
                this.fuel -= 1;
            } else {
                alert("Uh oh, out of fuel.");
                this.stop();
            }
        } else {
            alert("You need to start the engine first.");
        }
    },
    addFuel: function (amount) {
        this.fuel += amount;
    }
};

let chevy = {
    make: "Chevy",
    model: "Bel Air",
    year: 1957,
    color: "red",
    passenger: 2,
    convertible: false,
    mileage: 1021,
    started: false,
    fuel: 0,
    start: function () {
        if (this.fuel > 0) {
            this.started = true;
        } else {
            alert("The car is on empty, fill up before starting!");
        }
    },
    stop: function () {
        this.started = false;
    },
    drive: function () {
        if (this.started) {
            if (this.fuel > 0) {
                alert(this.make + " " + this.model + " goes zoom zoom!");
                this.fuel -= 1;
            } else {
                alert("Uh oh, out of fuel.");
                this.stop();
            }
        } else {
            alert("You need to start the engine first.");
        }
    },
    addFuel: function (amount) {
        this.fuel += amount;
    }
};

let taxi = {
    make: "Webville Motors",
    model: "Taxi",
    year: 1955,
    color: "yellow",
    passenger: 4,
    convertible: false,
    mileage: 281341,
    started: false,
    fuel: 0,
    start: function () {
        if (this.fuel > 0) {
            this.started = true;
        } else {
            alert("The car is on empty, fill up before starting!");
        }
    },
    stop: function () {
        this.started = false;
    },
    drive: function () {
        if (this.started) {
            if (this.fuel > 0) {
                alert(this.make + " " + this.model + " goes zoom zoom!");
                this.fuel -= 1;
            } else {
                alert("Uh oh, out of fuel.");
                this.stop();
            }
        } else {
            alert("You need to start the engine first.");
        }
    },
    addFuel: function (amount) {
        this.fuel += amount;
    }
};

fiat.addFuel(3);
console.log(fiat.fuel);
fiat.start();
fiat.drive();
fiat.stop();

cadi.addFuel(4);
console.log(cadi.fuel);
cadi.start();
cadi.drive();
cadi.stop();

chevy.addFuel(5);
console.log(chevy.fuel);
chevy.start();
chevy.drive();
chevy.stop();

taxi.addFuel(2);
console.log(taxi.fuel);
taxi.start();
taxi.drive();
taxi.stop();