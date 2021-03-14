"use strict";

// далее следует встроенное описание:  

/**
 * Функция показывает день недели
 * какой то текст прваолрпола орывор
 * рвылораолывраолывраолывраолывр
 * @returns {string}
 */
function getDay() {
    let dayNum = new Date().getDay();
    // let dayNum = n;
    let day = "";

    switch (dayNum) {
        case 1:
            day = "сегодня понедельник";
            break;
        case 2:
            day = "сегодня вторник";
            break;
        case 3:
            day = "сегодня среда";
            break;
        case 4:
            day = "сегодня четверг";
            break;
        case 5:
            day = "сегодня пятница";
            break;
        case 6:
            day = "сегодня суббота";
            break;
        case 7:
            day = "сегодня воскресенье";
            break;
        default:
            day = "Такого дня нет";
    }
    return day;
}

let currentDay = getDay();
alert(currentDay);

let dsr = function (h) {
    alert("hello!" + h);
}