var bubbles = [];
function setup(){
  createCanvas(600,400);
  for(var i =0; i < 200; i++){
    bubbles[i] = {
      x:0,
      y:0,
     display: function(){
        stroke(255);
        noFill();
        ellipse(this.x,this.y,25,25);
      },
      move: function(){
        this.x = this.x + random(-5,5);
        this.y = this.y + random(-5,5);
      }
    }
  }
}
function draw(){
  translate(mouseX,mouseY);
  background(0);
  for(var i = 0; i < bubbles.length; i++){
    bubbles[i].move();
    bubbles[i].display();
  }
}
