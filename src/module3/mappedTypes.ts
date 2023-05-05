const arrayOfNumber = [3, 6, 8, 9, 3];
const arrayOfString = arrayOfNumber.map((number) => number.toString());

// console.log(arrayOfString);

type Volume = {
    height: number;
    width: string;
    depth: number;
}

type Area<T> = {
    // [key in keyof Volume]: Volume[key];

    readonly [key in keyof T]: T[key]
}

const area1: Area<{ height: number, width: string }> = { height: 11, width: "Aasd" };


