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
        triangle(this.x + 45,this.y - 16,this.x + 45,this.y + 32,this.x + 120,this.y + 8)


        fill(0, 0, 0, 40);
        ellipse(this.x + 60, this.y + 8, this.width - (this.width/3), this.height/2);
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