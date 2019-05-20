var amountX = 0;
var amountY = 0;

function drawCanvasBackground() {
    canvas = document.getElementById("myCanvas");

    if (canvas.getContext) {
        var ctx = canvas.getContext("2d");

        var img = new Image();
        img.src = "public/img/universe.jpg";

        img.onload = function() {
            ctx.drawImage(img, 0-amountX, 0-amountY, 4472, 1080);
            ctx.drawImage(img, 0-amountX, 0-1080-amountY, 4472, 1080);
        }

        var img2 = new Image();
            img2.src = "public/img/Earth planet.png";

        img2.onload = function() {
            ctx.drawImage(img2, 100-amountX, 100-amountY, 100, 100);
        }

        var img3 = new Image();
            img3.src = "public/img/Luna planet.png";

        img3.onload = function() {
            ctx.drawImage(img3, 500-amountX, 500-amountY, 100, 100);
        }

        var img4 = new Image();
            img4.src = "public/img/Mars planet.png";

        img4.onload = function() {
            ctx.drawImage(img4, 1700-amountX, 1000-amountY, 100, 100);
        }

        var img5 = new Image();
            img5.src = "public/img/Venus planet.png";

        img5.onload = function() {
            ctx.drawImage(img5, 1600-amountX, 250-amountY, 100, 100);
        }

        var img6 = new Image();
            img6.src = "public/img/Mars planet.png";

        img6.onload = function() {
            ctx.drawImage(img6, 1800-amountX, 800-amountY, 100, 100);
        }

        var img7 = new Image();
            img7.src = "public/img/Earth planet.png";

        img7.onload = function() {
            ctx.drawImage(img7, 2500-amountX, 800-amountY, 100, 100);
        }

        var img8 = new Image();
            img8.src = "public/img/Luna planet.png";

        img8.onload = function() {
            ctx.drawImage(img8, 2350-amountX, 400-amountY, 100, 100);
        }
    }


}

var way = 0;

setInterval ( update, 25 );

    function update() {

        if (way == 0)
            amountX = amountX + 3;
        else
            amountX = amountX - 3;
            amountY = amountY + 0;

        if (amountX >= 800)
            way = 1;

         if (amountX <= 0)
            way = 0;

        drawCanvasBackground();
    }