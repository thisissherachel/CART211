/**
This is the background of the webpage
*/

"use strict";

let sketch = function (p) {
  let numSquares = 5;
  let squares = [];

  /**
  Description of setup
  */
  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.background(255);

    p.rectMode(p.CENTER);

    for (let i = 0; i < numSquares; i++) {
      let square = p.createSquares();
      squares.push(square);
    }
  };

  p.createSquares = function () {
    let mySize = p.random((p.height / 5) * 3, (p.width / 5) * 3);
    let alphaValue = 50;
    let fillOptions = [
      p.color(255, 99, 214, alphaValue),
      p.color(0, 12, 255, alphaValue),
      p.color(255, 247, 0, alphaValue),
      p.color(88, 255, 99, alphaValue),
      p.color(255, 72, 30, alphaValue),
    ];
    let mySpeed = p.random(-0.8, 0.8);
    let square = {
      x: p.random(0, p.width),
      y: p.random(0, p.height),
      size: mySize,
      fill: p.random(fillOptions),

      turnRate: 0.003,
      speed: 0.8,
      vx: mySpeed,
      vy: mySpeed,

      angle: p.random(-100, 100),
      rotate: p.random(-0.003, 0.003),
    };
    return square;
  };

  /**
Description of draw()
*/
  p.draw = function () {
    p.background(255);

    p.displaySquares();
  };

  p.displaySquares = function () {
    for (let i = 0; i < squares.length; i++) {
      let square = squares[i];
      p.push();

      let r = p.random(0, 1);
      if (r < square.turnRate) {
        square.vx = p.random(-square.speed, square.speed);
        square.vy = p.random(-square.speed, square.speed);
        square.rotate = -square.rotate;
      }

      square.x += square.vx;
      square.y += square.vy;

      square.x = p.constrain(square.x, -10, p.width + 10);
      square.y = p.constrain(square.y, -10, p.height + 10);

      p.noStroke();
      p.fill(square.fill);

      square.angle += square.rotate;

      p.translate(square.x, square.y);
      p.rotate(square.angle);

      p.rect(0, 0, square.size);
      p.pop();
    }
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

let myp5 = new p5(sketch, `myBackground`);

/**
How to integrate a p5 script in an html div:
https://joemckaystudio.com/multisketches/
*/
