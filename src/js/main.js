let ship = null;
let asteroids = [];

function preload() {

}

function setup() {
    createCanvas(800, 500);
    background(0, 0, 0);
    ship = new Ship(0, height/2);

    for(let a = 0; a < 8;a++) {
        asteroids.push(new Asteroid());
    }

}

function draw() {
    background(0, 0, 0);
    ship.draw();
    ship.move();

    for(let asteroid of asteroids) {
        asteroid.draw();
        asteroid.move();
    }
}