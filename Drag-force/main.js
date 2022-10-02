let walkers = [];
function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 10; i++) {
    walkers.push(new Walker(random(100, 300), 0, random(1, 10)));
  }
}

function draw() {
  background(0);
  fill(255, 125);
  noStroke();
  rect(0, height / 2, width, height / 2);

  for (let walker of walkers) {
    if (mouseIsPressed) {
      let wind = createVector(0.5, 0);
      walker.applyForce(wind);
    }
    let gravity = createVector(0, 0.5);

    let weightA = p5.Vector.mult(gravity, walker.mass);
    walker.applyForce(weightA);
    if (walker.pos.y > height / 2) {
      walker.drag();
    }
    walker.update();

    walker.edges();

    walker.show();
  }
}
