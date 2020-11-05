const  Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var pencil;
var ground;
var rope,bodypoint;



function setup() {
  createCanvas(800,400);
  engine = Engine.create();
    world = engine.world;
    pencil = new Pencil(1000,200,50,50);
   
    ground = new Ground(600,height,1200,20);
    rope = new Rope(pencil.body,{x:200,y:200});
  
}

function draw() {
  Engine.update(engine);
  background(0);  
  pencil.display();
 
  ground.display();
  rope.display();
 
  
}
function keyPressed() {
  if (keyCode === 32){
    pencil.trajectory=[];
  }
}