class Star{
    constructor(){
        this.x = random(0, width);
        this.y = random(0, height);
        this.diameter = random(1, 3);
    }

    draw() {
        fill(255, 255, 255);
        ellipse(this.x, this.y, this.diameter);
        this.x -= 1;
        if (this.x <= 0) {
            this.x = width;
            this.y = random(0, height);
        }
    }

}