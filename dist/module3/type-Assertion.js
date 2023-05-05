"use strict";
// type-Assertion
let nothing;
nothing = "Next Level Web Development";
nothing.length;
nothing.length;
function kgToGram(param) {
    if (typeof param == "string") {
        const value = parseFloat(param) * 1000;
        return `The result is ${value}`;
    }
    if (typeof param === "number") {
        const value = param * 1000;
        return value;
    }
}
const result = kgToGram(20);
const result2 = kgToGram("20");
try {
}
catch (error) {
    console.log(error.message);
}
