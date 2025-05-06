console.log("Operators and Expression 2 part");
/*
Binary Representation	                 Decimal value
00000000000000000000000000000101	             5
11111111111111111111111111111011	            -5
00000000000000000000000000000110	             6
11111111111111111111111111111010            	-6
00000000000000000000000000101000	            40
11111111111111111111111111011000	           -40
*/

/*
// Logical Operator
let a=5, b=8;
// 1. && Logical end operator
if(a>2 && b<45) // && verifies both condtion is true or not, if any one is false then o/p be change
{
    console.log("true");
}

// 2. || or operator
 if(a>2 || b>5)
 {
    console.log("true");
 }
 //3. ! not operator
*/


/*
// Type operator
let a=5;
// 1. typeof operator : return the type of a variable
console.log(typeof a); 
// 2. instanceof operator
// Returns true if an object is an instance of an object type
*/

// note: JavaScript Uses 32 bits Bitwise Operands
// JavaScript stores numbers as 64 bits floating point numbers, but all bitwise operations are performed on 32 bits binary numbers.
// Bitwise operator

/*
//1. & AND
//: Set each bit to 1 if both bit to be 1
let a=5;         // 00000000000000000000000000000101
let b=1;         // 00000000000000000000000000000001
let x = a & b;   // 00000000000000000000000000000001 (1)
console.log(x); // o/p: 1

//2. \ or operator
let y = a | b;   // 00000000000000000000000000000101 (5)
console.log(y); // o/p : 5

//3. Not operator
let n=~5;
let o=n; // 11111111111111111111111111111010 (-6)
console.log(n); // o/p : -6

// 4. ^ xor operation
let xor = a ^ b;
console.log(xor); // 4

// 5. << Bitwise Left Shift (<<)
// : This is a zero fill left shift. One or more zero bits are pushed in from the right, and the leftmost bits fall off:
let bls = a << b; // 00000000000000000000000000001010 (10)
console.log(bls); // 10

// 6. >> Bitwise Right Shift (>>)
// : This is a sign preserving right shift. Copies of the leftmost bit are pushed in from the left, and the rightmost bits fall off:

let brs = -a >> b;  // 11111111111111111111111111111101 (-3)
console.log(brs); // -3

// 7. JavaScript (Zero Fill) Right Shift (>>>)
// : This is a zero fill right shift. One or more zero bits are pushed in from the left, and the rightmost bits fall off:
let rs = a>>>b; //	00000000000000000000000000000010 (2)
console.log(rs); // 2
*/