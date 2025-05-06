console.log("Welcome to conversion");


// conversion 

// 1: string to number and number to string conversion
let some = 123
console.log(typeof some) // o/p: number

let some1 = "123" // op: string
console.log(typeof some1) // o/p: string

// now change the string to number

let change =  (Number(some1)) 
console.log(typeof change) // o/p:number
console.log(change) // 123

// let do thi
let some2 = "123abc";
let change2 = (Number(some2))
console.log(typeof change2) // o/p:number
console.log(change2) // o/p: NaN 

let en1 = String(some);
console.log(typeof en1); // string

// conversion boolean

let loggedin = 1;
console.log(typeof loggedin) // number

let change3 = Boolean(loggedin)
console.log(change3) // true 
console.log(typeof change3) // boolean

let rev = Number(change3)
console.log(typeof rev) // number


