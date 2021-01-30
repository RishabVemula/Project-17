var garden,rabbit, apple, red;
var gardenImg,rabbitImg, appleImg, redImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  redImg = loadImage("redImage.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  rabbit.x = World.mouseX
  
   var select_sprites = Math.round(random(1,3));
  if(frameCount % 80 == 0){
    if(select_sprites == 1){
      createApples();
    } else{
      
      createRed();
    }
  }
  
  
  drawSprites();

}

function createApples(){
  
  apple = createSprite(random(50,350), 40, 10, 10);
  apple.addImage("apple", appleImg)
  apple.scale = 0.07
  apple.velocityY = 3
  
}

function createRed(){
  
  red = createSprite(random(50,350), 40, 10, 10);
  red.addImage("Red", redImg)
  red.scale = 0.07
  red.velocityY = 3
  
}














