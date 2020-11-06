var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var survivalTime = 0, score;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}

function setup() {

createCanvas(400, 400);
monkey = createSprite(80, 315, 20, 20);
monkey.addAnimation("moving", monkey_running);
monkey.scale = 0.1;

ground = createSprite(400, 350, 900, 10);
ground.velocityX = -4;
  
bananaGroup = new Group();
obstacleGroup = new Group();
  
score = 0;
}


function draw() {
background("white");
  
stroke("white");
textSize(20);
fill("white");  
text("Score :"+ score, 380, 50);
  
stroke("black");
textSize(20);
fill("black");
survivalTime = Math.ceil(frameCount/frameRate())
text("Survival Time: "+ survivalTime, 100, 50);

ground.visible = true;

if(keyDown("space")&& monkey.y >= 100) {
   monkey.velocityY = -12;
}
  
if (ground.x < 0){
    ground.x = ground.width/2;
}
 
food();
obstacles();
  
ground.velocityX = -8;
monkey.velocityY = monkey.velocityY + 0.8;
monkey.collide(ground);
  

drawSprites();
}


function food () {
  if (frameCount % 80 === 0) {
    banana = createSprite(400,350,10,40);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -4;
    
    banana.lifetime = 300;
   bananaGroup.add(banana);
    
    }
}

function obstacles(){
  if(frameCount % 300 === 0){
    obstacle = createSprite(400,330,10,40);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -6;
    
    obstacle.lifetime = 300;
    obstacleGroup.add(obstacle);
  }
}