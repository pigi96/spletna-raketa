var currentPlanet = 0;

var dirX;
var dirY;

var venus, earth, mars, luna;


function initController() {
    venus = document.getElementById("venus");
    earth = document.getElementById("earth");
    mars = document.getElementById("mars");
    luna = document.getElementById("luna");

    $(function () {
      $("#earth-to-venus").click(function () {
      if (updateLoop == null)
        visitPlanet(venus);
        document.getElementById("helper1").classList.add("helper-out");
        document.getElementById("helper1").classList.remove("helper-in");
      });
      $("#earth-to-luna").click(function () {
      if (updateLoop == null)
        visitPlanet(luna);
        document.getElementById("helper1").classList.add("helper-out");
        document.getElementById("helper1").classList.remove("helper-in");
      });
    $("#earth-to-mars").click(function () {
      if (updateLoop == null)
        visitPlanet(mars);
        document.getElementById("helper1").classList.add("helper-out");
        document.getElementById("helper1").classList.remove("helper-in");
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
