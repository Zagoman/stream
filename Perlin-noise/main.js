let inc = 0.01;

function setup() {
  createCanvas(400, 400);
  pixelDensity(1);
}

function draw() {
  let yoff = 0;
  loadPixels();
  for (let y = 0; y < height; y++) {
    let xoff = 0;
    for (let x = 0; x < width; x++) {
      let index = (x + y * width) * 4;
      let b = noise(xoff, yoff) * 255;
      pixels[index] = b;
      pixels[index + 1] = 50;
      pixels[index + 2] = 125;
      pixels[index + 3] = 255;

      xoff += inc;
      //   noiseDetail(48);
    }
    yoff += inc;
  }
  updatePixels();
  //   inc += 0.0001;
  //   noLoop();
}
