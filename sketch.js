var movingRect;
var fixedRect;

function setup() {
  createCanvas(800,400);
 // createSprite(400, 200, 50, 50);

  fixedRect = createSprite(400, 200, 50, 50);
  fixedRect.shapeColor = "green";
  movingRect = createSprite(400, 200, 50, 50);
  movingRect.shapeColor = "green";
}

function draw() {
  background(255,255,255); 
   
 movingRect.x = World.mouseX;
 movingRect.y = World.mouseY;

 if(movingRect.x-fixedRect.x < fixedRect.width/2 + movingRect.width/2 &&
   fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 &&
    fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2 &&
     movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2 ){

  movingRect.shapeColor = "blue";
  fixedRect.shapeColor = "red";

 }
 else{

   movingRect.shapeColor = "green";
   fixedRect.shapeColor = "green";

 }

  drawSprites();
}