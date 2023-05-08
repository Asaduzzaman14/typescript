
// Problem 3:

function getArrayItem<T>(...arr: T[]): T[] {

    const reversItem = arr.reverse();
    return reversItem;

}

const res = getArrayItem<string>("2", "3", "4", "Asad")
console.log(res)

