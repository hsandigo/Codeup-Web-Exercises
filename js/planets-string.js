(function() {
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    // var planetsArray;

    // TODO: Convert planetsString to an array, save it to planetsArray.
    var planetsArray = planetsString.split('|');
    console.log(planetsArray);

    // TODO: Create a string with <br> tags between each planet. console.log() your results.
    //       Why might this be useful?
    var planetsBreakString = "Mercury <br> Venus <br> Earth <br> Mars <br> Jupiter <br> Saturn <br> Uranus <br> Neptune";
    var planetsBreakArray = planetsBreakString.split('<br>');
    console.log(planetsBreakArray);
    // Bonus: Create a second string that would display your planets in an undordered list.
    //        You will need an opening AND closing <ul> tags around the entire string, and <li> tags around each planet.
    //        console.log() your results.
    var htmlContent = "<ul>";

    planetsArray.forEach(function(planet){
        htmlContent += "<li>" +planet + "</li>"
    });
    htmlContent += "</ul>";
    console.log(htmlContent);

    var htmlString = "<ul><li>";
    htmlString += planetsArray.join("</li><li>");
    htmlString += "</li></ul>";
    console.log (htmlContent);

})();
