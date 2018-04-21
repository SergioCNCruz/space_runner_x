class Crater{
    constructor(asteroid) {
        this.asteroid = asteroid;
        this.diameter = random(5, 15);
        this.x_direction = random(-1, 1);
        this.y_direction = random(-1, 1);
        this.relative_x = (random(10, (this.asteroid.diameter/2) - (this.diameter*2)) * this.y_direction);
        this.relative_y = (random(10, (this.asteroid.diameter/2) - (this.diameter*2)) * this.x_direction);
        this.y = this.asteroid.y + this.relative_x;
        this.x = this.asteroid.x + this.relative_y;
    }

    draw() {
        strokeWeight(1);
        stroke(200);
        fill(220, 220, 220);
        this.y = this.asteroid.y + this.relative_x;
        this.x = this.asteroid.x + this.relative_y;
        ellipse(this.x, this.y, this.diameter);
    }
}
