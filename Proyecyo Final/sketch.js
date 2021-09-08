const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var gameState = "PLAY"

var p1;
var p2;
function setup(){
    var canvas = createCanvas(3000, 800);
    engine = Engine.create();
    world = engine.world;
     p1 = new Personajes(1250,295, 80, 150);
     p2 = new Personajes(1750, 295, 80, 150);
    f1 = new FBase(1680,175,40,20)
    f2 = new FBase(1720,175,20,40)
    f3 = new FBase(1780,175,20,40)
    f4 = new FBase(1820,175,40,20)

    }

function draw(){
    Engine.update(engine)
background("#00FDFF");
p1.display();
p2.display();
f1.display();
f2.display();
f3.display();
f4.display();
if (keyIsDown(65)){
    
    fill("#A137DE");
    f1;
}
}

//