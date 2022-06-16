<template>
  <q-page>
    <div class="text-h3 text-weight-thin">Implementierun</div>
    <q-separator spaced class="midata-fade"></q-separator>

    <div class="q-my-xl">
      <div class="q-qb-sm text-h5">Hydrogen</div>
      <p>
        Hydrogen ist darauf ausgelegt in Webapplikationen integriert zu werden. 
        Dabei bettet sich die Applikation über ein HTML-Element mit der Klasse "hydrogen" und der id="app" mit folgendem Code einfach ein:
      </p>
      <div class="text-h6">Chat-Bots und Generierung von Chat-Räumen</div>
      <p>
        Mit folgendem Code kann eine Raum für zwei User erstellt werden, sofern der Client (z.B. ein Bot) authentifziert ist:
      </p>
      <highlightjs language="javascript" code="client.createRoom(invite: [coachID, coacheeID]);"/>
      <p>
        Dabei müssen lediglich die IDs der Nutzer, welche gematcht wurden, bekannt sein. Diese könnten nach der Registrierung und Profil-Erstellung hinterlegt werden. 
        Die Funktion hat weitere Parameter, so können bereits der Raum Name über "name" und ein "topic" definiert werden. 
        Falls gewünscht können auch bereits Regeln definiert werden in einen "preset".
      </p>
      <div class="q-my-xl text-grey">
      Quelle: https://matrix.org/docs/spec/r0.0.0/client_server.html#post-matrix-client-r0-createroom
      </div>
      
      <div class="text-h6">Einbindung von Hydrogen</div>
      <p>
        Die Einbindung von Hydrogen erfolgt über ein HTML-Element mit der id="app" und class="Hydrogen" in welchem der Chat gerendert wird. 
        Siehe dazu die untenstehend angegebene Quelle zur Einbindung der Hydrogen-View-SDK.
        Da die matrix-sdk in diesem Projekt selbst die Variablen-Bezeichnung client verwendet sollte ein eigener Namespace verwendet werden, 
        da Hydrogen im Beispiel die Konstante client Variable verbindet und dieses als Login benötigt, bzw. es sollte dieses verwendet werden. 
        Dort sind lediglich noch Passwort und Nutzername zu übergeben.
      </p>
      <highlightjs language="javascript" code="client.startWithLogin(loginOptions.password(username, password));"/>
      <p>
        Danach muss im Beispiel der entsprechend kreierte Raum angegeben werden, um diesen zu rendern.
      </p>
      <highlightjs language="javascript" code="const room = session.rooms.get(roomID);"/>
      <p>
        Damit kann die gewünschte view initialisiert werden, in diesem Fall z.B. nur die Timeline des Chats (der Chatverlauf) mittels:
      </p>
      <highlightjs language="javascript" code="const view = new TimelineView(vm.timelineViewModel, viewClassForTile);
        app.appendChild(view.mount());"/>
      <div class="q-my-xl text-grey">
      Quelle: https://github.com/vector-im/hydrogen-web/blob/master/doc/SDK.md
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Impl',
});
</script>

<style>
/* This is where your CSS goes */
</style>