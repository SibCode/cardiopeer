import { Patient } from '@i4mi/fhir_r4';
import CardiopeerMidataService from './CardiopeerMidataService';
import CardiopeerMatrixService from './CardiopeerMatrixService';
import CardiopeerUser from './CardiopeerUser';

export default class CardiopeerStorage {
    private patientResource = {} as Patient;
    private currentLanguage = 'de';
    private midataService: CardiopeerMidataService;
    private cardiopeer_user: CardiopeerUser;
    private matrixService: CardiopeerMatrixService;

    constructor(_midataService: CardiopeerMidataService, _matrixService: CardiopeerMatrixService) {
        this.midataService = _midataService;
        this.matrixService = _matrixService;
        this.restoreFromStorage();
    }

    /**
     * Sets up the Cardiopeer User for the app.
     */
    public setupCardiopeerUser(): void {
        this.cardiopeer_user = new CardiopeerUser();
        this.cardiopeer_user.setUserID(this.getPatientUserID());
        this.cardiopeer_user.setName(this.getPatientName());
        this.cardiopeer_user.setHomeServer(process.env.VUE_MATRIX_HOMESERVER_URL);
        this.cardiopeer_user.setEmail(this.getPatientEmail());
        this.cardiopeer_user.setMatrixAlias(this.generateMatrixAlias(this.cardiopeer_user.getName(), this.cardiopeer_user.getHomeServer()));
    }

    /**
     * Returns the User ID of the Patient Object currently connected
     * @returns UserID
     */
    private getPatientUserID(): string{
        return this.patientResource.id;
    }

    /**
     * Returns the Patient Name of the Patient Object currently connected
     * @returns Patient Name (Format Given Name + Family Name)
     */
    private getPatientName(): string{
        //TODO: Algorithm to verify currently active name (HumanName Property "use")
        return this.patientResource.name[0].given[0] + ' ' + this.patientResource.name[0].family
    }

    /**
     * Returns the E-Mail adress of the Patient Object currentl connected
     * @returns Telecom String flagged with 'email'
     */
    private getPatientEmail(): string{
        //Search for 'email' Communication Type
        let val;
        this.patientResource.telecom.forEach((element) => {
            if (element.system && 'email'){
                val = element.value;
            } else{
                val = '';
            }
        });
        return val;
    }

    /**
     * Generates the Username for the Matrix Server
     * @param patientName Patientname (Format Given + Family Name)
     * @param homeServer Homeserver (Full URL)
     * @returns Matrix Server Alias (Format @given.family:homeserver)
     */
    private generateMatrixAlias(patientName: string, homeServer: string): string{
        const splitName = patientName.split(' ');
        ;
        return '@' 
        + splitName[0].toLowerCase() 
        + '.' 
        + splitName[1].toLowerCase()  
        + ':' 
        + homeServer.replace('https://', '').toLowerCase();
    }

    /**
     * Persists data to sessionStorage.
     */
     private persist(): void {
        sessionStorage.setItem(process.env.VUE_STORAGE_KEY, 
            JSON.stringify({
                currentLanguage: this.currentLanguage,
                patientResource: this.patientResource,
                cardiopeer_user: {
                    name: this.cardiopeer_user.getName(),
                    user_id: this.cardiopeer_user.getUserID(),
                    home_server: this.cardiopeer_user.getHomeServer(),
                    email: this.cardiopeer_user.getEmail(),
                    matrix_alias: this.cardiopeer_user.getMatrixAlias()
                },
                matrix: {
                    jsOnFhir: this.midataService.getJsonFhir()
                }
            }));
    }
    
    /**
     * Restores data from sessionStorage.
     */
     private restoreFromStorage(): void {
        const persisted = sessionStorage.getItem(process.env.VUE_STORAGE_KEY);
        if (persisted) {
            const storage = JSON.parse(persisted);
            this.cardiopeer_user = storage.cardiopeer_user;
            this.patientResource = storage.patientResource;
        } else if (this.midataService.isLoggedIn()) {
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
        this.midataService.getPatientResource()
            .then((results) => {
                //Set Patient Data
                this.patientResource = results;
                this.setupCardiopeerUser();
                this.persist();
                resolve();
            })
            .catch((error) => {
                console.warn('Error', error);
                reject(error);
            });
        });
    }

    
    /**
     * Testfunction for MIDATA Data-Transfer
     */
     checkStorage(): void{
        console.log(this.cardiopeer_user);
    }
}