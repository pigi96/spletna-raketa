var canvasForeground;

// keep image references below
var earthPlanetObj, lunaPlanetObj, marsPlanetObj, venusPlanetObj;
var rocketUserObj;

function initForeground() {
    canvasForeground = document.getElementById("canvasForeground");

    rocketUserObj = new Rocket('Rocket', loadedImages[imgPath+'Rocket.svg'], 2750, 1450, 40, 80);
    rocketUserObj.updateView();
}

function drawForeground() {
    if (canvasForeground.getContext) {
        var ctx = canvasForeground.getContext("2d");
    }

    ctx.clearRect(0, 0, canvasForeground.width, canvasForeground.height);

    rocketUserObj.draw(ctx);
}
