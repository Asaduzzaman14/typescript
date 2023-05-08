
const typeGuard = (param: unknown): void => {
    if (typeof param === 'string') {
        console.log(param, 'aa');
    } else {
        console.error('value is not a string.');
    }
}

console.log(typeGuard('Asad'));
console.log(typeGuard(true));
