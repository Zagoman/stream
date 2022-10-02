let walker;
let pos;
let prev;

function setup() {
  createCanvas(400, 400);
  background(0);
  pos = createVector(width / 2, height / 2);
  prev = pos.copy();

  // walker = new Walker(width / 2, height / 2);
}

function draw() {
  // walker.show();
  // walker.update();
  stroke(255, 255);
  strokeWeight(2);
  // point(pos.x, pos.y);
  line(pos.x, pos.y, prev.x, prev.y);
  prev.set(pos);
  let step = p5.Vector.random2D();
  let prob = random(200);
  if (prob <= 1) {
    step.mult(random(20, 180));
  } else {
    step.setMag(random(1, 5));
    // console.log(step);
  }
  pos.add(step);
}
