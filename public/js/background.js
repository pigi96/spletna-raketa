var canvasBackground;

// keep image references below
var backgroundImg, backgroundStarsImg;

function initBackground() {
    canvasBackground = document.getElementById("canvasBackground");

    backgroundImg = loadedImages[imgPath+'background.svg'];
}

function drawBackground() {
    if (canvasBackground.getContext) {
        var ctx = canvasBackground.getContext("2d");
    }

    ctx.drawImage(backgroundImg, 0, 0, canvasBackground.width, canvasForeground.height);
}