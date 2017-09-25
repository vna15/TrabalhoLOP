function setup() {
  createCanvas(500, 400);
}

function draw() {
  fill(255);
  rect(0, 0, 500, 400);
  fill(0)
  ellipse(mouseX-0, mouseY-0, 50, 50);
  line(40,80,420,80)
  line(70,150,450,150)
  line(40,220,420,220)
  line(70,290,450,290)
  fill(255)
  rect(300,320,60,60)
}

function mouseReleased(){
  noLoop()
} 

function mousePressed(){
  loop()
}  


    
