
class dustbin {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.dustbinHeight = 180;
        this.dustbinWidth = 170;
        this.wallThickness = 20;
        this.angle = 0;
        this.image = loadImage("dustbingreen.png")
        this.bottomBody = Bodies.rectangle(this.x, this.y, this.dustbinWidth + 100, this.wallThickness, { isStatic: true })


        this.leftWallBody = Bodies.rectangle(this.x, this.y , this.wallThickness, this.dustbinHeight, { isStatic: true });
        Matter.Body.setAngle(this.leftWallBody, this.angle);


        this.rightWallBody = Bodies.rectangle(this.x , this.y , this.wallThickness, this.dustbinHeight, { isStatic: true });
        Matter.Body.setAngle(this.rightWallBody, -1 * this.angle);
        World.add(world, this.bottomBody);
        World.add(world, this.leftWallBody);
        World.add(world, this.rightWallBody);
    }

    display() {
        var posBottom = this.bottomBody.position;
        var posLeft = this.leftWallBody.position;
        var posRight = this.rightWallBody.position;


        push();
        translate(posLeft.x, posLeft.y);
        imageMode(CENTER);
        strokeWeight(4);
        angleMode(RADIANS);
        fill("green");
        stroke("red");
        rotate(this.angle);
        image(this.image, 0, -this.dustbinHeight / 2, this.dustbinWidth, this.dustbinHeight)
        pop();


        push();
        translate(posRight.x, posRight.y);
        imageMode(CENTER);
        strokeWeight(4);
        angleMode(RADIANS);
        fill("green");
        stroke("red");
        rotate(-1 * this.angle);
        image(this.image, 0, -this.dustbinHeight / 2, this.dustbinWidth, this.dustbinHeight)
        pop();


        push();
        translate(posBottom.x, posBottom.y);
        imageMode(CENTER);
        strokeWeight(4);
        stroke(255);
        angleMode(RADIANS);
        fill("green")
        stroke("red");
        imageMode(CENTER);
        image(this.image, 0, -this.dustbinHeight / 2, this.dustbinWidth, this.dustbinHeight)
        pop();

    }
}