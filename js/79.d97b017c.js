(self["webpackChunkquasarapp"]=self["webpackChunkquasarapp"]||[]).push([[79],{4079:(e,i,M)=>{"use strict";M.r(i),M.d(i,{default:()=>Ne});var I=M(3673),n=M(4552),N=M.n(n),g=M(3444),l=M.n(g),j=M(4287),c=M.n(j);const t=e=>((0,I.dD)("data-v-2ded6835"),e=e(),(0,I.Cn)(),e),u=t((()=>(0,I._)("div",{class:"text-h3 text-weight-thin"},"Basics",-1))),d=t((()=>(0,I._)("div",{class:"q-my-xl"},[(0,I._)("div",{class:"q-qb-sm text-h5"},"Node.js"),(0,I._)("div",{class:"text-h6"},"Was ist Node.js"),(0,I._)("p",null," Node.js ist eine serverseitige, eventbasierte JavaScript-Laufzeitumgebung, die von Entwickler Ryan Dahl als Anwendung für die Entwicklung von skalierbaren Netzwerkanwendungen konzipiert wurde. Seit der Einführung im Jahr 2009 hat Node.js immer mehr an Bekanntheit gewonnen und gehört mittlerweile zu den gefragtesten Anwendungs-Frameworks in der Programmierung. "),(0,I._)("p",null," Node.js basiert als Anwendung mit seinen Funktionen auf der V8-Engine von Google Chrome. Das bedeutet, dass die gleiche Engine, die in Google Chrome zum Ausführen des JavaScript-Codes eingesetzt wird, auch in Node.js verwendet wird. "),(0,I._)("p",null," Selbst wenn das Framework der Anwendung hauptsächlich als Laufzeitumgebung für die Webserver-Programmierung eingesetzt wird, findet es inzwischen auch in anderen Gebieten Verwendung, wie beispielsweise bei der Erstellung von Skripten oder Tools für die Kommandozeile oder bei der Entwicklung von Desktop- oder Echtzeitanwendungen. ")],-1))),s=t((()=>(0,I._)("div",{class:"q-my-xl"},[(0,I._)("div",{class:"text-h6"},"Anwendungsvorteile von Node.js"),(0,I._)("p",null," Der wohl bedeutendste Unterschied von Node.js zu herkömmlichen Web-Serving-Techniken und -Funktionen ist der, dass es sich bei der Kommunikation um eine asynchrone, eine sogenannte Non-Blocking I/O handelt. Laut Entwickler Ryan Dahl wurde dies bis zur Einführung von Node.js falsch angewendet, da bis dahin das Thread-Modell im Einsatz war, und somit der gesamte Prozess der Anwendung aufgrund der synchronen Kommunikation blockiert wurde. Mit Node.js muss der Server nicht mehr für jede Anfrage einen eigenen Thread starten. Stattdessen gibt es einen Single-Thread als Funktion, der alle Anfragen in einer endlos laufenden Ereignisschleife nacheinander bearbeitet und somit viel weniger Arbeitsspeicher verbraucht als die herkömmlichen Modelle. Ein geniales Funktionsprinzip! "),(0,I._)("p",null," Zudem wird für eine Node.js Anwendung kein zusätzlicher Server benötigt, da die Anwendung gleichzeitig auch den Webserver darstellt. Dass Server und Client dabei die gleiche Programmiersprache (JavaScript) verwenden, ist sicherlich ein weiterer Vorteil für viele Nutzer, da die Einstiegshürde vor allem für Webentwickler entsprechend niedrig ist und sich fast jede Funktion von selbst erklärt. "),(0,I._)("p",null,[(0,I.Uk)(" Node.js kommt als Anwendung ausserdem mit einer Reihe von Built-in-Modulen und -Funktionen, die ohne weitere Installation zur Verfügung stehen. Beispielsweise gibt es unter anderem das url-Modul, welches Funktionen zum Analysieren und Formatieren von URLs liefert, oder das fs-Modul, womit in der Anwendung der Zugriff auf das lokale Dateisystem ermöglicht wird. Auch das Erstellen von eigenen Modulen ist möglich. Zur Installation von Modulen/Funktionen und zur Verwaltung von Abhängigkeiten verfügt Node über einen sogenannten "),(0,I._)("b",null,"Node Package Manager (npm)"),(0,I.Uk)(". Mit der Installation der Anwendung Node.js wird gleichzeitig auch npm installiert und steht dem Nutzer somit sofort zur Verfügung. ")])],-1))),a={class:"q-my-xl"},D=t((()=>(0,I._)("div",{class:"text-h6"},"Einführung in Node.js",-1))),z=t((()=>(0,I._)("p",null," Da JavaScript eines der bekanntesten und gefragtesten Sprachen in der Webentwicklung ist und in der Regel in allen gängigen Webbrowsern verwendet wird, fällt der Einstieg in die Anwendung vor allem Webentwicklern besonders leicht. Wer die Skriptsprache beherrscht, aber ein Tutorial machen möchte, um die wichtigsten Methoden und Module von Node.js kennenzulernen, sollte einen Blick auf das Node.js Tutorial von w3schools werfen. ",-1))),w={class:"q-my-xl"},r=t((()=>(0,I._)("div",{class:"q-qb-sm text-h5"},"Installation von Node.js",-1))),A=t((()=>(0,I._)("p",null," Der npm (Node Package Manager) wird ebenfalls auf Ihrem Computer installiert, wenn Sie Node.js installieren ",-1))),C=t((()=>(0,I._)("p",null," Vergewissern Sie sich, dass Node und npm installiert sind, indem Sie einfache Befehle ausführen, um zu sehen, welche Version von beiden installiert ist: ",-1))),T={class:"q-my-xl"},y=t((()=>(0,I._)("div",{class:"q-qb-sm text-h5"},"Integrierte Entwicklungsumgebung (IDE)",-1))),L=t((()=>(0,I._)("p",null," Eine integrierte Entwicklungsumgebung oder IDE stellt Programmierern eine Sammlung der wichtigsten Werkzeuge zur Softwareentwicklung unter einer Oberfläche zur Verfügung. Die Arbeit für die Erstellung von Programmen wird dadurch vereinfacht. ",-1))),m=t((()=>(0,I._)("p",null,"Empfehlungen:",-1))),b=t((()=>(0,I._)("div",null,null,-1))),o={class:"q-pa-md row items-start q-gutter-sm"},k=t((()=>(0,I._)("div",{class:"text-h6"},"Visual Studio Code",-1))),x=t((()=>(0,I._)("div",{class:"text-subtitle2"},"von Microsoft",-1))),Z=(0,I.Uk)(" Visual Studio Code ist ein leichtgewichtiger, aber leistungsstarker Quellcode-Editor, der auf Ihrem Desktop läuft und für Windows, macOS und Linux verfügbar ist. "),S=t((()=>(0,I._)("br",null,null,-1))),O=(0,I.Uk)(" Er bietet integrierte Unterstützung für JavaScript, TypeScript und Node.js und verfügt über ein umfangreiches Ökosystem von Erweiterungen für andere Sprachen (wie C++, C#, Java, Python, PHP, Go) und Laufzeiten (wie .NET und Unity). "),h=t((()=>(0,I._)("div",{class:"text-h6"},"WebStorm",-1))),v=t((()=>(0,I._)("div",{class:"text-subtitle2"},"von JetBrains",-1))),Q=(0,I.Uk)(" WebStorm ist eine integrierte Entwicklungsumgebung für JavaScript und verwandte Technologien. So wie andere JetBrains-IDEs erleichtert sie Ihnen die Entwicklung, automatisiert Routinearbeiten und hilft Ihnen, komplexe Aufgaben problemlos zu bewältigen. "),E=t((()=>(0,I._)("br",null,null,-1))),G=(0,I.Uk)(" Benötigt ein JetBrains Account. Erhalten Sie kostenlosen Zugang für den persönlichen Gebrauch im Studium: "),W=t((()=>(0,I._)("a",{href:"https://www.jetbrains.com/community/education/#students",target:"_blank"},"Lizenz anfordern",-1))),p=t((()=>(0,I._)("div",{class:"text-h6"},"Atom",-1))),J=t((()=>(0,I._)("div",{class:"text-subtitle2"},"von GitHub",-1))),U=(0,I.Uk)(" Atom ist ein freier und quelloffener Text- und Quellcode-Editor für macOS, Linux und Microsoft Windows mit Unterstützung für in JavaScript geschriebene Plug-ins und integrierter Git-Steuerung. "),P=t((()=>(0,I._)("br",null,null,-1))),Y=t((()=>(0,I._)("br",null,null,-1))),R=(0,I.Uk)(' Seine Entwickler nennen ihn einen "hackbaren Texteditor für das 21. Jahrhundert", da er in HTML, CSS und JavaScript vollständig anpassbar ist. '),H=t((()=>(0,I._)("div",{class:"q-my-xl text-grey"}," Quelle: https://www.arocom.de/fachbegriffe/webentwicklung/nodejs ",-1)));function f(e,i,M,n,g,j){const t=(0,I.up)("q-separator"),f=(0,I.up)("q-btn"),V=(0,I.up)("highlightjs"),B=(0,I.up)("q-img"),X=(0,I.up)("q-card-section"),F=(0,I.up)("q-card-actions"),_=(0,I.up)("q-card"),K=(0,I.up)("q-space"),q=(0,I.up)("q-page");return(0,I.wg)(),(0,I.j4)(q,null,{default:(0,I.w5)((()=>[u,(0,I.Wm)(t,{spaced:"",class:"midata-fade"}),d,s,(0,I._)("div",a,[D,z,(0,I.Wm)(f,{type:"a",target:"_blank",href:"https://www.w3schools.com/nodejs/",label:"Tutorial von w3schools",color:"primary",class:"midata-fade text-white q-mb-lg",flat:""},null,8,["href"])]),(0,I.Wm)(t,{spaced:"",class:"midata-fade"}),(0,I._)("div",w,[r,A,(0,I.Wm)(f,{type:"a",target:"_blank",href:"https://nodejs.dev/download/",label:"Node.js download",color:"primary",class:"midata-fade text-white q-mb-lg",flat:""},null,8,["href"]),C,(0,I.Wm)(V,{language:"javascript",code:"$ node -v\nv14.17.5\n$ npm -v\n7.24.2"})]),(0,I.Wm)(t,{spaced:"",class:"midata-fade"}),(0,I._)("div",T,[y,L,m,b,(0,I._)("div",o,[(0,I.Wm)(_,{class:"my-card"},{default:(0,I.w5)((()=>[(0,I.Wm)(B,{src:N(),height:"150px",fit:"contain",class:"q-mt-md"}),(0,I.Wm)(X,null,{default:(0,I.w5)((()=>[k,x])),_:1}),(0,I.Wm)(t,{spaced:"",inset:"",class:"midata-fade"}),(0,I.Wm)(X,{class:"q-pt-none"},{default:(0,I.w5)((()=>[Z,S,O])),_:1}),(0,I.Wm)(F,null,{default:(0,I.w5)((()=>[(0,I.Wm)(f,{type:"a",target:"_blank",href:"https://code.visualstudio.com/download",label:"Download",color:"primary",class:"midata-fade text-white full-width",flat:""},null,8,["href"])])),_:1})])),_:1}),(0,I.Wm)(K),(0,I.Wm)(_,{class:"my-card"},{default:(0,I.w5)((()=>[(0,I.Wm)(B,{src:l(),height:"150px",fit:"contain",class:"q-mt-md"}),(0,I.Wm)(X,null,{default:(0,I.w5)((()=>[h,v])),_:1}),(0,I.Wm)(t,{spaced:"",inset:"",class:"midata-fade"}),(0,I.Wm)(X,{class:"q-pt-none"},{default:(0,I.w5)((()=>[Q,E,G,W])),_:1}),(0,I.Wm)(F,null,{default:(0,I.w5)((()=>[(0,I.Wm)(f,{type:"a",target:"_blank",href:"https://www.jetbrains.com/de-de/webstorm/",label:"Download",color:"primary",class:"midata-fade text-white full-width",flat:""},null,8,["href"])])),_:1})])),_:1}),(0,I.Wm)(K),(0,I.Wm)(_,{class:"my-card"},{default:(0,I.w5)((()=>[(0,I.Wm)(B,{src:c(),height:"150px",fit:"contain",class:"q-mt-md"}),(0,I.Wm)(X,null,{default:(0,I.w5)((()=>[p,J])),_:1}),(0,I.Wm)(t,{spaced:"",inset:"",class:"midata-fade"}),(0,I.Wm)(X,{class:"q-pt-none"},{default:(0,I.w5)((()=>[U,P,Y,R])),_:1}),(0,I.Wm)(F,null,{default:(0,I.w5)((()=>[(0,I.Wm)(f,{type:"a",target:"_blank",href:"https://atom.io/",label:"Download",color:"primary",class:"midata-fade text-white full-width",flat:""},null,8,["href"])])),_:1})])),_:1})])]),H])),_:1})}const V=(0,I.aZ)({name:"Quasar"});var B=M(4260),X=M(4379),F=M(5869),_=M(2165),K=M(151),q=M(4027),$=M(5589),ee=M(9367),ie=M(2025),Me=M(7518),Ie=M.n(Me);const ne=(0,B.Z)(V,[["render",f],["__scopeId","data-v-2ded6835"]]),Ne=ne;Ie()(V,"components",{QPage:X.Z,QSeparator:F.Z,QBtn:_.Z,QCard:K.Z,QImg:q.Z,QCardSection:$.Z,QCardActions:ee.Z,QSpace:ie.Z})},4287:e=>{e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgdmVyc2lvbj0iMS4xIgogICB3aWR0aD0iMTMxIgogICBoZWlnaHQ9IjEyMCI+CiAgPHBhdGgKICAgICBkPSJNIDEwMy45Njg3NSwyOS40MzcyNyBDIDEwNi4wODE0MywxOC42ODQ1NTIgMTA0Ljg5OTk2LDEwLjUyMzk3NSA5OS45MDYyNSw3LjI4MTAyMDEgOTguMjQxNjc5LDYuMjAwMDM1MSA5Ni4yNDYwMiw1LjcyNzAwMTUgOTQsNS44MTIyNzAxIDgxLjg3MTQ5NCw2LjI3MjcyMDUgNjIuMzAxNjc5LDIyLjk3MjM0NCA0Ni4zMTI1LDQ3LjU5MzUyIDI3LjM2MjM2Miw3Ni43NzQxNzMgMjAuNjI3OTk2LDEwNi4wMTg5NyAzMS4yODEyNSwxMTIuOTM3MjcgYyA1LjA1Njk0NiwzLjI4NDAyIDEzLjExNTE0NywwLjk1NjA0IDIyLjIxODc1LC01LjUzMTI1IgogICAgIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiM2NjU5NWM7c3Ryb2tlLXdpZHRoOjU7c3Ryb2tlLWxpbmVjYXA6cm91bmQiIC8+CiAgPHBhdGgKICAgICBkPSJtIDExMy42ODc1LDc3LjE1NjAyIGMgOC45OTQzNywtMy40ODkxODkgMTQuNTI1MDQsLTguMjY1MDEyIDE0LjgxMjUsLTEzLjc1IDAuNjY0OCwtMTIuNjg1MTQxIC0yNi45NDEyNCwtMjQuNDI5MDI2IC02MS42ODc1LC0yNi4yNSAtMy4yNTc0NjEsLTAuMTcwNzE2IC02LjQ2MDU4OCwtMC4yNjA1NDQgLTkuNTkzNzUsLTAuMjUgLTMwLjI4NzIzNCwwLjEwMTkyNyAtNTMuOTI4Nzc0OSw4LjQxMDM0MSAtNTQuNTMxMjUsMTkuOTA2MjUgLTAuMjg2ODkyLDUuNDc0MjI1IDQuNzAwNDgzNiwxMC43ODIzODMgMTMuMjUsMTUuMTg3NSIKICAgICBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojNjY1OTVjO3N0cm9rZS13aWR0aDo1O3N0cm9rZS1saW5lY2FwOnJvdW5kIiAvPgogIDxwYXRoCiAgICAgZD0iTSA1NywxMC41MzEwMiBDIDUwLjg0NjEyNSw1LjQyNTEyOTUgNDUuMDc0NTUyLDIuNjgzMjM3IDQwLjQzNzUsMy4wMzEwMjAxIDM5LjIwMjg5LDMuMTIzNjE3IDM4LjA2MTA2OCwzLjQyNzg3OTIgMzcsMy45Njg1MjAxIDI1LjY4MTk0Niw5LjczNTM1NjcgMjkuMjk3NjMyLDM5LjU2MDY0MyA0NS4wOTM3NSw3MC41NjIyNyBjIDE1Ljc5NjExOCwzMS4wMDE2MyAzNy43NzU2OTYsNTEuNDU0MzQgNDkuMDkzNzUsNDUuNjg3NSAxMC44ODQ0LC01LjU0NTg4IDcuOTQ2NjYsLTMzLjMzNzc1NCAtNi4zNDM3NSwtNjMuMDMxMjUiCiAgICAgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzY2NTk1YztzdHJva2Utd2lkdGg6NTtzdHJva2UtbGluZWNhcDpyb3VuZCIgLz4KICA8cGF0aAogICAgIGQ9Im0gNzMuNSw2MSBhIDcuNSw3LjUgMCAwIDEgLTE1LDAgNy41LDcuNSAwIDEgMSAxNSwwIHoiCiAgICAgc3R5bGU9ImZpbGw6IzY2NTk1YyIgLz4KPC9zdmc+"},3444:e=>{e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNzAgNzAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDcwIDcwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPGc+CgkJPGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF8xXyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIwLjc4OTgiIHkxPSI0MC4wODkzIiB4Mj0iMzMuMzE3MiIgeTI9IjQwLjA4OTMiPgoJCQk8c3RvcCAgb2Zmc2V0PSIwLjI1ODEiIHN0eWxlPSJzdG9wLWNvbG9yOiNGOTdBMTIiLz4KCQkJPHN0b3AgIG9mZnNldD0iMC40NTkxIiBzdHlsZT0ic3RvcC1jb2xvcjojQjA3QjU4Ii8+CgkJCTxzdG9wICBvZmZzZXQ9IjAuNzI0MSIgc3R5bGU9InN0b3AtY29sb3I6IzU3N0JBRSIvPgoJCQk8c3RvcCAgb2Zmc2V0PSIwLjkxMDUiIHN0eWxlPSJzdG9wLWNvbG9yOiMxRTdDRTUiLz4KCQkJPHN0b3AgIG9mZnNldD0iMSIgc3R5bGU9InN0b3AtY29sb3I6IzA4N0NGQSIvPgoJCTwvbGluZWFyR3JhZGllbnQ+CgkJPHBvbHlnb24gc3R5bGU9ImZpbGw6dXJsKCNTVkdJRF8xXyk7IiBwb2ludHM9IjE3LjcsNTQuNiAwLjgsNDEuMiA5LjIsMjUuNiAzMy4zLDM1IAkJIi8+CgkJPGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF8yXyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIyNS43Njc0IiB5MT0iMjQuODgiIHgyPSI3OS40MjQiIHkyPSI1NC41NyI+CgkJCTxzdG9wICBvZmZzZXQ9IjAiIHN0eWxlPSJzdG9wLWNvbG9yOiNGOTdBMTIiLz4KCQkJPHN0b3AgIG9mZnNldD0iNy4xNzk5NDZlLTAwMiIgc3R5bGU9InN0b3AtY29sb3I6I0NCN0EzRSIvPgoJCQk8c3RvcCAgb2Zmc2V0PSIwLjE1NDEiIHN0eWxlPSJzdG9wLWNvbG9yOiM5RTdCNkEiLz4KCQkJPHN0b3AgIG9mZnNldD0iMC4yNDIiIHN0eWxlPSJzdG9wLWNvbG9yOiM3NTdCOTEiLz4KCQkJPHN0b3AgIG9mZnNldD0iMC4zMzQ0IiBzdHlsZT0ic3RvcC1jb2xvcjojNTM3QkIxIi8+CgkJCTxzdG9wICBvZmZzZXQ9IjAuNDMyNCIgc3R5bGU9InN0b3AtY29sb3I6IzM4N0NDQyIvPgoJCQk8c3RvcCAgb2Zmc2V0PSIwLjUzODEiIHN0eWxlPSJzdG9wLWNvbG9yOiMyMzdDRTAiLz4KCQkJPHN0b3AgIG9mZnNldD0iMC42NTUyIiBzdHlsZT0ic3RvcC1jb2xvcjojMTQ3Q0VGIi8+CgkJCTxzdG9wICBvZmZzZXQ9IjAuNzkyNSIgc3R5bGU9InN0b3AtY29sb3I6IzBCN0NGNyIvPgoJCQk8c3RvcCAgb2Zmc2V0PSIxIiBzdHlsZT0ic3RvcC1jb2xvcjojMDg3Q0ZBIi8+CgkJPC9saW5lYXJHcmFkaWVudD4KCQk8cG9seWdvbiBzdHlsZT0iZmlsbDp1cmwoI1NWR0lEXzJfKTsiIHBvaW50cz0iNzAsMTguNyA2OC43LDU5LjIgNDEuOCw3MCAyNS42LDU5LjYgNDkuMywzNSAzOC45LDEyLjMgNDguMiwxLjEgCQkiLz4KCQk8bGluZWFyR3JhZGllbnQgaWQ9IlNWR0lEXzNfIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjYzLjIyNzciIHkxPSI0Mi45MTUzIiB4Mj0iNDguMjkwMyIgeTI9Ii0xLjcxOTEiPgoJCQk8c3RvcCAgb2Zmc2V0PSIwIiBzdHlsZT0ic3RvcC1jb2xvcjojRkUzMTVEIi8+CgkJCTxzdG9wICBvZmZzZXQ9IjcuODQwMjQ2ZS0wMDIiIHN0eWxlPSJzdG9wLWNvbG9yOiNDQjQxN0UiLz4KCQkJPHN0b3AgIG9mZnNldD0iMC4xNjAxIiBzdHlsZT0ic3RvcC1jb2xvcjojOUU0RTlCIi8+CgkJCTxzdG9wICBvZmZzZXQ9IjAuMjQ3NCIgc3R5bGU9InN0b3AtY29sb3I6Izc1NUJCNCIvPgoJCQk8c3RvcCAgb2Zmc2V0PSIwLjMzOTIiIHN0eWxlPSJzdG9wLWNvbG9yOiM1MzY1Q0EiLz4KCQkJPHN0b3AgIG9mZnNldD0iMC40MzY1IiBzdHlsZT0ic3RvcC1jb2xvcjojMzg2RERCIi8+CgkJCTxzdG9wICBvZmZzZXQ9IjAuNTQxNCIgc3R5bGU9InN0b3AtY29sb3I6IzIzNzRFOSIvPgoJCQk8c3RvcCAgb2Zmc2V0PSIwLjY1NzYiIHN0eWxlPSJzdG9wLWNvbG9yOiMxNDc4RjMiLz4KCQkJPHN0b3AgIG9mZnNldD0iMC43OTQiIHN0eWxlPSJzdG9wLWNvbG9yOiMwQjdCRjgiLz4KCQkJPHN0b3AgIG9mZnNldD0iMSIgc3R5bGU9InN0b3AtY29sb3I6IzA4N0NGQSIvPgoJCTwvbGluZWFyR3JhZGllbnQ+CgkJPHBvbHlnb24gc3R5bGU9ImZpbGw6dXJsKCNTVkdJRF8zXyk7IiBwb2ludHM9IjcwLDE4LjcgNDguNyw0My45IDM4LjksMTIuMyA0OC4yLDEuMSAJCSIvPgoJCTxsaW5lYXJHcmFkaWVudCBpZD0iU1ZHSURfNF8iIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMTAuNzIwNCIgeTE9IjE2LjQ3MyIgeDI9IjU1LjUyMzciIHkyPSI5MC41OCI+CgkJCTxzdG9wICBvZmZzZXQ9IjAiIHN0eWxlPSJzdG9wLWNvbG9yOiNGRTMxNUQiLz4KCQkJPHN0b3AgIG9mZnNldD0iNC4wMjMyNzllLTAwMiIgc3R5bGU9InN0b3AtY29sb3I6I0Y2MzQ2MiIvPgoJCQk8c3RvcCAgb2Zmc2V0PSIwLjEwMzciIHN0eWxlPSJzdG9wLWNvbG9yOiNERjNBNzEiLz4KCQkJPHN0b3AgIG9mZnNldD0iMC4xNjY3IiBzdHlsZT0ic3RvcC1jb2xvcjojQzI0MzgzIi8+CgkJCTxzdG9wICBvZmZzZXQ9IjAuMjkxMiIgc3R5bGU9InN0b3AtY29sb3I6I0FENEE5MSIvPgoJCQk8c3RvcCAgb2Zmc2V0PSIwLjU0OTgiIHN0eWxlPSJzdG9wLWNvbG9yOiM3NTVCQjQiLz4KCQkJPHN0b3AgIG9mZnNldD0iMC45MTc1IiBzdHlsZT0ic3RvcC1jb2xvcjojMUQ3NkVEIi8+CgkJCTxzdG9wICBvZmZzZXQ9IjEiIHN0eWxlPSJzdG9wLWNvbG9yOiMwODdDRkEiLz4KCQk8L2xpbmVhckdyYWRpZW50PgoJCTxwb2x5Z29uIHN0eWxlPSJmaWxsOnVybCgjU1ZHSURfNF8pOyIgcG9pbnRzPSIzMy43LDU4LjEgNS42LDY4LjMgMTAuMSw1Mi41IDE2LDMzLjEgMCwyNy43IDEwLjEsMCAzMi4xLDIuNyA1My43LDI3LjQgCQkiLz4KCTwvZz4KCTxnPgoJCTxyZWN0IHg9IjEzLjciIHk9IjEzLjUiIHN0eWxlPSJmaWxsOiMwMDAwMDA7IiB3aWR0aD0iNDMuMiIgaGVpZ2h0PSI0My4yIi8+CgkJPHJlY3QgeD0iMTcuNyIgeT0iNDguNiIgc3R5bGU9ImZpbGw6I0ZGRkZGRjsiIHdpZHRoPSIxNi4yIiBoZWlnaHQ9IjIuNyIvPgoJCTxwb2x5Z29uIHN0eWxlPSJmaWxsOiNGRkZGRkY7IiBwb2ludHM9IjI5LjQsMjIuNCAyOS40LDE5LjEgMjAuNCwxOS4xIDIwLjQsMjIuNCAyMywyMi40IDIzLDMzLjcgMjAuNCwzMy43IDIwLjQsMzcgMjkuNCwzNyAKCQkJMjkuNCwzMy43IDI2LjksMzMuNyAyNi45LDIyLjQgCQkiLz4KCQk8cGF0aCBzdHlsZT0iZmlsbDojRkZGRkZGOyIgZD0iTTM4LDM3LjNjLTEuNCwwLTIuNi0wLjMtMy41LTAuOGMtMC45LTAuNS0xLjctMS4yLTIuMy0xLjlsMi41LTIuOGMwLjUsMC42LDEsMSwxLjUsMS4zCgkJCWMwLjUsMC4zLDEuMSwwLjUsMS43LDAuNWMwLjcsMCwxLjMtMC4yLDEuOC0wLjdjMC40LTAuNSwwLjYtMS4yLDAuNi0yLjNWMTkuMWg0djExLjdjMCwxLjEtMC4xLDItMC40LDIuOGMtMC4zLDAuOC0wLjcsMS40LTEuMywyCgkJCWMtMC41LDAuNS0xLjIsMS0yLDEuMkMzOS44LDM3LjEsMzksMzcuMywzOCwzNy4zIi8+Cgk8L2c+CjwvZz4KPC9zdmc+"},4552:e=>{e.exports="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPG1hc2sgaWQ9Im1hc2swIiBtYXNrLXR5cGU9ImFscGhhIiBtYXNrVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4PSIwIiB5PSIwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNzAuOTExOSA5OS4zMTcxQzcyLjQ4NjkgOTkuOTMwNyA3NC4yODI4IDk5Ljg5MTQgNzUuODcyNSA5OS4xMjY0TDk2LjQ2MDggODkuMjE5N0M5OC42MjQyIDg4LjE3ODcgMTAwIDg1Ljk4OTIgMTAwIDgzLjU4NzJWMTYuNDEzM0MxMDAgMTQuMDExMyA5OC42MjQzIDExLjgyMTggOTYuNDYwOSAxMC43ODA4TDc1Ljg3MjUgMC44NzM3NTZDNzMuNzg2MiAtMC4xMzAxMjkgNzEuMzQ0NiAwLjExNTc2IDY5LjUxMzUgMS40NDY5NUM2OS4yNTIgMS42MzcxMSA2OS4wMDI4IDEuODQ5NDMgNjguNzY5IDIuMDgzNDFMMjkuMzU1MSAzOC4wNDE1TDEyLjE4NzIgMjUuMDA5NkMxMC41ODkgMjMuNzk2NSA4LjM1MzYzIDIzLjg5NTkgNi44NjkzMyAyNS4yNDYxTDEuMzYzMDMgMzAuMjU0OUMtMC40NTI1NTIgMzEuOTA2NCAtMC40NTQ2MzMgMzQuNzYyNyAxLjM1ODUzIDM2LjQxN0wxNi4yNDcxIDUwLjAwMDFMMS4zNTg1MyA2My41ODMyQy0wLjQ1NDYzMyA2NS4yMzc0IC0wLjQ1MjU1MiA2OC4wOTM4IDEuMzYzMDMgNjkuNzQ1M0w2Ljg2OTMzIDc0Ljc1NDFDOC4zNTM2MyA3Ni4xMDQzIDEwLjU4OSA3Ni4yMDM3IDEyLjE4NzIgNzQuOTkwNUwyOS4zNTUxIDYxLjk1ODdMNjguNzY5IDk3LjkxNjdDNjkuMzkyNSA5OC41NDA2IDcwLjEyNDYgOTkuMDEwNCA3MC45MTE5IDk5LjMxNzFaTTc1LjAxNTIgMjcuMjk4OUw0NS4xMDkxIDUwLjAwMDFMNzUuMDE1MiA3Mi43MDEyVjI3LjI5ODlaIiBmaWxsPSJ3aGl0ZSIvPgo8L21hc2s+CjxnIG1hc2s9InVybCgjbWFzazApIj4KPHBhdGggZD0iTTk2LjQ2MTQgMTAuNzk2Mkw3NS44NTY5IDAuODc1NTQyQzczLjQ3MTkgLTAuMjcyNzczIDcwLjYyMTcgMC4yMTE2MTEgNjguNzUgMi4wODMzM0wxLjI5ODU4IDYzLjU4MzJDLTAuNTE1NjkzIDY1LjIzNzMgLTAuNTEzNjA3IDY4LjA5MzcgMS4zMDMwOCA2OS43NDUyTDYuODEyNzIgNzQuNzU0QzguMjk3OTMgNzYuMTA0MiAxMC41MzQ3IDc2LjIwMzYgMTIuMTMzOCA3NC45OTA1TDkzLjM2MDkgMTMuMzY5OUM5Ni4wODYgMTEuMzAyNiAxMDAgMTMuMjQ2MiAxMDAgMTYuNjY2N1YxNi40Mjc1QzEwMCAxNC4wMjY1IDk4LjYyNDYgMTEuODM3OCA5Ni40NjE0IDEwLjc5NjJaIiBmaWxsPSIjMDA2NUE5Ii8+CjxnIGZpbHRlcj0idXJsKCNmaWx0ZXIwX2QpIj4KPHBhdGggZD0iTTk2LjQ2MTQgODkuMjAzOEw3NS44NTY5IDk5LjEyNDVDNzMuNDcxOSAxMDAuMjczIDcwLjYyMTcgOTkuNzg4NCA2OC43NSA5Ny45MTY3TDEuMjk4NTggMzYuNDE2OUMtMC41MTU2OTMgMzQuNzYyNyAtMC41MTM2MDcgMzEuOTA2MyAxLjMwMzA4IDMwLjI1NDhMNi44MTI3MiAyNS4yNDZDOC4yOTc5MyAyMy44OTU4IDEwLjUzNDcgMjMuNzk2NCAxMi4xMzM4IDI1LjAwOTVMOTMuMzYwOSA4Ni42MzAxQzk2LjA4NiA4OC42OTc0IDEwMCA4Ni43NTM4IDEwMCA4My4zMzM0VjgzLjU3MjZDMTAwIDg1Ljk3MzUgOTguNjI0NiA4OC4xNjIyIDk2LjQ2MTQgODkuMjAzOFoiIGZpbGw9IiMwMDdBQ0MiLz4KPC9nPgo8ZyBmaWx0ZXI9InVybCgjZmlsdGVyMV9kKSI+CjxwYXRoIGQ9Ik03NS44NTc4IDk5LjEyNjNDNzMuNDcyMSAxMDAuMjc0IDcwLjYyMTkgOTkuNzg4NSA2OC43NSA5Ny45MTY2QzcxLjA1NjQgMTAwLjIyMyA3NSA5OC41ODk1IDc1IDk1LjMyNzhWNC42NzIxM0M3NSAxLjQxMDM5IDcxLjA1NjQgLTAuMjIzMTA2IDY4Ljc1IDIuMDgzMjlDNzAuNjIxOSAwLjIxMTQwMiA3My40NzIxIC0wLjI3MzY2NiA3NS44NTc4IDAuODczNjMzTDk2LjQ1ODcgMTAuNzgwN0M5OC42MjM0IDExLjgyMTcgMTAwIDE0LjAxMTIgMTAwIDE2LjQxMzJWODMuNTg3MUMxMDAgODUuOTg5MSA5OC42MjM0IDg4LjE3ODYgOTYuNDU4NiA4OS4yMTk2TDc1Ljg1NzggOTkuMTI2M1oiIGZpbGw9IiMxRjlDRjAiLz4KPC9nPgo8ZyBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6b3ZlcmxheSIgb3BhY2l0eT0iMC4yNSI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNzAuODUxMSA5OS4zMTcxQzcyLjQyNjEgOTkuOTMwNiA3NC4yMjIxIDk5Ljg5MTMgNzUuODExNyA5OS4xMjY0TDk2LjQgODkuMjE5N0M5OC41NjM0IDg4LjE3ODcgOTkuOTM5MiA4NS45ODkyIDk5LjkzOTIgODMuNTg3MVYxNi40MTMzQzk5LjkzOTIgMTQuMDExMiA5OC41NjM1IDExLjgyMTcgOTYuNDAwMSAxMC43ODA3TDc1LjgxMTcgMC44NzM2OTVDNzMuNzI1NSAtMC4xMzAxOSA3MS4yODM4IDAuMTE1Njk5IDY5LjQ1MjcgMS40NDY4OEM2OS4xOTEyIDEuNjM3MDUgNjguOTQyIDEuODQ5MzcgNjguNzA4MiAyLjA4MzM1TDI5LjI5NDMgMzguMDQxNEwxMi4xMjY0IDI1LjAwOTZDMTAuNTI4MyAyMy43OTY0IDguMjkyODUgMjMuODk1OSA2LjgwODU1IDI1LjI0NkwxLjMwMjI1IDMwLjI1NDhDLTAuNTEzMzM0IDMxLjkwNjQgLTAuNTE1NDE1IDM0Ljc2MjcgMS4yOTc3NSAzNi40MTY5TDE2LjE4NjMgNTBMMS4yOTc3NSA2My41ODMyQy0wLjUxNTQxNSA2NS4yMzc0IC0wLjUxMzMzNCA2OC4wOTM3IDEuMzAyMjUgNjkuNzQ1Mkw2LjgwODU1IDc0Ljc1NEM4LjI5Mjg1IDc2LjEwNDIgMTAuNTI4MyA3Ni4yMDM2IDEyLjEyNjQgNzQuOTkwNUwyOS4yOTQzIDYxLjk1ODZMNjguNzA4MiA5Ny45MTY3QzY5LjMzMTcgOTguNTQwNSA3MC4wNjM4IDk5LjAxMDQgNzAuODUxMSA5OS4zMTcxWk03NC45NTQ0IDI3LjI5ODlMNDUuMDQ4MyA1MEw3NC45NTQ0IDcyLjcwMTJWMjcuMjk4OVoiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcikiLz4KPC9nPgo8L2c+CjxkZWZzPgo8ZmlsdGVyIGlkPSJmaWx0ZXIwX2QiIHg9Ii04LjM5NDExIiB5PSIxNS44MjkxIiB3aWR0aD0iMTE2LjcyNyIgaGVpZ2h0PSI5Mi4yNDU2IiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+CjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+CjxmZUNvbG9yTWF0cml4IGluPSJTb3VyY2VBbHBoYSIgdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDEyNyAwIi8+CjxmZU9mZnNldC8+CjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjQuMTY2NjciLz4KPGZlQ29sb3JNYXRyaXggdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAuMjUgMCIvPgo8ZmVCbGVuZCBtb2RlPSJvdmVybGF5IiBpbjI9IkJhY2tncm91bmRJbWFnZUZpeCIgcmVzdWx0PSJlZmZlY3QxX2Ryb3BTaGFkb3ciLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJlZmZlY3QxX2Ryb3BTaGFkb3ciIHJlc3VsdD0ic2hhcGUiLz4KPC9maWx0ZXI+CjxmaWx0ZXIgaWQ9ImZpbHRlcjFfZCIgeD0iNjAuNDE2NyIgeT0iLTguMDc1NTgiIHdpZHRoPSI0Ny45MTY3IiBoZWlnaHQ9IjExNi4xNTEiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj4KPGZlRmxvb2QgZmxvb2Qtb3BhY2l0eT0iMCIgcmVzdWx0PSJCYWNrZ3JvdW5kSW1hZ2VGaXgiLz4KPGZlQ29sb3JNYXRyaXggaW49IlNvdXJjZUFscGhhIiB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMTI3IDAiLz4KPGZlT2Zmc2V0Lz4KPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iNC4xNjY2NyIvPgo8ZmVDb2xvck1hdHJpeCB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4yNSAwIi8+CjxmZUJsZW5kIG1vZGU9Im92ZXJsYXkiIGluMj0iQmFja2dyb3VuZEltYWdlRml4IiByZXN1bHQ9ImVmZmVjdDFfZHJvcFNoYWRvdyIvPgo8ZmVCbGVuZCBtb2RlPSJub3JtYWwiIGluPSJTb3VyY2VHcmFwaGljIiBpbjI9ImVmZmVjdDFfZHJvcFNoYWRvdyIgcmVzdWx0PSJzaGFwZSIvPgo8L2ZpbHRlcj4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyIiB4MT0iNDkuOTM5MiIgeTE9IjAuMjU3ODEyIiB4Mj0iNDkuOTM5MiIgeTI9Ijk5Ljc0MjMiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0id2hpdGUiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSJ3aGl0ZSIgc3RvcC1vcGFjaXR5PSIwIi8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+Cg=="}}]);