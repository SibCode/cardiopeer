import { MatrixConfiguration } from 'src/boot/MatrixConfiguration';
import { Patient } from '@i4mi/fhir_r4';
import CardiopeerMidataService from './CardiopeerMidataService';
import CardiopeerMatrixService from './CardiopeerMatrixService';

export default class CardiopeerStorage {
    private patientResource = {} as Patient;
    private currentLanguage = 'de';
    private midataService: CardiopeerMidataService;
    private matrixService: CardiopeerMatrixService;

    constructor(_midataService: CardiopeerMidataService, _matrixService: CardiopeerMatrixService) {
        this.midataService = _midataService;
        this.matrixService = _matrixService;
    }

    /**
     * Persists data to sessionStorage.
     */
     private persist(): void {
        sessionStorage.setItem(MatrixConfiguration.STORAGE_KEY, 
            JSON.stringify({
                currentLanguage: this.currentLanguage,
                patientResource: this.patientResource,
                midata: {
                    jsOnFhir: this.midataService.getJsonFhir()
                }
            }));
    }

    

    /**
     * Restores data from sessionStorage.
     */
     private restoreFromStorage(): void {
        const persisted = sessionStorage.getItem(MatrixConfiguration.STORAGE_KEY);
        if (persisted) {
            const storage = JSON.parse(persisted);
            this
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