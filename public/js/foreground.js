var canvasForeground;

// keep image references below
var earthPlanetObj, lunaPlanetObj, marsPlanetObj, venusPlanetObj;
var rocketUserObj;

function initForeground() {
    canvasForeground = document.getElementById("canvasForeground");

    earthPlanetObj = new Planet('Earth', loadedImages[imgPath+'Earth planet.png'], 100, 200, 100, 100);
    lunaPlanetObj = new Planet('Luna', loadedImages[imgPath+'Luna planet.png'], 750, 200, 100, 100);
    marsPlanetObj =  new Planet('Luna', loadedImages[imgPath+'Mars planet.png'], 450, 500, 100, 100);
    venusPlanetObj =  new Planet('Luna', loadedImages[imgPath+'Venus planet.png'], 900, 600, 100, 100);
    rocketUserObj = new Rocket('Rocket', loadedImages[imgPath+'rocket.png'], 100, 200, 100, 100);

    window.onkeydown = function(e) {
        // React to the mouse down event
        rocketUserObj.rocketMovement(e);
    }
}

function drawForeground() {
    console.log("draw foreground");

    if (canvasForeground.getContext) {
        var ctx = canvasForeground.getContext("2d");
    }

    ctx.clearRect(0, 0, canvasForeground.width, canvasForeground.height);

    earthPlanetObj.draw(ctx);
    lunaPlanetObj.draw(ctx);
    marsPlanetObj.draw(ctx);
    venusPlanetObj.draw(ctx);
    rocketUserObj.draw(ctx);
}