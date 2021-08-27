var ship,sea
function preload(){
ship1=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
seaImg=loadImage("sea.png");


}

function setup(){
createCanvas(400,400);
  sea=createSprite(0,0,400,400);
  ship=createSprite(100,200,50,50);
  sea.addImage(seaImg);
  ship.addAnimation("ship",ship1);
ship.scale=0.3;

}

function draw() {
  background("blue");
  if(sea.x < 0){
    sea.x = sea.width/2;
  }
  drawSprites()
  
}