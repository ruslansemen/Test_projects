'use strict';

function validate1(phoneNumber) {
    if (phoneNumber.length !== 8) {
        return false;
    }

    for (let i = 0; i < phoneNumber.length; i++) {
        if (i === 3) {
            if (phoneNumber.charAt(3) !== '-') {
                return false;
            }
        } else if (isNaN(phoneNumber.charAt(i)) || phoneNumber.indexOf(" ") !== -1) {
            return false;
        }
    }
    return true;
}

function validate2(phoneNumber) {
    if (phoneNumber.length !== 8) {
        return false;
    }

    let first = phoneNumber.substring(0, 3);
    let second = phoneNumber.substring(4);
    if (phoneNumber.charAt(3) !== "-" || isNaN(first) || isNaN(second) || phoneNumber.indexOf(" ") !== -1) {
        return false;
    }
    return true;
}

let phoneNum = "123-4567";
console.log(phoneNum);
console.log("validate1: ", validate1(phoneNum));
console.log("validate2: ", validate2(phoneNum));