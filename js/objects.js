(function(){
    "use strict";

    // TODO: Create person object
    // var person = todo;

    var person = {};
    // person.hair = "curly";
    // person.skin = "silky smooth";
    // person.eyes = "striking";
    // person.style = "fantastic";
    // person.personality = "don't be a drag, just be a queen";
    person.firstName = "Tito";
    person.lastName = "Sandigo";
    person.sayHello = function(){
        alert("Howdy from " + this.firstName + this.lastName);
    };
    console.log(person);
    // TODO: Create firstName and lastName properties in your person object; assign your name to them

    // TODO: Add a sayHello method to the person object that
    //       alerts a greeting using the firstName and lastName properties

    // Say hello from the person object.
    // person.sayHello();
})();
