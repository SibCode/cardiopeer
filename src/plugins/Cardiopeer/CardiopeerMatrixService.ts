//import {Observable} from 'rxjs';
import sdk, { MatrixClient } from 'matrix-js-sdk';
import {MatrixConfiguration} from '../../boot/MatrixConfiguration';
import CardiopeerMidataService from './CardiopeerMidataService';
import CardiopeerStorage from './CardiopeerStorage';

export default class CardiopeerMatrixService {
    midataService: CardiopeerMidataService;
    storage: CardiopeerStorage;
    mtxClient: MatrixClient;
    private loggedIn: boolean;
    //MIDATA Variables
    

    constructor (){
        this.midataService = new CardiopeerMidataService();
        this.mtxClient = this.initiateMatrixClient();
        this.storage = new CardiopeerStorage(this.midataService, this);
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
     * Handles the response of oAuth portal (server).
     * @returns a promise:
     *              - if successfull -> response of the oAuth portal (server) includes: token, refreshtoken etc.
     *              - if not successfull -> error response.
     */
    public handleAuthResponse(): Promise<any> {
        return this.midataService.handleAuthResponse();
    }

    /**
     * Handles the OAuth2 login into MIDATA and Matrix
     */
    login(){
        //TODO Authentication testing
        try {
            document.location.href = (this.mtxClient.getSsoLoginUrl(document.location.href, 'sso', 'oidc-midata'));
        } catch (error) {
            console.error('Error while logging into MIDATA / Matrix', error);
        }
    }

    /**
     * Logs the user out by resetting authentification details.
     */
    public logout(): void {
        try {
            this.midataService.logout();
            this.mtxClient.logout();
        } catch (error) {
            console.error('Error while logging out of MIDATA / Matrix', error);
        }
    }

    /**
     * Testfunction for MIDATA Data-Transfer
     */
    checkStorage(): void{
        console.log('Cardiopeer MatrixChatService', this);
    }
}