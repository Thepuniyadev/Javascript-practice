console.log("Stack and heap");
// stack -- store data but it store the copy of the data, mean if data change actual data not change
// primitive data type store in stack

// heap --  store data but it store the refrence of data, mean if refrence data change, actual daa also change

let v1 = "few";
let v2 = v1;
console.log(v2); // few
v2="less"
console.log(v2); // less

let v3="few"
v4="less"
v4=v3;
console.log(v4)// few

const myobj = {
    name:"ramesh",
    email:"ramesh@com"
}

myobj.name = "kahll"

console.log(myobj.name)