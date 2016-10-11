/*Created by humbertosandigo on 10/11/16.*/

function average3Grades() {
    var total = 0; //you have to initialize this one so that you can avoid NaN
    var grade;
    for (var i = 0; i < 3; i++) {

        grade = parseInt(prompt("Enter your grade"));
        while (isNaN(grade)|| (grade < 0 || grade > 100)){
            grade = parseInt(prompt("Enter your grade as a number"));
        }
        total = total + grade;
        console.log("total is " + total)
    }
    return total/3;
}


function genericGradesAverage() {
    var answerIsConfirmed = confirm("Add another grade?");

}


//Use a confirm prompt to ask the student for more grades Add another grade? (Ok, Cancel).
// If the user clicks on Cancel stop asking for grades and calculate the average.

//THIS IS WHERE YOU CALL THE FUNCTIONS SO THAT THEY ACTUALLY WORK
if (average3Grades() >= 80) {
    alert("You're Awesome!");
} else {
    alert("You need to practice more");
}

if (genericGradesAverage() != "ok"){
    alert("Cancel");
} else{
    alert("Ok, add another grade.");
    }
