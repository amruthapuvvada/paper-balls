
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var groundObj;
var leftSide;
var rightSide;
var ball;

function preload()
{
	
}

function setup() {
	createCanvas(1400, 700);


	engine = Engine.create();
	world = engine.world;

	groundObj = new Ground(width/2,670,width,20);
	leftSide = new Ground(1100,600,20,120);
	rightSide = new Ground(1300,600,20,120);


	//Create the Bodies Here.
	var ballOptions={
		isStatic:false,
		restitution: 0.3,
		friction: 0,
		density: 1.2
	}
	ball = Matter.Bodies.circle(200,300,15,ballOptions);
	World.add(world,ball)

	Engine.run(engine);
  
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:0, y:0},{x:0.5,y:0.5})
	}
}


function draw() {
  rectMode(CENTER);
  background(0);

  leftSide.show();
  rightSide.show();
  groundObj.show();

  ellipse(ball.position.x, ball.position.y, 15, 15)
  
  drawSprites();
 
}



