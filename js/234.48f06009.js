"use strict";(self["webpackChunkquasarapp"]=self["webpackChunkquasarapp"]||[]).push([[234],{7234:(e,t,n)=>{n.r(t),n.d(t,{default:()=>x});var a=n(3673),l=n(2323);const i=(0,a.Uk)(" Demo App "),o=(0,a.Uk)(" Menu ");function u(e,t,n,u,r,d){const s=(0,a.up)("q-btn"),c=(0,a.up)("q-toolbar-title"),p=(0,a.up)("q-toolbar"),m=(0,a.up)("q-header"),k=(0,a.up)("q-item-label"),w=(0,a.up)("PageLinks"),f=(0,a.up)("q-expansion-item"),g=(0,a.up)("q-list"),v=(0,a.up)("q-drawer"),b=(0,a.up)("router-view"),_=(0,a.up)("q-page-container"),q=(0,a.up)("q-layout");return(0,a.wg)(),(0,a.j4)(q,{view:"lHh Lpr lFf"},{default:(0,a.w5)((()=>[(0,a.Wm)(m,{elevated:""},{default:(0,a.w5)((()=>[(0,a.Wm)(p,{class:"midata-fade"},{default:(0,a.w5)((()=>[(0,a.Wm)(s,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:e.toggleLeftDrawer},null,8,["onClick"]),(0,a.Wm)(c,null,{default:(0,a.w5)((()=>[i])),_:1}),(0,a._)("div",null,"Quasar v"+(0,l.zw)(e.$q.version),1)])),_:1})])),_:1}),(0,a.Wm)(v,{modelValue:e.drawerExpanded,"onUpdate:modelValue":t[0]||(t[0]=t=>e.drawerExpanded=t),"show-if-above":"",bordered:""},{default:(0,a.w5)((()=>[(0,a.Wm)(g,null,{default:(0,a.w5)((()=>[(0,a.Wm)(k,{header:""},{default:(0,a.w5)((()=>[o])),_:1}),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.pageLinks,(e=>((0,a.wg)(),(0,a.j4)(w,(0,a.dG)({key:e.title},e),null,16)))),128)),(0,a.Wm)(f,{clickable:"","default-opened":"",icon:"code",label:"Webentwicklung","content-inset-level":.5},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.developmentLinks,(e=>((0,a.wg)(),(0,a.j4)(w,(0,a.dG)({key:e.title},e),null,16)))),128))])),_:1},8,["content-inset-level"]),(0,a.Wm)(f,{clickable:"","default-opened":"",icon:"person",label:"Midata","content-inset-level":.5},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.midataPageLinks,(e=>((0,a.wg)(),(0,a.j4)(w,(0,a.dG)({key:e.title},e),null,16)))),128))])),_:1},8,["content-inset-level"])])),_:1})])),_:1},8,["modelValue"]),(0,a.Wm)(_,{class:"my-div"},{default:(0,a.w5)((()=>[(0,a.Wm)(b)])),_:1})])),_:1})}function r(e,t,n,i,o,u){const r=(0,a.up)("q-icon"),d=(0,a.up)("q-item-section"),s=(0,a.up)("q-item-label"),c=(0,a.up)("q-item");return(0,a.wg)(),(0,a.j4)(c,{clickable:"",to:e.link},{default:(0,a.w5)((()=>[e.icon?((0,a.wg)(),(0,a.j4)(d,{key:0,avatar:""},{default:(0,a.w5)((()=>[(0,a.Wm)(r,{name:e.icon},null,8,["name"])])),_:1})):(0,a.kq)("",!0),(0,a.Wm)(d,null,{default:(0,a.w5)((()=>[(0,a.Wm)(s,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,l.zw)(e.title),1)])),_:1})])),_:1})])),_:1},8,["to"])}const d=(0,a.aZ)({name:"PageLink",props:{title:{type:String,required:!0},link:{type:String,default:"#"},icon:{type:String,default:""}}});var s=n(4260),c=n(3414),p=n(2035),m=n(4554),k=n(2350),w=n(7518),f=n.n(w);const g=(0,s.Z)(d,[["render",r]]),v=g;f()(d,"components",{QItem:c.Z,QItemSection:p.Z,QIcon:m.Z,QItemLabel:k.Z});var b=n(1959);const _=[{title:"Übersicht",icon:"dashboard",link:"/overview"}],q=[{title:"Einführung in MIDATA",icon:"rocket",link:"/midata/introduction"},{title:"Meine erste MIDATA App",icon:"terminal",link:"/midata/myFirstApp"},{title:"Midata Demo",icon:"auto_fix_high",link:"/midata/demo"}],Z=[{title:"Basics",icon:"keyboard_arrow_right",link:"/developmentBasics"},{title:"Quasar Framework",icon:"favorite",link:"/quasar"},{title:"Versionskontrolle und GitHub",icon:"upload",link:"/github"},{title:"Internationalisierung mit Vue-i18n und Moment.js",icon:"language",link:"/internationalization"}],L=(0,a.aZ)({name:"MainLayout",components:{PageLinks:v},setup(){const e=(0,b.iH)(!1);return{pageLinks:_,midataPageLinks:q,developmentLinks:Z,drawerExpanded:e,toggleLeftDrawer(){e.value=!e.value}}}});var Q=n(3066),W=n(3812),h=n(9570),y=n(2165),D=n(3747),I=n(2901),M=n(7011),j=n(429),A=n(2652);const H=(0,s.Z)(L,[["render",u],["__scopeId","data-v-f1269f48"]]),x=H;f()(L,"components",{QLayout:Q.Z,QHeader:W.Z,QToolbar:h.Z,QBtn:y.Z,QToolbarTitle:D.Z,QDrawer:I.Z,QList:M.Z,QItemLabel:k.Z,QExpansionItem:j.Z,QPageContainer:A.Z})}}]);