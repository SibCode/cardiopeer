import { boot } from 'quasar/wrappers';

// Import Storage, MidataService and moment
import Storage from 'src/plugins/storage';
import MidataService from 'src/plugins/midataService';
import CardiopeerMatrixService from 'src/plugins/Cardiopeer/CardiopeerMatrixService'
import moment from 'moment';
import CardiopeerMidataService from 'src/plugins/Cardiopeer/CardiopeerMidataService';
import CardiopeerStorage from 'src/plugins/Cardiopeer/CardiopeerStorage';



// Create MidataService and Storage
const midata = new MidataService();
const storage = new Storage(midata);
//Create CardiopeerService
const cardiopeer_midata = new CardiopeerMidataService();
const cardiopeer_matrix = new CardiopeerMatrixService(cardiopeer_midata);
const cardiopeer_storage = new CardiopeerStorage(cardiopeer_midata, cardiopeer_matrix);

// Type declaration
declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    $midata: typeof midata;
    $storage: typeof storage;
    $moment: typeof moment;
    $cardiopeer_matrix: typeof cardiopeer_matrix;
    $cardiopeer_midata: typeof cardiopeer_midata;
    $cardiopeer_storage: typeof cardiopeer_storage;
  }
}

export default boot(({ app }) => {
  // Set global variables
  app.config.globalProperties.$midata = midata;
  app.config.globalProperties.$storage = storage;
  app.config.globalProperties.$moment = moment;
  app.config.globalProperties.$cardiopeer_matrix = cardiopeer_matrix;
  app.config.globalProperties.$cardiopeer_midata = cardiopeer_midata;
  app.config.globalProperties.$cardiopeer_storage = cardiopeer_storage;
});

export { midata, storage, moment, cardiopeer_matrix, cardiopeer_midata, cardiopeer_storage };
