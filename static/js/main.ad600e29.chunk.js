(this["webpackJsonpuse-effect"]=this["webpackJsonpuse-effect"]||[]).push([[0],{30:function(t,e,n){},36:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n.n(c),o=n(8),a=n.n(o),s=n(22),u=n(16),i=n.n(u),j=n(20),f=n(18),h=(n(30),n(57)),d=n(62),b=n(4),l=r.a.memo((function(t){var e=t.users,n=t.getActiveUser,c=t.currentId;return Object(b.jsx)(h.a,{children:e.map((function(t){var e=t.name,r=t.id;return Object(b.jsx)(d.a,{style:{cursor:"pointer"},selected:r===c,onClick:function(){return n(r)},children:e},r)}))})})),p=n(63),m=n(59),O=n(61),x=n(60),v=n(64),y=r.a.memo((function(t){var e=t.id,n=t.name,c=t.avatar,r=t.details,o=r.city,a=r.position,s=r.company;return Object(b.jsx)(p.a,{children:Object(b.jsxs)(m.a,{style:{maxWidth:"360px"},children:[Object(b.jsx)(x.a,{style:{height:"140px"},image:c}),Object(b.jsxs)(O.a,{children:[Object(b.jsx)(v.a,{gutterBottom:!0,variant:"h5",component:"h2",children:n}),Object(b.jsx)(v.a,{variant:"body2",color:"textSecondary",component:"p",children:o}),Object(b.jsx)(v.a,{variant:"body2",color:"textSecondary",component:"p",children:s}),Object(b.jsx)(v.a,{variant:"body2",color:"textSecondary",component:"p",children:a})]})]})},e)})),g=function(){var t=Object(c.useState)([]),e=Object(f.a)(t,2),n=e[0],r=e[1],o=Object(c.useState)(null),a=Object(f.a)(o,2),u=a[0],h=a[1],d=Object(c.useState)(null),p=Object(f.a)(d,2),m=p[0],O=p[1],x=function(){var t=Object(j.a)(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:fetch("https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json").then((function(t){return t.json()})).then((function(t){return r(t)}));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();Object(c.useEffect)((function(){x()}),[n]);var v=function(){var t=Object(j.a)(i.a.mark((function t(e){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:fetch("".concat("https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/").concat(e,".json")).then((function(t){return t.json()})).then((function(t){return O(t)}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(c.useEffect)((function(){null!==u&&v(u)}),[u]),Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(l,{users:n,getActiveUser:function(t){h(t)},currentId:u}),m&&Object(b.jsx)(y,Object(s.a)({},m))]})};a.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(g,{})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.ad600e29.chunk.js.map