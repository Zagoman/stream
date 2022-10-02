class Agent {
  constructor() {
    this._pos = createVector();
    this._xoff1 = random(300);
    this._xoff2 = random(300);
    this._r = random(20, 140);
    this._g = random(100, 200);
    this._b = random(10, 255);
    this._radius = random(10, 15);
    this._rate = 0.005;
    this._acc = p5.Vector.random2D().setMag(0.1);
  }

  _Update() {
    noStroke();
    fill(this._r, this._g, this._b, 180);
    this._pos.set(noise(this._xoff1) * width, noise(this._xoff2) * height);
    // this._pos.add(this._acc);
    ellipse(this._pos.x, this._pos.y, this._radius * 2);
    this._xoff1 += this._rate;
    this._xoff2 += this._rate;
  }
}
