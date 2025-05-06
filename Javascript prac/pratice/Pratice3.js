console.log("welcome to pratice 3");
// 1.> WAP using prompt fnction to take input of age as a value from a user and use alert to tell him if he can drive

// 2.> use confirm to ask the user to prompt again
// 3.> show error if he write negative age



// ist way 
let p1;
do{
    let age = prompt("Enter your age :  ");
age= Number.parseInt(age);
    if(age>=18)
{
    alert("your age are OK to Drive vechile on a road");
}
else if(age<0)
{
    console.error("You type in negative age value.")
}
else{
    alert("You are minor");
}
let p = prompt("Do you Want to continue to check, click 1 for that");
p1=Number.parseInt(p);
} // end of do loop

while(p1==1);



// another way to do this code
/*
let run_again =true;

while(run_again)
{
    
let age = prompt("Enter your age :  ");
age= Number.parseInt(age);

const fun_drive = (age) =>  // create a function and paas the argument as a age
{
   return age>=18?true:false; // return true or false to the age
}

if(fun_drive(age)) // work on true
{
    alert("your age are OK to Drive vechile on a road"); 
}
else{
    alert("You are minor"); 
}

run_again = confirm("DO you want to continue ? "); // if you click ok it select true and paas to the rn again
} // end of while loop

*/


// 2.> WAP to change the url to road website if the user enter a number greater than 20

let n = prompt("Again, Enter your age  :  ");
n= Number.parseInt(n);
if (n>=18)
{
    location.href = "https://morth.nic.in/national-road-safety-policy-1"
}
