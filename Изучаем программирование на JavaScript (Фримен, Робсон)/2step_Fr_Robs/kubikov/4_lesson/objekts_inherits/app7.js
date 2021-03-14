'use strict';

function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
}

Person.prototype.incrementAge = function () {
    this.age += 1;
};

const person1 = new Person('Alex', 20, 'male');
person1.incrementAge();

function Personal(name, age, gender, location, hobby) {
    Person.call(this, name, age, gender);
    this.location = location;
    this.hobby = hobby;
}

Personal.prototype = Object.create(Person.prototype);
Personal.prototype.constructor = Personal;

Personal.prototype.sayName = function () {
    console.log('My name is ' + this.name);
};

const personal1 = new Personal('John', 30, 'male', 'Canada', 'swimming');
personal1.incrementAge();
personal1.sayName();
console.log(personal1);