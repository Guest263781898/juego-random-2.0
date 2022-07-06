
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var cannon1, cannon_Base;
var cannon_ball;
var Mountain;

let engine, world;

function preload(){
  Mountain = loadImage("Mountain.png");
}


function setup() {
  createCanvas(2000,800);
  engine = Engine.create();
  world = engine.world;
  angle = 15;
  cannon1 = new Cannon(200,800,130,100,angle)
  ground = new Ground(1000,765,2000,20)  
  rectMode(CENTER);
}

console.log("copie y pege el codigo de la bala del cañon");
console.log("No sabia como programar las torres");

function draw() 
{
  background("#65cbe8");
  image(Mountain,600,300);
  ground.show();
  Engine.update(engine);
  cannon1.display();
}



