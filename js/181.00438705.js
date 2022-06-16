"use strict";(self["webpackChunkquasarapp"]=self["webpackChunkquasarapp"]||[]).push([[181],{3181:(e,n,i)=>{i.r(n),i.d(n,{default:()=>z});var t=i(83673);const r=(0,t._)("div",{class:"text-h3 text-weight-thin"},"Implementierun",-1),a={class:"q-my-xl"},s=(0,t._)("div",{class:"q-qb-sm text-h5"},"Hydrogen",-1),d=(0,t._)("p",null,' Hydrogen ist darauf ausgelegt in Webapplikationen integriert zu werden. Dabei bettet sich die Applikation über ein HTML-Element mit der Klasse "hydrogen" und der id="app" mit folgendem Code einfach ein: ',-1),l=(0,t._)("div",{class:"text-h6"},"Chat-Bots und Generierung von Chat-Räumen",-1),o=(0,t._)("p",null," Mit folgendem Code kann eine Raum für zwei User erstellt werden, sofern der Client (z.B. ein Bot) authentifziert ist: ",-1),u=(0,t._)("p",null,' Dabei müssen lediglich die IDs der Nutzer, welche gematcht wurden, bekannt sein. Diese könnten nach der Registrierung und Profil-Erstellung hinterlegt werden. Die Funktion hat weitere Parameter, so können bereits der Raum Name über "name" und ein "topic" definiert werden. Falls gewünscht können auch bereits Regeln definiert werden in einen "preset". ',-1),c=(0,t._)("div",{class:"q-my-xl text-grey"}," Quelle: https://matrix.org/docs/spec/r0.0.0/client_server.html#post-matrix-client-r0-createroom ",-1),m=(0,t._)("div",{class:"text-h6"},"Einbindung von Hydrogen",-1),g=(0,t._)("p",null,' Die Einbindung von Hydrogen erfolgt über ein HTML-Element mit der id="app" und class="Hydrogen" in welchem der Chat gerendert wird. Siehe dazu die untenstehend angegebene Quelle zur Einbindung der Hydrogen-View-SDK. Da die matrix-sdk in diesem Projekt selbst die Variablen-Bezeichnung client verwendet sollte ein eigener Namespace verwendet werden, da Hydrogen im Beispiel die Konstante client Variable verbindet und dieses als Login benötigt, bzw. es sollte dieses verwendet werden. Dort sind lediglich noch Passwort und Nutzername zu übergeben. ',-1),p=(0,t._)("p",null," Danach muss im Beispiel der entsprechend kreierte Raum angegeben werden, um diesen zu rendern. ",-1),h=(0,t._)("p",null," Damit kann die gewünschte view initialisiert werden, in diesem Fall z.B. nur die Timeline des Chats (der Chatverlauf) mittels: ",-1),w=(0,t._)("div",{class:"q-my-xl text-grey"}," Quelle: https://github.com/vector-im/hydrogen-web/blob/master/doc/SDK.md ",-1);function b(e,n,i,b,v,f){const k=(0,t.up)("q-separator"),D=(0,t.up)("highlightjs"),_=(0,t.up)("q-page");return(0,t.wg)(),(0,t.j4)(_,null,{default:(0,t.w5)((()=>[r,(0,t.Wm)(k,{spaced:"",class:"midata-fade"}),(0,t._)("div",a,[s,d,l,o,(0,t.Wm)(D,{language:"javascript",code:"client.createRoom(invite: [coachID, coacheeID]);"}),u,c,m,g,(0,t.Wm)(D,{language:"javascript",code:"client.startWithLogin(loginOptions.password(username, password));"}),p,(0,t.Wm)(D,{language:"javascript",code:"const room = session.rooms.get(roomID);"}),h,(0,t.Wm)(D,{language:"javascript",code:"const view = new TimelineView(vm.timelineViewModel, viewClassForTile);\n        app.appendChild(view.mount());"}),w])])),_:1})}const v=(0,t.aZ)({name:"Impl"});var f=i(74260),k=i(24379),D=i(65869),_=i(7518),y=i.n(_);const x=(0,f.Z)(v,[["render",b]]),z=x;y()(v,"components",{QPage:k.Z,QSeparator:D.Z})}}]);