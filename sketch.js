const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var dustbinObj, paperObj, launcher;
var world;

//function preload(){}

function setup() {
	createCanvas(1600, 700);
	

	engine = Engine.create();
	world = engine.world;

	dustbinObj=new dustbin(1200,650);
	paperObj= new paper(200,450,40);
	groundObj =new ground(width/2,670,width,20)
 launcher = new Launcher(paperObj.body,{x:500, y:250});
	
//	var  render = Render.create({
	//	element: document.body,
//		engine: engine,
	//	options:{
//			width: 1200,
	//		height:700,
//			wireframes: false
	//	}

	//});

	Engine.run(engine);
	//Render.run(render);

}


function draw() {
  rectMode(CENTER);
  background("grey");
  //Engine.update(engine);

  textSize(55);
  fill("green");
  text("Stay Environment Clean",150 ,100);

  textSize(55);textSize(55);
  fill("darkgreen");
  text("Swacha Bharat",950 ,200);

  textSize(55);
  fill("lightgreen");
  text("Go Green",750 ,150);


  drawSprites();
  dustbinObj.display();
  paperObj.display();
  groundObj.display();
	launcher.display();
}

function mouseDragged() {
	
 Matter.Body.setPosition(paperObj.body,{x:mouseX,y:mouseY});
	
}

function mouseReleased(){

	launcher.fly();

}

