console.log("Pratice set 1");
/*
//q1> Create a variable of type string and try to add number on it 
//experiments 
//1. 
let s="String"+65;
console.log(s); // String65
console.log(typeof s); // string
//2. 
let b="String + 65";
console.log(b); //String + 65
console.log(typeof b); // string

let c=5;
let d="6";
console.log(typeof c); // number
console.log(typeof d); // string
let e=c+d;
console.log(e);  // 56 // concatenation
console.log(typeof e); //string

*/

// q2.> use type of operator to find the data of string in last question-- already did

/*
// q3.> create a const obj in js can you change it to hold a number later.
const items = {
    name: "mouse",
    price: 520
}
console.log(items);
// items = "container"; // errror: Uncaught TypeError: Assignment to constant variable.
// items = 56; // errorUncaught TypeError: Assignment to constant variable.

// Answer is No.
*/


/*
//q4.>Try to add new key to cons obj in problem 3 where you able to do it?

const items = {
    name: "mouse",
    price: 520
}
console.log(items);

// add new key color : "black" in items
items['color']="black";
console.log(items);  // add successful
// now change name mouse to keyboard
items['name']="Keyboard";  // change successful
console.log(items);
// conclusion: We can change the key and their value of the object.

// experiment:

let items = {
name:"Pen";
Price:54; 
}
console.log(items);// error:Uncaught SyntaxError: Identifier 'items' has already been declared
// conclusion: if object is already declared you cannot create another object.

*/

/*
// q4.> Wap to word meaning of dictionary of 5 words
let dictionary = {
Completion : "Consitent",
Successful : "Consistent",
Key : "Disciplane",
Important1 : "Time",
Important2: "goal"
};
console.log(dictionary); 

*/

/*
//
var item1 = {
    car : " toyota",
    color: "black"
};
console.log(item1);

// try to change the item 1 keys value 

var item1 ={
    car : " toya",
    color: "black"
};
Console.log(item1); // error: Uncaught ReferenceError: Console is not defined

*/