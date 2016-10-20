/**
 * Created by humbertosandigo on 10/20/16.
 */

//variables for NUMBERS and OPERATORS
var leftBox = document.getElementById("left");
var middleBox = document.getElementById("middle");
var rightBox = document.getElementById("right");

var zeroButton = document.getElementById("zero");
var oneButton = document.getElementById("one");
var twoButton = document.getElementById("two");
var threeButton = document.getElementById("three");
var fourButton = document.getElementById("four");
var fiveButton = document.getElementById("five");
var sixButton = document.getElementById("six");
var sevenButton = document.getElementById("seven");
var eightButton = document.getElementById("eight");
var nineButton = document.getElementById("nine");

var decimalButton = document.getElementById("decimal");
var divideButton = document.getElementById("divide");
var multiplyButton = document.getElementById("multiply");
var minusButton = document.getElementById("minus");
var plusButton = document.getElementById("plus");
var equalButton = document.getElementById("equal");
var clearButton = document.getElementById("clear");



//functions for NUMBERS
function zeroButtonClicked () {
    event.preventDefault();
    if (middleBox.value == ""){
        document.getElementById("left").value += "0";
    }else{
        document.getElementById("right").value += "0";
    }
}
function oneButtonClicked () {
    event.preventDefault();
    if (middleBox.value == ""){
        document.getElementById("left").value += "1";
    }else{
        document.getElementById("right").value += "1";
    }
}
function twoButtonClicked () {
    event.preventDefault();
    if (middleBox.value == ""){
        document.getElementById("left").value += "2";
    }else{
        document.getElementById("right").value += "2";
    }
}
function threeButtonClicked () {
    event.preventDefault();
    if (middleBox.value == ""){
        document.getElementById("left").value += "3";
    }else{
        document.getElementById("right").value += "3";
    }
}
function fourButtonClicked () {
    event.preventDefault();
    if (middleBox == ""){
        document.getElementById("left").value += "4";
    }else{
        document.getElementById("right").value += "4";
    }
}
function fiveButtonClicked () {
    event.preventDefault();
    if (middleBox.value == ""){
        document.getElementById("left").value += "5";
    }else{
        document.getElementById("right").value += "5";
    }
}
function sixButtonClicked () {
    event.preventDefault();
    if (middleBox.value == ""){
        document.getElementById("left").value += "6";
    }else{
        document.getElementById("right").value += "6";
    }
}
function sevenButtonClicked () {
    event.preventDefault();
    if (middleBox.value == ""){
        document.getElementById("left").value += "7";
    }else{
        document.getElementById("right").value += "7";
    }
}
function eightButtonClicked () {
    event.preventDefault();
    if (middleBox.value == ""){
        document.getElementById("left").value += "8";
    }else{
        document.getElementById("right").value += "8";
    }
}
function nineButtonClicked () {
    event.preventDefault();
    if (middleBox.value == ""){
        document.getElementById("left").value += "9";
    }else{
        document.getElementById("right").value += "9";
    }
}


//functions for OPERATORS
function decimalButtonClicked () {
    event.preventDefault();
    if (middleBox.value == ""){
        if (document.getElementById("left").value.indexOf(".") == -1) { // there's no dot (it returns a -1 because
            document.getElementById("left").value += ".";
        }
    }else{
        if (document.getElementById("right").value.indexOf(".") == -1) { // there's no dot
            document.getElementById("right").value += ".";
        }
    }
}
function divideButtonClicked () {
    event.preventDefault();
    document.getElementById("middle").value = "/";
}
function multiplyButtonClicked () {
    event.preventDefault();
    document.getElementById("middle").value = "*";
}
function minusButtonClicked () {
    event.preventDefault();
    document.getElementById("middle").value = "-";
}
function plusButtonClicked () {
    event.preventDefault();
    document.getElementById("middle").value = "+";
}

function equalButtonClicked () {
    event.preventDefault();
    if (middleBox.value == "/") {
        leftBox.value = leftBox.value / rightBox.value
    } else if (middleBox.value == "*") {
        leftBox.value = leftBox.value * rightBox.value
    } else if (middleBox.value == "-") {
        leftBox.value = leftBox.value - rightBox.value
    } else if (middleBox.value == "+") {
        leftBox.value = parseFloat(leftBox.value) + parseFloat(rightBox.value);
    }
    middleBox.value = "";
    rightBox.value = "";
    document.getElementById("").value = "=";
}

function clearButtonClicked () {
    event.preventDefault();
    leftBox.value = "";
    middleBox.value = "";
    rightBox.value = "";
}


//eventListeners for BUTTS, OPERATORS
zeroButton.addEventListener("click", zeroButtonClicked);
oneButton.addEventListener("click", oneButtonClicked);
twoButton.addEventListener("click", twoButtonClicked);
threeButton.addEventListener("click", threeButtonClicked);
fourButton.addEventListener("click", fourButtonClicked);
fiveButton.addEventListener("click", fiveButtonClicked);
sixButton.addEventListener("click", sixButtonClicked);
sevenButton.addEventListener("click", sevenButtonClicked);
eightButton.addEventListener("click", eightButtonClicked);
nineButton.addEventListener("click", nineButtonClicked);

decimalButton.addEventListener("click", decimalButtonClicked);
divideButton.addEventListener("click", divideButtonClicked);
multiplyButton.addEventListener("click", multiplyButtonClicked);
minusButton.addEventListener("click", minusButtonClicked);
plusButton.addEventListener("click", plusButtonClicked);
equalButton.addEventListener("click", equalButtonClicked);
clearButton.addEventListener("click", clearButtonClicked);


//THINGS THAT DIDN'T WORK
/*oneButton.addEventListener("click", function(){
 //        document.getElementById("left").innerText += "1";
 left.value = "1";
 });*/

//document.getElementById("divide")
//    .addEventListener("click", function(){
//        document.getElementById("middle").value += "/";
//        });
//document.getElementById("multiply")
//    .addEventListener("click", function(){
//        document.getElementById("middle").value += "*";
//        });

//functions for NUMBERS and OPERATORS
//function oneButtonClicked (){
//    event.preventDefault();
//    if (left.value += "1");
//

//    if (left.value += "1") {
//    } else {
//        right.value += "1";
//    }
//}

//var leftBox = document.getElementById("left");
//var oneButton = document.getElementById("one");
//function click () {
//    event.preventDefault();
//    left.value += "1";
//}

//document.getElementById("two")
//    .addEventListener("click", function(){
//        document.getElementById("left").value += "2";
//    });
//document.getElementById("three")
//    .addEventListener("click", function(){
//        document.getElementById("left").value += "3";
//    });

//document.getElementById("divide")
//        .addEventListener("click", function(){
//            var leftBox = document.getElementById("leftBox").value;
//            var rightBox = document.getElementById("rightBox").value;
//            var result = leftInput / rightInput;
//            //clear out all the inputs
//            //set the .value or .innerHTML of the input to hold the new result
//        });
//document.getElementById("multiply")
//        .addEventListener("click", function(){
//            var leftBox = document.getElementById("leftBox").value;
//            var rightBox = document.getElementById("rightBox").value;
//            var result = leftInput * rightInput;
//            //clear out all the inputs
//            //set the .value or .innerHTML of the input to hold the new result
//        });
