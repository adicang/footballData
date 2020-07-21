(this["webpackJsonpmy-football-api"]=this["webpackJsonpmy-football-api"]||[]).push([[0],{16:function(e,t,a){e.exports=a.p+"static/media/football.41a2b4b2.png"},28:function(e,t,a){e.exports=a.p+"static/media/loader.083a9a8d.gif"},32:function(e,t,a){e.exports=a.p+"static/media/shirt.dcfa135e.png"},34:function(e,t,a){e.exports=a(54)},39:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},49:function(e,t,a){},52:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(27),l=a.n(c),o=(a(39),a(33)),s=a(2),i=a(9),u=a.n(i),m=a(15),d=a(7),f=a(28),p=a.n(f),h=(a(41),function(){return r.a.createElement("div",{className:"loader"},r.a.createElement("img",{src:p.a}))}),b=(a(42),a(16)),E=a.n(b),g=a(17),v=a.n(g),x=a(18),y=a.n(x),N=function(e){var t=Object(n.useState)(!0),a=Object(d.a)(t,2),c=a[0],l=a[1],o=Object(n.useState)([]),s=Object(d.a)(o,2),i=s[0],f=s[1],p=Object(n.useState)(""),b=Object(d.a)(p,2),E=b[0],g=b[1],x=Object(n.useState)([]),N=Object(d.a)(x,2),S=N[0],j=N[1];Object(n.useEffect)((function(){O()}),[]);var O=function(){var e=Object(m.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(!0),e.next=3,fetch("https://api.football-data.org/v2/competitions/2001/teams",{headers:{"X-Auth-Token":"3b697eaf3f134a8b84675732570a9beb"}}).then((function(e){return e.json()})).then((function(e){e.teams&&f(e.teams),l(!1)})).catch((function(e){l(!1)}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){if(""!==E||null!==E){var e=i.filter((function(e){return e.name&&e.name.toLowerCase().includes(E.toLowerCase())}));j(e)}else j(null)}),[E]);return r.a.createElement("div",{className:"page-container"},c&&r.a.createElement(h,null),i.length>0&&r.a.createElement("div",{className:"table-container"},r.a.createElement(y.a,{bottom:!0},r.a.createElement("div",{className:"header-row"},r.a.createElement("h1",null,"Football Teams"),r.a.createElement("input",{type:"text",placeholder:"Search by team name",value:E,onChange:function(e){return g(e.target.value)}})),r.a.createElement(v.a,{className:"table",columns:w,data:E?S:i,defaultSortField:"founded",striped:!0,noHeader:!0,customStyles:k,keyField:i.id,progressComponent:r.a.createElement(h,null),onRowClicked:function(t){return function(t){e.history.push("/team?id=".concat(t.id))}(t)}}))),!c&&0===i.length&&r.a.createElement("div",{className:"no-results"},r.a.createElement("h1",null,"Someting Went Wrong"),r.a.createElement("p",null,"We could not fetch results"),r.a.createElement("button",{onClick:function(){return O()}},"Try Again")))},w=[{name:"",selector:"crestUrl",sortable:!1,cell:function(e){return r.a.createElement("img",{src:e.crestUrl?e.crestUrl:E.a,className:"team-logo"})}},{name:"Name",selector:"name",sortable:!0},{name:"Founded",selector:"founded",sortable:!0},{name:"Address",selector:"address",sortable:!0}],k={rows:{style:{minHeight:"55px"}},headCells:{style:{paddingLeft:"8px",paddingRight:"8px",fontWeight:"bold",textAlign:"right",margin:"0 auto",fontSize:"15px"}},cells:{style:{paddingLeft:"8px",paddingRight:"8px",fontSize:"15px"}}},S=(a(49),a(32)),j=a.n(S),O=a(13),C=a(14),W=function(e){var t=Object(n.useState)(!0),a=Object(d.a)(t,2),c=a[0],l=a[1],o=Object(n.useState)(null),s=Object(d.a)(o,2),i=s[0],f=s[1];Object(n.useEffect)((function(){p()}),[]);var p=function(){var e=Object(m.a)(u.a.mark((function e(){var t,a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(!0),t=window.location.href,a=new URL(t),n=a.searchParams.get("id"),e.next=6,fetch("https://api.football-data.org/v2/teams/".concat(n),{headers:{"X-Auth-Token":"3b697eaf3f134a8b84675732570a9beb"}}).then((function(e){return e.json()})).then((function(e){e&&f(e),l(!1)})).catch((function(e){return l(!1)}));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"page-container-single-team"},r.a.createElement("div",{className:"go-back",onClick:function(){return e.history.goBack()}},r.a.createElement(O.a,{icon:C.a}),"Back to teams list"),c&&r.a.createElement(h,null),i&&r.a.createElement(y.a,{top:!0},r.a.createElement("div",{className:"team-container"},r.a.createElement("div",{className:"header"},r.a.createElement("img",{src:i.crestUrl?i.crestUrl:E.a,className:"team-logo"}),r.a.createElement("h1",null,i.name)),r.a.createElement("div",{className:"inner-team-container"},r.a.createElement("div",{className:"details-container"},r.a.createElement("p",null,r.a.createElement(O.a,{icon:C.b}),"Founded: ",r.a.createElement("span",null,i.founded)),r.a.createElement("p",null,r.a.createElement(O.a,{icon:C.c}),"Website:"," ",r.a.createElement("a",{href:i.website,target:"_blank"},i.website)),r.a.createElement("p",null,r.a.createElement(O.a,{icon:C.d}),"Address: ",i.address)),r.a.createElement("div",{className:"players-container"},r.a.createElement("h3",null,"Squad:"),r.a.createElement(v.a,{className:"squad-table",columns:F,data:i.squad,defaultSortField:"shirtNumber",striped:!0,noHeader:!0,customStyles:A,keyField:i.squad.id,progressComponent:r.a.createElement(h,null)}))))),!c&&!i&&r.a.createElement("div",{className:"no-results"},r.a.createElement("h1",null,"Someting Went Wrong"),r.a.createElement("p",null,"We could not fetch results"),r.a.createElement("button",{onClick:function(){return p()}},"Try Again")))},A={rows:{style:{minHeight:"55px"}},headCells:{style:{paddingLeft:"8px",paddingRight:"8px",fontWeight:"bold",textAlign:"right",margin:"0 auto",fontSize:"15px"}},cells:{style:{paddingLeft:"8px",paddingRight:"8px",fontSize:"15px"}}},F=[{name:"Name",selector:"name",sortable:!0},{name:"",sortable:!1,cell:function(e){return r.a.createElement("div",{className:"player-shirt"},r.a.createElement("img",{src:j.a}),r.a.createElement("span",{style:e.shirtNumber<10?{left:"40%"}:{}},e.shirtNumber))}}],L=(a(52),function(e){return r.a.createElement("div",{className:"not-found-page-container"},r.a.createElement("h1",null,"Page Not Found"),r.a.createElement("p",null,"Sorry, this page does not exist"),r.a.createElement("button",{onClick:function(){return e.history.push("/")}},"Click here to go home"))}),R=function(e){return r.a.createElement(o.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(s.c,null,r.a.createElement(s.a,{path:"/footballData/",exact:!0,component:N}),r.a.createElement(s.a,{path:"/footballData/team",exact:!0,component:W}),r.a.createElement(s.a,{component:L}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[34,1,2]]]);
//# sourceMappingURL=main.b5675854.chunk.js.map