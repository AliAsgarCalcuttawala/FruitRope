const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;
var ground
var fruit
var rope
var fruitcon
let engine;
let world;

function setup() 
{
  createCanvas(500,700);
  engine = Engine.create();
  world = engine.world;
  ground=new Ground(200,690,600,20)
rope= new Rope(6,{x:245, y:30})
var fruitoptions = {
  density:0.001
}
fruit=Bodies.circle(300,300,15,fruitoptions)
Matter.Composite.add(rope.body,fruit)
World.add(world,fruit)
 
fruitcon=new Link(rope,fruit)

rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
}

function draw() 
{
  background(51);
  Engine.update(engine);
  ground.display()
   rope.show()
   ellipse (fruit.position.x,fruit.position.y,15,15)
}





