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
      });
      $("#earth-to-luna").click(function () {
      if (updateLoop == null)
        visitPlanet(luna);
      });
    $("#earth-to-mars").click(function () {
      if (updateLoop == null)
        visitPlanet(mars);
      });
    });
}

var updateLoop = null;
function visitPlanet(planet) {
    function update() {
       rocketUserObj.updateMovement();

        drawForeground();

        if (rocketUserObj.distance(planet.offsetLeft, planet.offsetTop)) {
            clearInterval(updateLoop);
            updateLoop = null;
        }
    }
    rocketUserObj.moveTowards(planet.offsetLeft, planet.offsetTop);
    updateLoop = setInterval(update, 25);
}

function distance(x1, y1, x2, y2) {
    var a = x1 - x2;
    var b = y1 - y2;

    var c = Math.sqrt(a*a + b*b);
    return c;
}
