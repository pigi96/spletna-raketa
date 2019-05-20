function Rocket(name, img, x, y, width, height) {
	this.name = name,
	this.img = img;
	this.x = x;
	this.y = y;
	this.width = width,
	this.height = height

	this.direction = 0;

	this.draw = function(ctx) {
	    ctx.save();

        ctx.translate(x + width/2, y + height/2);
	    if (this.direction == 0) {
	        ctx.rotate(180 * Math.PI/180);
	    } else if (this.direction == 1) {
	        ctx.rotate(270 * Math.PI/180);
	    } else if (this.direction == 2) {
	        ctx.rotate(90 * Math.PI/180);
	    } else {
	        ctx.rotate(0 * Math.PI/180);
	    }
	    ctx.translate(-x - width/2, -y - height/2);

	    ctx.drawImage(img, x, y, width, height);

	    ctx.restore();
	}

	this.rocketMovement = function(e) {
	    if (e.keyCode == 40) {
	        y = y + 50;
	        this.direction = 0;
	    } else if (e.keyCode == 37) {
	        x = x - 50;
	        this.direction = 1;
	    } else if (e.keyCode == 39) {
	        x = x + 50;
	        this.direction = 2;
	    } else if (e.keyCode == 38) {
	        y = y - 50;
	        this.direction = 3;
	    }


        scrollWrapper(y-540, x-800);
        drawForeground();
	}
}