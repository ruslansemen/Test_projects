'use strict';

function validate1(phoneNumber) {
    if (phoneNumber.length < 7 || phoneNumber.length > 8) {
        return false;
    }

    for (let i = 0; i < phoneNumber.length; i++) {
        if (i === 3) {
            if (phoneNumber.length === 8 && phoneNumber.charAt(3) !== '-') {
                return false;
            } else if (phoneNumber.length === 7 && isNaN(phoneNumber.charAt(i))) {
                return false;
            }
        } else if (isNaN(phoneNumber.charAt(i)) || phoneNumber.indexOf(" ") !== -1) {
            return false;
        }
    }
    return true;
}

function validate2(phoneNumber) {
    if (phoneNumber.length < 7 || phoneNumber.length > 8) {
        return false;
    }

    let first = phoneNumber.substring(0, 3);
    let second = phoneNumber.substring(phoneNumber.length - 4);


    if (isNaN(first) || isNaN(second) || phoneNumber.indexOf(" ") !== -1) {
        return false;
    }

    if (phoneNumber.length === 8) {
        return (phoneNumber.charAt(3) === "-");
    }
    return true;
}

function validate3(phoneNumber) {
    if (phoneNumber.length < 7 || phoneNumber.length > 8) {
        return false;
    }

    if (phoneNumber.length === 7) {
        return (!isNaN(phoneNumber) && phoneNumber.indexOf(" ") === -1)
    }

    if (phoneNumber.length === 8) {
        let arrOfNum = phoneNumber.split("-");
        let first = arrOfNum[0];
        let second = arrOfNum[1];

        return (phoneNumber.charAt(3) === "-" && !isNaN(first) && !isNaN(second) && phoneNumber.indexOf(" ") === -1 && arrOfNum.length === 2);
    }
}

let phoneNum = "123--567";
// let arrOfNum = phoneNum.split("-");
// console.log(arrOfNum);
console.log(phoneNum);
console.log("validate1: ", validate1(phoneNum));
console.log("validate2: ", validate2(phoneNum));
console.log("validate3: ", validate3(phoneNum));