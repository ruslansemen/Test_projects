// finished 01:23:50
'use strict';

function User(age) {
    this.age = age;
}

const user1 = new User(25);
console.log(User === user1.constructor);