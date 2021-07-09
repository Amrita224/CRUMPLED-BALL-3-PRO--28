
var   Ball,Dustbin,groundBody,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var launcher,ls,rs,lsb,rsb;

function preload() {

}

function setup() {
	createCanvas(1200, 600);


	ground = createSprite(width / 2, height - 50, width, 10);
	ground.shapeColor = "brown";

	ls=createSprite(width-450,height-150,5,160);
	ls.shapeColor="grey";

	rs=createSprite(width-650,height-150,5,160);
	rs.shapeColor="grey";


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.



	groundBody = Bodies.rectangle(width / 2, height - 50, width, 10, { isStatic: true });
	World.add(world, groundBody);

	lsb=Bodies.rectangle(width-375,height-150,5,160,{isStatic:true});
	World.add(world,lsb);


	rsb=Bodies.rectangle(width-225,height-150,5,160,{isStatic:true});
	World.add(world,rsb);




	Dustbin=new dustbin(900,545);	
	Ball = new ball (250, 250,50);
	launcher=new SlingShot (Ball.body,{x:180,y:250});
	 
	

	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background("grey");
    

	ground.x = groundBody.position.x;
	ground.y = groundBody.position.y;

	ls.x=lsb.position.x;
	ls.y=lsb.position.y;

	rs.x=rsb.position.x;
	rs.y=rsb.position.y;
	

	drawSprites();
	Engine.update(engine);

	Ball.display();
	Dustbin.display();
	launcher.display();
	
}



function mouseDragged(){
	Matter.Body.setPosition(Ball.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    launcher.fly();
}
