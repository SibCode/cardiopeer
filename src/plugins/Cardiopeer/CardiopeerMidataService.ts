import { JSOnFhir } from '@i4mi/js-on-fhir';
import { Patient, Bundle } from '@i4mi/fhir_r4';
import { MatrixConfiguration } from 'src/boot/MatrixConfiguration';

export default class CardiopeerMidataService {
    private jsOnFhir: JSOnFhir;

    constructor(){
        this.jsOnFhir = new JSOnFhir(
            MatrixConfiguration.FHIR_BASE_URL,
            MatrixConfiguration.FHIR_APP_NAME,
            MatrixConfiguration.FHIR_REDIRECT_URL
        );
    }

    /**
     * Returns the jsOnFhir object for making direct method calls.
     * @returns the jsOnFhir as JSON.
     */
    public getJsonFhir (): JSOnFhir {
        return this.jsOnFhir;
    }

    /**
     * Initiates the oAuth process.
     * @param params
     */
    public authenticate(params?: Record<string, unknown>): void {
        this.jsOnFhir.authenticate(params);
    }

    /**
     * Checks that the token isn't empty and hasn't expired yet. Therefore returns the status of the login status.
     * @returns true if the user is logged in (token valid and not expired yet) and false otherwise.
     */
    public isLoggedIn(): boolean {
        return this.jsOnFhir.isLoggedIn();
    }
    
    
    /**
     * Logs the user out by resetting authentification details.
     */
     public logout(){
        console.log('lougout');
        this.jsOnFhir.logout();
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
     * Gets the patient resource from the fhir endpoint.
     * @returns patient resource as JSON
     */
     getPatientResource(): Promise<Patient>{
        return new Promise((resolve, reject) => {
            this.getJsonFhir()
              .search('Patient', { _id: this.getJsonFhir().getPatient() })
              .then((result) => {
                const patientBundle = result as Bundle;
                (patientBundle.entry?.length !== undefined && patientBundle.entry?.length > 0 && patientBundle.entry[0].resource)
                  ? resolve(patientBundle.entry[0].resource as Patient)
                  : reject('No entry in patient bundle found!');
              })
              .catch((error) => reject(error));
          });
    }
}