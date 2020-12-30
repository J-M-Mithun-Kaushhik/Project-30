const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var slingShot;

function preload() {
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,400,1200,40);
    platform1 = new Ground(390,300,230,10);
    polygon = new Polygon(100,200,20);
    slingshot = new SlingShot(polygon.body,{x:100, y:200});

    //platform1 blocks
    //level one
    block1 = new Box(300,275);
    block2 = new Box(330,275);
    block3 = new Box(360,275);
    block4 = new Box(390,275);
    block5 = new Box(420,275);
    block6 = new Box(450,275);
    block7 = new Box(480,275);
    //level two
    block8 = new Box(330,235);
    block9 = new Box(360,235);
    block10 = new Box(390,235);
    block11 = new Box(420,235);
    block12 = new Box(450,235);
    //level three
    block13 = new Box(360,195);
    block14 = new Box(390,195);
    block15 = new Box(420,195);
    //top
    block16 = new Box(390,155);
}

function draw(){
    background("white");
    Engine.update(engine);

    ground.display();
    platform1.display();

    slingshot.display(); 
    
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();

    polygon.display();
}
    

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
