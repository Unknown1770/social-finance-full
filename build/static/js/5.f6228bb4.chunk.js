(this.webpackJsonpdemo=this.webpackJsonpdemo||[]).push([[5],{251:function(e,t,n){e.exports={People:"People_People__3ytOM"}},252:function(e,t,n){e.exports={centre:"SearchPeople_centre__385_g",searchForm:"SearchPeople_searchForm__3lzMP",searchInput:"SearchPeople_searchInput__36gkw",searchBtn:"SearchPeople_searchBtn__3iDp4",people:"SearchPeople_people__2-kV6"}},262:function(e,t,n){"use strict";n.r(t);var o=n(11),a=n(0),c=n(240),r=n(113),s=n.n(r),i=n(224),l=n(225),u=n(129),h=n(16),p=n(220),d=n(251),j=n.n(d),f=n(1),b=function(e){var t=Object(a.useContext)(h.a),n=Object(a.useState)(e.following),c=Object(o.a)(n,2),r=c[0],s=c[1];return Object(f.jsxs)(u.a,{className:j.a.People,elevation:3,children:[Object(f.jsx)("span",{children:e.name}),Object(f.jsx)(p.a,{style:{color:r?"#ae2b2b":"#2BAE66"},color:"primary",onClick:function(){fetch("/addfollowing",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:t.user._id,follow:e.id})}).then((function(e){return e.json()})).then((function(e){"Done"===e.msg&&s((function(e){return!e}))})).catch((function(e){return console.log(e)}))},children:r?"UnFollow":"Follow"})]})},m=n(252),O=n.n(m),_=Object(l.a)((function(e){return{root:{display:"flex",flexWrap:"wrap",border:"2px solid #2BAE66","& > *":{margin:e.spacing(2),width:e.spacing(25),height:e.spacing(7)}}}})),x=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],r=t[1],l=Object(a.useState)([]),p=Object(o.a)(l,2),d=p[0],j=p[1],m=_(),x=Object(a.useContext)(h.a),g=d.map((function(e){return Object(f.jsx)(b,{name:e.name,id:e.id,following:e.following},e.id)}));return Object(f.jsxs)(i.a,{children:[Object(f.jsx)("div",{className:O.a.centre,children:Object(f.jsx)(u.a,{className:m.root,elevation:3,children:Object(f.jsxs)("form",{className:O.a.searchForm,onSubmit:function(e){e.preventDefault();var t=x.user._id;""!==n.trim()&&fetch("/search",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:t,searchText:n})}).then((function(e){return e.json()})).then((function(e){if(e.msg)throw new Error("Server Failed");j(e)})).catch((function(e){console.log(e)}))},noValidate:!0,autoComplete:"off",children:[Object(f.jsx)(c.a,{id:"outlined-basic",className:O.a.searchInput,label:"Search",variant:"outlined",value:n,onChange:function(e){r(e.target.value)}}),Object(f.jsx)(s.a,{type:"submit",className:O.a.searchBtn})]})})}),Object(f.jsx)("div",{className:O.a.people,children:g})]})};t.default=function(){return Object(f.jsx)(x,{})}}}]);
//# sourceMappingURL=5.f6228bb4.chunk.js.map