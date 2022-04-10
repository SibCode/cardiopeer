<template>
  <router-view />
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  methods: {
    setLanguage(_lang: string): void {
      this.$i18n.locale = _lang;
      this.$moment.locale(_lang === 'de' ? 'de-ch' : 'fr-ch');
      //this.$storage.setCurrentLanguage(_lang);
    },
    logout(): void {
      if (this.$cardiopeer_midata.isLoggedIn()) {
        this.$cardiopeer_midata.logout();
      }
      if (this.$cardiopeer_matrix.isLoggedIn()){
        this.$cardiopeer_matrix.logout();
      }
    },
  },
  mounted() {
    this.$i18n.locale = this.$storage.getCurrentLanguage();
    this.setLanguage(this.$i18n.locale);
    this.$cardiopeer_midata
      .handleAuthResponse()
      .then((response: any) => {
        if (response && this.$cardiopeer_midata.isLoggedIn()) {
          Promise.all([
            this.$cardiopeer_storage.restoreFromMidata(),
            this.$cardiopeer_midata.getPatientResource(),
          ])
            .then((results) => {
              const preferredCom = results[1].communication.find((coms) => {
                return coms.preferred;
              });
              if (preferredCom) {
                const lang = preferredCom.language.coding[0].code;
                if (lang) {
                  this.setLanguage(lang);
                }
              }
              this.$router.push('/matrix/demo');
            })
            .catch();
        } else if (this.$cardiopeer_midata.isLoggedIn()) {
          this.$cardiopeer_storage.restoreFromMidata();
        }
      })
      .catch((error) =>{
        console.log('Error: ',error);
        console.log('Stack: ', error.stack)
      });
  },
});
</script>
