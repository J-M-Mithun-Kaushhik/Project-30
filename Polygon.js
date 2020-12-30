class Polygon {
  constructor(x, y, radius) {
    var options = {
        restitution:0.5,
        friction:3,
        density:1.0,
    }
    this.body = Bodies.circle(x, y, radius, options);
    World.add(world, this.body);
    this.image = loadImage("polygon.png");
  }

  display(){
    var pos = this.body.position;
    push();
    translate(pos.x,pos.y);
    rotate(this.body.angle);
    imageMode(CENTER);
    image(this.image,0,0,40,40);
    pop();
  }
}
