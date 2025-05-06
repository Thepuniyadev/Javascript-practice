console.log("This is a guess game exercise : ");

// Task: 1.> to generate a random number and store in a variable in js ,
// take input from user and tell them whether the guess was correct, greater or less than 
// 3. 100 - guess number is the score of the user , tell them, and the program is terminated once the guess number is corecect and result is declared.
let count = 0;
let x = Math.floor((Math.random()*100)+1);
console.log(x);

// Make sure to uncomment from 13 to 49, after opening the console screen.
//and once you done again cooment in vs code

// let ip_n = prompt(" Enter a number between 1 to  100 : ");
// ip_n = Number.parseInt(ip_n);
// console.log("your first  guessed number is : ", ip_n);
// if(x==ip_n)
// {
//     console.log("Bravo!!! you guessed at first time: ");
//     console.log("And your score : 100 ");
   
    
// }
// else{
// let guess = 1
// while(x!=ip_n)
// {
//     count++;
//     guess++;
//     if(x>ip_n)
//     {
// console.log(" Your guess number is lesser than computer guessed number."); 
// }
// else
// {
// console.log("Your guess number is greater than comuter guessed number. "); 
// }
// // console.log("Please write again number(1-100) : ");
// console.log("Please try again ");
// let n = prompt(" Enter a number (1 to  100) : ");
// console.log("Now, your guessed number be : ", n);
// n = Number.parseInt(n);
// ip_n = n;
// }

// console.log("Congrats! Finally you get accurate guessed");
// console.log("You take "+guess +"guess to get the acurate result." );
// let score = (100 - count);
// console.log(" So, your score be : ", score);
// }