'use strict';
// let number = prompt('Введите целое число от 0 до 999');

/** 
 * проверка является ли переменная целым числом
 */
function numberOrNot(str) {
    let num = +str;
    if (isNaN(num)) {
        alert('число введено неверно');
        return false;
    } else if (Number.isInteger(num)) {
        return true;
    } else {
        alert('число введено неверно');
        return false;
    }
}

/**
 * преобразует строку в массив из цифр, возвращает массив, либо false  если цифр больше 3
 * @param {*} str 
 */
function getNumArr(str) {
    if (str.length > 3) {
        alert('число введено неверно');
        return false;
    } else {
        let arrOfNum = [];
        for (let i = 0; i < str.length; i++) {
            arrOfNum[i] = parseInt(str[i]);
        }
        return arrOfNum;
    }

}

/**
 * преобразует цифровой массив в объект, возвращает объект
 * @param {*} arr 
 */
function convertArrInObj(arr) {
    if (arr.length == 1) {
        arr.unshift(0, 0);
    } else if (arr.length == 2) {
        arr.unshift(0);
    }
    let numObjekt = {
        units: arr[2],
        tens: arr[1],
        hundreds: arr[0]
    };
    return numObjekt;
}

/**
 * преобразует строковые цифры в объект, раскладывает отдельно единицы, десятки, сотни
 * @param {*} number 
 */
function getObjekt(number) {
    if (numberOrNot(number)) {
        let myArr = getNumArr(number);
        if (myArr) {
            return convertArrInObj(myArr);
        }
        return false;
    }
    return false;
}

// getObjekt(number)
console.log(getObjekt(prompt('Введите целое число от 0 до 999')));