(this.webpackJsonpdemo=this.webpackJsonpdemo||[]).push([[0],{115:function(e,t,n){e.exports={Logo:"Logo_Logo__znhhm"}},116:function(e,t,n){e.exports={paper:"PeopleToFollow_paper__2ihxG"}},120:function(e,t,n){e.exports={List:"TopicList_List__3R-PO"}},124:function(e,t,n){e.exports={link:"Navlink_link__4Y9hl"}},127:function(e,t,n){e.exports={spinner:"LoadingSpinner_spinner__3eCh8"}},142:function(e,t,n){},16:function(e,t,n){"use strict";var a=n(0),r=n.n(a).a.createContext({isAuthenticated:!1,user:{name:"",email:"",_id:"",password:"",__v:""},onLogin:function(){},onLogout:function(){}});t.a=r},169:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(9),o=n.n(c),i=n(18),s=(n(142),n(13)),l=n(216),j=n(217),d=n(220),u=n(240),p=n(129),b=n(11),h=function(e){var t=Object(a.useState)(""),n=Object(b.a)(t,2),r=n[0],c=n[1],o=Object(a.useState)(!1),i=Object(b.a)(o,2),s=i[0],l=i[1],j=e(r);return{value:r,hasError:s&&!j,isValid:j,valueChangedHandler:function(e){c(e.target.value)},inputBlurHandler:function(){l(!0)},resetInput:function(){console.log("reset Input"),c(""),l(!1)}}},m=n(16),O=n(50),g=n.n(O),x=n(1);function f(){var e,t=Object(a.useContext)(m.a),n=Object(s.g)(),r=Object(s.h)(),c=h((function(e){return e.includes("@")})),o=c.value,i=c.hasError,b=c.isValid,O=c.valueChangedHandler,f=c.inputBlurHandler,v=h((function(e){return e.length>0})),_=v.value,y=v.hasError,C=v.isValid,S=v.valueChangedHandler,k=v.inputBlurHandler;return r.err&&(e=Object(x.jsx)("div",{className:g.a.errorDiv,children:r.err})),Object(x.jsxs)(a.Fragment,{children:[e,Object(x.jsx)(p.a,{elevation:3,className:g.a.Login,children:Object(x.jsx)(l.a,{className:g.a.card,style:{backgroundColor:"#2BAE66",boxShadow:"4px 4px 4px 4px #888"},children:Object(x.jsx)(j.a,{children:Object(x.jsxs)("form",{noValidate:!0,autoComplete:"off",onSubmit:function(e){e.preventDefault(),f(),k(),b&&C?fetch("/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:o,password:_})}).then((function(e){return e.json()})).then((function(e){console.log("Got response"),e._id&&(t.onLogin(e),localStorage.setItem("username",e.name),localStorage.setItem("useremail",e.email),localStorage.setItem("userID",e._id),n.push("/app/home")),e.msg&&(console.log("Directing to login for",e.msg),n.replace("/loginsignup/login/".concat(e.msg)))})).catch((function(e){console.log(e)})):console.log("Something went wrong")},children:[Object(x.jsx)(u.a,{className:g.a.input,id:"standard-basic",label:"Email",value:o,onChange:O,onBlur:f,error:i}),Object(x.jsx)(u.a,{className:g.a.input,label:"Password",type:"password",value:_,onChange:S,onBlur:k,error:y}),Object(x.jsxs)("div",{className:g.a.btnsContainer,children:[Object(x.jsx)(d.a,{variant:"contained",size:"small",type:"submit",children:"Login"}),Object(x.jsx)(d.a,{size:"small",children:"Forgot Password?"})]})]})})})})]})}var v=n(41),_=n(241),y=n(221),C=n(222),S=n(218),k=n(39),N=n.n(k);function w(){var e,t,n=Object(a.useContext)(m.a),c=Object(s.g)(),o=Object(s.h)(),i=h((function(e){return""!==e.trim()})),O=i.value,g=i.hasError,f=i.isValid,k=i.valueChangedHandler,w=i.inputBlurHandler,P=h((function(e){return e.includes("@")})),B=P.value,L=P.hasError,I=P.isValid,T=P.valueChangedHandler,E=P.inputBlurHandler,A=h((function(e){return e.length>6})),z=A.value,D=A.hasError,H=A.isValid,M=A.valueChangedHandler,F=A.inputBlurHandler,V=h((function(e){return e===z})),J=V.value,U=V.hasError,G=V.isValid,R=V.valueChangedHandler,W=V.inputBlurHandler,q=r.a.useState(!1),Q=Object(b.a)(q,2),X=Q[0],Y=Q[1];return o.err&&(e=Object(x.jsx)("div",{className:N.a.errorDiv,children:"This email is allready used please try a different one"}),t={margin:"auto"}),Object(x.jsxs)(a.Fragment,{children:[e,Object(x.jsx)(p.a,{style:t,elevation:3,className:N.a.Signup,children:Object(x.jsx)(l.a,{className:N.a.card,style:{backgroundColor:"#2BAE66",boxShadow:"3px 3px 2px 3px #888"},children:Object(x.jsxs)(j.a,{children:[Object(x.jsx)(v.a,{varient:"h3",color:"textSecondary",gutterBottom:!0,children:"Create An Account"}),Object(x.jsxs)("form",{noValidate:!0,autoComplete:"off",onSubmit:function(e){e.preventDefault(),w(),E(),F(),W(),f&&I&&H&&G?X&&fetch("/signup",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:O,email:B,password:z})}).then((function(e){return e.json()})).then((function(e){e._id&&(n.onLogin(e),console.log(e),localStorage.setItem("username",e.name),localStorage.setItem("useremail",e.email),localStorage.setItem("userID",e._id),c.push("/app/home")),e.msg&&(console.log("Directing to error signup for",e.msg),c.push("/loginsignup/signup/".concat(e.msg)))})).catch((function(e){console.log("got err"),console.log(e)})):console.log("Something is wrong")},children:[Object(x.jsx)(u.a,{name:"name",className:N.a.input,label:"Name",value:O,onChange:k,onBlur:w,error:g,required:!0}),Object(x.jsx)(u.a,{name:"email",className:N.a.input,label:"Email",value:B,onChange:T,onBlur:E,error:L,required:!0}),Object(x.jsx)(u.a,{name:"password",className:N.a.input,label:"Password",type:"password",value:z,onChange:M,onBlur:F,error:D,required:!0}),Object(x.jsx)(u.a,{name:"repassword",className:N.a.input,label:"Re-type Password",type:"password",value:J,onChange:R,onBlur:W,error:U,required:!0}),Object(x.jsx)(S.a,{component:"fieldset",children:Object(x.jsx)(y.a,{"aria-label":"position",row:!0,children:Object(x.jsx)(C.a,{value:"end",control:Object(x.jsx)(_.a,{checked:X,onChange:function(e){Y(e.target.checked)},inputProps:{"aria-label":"primary checkbox"}}),label:"I agree to all of terms of use and PRI",labelPlacement:"end"})})}),Object(x.jsxs)("div",{className:N.a.btnsContainer,children:[Object(x.jsx)(d.a,{variant:"contained",size:"small",type:"submit",children:"Signup"}),Object(x.jsx)(d.a,{size:"small",onClick:function(){console.log("learn more"),c.push("/app/about")},children:"Learn More"})]})]})]})})})]})}var P=n(115),B=n.n(P),L=function(e){var t="".concat(B.a.Logo," ").concat(e.className);return Object(x.jsx)("span",{className:t,children:"Paisaat"})},I=n(51),T=n.n(I);function E(){return Object(x.jsxs)("div",{className:T.a.Branding,children:[Object(x.jsx)(v.a,{variant:"h5",children:"Welcome To Internet Of Finance"}),Object(x.jsxs)("div",{className:T.a.LogoContainer,children:[Object(x.jsx)(L,{className:T.a.logo}),Object(x.jsx)("div",{className:T.a.tagline,children:"Yeh Paiso Ki Baat Hai"})]}),Object(x.jsx)("div",{className:T.a.desc1,children:"Join and be a part of worlds largestanf fastest growing community of finance"}),Object(x.jsxs)("div",{className:T.a.desc2,children:["Of the community, for the community and ",Object(x.jsx)("br",{}),"By the community"]})]})}var A=n(74),z=n.n(A),D=n(224),H=function(){return Object(x.jsxs)("div",{className:z.a.LoginSignup,children:[Object(x.jsx)("br",{}),Object(x.jsxs)(D.a,{children:[Object(x.jsx)("div",{className:z.a.topSection,children:Object(x.jsx)(f,{})}),Object(x.jsxs)("div",{className:z.a.bottomsection,children:[Object(x.jsx)(w,{}),Object(x.jsx)(E,{})]})]})]})},M=function(){return Object(x.jsxs)(s.d,{children:[Object(x.jsx)(s.b,{path:"/loginsignup",exact:!0,children:Object(x.jsx)(H,{})}),Object(x.jsx)(s.b,{path:"/loginsignup/login/:err",children:Object(x.jsx)(f,{})}),Object(x.jsx)(s.b,{path:"/loginsignup/signup/:err",children:Object(x.jsx)(w,{})})]})},F=n(234),V=n(242),J=n(34),U=n(225),G=n(4),R=n(228),W=n(229),q=n(230),Q=n(244),X=n(223),Y=n(73),Z=n(97),K=n.n(Z),$=n(98),ee=n.n($),te=n(63),ne=n(226),ae=n(227),re=n(75),ce=n.n(re),oe=function(e){return Object(x.jsxs)("form",{className:ce.a.from,onSubmit:e.submit,noValidate:!0,autoComplete:"off",children:[Object(x.jsx)(u.a,{className:ce.a.comment,style:{margin:"0 5% 10px 30px"},value:e.val,onChange:e.change,id:"outlined-basic",label:"Add a comment",variant:"outlined"}),Object(x.jsx)(d.a,{className:ce.a.btn,style:{marginTop:"8.5px"},type:"submit",variant:"outlined",color:"secondary",children:"Post"})]})},ie=n(61),se=n.n(ie),le=Object(U.a)((function(e){return{purple:{color:e.palette.getContrastText(ne.a[500]),backgroundColor:ne.a[500]}}}));function je(e){var t=Object(a.useState)(""),n=Object(b.a)(t,2),r=n[0],c=n[1],o=Object(a.useState)([]),i=Object(b.a)(o,2),s=i[0],l=i[1],j=Object(a.useContext)(m.a),d=le();Object(a.useEffect)((function(){fetch("/getComments",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({postId:e.id})}).then((function(e){return e.json()})).then((function(e){console.log(e),l(e)})).catch((function(e){console.log(e)}))}),[e.id]);var u=s.map((function(e){return Object(x.jsxs)("div",{className:se.a.Comment,children:[Object(x.jsx)(ae.a,{}),Object(x.jsxs)("div",{className:se.a.top,children:[Object(x.jsx)(Q.a,{className:[d.purple,se.a.avatar].join(" "),children:e.user.name[0]}),Object(x.jsxs)("div",{children:[Object(x.jsx)(v.a,{className:se.a.name,style:{padding:"0",margin:"0"},variant:"subtitle2",component:"p",paragraph:!0,children:e.user.name}),Object(x.jsx)(v.a,{variant:"body2",paragraph:!0,style:{padding:"0",margin:"0"},children:e.text})]})]})]})}));return Object(x.jsxs)(a.Fragment,{children:[Object(x.jsx)(oe,{val:r,change:function(e){c(e.target.value)},submit:function(t){if(t.preventDefault(),""!==r.trim()){var n={text:r,postId:e.id,userId:j.user._id};console.log(n),fetch("/comment",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(e){return e.json()})).then((function(e){if(console.log(e),c(""),"success"===e.msg){var t={text:n.text,user:{imageUrl:j.user.imageUrl,name:j.user.name}};l((function(e){return[t].concat(Object(te.a)(e))}))}else console.log("comment failed")})).catch((function(e){console.log(e)}))}else console.log("Comment empty")}}),u,Object(x.jsx)(ae.a,{className:se.a.lastLine})]})}var de=n(90),ue=n.n(de),pe=Object(U.a)((function(e){return{root:{maxWidth:650,marginBottom:15},media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:Y.a[500]}}}));function be(e){var t=Object(a.useState)(!1),n=Object(b.a)(t,2),r=n[0],c=n[1],o=Object(a.useState)(e.liked),i=Object(b.a)(o,2),s=i[0],d=i[1],u=Object(a.useState)(e.likesCount),h=Object(b.a)(u,2),O=h[0],g=h[1],f=Object(a.useContext)(m.a),_=pe(),y=e.topics.map((function(e,t){return Object(x.jsxs)(v.a,{variant:"h6",component:"p",style:{color:"#2BAE66"},gutterBottom:!0,children:["#",e]},t)})),C=e.date.slice(0,10),S="";s&&(S=ue.a.red);return Object(x.jsx)(p.a,{elevation:3,children:Object(x.jsxs)(l.a,{className:_.root,children:[Object(x.jsx)(R.a,{avatar:Object(x.jsx)(Q.a,{"aria-label":"recipe",className:_.avatar,children:e.owner[0]}),title:e.owner,subheader:C}),Object(x.jsxs)(j.a,{children:[Object(x.jsx)(v.a,{variant:"body2",component:"p",children:e.text}),y]}),e.imgUrl&&Object(x.jsx)("img",{className:ue.a.postImage,src:"/".concat(e.imgUrl),alt:"Post upload"}),Object(x.jsxs)(W.a,{disableSpacing:!0,children:[Object(x.jsx)(X.a,{onClick:function(){if(s){d(!1),g((function(e){return e-1}));var t={postId:e.id,userId:f.user._id};fetch("/unlikePost",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){console.log(e),"Server Error"===e.msg&&(d(!0),g((function(e){return e+1})))})).catch((function(e){console.log("err"),d(!0),g((function(e){return e+1}))}))}else{d(!0),g((function(e){return e+1}));var n={postId:e.id,userId:f.user._id};fetch("/likePost",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(e){return e.json()})).then((function(e){console.log(e),"Server Error"===e.msg&&(d(!1),g((function(e){return e-1})))})).catch((function(e){console.log("err"),d(!1),g((function(e){return e-1}))}))}},"aria-label":"add to favorites",children:Object(x.jsx)(K.a,{className:S})})," ","\xa0 ",O," Likes",Object(x.jsx)(X.a,{className:Object(G.a)(_.expand,Object(J.a)({},_.expandOpen,r)),onClick:function(){c(!r)},"aria-expanded":r,"aria-label":"show more",children:Object(x.jsx)(ee.a,{})}),"Comments \xa0"]}),Object(x.jsx)(q.a,{in:r,timeout:"auto",unmountOnExit:!0,children:Object(x.jsx)(j.a,{children:Object(x.jsx)(je,{id:e.id})})})]})})}var he=function(){var e=Object(a.useContext)(m.a),t=Object(a.useState)([]),n=Object(b.a)(t,2),r=n[0],c=n[1];Object(a.useEffect)((function(){var e=localStorage.getItem("userID");console.log(e),fetch("/getfollowerspost/".concat(e)).then((function(e){return e.json()})).then((function(e){e.msg?console.log("Something went wrong"):c(e)})).catch((function(e){console.log(e)}))}),[]);var o=e.user._id,i=r.map((function(e){return Object(x.jsx)(be,{id:e._id,text:e.postText,topics:e.postTopics,owner:e.postedBy.name,likesCount:e.likesCount,imgUrl:e.imageUrl,date:e.date,liked:e.likes.includes(o)},e._id)}));return Object(x.jsx)("div",{children:i})},me=n(170),Oe=n(231),ge=Object(U.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}}})),xe={color:"#2BAE66"},fe=["#Paisaat","#CryptoCurrency","#Share market"],ve=function(){var e=ge(),t=fe.map((function(e,t){return Object(x.jsx)(me.a,{button:!0,children:Object(x.jsx)(Oe.a,{primary:e})},t)}));return Object(x.jsxs)(p.a,{style:xe,className:e.paper,children:[Object(x.jsx)("h3",{children:"Trending"}),t,Object(x.jsx)(i.b,{to:"/app/trending",children:Object(x.jsx)("h4",{style:{color:"#2BAE66"},children:"See more..."})})]})},_e=n(219),ye=Object(U.a)((function(e){return{root:{width:"100%",maxWidth:360,backgroundColor:e.palette.background.paper}}}));function Ce(){var e=ye();return Object(x.jsx)("div",{className:e.root,children:Object(x.jsxs)(_e.a,{component:"nav",children:[Object(x.jsx)(me.a,{button:!0,children:Object(x.jsx)(Oe.a,{primary:"Jimmy"})}),Object(x.jsx)(me.a,{button:!0,children:Object(x.jsx)(Oe.a,{primary:"Taral Sharma"})}),Object(x.jsx)(me.a,{button:!0,children:Object(x.jsx)(Oe.a,{primary:"Vijayant Pathak"})}),Object(x.jsx)(me.a,{button:!0,children:Object(x.jsx)(Oe.a,{primary:"Sugam Jaiswal"})})]})})}var Se=n(116),ke=n.n(Se),Ne=Object(U.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}}})),we=function(){var e=Ne();return Object(x.jsxs)(p.a,{className:"".concat(e.paper," ").concat(ke.a.paper),children:[Object(x.jsx)("h3",{children:"People to follow"}),Object(x.jsx)(Ce,{})]})},Pe=n(67),Be=n.n(Pe),Le=function(){var e=Object(a.useContext)(m.a),t="";return e.user&&(t=e.user.name.split(" ")[0]),Object(x.jsxs)(p.a,{className:Be.a.ShareSomething,elevation:3,children:[Object(x.jsxs)("div",{className:Be.a.top,children:[Object(x.jsx)(Q.a,{src:"/broken-image.jpg"}),Object(x.jsx)(i.b,{to:"/app/home/createpost",className:Be.a.link,children:Object(x.jsxs)(d.a,{variant:"contained",disableElevation:!0,children:["What's in your mind,  ",t,"?"]})})]}),Object(x.jsx)("div",{className:Be.a.bottom,children:"Share Your Todays Taughts on Financial Market"})]})},Ie=n(232),Te=n(233),Ee=Object(U.a)({root:{maxWidth:345},media:{height:140}});function Ae(e){var t=Ee();return Object(x.jsxs)(a.Fragment,{children:[Object(x.jsxs)(l.a,{className:t.root,variant:"outlined",children:[Object(x.jsxs)(Ie.a,{children:[Object(x.jsx)(Te.a,{className:t.media,image:e.img,title:"Contemplative Reptile"}),Object(x.jsx)(j.a,{children:Object(x.jsx)(v.a,{gutterBottom:!0,variant:"h5",component:"h2",children:e.title})})]}),Object(x.jsx)(W.a,{children:Object(x.jsx)(d.a,{size:"small",color:"primary",onClick:function(){return window.open(e.link,"_blank")},children:"Learn More"})})]}),Object(x.jsx)("br",{})]})}var ze=[{image:n.p+"static/media/news1.00671994.PNG",title:"Morgan Stanley says these 6 stocks are much cheaper alternatives to Big Tech",link:"https://www.cnbc.com/2021/06/28/morgan-stanley-says-these-stocks-are-cheaper-alternatives-to-big-tech.html"},{image:n.p+"static/media/crypto.a6a75940.PNG",title:"Cramer: Here\u2019s why I bought back into ether instead of bitcoin when crypto stabilized last week",link:"https://www.cnbc.com/2021/06/28/why-jim-cramer-bought-ether-instead-of-bitcoin-when-crypto-stabilized-.html"},{image:n.p+"static/media/china.abdd66ec.PNG",title:"JPMorgan picks its favorite Chinese stocks on everything from hydrogen to EV batteries",link:"https://www.cnbc.com/2021/06/27/jpmorgan-picks-its-favorite-chinese-stocks-on-everything-from-hydrogen-to-ev-batteries.html"},{image:n.p+"static/media/game.791b92a6.PNG",title:"Baird suspends GameStop stock coverage, citing continued Reddit influence and lack of company plan",link:"https://www.cnbc.com/2021/06/28/baird-suspends-gamestop-stock-coverage-reddit-influence-lack-of-plan.html"}],De=function(){return ze.map((function(e,t){return Object(x.jsx)(Ae,{img:e.image,title:e.title,link:e.link},t)}))};function He(){return Object(x.jsx)(D.a,{children:Object(x.jsxs)(F.a,{container:!0,spacing:3,children:[Object(x.jsx)(V.a,{smDown:!0,children:Object(x.jsxs)(F.a,{item:!0,xs:3,children:[Object(x.jsx)(ve,{}),Object(x.jsx)("br",{}),Object(x.jsx)(we,{})]})}),Object(x.jsxs)(F.a,{item:!0,xs:6,sm:6,md:6,alignItems:"flex-start",justify:"center",children:[Object(x.jsx)(F.a,{item:!0,xs:12,container:!0,justify:"center",children:Object(x.jsx)(Le,{})}),Object(x.jsx)(F.a,{item:!0,xs:12,children:Object(x.jsx)("div",{children:Object(x.jsx)(he,{})})})]}),Object(x.jsx)(V.a,{smDown:!0,children:Object(x.jsx)(F.a,{item:!0,md:3,children:Object(x.jsx)(De,{})})})]})})}var Me=n(76),Fe=n(77),Ve=n.n(Fe),Je=function(e){return Object(x.jsx)("div",{className:Ve.a.backdrop,onClick:e.closeModal})},Ue=function(e){return Object(x.jsx)("div",{className:Ve.a.modal,children:Object(x.jsx)("div",{className:Ve.a.content,children:e.children})})},Ge=document.getElementById("overlays"),Re=function(e){return Object(x.jsxs)(a.Fragment,{children:[o.a.createPortal(Object(x.jsx)(Je,Object(Me.a)({},e)),Ge),o.a.createPortal(Object(x.jsx)(Ue,Object(Me.a)(Object(Me.a)({},e),{},{children:e.children})),Ge)]})},We=n(91),qe=n.n(We),Qe=n(117),Xe=n(118),Ye=n.n(Xe),Ze=n(123),Ke=n.n(Ze),$e=n(122),et=n.n($e),tt=n(119),nt=n.n(tt),at=Object(U.a)((function(e){return{root:{"& > *":{margin:e.spacing(0),width:"200px"}},input:{display:"none"}}}));function rt(e){var t=at();return Object(x.jsxs)("div",{className:t.root,children:[Object(x.jsx)("input",{accept:"image/*",className:t.input,id:"contained-button-file",multiple:!0,type:"file",onChange:e.fileUpload}),Object(x.jsx)("label",{htmlFor:"contained-button-file",children:Object(x.jsx)(d.a,{variant:"contained",color:"primary",component:"span",startIcon:Object(x.jsx)(nt.a,{}),children:"Add Image"})})]})}var ct=n(235),ot=n(121),it=n.n(ot),st=n(120),lt=n.n(st),jt=function(e){var t=e.topics.map((function(t,n){return Object(x.jsxs)(me.a,{button:!0,style:{paddingTop:0,paddingBottom:0},children:[Object(x.jsx)(ct.a,{children:Object(x.jsx)(it.a,{onClick:e.removeTopic.bind(null,n)})}),Object(x.jsx)(Oe.a,{primary:t})]},n)}));return Object(x.jsx)(_e.a,{className:lt.a.List,component:"nav","aria-label":"main mailbox folders",children:t})},dt=n(40),ut=n.n(dt),pt=function(){var e=Object(a.useContext)(m.a),t=Object(s.g)(),n=Object(a.useState)(""),c=Object(b.a)(n,2),o=c[0],i=c[1],l=Object(a.useState)(""),j=Object(b.a)(l,2),h=j[0],O=j[1],g=Object(a.useState)([]),f=Object(b.a)(g,2),_=f[0],y=f[1],C=Object(a.useState)(""),S=Object(b.a)(C,2),k=S[0],N=S[1],w=function(){var n=Object(Qe.a)(qe.a.mark((function n(a){var r,c,i;return qe.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(a.preventDefault(),""!==o.trim()){n.next=4;break}return t.replace("/app/home"),n.abrupt("return");case 4:return r=_,""!==h.trim()&&r.push(h),(c=new FormData).append("postText",o),c.append("topics",r),c.append("user",e.user._id?e.user._id:" no user "),c.append("image",k),n.prev=11,n.next=14,Ye.a.post("/createpost",c,{headers:{"Content-Type":"multipart/form-data"}});case 14:i=n.sent,console.log(i),n.next=21;break;case 18:n.prev=18,n.t0=n.catch(11),console.log(n.t0);case 21:t.replace("/app/home");case 22:case"end":return n.stop()}}),n,null,[[11,18]])})));return function(e){return n.apply(this,arguments)}}();return Object(x.jsx)(r.a.Fragment,{children:Object(x.jsxs)(p.a,{elevation:3,style:{backgroundColor:"#2BAE66"},className:ut.a.card,children:[Object(x.jsx)(v.a,{variant:"h5",gutterBottom:!0,className:ut.a.header,children:"Share Something"}),Object(x.jsx)(ae.a,{}),Object(x.jsxs)("form",{noValidate:!0,autoComplete:"off",className:ut.a.form,onSubmit:w,children:[Object(x.jsxs)("div",{className:ut.a.topicsContainer,children:[Object(x.jsx)(u.a,{className:ut.a.topicInput,label:"Topics",value:h,onChange:function(e){O(e.target.value)},variant:"filled"}),Object(x.jsx)(et.a,{className:ut.a.addtopic,onClick:function(e){""!==h.trim()&&y((function(e){var t=Object(te.a)(e);return t.push(h),O(""),t}))}})]}),Object(x.jsx)(jt,{topics:_,removeTopic:function(e){var t=Object(te.a)(_);t.splice(e,1),y(t)}}),Object(x.jsx)(u.a,{id:"filled-basic",className:ut.a.postText,label:"Write Something to Share",variant:"filled",multiline:!0,rows:4,value:o,onChange:function(e){i(e.target.value)},placeholder:"Write Something to Share"}),Object(x.jsxs)("div",{className:ut.a.buttons,children:[Object(x.jsx)(rt,{fileUpload:function(e){N(e.target.files[0])}}),Object(x.jsx)(d.a,{variant:"contained",color:"primary",type:"submit",endIcon:Object(x.jsx)(Ke.a,{}),children:"Post"})]})]})]})})},bt=function(){var e=Object(s.g)();return Object(x.jsxs)(a.Fragment,{children:[Object(x.jsx)(He,{}),Object(x.jsx)(s.b,{path:"/app/home/createpost",children:Object(x.jsx)(Re,{closeModal:function(){e.replace("/app/home")},children:Object(x.jsx)(pt,{})})})]})},ht=function(){return Object(x.jsx)("div",{children:Object(x.jsx)("p",{children:"Page Not Found"})})},mt=n(14),Ot=n(238),gt=n(239),xt=n(243),ft=n(237),vt=n(128),_t=n(125),yt=n.n(_t),Ct=n(113),St=n.n(Ct),kt=n(93),Nt=n.n(kt),wt=n(126),Pt=n.n(wt),Bt=n(236),Lt=n(124),It=n.n(Lt),Tt=function(e){return Object(x.jsx)(X.a,{color:"inherit",children:Object(x.jsx)(Bt.a,{color:"secondary",children:Object(x.jsxs)(i.c,{to:e.link,className:It.a.link,children:[" ",e.children," "]})})})},Et=n(92),At=n.n(Et),zt=Object(U.a)((function(e){return{grow:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(J.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(J.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(mt.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(mt.b)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(J.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:"20ch"}),sectionDesktop:Object(J.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(J.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"})}}));function Dt(){var e,t=Object(a.useContext)(m.a),n=zt(),c=r.a.useState(null),o=Object(b.a)(c,2),l=o[0],j=o[1],d=r.a.useState(null),u=Object(b.a)(d,2),p=u[0],h=u[1],O=Boolean(l),g=Boolean(p),f=function(e){j(e.currentTarget)},_=function(){h(null)},y=function(){j(null),_()},C="primary-search-account-menu",S=Object(x.jsx)(vt.a,{anchorEl:l,anchorOrigin:{vertical:"top",horizontal:"right"},id:C,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:O,onClose:y,children:Object(x.jsxs)(ft.a,{onClick:y,children:[Object(x.jsx)(i.c,{to:"/loginsignup",style:{textDecoration:"none"},children:"Logout"})," "]})}),k="primary-search-account-menu-mobile",N=Object(x.jsxs)(vt.a,{anchorEl:p,anchorOrigin:{vertical:"top",horizontal:"right"},id:k,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:g,onClose:_,children:[Object(x.jsx)(ft.a,{style:{backgroundColor:"#2BAE66"},children:Object(x.jsx)(Tt,{link:"/app/home",children:" Home "})}),Object(x.jsx)(ft.a,{style:{backgroundColor:"#2BAE66"},children:Object(x.jsx)(Tt,{link:"/app/profile",children:" Profile "})}),Object(x.jsx)(ft.a,{style:{backgroundColor:"#2BAE66"},children:Object(x.jsx)(Tt,{link:"/app/premium",children:" Premium Services "})}),Object(x.jsx)(ft.a,{style:{backgroundColor:"#2BAE66"},children:Object(x.jsx)(Tt,{link:"/app/about",children:" About Us "})}),Object(x.jsxs)(ft.a,{onClick:f,style:{backgroundColor:"#2BAE66"},children:[Object(x.jsx)(X.a,{"aria-label":"account of current user","aria-controls":"primary-search-account-menu","aria-haspopup":"true",color:"inherit",children:Object(x.jsx)(Nt.a,{})}),Object(x.jsx)("p",{children:"Profile"})]})]});t.user&&t.user.name&&(e=t.user.name);var w=Object(s.g)();return Object(x.jsxs)("div",{className:"".concat(n.grow," ").concat(At.a.appbar),children:[Object(x.jsx)(Ot.a,{position:"static",style:{backgroundColor:"#2BAE66"},className:At.a.contentPadding,children:Object(x.jsxs)(gt.a,{children:[Object(x.jsx)(X.a,{edge:"start",className:n.menuButton,color:"inherit","aria-label":"open drawer",children:Object(x.jsx)(yt.a,{})}),Object(x.jsx)(v.a,{className:n.title,variant:"h6",noWrap:!0,children:Object(x.jsx)(i.b,{to:"/app/home",style:{color:"#fff",textDecoration:"none"},children:"Paisaat"})}),Object(x.jsxs)("form",{className:n.search,children:[Object(x.jsx)("div",{className:n.searchIcon,children:Object(x.jsx)(St.a,{})}),Object(x.jsx)(xt.a,{placeholder:"Search\u2026",classes:{root:n.inputRoot,input:n.inputInput},inputProps:{"aria-label":"search"},onClick:function(){w.push("/app/search")}})]}),Object(x.jsx)("div",{className:n.grow}),Object(x.jsxs)("div",{className:n.sectionDesktop,children:[Object(x.jsx)(Tt,{link:"/app/home",children:"Home"}),Object(x.jsx)(Tt,{link:"/app/profile",children:"Profile"}),Object(x.jsx)(Tt,{link:"/app/premium",children:"Premium Services"}),Object(x.jsx)(Tt,{link:"/app/about",children:"About Us"}),e?Object(x.jsx)(Tt,{link:"#",children:e.split(" ")[0]}):Object(x.jsx)(Tt,{link:"/loginsignup",children:"Login"}),Object(x.jsx)(X.a,{edge:"end","aria-label":"account of current user","aria-controls":C,"aria-haspopup":"true",onClick:f,color:"inherit",children:Object(x.jsx)(Nt.a,{})})]}),Object(x.jsx)("div",{className:n.sectionMobile,children:Object(x.jsx)(X.a,{"aria-label":"show more","aria-controls":k,"aria-haspopup":"true",onClick:function(e){h(e.currentTarget)},color:"inherit",children:Object(x.jsx)(Pt.a,{})})})]})}),N,S]})}var Ht=function(e){return Object(x.jsxs)(a.Fragment,{children:[Object(x.jsx)(Dt,{}),Object(x.jsx)("main",{children:e.children})]})},Mt=n(127),Ft=n.n(Mt),Vt=function(){return Object(x.jsx)("div",{className:Ft.a.spinner})},Jt=r.a.lazy((function(){return n.e(3).then(n.bind(null,259))})),Ut=r.a.lazy((function(){return n.e(6).then(n.bind(null,263))})),Gt=r.a.lazy((function(){return n.e(7).then(n.bind(null,260))})),Rt=r.a.lazy((function(){return n.e(5).then(n.bind(null,262))})),Wt=r.a.lazy((function(){return n.e(4).then(n.bind(null,261))}));var qt=function(){return Object(x.jsx)(a.Suspense,{fallback:Object(x.jsxs)("div",{className:"loading",children:[" ",Object(x.jsx)(Vt,{})," "]}),children:Object(x.jsxs)(s.d,{children:[Object(x.jsx)(s.b,{path:"/",exact:!0,children:Object(x.jsx)(s.a,{to:"/loginsignup"})}),Object(x.jsx)(s.b,{path:"/loginsignup",children:Object(x.jsx)(M,{})}),Object(x.jsx)(s.b,{path:"/app",children:Object(x.jsxs)(Ht,{children:[Object(x.jsx)(s.b,{path:"/app/home",children:Object(x.jsx)(bt,{})}),Object(x.jsx)(s.b,{path:"/app/profile",children:Object(x.jsx)(Jt,{})}),Object(x.jsx)(s.b,{path:"/app/premium",children:Object(x.jsx)(Ut,{})}),Object(x.jsx)(s.b,{path:"/app/about",children:Object(x.jsx)(Gt,{})}),Object(x.jsx)(s.b,{path:"/app/search",children:Object(x.jsx)(Rt,{})}),Object(x.jsx)(s.b,{path:"/app/trending",children:Object(x.jsx)(Wt,{})})]})}),Object(x.jsx)(s.b,{path:"*",children:Object(x.jsx)(ht,{})})]})})},Qt=function(e){var t=Object(a.useState)(!1),n=Object(b.a)(t,2),r=n[0],c=n[1],o=Object(a.useState)(null),i=Object(b.a)(o,2),s=i[0],l=i[1];return Object(x.jsx)(m.a.Provider,{value:{isAuthenticated:r,user:s,onLogin:function(e){console.log("Loggin User [User State Provider]"),c(!0),l(e)},onLogout:function(){c(!1),l(null)}},children:e.children})};o.a.render(Object(x.jsx)(i.a,{children:Object(x.jsx)(Qt,{children:Object(x.jsx)(r.a.StrictMode,{children:Object(x.jsx)(qt,{})})})}),document.getElementById("root"))},39:function(e,t,n){e.exports={Signup:"Signup_Signup__1EwoS",card:"Signup_card__3pHQ1",input:"Signup_input__2uDql",btnsContainer:"Signup_btnsContainer__2P8Uh",errorDiv:"Signup_errorDiv__3lzeu"}},40:function(e,t,n){e.exports={CreatePost:"CreatePost_CreatePost__2UjZP",card:"CreatePost_card__1NYwW",header:"CreatePost_header__3cbhM",form:"CreatePost_form__2XLzP",postText:"CreatePost_postText__3aV7C",topicsContainer:"CreatePost_topicsContainer__2YRW9",topicInput:"CreatePost_topicInput__1w5mQ",addtopic:"CreatePost_addtopic__12_6P",topicsList:"CreatePost_topicsList__3kFRx",buttons:"CreatePost_buttons__2hbQv"}},50:function(e,t,n){e.exports={Login:"Login_Login__28EVV",card:"Login_card__1iMr_",input:"Login_input__m4HFj",btnsContainer:"Login_btnsContainer__25lQz",errorDiv:"Login_errorDiv__1Jj0o"}},51:function(e,t,n){e.exports={Branding:"Branding_Branding__1nIyi",LogoContainer:"Branding_LogoContainer__2MIHh",logo:"Branding_logo__2KXOY",tagline:"Branding_tagline__2zD8j",desc1:"Branding_desc1__3Le5d",desc2:"Branding_desc2__2A6BZ"}},61:function(e,t,n){e.exports={Comment:"Comments_Comment__3oJxe",top:"Comments_top__2aZqz",avatar:"Comments_avatar__1eG6x",name:"Comments_name__3p1gA",lastLine:"Comments_lastLine__1Q76C"}},67:function(e,t,n){e.exports={ShareSomething:"ShareSomething_ShareSomething__2TM_8",top:"ShareSomething_top__LLSG1",link:"ShareSomething_link__3hCZ7",sharebtn:"ShareSomething_sharebtn__3XlFF",bottom:"ShareSomething_bottom__2pjXz"}},74:function(e,t,n){e.exports={LoginSignup:"LoginSignup_LoginSignup__1aFtt",bottomsection:"LoginSignup_bottomsection__1T5xi"}},75:function(e,t,n){e.exports={form:"NewComment_form__3zEGm",comment:"NewComment_comment__2SV2r"}},77:function(e,t,n){e.exports={backdrop:"Modal_backdrop__3u6ux",modal:"Modal_modal__9q2Ap","slide-down":"Modal_slide-down__O2avn"}},90:function(e,t,n){e.exports={postImage:"Post_postImage__3ywXs",red:"Post_red__3XOCP"}},92:function(e,t,n){e.exports={appbar:"MenuAppBar_appbar__3ZnQT",contentPadding:"MenuAppBar_contentPadding__2y9r5"}}},[[169,1,2]]]);
//# sourceMappingURL=main.bca3b6aa.chunk.js.map