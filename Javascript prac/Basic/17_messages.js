console.log("see different messages: ");
/*
// alert
alert("Write a value : ");
// prompt
let a = prompt("Enter here : ");
// convert in number because it type is string
a = Number.parseInt(a);
document.write(a);
*/

/*
// we also give a default value 
let a1 = prompt("Enter here : ", "56");
// convert in number because it type is string
a1 = Number.parseInt(a1);
document.write(a1);
*/

// confirm
alert("Write a value : ");
// prompt
let a2 = prompt("Enter here : ");
// convert in number because it type is string
a2 = Number.parseInt(a2);
// see confirm
let write = confirm("If you confirm click OK else click Cancel");
if(write){
    document.write(a2);    
}
else{
    document.write("Please allow me:");
}