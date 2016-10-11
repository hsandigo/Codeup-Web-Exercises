/**
 * Created by humbertosandigo on 10/10/16.
 */
"use strict";

// TODO: Ask the user for their name.
//       Keep asking if an empty input is provided.
var answer = prompt("What is your name?");
while (answer == "" || answer == null) {
    answer = prompt("What is your name?");
}

// TODO: Show an alert message that welcomes the user based on their input.
alert("Welcome " + answer);

// TODO: Ask the user if they like pizza.
//       Based on their answer show a creative alert message.
var answer = confirm("Do you like pizza?");
// while (answer == "" || answer == null)
if (answer){
        alert("Cowabunga!");
} else{
    alert("Y U no like pizza?!");
}