// a type on dependent on another type

type a1 = string;
type a3 = undefined;
type a4 = number;

// nested contational type

type a2 = a1 extends string ? string : null;

type d = a1 extends null ? null : a3 extends number ? number : a4 extends null ? null : number


type Sheike = {
    wife1: string;
    wife2: string
}



type checkProperty<T, K> = K extends keyof Sheike ? true : false

type CheckWifr1 = checkProperty<Sheike, "wife2">


type Friends = "Monika" | "Rachel" | "Pheobe"

type RemoveFriends<T, Key> = T extends Key ? never : T

type CurrentFriends = RemoveFriends<Friends, "Monika">

