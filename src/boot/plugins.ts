import { boot } from 'quasar/wrappers';

// Import Storage, MidataService and moment
import Storage from 'src/plugins/storage';
import MidataService from 'src/plugins/midataService';
import MatrixService from 'src/plugins/MatrixService'
import moment from 'moment';

// Create MidataService and Storage
const midata = new MidataService();
const storage = new Storage(midata);
//Create MatrixService
const matrix = new MatrixService(midata);

// Type declaration
declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    $midata: typeof midata;
    $storage: typeof storage;
    $moment: typeof moment;
    $matrix: typeof matrix;
  }
}

export default boot(({ app }) => {
  // Set global variables
  app.config.globalProperties.$midata = midata;
  app.config.globalProperties.$storage = storage;
  app.config.globalProperties.$moment = moment;
  app.config.globalProperties.$matrix = matrix;
});

export { midata, storage, moment, matrix };
