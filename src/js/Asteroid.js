class Asteroid{
    constructor() {
        this.diameter = random(80, 100);
        this.direction = random(-1, 1);
        this.craters = [];
        this.reset();

        for (let c = 0; c < 12; c++) {
            this.craters.push(new Crater(this));
        }
    }

    reset() {
        this.x = width + random(0, width/2);

        this.y = random(0, height);
        this.speed = random(6, 14);

    }

    draw() {
        noStroke();
        fill(230, 230, 230);
        ellipse(this.x, this.y, this.diameter);

        for(let crater of this.craters) {
            crater.draw();
            crater.intersect(this.craters);
        }
    }

    move() {
        this.x -= this.speed;
        if(this.x <= -this.diameter) {
            this.reset();
        }

        this.y += this.direction;
    }
}
