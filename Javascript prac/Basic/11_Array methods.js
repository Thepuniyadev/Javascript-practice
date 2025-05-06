console.log("Array Methods: ");

let color=['blue','white',"green"];
console.log(color,typeof color); // array type is object

//  Array methods:

//  1. converting array to string
let a = color.toString();
console.log(a,typeof a); // b is now store string type
// but  we do like this.....
color.toString();
console.log(color,typeof color);  // o/p: ['blue', 'white', 'green'] 'object'
// it not work

// 2. join method
let b = color.join(" is a color,\n");
console.log(b); // o/p: blue is a color, white is a color, green
// except last it join all other index
// // exp1. ... is not work
// let e1 = color[2].join(" is a color");
// console.log(e1);

// 3. pop and push method
let c = color.pop(); // it remove last element of an array
console.log(c); // o/p: green

color.push("Purple"); // it add element in last index of an array
console.log(color); // o/p: (3) ['blue', 'white', 'Purple']

// 4. shift and unshift method
let d = color.shift(); // it remove first element of an array
console.log(d); // o/p:  blue

color.unshift("Pink"); // it add element in first index of an array
console.log(color); // o/p: (3) ['Pink', 'white', 'Purple']

// 5. concat method
console.log(" Concat apply :");
console.log("This is array of color : ",color);
let color1 = ["Grey","Yellow", "Black"];
console.log("This is array of color1 : ",color1);
let color2 = ["brown","yelloish"];
console.log("This is array of color2 : ",color2);
console.log(" Now, i concat color 1 and color2 in color : ");
let concat_color = color.concat(color1, color2);
console.log(concat_color);

// splice and slice method

//--- The splice() method adds new items to an array
let item = ['pencil','rubber','shopner'];
console.log(item); //o/p: (3) ['pencil', 'rubber', 'shopner']
item.splice(0,2,"Scale","compass");
console.log(item); //o/p: ['Scale', 'compass', 'shopner']
// splice() to remove elements without leaving "holes" in the array:
let ret = item.splice(0,2);
console.log(item,ret); //o/p:['shopner']

/*
The first parameter (0) defines the position where new elements should be added (spliced in).

The second parameter (1) defines how many elements should be removed.

The rest of the parameters are omitted. No new elements will be added.
*/

//-- slice() method
//The slice() method creates a new array.
let number = ["zero","one","two","three","four","five","six","seven"];
console.log(number,typeof number);
let num = number.slice(3); // it start to 3 and move to end
console.log(num); // o/p:(5) ['three', 'four', 'five', 'six', 'seven']
console.log(number); 
let num1 = number.slice(1,3);  // print between 1 to 2
console.log(num1); // ['one', 'two']
let num2 = number.slice(3,4); // print between 3 to 3
console.log(num2); // o/p: ['three']




