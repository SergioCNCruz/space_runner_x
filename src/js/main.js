let stage = null;
let auth = new Auth(config, false);
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
    textSize(32);
    fill(255, 255, 255, 90);
    text('SPACE RUNNER X', 10, 40);}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function keyPressed() {
    if(keyCode === 32) {
        if (game.status) {
            game.pause();
        } else {
            game.restart();
        }
    }
}