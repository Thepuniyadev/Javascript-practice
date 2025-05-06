console.log("Array methods :");

/*
// 1.> sort() method: sort the alphabet, sort()
let alphabet_all_capital = ["A","Z","Y","C","D"];
console.log(alphabet_all_capital.sort()); // o/p: ['A', 'C', 'D', 'Y', 'Z']

// exp2: all alphabet small letter
let alphabet_all_small = ["a","z","y","c","d"];
console.log(alphabet_all_small.sort());// o/p:  ['a', 'c', 'd', 'y', 'z']

// exp 3: mixed letter
let alphabet_mixed = ["a","Z","y","C","d"];
console.log(alphabet_mixed.sort()); // o/p: ['C', 'Z', 'a', 'd', 'y']
// unexpected result may be computer have their ascii value

// exp 4: mixed letters 1
let mixed_letters1 = ["Apple", "Banana", "Zebra", "Hat", "Cat"];
console.log(mixed_letters1.sort()); // o/p: ['Apple', 'Banana', 'Cat', 'Hat', 'Zebra']

// exp 5: mixed letters 2
let mixed_letters2 = ["aPPLE", "banana", "Zebra", "haT", "Cat"];
console.log(mixed_letters2.sort()); // o/p:  ['Cat', 'Zebra', 'aPPLE', 'banana', 'haT']

// conclusion: The system give first piority to "only first letter", and second piority is "the first letter should be capital", and then the first small letter
*/

/*
// 2. Reverse method : reverse the array elements, reverse()
let r_letter = ["A","Z","t","C","d"];
console.log(r_letter.reverse()); // o/p: ['d', 'C', 't', 'Z', 'A']

let nr_letter = [1,5,8,6];
console.log(nr_letter.reverse()); // o/p: [6, 8, 5, 1]
*/

// 3 . sort method on number
// exp 1: 
// let num1 = [21,100];
// console.log(num1.sort()); // o/p: [100, 21]
// conclusion: it show 100 is smaller than 21, because this sort take first value for 21 it's 2 and for 100 it's 1. that's why it show 100 is less than 21.

// so, to solve this problem we use compare function
// syntax: function(a, b){return a - b}
//The compare function should return a negative, zero, or positive value, depending on the arguments:

// If the result is negative, a is sorted before b.

// If the result is positive, b is sorted before a.

// If the result is 0, no changes are done with the sort order of the two values.

const points = [100,21];
function change(){
    points.sort(function(a, b){return a - b});
    console.log(points);
}


const n = [45, 23, 87, 4, 6];
n.sort(compare);
function compare(a,b) 
{
    return a-b; // ascending no
}
console.log(n); // o/p : [4, 6, 23, 45, 87]

const n11 = [45, 23, 87, 4, 6];
n11.sort(compare1);
function compare1(a,b) 
{
    return b-a; // descending no
}
console.log(n11); // o/p: [87, 45, 23, 6, 4]