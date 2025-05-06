console.log("Array");

// create an array
// 1 way to create an array
let color = ["White","Blue","green","Violet",56,84,false,true];
// print array color
console.log(color);

// check their type
console.log(typeof color); // o/p : object
console.log(typeof color[0]); // o/p: string
console.log(typeof color[4]); // o/p: number
console.log(typeof color[6]); // o/p: boolean

// check lenght of array
console.log("The length of color is :",color.length); // o/p: 8
// Access any index value
console.log(color[0]);
console.log(color[10]);  // undefined, because it not exist

// change the value
color[2]="Yellow";
console.log(color);

// 2 way to create an array
let items = [];
items[0]="car";
items[3]=56;
console.log(items); // o/p: ['car', empty × 2, 56]
// index 2 not defined, thats why it is empty

// add element in items array 
items.push="Blue";
console.log(items); // o/p: ['car', empty × 2, 56, push: 'Blue']
items[items.length]="250km/hr";
console.log(items); // o/p: ['car', empty × 2, 56, '250km/hr', push: 'Blue']

//Adding elements with high indexes can create undefined "holes" in an array:
items[9]="trial";
console.log(items); // o/p:['car', empty × 2, 56, '250km/hr', empty × 4, 'trial', push: 'Blue']

//
items[1]="index_1 fill";
items[2]="index_2 fill"
console.log(items); //o/p: ['car', 'index_1 fill', 'index_2 fill', 56, '250km/hr', empty × 4, 'trial', push: 'Blue']

// note: 
// JavaScript, arrays use numbered indexes.  

// In JavaScript, objects use named indexes.