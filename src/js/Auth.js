class Auth{
    constructor(config, login){
        if(login === true) {
            firebase.initializeApp(config);
        }
        this.costumer = null;
        this.database = null;
        this.token = null;
        this.error = null;
        this.game = null;
        this.login = login;
    }

    authenticate(game){
        this.game = game;
        if(this.login) {
            let provider = new firebase.auth.GoogleAuthProvider();

            provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
            firebase.auth().languageCode = 'pt';

            firebase.auth().getRedirectResult().then(function(result) {
                if(result.credential) {
                    auth.createCostumer(result);
                    this.game.is_authenticated = true;
                } else {
                    firebase.auth().signInWithRedirect(provider);
                }
            }).catch(function(error) {
                console.log(error);
            });
        } else {
            this.createDevCostumer();
        }
    }

    createCostumer(result) {
        this.costumer = new Costumer(result.user.displayName, result.user.email, result.user.uid, result.credential.accessToken);
        this.database = firebase.database();
        this.database.ref("costumers/" + this.costumer.id).set(this.costumer.getData());
        this.game.start();
    }

    createDevCostumer() {
        this.costumer = new Costumer('Sérgio C. N. Cruz', 'sergiocncruz@gmail.com', '123213213', 'faketoken');
        this.game.start();
        this.game.is_authenticated = true;
    }
}