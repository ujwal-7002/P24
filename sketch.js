
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground, binWall1, binWall2, binBase, paper,paperImg;
var dustbinImg , bin;

function preload()
{
	dustbinImg=loadImage("dustbingreen.png");
	paperImg=loadImage("paper.png");
	
}

function setup() {
	createCanvas(1200, 300);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground= new Ground(600,250,1200,20);
	binWall1= new Dustbin(900,180,20,100);
	binWall2= new Dustbin(1100,180,20,100);
	binBase= new Dustbin(1000,230,200,20);
	paper= new Paper(30,30,10);
	paper.addImage("paperImg");
	bin=createSprite(1000,180,20,20);
	bin.addImage("dustbinImg");
	dustbinImg.scale = 0.5;



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  binWall1.display();
  binWall2.display();
  binBase.display();
  paper.display();
  keyPressed();
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	}
}


