(this["webpackJsonpgg-test"]=this["webpackJsonpgg-test"]||[]).push([[0],{72:function(e,t,n){},81:function(e,t,n){},84:function(e,t,n){"use strict";n.r(t);var a=n(3),r=n(0),c=n(14),i=n.n(c),o=(n(72),n(51)),s=n(52),u=n(64),d=n(63),l=n(20),b=n(21),p=n.n(b),j=n(36),h=n(45),g=n(17),m="UPDATE_SEARCH",O="SEARCH",x="ERROR",f=n(119),v=n(113),k=n(115),w=n(117),y=n(116),N=n(126),_=n(55),P=n.n(_),C=n(37),S=n(118),R=Object(f.a)((function(e){return{root:{width:"100%",maxWidth:"100%",backgroundColor:e.palette.background.paper,marginTop:10,left:"50%",transform:"translate(-50% , 0%)",padding:15,textAlign:"center"},list_item_wrapper:{width:"100%",maxWidth:"50%",backgroundColor:e.palette.background.paper,marginTop:10,marginLeft:"50%",transform:"translate(-50% , 0%)",border:"1px solid #eaeaea",padding:15,textAlign:"center"},list_item:{width:"100%",maxWidth:"100%",backgroundColor:e.palette.background.paper,marginTop:10,padding:15,textAlign:"center"},subText:{display:"inline-block",width:"100%",maxWidth:"70%",backgroundColor:e.palette.background.paper,marginTop:10,color:"#464646",textAlign:"center"}}})),T=function(e){var t=e.list,n=R();return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(v.a,{className:n.root,children:(t||[]).map((function(e){return Object(a.jsxs)("div",{className:n.list_item_wrapper,children:[Object(a.jsxs)(k.a,{className:n.list_item,children:[Object(a.jsx)(y.a,{children:Object(a.jsx)(N.a,{children:Object(a.jsx)(P.a,{})})}),Object(a.jsx)(w.a,{primary:e.book_title,secondary:Object(a.jsxs)(C.a,{component:"span",variant:"body2",color:"textPrimary",children:[Object(a.jsx)("strong",{children:"Author(s):"})," ",e.book_author]})})]}),Object(a.jsx)(S.a,{}),Object(a.jsxs)(C.a,{className:n.subText,variant:"body2",children:[Object(a.jsx)("strong",{children:"Location:"})," ",e.book_publication_city,", ",e.book_publication_country,"\xa0"]}),Object(a.jsxs)(C.a,{className:n.subText,variant:"body2",children:[Object(a.jsx)("strong",{children:"Year:"})," ",e.book_publication_year,"\xa0"]}),Object(a.jsxs)(C.a,{className:n.subText,variant:"body2",children:[Object(a.jsx)("strong",{children:"Pages:"})," ",e.book_pages]})]},e.id)}))})})},E=n(125),L=n(120),I=n(121),A=n(124),U=n(8),B=n(56),W=n.n(B),D=n(57),X=n.n(D),H=n(122),J=n(123);var F=Object(f.a)((function(e){return{root:{marginTop:0,flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(l.a)({flexGrow:1,display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(l.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(U.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(U.b)(e.palette.common.white,.25)},marginLeft:0,marginRight:10,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(l.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}}),selector:Object(l.a)({position:"relative",display:"inline-flex",height:"1rem",width:"auto",padding:1,alignItems:"baseline",marginLeft:"50%"},e.breakpoints.down("sm"),{width:"50vw",padding:10,alignItems:"baseline",marginLeft:"25vw",marginTop:20}),pagination:{width:"50%",maxWidth:"50%",backgroundColor:e.palette.background.paper,marginTop:10,marginLeft:"50%",transform:"translate(-50% , 0%)",padding:5}}})),G=Object(g.b)((function(e){return{num:e.num,data:e.data,error:e.error,page:e.page,text:e.text,itemsPerPage:e.itemsPerPage}}),(function(e){return{onSearchBooks:function(t,n,a){return e(function(e,t,n){return function(a){return fetch("http://nyx.vima.ekt.gr:3000/api/books",{method:"POST",body:JSON.stringify({page:t,itemsPerPage:n,filters:[{type:"all",values:[e]}]}),headers:{"Content-type":"application/json; charset=UTF-8"}}).then((function(e){return e.json()})).then((function(r){return a({type:"SEARCH",data:r,text:e,page:t,itemsPerPage:n,isLoading:!1})})).catch((function(e){return a({type:"ERROR",msg:"Unable to fetch data",err:e})}))}}(t,n,a))},onSearchUpdate:function(t){return e(function(e){return{type:m,text:e}}(t))}}}))((function(e){var t=e.onSearchUpdate,n=e.onSearchBooks,c=Object(r.useState)(""),i=Object(h.a)(c,2),o=i[0],s=i[1],u=Object(r.useState)(!0),d=Object(h.a)(u,2),l=d[0],b=d[1],m=F(),O=(Object(g.c)((function(e){return e.text})),Object(g.c)((function(e){return e.search.data.books}))),x=Object(g.c)((function(e){return e.search.data.count})),f=Object(g.c)((function(e){return e.search.page})),v=Object(g.c)((function(e){return e.search.itemsPerPage})),k=function(){var e=Object(j.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(!0),e.next=3,n(o.term,Number(f),Number(v));case 3:e.sent&&b(!1);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(j.a)(p.a.mark((function e(t,a){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(!0),e.next=3,n(o.term,Number(a),Number(v));case 3:e.sent&&b(!1);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),y=function(){var e=Object(j.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(!0),e.next=3,n(o.term,1,Number(t.target.value));case 3:e.sent&&b(!1);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsxs)("div",{className:m.root,children:[Object(a.jsx)(E.a,{position:"static",children:Object(a.jsxs)(L.a,{children:[Object(a.jsx)(I.a,{edge:"start",className:m.menuButton,color:"inherit","aria-label":"open drawer",children:Object(a.jsx)(W.a,{})}),Object(a.jsx)(C.a,{className:m.title,variant:"h6",noWrap:!0,children:"Books API Search"}),Object(a.jsxs)("div",{className:m.search,children:[Object(a.jsx)("div",{className:m.searchIcon,children:Object(a.jsx)(X.a,{})}),Object(a.jsx)(A.a,{placeholder:"Search\u2026",classes:{root:m.inputRoot,input:m.inputInput},inputProps:{"aria-label":"search"},onChange:function(e){return function(e){s({term:e.target.value}),t(e.target.value)}(e)}})]}),Object(a.jsx)("div",{children:Object(a.jsx)(H.a,{id:"search-button",variant:"contained",color:"default",onClick:k,children:"Search"})})]})}),Object(a.jsxs)("div",{children:[l&&0!==x&&Object(a.jsxs)("div",{className:"loader-container",children:[Object(a.jsx)("div",{className:"loader"}),Object(a.jsx)("p",{children:"Loading data..."})]}),!l&&0!==x&&Object(a.jsxs)("div",{className:m.selector,children:[Object(a.jsx)("p",{children:"Items per Page: \xa0 "}),Object(a.jsx)("select",{className:l?"inactive":"active",onChange:y,value:v,children:[5,10,20,40,50,100].map((function(e){return Object(a.jsx)("option",{value:e,children:e},e)}))})]}),!l&&Object(a.jsx)(T,{list:O}),!l&&0!==x&&Object(a.jsx)(J.a,{className:m.pagination,count:Math.ceil(Number(x/v)),page:f,siblingCount:1,boundaryCount:1,variant:"outlined",shape:"rounded",color:"primary",onChange:w})]})]})})),V=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(a.jsx)("section",{children:Object(a.jsx)(G,{})})}}]),n}(r.Component);n(81);var M=function(){return Object(a.jsx)("div",{className:"app",children:Object(a.jsx)(V,{})})},Y=n(13),q=n(58),z=n(59),K=n(22),Q={num:0,data:{books:[],count:0},page:1,itemsPerPage:5,error:"",text:"",isLoading:!0},Z=n(62),$=n(60),ee=n.n($),te=n(61),ne=n.n(te),ae=Object(Y.c)({search:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return Object(K.a)(Object(K.a)({},e),{},{text:t.text});case O:return Object(K.a)(Object(K.a)({},e),{},{data:t.data,page:t.page,itemsPerPage:t.itemsPerPage,isLoading:!1});case x:return Object(K.a)(Object(K.a)({},e),{},{error:t.msg});default:return e}}}),re={key:"root",storage:ee.a,stateReconciler:ne.a},ce=Object(Z.a)(re,ae),ie=Object(z.createLogger)(),oe=Object(Y.a)(q.a,ie)(Y.d)(ce,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());oe.subscribe((function(){return console.log(oe.getState())})),i.a.render(Object(a.jsx)(g.a,{store:oe,children:Object(a.jsx)(M,{})}),document.getElementById("root"))}},[[84,1,2]]]);
//# sourceMappingURL=main.8779e2e4.chunk.js.map