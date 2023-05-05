"use strict";
const myInfo = {
    name: "Asad",
    age: 20,
    salary: 20000,
    other1: true,
    other2: null
};
const addMine = (param) => {
    const crusName = 'kate Winslate';
    const newData = Object.assign(Object.assign({}, myInfo), { crusName });
    return newData;
};
const getRes = addMine(myInfo);
