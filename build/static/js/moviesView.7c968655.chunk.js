"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[971],{2010:function(e,t,r){r.d(t,{Z:function(){return c}});var n={wrapper:"Error_wrapper__Wc1dD",message:"Error_message__Yybg9"},a=r(1284),s=r(184);var c=function(e){var t=e.message;return(0,s.jsxs)("div",{role:"alert",className:n.wrapper,children:[(0,s.jsx)("img",{src:a,width:"650",alt:"not found pic",className:n.img}),(0,s.jsx)("p",{text:t,className:n.message,children:t})]})}},907:function(e,t,r){r.d(t,{Z:function(){return p}});var n=r(1523),a="MoviesListItem_listItem__xJPuT",s="MoviesListItem_poster__IvMQJ",c="MoviesListItem_title__n4mMR",u=r(4757),o=r(184),i=function(e){var t=e.poster,r=e.id,i=e.title,l=e.name,p=e.releaseDate,f=e.url,h=e.location;return(0,o.jsx)("li",{className:a,children:(0,o.jsxs)(n.rU,{to:{pathname:"".concat(f,"/").concat(r),state:{from:h}},children:[(0,o.jsx)("img",{src:t?"https://image.tmdb.org/t/p/w500/".concat(t):u,alt:i||l,className:s}),(0,o.jsxs)("h2",{className:c,children:[i||l,p&&(0,o.jsxs)("span",{children:[" (",p.slice(0,4),")"]})]})]})})},l="MoviesList_list__NF6km",p=function(e){var t=e.movies,r=e.url,n=e.location;return(0,o.jsx)("ul",{className:l,children:t.map((function(e){var t=e.title,a=e.name,s=e.poster_path,c=e.id,u=e.release_date;return(0,o.jsx)(i,{title:t,name:a,releaseDate:u,id:c,poster:s,url:r,location:n},c)}))})}},5886:function(e,t){t.Z={IDLE:"idle",PENDING:"pending",RESOLVED:"resolved",REJECTED:"rejected"}},1508:function(e,t,r){r.d(t,{Hx:function(){return f},hd:function(){return l},vw:function(){return i},wr:function(){return o},xc:function(){return p}});var n=r(5861),a=r(7757),s=r.n(a),c=r(4569),u=r.n(c);u().defaults.baseURL="https://api.themoviedb.org/3",u().defaults.params={api_key:"566ba5d0201ff094da11311999c70e6f"};var o=function(){var e=(0,n.Z)(s().mark((function e(){var t,r,n,a=arguments;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:1,e.next=3,u().get("/trending/all/day?page=".concat(t));case 3:return r=e.sent,n=r.data,e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,n.Z)(s().mark((function e(t){var r,n,a,c=arguments;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=c.length>1&&void 0!==c[1]?c[1]:1,e.next=3,u().get("/search/movie?language=en-US&page=".concat(r,"&include_adult=false&query=").concat(t));case 3:return n=e.sent,a=n.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u().get("/movie/".concat(t));case 3:if(200!==(r=e.sent).status){e.next=7;break}return console.log("result",r.status),e.abrupt("return",r.data);case 7:e.next=12;break;case 9:throw e.prev=9,e.t0=e.catch(0),e.t0;case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u().get("/movie/".concat(t,"/credits"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u().get("/movie/".concat(t,"/reviews"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},1076:function(e,t,r){r.r(t),r.d(t,{default:function(){return j}});var n=r(1413),a=r(5861),s=r(885),c=r(7757),u=r.n(c),o=r(2791),i=r(8931),l=r(59),p=r(1508),f=r(5886),h=r(6960),m="Searchbar_Searchbar__sENQA",d="Searchbar_SearchForm__dXv74",v="Searchbar_SearchFormButton__THQ95",x="Searchbar_SearchFormButtonLabel__Rje4-",_=r(184);var g=function(e){var t=e.onSubmit,r=(0,o.useState)(""),n=(0,s.Z)(r,2),a=n[0],c=n[1];return(0,_.jsx)(_.Fragment,{children:(0,_.jsxs)("form",{className:m,onSubmit:function(e){e.preventDefault(),""!==a.trim()?(t(a),c("")):h.Am.info("Enter the name of movie to search ")},children:[(0,_.jsx)("input",{className:d,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies",onChange:function(e){var t=e.currentTarget;c(t.value)}}),(0,_.jsx)("button",{type:"submit",className:v,children:(0,_.jsx)("span",{className:x,children:"Search"})})]})})},w=r(907),Z=r(6675),b=r(2010),E="Movies_wrapper__j22Of";var j=function(){var e,t=(0,i.k6)(),r=(0,i.TH)(),c=(0,i.$B)().url,h=(0,o.useState)(0),m=(0,s.Z)(h,2),d=m[0],v=m[1],x=(0,o.useState)(f.Z.IDLE),j=(0,s.Z)(x,2),S=j[0],N=j[1],k=(0,o.useState)(null),D=(0,s.Z)(k,2),y=D[0],L=D[1],R=(0,o.useState)(null),I=(0,s.Z)(R,2),C=I[0],F=I[1],T=(0,o.useState)(""),M=(0,s.Z)(T,2),J=M[0],P=M[1],B=null!==(e=new URLSearchParams(r.search).get("page"))&&void 0!==e?e:1;return(0,o.useEffect)((function(){if(""!==r.search){var e=new URLSearchParams(r.search).get("query");P(e,B)}}),[r.search,B]),(0,o.useEffect)((function(){if(J){var e=function(){var e=(0,a.Z)(u().mark((function e(){var t,r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return N(f.Z.PENDING),e.prev=1,e.next=4,(0,p.vw)(J,B);case 4:if(t=e.sent,r=t.results,n=t.total_pages,0!==r.length){e.next=11;break}return F('Nothing was found for your search "'.concat(J,'"')),N(f.Z.REJECTED),e.abrupt("return");case 11:L(r),v(n),N(f.Z.RESOLVED),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(1),N(f.Z.REJECTED);case 19:case"end":return e.stop()}}),e,null,[[1,16]])})));return function(){return e.apply(this,arguments)}}();e()}}),[J,B]),(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(g,{onSubmit:function(e){J!==e&&(P(e),L(null),F(null),N(f.Z.IDLE),t.push((0,n.Z)((0,n.Z)({},r),{},{search:"query=".concat(e,"&page=1")})))}}),S===f.Z.PENDING&&(0,_.jsx)(Z.Z,{}),S===f.Z.RESOLVED&&(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(w.Z,{movies:y,url:c,location:r}),d>1&&(0,_.jsx)("div",{className:E,children:(0,_.jsx)(l.Z,{count:d,onChange:function(e,a){t.push((0,n.Z)((0,n.Z)({},r),{},{search:"query=".concat(J,"&page=").concat(a)}))},page:Number(B),showFirstButton:!0,showLastButton:!0})})]}),S===f.Z.REJECTED&&C&&(0,_.jsx)(b.Z,{message:C})]})}},4757:function(e,t,r){e.exports=r.p+"static/media/no-poster.31ee8645a0c24dadecaf.jpg"},1284:function(e,t,r){e.exports=r.p+"static/media/not-found.f9d5f7d5b86e8fe73adc.jpg"}}]);
//# sourceMappingURL=moviesView.7c968655.chunk.js.map