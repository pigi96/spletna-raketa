function Planet(name, img, x, y, width, height) {
	this.name = name,
	this.img = img;
	this.x = x;
	this.y = y;
	this.width = width,
	this.height = height

	this.draw = function(ctx) {
	    ctx.drawImage(img, x, y, width, height);
	}
}