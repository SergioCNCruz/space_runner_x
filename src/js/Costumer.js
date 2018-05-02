class Costumer{
    constructor(name, email, id, token) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.token = token;
        this.score = 23;
    }

    getData(){
        return {
            uid: this.id,
            name: this.name,
            email: this.email,
            token: this.token,
        };
    }

    getScore(){
        return {
            uid: this.id,
            score: this.score
        };
    }
}