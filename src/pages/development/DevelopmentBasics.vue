<template>
  <q-page>
    <div class="text-h3 text-weight-thin">Cardiopeer</div>
    <q-separator spaced class="midata-fade"></q-separator>

    <div class="q-my-xl">
      <div class="q-qb-sm text-h5">Einführung</div>
      <p>
        Im Rahmen einer Seminararbeit gilt es die Einführung eines Chats für
        Herzpatienten zu testen. Dabei wird auf die 
      </p>
      <div class="text-h6">Was ist Node.js</div>
      <p>
        Node.js ist eine serverseitige, eventbasierte
        JavaScript-Laufzeitumgebung, die von Entwickler Ryan Dahl als Anwendung
        für die Entwicklung von skalierbaren Netzwerkanwendungen konzipiert
        wurde. Seit der Einführung im Jahr 2009 hat Node.js immer mehr an
        Bekanntheit gewonnen und gehört mittlerweile zu den gefragtesten
        Anwendungs-Frameworks in der Programmierung.
      </p>
      <p>
        Node.js basiert als Anwendung mit seinen Funktionen auf der V8-Engine
        von Google Chrome. Das bedeutet, dass die gleiche Engine, die in Google
        Chrome zum Ausführen des JavaScript-Codes eingesetzt wird, auch in
        Node.js verwendet wird.
      </p>
      <p>
        Selbst wenn das Framework der Anwendung hauptsächlich als
        Laufzeitumgebung für die Webserver-Programmierung eingesetzt wird,
        findet es inzwischen auch in anderen Gebieten Verwendung, wie
        beispielsweise bei der Erstellung von Skripten oder Tools für die
        Kommandozeile oder bei der Entwicklung von Desktop- oder
        Echtzeitanwendungen.
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
