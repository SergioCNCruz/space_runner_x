class Asteroid{
    constructor() {
        this.diameter = random(60, 80);
        this.direction = random(-1, 1);
        this.set();
    }

    set() {
        this.x = width + random(0, width/2);
        this.y = random(0, height);
        this.speed = random(2, 5);
    }

    draw() {
        noStroke();
        fill(204, 204, 204);
        ellipse(this.x + 40, this.y + 8, this.diameter);
    }

    move() {
        this.x -= this.speed;
        if(this.x <= -this.diameter) {
            this.set();
        }

        this.y += this.direction;
    }
}
