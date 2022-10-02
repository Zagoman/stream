let walkers = [];
function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 10; i++) {
    walkers.push(new Walker(random(100, 300), height / 2, random(1, 10)));
  }
}

function draw() {
  background(210);

  for (let walker of walkers) {
    if (mouseIsPressed) {
      let wind = createVector(0.5, 0);
      walker.applyForce(wind);
    }
    let gravity = createVector(0, 0.5);

    let weightA = p5.Vector.mult(gravity, walker.mass);
    walker.applyForce(weightA);
    walker.friction();
    walker.update();

    walker.edges();

    walker.show();
  }
}
