/**
This is the background of the webpage

How to integrate a p5 script in an html div:
https://joemckaystudio.com/multisketches/
*/

"use strict";

let sketch = function (p) {
  // choose the number of squares we want
  let numSquares = 20;
  // create an array to store the squares
  let squares = [];

  /**
  setup()
  create a canvas and background
  create the squares and push them into the array "squares"
  */
  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight); //canvas
    p.background(255); //white background

    p.rectMode(p.CENTER); //make the origin of the squares their center

    //for loop to create as many squares as we decided in numSquares
    for (let i = 0; i < numSquares; i++) {
      let square = p.createSquares(); //create a square
      squares.push(square); //add it at the end of the squares array
    }
  };

  /**
  createSquares()
  create an object called square with the information needed to display
  */
  p.createSquares = function () {
    //choose a size according to the size of the window
    let mySize = p.random((p.height / 5) * 4, (p.width / 5) * 4);
    let alphaValue = 75; //define its opacity/transparency
    //create an array with different options for the color of its fill
    let fillOptions = [
      p.color(255, 99, 214, alphaValue),
      p.color(0, 12, 255, alphaValue),
      p.color(255, 247, 0, alphaValue),
      p.color(88, 255, 99, alphaValue),
      p.color(255, 72, 30, alphaValue),
    ];
    //choose the speed at which the square moves
    let mySpeed = p.random(-0.8, 0.8);
    // Object square
    let square = {
      x: p.random(0, p.width), //choose x coordinates according to the width of the window
      y: p.random(0, p.height), //choose y coordinates according to the height of the window
      size: mySize, //choose a size
      fill: p.random(fillOptions), //choose the color

      turnRate: 0.003, //chances of the square turning
      speed: 0.8, //speed is the maximum speed and -speed the minimum speed at which a square can move
      vx: mySpeed, //x velocity
      vy: mySpeed, //y velocity

      angle: p.random(-100, 100), //the angle at which the square starts (so they don't all start straight)
      rotate: p.random(-0.003, 0.003), //the speed and side of the rotation
    };
    return square; //return square so we can call it in the setup
  };

  /**
  draw()
  redraw the background every frame
  display the squares
  */
  p.draw = function () {
    p.background(255);

    p.displaySquares();
  };

  /**
  displaySquares()
  display each square according to its information in the createSquares function
  */
  p.displaySquares = function () {
    // for loop to display a square per element in the squares array
    for (let i = 0; i < squares.length; i++) {
      let square = squares[i]; //for simplicity sake

      //display object
      p.push();

      // Rotation and velocity of the squares
      let r = p.random(0, 1); //choose a number between 0 and 1
      //see if it is smaller than the turnRate (probability)
      if (r < square.turnRate) {
        // if yes, change the velocity of x and y to something else inside the speed range
        square.vx = p.random(-square.speed, square.speed);
        square.vy = p.random(-square.speed, square.speed);
        // and change the side of the rotation
        square.rotate = -square.rotate;
      }

      // Add the velocity to the coordinates to make the square move
      square.x += square.vx;
      square.y += square.vy;

      // Stop the square from going too far off canvas
      square.x = p.constrain(square.x, -10, p.width + 10);
      square.y = p.constrain(square.y, -10, p.height + 10);

      // Fill with the right color and remove the outline of the square
      p.noStroke();
      p.fill(square.fill);

      // Add the rotation to the angle so the square rotates
      square.angle += square.rotate;

      // Place the square at the determined coordinates and rotate it by the determined angle
      p.translate(square.x, square.y);
      p.rotate(square.angle);

      // Display the square
      p.rect(0, 0, square.size);
      p.pop();
    }
  };

  /**
  windowResized()
  everytime the window size changes, resize the canvas to the new window size
  */
  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

//push the above code in the "myBackground" id for the html
let myp5 = new p5(sketch, `myBackground`);
