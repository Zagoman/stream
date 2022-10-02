let movers = [];
let attractor;
function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  // mover = new Mover(50, 50, 2);
  for (let i = 0; i < 100; i++) {
    let x = random(width);
    let y = random(height);
    let m = random(10, 100);
    let c = [random(255), random(255), random(255)];
    movers.push(new Mover(x, y, m, c));
  }
  attractor = new Attractor(width / 2, height / 2, 2);
}

function draw() {
  background(255, 1);
  noStroke();
  attractor.pos.set(mouseX, mouseY);
  for (let mover of movers) {
    mover.update();
    mover.show();
    attractor.attract(mover);
  }
  attractor.show();
}
