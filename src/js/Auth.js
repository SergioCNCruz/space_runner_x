class Auth{
    constructor(config){
        firebase.initializeApp(config);
        this.costumer = null;
        this.database = null;
        this.token = null;
        this.error = null;
        this.game = null;
    }

    authenticate(game){
        this.game = game;
        let provider = new firebase.auth.GoogleAuthProvider();

        provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
        firebase.auth().languageCode = 'pt';

        firebase.auth().getRedirectResult().then(function(result) {
            if(result.credential) {
                auth.createCostumer(result);
            } else {
                firebase.auth().signInWithRedirect(provider);
            }
        }).catch(function(error) {
            console.log(error);
        });
    }

    createCostumer(result) {
        this.costumer = new Costumer(result.user.displayName, result.user.email, result.user.uid, result.credential.accessToken);
        this.database = firebase.database();
        this.database.ref("costumers/" + this.costumer.id).set(this.costumer.getData());
        this.game.start();
    }
}