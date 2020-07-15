// переменные
var x;
x = 0;
x = 1;
x = 0.01;
x = "hello world";
x = "JavaScript";
x = false;
x = true;
x = null;
x = undefined;

// объекты
var book = {
  topic: "JavaScript",
  fat: true,
};

console.log(book.topic);
console.log(book["fat"]);

book.author = "Flanagan";
book.contents = {};
console.log(book);

// массивы

var primes = [2, 3, 5, 7];
console.log(primes[0]);
console.log(primes.length);
console.log(primes[primes.length - 1]);
primes[4] = 9;
console.log(primes[4]);
primes[4] = 11;
console.log(primes[4]);
var empty = [];
console.log(empty);
console.log(empty.length);

var points = [
  { x: 0, y: 0 },
  { x: 1, y: 1 },
];

var data = {
  trial1: [
    [1, 2],
    [3, 4],
  ],
  trial2: [
    [2, 3],
    [4, 5],
  ],
};
// арифметические операторы
3 + 2; // => 5
3 - 2; // => 1
3 * 2; // => 6
3 / 2; // => 1.5
points[1].x - points[0].x; // => 1
"3" + "2"; // => "32" - символ "+" кроме оператора сложения обозначает конкатенацию строк
"3" + 2; // => "32"
"3" - 2; // => 1
"3" - "1"; // => 2

// сокращённые формы арифметических операторов

var count = 0; // объявляем переменную

count++; // => 0 - постпрефиксный инкремент, 1 будет на следующем шаге
count; // => 1
count = 0;
++count; // => 1 - префиксный инкремент, 1 на текущем шаге
count--; // 1 - постпрефиксный инкремент, 0 будет на следующем шаге
count; // 0
count = 1;
--count; //  0 - префиксный инкремент, 0 на текущем шаге
count += 2; // => 2 эквивалентно const = const + 2
count *= 3; // => 6 эквивалентно const = const*3
count; // => 6

//  операторы сравнения
var x = 2,
  y = 3;
x == y; // false
x != y; // true
x < y; // true
x <= y; // true
x > y; // false
"two" == "three"; // false
"two" > "three"; // true
false == x > y; // true
