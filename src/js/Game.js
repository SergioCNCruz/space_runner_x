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
        for(let a = 0; a < 8;a++) {
            this.asteroids.push(new Asteroid());
        }

        for(let a = 0; a < 100;a++) {
            this.stars.push(new Star());
        }
        this.status = true;
    }

    over(){
        this.auth.database.ref("scores/").push(this.costumer.getScore());

    }

    pause(){

    }

    restart(){

    }

    run(){
        if(this.status) {
            for(let star of this.stars) {
                star.draw();
            }

            for(let asteroid of this.asteroids) {
                asteroid.draw();
                asteroid.move();
            }

            this.ship.draw();
            this.ship.move();
        }
    }


}