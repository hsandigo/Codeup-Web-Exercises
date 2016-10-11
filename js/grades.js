/*Created by humbertosandigo on 10/11/16.*/

"use strict";

//you still have input coming from somewhere, even though you haven't set parameters

function getNumericGrades(){
    var grade = parseInt(prompt("Enter your grade"));

    while (isNaN(grade)|| (grade < 0 || grade > 100)){

        grade = parseInt(prompt("Enter your grade as a number between 0 and 100"));
        console.log(grade);
        console.log(typeof grade); //you want to console.log the data and the data type of what your code is doing
    }
    return grade;
}

function average3Grades() {
    var total = 0; //you have to initialize this one so that you can avoid NaN
    //var grade = 0; // helps if you set this to equal to 0
    for (var i = 0; i < 3; i++) {

        total = total + getNumericGrades();
        // you can also rewrite the line above as
            //grade = getNumericGrade();
            //total = total + grade;
        // console.log("total is " + total)
    }
    return total/3;
}
//THIS IS WHERE YOU CALL THE FUNCTIONS SO THAT THEY ACTUALLY WORK
if (average3Grades() >= 80) {
    alert("You're Awesome!");
} else {
    alert("You need to practice more");
}


function genericGradesAverage() {
    var total = 0;
    var counter = 0; //this is to count how many times the loop runs
    var userWantsToAddAnotherGrade;
    var average;

    do{
        //total += getNumericGrade();
        total = total + getNumericGrades;//you can only access this function because all of these functions are global
        userWantsToAddAnotherGrade = confirm("Do you want to add another grade?");
        counter++;
    }while(userWantsToAddAnotherGrade);

    average = total/ counter;
    return average;
}

var finalGrade = genericGradesAverage();
if (finalGrade >= 80){
    alert("You're awesome!")
}else{
    alert("you need some more practice!");
}
