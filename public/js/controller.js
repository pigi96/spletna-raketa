var currentPlanet = 0;

var dirX;
var dirY;

var venus, earth, mars, luna;

var venusDescription = "<h1>Venus</h1><p>Venus is a terrestrial planet and is sometimes called Earth's 'sister planet' because of their similar size, mass, proximity to the Sun, and bulk composition. As one of the brightest objects in the sky, Venus has been a major fixture in human culture for as long as records have existed. It has been made sacred to gods of many cultures, and has been a prime inspiration for writers and poets as the morning star and evening star.</p>";
var marsDescription = "<h1>Mars</h1><p>Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System after Mercury. In English, Mars carries a name of the Roman god of war, and is often referred to as the 'Red Planet' because the iron oxide prevalent on its surface gives it a reddish appearance that is distinctive among the astronomical bodies visible to the naked eye.</p>";
var moonDescription = "<h1>Moon</h1><p>The Moon is an astronomical body that orbits planet Earth and is Earth's only permanent natural satellite. It is the fifth-largest natural satellite in the Solar System, and the largest among planetary satellites relative to the size of the planet that it orbits (its primary).</p>";

function initController() {
    venus = document.getElementById("venus");
    earth = document.getElementById("earth");
    mars = document.getElementById("mars");
    luna = document.getElementById("luna");

    $(function () {
      $("#earth-to-venus, #earth-to-venus1").click(function () {
      if (updateLoop == null)
        visitPlanet(venus);
        document.getElementById("helper1").classList.add("helper-out");
        document.getElementById("helper1").classList.remove("helper-in");
        document.getElementById("description").innerHTML = venusDescription;
        document.getElementById("video").src = "https://www.youtube.com/embed/BvXa1n9fjow?rel=0";
       document.getElementById("earth-to-venus1").style.visibility = "hidden";
       document.getElementById("earth-to-luna1").style.visibility = "visible";
       document.getElementById("earth-to-mars1").style.visibility = "visible";
      });
      $("#earth-to-luna, #earth-to-luna1").click(function () {
      if (updateLoop == null)
        visitPlanet(luna);
        document.getElementById("helper1").classList.add("helper-out");
        document.getElementById("helper1").classList.remove("helper-in");
        document.getElementById("description").innerHTML = moonDescription;
        document.getElementById("video").src = "https://www.youtube.com/embed/6AviDjR9mmo?rel=0";
        document.getElementById("earth-to-luna1").style.visibility = "hidden";
        document.getElementById("earth-to-venus1").style.visibility = "visible";
        document.getElementById("earth-to-mars1").style.visibility = "visible";
      });
    $("#earth-to-mars, #earth-to-mars1").click(function () {
      if (updateLoop == null)
        visitPlanet(mars);
        document.getElementById("helper1").classList.add("helper-out");
        document.getElementById("helper1").classList.remove("helper-in");
        document.getElementById("description").innerHTML = marsDescription;
        document.getElementById("video").src = "https://www.youtube.com/embed/D8pnmwOXhoY?rel=0";
        document.getElementById("earth-to-mars1").style.visibility = "hidden";
        document.getElementById("earth-to-luna1").style.visibility = "visible";
        document.getElementById("earth-to-venus1").style.visibility = "visible";
      });
    });
}



var updateLoop = null;
function visitPlanet(planet) {
    var start = null;
    function update(timestamp) {
        if (!start) start = timestamp;
        var progress = timestamp - start;

        rocketUserObj.updateMovement(progress);

        drawForeground();

        if (rocketUserObj.distance(planet.offsetLeft, planet.offsetTop)) {
            //clearInterval(updateLoop);
            console.log(updateLoop);
            window.cancelAnimationFrame(updateLoop);
            updateLoop = null;
            document.getElementById("helper1").classList.add("helper-in");
            document.getElementById("helper1").classList.remove("helper-out");
            return;
        }

        updateLoop = window.requestAnimationFrame(update);
    }
    rocketUserObj.moveTowards(planet.offsetLeft, planet.offsetTop);
    //updateLoop = setInterval(update, 30);
    updateLoop = window.requestAnimationFrame(update);
}

function distance(x1, y1, x2, y2) {
    var a = x1 - x2;
    var b = y1 - y2;

    var c = Math.sqrt(a*a + b*b);
    return c;
}
