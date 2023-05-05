// type-Assertion


let nothing: any
nothing = "Next Level Web Development";

(nothing as string).length;

<string>nothing.length;


function kgToGram(param: string | number): string | number | undefined {

    if (typeof param == "string") {
        const value = parseFloat(param) * 1000
        return `The result is ${value}`;
    }
    if (typeof param === "number") {
        const value = param * 1000;
        return value
    }

}
const result = kgToGram(20) as Number
const result2 = kgToGram("20") as string

type CustonError = {
    message: string
}


try {

} catch (error) {
    console.log((error as CustonError).message);

}