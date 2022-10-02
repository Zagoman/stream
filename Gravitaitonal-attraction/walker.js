class Mover {
  constructor(x, y, m, c) {
    this.pos = createVector(x, y);
    // this.vel = createVector(1, -1);
    this.vel = p5.Vector.random2D();
    // this.vel.mult(random(3));
    // this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.mass = m;
    this.r = sqrt(this.mass);
    this.c = c;
  }

  friction() {
    let diff = height - (this.pos.y + this.r);
    if (diff < 1) {
      // console.log("friction");
      // Direction of friction
      let friction = this.vel.copy();
      friction.normalize();
      friction.mult(-1);

      // Magnitude of Friction
      let mu = 0.1;
      let normal = this.mass;
      friction.setMag(mu * normal);

      this.applyForce(friction);
    }
  }

  applyForce(force) {
    let f = p5.Vector.div(force, this.mass);
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
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }

  show() {
    fill(this.c[0], this.c[1], this.c[2], 100);
    // noStroke();
    ellipse(this.pos.x, this.pos.y, this.r * 2);
  }
}
