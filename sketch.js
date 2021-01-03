
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	var canvas = createCanvas(800,400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground(0,400,1600,20);
	ball=new paper(20,100);
	boxBottom=new Box(610,380,200,20);
	boxRight=new Box(722,338,20,100);
	boxLeft=new Box(498,338,20,100);
 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(0);
  ground.display();
  ball.display();
  boxBottom.display();
  boxLeft.display();
  boxRight.display();
  drawSprites();
 
}

function keyPressed(){
 
        if(keyCode===UP_ARROW){

			Matter.Body.applyForce(ball.body,ball.body.position,{x:70,y:-70});

		}

}

