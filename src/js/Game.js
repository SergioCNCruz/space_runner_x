class Game{
    constructor(auth){
        this.auth = auth;
        this.ship = new Ship(50, 100);
        this.asteroids = [];
        this.stars = [];
        this.score = 100;
        this.status = false;
    }

    load(){

    }

    start(){
        this.ship.y = (height*0.5);

        for(let a = 0; a < 8;a++) {
            this.asteroids.push(new Asteroid());
        }

        for(let a = 0; a < 100;a++) {
            this.stars.push(new Star());
        }
        this.status = false;
    }

    over(){
        this.auth.database.ref("scores/").push(this.costumer.getScore());

    }

    pause(){
        this.status = false
    }

    restart(){
        this.status = true
    }

    run(){
        if(this.auth.costumer) {
            textSize(20);
            fill(255, 255, 255, 90);
            text(this.auth.costumer.name, 10, 90);
        }

        for(let star of this.stars) {
            star.draw(this.status);
        }

        if(!this.status) {
            textSize(100);
            fill(255, 255, 255, 90);
            text('PAUSE', ((width*0.5) - 100), ((height*0.5) - 50));
        }

        for(let asteroid of this.asteroids) {
            asteroid.draw();
            if(this.status) {
                asteroid.move();
            }
        }

        this.ship.draw();
        if(this.status) {
            this.ship.collision_detection(this.asteroids);
            this.ship.move();
        }
    }
}