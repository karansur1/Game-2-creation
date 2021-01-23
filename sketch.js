var bgImage
var bg
var rocket 
var rocketImage
var edges
var meteor
var meteorImage
var alienShip
var alienShipImage
var arrowGroup
var alienGroup
var meteorGroup
var bullet
var bulletImage
var livesImage
var live1,live2,live3,live4,live5
var liveCount 



function preload(){

  bgImage = loadImage("bg.jpg")

  rocketImage = loadImage("spaceship.png")

  meteorImage = loadImage("meteor.png")

  alienShipImage = loadImage("alienShip.png")

  bulletImage = loadImage("bullet.png")

  livesImage = loadImage("lives.png")

}





function setup(){
    createCanvas(1500,800);
    liveCount = 5
  
    bg = createSprite(500,300)
    bg.addImage(bgImage)
    bg.scale = 3.50  

    rocket = createSprite(100,450);
    rocket.addImage(rocketImage);
    rocket.scale=1.3;

    live1 = createSprite(1300,70)
    live1.addImage(livesImage)
    live1.scale = 0.5
    
    live2 = createSprite(1360,70)
    live2.addImage(livesImage)
    live2.scale = 0.5

    live3 = createSprite(1420,70)
    live3.addImage(livesImage)
    live3.scale = 0.5

    live4 = createSprite(1480,70)
    live4.addImage(livesImage)
    live4.scale = 0.5

    live5 = createSprite(1240,70)
    live5.addImage(livesImage)
    live5.scale = 0.5

    edges = createEdgeSprites();

    end= createSprite(10,400,10,800);


    

    rocket.setCollider("rectangle",0,0,90,50)
    
    arrowGroup = createGroup();
    meteorGroup = createGroup();
    alienGroup = createGroup();
}









function draw() {
  background("black")

  if(keyDown(UP_ARROW)){
    rocket.y = rocket.y-20
  }

  if(keyDown(DOWN_ARROW)){
    rocket.y = rocket.y+20
  }

  if(keyDown(RIGHT_ARROW)){
    rocket.x = rocket.x+20
  }

  if (keyDown(LEFT_ARROW)){
    rocket.x = rocket.x-20 
  }

  rocket.bounceOff(edges)

  


  if(keyWentDown("space")){

    bulletSpawn();

  }


  for(var i=0; i<alienGroup.length ;i++){
  if(end.isTouching(alienGroup.get(i))){
    alienGroup.get(i).destroy()
    liveCount = liveCount-1;
    

  }
}
  


  if(liveCount === 4){

      live4.visible = false
  }

  if(liveCount === 3){

    live4.visible = false
}

if(liveCount === 2){

  live4.visible = false
}

if(liveCount === 1){

  live4.visible = false
}

  console.log(liveCount)


  meteorSpawn();

  alienSpawn();
  drawSprites();
}



function meteorSpawn(){


  if(frameCount%80 === 0){
    meteor = createSprite(1500,random(50,700))
    meteor.addImage(meteorImage)
    meteor.scale = 0.5
    meteor.velocityX = random(-5,-13)
    meteor.velocityY=random(-3,6)
  }
}

function alienSpawn(){

  if(frameCount%330 === 0){
  alienShip = createSprite(1500,random(50,700))
  alienShip.addImage(alienShipImage);
  alienShip.scale = 0.5
  alienShip.velocityX = -4
  alienGroup.add(alienShip);

  

  }

}


function bulletSpawn(){

  bullet = createSprite(rocket.x,rocket.y)
  bullet.addImage(bulletImage)
  bullet.velocityX = 7
  bullet.scale = 0.2
}