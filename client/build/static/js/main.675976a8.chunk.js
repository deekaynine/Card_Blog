(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{202:function(e,t,n){},203:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(14),c=n.n(r),o=n(17),i=n(60),s=n(121),l=n(16),u=n(7),d="CREATE",p="UPDATE",j="DELETE",b="FETCH_ALL",m="FETCH_BY_SEARCH",h="FETCH_POST",g="LIKE",f="COMMENT",O="START_LOADING",x="END_LOADING",v="AUTH",y="LOGOUT",w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{authData:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return localStorage.setItem("profile",JSON.stringify(Object(u.a)({},null===t||void 0===t?void 0:t.data))),Object(u.a)(Object(u.a)({},e),{},{authDtata:null===t||void 0===t?void 0:t.data});case y:return localStorage.clear(),Object(u.a)(Object(u.a)({},e),{},{authData:null});default:return e}},C=Object(i.b)({posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,posts:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object(u.a)(Object(u.a)({},e),{},{isLoading:!0});case x:return Object(u.a)(Object(u.a)({},e),{},{isLoading:!1});case b:return Object(u.a)(Object(u.a)({},e),{},{posts:t.payload.data,currentPage:t.payload.currentPage,numberOfPages:t.payload.numberOfPages});case m:return Object(u.a)(Object(u.a)({},e),{},{posts:t.payload});case h:return Object(u.a)(Object(u.a)({},e),{},{post:t.payload});case g:case f:case p:return Object(u.a)(Object(u.a)({},e),{},{posts:e.posts.map((function(e){return e._id===t.payload._id?t.payload:e}))});case d:return Object(u.a)(Object(u.a)({},e),{},{posts:[].concat(Object(l.a)(e.posts),[t.payload])});case j:return Object(u.a)(Object(u.a)({},e),{},{posts:e.posts.filter((function(e){return e._id!==t.payload}))});default:return e}},auth:w}),k=n(240),S=n(30),N=n(15),I=n(138),T=n(230),L=n(206),B=n(231),A=n(232),D=n(12),P=n.n(D),_=n(22),F=n(18),E=n(243),W=n(229),R=n(125),z=n.n(R).a.create({baseURL:"https://eblog-tse.herokuapp.com"});z.interceptors.request.use((function(e){return localStorage.getItem("profile")&&(e.headers.Authorization="Bearer ".concat(JSON.parse(localStorage.getItem("profile")).token)),e}));var J=function(e){return z.get("/posts/".concat(e))},H=function(e){return z.get("/posts?page=".concat(e))},M=function(e){return z.get("/posts/search?searchQuery=".concat(e.search||"none","&tags=").concat(e.tags))},U=function(e){return z.patch("/posts/".concat(e,"/likePost"))},G=function(e,t){return z.post("/posts/".concat(t,"/commentPost"),{value:e})},V=function(e,t){return z.patch("/posts/".concat(e),t)},Y=function(e){return z.delete("/posts/".concat(e))},q=function(e){return z.post("/user/signin",e)},Q=function(e){return z.post("/user/signup",e)},K=function(e){return function(){var t=Object(_.a)(P.a.mark((function t(n){var a,r;return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:O}),t.next=4,M(e);case 4:a=t.sent,r=a.data.data,n({type:m,payload:r}),n({type:x}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()},Z=function(e,t){return function(){var n=Object(_.a)(P.a.mark((function n(a){var r,c;return P.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,G(e,t);case 3:return r=n.sent,c=r.data,a({type:f,payload:c}),n.abrupt("return",c.comments);case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}()},X=n(10),$=n(227),ee=Object($.a)((function(e){return{media:{borderRadius:"20px",objectFit:"cover",width:"100%",maxHeight:"600px"},card:Object(X.a)({display:"flex",width:"100%"},e.breakpoints.down("sm"),{flexWrap:"wrap",flexDirection:"column"}),section:{borderRadius:"20px",margin:"10px",flex:1},imageSection:Object(X.a)({marginLeft:"20px"},e.breakpoints.down("sm"),{marginLeft:0}),recommendedPosts:Object(X.a)({display:"flex"},e.breakpoints.down("sm"),{flexDirection:"column"}),loadingPaper:{display:"flex",justifyContent:"center",alignItems:"center",padding:"20px",borderRadius:"15px",height:"39vh"},commentsOuterContainer:{display:"flex",justifyContent:"space-between"},commentsInnerContainer:{height:"200px",overflowY:"auto",marginRight:"30px"}}})),te=n(2),ne=function(e){var t,n=e.post,r=Object(o.b)(),c=ee(),i=JSON.parse(localStorage.getItem("profile")),s=Object(a.useRef)(),l=Object(a.useState)(null===n||void 0===n?void 0:n.comments),u=Object(F.a)(l,2),d=u[0],p=u[1],j=Object(a.useState)(""),b=Object(F.a)(j,2),m=b[0],h=b[1],g=function(){var e=Object(_.a)(P.a.mark((function e(){var t,a;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(i.result.name,": ").concat(m),e.next=3,r(Z(t,n._id));case 3:a=e.sent,p(a),h(""),s.current.scrollIntoView({bheavior:"smooth"});case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(te.jsx)("div",{children:Object(te.jsxs)("div",{className:c.commenOuterContainer,children:[Object(te.jsxs)("div",{className:c.commentInnerContainer,children:[Object(te.jsx)(L.a,{gutterBottom:!0,variant:"h6",children:"Comments"}),null===d||void 0===d?void 0:d.map((function(e,t){return Object(te.jsx)(L.a,{gutterBottom:!0,variant:"subtitle1",children:e},t)})),Object(te.jsx)("div",{ref:s})]}),(null===i||void 0===i||null===(t=i.result)||void 0===t?void 0:t.name)&&Object(te.jsxs)("div",{style:{widith:"70%"},children:[Object(te.jsx)(L.a,{gutterBottom:!0,variant:"h6",children:"Write a Comment"}),Object(te.jsx)(E.a,{fullWidth:!0,rows:4,variant:"outlined",label:"Comment",multiline:!0,value:m,onChange:function(e){return h(e.target.value)}}),Object(te.jsx)(W.a,{style:{marginTop:"10px"},fullWidth:!0,disabled:!d,variant:"contained",color:"primary",onClick:g,children:"Comment"})]})]})})},ae=n(81),re=n.n(ae),ce=function(){var e=Object(o.c)((function(e){return e.posts})),t=e.post,n=e.posts,r=e.isLoading,c=Object(o.b)(),i=Object(N.g)(),s=ee(),l=Object(N.i)().id;if(Object(a.useEffect)((function(){c(function(e){return function(){var t=Object(_.a)(P.a.mark((function t(n){var a,r;return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:O}),t.next=4,J(e);case 4:a=t.sent,r=a.data,n({type:h,payload:r}),n({type:x}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0.message);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()}(l))}),[l]),Object(a.useEffect)((function(){t&&c(K({search:"none",tags:null===t||void 0===t?void 0:t.tags.join(",")}))}),[t]),!t)return null;if(r)return Object(te.jsx)(I.a,{elevation:6,className:s.loadingPaper,children:Object(te.jsx)(T.a,{size:"7em"})});var u=n.filter((function(e){return e._id!==t._id}));return Object(te.jsxs)(I.a,{style:{padding:"20px",borderRadius:"15px"},elevation:6,children:[Object(te.jsxs)("div",{className:s.card,children:[Object(te.jsxs)("div",{className:s.section,children:[Object(te.jsx)(L.a,{variant:"h3",component:"h2",children:t.title}),Object(te.jsx)(L.a,{gutterBottom:!0,variant:"h6",color:"textSecondary",component:"h2",children:t.tags.map((function(e){return"#".concat(e," ")}))}),Object(te.jsx)(L.a,{gutterBottom:!0,variant:"body1",component:"p",children:t.message}),Object(te.jsxs)(L.a,{variant:"h6",children:["Created by: ",t.name]}),Object(te.jsx)(L.a,{variant:"body1",children:re()(t.createdAt).fromNow()}),Object(te.jsx)(ne,{post:t}),Object(te.jsx)(B.a,{style:{margin:"20px 0"}})]}),Object(te.jsx)("div",{className:s.imageSection,children:Object(te.jsx)("img",{className:s.media,src:t.selectedFile||"https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png",alt:t.title})})]}),!!u.length&&Object(te.jsxs)("div",{className:s.section,children:[Object(te.jsx)(L.a,{gutterBottom:!0,variant:"h5",children:"You might also like:"}),Object(te.jsx)(B.a,{}),Object(te.jsxs)("div",{className:s.recommendedPosts,children:[u.map((function(e){var t=e.title,n=e.name,a=e.message,r=e.likes,c=e.selectedFile,o=e._id;return Object(te.jsxs)(A.a,{className:s.card2,style:{borderRadius:"20px",padding:"10px",margin:"20px",cursor:"pointer"},onClick:function(){return function(e){return i.push("/posts/".concat(e))}(o)},children:[Object(te.jsx)(L.a,{gutterBottom:!0,variant:"h6",children:t}),Object(te.jsx)(L.a,{gutterBottom:!0,variant:"subtitle2",children:n}),Object(te.jsx)(L.a,{gutterBottom:!0,variant:"subtitle2",children:a}),Object(te.jsxs)(L.a,{gutterBottom:!0,variant:"subtitle1",children:["Likes: ",r.length]}),Object(te.jsx)("img",{src:c,width:"200px"})]},o)})),Object(te.jsx)(B.a,{style:{margin:"20px 0"}})]})]})]})},oe=n(234),ie=n(235),se=n(246),le=n(127),ue=n.p+"static/media/memoriesLogo.653139e9.png",de=n.p+"static/media/memoriesText.74e162ca.png",pe=n(233),je=Object($.a)((function(e){return{appBar:Object(X.a)({borderRadius:15,margin:"30px 0",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",padding:"10px 50px"},e.breakpoints.down("sm"),{flexDirection:"column"}),heading:{color:e.palette.primary.main,textDecoration:"none",fontSize:"2em",fontWeight:300},image:{marginLeft:"10px",marginTop:"5px"},toolbar:Object(X.a)({display:"flex",justifyContent:"flex-end",width:"400px"},e.breakpoints.down("sm"),{width:"auto"}),profile:Object(X.a)({display:"flex",justifyContent:"space-between",width:"400px",alignItems:"center"},e.breakpoints.down("sm"),{width:"auto",marginTop:20,justifyContent:"center"}),logout:{marginLeft:"20px"},userName:{display:"flex",alignItems:"center",textAlign:"center"},brandContainer:{display:"flex",alignItems:"center"},purple:{color:e.palette.getContrastText(pe.a[500]),backgroundColor:pe.a[500]}}})),be=function(){var e=Object(a.useState)(JSON.parse(localStorage.getItem("profile"))),t=Object(F.a)(e,2),n=t[0],r=t[1],c=Object(o.b)(),i=Object(N.h)(),s=Object(N.g)(),l=je(),u=function(){c({type:y}),s.push("/auth"),r(null)};return Object(a.useEffect)((function(){var e=null===n||void 0===n?void 0:n.token;e&&(1e3*Object(le.a)(e).exp<(new Date).getTime()&&u());r(JSON.parse(localStorage.getItem("profile")))}),[i]),Object(te.jsxs)(oe.a,{className:l.appBar,position:"static",color:"inherit",children:[Object(te.jsxs)(S.b,{to:"/",className:l.brandContainer,children:[Object(te.jsx)("img",{component:S.b,to:"/",src:de,alt:"icon",height:"45px"}),Object(te.jsx)("img",{className:l.image,src:ue,alt:"icon",height:"40px"})]}),Object(te.jsx)(ie.a,{className:l.toolbar,children:(null===n||void 0===n?void 0:n.result)?Object(te.jsxs)("div",{className:l.profile,children:[Object(te.jsx)(se.a,{className:l.purple,alt:null===n||void 0===n?void 0:n.result.name,src:null===n||void 0===n?void 0:n.result.imageUrl,children:null===n||void 0===n?void 0:n.result.name.charAt(0)}),Object(te.jsx)(L.a,{className:l.userName,variant:"h6",children:null===n||void 0===n?void 0:n.result.name}),Object(te.jsx)(W.a,{variant:"contained",className:l.logout,color:"secondary",onClick:u,children:"Logout"})]}):Object(te.jsx)(W.a,{component:S.b,to:"/auth",variant:"contained",color:"primary",children:"Sign In"})})]})},me=n(245),he=n(239),ge=n(128),fe=n.n(ge),Oe=n(140),xe=n(236),ve=n(237),ye=n(238),we=n(129),Ce=n.n(we),ke=n(131),Se=n.n(ke),Ne=n(130),Ie=n.n(Ne),Te=n(93),Le=n.n(Te),Be=Object($.a)({media:{height:0,paddingTop:"56.25%",backgroundColor:"rgba(0, 0, 0, 0.5)",backgroundBlendMode:"darken"},border:{border:"solid"},fullHeightCard:{height:"100%"},card:{display:"flex",flexDirection:"column",justifyContent:"space-between",borderRadius:"15px",height:"100%",position:"relative"},overlay:{position:"absolute",top:"20px",left:"20px",color:"white"},overlay2:{position:"absolute",top:"20px",right:"20px",color:"white"},grid:{display:"flex"},details:{display:"flex",justifyContent:"space-between",margin:"20px"},title:{padding:"0 16px"},cardActions:{padding:"0 16px 8px 16px",display:"flex",justifyContent:"space-between"},cardAction:{display:"block",textAlign:"initial"}}),Ae=function(e){var t,n,a,r,c=e.post,i=e.setCurrentId,s=Object(o.b)(),l=Be(),u=JSON.parse(localStorage.getItem("profile")),d=Object(N.g)(),p=function(){var e;return(null===c||void 0===c||null===(e=c.likes)||void 0===e?void 0:e.length)>0?c.likes.find((function(e){var t,n;return e===((null===u||void 0===u||null===(t=u.result)||void 0===t?void 0:t.googleId)||(null===u||void 0===u||null===(n=u.result)||void 0===n?void 0:n._id))}))?Object(te.jsxs)(te.Fragment,{children:[Object(te.jsx)(Ce.a,{fontSize:"small"}),"\xa0",c.likes.length>2?"You and ".concat(c.likes.length-1," others"):"".concat(c.likes.length," like").concat(c.likes.length>1?"s":"")]}):Object(te.jsxs)(te.Fragment,{children:[Object(te.jsx)(Le.a,{fontSize:"small"}),"\xa0",c.likes.length," ",1===c.likes.length?"Like":"Likes"]}):Object(te.jsxs)(te.Fragment,{children:[Object(te.jsx)(Le.a,{fontSize:"small"}),"\xa0Like"]})};return Object(te.jsxs)(A.a,{className:l.card,raised:!0,elevation:6,children:[Object(te.jsxs)(Oe.a,{component:"span",name:"test",className:l.cardAction,onClick:function(e){d.push("/posts/".concat(c._id))},children:[Object(te.jsx)(xe.a,{className:l.media,image:c.selectedFile||"https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png",title:c.title}),Object(te.jsxs)("div",{className:l.overlay,children:[Object(te.jsx)(L.a,{variant:"h6",children:c.name}),Object(te.jsx)(L.a,{variant:"body2",children:re()(c.createdAt).fromNow()})]}),((null===u||void 0===u||null===(t=u.result)||void 0===t?void 0:t.googleId)===(null===c||void 0===c?void 0:c.creator)||(null===u||void 0===u||null===(n=u.result)||void 0===n?void 0:n._id)===(null===c||void 0===c?void 0:c.creator))&&Object(te.jsx)("div",{className:l.overlay2,name:"edit",children:Object(te.jsx)(W.a,{onClick:function(e){e.stopPropagation(),i(c._id)},style:{color:"white"},size:"small",children:Object(te.jsx)(Ie.a,{fontSize:"medium"})})}),Object(te.jsx)("div",{className:l.details,children:Object(te.jsx)(L.a,{variant:"body2",color:"textSecondary",component:"h2",children:c.tags.map((function(e){return"#".concat(e," ")}))})}),Object(te.jsx)(L.a,{className:l.title,gutterBottom:!0,variant:"h5",component:"h2",children:c.title}),Object(te.jsx)(ve.a,{children:Object(te.jsxs)(L.a,{variant:"body2",color:"textSecondary",component:"p",children:[c.message.split(" ").splice(0,20).join(" "),"..."]})})]}),Object(te.jsxs)(ye.a,{className:l.cardActions,children:[Object(te.jsx)(W.a,{size:"small",color:"primary",disabled:!(null===u||void 0===u?void 0:u.result),onClick:function(){return s((e=c._id,function(){var t=Object(_.a)(P.a.mark((function t(n){var a,r,c;return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=JSON.parse(localStorage.getItem("profile")),t.prev=1,t.next=4,U(e,null===a||void 0===a||a.token);case 4:r=t.sent,c=r.data,n({type:g,payload:c}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()));var e},children:Object(te.jsx)(p,{})}),((null===u||void 0===u||null===(a=u.result)||void 0===a?void 0:a.googleId)===(null===c||void 0===c?void 0:c.creator)||(null===u||void 0===u||null===(r=u.result)||void 0===r?void 0:r._id)===(null===c||void 0===c?void 0:c.creator))&&Object(te.jsxs)(W.a,{size:"small",color:"secondary",onClick:function(){return s((e=c._id,function(){var t=Object(_.a)(P.a.mark((function t(n){return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Y(e);case 3:n({type:j,payload:e}),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}()));var e},children:[Object(te.jsx)(Se.a,{fontSize:"small"})," \xa0 Delete"]})]})]})},De=Object($.a)((function(e){return{mainContainer:{display:"flex",alignItems:"center"},smMargin:{margin:e.spacing(1)},actionDiv:{textAlign:"center"}}})),Pe=function(e){var t=e.setCurrentId,n=Object(o.c)((function(e){return e.posts})),a=n.posts,r=n.isLoading,c=De();return a.length||r?r?Object(te.jsx)(T.a,{}):Object(te.jsx)(he.a,{className:c.container,container:!0,alignItems:"stretch",spacing:3,children:null===a||void 0===a?void 0:a.map((function(e){return Object(te.jsx)(he.a,{item:!0,xs:12,sm:12,md:6,lg:3,children:Object(te.jsx)(Ae,{post:e,setCurrentId:t})},e._id)}))}):"No Posts"},_e=n(132),Fe=n.n(_e),Ee=Object($.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1)}},paper:{padding:e.spacing(2)},form:{display:"flex",flexWrap:"wrap",justifyContent:"center"},fileInput:{width:"97%",margin:"10px 0"},buttonSubmit:{marginBottom:10}}})),We=function(e){var t,n=e.currentId,r=e.setCurrentId,c=Object(a.useState)({title:"",message:"",tags:"",selectedFile:""}),i=Object(F.a)(c,2),s=i[0],l=i[1],j=Object(o.c)((function(e){return n?e.posts.posts.find((function(e){return e._id===n})):null})),b=Ee(),m=Object(o.b)(),h=Object(N.g)(),g=JSON.parse(localStorage.getItem("profile"));Object(a.useEffect)((function(){j&&l(j)}),[j]);if(!(null===g||void 0===g||null===(t=g.result)||void 0===t?void 0:t.name))return Object(te.jsx)(I.a,{className:b.paper,elevation:6,children:Object(te.jsx)(L.a,{variant:"h6",align:"center",children:"Please sign in before you create your own post!"})});var f=function(){r(0),l({title:"",message:"",tags:"",selectedFile:""})};return Object(te.jsx)(I.a,{className:b.paper,children:Object(te.jsxs)("form",{autoComplete:"off",noValidate:!0,className:"".concat(b.root," ").concat(b.form),onSubmit:function(e){var t,a;(e.preventDefault(),0===n)?(m(function(e,t){return function(){var n=Object(_.a)(P.a.mark((function n(a){var r,c;return P.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,a({type:O}),n.next=4,o=e,z.post("/posts",o);case 4:r=n.sent,c=r.data,a({type:d,payload:c}),t.push("/posts/".concat(c._id)),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),console.log(n.t0);case 13:case"end":return n.stop()}var o}),n,null,[[0,10]])})));return function(e){return n.apply(this,arguments)}}()}(Object(u.a)(Object(u.a)({},s),{},{name:null===g||void 0===g||null===(t=g.result)||void 0===t?void 0:t.name}),h)),f()):(m(function(e,t){return function(){var n=Object(_.a)(P.a.mark((function n(a){var r,c;return P.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,V(e,t);case 3:r=n.sent,c=r.data,a({type:p,payload:c}),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}()}(n,Object(u.a)(Object(u.a)({},s),{},{name:null===g||void 0===g||null===(a=g.result)||void 0===a?void 0:a.name}))),f())},children:[Object(te.jsxs)(L.a,{variant:"h6",children:[n?"Editing":"Creating"," a Memory"]}),Object(te.jsx)(E.a,{name:"title",variant:"outlined",label:"Title",fullWidth:!0,value:s.title,onChange:function(e){return l(Object(u.a)(Object(u.a)({},s),{},{title:e.target.value}))}}),Object(te.jsx)(E.a,{name:"message",variant:"outlined",label:"Message",fullWidth:!0,value:s.message,onChange:function(e){return l(Object(u.a)(Object(u.a)({},s),{},{message:e.target.value}))}}),Object(te.jsx)(E.a,{name:"tags",variant:"outlined",label:"Tags",fullWidth:!0,value:s.tags,onChange:function(e){return l(Object(u.a)(Object(u.a)({},s),{},{tags:e.target.value.split(",")}))}}),Object(te.jsx)("div",{className:b.fileInput,children:Object(te.jsx)(Fe.a,{type:"file",multiple:!1,onDone:function(e){var t=e.base64;return l(Object(u.a)(Object(u.a)({},s),{},{selectedFile:t}))}})}),Object(te.jsx)(W.a,{className:b.buttonSubmit,variant:"contained",color:"primary",size:"large",type:"submit",fullWidth:!0,children:"Submit"}),Object(te.jsx)(W.a,{variant:"contained",color:"secondary",size:"small",onClick:f,fullWidth:!0,children:"Clear"})]})})},Re=n(247),ze=n(244),Je=Object($.a)((function(){return{ul:{justifyContent:"space-around"}}})),He=function(e){var t=e.page,n=Object(o.c)((function(e){return e.posts})).numberOfPages,r=Je(),c=Object(o.b)();return Object(a.useEffect)((function(){t&&c(function(e){return function(){var t=Object(_.a)(P.a.mark((function t(n){var a,r;return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:O}),t.next=4,H(e);case 4:a=t.sent,r=a.data,n({type:b,payload:r}),n({type:x}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0.message);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()}(t))}),[c,t]),Object(te.jsx)(Re.a,{classes:{ul:r.ul},count:n,page:Number(t)||1,variant:"outlined",color:"primary",renderItem:function(e){return Object(te.jsx)(ze.a,Object(u.a)(Object(u.a)({},e),{},{component:S.b,to:"/posts?page=".concat(e.page)}))}})},Me=Object($.a)((function(e){return{appBarSearch:{borderRadius:4,marginBottom:"1rem",display:"flex",padding:"16px"},pagination:{borderRadius:4,marginTop:"1rem",padding:"16px"},gridContainer:Object(X.a)({},e.breakpoints.down("xs"),{flexDirection:"column-reverse"})}}));var Ue=function(){var e=Me(),t=new URLSearchParams(Object(N.h)().search),n=t.get("page")||1,r=t.get("searchQuery"),c=Object(a.useState)(0),i=Object(F.a)(c,2),s=i[0],u=i[1],d=Object(o.b)(),p=Object(a.useState)(""),j=Object(F.a)(p,2),b=j[0],m=j[1],h=Object(a.useState)([]),g=Object(F.a)(h,2),f=g[0],O=g[1],x=Object(N.g)(),v=function(){b.trim()||f?(d(K({search:b,tags:f.join(",")})),x.push("/posts/search?searchQuery=".concat(b||"none","&tags=").concat(f.join(",")))):x.push("/")};return Object(te.jsx)(me.a,{in:!0,children:Object(te.jsx)(k.a,{maxWidth:"xl",children:Object(te.jsxs)(he.a,{container:!0,justifyContent:"space-between",alignItems:"stretch",spacing:3,className:e.gridContainer,children:[Object(te.jsx)(he.a,{item:!0,xs:12,sm:6,md:9,children:Object(te.jsx)(Pe,{setCurrentId:u})}),Object(te.jsxs)(he.a,{item:!0,xs:12,sm:6,md:3,children:[Object(te.jsxs)(oe.a,{className:e.appBarSearch,position:"static",color:"inherit",children:[Object(te.jsx)(E.a,{onKeyDown:function(e){13===e.keyCode&&v()},name:"search",variant:"outlined",label:"Search Memories",fullWidth:!0,value:b,onChange:function(e){return m(e.target.value)}}),Object(te.jsx)(fe.a,{style:{margin:"10px 0"},value:f,onAdd:function(e){return t=e,O([].concat(Object(l.a)(f),[t]));var t},onDelete:function(e){return t=e,O(f.filter((function(e){return e!==t})));var t},label:"Search Tags",variant:"outlined"}),Object(te.jsx)(W.a,{onClick:v,className:e.searchButton,variant:"contained",color:"primary",children:"Search"})]}),Object(te.jsx)(We,{currentId:s,setCurrentId:u}),!r&&!f.length&&Object(te.jsx)(I.a,{className:e.pagination,elevation:6,children:Object(te.jsx)(He,{page:n})})]})]})})})},Ge=n(133),Ve=function(){return Object(te.jsx)("svg",{style:{width:"20px",height:"20px"},viewBox:"0 0 24 24",children:Object(te.jsx)("path",{fill:"currentColor",d:"M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.2,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.1,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.25,22C17.6,22 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1V11.1Z"})})},Ye=n(136),qe=n.n(Ye),Qe=Object($.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center",padding:e.spacing(2)},root:{"& .MuiTextField-root":{margin:e.spacing(1)}},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)},googleButton:{marginBottom:e.spacing(2)}}})),Ke=n(241),Ze=n(242),Xe=n(134),$e=n.n(Xe),et=n(135),tt=n.n(et),nt=function(e){var t=e.name,n=e.handleChange,a=e.label,r=e.half,c=e.autoFocus,o=e.type,i=e.handleShowPassword;return Object(te.jsx)(he.a,{item:!0,xs:12,sm:r?6:12,children:Object(te.jsx)(E.a,{name:t,onChange:n,variant:"outlined",required:!0,fullWidth:!0,label:a,autoFocus:c,type:o,InputProps:"password"===t?{endAdornment:Object(te.jsx)(Ke.a,{position:"end",children:Object(te.jsx)(Ze.a,{onClick:i,children:"password"===o?Object(te.jsx)($e.a,{}):Object(te.jsx)(tt.a,{})})})}:null})})},at={firstName:"",lastName:"",email:"",password:"",confirmPassword:""},rt=function(){var e=Qe(),t=Object(a.useState)(!1),n=Object(F.a)(t,2),r=n[0],c=n[1],i=Object(a.useState)(!1),s=Object(F.a)(i,2),l=s[0],d=s[1],p=Object(a.useState)(at),j=Object(F.a)(p,2),b=j[0],m=j[1],h=Object(o.b)(),g=Object(N.g)(),f=function(e){m(Object(u.a)(Object(u.a)({},b),{},Object(X.a)({},e.target.name,e.target.value)))},O=function(){var e=Object(_.a)(P.a.mark((function e(t){var n,a;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=null===t||void 0===t?void 0:t.profileObj,a=null===t||void 0===t?void 0:t.tokenId;try{h({type:"AUTH",data:{result:n,token:a}}),g.push("/")}catch(r){console.log(r)}case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(te.jsx)(k.a,{component:"main",maxWidth:"xs",children:Object(te.jsxs)(I.a,{className:e.paper,elevation:3,children:[Object(te.jsx)(se.a,{className:e.avatar,children:Object(te.jsx)(qe.a,{})}),Object(te.jsx)(L.a,{variant:"h5",children:r?"Sign Up":"Sign In"}),Object(te.jsxs)("form",{className:e.form,onSubmit:function(e){e.preventDefault(),h(r?function(e,t){return function(){var n=Object(_.a)(P.a.mark((function n(a){var r,c;return P.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Q(e);case 3:r=n.sent,c=r.data,a({type:v,data:c}),t.push("/"),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}()}(b,g):function(e,t){return function(){var n=Object(_.a)(P.a.mark((function n(a){var r,c;return P.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,q(e);case 3:r=n.sent,c=r.data,a({type:v,data:c}),t.push("/"),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}()}(b,g))},children:[Object(te.jsxs)(he.a,{container:!0,spacing:2,children:[r&&Object(te.jsxs)(te.Fragment,{children:[Object(te.jsx)(nt,{name:"firstName",label:"First Name",handleChange:f,autoFocus:!0,xs:6}),Object(te.jsx)(nt,{name:"lastName",label:"Last Name",handleChange:f,autoFocus:!0,xs:6})]}),Object(te.jsx)(nt,{name:"email",label:"Email Address",handleChange:f,type:"email"}),Object(te.jsx)(nt,{name:"password",label:"Password",handleChange:f,type:l?"text":"password",handleShowPassword:function(){return d((function(e){return!e}))}}),r&&Object(te.jsx)(nt,{name:"confirmPassword",label:"Repeat Password",handleChange:f,type:"password"})]}),Object(te.jsx)(W.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,children:r?"Sign Up":"Sign in"}),Object(te.jsx)(Ge.GoogleLogin,{clientId:"93807016371-fjslq49ugmd26b2uarr59gl8fge0b7jh.apps.googleusercontent.com",render:function(t){return Object(te.jsx)(W.a,{className:e.googleButton,color:"primary",fullWidth:!0,onClick:t.onClick,disabled:t.disabled,startIcon:Object(te.jsx)(Ve,{}),variant:"contained",children:"Google Sign In"})},onSuccess:O,onFailure:function(){console.log("Google Sign in was unsuccessful.  Try Again Later")},cookiePolicy:"single_host_origin"}),Object(te.jsx)(he.a,{container:!0,justifyContent:"flex-end",children:Object(te.jsx)(he.a,{item:!0,children:Object(te.jsx)(W.a,{onClick:function(){c((function(e){return!e})),d(!1)},children:r?"Already have an account? Sign in":"Don't have an account? Sign up"})})})]})]})})},ct=function(){var e=JSON.parse(localStorage.getItem("profile"));return Object(te.jsx)(S.a,{children:Object(te.jsxs)(k.a,{maxWidth:"xl",children:[Object(te.jsx)(be,{}),Object(te.jsxs)(N.d,{children:[Object(te.jsx)(N.b,{path:"/",exact:!0,component:function(){return Object(te.jsx)(N.a,{to:"/posts"})}}),Object(te.jsx)(N.b,{path:"/posts",exact:!0,component:Ue}),Object(te.jsx)(N.b,{path:"/posts/search",exact:!0,component:Ue}),Object(te.jsx)(N.b,{path:"/posts/:id",exact:!0,component:ce}),Object(te.jsx)(N.b,{path:"/auth",exact:!0,component:function(){return e?Object(te.jsx)(N.a,{to:"/posts"}):Object(te.jsx)(rt,{})}})]})]})})},ot=(n(202),Object(i.d)(C,Object(i.c)(Object(i.a)(s.a))));c.a.render(Object(te.jsx)(o.a,{store:ot,children:Object(te.jsx)(ct,{})}),document.getElementById("root"))}},[[203,1,2]]]);
//# sourceMappingURL=main.675976a8.chunk.js.map