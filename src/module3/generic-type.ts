// // generic-type 
// //  1
// type GenericTuple<x, y> = [x, y];

// const love: GenericTuple<string, string> = ["sun", "moon"]



// // 
// type NameAndSalaryType = {
//     name: string,
//     salary: number
// }
// const relationWithSalary: GenericTuple<NameAndSalaryType, string> = [
//     {
//         name: "Asad",
//         salary: 100000,

//     },
//     'kate winslet'
// ]


// // 2
// type GenericArray<T> = Array<T>

// const roleNumber1: GenericArray<number> = [8, 2, 4, 4];
// const roleNumber2: Array<number> = [8, 2, 4, 4];
// const roleNumber3: GenericArray<string> = ["8", "2", "4", "4"];
// const roleNumber4: GenericArray<Boolean> = [true, false];


// type TypeOfObject = { name: string, role: number }  // type alis




// const arrayOfObject: GenericArray<TypeOfObject> = [
//     {
//         name: "Mr. Bin",
//         role: 20
//     },
//     {
//         name: "Mr. tom",
//         role: 21
//     },

// ]


