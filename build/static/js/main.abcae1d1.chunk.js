(this["webpackJsonpunichat-template"]=this["webpackJsonpunichat-template"]||[]).push([[0],{116:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(22),u=a.n(r),o=(a(60),a(23)),i=a(4),l=a(17),s=a(16),p=a.n(s),m=(a(63),p.a.initializeApp({apiKey:"AIzaSyDYu8U1CP72Pkem49Qi7soI8_Pyl2rGh-E",authDomain:"chat-app-f41eb.firebaseapp.com",projectId:"chat-app-f41eb",storageBucket:"chat-app-f41eb.appspot.com",messagingSenderId:"167183801560",appId:"1:167183801560:web:e8f9b777a0691d08780bad"}).auth()),h=c.a.createContext(),d=function(e){var t=e.children,a=Object(n.useState)(!0),r=Object(l.a)(a,2),u=r[0],o=r[1],s=Object(n.useState)(),p=Object(l.a)(s,2),d=p[0],f=p[1],b=Object(i.f)();Object(n.useEffect)((function(){m.onAuthStateChanged((function(e){f(e),o(!1),b.push("/chats")}))}),[d,b]);var g={user:d};return c.a.createElement(h.Provider,{value:g},!u&&t)},f=a(18),b=a.n(f),g=a(33),v=a(53),E=a(3),j=a.n(E),O=function(){var e=Object(i.f)(),t=Object(n.useContext)(h).user,a=Object(n.useState)(!0),r=Object(l.a)(a,2),u=r[0],o=r[1];console.log(t);var s=function(){var t=Object(g.a)(b.a.mark((function t(){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.signOut();case 2:e.push("/");case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){var e=Object(g.a)(b.a.mark((function e(t){var a,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return a=e.sent,e.next=5,a.blob();case 5:return n=e.sent,e.abrupt("return",new File([n],"userPhoto.jpg",{type:"image/jpeg"}));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){t?j.a.get("https://api.chatengine.io/users/me/",{headers:{"project-id":"73083720-67a6-44d7-bcde-cf1250f5e6ee","user-name":t.email,"user-secret":t.uid}}).then((function(){o(!1)})).catch((function(){var e=new FormData;e.append("email",t.email),e.append("username",t.email),e.append("secret",t.uid),p(t.photoURL).then((function(t){e.append("avatar",t,t.name),j.a.post("https://api.chatengine.io/users",e,{headers:{"private-key":"5d884aac-50d0-4cfc-8295-6789c587b090"}}).then((function(){return o(!1)})).catch((function(e){return console.log(e)}))}))})):e.push("/")}),[t,e]),!t||u?"Loading...":c.a.createElement("div",{className:"chats-page"},c.a.createElement("div",{className:"nav-bar"},c.a.createElement("div",{className:"logo-tab"}," Gu-fta-Gu"),c.a.createElement("div",{onClick:s,className:"logout-tab"},"Logout")),c.a.createElement(v.d,{height:"calc(100vh - 67px)",projectID:"73083720-67a6-44d7-bcde-cf1250f5e6ee",userName:t.email,userSecret:t.uid}))},w=a(118),y=function(){return c.a.createElement("div",{id:"login-page"},c.a.createElement("div",{id:"login-card"},c.a.createElement("h2",null,"Welcome to Gu-Fta-Gu!!!"),c.a.createElement("div",{className:"login-button google",onClick:function(){return m.signInWithRedirect(new p.a.auth.GoogleAuthProvider)}},c.a.createElement(w.a,null)," SignIn with Google"),c.a.createElement("br",null),c.a.createElement("br",null)))};var k=function(){return c.a.createElement("div",{style:{fontFamily:"Avenir"}},c.a.createElement(o.a,null,c.a.createElement(d,null,c.a.createElement(i.c,null,c.a.createElement(i.a,{path:"/chats",component:O}),c.a.createElement(i.a,{path:"/",component:y}),c.a.createElement("div",null,"hello")))))};u.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(k,null)),document.getElementById("root"))},55:function(e,t,a){e.exports=a(116)},60:function(e,t,a){}},[[55,1,2]]]);
//# sourceMappingURL=main.abcae1d1.chunk.js.map