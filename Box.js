class Box {
  constructor(x, y) {
    var options = {
        restitution:0.5,
        friction:1,
        density:1.0,
        isStatic: false
    }
    this.body = Bodies.rectangle(x, y, 30, 40, options);
    World.add(world, this.body);
    this.image = loadImage("box.png");
    this.visibility = 255;
  }

  display(){
    //console.log(this.body.speed);
    if (this.body.speed < 6){
      push();
      translate(this.body.position.x,this.body.position.y);
      rotate(this.body.angle);
      imageMode(CENTER);
      image(this.image,0,0,30,40);
      pop();
      }
    else {
      this.visibility = this.visibility - 5;
      World.remove(world,this.body)
      push();
      tint(255,this.visibility);
      imageMode(CENTER);
      image(this.image,this.body.position.x,this.body.position.y,30,40);
      pop();
    }
  }
}
  