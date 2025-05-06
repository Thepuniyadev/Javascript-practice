console.log("Array methods");

/*
// 1.> Array map(), 

let arr1 = [1,2,3,4];
console.log("THE arr1 value are : ", arr1); // o/p:THE arr1 value are :  (4) [1, 2, 3, 4]

console.log("let see array map: "); 
// THere are three types of argument 
// 1. first argument : is used to array Element
// 2. second argument : is used to index of an array
// 3. third argument : is used to array 

let as = arr1.map((value) => {  // i used only argument one 
return value + 1;
})
console.log(as); // o/p: (4) [2, 3, 4, 5]

// let see brifly 
let as1 = arr1.map((value) => {  // i used only argument one 
    console.log(value); 
    //return value + 1;
    })
    console.log(as1);
    //console.log(as); 
    // o/p: 1 2 3 4
    // (4) [undefined, undefined, undefined, undefined]

    // now paas all arguments
    
    let as2 = arr1.map((value,index,array) =>{
        return value + index;
    })
    console.log(as2); // o/p:  [1, 3, 5, 7]

    // // conclusion: 
  //  // The map() method creates a new array by performing a function on each array element.

   // // The map() method does not execute the function for array elements without values.

   // // The map() method does not change the original array.
   

    */

   /*
   // 2.> Array filter(), The filter() method creates a new array with array elements that pass a test.

   let arr2 = [12,5,6,89,74,36,4];
   let st2 = arr2.filter((value) => {
    return value<10; // it return less than 10 value
   })
   console.log(st2); // o/p: (3) [5, 6, 4]
   console.log(typeof st2); // object
*/

   // 3>> Array reduce()

   let arr3 = [1,2,3,4,5];
   let st3 = arr3.reduce((arg1,arg2)=> {
    return arg1 + arg2;
   })

   console.log(st3); // o/p: 15
   
   
