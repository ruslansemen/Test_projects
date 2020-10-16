// while (n < 10) {
//   var n = 0;
//   console.log("hello!" + n);
//   n++;
// }
// console.log(n);

// var c;
// var n = parseInt(prompt("Введите число"));
// switch ((c = n - 2)) {
//   case 1:
//     var a = 3;
//     var b = a / 2;
//     console.log(b);
//     break;
//   case 2:
//     console.log(n);
//     break;
//   //   case 3:
//   //     console.log(n);
//   //     break;
//   //   case 4:
//   //     console.log(n);
//   //     break;
//   default:
//     console.log("any thing alse");
// }

// var a = "35" + "2.5";
// var b = Number(a);
// console.log(b);

// console.log(a.toString() + 8);
// console.log(a + 8);
// var a = Number(prompt("enter a nuvber"));
// do {
//   console.log(a);
//   a--;
// } while (a > 10);

// var a = [1, 2, "three", true];
// var a = {
//   first: "one",
//   seccond: 2,
//   therd: "three",
//   forth: 4,
//   add: function (x) {
//     return x + x;
//   },
// };

// for (var i in a) {
//   console.log(a[i]);
// }

// for (var i of a) {
//   console.log(i);
// }

var c = "global";
let a = "global";
function close() {
  // function writeInner()
  // {
  let a = 25 + " local";
  var c = "c local";
  console.log("c in breckets = " + c);
  console.log("a in breckets = " + a);
}
// return writeInner;
// }
close();
console.log("c = " + c);
console.log("a = " + a);
