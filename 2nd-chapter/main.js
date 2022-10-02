let movers = [];
let attractor;
function setup() {
  createCanvas(400, 400);
  background(0);
  let c = [random(255), random(255), random(255)];
  // mover = new Mover(50, 50, 2);
  // for (let i = 0; i < 3; i++) {
  //   let x = random(width);
  //   let y = random(height);
  //   let m = random(10, 100);
  //   let c = [random(255), random(255), random(255)];
  //   movers.push(new Mover(x, y, m, c));
  // }
  movers[0] = new Mover(100, 200, 0, -1, 50, c);
  movers[1] = new Mover(300, 200, 0, 1, 50, c);
  // movers[2] = new Mover(200, 200, 0, 0, 50, c);
  // attractor = new Attractor(width / 2, height / 2, 2);
}

function draw() {
  noStroke();
  // attractor.pos.set(mouseX, mouseY);
  for (let mover of movers) {
    for (let other of movers) {
      if (mover !== other) {
        mover.attract(other);
      }
    }
  }

  for (let mover of movers) {
    mover.update();
    mover.show();
    // attractor.attract(mover);
  }
  // attractor.show();
}
