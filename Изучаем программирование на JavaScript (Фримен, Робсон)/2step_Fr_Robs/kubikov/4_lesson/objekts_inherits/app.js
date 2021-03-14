'use strict';
// lesson 4 from 00:10:10
const obj1 = {
    author: "Admin",
    text: "lorem ipsum1",
    show() {
        alert(this.author + " say: " + this.text);
    }
};

const obj2 = {
    author: "User",
    text: "Hello world",
    show: function () {
        alert(this.author + " say: " + this.text);
    }
};

// -----------------------------------------------
// Конструктор объектов
function Post(author, text) {
    this.author = author;
    this.text = text;
    this.show = function () {
        alert(this.author + " say: " + this.text);
    };
}

const post1 = new Post('Admin', 'lorem ipsum1');
console.log(post1);
post1.show();
const post2 = new Post('User', 'Hello world');
console.log(post2);
post2.show();