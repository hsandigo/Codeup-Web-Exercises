/*Created by humbertosandigo on 10/10/16.*/


"use strict";

var myNameIs = "Tito"; // TODO: Fill in your name here.

// TODO:
// Create a function called 'sayHello' that takes a parameter 'name'.
// When called, the function should log a message that says hello from the passed in name.

function sayHello(name){
    return "Hello from " + name;

}

//TODO: Call the function 'sayHello' passing the variable 'myNameIs' as a parameter.

console.log (sayHello(myNameIs));
console.log (sayHello("Ryan is helping me understand this - yay! "));


// Don't modify the following line
// It generates a random number between 1 and 100 and stores it in random
var random = Math.floor((Math.random()*100)+1);

// TODO:
// Create a function called 'isOdd' that takes a number as a parameter.
// The function should use the ternary operator to log a message.
// The log should tell the number passed in and whether it is odd or not.
// TODO: Call the function 'isOdd' passing the variable 'random' as a parameter.

function isOdd(number){
    // return (number % 2 !==0) ? true: false;
    if(number % 2 !== 0){
        return true;
    }else {
        return false
    }
}

console.log(isOdd(random));
console.log(isOdd(5));
console.log(isOdd(2));

/*
write a function called (a,b)

write subtract (a,b) that subtracts b from a
write multiply (a,b)
write divide (a,b)

write square(number)

write sumOfSquares (a,b)
squares a, squares b
returns the sum of those numbers
*/


function subtract(a, b) {
    return b - a;
}

 function multiply(a, b) {
    return a * b;
 }

 function divide(a,b){
    return b / a;

 }

 console.log("the result of adding 1 and 1 is " + add(1,1));
 console.log("2 minus 1 is " + subtract(2,1));
 console.log(square(5));


 function square(number){
    return multiply (number, number)
 }

/*
 function sumOfSquares (a,b){
    return add(square(a); square(b));
 }
console.log("the sume of the squares of 2 and 3 are " + sumOfSquares(2,3));

*/