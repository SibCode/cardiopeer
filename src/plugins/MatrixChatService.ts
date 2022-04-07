//import {Observable} from 'rxjs';
import sdk, { MatrixClient } from 'matrix-js-sdk';
import { JSOnFhir } from '@i4mi/js-on-fhir';
import { Patient } from '@i4mi/fhir_r4';
import {MatrixConfiguration} from '../boot/MatrixConfiguration';

export default class MatrixChatService {
    jsOnFhir: JSOnFhir;
    mtxClient: MatrixClient;

    private patientResource = {} as Patient;

    constructor (){
        this.jsOnFhir = new JSOnFhir(
            MatrixConfiguration.FHIR_BASE_URL,
            MatrixConfiguration.FHIR_APP_NAME,
            MatrixConfiguration.FHIR_REDIRECT_URL
        );
        this.mtxClient = sdk.createClient(MatrixConfiguration.HOMESERVER_URL);
        this.patientResource = null;

        //Testing Config
        console.log('MIDATA Config: ', MatrixConfiguration)
        console.log(this.jsOnFhir);
    }

    /**
     * Returns the jsOnFhir object for making direct method calls.
     * @returns the jsOnFhir as JSON.
     */
    public getJsonFhir (): JSOnFhir {
        return this.jsOnFhir;
    }

    /**
     * Checks that the token isn't empty and hasn't expired yet. Therefore returns the status of the login status.
     * @returns true if the user is logged in (token valid and not expired yet) and false otherwise.
     */
    public isLoggedIn(): boolean {
        return this.jsOnFhir.isLoggedIn();
    }

    /**
     * Handles the response of oAuth portal (server).
     * @returns a promise:
     *              - if successfull -> response of the oAuth portal (server) includes: token, refreshtoken etc.
     *              - if not successfull -> error response.
     */
    public handleAuthResponse(): Promise<any> {
        return this.jsOnFhir.handleAuthResponse();
    }

    /**
     * Handles the login into MIDATA and Matrix
     */
    login(){
        console.log(MatrixConfiguration)
        this.loginMidata();
        this.loginMatrix();
    }

    /**
     * Logs the user out by resetting authentification details.
     */
    public logout(): void {
        this.jsOnFhir.logout();
    }

    /**
     * Initiates OAuth process on Midata
     * @param params 
     */
    private loginMidata(params?: Record<string, unknown>): void{
        this.jsOnFhir.authenticate(params);
    }

    /**
     * Initiates OAuth process on Matrix
     * @param params 
     */
    private loginMatrix(): void{
        //TODO Authentication testing
        this.mtxClient.login('m.login.password', {'user': '@frida.meyer:cardiopeer.medicaa.ch', 'password': 'test1234'})
            .then(
                (response) => {
                    console.log(response.access_token);
                }
            );
    }

    /**
     * Testfunction for controlling
     */
    consoleMtxClient(){
        this.loginMatrix();
        console.log('Client: ', this.mtxClient);
        console.log('Accesstoken: ', this.mtxClient.getAccessToken());
        console.log('JSonFHIR: ', this.jsOnFhir);
        console.log('Config: ', MatrixConfiguration)
    }
}