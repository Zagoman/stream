class Bola {
  constructor(pos, vel, acc) {
    this._pos = pos;
    this._vel = vel;
    this._acc = acc;
    this._r;
  }

  _Edges() {
    if (this._pos.y <= r) {
      this._pos.y = r;
      this._vel.y *= -1;
    }
    if (this._pos.y >= height - r) {
      this._pos.y = height - r;
      this._vel.y *= -1;
    }
    if (this._pos.x >= width - r) {
      this._pos.x = width - r;
      this._vel.x *= -1;
    } else if (this._pos.x <= r) {
      this._pos.x = r;
      this._vel.x *= -1;
    }
  }

  _Attract(vec1, vec2) {
    vec1._acc = createVector(vec1.x - vec2.x, vec1.y - vec2.y).setMag(0.01);
    vec2._acc = createVector(vec2.x - vec1.x, vec2.y - vec1.y).setMag(0.01);
  }
  _Update() {
    this._Attract();
    this._Edges();
    this._vel.sub(this._acc);
    this._Show();
  }

  _Show() {
    fill(55, 150, 100);
    ellipse(this._pos.x, this._pos.y, this._r);
  }
}
