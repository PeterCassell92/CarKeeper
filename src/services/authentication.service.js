
/**
 * Service for handling user access
 */
class AuthenticationService{
    /**
     * Sets up service.
     */
    constructor(){
        this.user = null;
        this.loginRedirect= null;
        this.initialised = false;
        this.onSuccess = null;
        this.onError = null;
    }

    async initialise(){

        //check for existing token.
        //if present then exchange the token

    }

    async login(username, password){

        //call login service
        //if successful, redirect to Dashboard
        //if not successful, error and provide toast in the UI.
    }

    async logout(userid){

    }




}


export default AuthenticationService;