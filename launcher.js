class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            density:10.0,
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.002 ,
            length: 20,
            restitution:1,
            friction:1
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            stroke("yellow");
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            
        }
    }
    
}