class LifeBar {
    constructor() {
        this.x = 10;
        this.y = 60;
        this.width = 450;
        this.height = 10;
    }

    draw() {
        noStroke();
        fill(255, 255, 255, 90);
        rect(this.x, this.y, this.width, this.height);
    }
}