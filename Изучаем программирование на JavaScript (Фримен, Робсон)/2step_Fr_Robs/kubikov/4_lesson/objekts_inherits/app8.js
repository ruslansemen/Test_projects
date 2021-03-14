'use strict';

class Person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    incrementAge() {
        this.age += 1;
    }
}

class Personal extends Person {
    constructor(name, age, gender, location, hobby) {
        super(name, age, gender);
        this.location = location;
        this.hobby = hobby;
    }

    sayName() {
        console.log('My name is ' + this.name);
    }
}

const person1 = new Person('Alex', 25, 'male');
person1.incrementAge();
console.log(person1);

const personal1 = new Personal('John', 30, 'male', 'Canada', 'swimming');
personal1.sayName();
personal1.incrementAge();
console.log(personal1);