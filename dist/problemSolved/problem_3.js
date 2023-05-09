"use strict";
// Problem 3:
function getArrayItem(...arr) {
    const reversItem = arr.reverse();
    return reversItem;
}
const res = getArrayItem("2", "3", "4", "Asad");
console.log(res);
