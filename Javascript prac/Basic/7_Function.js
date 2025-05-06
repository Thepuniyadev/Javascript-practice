console.log("Let see function");
console.log("function is a keyword ");
console.log("Syntax ");
console.log("function function_name(){\n---code to be executed --\n}");
//1. create a function
// there are two way to create a function, one is normal way and other is arrow function mostly used in modern js
// 1. Function without parameter
/*
// normal way
function print()
{
    console.log("Print is done");
}

// now invoke this function
print();

// Arrow function
const print2 = () =>
{
    console.log("2nd time Print is done");
}
print2();
*/
// 2. Function with parameters
// function sum(x,y)
// {
//     summation = x+y;
//     console.log("summation of x and y is : ", summation);
// }

// sum (5,4);

// experiment : what happen if there is 3 parameter paas but in actual function there is only 2 parameters
// sum(1,2,5); // o/p : 3

// experiment: what happen if there is 1 parameter paas but in actual function there is only 2 parameters
// sum(5); // o/p: NaN
/*
// 3. Function with parameters and return type
function calculation(a,b,c)
{
return a+b+c;
}
console.log("Additon of a,b and c is : ",calculation(2,5,6));
*/

/*
// 4. Function without parameters and return type
function calculation2()
{
int x=56;
int y=6;
return x-y;
}
console.log("The subtraction of x and y is : ",calculation2());
// error:Uncaught SyntaxError: Unexpected identifier 'y' 
// Conclusion: not working

*/

function text(x,y)
{
    console.log("The text is : ", x,y);
}

text ("PAWAN","AMAN");