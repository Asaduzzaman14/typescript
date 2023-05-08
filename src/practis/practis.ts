

const userInfo: [number, string, string, boolean, undefined, string] = [101, "Ema", "John", true, , "2023"];


const getSmiller = (arr1: number[], arr2: number[]): number[] => {

    const smiller: number[] = []

    for (const number of arr1) {
        if (arr2.includes(number)) {
            smiller.push(number)
        }
    }
    return smiller
}
const a1 = [1, 2, 3, 4, 5, 11]
const a2 = [2, 4, 6, 8, 11, 44]
const result1 = getSmiller(a1, a2)

// console.log(result1); //[ 2, 4, 11 ]


interface IProduct {
    id: number,
    name: string,
    category: string,
}

const products: IProduct[] = [
    {
        id: 101,
        name: "name",
        category: "catagoryA"
    },
    {
        id: 101,
        name: "name",
        category: "catagoryA"
    },
    {
        id: 101,
        name: "name",
        category: "catagoryA"
    },
]






const getProduct = () => {

}

