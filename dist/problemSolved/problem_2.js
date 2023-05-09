"use strict";
const persons = [
    {
        name: "user a",
        age: 15
    },
    {
        name: "user b",
        age: 18
    },
    {
        name: "user c",
        age: 24
    },
    {
        name: "user d",
        age: 12
    },
];
const takePersons = (param) => {
    let adult = [];
    for (let i = 0; i < param.length; i++) {
        const person = param[i];
        if (person.age >= 18) {
            adult.push(person);
        }
    }
    return adult;
};
console.log(takePersons(persons));
