import decode from 'jwt-decode';
import history from '../../history';
import auth0 from 'auth0-js';
import AUTH_CONFIG from './authVariables';


export default class Auth {

    //--------------- AUTHENTICATION INSTANCE ---------------//
    auth0 = new auth0.WebAuth({
        domain: AUTH_CONFIG.domain,
        clientID: AUTH_CONFIG.clientID,
        redirectUri: AUTH_CONFIG.callBackUrl,
        responseType: 'token id_token'
    });

    //--------------- BINDING CONSTRUCTOR ---------------//
    // this constructor is necessary so that `this` can be used in these methods callbacks.
    constructor() {
        this.login = this.login.bind(this);
        this.logout = this.login.bind(this);
        this.handleAuthentication = this.handleAuthentication.bind(this);
        this.isAuthenticated = this.isAuthenticated.bind(this);
    };


    //--------------- LOGIN METHOD ---------------//
    // use the built in .authorize method to  authorize users.
    login() {
        this.auth0.authorize()
    };    

    //--------------- HANDLE AUTHENTICATION ---------------//
    handleAuthentication() {
        this.auth0.parseHash((err, authResult) => {
            if (authResult && authResult.accessToken && authResult.idToken) {
                this.setSession(authResult);
                // redirect to '/dashboard'
                // either the example below or use history npm
                redirect('/dashboard');
            } else if (err) {
                console.log(err);
                console.log("there was an error in handleAuthentication");
                // send the error in plain text to the user as well.
            }
        })
    };

    //--------------- SET SESSION ---------------//
    setSession() {
        // setting expiration of authentication for the current user.
        let expiration = JSON.Stringify((authResult.expiresIn * 1000) + new Date().getTime());
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('expires_at', expiration);
        // redirect to the dashboard
        // either the example below or use history npm
        redirect('/dashboard');
    };

    //--------------- LOGOUT METHOD ---------------//
    logOut() {
        localStorage.removeItem('id_token');
        localStorage.removeItem('access_token');
        localStorage.removeItem('expires_at');
    
    };

    //--------------- IS AUTHENTICATED METHOD ---------------//
    isAuthenticated(authResult) {
        // check to see if the current user is still authenticated
        // you can check this by comparing the current time with the expiration.
        let expireCheck = JSON.parse(localStorage.getItem('expires_at'));
        return new Date().getTime() < expireCheck;
    };


}

