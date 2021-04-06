var h,min,seec;
var ho,m,s;




function setup() {
  createCanvas(600,600);
  //createSprite(400, 200, 50, 50);

  angleMode(degrees)
}

function draw() {
  background(0);  
  translate(200,200)
  rotate(-90)
  h=hour()
  min=minute()
  sec=second()
  
  s=map(sec,0,60,0,360)
  m=map(min,0,60,0,360)
  ho=map(ho%12,0,12,0,360)

  push()
  rotate(s)
  stroke(255,0,0)
  strokeWeight(7)
  line(0,0,100,0)
  pop()

  push()
  rotate(m)
  stroke(0,255,0)
  strokeWeight(7)
  line(0,0,75,0)
  pop()

  push()
  rotate(ho)
  stroke(0,0,255)
  strokeWeight(7)
  line(0,0,50,0)
  pop()

  
  strokeWeight(10)
  noFill()

  stroke(255,0,0)
  arc(0,0,300,300,0,s)

  stroke(0,255,0)
  arc(0,0,280,280,0,m)

  stroke(0,0,255)
  arc(0,0,260,260,0,ho)

}
  