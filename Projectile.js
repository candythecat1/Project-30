class Projectile{
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length:10,
        }
        this.pointB = pointB;
        this.body = Matter.Constraint.create(options);
        World.add(world, this.body);
    }
    release(){
        this.body.bodyA = null;
    }

    display(){
        if(this.body.bodyA){
            var pointA = this.body.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(1);
            stroke("black")
            line(pointA.x, pointA.y, pointB.x, pointB.y)
        }
    }
attach(Ball_body){
    this.body.bodyA = Ball_body
}
}