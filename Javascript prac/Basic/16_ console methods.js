console.log("Console methods : ");

// console.log(console);

console.log( typeof console); // object

// let see some methods

// 1.> error() method
console.error("This is a error "); 

// 2.> assert() method: it paas if argument is true
console.assert(21>5);
console.assert(21<5);  // Assertion failed
 
// 3.> clear() method
 console.clear();
 
 // 4.> table() method: 
 // first i create an object
 obj = {
a: 4, b: 5, c:6
 };
 console.table(obj);
// for array
 array =[12,34,67];
 console.table(array);
 // let experiment
//  console.table(array,obj); // only take first argument to make the table 

// 5.> warn() method
console.warn("warn message");

// 6.> info() method 
console.info("INfo here");

// 7.> time() method
console.time("for loop");
for(let a =10; a>1; a-- )
{
}
console.timeEnd("for loop"); // for loop: 0.0390625 ms
// while loop
console.time("while");
let a2= 10
while(a2>1){
    a2--;
}
console.timeEnd("while"); //while: 0.006103515625 ms 
// while loop take less time than for loop

// there are other methods also;