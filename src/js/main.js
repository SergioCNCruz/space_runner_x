let stage = null;
let auth = new Auth(config);
let game = new Game(auth);

function preload() {
}

function setup() {
    stage = createCanvas(windowWidth, windowHeight);
    /* stage.parent("stage"); */
    background(0, 0, 0);
    auth.authenticate(game);
}

function draw() {
    background(0, 0, 0);
    game.run();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}