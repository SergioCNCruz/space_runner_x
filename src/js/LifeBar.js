class LifeBar {
    constructor() {
        this.x = 10;
        this.y = 10;
        this.width = 450;
        this.height = 30;
    }

    draw() {
        noStroke();
        fill(244, 244, 244);
        rect(this.x, this.y, this.width, this.height);
    }
}