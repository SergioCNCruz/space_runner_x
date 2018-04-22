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
        line(this.x - this.width*0.75, this.y - 50, this.x, this.y);
        line(this.x - this.width*0.75, this.y + 50, this.x, this.y);

        noStroke();
        fill(255, 255, 255);
        rect(this.x - (this.width), this.y - 60, 60, 15, 60);
        rect(this.x - (this.width), this.y + 45, 60, 15, 60);

        fill(255, 255, 255);
        ellipse(this.x, this.y, this.width, this.height);

        fill(0, 0, 0, 50);
        ellipse(this.x + (this.width*0.35), this.y, this.width*0.25, this.height*0.5);
    }

    move() {
        if (keyIsDown(LEFT_ARROW)) {
            if(this.x > this.width) {
                this.x -= 5;
            }
        }

        if (keyIsDown(RIGHT_ARROW)) {
            if(this.x < (width - this.width)) {
                this.x += 5;
            }
        }

        if (keyIsDown(UP_ARROW)) {
            if (this.y > this.height) {
                this.y -= 5;
            }
        }

        if (keyIsDown(DOWN_ARROW)) {
            if (this.y < (height - this.height)) {
                this.y += 5;
            }
        }
    }
}