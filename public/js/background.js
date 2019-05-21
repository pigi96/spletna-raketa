var canvasBackground;

// keep image references below
var backgroundImg;

function initBackground() {
    canvasBackground = document.getElementById("canvasBackground");

    backgroundImg = loadedImages[imgPath+'universe.jpg'];
}

function drawBackground() {
    console.log("draw background");

    if (canvasBackground.getContext) {
        var ctx = canvasBackground.getContext("2d");
    }

    ctx.drawImage(backgroundImg, 0, 0, canvasBackground.width, canvasForeground.height);
}