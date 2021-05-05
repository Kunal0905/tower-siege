const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12;
var stand1,stand2;
var polygon,polygonImg;
var rope1;
var score = 0;

function preload(){
  polygonImg = loadImage("polygon.png");
}
function setup(){
  createCanvas(800,700);

  engine = Engine.create();
  world = engine.world;
  block1 = new Block(300,600);
  block2 = new Block(350,600);
  block3 = new Block(400,600);
  block4 = new Block(350,520);
  block5 = new Block(325,560);
  block6 = new Block(375,560);
  stand1 = new Stand(350,630);

  block7 = new Block(530,400);
  block8 = new Block(580,400);
  block9 = new Block(630,400);
  block10 = new Block(580,320);
  block11 = new Block(555,360);
  block12 = new Block(605,360);
  stand2 = new Stand(580,430);

  polygon = new Polygon(100,100);
  
  rope1 = new Rope({x: 150, y: 50},polygon.body);
}

function draw(){
  Engine.update(engine);

  rectMode(CENTER)
  background(56,44,44);
  fill("blue")
  block1.display();
  block2.display();
  block3.display();
  block7.display();
  block8.display();
  block9.display();
  push()
  fill("pink")
  block4.display();
  block10.display();
  pop()
  push()
  fill("lightblue")
  block5.display();
  block6.display();
  block11.display();
  block12.display();
  pop()
  stand1.display();
  stand2.display();
  polygon.display();
  rope1.display();
  block1.increase();
  block2.increase();
  block3.increase();
  block4.increase();
  block5.increase();
  block6.increase();
  block7.increase();
  block8.increase();
  block9.increase();
  block10.increase();
  block11.increase();
  block12.increase();
  drawSprites();
  textSize(30)
  text("Score : " + score,600,50);
}
function mouseDragged(){
  //if(gameState == "onSling"){
    Matter.Body.setPosition(polygon.body,{x: mouseX, y: mouseY});
  //}
}

function mouseReleased(){
  rope1.fly();
}

/*function detectCollision(lpolygon,lbox){
  polygonPos = lpolygon.position;
  boxPos = lbox.body.position;

  var distance = dist(polygonPos.x,polygonPos.y,boxPos.x,boxPos.y);
 if(distance <= lmango.r + lstone.r){
   Matter.Body.setStatic(lmango.body,false);
 }

}*/


