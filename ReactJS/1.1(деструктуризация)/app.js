"use strict";
// деструктуризация объекта -----------------------------
//let {var1, var2} = {var1: …, var2: …};
let options = {
  title: "Меню",
  width: 100,
  height: 200,
};

let { height: h = 50, title, width: w } = options;
console.log(title);
console.log(w);
console.log(h);
console.log(options);

// деструктуризация массива ----------------------------------
// let [firstName, lastName] = ["Илья", "Кантор"];
// let mas = ["Илья", "Кантор", "Юлий", "Цезарь"];
// let [firstName, , , thirdName] = mas;
// console.log(firstName); // Илья
//console.log(lastName); // Кантор
// console.log(thirdName); // Кантор
// console.log(mas);
