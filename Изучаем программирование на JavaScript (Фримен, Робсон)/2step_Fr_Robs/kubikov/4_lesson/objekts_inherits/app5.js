'use strict';
const post_parent = {
    role: 'user',
    userName: null,
    showRole: function () {
        console.log(this.role);
    }
};

let post1_child = Object.create(post_parent);
console.log(post1_child);
post1_child.userName = 'Alex';
console.log(post1_child.role);
post1_child.showRole();

let post2 = Object.create(post_parent);
post2.userName = "John";
post2.role = "admin";

console.log(post2);
console.log(post2.role);
post2.showRole();