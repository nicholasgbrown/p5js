/* RG Motion 1 extended
"Star Field"
5 Mar 2015
Ported to P5.js 21 August 2016
*/

// set up dots, using a javascript object
var stars = {
  starWidth: 2, // width of star
  dir: 1, // direction of motion
  count: 900, // number of stars
  tail: 125, // opacity value of rect overlay (0=long tail; 255=no tail)
};

// set up range of motions amongst stars
var motion = {
  minSpeed: 0.1,
  maxSpeed: 1,
};

// declare arrays
var greyScale = new Array(stars.count); // greyscale value amongst stars
var xSpeed = new Array(stars.count); // different speeds of different stars
var xPos = new Array(stars.count); // allows for different x position amongst stars
var yPos = new Array(stars.count); // ditto, y position

function setup() {
  createCanvas(1440, 900);
  background(0);

  // initialize arrays (set up the star field)
  for (var i = 0; i < stars.count; i++) {
    greyScale[i] = random(50, 255);
    xSpeed[i] = random(motion.minSpeed, motion.maxSpeed);
    xPos[i] = 0;
    yPos[i] = random(stars.count);
  }

}

function draw() {

  //draw opaque rect with each draw() loop
  noStroke();
  fill(0, stars.tail);
  rect(0, 0, width, height);

  // update location of each individual star with each draw() loop
  for (var i = 0; i < stars.count; i++) {
    xPos[i] = xPos[i] + (xSpeed[i] * stars.dir);
    fill(greyScale[i]);
    ellipse(xPos[i], yPos[i], stars.starWidth, stars.starWidth);

    // check for stars at boundary, if so, reverse direction
    if (xPos[i] > width - stars.starWidth) {
      stars.dir = -stars.dir;
    } else if (xPos[i] < 0) {
      stars.dir = -stars.dir;
    }
  }
}