class Ball{
    constructor(x,y,radius){
        var options = {
            'restitution':0.8,
            'friction':1,
            'density':1,
        }
        this.body = Bodies.circle(x,y,radius/2,options);
        this.radius = radius;
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position;
        fill("purple");
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,this.radius);
    }
}