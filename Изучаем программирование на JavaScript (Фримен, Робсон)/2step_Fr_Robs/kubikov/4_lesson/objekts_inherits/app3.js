'use strict';



function Post(author, text) {
    this.author = author;
    this.text = text;
}

Post.prototype.show = function () {
    alert(this.author + " say: " + this.text);
};

const post1 = new Post('Admin', 'lorem ipsum1');
console.log(post1);
post1.show();
const post2 = new Post('User', 'Hello world');
console.log(post2);
post2.show();