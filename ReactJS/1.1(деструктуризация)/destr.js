// let [a, b, c, ...d] = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(a, b, c); // 1 2 3
// console.log(d[4]);

let noname = {
  first: "Hi",
  second: "Hello",
  sird: "How are you?",
};
let { first, second } = noname;
console.log(first, second);
first = "Привет";
console.log(first, second);
console.log(noname);
