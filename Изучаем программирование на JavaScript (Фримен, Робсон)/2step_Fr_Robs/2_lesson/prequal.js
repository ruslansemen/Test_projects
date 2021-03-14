function prequal(car) {
    if (car.mileage > 10000) {
        return false;
    } else if (car.year > 1960) {
        return false;
    }
    return true;
}

function getAnswer(car) {
    let worthALook = prequal(car);
    if (worthALook) {
        console.log("You gotta check out this " + car.make + " " + car.model);
    } else {
        console.log("You should really pass on the " + car.make + " " + car.model);
    }
}


let taxi = {
    make: "Webville Motors",
    model: "Taxi",
    year: 1955,
    color: "yellow",
    passenger: 4,
    convertible: false,
    mileage: 281341
};

let chevy = {
    make: "Chevy",
    model: "Bel Air",
    year: 1957,
    color: "red",
    passenger: 2,
    convertible: false,
    mileage: 1021
};

let fiat = {
    make: "Fiat",
    model: "500",
    year: 1957,
    color: "Medium Blue",
    passenger: 2,
    convertible: false,
    mileage: 88000
};

let cadi = {
    make: "GM",
    model: "Cadillac",
    year: 1955,
    color: "tan",
    passenger: 5,
    convertible: false,
    mileage: 12892
};

let lotOfCars = [taxi, chevy, fiat, cadi];
lotOfCars.forEach(getAnswer);