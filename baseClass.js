
class baseClass {
    constructor(x, y, width, height) {
        var opt = {
            restution: 0.5,
            friction: 0.3,
            density: 1
        }

        this.body = Bodies.rectangle(x, y, width, height,opt);
        this.width = width;
        this.height = height;
        this.image=loadImage("paper.png");
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos, y);
        rotate(angle);
        imageMode(CENTER);
        fill("yellow");
        image(this.image,0, 0, this.width, this.height);
        pop();
    }
}