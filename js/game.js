let backgroundImage;
let playerShip,playerShipImage;
let enemyShip1,enemyship2,enemyShip1Image,enemyShip2Image;
let enemyShipGroup;
var playerBullet;
let leftWall,rightWall;



function preload(){
playerShipImage = loadImage("Images/playerShip.png");
 playerShipBulletImage = loadImage("Images/playerBullet.png");
enemyShip1Image = loadImage("Images/enemyship1.png");
enemyShip2Image = loadImage("Images/enemyship2.png");


    
}
function setup(){
    var gameCanvas = createCanvas(1850,930);

    playerShip = createSprite(925,855,50,50);
    playerShip.addImage(playerShipImage);
    playerShip.scale = 2;
    playerShip.friction = 0.95;

     enemyShipGroup = new Group();
     

     leftWall = createSprite(0,50,90,50)
     rightWall = createSprite(1800)
    }

function draw(){
    background("black");
    
playerShip.x = mouseX;

if(enemyShipGroup.isTouching(leftWall)){
  enemyShipGroup.setVelocityXEach(0);
}
    
  if(frameCount%180 ===0){
     enemySpawner();

  }
    
drawSprites();

}



function shootBullet(){

 playerBullet = createSprite(0,playerShip.y,50,50);
playerBullet.addImage(playerShipBulletImage);
playerBullet.x = playerShip.x


playerBullet.depth = playerShip.depth;
playerShip.depth = playerShip.depth+1;


 
playerBullet.velocityY = -15;


}

function mouseClicked() {
  shootBullet();


  }

function enemySpawner(){
  var enemy;

 enemy = createSprite(900,50,50,50)
 enemyShipGroup.add(enemy);
 enemy.addImage(enemyShip1Image);
 enemy.scale = 2.1;
 enemy.debug = true;


 
 leftWall.debug = true;



 

 var rand;
 var rand1;

 rand = random(1,2);
 rand1 = Math.round(rand);

if(rand1 === 1){
  enemy.velocityX = 4;
}
else{
  enemy.velocityX = -4;
}


}


