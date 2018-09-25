class Game{
    constructor(auth){
        this.auth = auth;
        this.asteroids = [];
        this.stars = [];
        this.score = 100;
        this.status = false;
        this.is_authenticated = false;
        this.started = false;
    }

    load(){
        this.ship = new Ship(width, height);
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
        this.started = true;
        if(this.ship.life.status) {
            this.status = true
        } else {
            this.reset();
        }
    }

    reset(){
        this.ship.y = (height*0.5);

        for(let asteroid of this.asteroids) {
            asteroid.reset();
        }

        this.ship.reset();
        this.status = true;
    }

    run(){
        if(this.is_authenticated) {

            for(let star of this.stars) {
                star.draw(this.status);
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

            if(!this.status && this.ship.life.status) {
                textSize(100);
                fill(33, 150, 243, 90);
                let txt = 'PAUSE';

                if(!this.started) {
                    txt = 'START';
                }

                text(txt, ((width*0.5) - 140), ((height*0.5) - 30));
            }

            textSize(32);
            fill(255, 255, 255, 90);
            text('SPACE RUNNER X', 10, 40);


            if(!this.ship.life.status) {
                this.status = false;
                textSize(100);
                fill(33, 150, 243, 90);
                text('GAME OVER', ((width*0.3) - 50), ((height*0.5) - 50));
            }

            if(this.auth.costumer) {
                textSize(20);
                fill(255, 255, 255, 90);
                text(this.auth.costumer.name, 10, 90);
            }
        }
    }
}