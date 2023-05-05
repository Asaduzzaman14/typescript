type NoobDev = {
    name: string
}

type ProDev = NoobDev & {  // intersection type
    age: number,
    expartis: string;
    exparince: number,
}
const candidate1: NoobDev = {
    name: "Asad"
}
const candidate2: ProDev = {
    name: 'Asaduzzaman',
    age: 20,
    expartis: "Full stack developer",
    exparince: 2
}

const candidate3: ProDev | NoobDev = { // union type
    name: 'Asaduzzaman',
    age: 20,
    expartis: "Full stack developer",
    exparince: 2
}