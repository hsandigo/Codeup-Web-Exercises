/*Created by humbertosandigo on 10/12/16.*/


(function(){
    "use strict";

    // TODO: Create an array holding the names of the eight planets in our solar system in order, starting closest to the sun.
    var planets = [Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune];

    // function for logging the planets array
    function logPlanets() {
        console.log("Here is the list of planets:");
        console.log(planets);
        console.log("---- ---- ---- ----");
    }

    logPlanets();

    console.log('Adding "The Sun" to the beginning of the planets array.');
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.
        planets.unshift("The Sun");
        logPlanets();

    console.log('Adding "Pluto" to the end of the planets array.');
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.
        planets.push("Pluto");
        logPlanets();

    console.log('Removing "The Sun" from the beginning of the planets array.');
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.
        planets.shift([0]);
        logPlanets();

    console.log('Removing "Pluto" from the end of the planets array.');
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.
        planets.pop([9]);
        logPlanets();

    console.log('Finding and logging the index of "Earth" in the planets array.');
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.
        var planets = planets.indexOf("Earth");
        console.log(planets);

    console.log('Using splice to remove the planet after "Earth".');
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.
        var removed = planets.splice(3);
        console.log(removed);
        logPlanets();

    console.log('Using splice to add back the planet after "Earth".');
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.
        planets.splice(planets.indexOf('Earth') + 1, 0, 'Mars');
        console.log(planets);
        logPlanets();

    console.log("Reversing the order of the planets array.");
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.
        planets.reverse();
        logPlanets(planets);

    console.log("Sorting the planets array.");
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.
        planets.sort();
        logPlanets();
})();




/*
//new exercise in class

"use strict";

var shapes, names, i, htmlTable;
shapes = ['square', 'rectangle', 'circle', ' triangle'];
names = ['Barry', 'Jessica', 'Clark'];

function createHtmlTable(items) {...}
function itemsMatching(items, text){
    var itemsMatched = [];
    for (i = 0; i <items.length; i++){
        if (items[i].toLowerCase().indexOf(text) !== -1){ //you should prefer to use case insensitive search in your code
            itemsMatched.push(items[i]);
        }
    }
    return itemsMatched;
}

//     var htmlTable = '<table>';
//
//     for (i = 0; i < items.length, i++);{
//         htmlTable += '<tr><td>' + (i +1) + '</td><td> + items[i] + '</td></tr>';
//     }
//     htmlTable += '</table>';
//     return htmlTable;
// }


var shapesWithC = [];
for (i = 0; i <shapes.length; i++){
    if (shapes[i].toLowerCase().indexOf("c") !== -1){ //you should prefer to use case insensitive search in your code
        shapesWithC.push(shapes[i]);
    }
}

htmlTable = createHtmlTable(shapesWithC);
console.log(htmlTable);


var shapesWithC = itemsMatching();
for (i = 0; i <names.length; i++){
    if(names[i].toLowerCase().indexOf("c") !== -1){ //Case insensitive search
        namesWithC.push(names[i]);
    }
}

htmlTable = createHtmlTable(namesWithC);
console.log(htmlTable);
*/

/*
<table>
    <tr>
        <td>index</td>
        <td>element</td>
    </tr>
</table>
*/
