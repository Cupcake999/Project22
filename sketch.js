const Engine = Matter.Engine;
 const World = Matter.World;
  const Bodies = Matter.Bodies;

var engine,world;
var  fairyBody, fairyImage;
var starbody ,star , starImg;
var bdgImg , bdg;
var fairy2;
var music;

function preload()
{
   //preload the images here
   fairyImage = loadImage("images//fairy1.png","images");
   bdgImg = loadImage("images//starnight.png");
}

function setup() {
  createCanvas(800, 750);

  bdg = createSprite(400,375,10,100);
  bdg.addImage("backgroundImage",bdgImg);
  

engine = Engine.create();
world = engine.world;

var options = {
  isStatic : true
}
var option = {
  isStatic : false
}
  starbody = Bodies.rectangle(500,100,20,20,options);
  World.add(world,starbody)

  fairyBody = Bodies.rectangle(300,300,20,20,options);
  World.add(world,fairyBody);
  
 
}


function draw() {
  background("black");
  Engine.update(engine);
  fill("gold");
  rect(starbody.position.x,starbody.position.y,20,20);
  fill("green");
  rect(fairyBody.position.x,fairyBody.position.y,50,50);
 starAndFairy();
 keyPressed();
 starFall();
}
function keyPressed(){
  if (keyCode === RIGHT_ARROW){
    fill("green")
    rect(fairyBody.position.x = fairyBody.position.x +2,fairyBody.position.y,50,50);
  }
  if (keyCode === LEFT_ARROW){
    fill("green")
    rect(fairyBody.position.x = fairyBody.position.x -2,fairyBody.position.y,50,50);
  }
}
function starFall(){
  if (keyCode === DOWN_ARROW){
    fill("gold")
    rect( starbody.position.x,starbody.position.y = starbody.position.y+3,20,20 );
  }
}
function starAndFairy(){
  if (starbody.position.y>300){
    rect(starbody.position.x,starbody.position.y,20,20,options)
  }
}