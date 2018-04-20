class Ship {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 50;
        this.height = 50;
    }

    draw() {
        stroke(204, 204, 204);
        strokeWeight(12);
        line(this.x + 20, this.y - 40, this.x + 60, this.y + 20);
        line(this.x + 20, this.y + 50, this.x + 50, this.y);

        noStroke();
        fill(255, 255, 255);
        rect(this.x, this.y + 50, 60, 15, 60);
        rect(this.x, this.y - 50, 60, 15, 60);

        fill(255, 255, 255);
        ellipse(this.x + 40, this.y + 8, this.width, this.height);
        triangle(this.x + 45,this.y - 17,this.x + 45,this.y + 32,this.x + 120,this.y + 8)
    }
}