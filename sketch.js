const World = Matter.World;
const Bodies = Matter.Bodies;
const Engine = Matter.Engine;
const Constraint = Matter.Constraint;
var engine, world;
var polyGon;

function preload(){
  polygonImage = loadImage("images/polygon.png")
}

function setup() {
  createCanvas(1200,400);
  
  engine = Matter.Engine.create()
  world = engine.world;

  //Bodies

  //Bodies.level2
  box1 = new Box(330, 235, 30, 40);
  box2 = new Box(360, 235, 30, 40);
  box3 = new Box(390, 235, 30, 40);
  box4 = new Box(420, 235, 30, 40);
  box5 = new Box(450, 235, 30, 40);
  //Bodies.level3
  box6 = new Box(360, 195, 30, 40);
  box7 = new Box(390, 195, 30, 40);
  box8 = new Box(420, 195, 30, 40);
  //Bodies.top1
  box9 = new Box(390, 155, 30, 40);

  //Ground
  ground1 = new Ground(150, 370, 1600, 10);
  ground2 = new Ground(400, 300, 175, 10);

  slingshot = new SlingShot(polyGon, {x : 200, y : 50})

  

  //PolyGon
  polyGon = Bodies.circle(50, 200, 20)
  World.add(world, polyGon)
  image(polygonImage, polyGon.position.x, polyGon.position.y);

  //slingShot
  slinghot = new SlingShot(polyGon, {x : 100, y : 200});
}

function draw() {
  background("black");  
  Matter.Engine.update(engine)

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();

  ground1.display();
  ground2.display();
  drawSprites();
}
 

function mouseDragged(){
  //if (gameState!=="launched"){
      Matter.Body.setPosition(polyGon, {x: mouseX , y: mouseY});
  //}
}


function mouseReleased(){
  slingshot.fly();
  gameState = "launched";
}

function keyPressed(){
  if(keyCode === 32){
  Matter.Body.setPosition(bird.body, {x: 200, y: 50});
     slingshot.attach(polyGon);
  }
}