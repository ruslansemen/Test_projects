"use strict";

for (let i = 0; i <= 10; i++) {
    switch (i) {
        case 0:
            console.log(i + " - это ноль");
            break;
        case 1:
        case 3:
        case 5:
        case 7:
        case 9:
            console.log(i + " - это нечётное число");
            break;
        case 2:
        case 4:
        case 6:
        case 8:
        case 10:
            console.log(i + " - это чётное число");
            break;

    }
}