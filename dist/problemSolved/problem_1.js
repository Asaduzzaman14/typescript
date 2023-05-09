"use strict";
const loger = (text, count = 3) => {
    for (let i = 0; i < count; i++) {
        console.log(text, i + 1);
    }
};
console.log(loger('this is text', 5));
