function Rocket(name, img, x, y, width, height) {
	this.name = name,
	this.img = img;
	this.x = x;
	this.y = y;
	this.width = width,
	this.height = height

	this.direction = 0;



    this.dirX = 0;
    this.dirY = 0;

    this.moveTowards = function(dx, dy) {
        dirX = x - dx;
        dirY = y - dy;

        var sum = Math.sqrt(dirX*dirX + dirY*dirY);
        if (sum != 0) {
            dirX /= sum;
            dirY /= sum;
        } else {
            // 0...
        }
//        let sum = Math.sqrt(this.pointingTo[0]*this.pointingTo[0]+this.pointingTo[1]*this.pointingTo[1]);
//        if (sum == 0) {
//            sum = 0.0001;
//        }
//        this.pointingTo[0] = this.pointingTo[0] / sum;
//        this.pointingTo[1] = this.pointingTo[1] / sum;
//
//        let angle = Math.atan2(this.pointingTo[0], -this.pointingTo[1]);
//        if (angle >= 0) {
//            this.angle = angle * (4 / Math.PI);
//        } else {
//            this.angle = 4 + (4 + angle * (4 / Math.PI));
//        }
    }

    this.updateMovement = function(progress) {
        y = y - (2*dirY*progress/1000);
        x = x - (2*dirX*progress/1000);
    }

	this.draw = function(ctx) {
        ctx.save();

        ctx.translate(x + width/2, y + height/2);

        var angle = Math.atan2(dirY, dirX);

        /*var angle = Math.atan2(dirX, -dirY);
        if (angle >= 0) {
            //angle = angle * (9 / Math.PI);
        } else {
            //angle = 4 + (4 + angle * (4 / Math.PI));
         }*/

        ctx.rotate(-Math.PI / 2);
	    ctx.rotate(angle);

	    ctx.translate(-x - width/2, -y - height/2);

        this.updateView();
	    ctx.drawImage(img, x, y, width, height);

        ctx.restore();
	}

	this.updateView = function() {
	    scrollWrapper(y-window.innerHeight/2+40, x-window.innerWidth/2+20);
	}

	this.rocketMovement = function(e) {
	    var changed = false;

        drawForeground();
        visitPlanet();
	}

	this.change = function(x, y) {
	    this.x = x;
	    this.y = y;
	}

	this.distance =  function(x2, y2) {
        var a = x - x2;
        var b = y - y2;

        var c = Math.sqrt(a*a + b*b);
        if (c < 10) {
            return true;
        } else {
            return false;
        }
    }
}