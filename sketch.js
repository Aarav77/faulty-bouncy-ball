var ball,ballimg,paddleimg,paddle;
function preload() {
  ballimg = loadImage("ball.png");
  paddleimg=loadImage("paddle.png");
}
function setup() {
  createCanvas(400, 400);
  ball=createSprite(40,200,20,20);
  ball.addImage (ballimg); 
  ball.velocityX=0;  
  paddle=createSprite(350,200,20,100);
  paddle.addImage(paddleimg)
  ball.velocityY = 2;
  ball.velocityX = 2;
  

}

function draw() {
  background(205,153,0);
  paddle.y = mouseY;
  edges=createEdgeSprites();
  //Bounce Off the Left Edge only
  ball.bounceOff(edges[0]); 
  
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  
  paddle.collide(edges);
  if (ball.isTouching(paddle)){
    explosion();
  }
  if(keyDown(UP_ARROW));
  {
    paddle.y=paddle.y+20;
  }
  
  if(keyDown(DOWN_ARROW));
  {
    paddle.y=paddle.y-20;
  }
  drawSprites();
  
}

function explosion()
{
  ball.velocityY=random(-8,8);
}

