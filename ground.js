
class Ground {
    constructor(x, y, width) {
        var opt = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, width, 10, opt);
        this.width = width;
        this.height = 10;
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        rectMode(CENTER);
        fill("brown");
        rect(pos.x, pos.y, this.width, this.height);

    }
}