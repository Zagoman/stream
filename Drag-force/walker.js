class Walker {
  constructor(x, y, m) {
    this.pos = createVector(x, y);
    // this.vel = createVector(1, -1);
    // this.vel = p5.Vector.random2D();
    // this.vel.mult(random(3));
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.mass = m;
    this.r = sqrt(this.mass) * 10;
  }

  drag() {
    // Direction of Drag
    let drag = this.vel.copy();
    drag.normalize();
    drag.mult(-1);

    let c = 0.1;
    let speedSq = this.vel.magSq();
    drag.setMag(c * speedSq);

    this.applyForce(drag);
  }

  applyForce(force) {
    let f = p5.Vector.div(force, this.mass);
    // force.div(this.mass);
    this.acc.add(f);
  }

  edges() {
    if (this.pos.y >= height - this.r) {
      this.pos.y = height - this.r;
      this.vel.y *= -1;
    }
    if (this.pos.x >= width - this.r) {
      this.pos.x = width - this.r;
      this.vel.x *= -1;
    } else if (this.pos.x <= this.r) {
      this.pos.x = this.r;
      this.vel.x *= -1;
    }
  }
  update() {
    // let mouse = createVector(mouseX, mouseY);
    // this.acc = p5.Vector.sub(mouse, this.pos);
    // this.acc.setMag(0.3);
    // this.acc.setMag(0.01);

    // this.vel.limit(4);
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }

  show() {
    fill(255, 100);
    // noStroke();
    ellipse(this.pos.x, this.pos.y, this.r * 2);
  }
}
