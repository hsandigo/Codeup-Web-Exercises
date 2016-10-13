/**
 * Created by humbertosandigo on 10/13/16.
 */
//HOMEWORK


// take an array of strings containing all the states
// return only states that start with the letter T
var states = [Alabama, Alaska, Arizona, Arkansas, California, Colorado, Connecticut, Delaware, Florida, Georgia, Hawaii,
    Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana, Maine, Maryland, Massachusetts, Michigan, Minnesota,
    Mississippi, Missouri, Montana, Nebraska, Nevada, New Hampshire, New Jersey, New Mexico, New York, North Carolina,
    North Dakota, Ohio, Oklahoma, Oregon, Pennsylvania, Rhode Island, South Carolina, South Dakota, Tennessee,
    Texas, Utah, Vermont, Virginia, Washington, West Virginia, Wisconsin, Wyoming];

function startsWithT(element){
    return element[0] == 'T';
}
var i, statesWithALetterAtTheBeginning = [];
for (i = 0; i < states.length; i++) {
    if (states[i][0] == 'T') { //does this one start with a T?
        statesWithALetterAtTheBeginning.push(states[i]);
    }
}
console.log(statesWithALetterAtTheBeginning);

// make another function that returns a new array of all the states >= two "s" characters
var i, statesWithMoreThan2LetterS = [];
for (i = 0; i < states.length; i++) {
    if (states[i].indexOf('s') < states[i].lastIndexOf('s')) { //does this one contain 2 or more letter s?
        statesWithMoreThan2LetterS.push(states[i]);
    }
}
console.log(statesWithMoreThan2LetterS);

// make a function that squares each number on an array
// take an array of numbers and make a forEach that multiplies each number by itself
// function should return the arrayOfSquares
//mapping a function
function squares(numbers) {
    var squared = [];
    numbers.forEach(function(number){
        squared.push(number * number);
    });
    return squared;
}
console.log(squares([2,10,11,8,5]));



// write a function that takes an array of lowercase names
// Uppercase the first letter of each name
// and returns only the names that start with "Y"
function lowercaseNamesWithY(names) {
    var namesWithY = [];
    names.forEach(funtion(name){
        if (name[0].toUpperCase() == 'Y') {
            namesWithY.push(name.substring(0, 1).toUpperCase() + name.substring(1));
        }
    });
    return namesWithY;
}
console.log(lowercaseNamesWithY(['ringo', 'john', 'paul', 'george', 'yoko']));



// write a function that takes an array of numbers 1-10
// return the sum of only the numbers divisible by 3


function onlyDivisibleByThree(numbers){
    var sum = 0;
    numbers.forEach(function(number){
        if (number % 3 == 0){
            sum += number;
        }
    });
    return sum;
}
console.log(onlyDivisibleByThree([1, 3, 6, 7, 9, 12]));