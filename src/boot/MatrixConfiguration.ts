const MatrixConfiguration = {
    FHIR_BASE_URL: 'https://test.midata.coop', //Environnement of MIDATA
    FHIR_APP_NAME: 'cardiopeer_matrix',    //Application registered on MIDATA
    //FHIR_REDIRECT_URL: 'https://sibcode.github.io/cardiopeer/#/matrix/demo',       //Redirect URL for MIDATA
    FHIR_REDIRECT_URL: 'http://localhost:8080/#/matrix/demo',       //Redirect URL for MIDATA
    /*
    FHIR_BASE_URL: process.env.VUE_FHIR_BASE_URL, //Environnement of MIDATA
    FHIR_APP_NAME: process.env.VUE_FHIR_APP_NAME,    //Application registered on MIDATA
    FHIR_REDIRECT_URL: process.env.VUE_FHIR_REDIRECT_URL,       //Redirect URL for MIDATA
    */
    HOMESERVER_URL: 'https://matrix.cardiopeer.medicaa.ch',     //URL of the Matrix-Server
    ROOM_CRYPTO_CONFIG: {algorithm: 'm.megolm.v1.aes-sha2'},     //Crypto-Algorithm for the Chatrooms
    STORAGE_KEY: 'cardiopeer-storage'                          //Storage Key for persisting MIDATA-Data
};

export {MatrixConfiguration};