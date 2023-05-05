
type MyInfoType = {
    name: string;
    age: number;
    salary: number;
    other1: boolean;
    other2: null;

}
type MandatoryType = { name: string, age: number, salary: number };
interface MandatoryInterface { name: string, age: number, salary: number }


const myInfo = {
    name: "Asad",
    age: 20,
    salary: 20000,
    other1: true,
    other2: null
}

const addMine = <T extends MandatoryInterface>(param: T) => {
    const crusName = 'kate Winslate'
    const newData = { ...myInfo, crusName }
    return newData
}
const getRes = addMine<MyInfoType>(myInfo)



