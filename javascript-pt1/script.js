//Intermediate Javascript

// let n = Math.random();
// n = n * 6 
// n = Math.floor(n) +1;
// console.log(n);

// // PART 3 - LOVE CALCULATOR - ASSESSMENT
// let yourName = prompt("What is your name?");
// let theirName = prompt("What is their name?");

// let loveScore = Math.random() * 100;
// loveScore = Math.floor(loveScore);

// alert("The Love Score for " + yourName + " and " + theirName + " is " + loveScore + "%");
// if (loveScore <= 30) {
//    alert("The Love Score for " + yourName + " and " + theirName + " is " + loveScore + "% - You should re-think this relationship");
//  }
// else if (loveScore > 30 && loveScore <= 50) {
//     alert("The Love Score for " + yourName + " and " + theirName + " is " + loveScore + "% - put more effort to grow the relationship");

// }
// else if (loveScore > 50 && loveScore <= 70) {
//     alert("The Love Score for " + yourName + " and " + theirName + " is " + loveScore + "Wow!!! this is a serious relatonship between " + yourName + " and " + theirName + " Your love is " + loveScore + "%");
// }

// else if ( loveScore > 70 && loveScore <= 90){
//     alert("The Love Score for " + yourName + " and " + theirName + " is " + loveScore + "Wow!!! this relationship is very strong between " + yourName + " and " + theirName + " Your love is " + loveScore + "%");
// }
// else if(loveScore > 90 && loveScore <= 100){
//     alert("The Love Score for " + yourName + " and " + theirName + " is " + loveScore + " Wow!!! this is true love bettween " + yourName + " and " + theirName + " Your love is " + loveScore + "%");
// }
// else {
//     alert( loveScore + "What a magnificent love between" + yourName + " and " + theirName + " , this love will last forever. ");
// }

//PART 6
// flowchart - a flowchart is a diagrammatic representation of an algorithm, or a step by step approach of solving a task.

//LEAP YEAR CHALLENGE EXERCISE
/* Write a program that work's out whether if a given year is a leap year .
A normal year has 365 days, leap years have 366, with an extra day in febuaray .
The reason why we have leap years is really fascinating.
This is how to work whether if a particular year is a leap year.
A year is a leap if  it is evenly divisible ny 4 .
Except if that year is also evenly divisible by 100.
Unless that year is also evenly divisible by 400.*/

//Part 8 
//ARRAYS 
// AN ARRAY IS A COLLECTION OF ELEMENTS OF SIMILAR DATA TYPE
// Sasha
// Michelle
// Lwethu
// Melchizedek
//let guestlist = ["Sasha","Michelle","Lwethu","Melchizedek"];
//alert(guestlist.includes[Sasha]);

//guestlist.length;
//if(guestlist.includes("Sasha"));
//alert(guestlist.includes("Sasha"));   /// tells you if something is true or false

//Part 9 
//ASSESSMENT 
/* GIVING WHAT YOU HAVE LEARNT SO FAR,
 CAN YOU WRITE SOME CODE THAT CREATES A PROMPT THAT ASKS THE GUEST WHAT IS THEIR NAME,
 WHICH THEY WILL THEN TYPE INTO THE PROMPT ,
 THE YOU WILL CHECK THE NAME AGAINST ALL THE NAMES INSIDE THE GUESTLIST
 AND IF IT DOESN'T EXIST YOU WILL SEND BACK AN ALERT THAT SAYS WELCOME,
OTHERWISE IT WILL SAY YOUR NAME IS NOT PART OF THE GUESTLIST. */

// let yourGuestlist = prompt(" What's your name? ");
// let myGuestlist = ["Sasha","Michelle","Lwethu","Melchizedek"];

// if(myGuestlist.includes(yourGuestlist)){
//     alert("Welcome to Lwethu and Sasha's Wedding " + yourGuestlist);
// }
//  else{  
// alert("Your name is not part of the guestlist");
//  }

//PART 11
//WHO'S BUYING LUNCH?

