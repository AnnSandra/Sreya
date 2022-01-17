
var demo1;

function setup() {
	createCanvas(800, 600);
	
demo1 = createSprite(200,200,10,10);
demo1.velocityY=2;	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  
  drawSprites();

  

}
