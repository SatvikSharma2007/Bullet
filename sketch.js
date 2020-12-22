var bullet;
var wall,thickness;
var speed,weight;
var D;



function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
  
  bullet=createSprite(50, 200, 70, 10);
  bullet.shapeColor="white"
wall= createSprite(1200,200,thickness,height/2);
bullet.velocityX=speed;
}

function draw() {
  background(0);  
 
  if(bullet.isTouching(wall)){
    bullet.velocityX=0;
    D=0.5*weight*speed*speed/thickness*thickness*thickness
    if (D <10){
    wall.shapeColor="green"
    } 
    else {
      wall.shapeColor="red"
    }
  }

  drawSprites();
  }
