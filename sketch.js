const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
var ground_left,ground_top,ground_bottom,ground_right;

var ball
var button1, button2


function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  button1 = createImg("up.png")
  button1.position(40,40);
  button1.size(50,50);
  button1.mouseClicked(VForce)
  button2 = createImg("right.png")
  button2.position(40,120);
  button2.size(50,50)
  button2.mouseClicked(HForce)
  world = engine.world;
  ground_bottom= new Ground(200,390,400,20);
  ground_right= new Ground(390,200,20,400);
  ground_left= new Ground(10,200,20,400);
  ground_top= new Ground(200,10,400,20);

  var ball_options= {
    restitution: 0.9
    
}
  ball = Bodies.circle(200,200,30,ball_options);
  World.add(world,ball)
  
  rectMode(CENTER);

  ellipseMode(RADIUS);
  
}

function draw() 
{
  background(51);
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,30)
  ground_top.show()
  ground_right.show()
  ground_left.show()
  ground_bottom.show()
  

}
function HForce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x: 0.05, y: 0})


}

function VForce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})
}




