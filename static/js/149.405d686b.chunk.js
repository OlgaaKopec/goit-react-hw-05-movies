"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[149],{494:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(87),i=n(184),u=function(e){var t=e.movie;return(0,i.jsxs)("div",{children:[(0,i.jsx)("h3",{children:t.title}),(0,i.jsx)(r.rU,{to:"/movies/".concat(t.id),children:"More details"})]})},c=function(e){var t=e.movies;return(0,i.jsx)("div",{children:t.map((function(e){return(0,i.jsx)(u,{movie:e},e.id)}))})}},149:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var r=n(861),i=n(439),u=n(757),c=n.n(u),o=n(791),a=n(87),s=n(759),f=n(184),v=function(e){var t=e.onSubmit,n=(0,o.useState)(""),r=(0,i.Z)(n,2),u=r[0],c=r[1];return(0,f.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(u),c("")},children:[(0,f.jsx)("input",{type:"text",value:u,onChange:function(e){c(e.target.value)}}),(0,f.jsx)("button",{type:"submit",children:"Search"})]})},l=n(494),h=function(){var e=(0,o.useState)([]),t=(0,i.Z)(e,2),n=t[0],u=t[1],h=(0,a.lr)(),d=(0,i.Z)(h,2),p=d[0],m=d[1],x=p.get("query")||"";(0,o.useEffect)((function(){if(x){var e=function(){var e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("https://api.themoviedb.org/3/search/movie?api_key=0c9852925fc46007f1157388b4da307f&query=".concat(x));case 3:t=e.sent,u(t.data.results),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("Error fetching movies:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}}),[x]);return(0,f.jsxs)("div",{children:[(0,f.jsx)(v,{onSubmit:function(e){m({query:e})}}),(0,f.jsx)(l.Z,{movies:n})]})}}}]);
//# sourceMappingURL=149.405d686b.chunk.js.map