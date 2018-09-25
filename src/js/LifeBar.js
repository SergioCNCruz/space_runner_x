class LifeBar {
    constructor() {
        this.reset();
    }

    reset(){
        this.x = 10;
        this.y = 60;
        this.width = 450;
        this.height = 10;
        this.status = true;
    }

    draw() {
        noStroke();
        fill(255, 255, 255, 90);
        rect(this.x, this.y, this.width, this.height);
    }

    hit(){
        if(this.width >= 100) {
            this.width -= 100;
        } else {
            this.width = 0;
            this.status = false;
        }
    }
}