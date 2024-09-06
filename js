function setup() {
  createCanvas(500, 400);
}

function draw() {
  background("pink");
  rect(50, 50, 150, 150);
  stroke("blue") 
  fill("red");
   rect(mouseX, mouseY, 100, 150);
  console.log(mouseIsPressed);
  
  
}
