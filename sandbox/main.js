let acc;
const agents = [];
function setup() {
  createCanvas(500, 500);
  for (let i = 0; i < 100; i++) {
    agents.push(new Agent());
  }
  acc = p5.Vector.random2D().setMag(0.01);
  background(240, 80);
}
function draw() {
  for (let agent of agents) {
    agent._Update();
  }
}
function edges(vector, vel) {
  if (vector.y <= r) {
    vector.y = r;
    vel.y *= -1;
  }
  if (vector.y >= height - r) {
    vector.y = height - r;
    vel.y *= -1;
  }
  if (vector.x >= width - r) {
    vector.x = width - r;
    vel.x *= -1;
  } else if (vector.x <= r) {
    vector.x = r;
    vel.x *= -1;
  }
}
