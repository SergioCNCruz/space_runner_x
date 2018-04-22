class Ship {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 50;
        this.height = 50;
        this.y_axis = 0;
    }

    draw() {
        stroke(166, 166, 166);
        strokeWeight(12);
        line(this.x - this.width*0.8, this.y - 50, this.x + 5, (this.y + this.y_axis));
        line(this.x - this.width*0.8, this.y + 50, this.x + 5, (this.y + this.y_axis));

        noStroke();
        fill(155, 155, 155);
        rect(this.x - (this.width), this.y - (57 + this.y_axis), 70, 15, 5);
        rect(this.x - (this.width), this.y + (42 + this.y_axis*-1), 70, 15, 5);

        stroke(204, 204, 204);
        strokeWeight(12);
        line(this.x - this.width*0.6, this.y - 50, this.x + 5, (this.y + this.y_axis) + 5);
        line(this.x - this.width*0.6, this.y + 50, this.x + 5, (this.y + this.y_axis) - 5);

        noStroke();
        fill(255, 255, 255);
        rect(this.x - (this.width), this.y - (62 + this.y_axis), 70, 15, 5);
        rect(this.x - (this.width), this.y + (47 + this.y_axis*-1), 70, 15, 5);

        fill(255, 255, 255);
        ellipse(this.x, this.y, this.width, this.height);

        fill(0, 0, 0, 60);
        ellipse(this.x + (this.width*0.35), this.y, this.width*0.25, this.height*0.5);
        this.y_axis = 0;
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
                this.y_axis = 5;
            }
        }

        if (keyIsDown(DOWN_ARROW)) {
            if (this.y < (height - this.height)) {
                this.y += 5;
                this.y_axis = -5;
            }
        }
    }
}