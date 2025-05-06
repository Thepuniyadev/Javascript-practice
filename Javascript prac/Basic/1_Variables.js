console.log("This is just for variables in javascript ");

// To understand var first uncomment single time  from 4 to 28 loc
/*
// 1 VAR the Data variable:
console.log("Used in 1995-2015");
// a is a identifier, 24 is a literal 
var a = 24;
console.log(a); // o/p: 24
 // inside the block
 {
    var a = 63;
    console.log(a);  // o/p: 63
 }
 console.log(a);  // o/p: 63
 // Conclusion: var is globally scoped.
// outside the block
 var a= 96;
{
    console.log(a);
}

// now a value is 63
 var a=54;
 console.log(a);  // o/p: 54
 // conclusion: var can be updated or redeclared .

// without var let's check a variable val can be change 
a=69;
console.log(a); // o/p: a=69
// Conclusion: a variable value can be change without var

// let a=89;
// console.log(a); // identifier a has been already declared

var a = "Pawan"
console.log(a); // o/p: a value change to string type
*/

// To understand the Let first uncomment single time  from 35 to 71 loc
/*
// 2 let the Data variable 
let b=12;
console.log(b); // o/o: 12
// inside the block
{
    let b= 56;
    console.log(b);  // o/p: 56
}
console.log(b);  // o/p: 12
//conclusion: let is  a blocked scoped

// now b value is 12, try to change it
// let b=56;
// console.log(b); // error show b has already declared.
// // conclusion: let cannot be redeclared.

// var b=5;
// console.log(b);  // identifier has been already declared
// //conclusion: datatype not change of same identifier 

// let b=56;
// console.log(b); // Identifier 'b' has already been declared (at Variables.js:54:5)
// // conclusion: in let if you give value to identifier and now again you give same value to identifier it give you error

// without try let to change the identifier b value
// b = 54;
// console.log(b); // o/p: 54
// // conclusion: it change without use of let

// b= "Pawan";
// console.log(b); // o/p: Pawan 

// let b="Pawan"
// console.log(b); // error: cannot access before it initilization

*/

// To understand the const first uncomment single time  from 74 to 100  loc
/*

// 3 Const data variable
const c=5;
console.log(c);  // o/p:5
//inside the block
{
    const c=56;
    console.log(c); // o/p: 56
}
console.log(c); //o/p:5
//conclusion:  Const is a blocked scoped.

// const c value is 5, try to change it
// const c=8;
// console.log(c); //Identifier 'c' has already been declared
// // conclusion: const is not redeclared

// change without any data type
// c=89;
// console.log(c); // error : Assignment to constant variable
// //conclusion: Without the data type the const not be changed.

// var c=78;
// console.log(c); // error: c has already been declared.

*/

// To understand the  first uncomment single time  from 103 to 134 loc
/*
// 3 let try without data variables
 q=98;
 console.log(q); // o/p: 98
// inside the block
 {
    q=78
    console.log(q); // o/p: 78
 }
 console.log(q); // o/p: 78

//  Conclusion: it is not a globally scoped and not a block scooped. 

// q value is 78, now try to change it
q=77;
console.log(q); // o/p : 77
//  Conclusion: value without any data variable can be updated

// let q=58;
// console.log(q); // error:Cannot access 'q' before initialization

var q=54;
console.log(q);

q=8;
console.log(q);
// conclusion: if we use let it not be accept but if we use var it be accepted to change the identifier value

q="Pawan"
console.log(q);

*/



