var bullet;
var bullet, thickness;

var speed;
var weight;



function setup() {
  createCanvas(1600,400);

  thickness = random(22,83);
  speed = random (223,321);
  weight = random (30,52);
  
  bullet = createSprite (50,200,100,50);

  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(80,80,80) ;


}

function draw() {
  background(205,153,0);

  

  drawSprites();

  bullet.velocityX = speed;

  
wall.debug = true;

bullet.debug = true;
  
  
  if(wall.x-bullet.x < (wall.width+bullet.width)/2){
     bullet.velocityX = 0;
    var deformation = (0.5 * weight * speed * speed) / (thickness*thickness*thickness);
    console.log(deformation);

    if(deformation>10){
      bullet.shapeColor = color(255,0,0);
    }

    

    if (deformation<10){
      bullet.shapeColor = color(0,255,0);
    }

   

  }


}
