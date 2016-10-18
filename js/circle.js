(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,
        getArea: function () {
            // hint: area = pi * radius^2
            return Math.PI * Math.pow(this.radius, 2);
        },
        logInfo: function (doRounding) {
            // TODO: complete this method.
            var area = this.getArea();
            if(doRounding){ // if statements expect boolean values
                area = Math.round(area);
            }
            // If doRounding is true, round the area to the nearest integer.
            // Otherwise, output the complete value

            console.log("Area of a circle with radius: " + this.radius + ", is: " + area);
        }
    };

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    circle.radius = 5; // to get back inside the object you have to use the identifier of circle.radius
    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();
