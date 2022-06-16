<template>
  <q-page>
    <div class="text-h3 text-weight-thin">Cardiopeer</div>
    <q-separator spaced class="midata-fade"></q-separator>

    <div class="q-my-xl">
    <q-img
      src="../assets/cardiopeer/heart.png"
      fit="contain"
      class="img-800"
    ></q-img>
    <p class="text-grey">Bildquelle: Wörterwolke aus bereinigten Transkripten der Befragungen</p>
      <div class="q-qb-sm text-h5">Einführung</div>
      <p>
        Im Rahmen einer Seminararbeit an der Berner Fachhochschule galt es die
        Eingliederung eines Chats für Herzpatienten nach Aufenthalt in einer Rehabilitationsklinik in einer Applikation zu testen.
        Durch die Befragung von möglichen Nutzern wurde dafür ein Anwendungsfall konzipiert. Das Herz ist ein visuelles Ergebnis dieser Befragung.
      </p>
      <div class="text-h6">Anwendungsfall: Kommunikation zwischen Nutzern in der Rolle des Ratgebers und Ratsuchenden</div>
      <p>
        Hier wird der Anwendungsfall für den Kommunikationsaufbau zwischen Ratgeber und Ratsuchender beschrieben. Ziel der Applikation sollte es sein, 
        dass diese Elemente in einer Webapplikation, wie dieser hier, gebündelt integriert werden.
        Dabei könnte die Einführung und Startseite ähnlich wie diese aufgebaut sein und den Nutzer über das Projekt informieren.
      </p>
      
      <div class="text-h6">Schritt 1: Registrierung</div>
      <q-img
        src=../assets/cardiopeer/step1.png"
        fit="contain"
        class="img-800"
      ></q-img>
      <p>
        Der Nutzer erfährt im Rahmen der Behandlung, Rehabilitierung oder über die Herzstiftung von dieser Webseite und Webapplikation und kann sich dort registrieren. 
        Dazu muss ein Registrierungs-Formular verfügbar stehen, welches allenfalls geprüft werden kann, woraufhin diesem Nutzer ein Login erstellt werden kann.
      </p>
      
      <div class="text-h6">Schritt 2: Anmeldung</div>
      <q-img
        src="../assets/cardiopeer/step2.png"
        fit="contain"
        class="img-800"
      ></q-img>
      <p>
        Der Nutzer kann sich mit seinen Anmeldungsdaten einloggen und ein Profil erstellen. Das Profil wird in Midata oder einem vergleichbaren Service gespeichert. 
        Für zertifizierte Ratgeber wird bereits bei der Registrierung vermerkt, dass diese in der Rolle eines Ratgebers die Seite besuchen und ihre Angaben könnten allenfalls etwas differenzieren.
        Um die Modularität zu gewährleisten sollte dies als eigener Menupunkt und Erweiterung integriert werden, ähnlich wie hier Midata als Unterkategorie verwendet wird.
      </p>
      
      <div class="text-h6">Schritt 3: Auswahl von Ratgeber</div>
      <q-img
        src="../assets/cardiopeer/step3.png"
        fit="contain"
        class="img-800"
      ></q-img>
      <p>
        Der Nutzer kann als Ratsuchender nun eine Auswahl treffen um sich mit Ratgeber in Kontakt zu setzen. Dabei werden ihm nur Ratgeber angezeigt, 
        welche auch von den Präferenzen und Profilangaben her seinen Wünschen entsprechen. Auch wenn hier mehrere Ratgeber ausgewählt werden können, 
        werden maximal zwei pro Ratsuchender gematcht (könnte auch auf 1 limitert werden, ist definitiv festzulegen / zu klären).
      </p>
      
      <div class="text-h6">Schritt 4: Bestätigung oder Ablehnung durch Ratgeber</div>
      <q-img
        src="../assets/cardiopeer/step4.png"
        fit="contain"
        class="img-800"
      ></q-img>
      <p>
        Zertifizierte Nutzer in der Rolle des Ratgebers können einsehen, welche Nutzer sie als Ratgeber wünschen. 
        Dabei können sie diese Anfragen jeweils Annehmen und eine Einladung senden, oder die Anfrage ablehnen. 
        Ein Limit für Ratsuchende pro Ratgeber ist weniger sinnvoll, da diese selbst wählen können, wieviel und ob sie Kontakte betreuen möchten.
        Hier anzumerken ist, dass in den Anforderungen eine Kategorie für Kontakte vorgesehen ist, wo sich auch Ratsuchende untereinander allenfalls verknüpfen können.
        Da dies jedoch nicht direkt den Anwendungsfall betrifft wird dies und die vorgeschlagene Struktur nicht näher beleuchtet, sofern diese nicht relevant ist.
      </p>
      
      <div class="text-h6">Schritt 5: Generierung eines privaten Chat-Raums</div>
      <q-img
        src="../assets/cardiopeer/step5.png"
        fit="contain"
        class="img-800"
      ></q-img>
      <p>
        Sobald die Einladung bestätigt wurde kann der Chat-Raum generiert werden. Dabei wird vorgeschlagen, dass ein Applikationsserver mit einem Roboter-Nutzer als Chat-Bot
        die Einladungen und Räume verwaltet. Dabei kann dieser, wie hier unter Matrix - Implementierung beschrieben, für die gematchten Nutzer einen Raum erstellen.
        Dies hat den Vorteil, das die Informationen über den Raum allenfalls auch in Midata persistiert werden können und Client-seitig doppelt geprüft werden kann, 
        ob dieser Raum legitim ist, existiert und auch wirklich durch Hydrogen gerendert werden soll. 
      </p>
      <q-img
        src="../assets/cardiopeer/step5_0.png"
        fit="contain"
        class="img-800"
      ></q-img>
      <p>
        Zusätzlich könnten die Profile auswählen, ob sie möchten, 
        dass ihre Daten zur Verbesserung des Services anonym gesammelt werden - dabei könnte der Bot den Raum nach Begrüssung und einleitenden Worten nicht direkt wieder verlassen, 
        sondern im Chat verbleiben um Daten zur Aktivität, Frequenz und Nutzung zu sammeln. Dabei müsste klar festgelegt werden was, warum gesammelt wird. 
        Ebenfalls wichtig wäre hierbei, dass der Ratgeber die vollen Raum-Rechte erhält und allenfalls selbst den Bot aus dem Chat entfernen kann, selbst wenn initial zugestimmt wurde.
      </p>
      
      <div class="text-h6">Schritt 6: Kommunikation über den privaten Chat-Raum</div>
      <q-img
        src="../assets/cardiopeer/step6.png"
        fit="contain"
        class="img-800"
      ></q-img>
      <p>
        Die Nutzer können nun in der Rolle des Ratgebers, bzw. in der Rolle des Ratsuchenden miteinander sicher über Matrix kommunizieren!
        Die Einbindung des Hydrogen-Clients wird unter Matrix - Implementierung angesprochen.
      </p>
    </div>
    
    <q-separator spaced class="midata-fade"></q-separator>

    <div class="q-my-xl text-grey">
      Quelle: BTX8082 Living Case 2 Seminararbeit von Simon Bertschinger an der Berner Fachhochschule
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Overview',
  setup() {
    return {
      slide: ref(1),
      autoplay: ref(true),
    };
  },
});
</script>

<style lang="sass" scoped>
.img-800
  max-width: 800px
</style>