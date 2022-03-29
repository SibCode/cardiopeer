//import {MatrixClient, createClient, IndexedDBCryptoStore, IndexedDBStore} from 'matrix-js-sdk';
//import {Observable} from 'rxjs';
import MidataService from './midataService';

export default class MatrixService {
    private midataService: MidataService;

    constructor (mdService: MidataService){
        this.midataService = mdService;
    }

    login(){
        this.loginMidata();
    }

    loginMidata(){
        this.midataService.authenticate();
        console.log('i am logging in my friend');
    }

    loginMatrix(){
        console.log('i am the matrix login function');
    }
}