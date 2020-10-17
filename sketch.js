var ground;

function setup() {
  createCanvas(1200,400);
  ground = createSprite(400, 380, 5000, 10);
}

function draw() {
  background(0,0,0);  
  drawSprites();
}

