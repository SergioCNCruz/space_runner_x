let ship, stage = null;
let asteroids = [];
let stars = [];

function preload() {

}

function setup() {
    stage = createCanvas(1000, 500);
    stage.parent("stage");
    background(0, 0, 0);
    ship = new Ship(0, height/2);

    for(let a = 0; a < 8;a++) {
        asteroids.push(new Asteroid());
    }

    for(let a = 0; a < 100;a++) {
        stars.push(new Star());
    }


}

function draw() {
    background(0, 0, 0);

    for(let star of stars) {
        star.draw();
    }

    for(let asteroid of asteroids) {
        asteroid.draw();
        asteroid.move();
    }

    ship.draw();
    ship.move();
}