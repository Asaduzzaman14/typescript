"use strict";
const typeGuard = (param) => {
    if (typeof param === 'string') {
        console.log(param, 'aa');
    }
    else {
        console.error('value is not a string.');
    }
};
console.log(typeGuard('Asad'));
console.log(typeGuard(true));
