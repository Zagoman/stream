class Walker {
  constructor(x, y) {
    this.pos = createVector(x, y);
    // this.vel = createVector(1, -1);
    this.vel = p5.Vector.random2D();
    // this.vel.mult(100)
  }

  update() {
    // let mouse = createVector(mouseX, mouseY);
    // this.acc = p5.Vector.sub(mouse, this.pos);
    // this.acc.setMag(0.1);

    // this.vel.add(this.acc);

    // this.acc.setMag(0.01);
    this.vel.limit(4);
    this.pos.add(this.vel);
  }

  show() {
    fill(255);
    // noStroke();
    ellipse(this.pos.x, this.pos.y, 10, 10);
  }
}
