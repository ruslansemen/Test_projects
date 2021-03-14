'use strict';
let transport = {
    color: "grey",
    showColor: function () {
        alert("Транспорт цвета " + this.color);
    }
}

function Car(model, color) {
    this.model = model;
    this.color = color;
}
Car.prototype = transport;
// Car.prototype.constructor = Car;

const car1 = new Car('Ford', 'blue');
const car2 = new Car('Toyota', 'white');

console.log(car1, car2);
// console.log(car1.color, car2.color);
car1.showColor();
car2.showColor();
console.log(car1.__proto__ === car2.__proto__);