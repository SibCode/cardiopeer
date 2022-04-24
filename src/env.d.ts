declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: string;
    VUE_ROUTER_MODE: 'hash' | 'history' | 'abstract' | undefined;
    VUE_ROUTER_BASE: string | undefined;
    VUE_STORAGE_KEY: string;
    VUE_MATRIX_HOMESERVER_URL: string;
    VUE_FHIR_BASE_URL: string;
    VUE_FHIR_APP_NAME: string;
    VUE_FHIR_REDIRECT_URL: string;
  }
}
