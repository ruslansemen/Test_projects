'use strict';

function UserRole() {
    this.rights = ['create', 'edit'];
}

function ModerRole() {
    this.name = 'Alex';
    this.age = 30;
    UserRole.call(this);
    this.rights.push("delete");
}

const moderRole1 = new ModerRole();
const userRole1 = new UserRole();
console.log(moderRole1, userRole1);







// console.log(userRole1);
// console.log(userRole1.__proto__);
// console.log(UserRole.prototype);
// console.log(userRole1.__proto__ === UserRole.prototype);