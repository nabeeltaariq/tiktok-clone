(this["webpackJsonptik-tok-clone"]=this["webpackJsonptik-tok-clone"]||[]).push([[0],{31:function(e,t,a){e.exports=a(66)},36:function(e,t,a){},38:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),o=a.n(c),s=(a(36),a(9)),l=a.n(s),i=a(19),m=a(7),u=(a(38),a(21)),d=a.n(u),p=a(20);var v=function(e){var t=e.channel,a=e.description,n=e.song;return r.a.createElement("div",{className:"videoFooter"},r.a.createElement("div",{className:"videoFooter__text"},r.a.createElement("h3",null,"@",t),r.a.createElement("p",null,a),r.a.createElement("div",{className:"videoFooter__ticker"},r.a.createElement(d.a,{className:"videoFooter__icon"}),r.a.createElement(p.a,{mode:"smooth"},(function(e){e.index;return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,n))})))),r.a.createElement("img",{className:"videoFooter__record",src:"https://static.thenounproject.com/png/934821-200.png",alt:""}))},f=(a(44),a(23)),E=a.n(f),g=a(24),h=a.n(g),k=a(25),b=a.n(k),_=a(26),N=a.n(_);var S=function(e){var t=e.likes,a=e.shares,c=e.messages,o=Object(n.useState)(!1),s=Object(m.a)(o,2),l=s[0],i=s[1];return r.a.createElement("div",{className:"videoSidebar"},r.a.createElement("div",{className:"videoSidebar__button"},l?r.a.createElement(E.a,{fontSize:"large",onClick:function(e){return i(!1)}}):r.a.createElement(h.a,{fontSize:"large",onClick:function(e){return i(!0)}}),r.a.createElement("p",null,l?parseInt(t)+1:t)),r.a.createElement("div",{className:"videoSidebar__button"},r.a.createElement(b.a,{fontSize:"large"}),r.a.createElement("p",null,c)),r.a.createElement("div",{className:"videoSidebar__button"},r.a.createElement(N.a,{fontSize:"large"}),r.a.createElement("p",null,a)))},j=(a(45),a(28)),w=a.n(j),y=a(27),O=a.n(y);var z=function(e){var t=e.url,a=e.channel,c=e.description,o=e.song,s=e.likes,l=e.messages,i=e.shares,u=Object(n.useState)(!1),d=Object(m.a)(u,2),p=d[0],f=d[1],E=Object(n.useRef)(null);return r.a.createElement("div",{className:"video"},p?r.a.createElement(O.a,{className:"video__playpause",fontSize:"large"}):r.a.createElement(w.a,{className:"video__playpause",fontSize:"large"}),r.a.createElement("video",{className:"video__player",loop:!0,onClick:function(){p?(E.current.pause(),f(!1)):(E.current.play(),f(!0))},ref:E,src:t}),r.a.createElement(v,{channel:a,description:c,song:o}),r.a.createElement(S,{likes:s,messages:l,shares:i}))},F=(a(46),a(29)),x=a.n(F).a.create({baseURL:"https://mern-tiktok-backend-practice.herokuapp.com"});var B=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){function e(){return(e=Object(i.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.get("/v2/posts");case 2:return t=e.sent,c(t.data),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}(),console.log(a)}),[]),r.a.createElement("div",{className:"app"},r.a.createElement("div",{className:"app__videos"},a.map((function(e){var t=e.id,a=(e.url,e.channel),n=e.description,c=e.song,o=e.likes,s=e.messages,l=e.shares;return r.a.createElement(z,{key:t,url:"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",channel:a,song:c,likes:o,messages:s,description:n,shares:l})}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[31,1,2]]]);
//# sourceMappingURL=main.b33a29d3.chunk.js.map