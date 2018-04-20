let ship = null;

function preload() {

}

function setup() {
    createCanvas(600, 400);
    background(0, 0, 0);
    ship = new Ship(0, height/2);
}

function draw() {
    background(0, 0, 0);
    ship.draw();
}