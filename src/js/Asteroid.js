class Asteroid{
    constructor() {
        this.diameter = random(80, 100);
        this.direction = random(-1, 1);
        this.craters = [];
        this.set();

        for (let c = 0; c < 7; c++) {
            this.craters.push(new Crater(this));
        }
    }

    set() {
        this.x = width + random(0, width/2);
        //this.x = (width/2);
        this.y = random(0, height);
        this.speed = random(2, 5);

    }

    draw() {
        noStroke();
        fill(230, 230, 230);
        ellipse(this.x, this.y, this.diameter);

        for(let crater of this.craters) {
            crater.draw();
        }
    }

    move() {
        this.x -= this.speed;
        if(this.x <= -this.diameter) {
            this.set();
        }

        this.y += this.direction;
    }
}
