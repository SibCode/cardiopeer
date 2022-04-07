//import {Observable} from 'rxjs';
import sdk, { MatrixClient } from 'matrix-js-sdk';
import { JSOnFhir } from '@i4mi/js-on-fhir';
import { Patient, Bundle } from '@i4mi/fhir_r4';
import {MatrixConfiguration} from '../boot/MatrixConfiguration';

export default class MatrixChatService {
    jsOnFhir: JSOnFhir;
    mtxClient: MatrixClient;
    //MIDATA Variables
    private patientResource = {} as Patient;
    private currentLanguage = 'de';

    constructor (){
        this.jsOnFhir = new JSOnFhir(
            MatrixConfiguration.FHIR_BASE_URL,
            MatrixConfiguration.FHIR_APP_NAME,
            MatrixConfiguration.FHIR_REDIRECT_URL
        );
        this.mtxClient = sdk.createClient(MatrixConfiguration.HOMESERVER_URL);
        this.restoreFromStorage();
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
        this.mtxClient.login('m.login.password', {'user': '@frida.meyer:cardiopeer.medicaa.ch', 'password': ''})
            .then(
                (response) => {
                    console.log(response.access_token);
                }
            );
    }

    /**
     * Testfunction for controlling Matrixlogin
     */
    consoleMtxClient(){
        this.loginMatrix();
        console.log('Client: ', this.mtxClient);
        console.log('Accesstoken: ', this.mtxClient.getAccessToken());
        console.log('JSonFHIR: ', this.jsOnFhir);
        console.log('Config: ', MatrixConfiguration)
    }

    /**
     * Testfunction for MIDATA Data-Transfer
     */
    checkStorage(): void{
        console.log('Cardiopeer Storage', this);
    }

    /**
     * Gets the patient resource from the fhir endpoint.
     * @returns patient resource as JSON
     */
    getPatientResource(): Promise<Patient>{
        return new Promise((resolve, reject) => {
            this.jsOnFhir
              .search('Patient', { _id: this.jsOnFhir.getPatient() })
              .then((result) => {
                const patientBundle = result as Bundle;
                (patientBundle.entry?.length !== undefined && patientBundle.entry?.length > 0 && patientBundle.entry[0].resource)
                  ? resolve(patientBundle.entry[0].resource as Patient)
                  : reject('No entry in patient bundle found!');
              })
              .catch((error) => reject(error));
          });
    }

    /**
     * Persists data to sessionStorage.
     */
    private persist(): void {
        sessionStorage.setItem(MatrixConfiguration.STORAGE_KEY, JSON.stringify(this));
    }

    /**
     * Restores data from sessionStorage.
     */
    private restoreFromStorage(): void {
        const persisted = sessionStorage.getItem(MatrixConfiguration.STORAGE_KEY);
        if (persisted) {
            const storage = JSON.parse(persisted);
            this.patientResource = storage.patientResource;
        } else if (this.isLoggedIn()) {
            void this.restoreFromMidata();
        } else {
            console.log('Could not restore from storage. Log in first.');
        }
    }

    /**
     * Gets Patient-Resource for the logged in Patient from MIDATA and saves it to the Storage
     * @returns a promise:
     *              - if successfull ->
     *              - if not successfull ->
     */
    public restoreFromMidata(): Promise<void> {
        return new Promise((resolve, reject) => {
        this.getPatientResource()
            .then((results) => {
                this.patientResource = results;
                this.persist();
                resolve();
            })
            .catch((error) => {
                console.warn('Error', error);
                reject(error);
            });
        });
    }
}