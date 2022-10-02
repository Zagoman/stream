let walker;

function setup() {
  createCanvas(400, 400);

  background(0);
  //   walker = new Walker(0, 0);
}

function draw() {
  translate(width / 2, height / 2);
  let pos = createVector(200, 200);
  let mouse = createVector(mouseX, mouseY);

  let v = p5.Vector.sub(mouse, pos);
  // v.normalize().mult(50);
  // v.setMag(random(200));

  strokeWeight(4);
  if (mouseIsPressed) {
    stroke(random(20), 0, random(255), 100);
  } else {
    stroke(100, 50, 255, 100);
  }
  line(0, 0, v.x, v.y);
}