//YOU ARE GOING TO WRITE A FUNCTION WHICH WILL SELECT A RANDOM NAME FROM THE LIST OF NAMES.
// THE PERSON SELECTED WILL HAVE TO PAY FOR EVERYONE'S FOOD BILL.

// function whosBuying(names){
// let numberOfPersons = names.length;
// let selectedPerson = Math.floor( Math.random() * numberOfPersons);
// //Math.random() * numberOfPersons)
// let personSelected = names[selectedPerson];
// return personSelected + " is going to buy us lunch ";

// }
// let names = ["Sasha","Michelle","Lwethu","Melchizedek"];
// console.log(whosBuying(names));

//PART 12 
//LYRICS TO THE 99 BOTTLES OF BEER, 
// 99 BOTTLES OF BEER ON THE WALL, 99 BOTTLES OF BEER 
// TAKE ONE DOWN AND PASS IT AROUND, 
// 98 BOTTLES OF BEER ON THE WALL.

// for(let num = 99; num >= 1;  num--){
// let bottlesRemaining = "bottles";
// let subBottles = num - 1 ;

// if(num === 1 || subBottles === 1){
//     bottlesRemaining = "bottle";
// }
// else if(num ===0 || subBottles === 0){
//     bottlesRemaining = " No bottles of beer on the wall ";
// }
// console.log(num + " " + bottlesRemaining + " of beer on the wall ");
// console.log(num + " " + bottlesRemaining + " of beer ");
// console.log(" Take one down and pass it around, " + subBottles + " " + bottlesRemaining + " of beer on the wall ");
// console.log(" bottles ")
// }

//FIBONACCI SERIES
//Fibonacci is an italian mathematicianwho came up with the fibonacci sequence :
//where every number is the sum of the two previous ones.
// 0,1,1,2,3,5,8,13,21,34,55,89,114....
//e.g 0,1,1,2,3,5 comes from 0+1=1
//1+1=2    1+2=3  2+3=5 etc

//ASSIGNMENT'
//CREATE A FUNCTION FibonacciGENRATOR(n)
//WHERE n IS THE NUMBER OF ITEMS IN THE SEQUENCE
//SO I SHOULD BE ABLE TO CALL FibonacciGenerator(3) amd get [0,1,1] as the output
//HINTS
//the firt 2 numbers in the sequence must be 0 and 1.
//use an array with any of the control statements/flow.

// function fibonacciGenerator(n) {
//     if (n === 1) {
//         return [0];
//     } else if ( n === 2){
//         return [0,1];
//     } else {
//         let arr = [0, 1]

        // --------------------------------------------------
        //while condition was used here
        // let i = 2;
        // // we start at i = 2 because we already have the first 2 numbers of the sequence.
        // while (i < n) {
        //     // sum the last 2 values
        //     let lastItem = arr[i - 1];
        //     let secondLastItem = arr[i - 2];
        //     let sum = lastItem + secondLastItem;

        //     // the push function adds the sum value to the array called `arr`
        //     arr.push(sum)
        //     i = i + 1;
        // }
        // --------------------------------------------------

//for condition was used as another example
//         for (let i = 2; i < n; i++) {
//             // sum the last 2 values
//             let lastItem = arr[i - 1];
//             let secondLastItem = arr[i - 2];
//             let sum = lastItem + secondLastItem;

//             // the push function adds the sum value to the array called `arr`
//             arr.push(sum)
            
//         }

//         return arr;
//     }
// }
//  let output = fibonacciGenerator(20);
// console.log(output);

//fibonacci series Solution
// function fibonacciGenerator(n){
// let output = [0];
// if(n === 1){

// }
// else if (n === 2){
// let output = [0,1]
// }
// else{
//     let output = [0,1]; // 0,1,1,2,3,5
//     // whatever value im getting here and addition to this value i want to push it 
//    output.push (output[0] + output[1]);
//    for (let i = 2; i < n; i++)
//    output.push();
// }
    

// }let output = fibonacciGenerator(3);
// console.log(output);






