const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body;

var engine, world;
var paper;
var dustbin1, dustbin2, dustbin3;
var ground;

function preload() {

}

function setup() {
	var canvas = createCanvas(800, 300);

	engine = Engine.create();
	world = engine.world;

	dustbin1 = new Dustbin(570, 230, 10, 100);

	dustbin2 = new Dustbin(675, 275, 200, 10);

	dustbin3 = new Dustbin(780, 230, 10, 100);

	ground = new Ground(50, 290, 2500, 20);

	paper = new Paper(100, 100);

	keyPressed();

	Engine.run(engine);
}


function draw() {
	rectMode(CENTER);
	background(0);

	dustbin1.display();
	dustbin2.display();
	dustbin3.display();
	ground.display();
	paper.display();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body, paper.body.position,{x:110,y:-85});
	}
}