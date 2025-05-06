console.log("Pratice question of an array :");
/*
// 1.> Create an array of numbers and take input from the user to add numbers to this array

let array_1 = [1,2,3,4];
let index = 0;
array_1.forEach((element)=> {
let n = prompt("Give number to add the " +index +" element: ");
n = Number.parseInt(n);
console.log("Add index "+index +" element to given input number " +n +" = ",element + n);
index++;
})

 
// o/p: 
// Add index 0 element to given input number 10 =  11
// Add index 1 element to given input number 20 =  22
// Add index 2 element to given input number 30 =  33
// Add index 3 element to given input number 40 =  44


*/

/*
// 2.> Keep adding numbers to the array in 1 until 0  is added to the array
let arr_2 = [];
let n2;
console.log("Until you not give to zero it take input from you and store in array 2 :");
do{
    n2 = prompt("Enter the number : ");
    n2 = Number.parseInt(n2);
    arr_2.push(n2)
}while (n2!=0)
console.log(arr_2); // o/p: (10) [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
*/

/*
// 3.> filter for number divisible by 10 from given array
let arr_3 = [2,50,40,36,74,8];
let sta_1 = arr_3.filter((element)=>{
 return element%10==0;
})
console.log(sta_1); // o/p: [50,40]
*/

/*
// 4.> Create an array square of given number
let arr_4 = [2,536,45,8];
let sta_2 = arr_4.map((value) => {  // i used only argument one  
    return value * value;
    })
    console.log(sta_2);
*/

/*
// 5.> use reduce method to calculate factorial of a given number from an array of first n natural number (n being the number whose factorial needs to be calculated)
let arr3 = [1,2,3,4,5];
   let st3 = arr3.reduce((arg1,arg2)=> {
    return arg1 * arg2;
   })

   console.log(st3);

*/