<template>
  <q-page>
    <div class="text-h3 text-weight-thin">Cardiopeer</div>
    <q-separator spaced class="midata-fade"></q-separator>

    <div class="q-my-xl">
      <div class="q-qb-sm text-h5">Einführung</div>
      <p>
        Im Rahmen einer Seminararbeit an der Berner Fachhochschule gilt es die
        Eingliederung eines Chats für Herzpatienten in eine Applikation zu testen. <br>
        Durch die Befragung von möglichen Nutzern wurde dafür ein Anwendungsfall konzipiert.
      </p>
      <div class="text-h6">Anwendungsfall</div>
      <p>
        Mit Ihren Zugangsdaten können Sie sich mit dem Chat verbinden. 
      </p>
      
      <div class="text-h6">Einbindung von Hydrogen</div>
      <p>
        Die Einbindung von Hydrogen erfolgt über 
      </p>
    </div>
    
    <q-separator spaced class="midata-fade"></q-separator>

    <div class="q-my-xl text-grey">
      Quelle: https://www.arocom.de/fachbegriffe/webentwicklung/nodejs
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Quasar',
});
</script>
<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 350px
  min-height: 500px
  margin-top: 25px
</style>
