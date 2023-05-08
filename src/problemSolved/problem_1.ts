

const loger = (text: string, count: number = 3): void => {
    for (let i = 0; i < count; i++) {

        console.log(text, i + 1);
    }

}

console.log(loger('this is text', 5));

