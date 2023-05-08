// // normal function
// function createArray2<T, T2>(param1: T, param2: T2): [T, T2] {
//     return [param1, param2]
// }



// // arrow function

// const createArray = <T, T2>(param1: T, param2: T2): [T, T2] => {
//     return [param1, param2]
// }




// const result1 = createArray<string, string>('bangla', "I love")
// const result3 = createArray<boolean, Array<string>>(true, ['this is array type'])




// type Name = {
//     name: string,
// }
// type ageType = {
//     age: number
// }

// const result4 = createArray<Name, ageType>({ name: "Bangladesh", }, { age: 33 })




// // spread operator

// const myInfo = {
//     name: "Asad",
//     age: 20,
//     salary: 20000
// }

// const addMine = <T>(param: T) => {
//     const crusName = 'kate Winslate'
//     const newData = { ...myInfo, crusName }
//     return newData
// }
// const getRes = addMine(myInfo)
// //


// function getArrayItem<T, K extends keyof T>(arr: T[], index: number, key: K): T[K] {

//     const item = arr[index];
//     console.log(item);

//     return item[key];

// }



// const users = [{ name: 'John', age: 30 }, { name: 'Mary', age: 25 },];

// console.log(getArrayItem(users, 0, 'name'))