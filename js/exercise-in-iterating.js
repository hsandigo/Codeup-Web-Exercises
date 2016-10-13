/*Created by humbertosandigo on 10/12/16.*/

/*
 var arrayOfNumbers = [1, 2, 3, 4, 5];
 for (var i = 0; i < arrayOfNumbers.length; i++); {
 console.log ("The element at index " + "is " + arrayOfNumbers[i]);
 }

 arrayOfNumbers.forEach(function (element, index, array){
 console.log("The element at index " + index + " is " + element);
 });

 newArray = [];
 [1, 2, 3, 4, 5].forEach(function(element, index, array){
 newArray.push(element + 1);
 });


 arrayOfEvens = [];
 [1, 2, 3, 4, 5].forEach(function (element, index, array) {
 if(isEven(element)){
 arrayOfEvens.push(element);
 }
 });

 function isEven(number){
 return number %2 == 0;
 }

 var sum = 0;
 [1, 2, 3, 4, 5].forEach(function(element, index, array){
 sum += element;
 });
 */






//Use forEach in each function you build

//Exercise 1
//Write a function that returns a new array of strings with the first letter uppercased
//Take an array of strings containing names in lowercase and uppercase only the first character
//Is this operation a type of map, filter, or reduce usage of a forEach
//newArray should be ["John", "Paul", "Ringo", "George", "Yoko"];

'use strict'

var names = ['john', 'paul', 'ringo', 'george', 'yoko'];
names.forEach(function upperCaseFirstLetterInEachString(array) {
    console.log(array.toUpperCase([0]));
});

/* Ryan's Solution
 var names = ['john', 'paul', 'ringo', 'george', 'yoko'];
 function capitalizedFirstLetterOfEachString(arrayOfStrings){
 arrayOfStrings.forEach(function (string, index) {
 var firstLetterCapitalized= string.[0].toUpperCase();
 var restOfString= string.substring(1, string.length);
 var fullString= firstLetterCapitalized + restOfString;
 arrayOfStrings[index] = fullString
 });
 return arrayOfStrings;
 }
 names = capitalizedFirstLetterOfEachString(names);
 console.log(names);
 */

//Exercise 2
//Write a function that takes an array of numbers 1-10
//and returns the product of all the numbers
//is this a type of map, filter, or reduce usage of the forEach

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function multiplyAllTheNumbers(arrayOfNumbers) {
    var product = 1;

    arrayOfNumbers.forEach(function (number) {
        product *= number;
    });
    return product;
}
console.log(multiplyAllTheNumbers(numbers));


//Exercise 3
//Write a function that returns a string containing the HTML necessary
//for an unordered list with an <li> for each person on your names array
//is this a type of map, filter, or reduce usage of the forEach

function listify(arrayOfStrings) {
    var htmlContent = "";
    htmlContent += "<ul>";

    arrayOfStrings.forEach(function (string) {
        htmlContent += "<li>" + string + "</li>";
    });

    htmlContent += "</ul>";
    return htmlContent;
}
