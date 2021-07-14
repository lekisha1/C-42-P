var issImg, bg, s1, s2, s3, s4;
var iss, spacecraft, hasDocked = false;

function preload(){
  issImg = loadImage("iss.png");
  bg = loadImage("spacebg.jpg");
  s1 = loadImage("spacecraft1.png");
  s2 = loadImage("spacecraft2.png");
  s3 = loadImage("spacecraft3.png");
  s4 = loadImage("spacecraft4.png");
  }

function setup() {
  createCanvas(1500,800);
 
 iss = createSprite(350, 400);
iss.addImage(issImg);
iss.scale = 1.4;
spacecraft = createSprite(400, 600);
spacecraft.addImage(s1);
spacecraft.scale = 0.3;

}


function draw() {
  background(bg); 
  
  if(!hasDocked){
    spacecraft.x = spacecraft.x+random (-2, 2);
    if(keyDown(UP_ARROW)){
    spacecraft.y = spacecraft.y -2;
 } 
 if(keyDown("LEFT_ARROW")){
spacecraft.addImage(s3);
spacecraft.x = spacecraft.x - 2;
 }
if(keyDown("RIGHT_ARROW")){
spacecraft.addImage(s4); 
spacecraft.x = spacecraft.x + 2;
} 
if(keyDown("DOWN_ARROW")){
spacecraft.addImage(s1);
}

    }
    
if(spacecraft.y <= (iss.y +115) && spacecraft.x <= (iss.x-20)){
   hasDocked = true; textSize(40);
    fill("white") 
    text("Docking Successful!", 800, 300); 
  }

  drawSprites();
}