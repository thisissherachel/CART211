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
    let mySize = p.random(500, 700);
    let square = {
      x: p.random(0, p.width),
      y: p.random(0, p.height),
      size: mySize,
      fill: {
        r: p.random(100, 255),
        g: p.random(80, 180),
        b: p.random(100, 255),
        a: 30,
      },

      angle: p.random(-100, 100),
      rotate: p.random(-0.001, 0.001),
    };
    return square;
  };

  /**
Description of draw()
*/
  p.draw = function () {
    p.background(255);

    for (let i = 0; i < squares.length; i++) {
      let square = squares[i];
      p.push();
      p.noStroke();
      p.fill(square.fill.r, square.fill.g, square.fill.b, square.fill.a);

      square.angle += square.rotate;

      p.translate(square.x, square.y);
      p.rotate(square.angle);

      p.rect(0, 0, square.size);
      p.pop();
    }
  };
};

let myp5 = new p5(sketch, `myBackground`);

/**
How to integrate a p5 script in an html div:
https://joemckaystudio.com/multisketches/
*/
