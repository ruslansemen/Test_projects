'use strict';
let transport = {
    color: "grey"
}

function Car(model, color) {
    this.model = model;
    this.color = color;
}
Car.prototype = transport;
Car.prototype.constructor = Car;

const car1 = new Car('Ford', 'blue');
const car2 = new Car('Toyota', 'white');

// car1.__proto__ = transport;
// car1.__proto__.constructor = Car;
console.log(car1, car2);
console.log(car1.__proto__ === car2.__proto__);