import './style.css';

import p5 from 'p5';

const _app = new p5(p5Instance => {
  const p = p5Instance as unknown as p5;

  const x = 100;
  const y = 100;

  p.setup = function setup() {
    p.createCanvas(500,500);
    let noiseLevel = 255;
    let noiseScale = 0.05;
  
    // Iterate from top to bottom.
    for (let y = 0; y < p.height; y += 1) {
      // Iterate from left to right.
      for (let x = 0; x < p.width; x += 1) {
        // Scale the input coordinates.
        let nx = noiseScale * x;
        let ny = noiseScale * y;

  
        // Compute the noise value.
        let c = noiseLevel * p.noise(nx, ny);
  
        // Draw the point.
        p.stroke(c);
        p.point(x, y);
      }
    }
  };

  p.draw = function draw() {

  };
}, document.getElementById('app')!);
