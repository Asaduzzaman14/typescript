

// // Create a TypeScript program that declares a function
// // that takes two parameters, a string and a number.
// // The function should log the string parameter repeated
// // the number of times specified by the number parameter.
// // If the number parameter is not provided, it should
// // default to 3.

// const loger = (text: string, count: number = 3): void => {
//     for (let i = 0; i < count; i++) {

//         console.log(text, i + 1);
//     }

// }

// // console.log(loger('this is text', 5));



// interface IPerson {
//     name: string;
//     age: number
// }

// const persons: IPerson[] = [
//     {
//         name: "nameA",
//         age: 15
//     },
//     {
//         name: "nameB",
//         age: 18
//     },
//     {
//         name: "nameC",
//         age: 24
//     },
// ]

// const takePersons = (param: IPerson[]): IPerson[] => {

//     let adalt = []
//     for (let i = 0; i < param.length; i++) {
//         const person = param[i]
//         if (person.age >= 18) {
//             adalt.push(person)
//         }
//     }
//     return adalt;

// }

// // console.log(takePersons(persons));


// // Problem 1, 2, 3 4: