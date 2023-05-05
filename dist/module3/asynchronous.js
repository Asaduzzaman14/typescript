"use strict";
// mocking
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const getTodo = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch('https://jsonplaceholder.typicode.com/todos/1');
    return yield response.json();
});
const getTotoData = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield getTodo();
    console.log(result);
});
getTotoData();
const makePromise = () => {
    return new Promise((relolve, reject) => {
        const data = 'data is fetched';
        if (data) {
            relolve(data);
        }
        else {
            reject("Failed to feched data");
        }
    });
};
const makePromiseBoolean = () => {
    return new Promise((relolve, reject) => {
        const data = true;
        if (data) {
            relolve(data);
        }
        else {
            reject("Failed to feched data");
        }
    });
};
const makePromiseObject = () => {
    return new Promise((relolve, reject) => {
        const data = { data: 'this is objet data' };
        if (data) {
            relolve(data);
        }
        else {
            reject("Failed to feched data");
        }
    });
};
const makePromiseObj = () => {
    return new Promise((relolve, reject) => {
        const data = true;
        if (data) {
            relolve(data);
        }
        else {
            reject("Failed to feched data");
        }
    });
};
const getPromisData = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield makePromise();
    console.log(data);
    return data;
});
const getPromisBoolen = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield makePromiseBoolean();
    console.log(data);
    return data;
});
const getPromisObject = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield makePromiseObject();
    console.log(data);
    return data;
});
