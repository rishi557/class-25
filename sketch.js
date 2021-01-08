const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, pig1;
var backgroundImg;

function preload(){
    backgroundImg=loadImage('sprites/bg.png')
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,height,1200,20)

    box1 = new Box(900,320,70,70);
    box2 = new Box(1120,320,70,70);
    box3 = new Box(900,240,70,70);
    box4 = new Box(1120,240,70,70);
    box5 = new Box(1010,160,70,70);

    pig1 = new Pig(1010, 350);
    pig2 = new Pig(1010, 220);

    log1 = new Log(1010,260,300, PI/2);
    log2 = new Log(1010,180,300, PI/2);
    log3 = new Log(970,120,150, PI/7);
    log4 = new Log(1070,120,150, -PI/7);

    bird = new Bird(100,100);

    
   
}

function draw(){
    background(backgroundImg)
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display()    
    box2.display() 
    box3.display() 
    box4.display() 
    box5.display() 

    log1.display() 
    log2.display() 
    log3.display() 
    log4.display() 

    pig1.display()
    pig2.display()

    bird.display()

    ground.display()

}
