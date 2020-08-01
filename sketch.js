
var car, top, wall, speed, weight;

speed= random (60,90);
weight= random (500,1500);

function setup() {
  createCanvas(1500,150);
  car=createSprite(50, 80, 10, 50);
  car.shapeColor= "white";

  top= createSprite(car.X,70,10,10);
  top.shapeColor= "white";

  wall= createSprite(1450,70,20,height/2);
  wall.shapeColor= "brown";

  car.velocityX= speed;
  top.velocityX= car.velocityX;

}

function draw() {

  background("lightblue");  
 
  if (wall.x - car.x < wall.width/2 + car.width/2 && car.x - wall.x < wall.width/2 + car.width/2) {

    car.velocityX=0;
    var deformtion= 0.5 * weight * speed * speed/22509;
    if(deformation>100){

    car.shapeColor= "green";
    top.shapeColor= "green";
    }
    if(deformtionmation>180){

    car.shapeColor= "red";
    top.shapeColor= "red";
    }
    if(deformation>100 && deformation<180){

      car.shapeColor= "yellow";
      top.shapeColor= "yellow";
      }

  }

  drawSprites();

  
}