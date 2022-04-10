//import {Observable} from 'rxjs';
import sdk, { MatrixClient, User } from 'matrix-js-sdk';
import {MatrixConfiguration} from '../../boot/MatrixConfiguration';
import CardiopeerMidataService from './CardiopeerMidataService';

export default class CardiopeerMatrixService {
    mtxClient: MatrixClient;
    private loggedIn: boolean;
    //MIDATA Variables
    midataClient: CardiopeerMidataService;
    
    constructor (midataService: CardiopeerMidataService){
        this.mtxClient = this.initiateMatrixClient();
        this.midataClient = midataService;
        this.loggedIn = false;
    }

    /**
     * Returns the MatrixClient Object to make method calls for matrix.
     * @returns MatrixClient Object to handle Communication with Matrix Server
     */
    private initiateMatrixClient (): MatrixClient {
        return sdk.createClient(MatrixConfiguration.HOMESERVER_URL);
    }

    /**
     * Handles the OAuth2 login into MIDATA and Matrix
     */
    public login(){
        //TODO Authentication testing
        try {
            this.midataClient.authenticate();
            //document.location.href = this.mtxClient.getSsoLoginUrl(document.location.href, 'sso', 'oidc-midata');
        } catch (error) {
            console.error('Error while logging into MIDATA / Matrix', error);
        }
    }

    /**
     * Checks if there is a open Matrix Session
     * @returns True if Login is active, false if not
     */
    public isLoggedIn(): boolean{
        return this.loggedIn;
    }

    /**
     * Logs the user out by resetting authentification details.
     */
    public logout(): void {
        this.mtxClient.logout();
    }

    public findUser(id: string): User{
        const user = this.mtxClient.getUser(id);
        console.log(user);
        return user;
    }
}