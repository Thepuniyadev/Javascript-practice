console.log("Array loops");

let n1 = [5,6,8,7];  // 5,6,8,7, are the elements of n1 array
 let n2 = [4,5,6,7];

// 1. For each : here we perform operation to the elemet array
// The forEach() method calls a function (a callback function) once for each array element.
n1.forEach((elemene) =>{
    console.log(elemene*elemene);
})


 console.log("ADD and multiply ");
n2.forEach((element) =>{
    console.log("ADD of element " +element +" to element " +element +"=", element+element);
    console.log("Multiply element " +element +" to 3 = ",element*3);
})
/*
// o/p: ADD of element 4 to element 4= 8
 Multiply element 4 to 3 = 12
 ADD of element 5 to element 5= 10
  Multiply element 5 to 3 = 15
 ADD of element 6 to element 6= 12
  Multiply element 6 to 3 = 18
  ADD of element 7 to element 7= 14
  Multiply element 7 to 3 = 21
  */

  // 2.> Array.from : used to convert in array
  let name = "This is a string ";
  let ar = Array.from(name); // use Array.from() convert in array
  console.log(typeof ar);

// 3.> for of loop in array
let index = 0;
for (let i of n1 ){
    
    console.log(" Iteration of " +index +" : ",i);
    index++;
} 

// o/p: 
/*
Iteration of 0 :  5
Iteration of 1 :  6
Iteration of 2 :  8
Iteration of 3 :  7
 */


// 3.> for in loop,  in array
// it show key where your element stored like index number
for (let i in n1 ){
    
    console.log(" index number is : ",i);
  
} 
/*
// o/p:
index number is :  0
index number is :  1
index number is :  2
index number is :  3
*/