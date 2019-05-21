var canvasForeground;

// keep image references below
var earthPlanetObj, lunaPlanetObj, marsPlanetObj, venusPlanetObj;
var rocketUserObj;

function initForeground() {
    canvasForeground = document.getElementById("canvasForeground");

    rocketUserObj = new Rocket('Rocket', loadedImages[imgPath+'rocket.png'], 1950, 1450, 100, 100);

}

function drawForeground() {
    console.log("draw foreground");

    if (canvasForeground.getContext) {
        var ctx = canvasForeground.getContext("2d");
    }

    ctx.clearRect(0, 0, canvasForeground.width, canvasForeground.height);

    rocketUserObj.draw(ctx);
}
