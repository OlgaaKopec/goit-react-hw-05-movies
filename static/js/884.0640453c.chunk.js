"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[884],{884:function(e,t,r){r.r(t);var s=r(861),n=r(439),i=r(757),a=r.n(i),o=r(791),c=r(689),l=r(87),d=r(759),h=r(184);t.default=function(){var e,t,r=(0,c.UO)().movieId,i=(0,c.TH)(),p=(0,c.s0)(),u=(0,o.useState)(),f=(0,n.Z)(u,2),v=f[0],m=f[1];if((0,o.useEffect)((function(){var e=function(){var e=(0,s.Z)(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.Z.get("https://api.themoviedb.org/3/movie/".concat(r,"?api_key=0c9852925fc46007f1157388b4da307f"));case 3:t=e.sent,m(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("Error fetching movie details:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[r]),!v)return(0,h.jsx)("div",{children:"Loading..."});return(0,h.jsxs)("div",{children:[(0,h.jsx)("button",{className:"button",onClick:function(){i.state&&i.state.from?p(i.state.from):p("/")},children:"Go back"}),(0,h.jsx)("h2",{children:v.title}),(0,h.jsx)("img",{src:v.poster_path?"https://image.tmdb.org/t/p/w500/".concat(v.poster_path):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",width:250,alt:"poster"}),(0,h.jsx)("p",{children:v.overview}),(0,h.jsxs)("ul",{children:[(0,h.jsx)("li",{children:(0,h.jsx)(l.rU,{to:"cast",state:{from:null===(e=i.state)||void 0===e?void 0:e.from},children:"Cast"})}),(0,h.jsx)("li",{children:(0,h.jsx)(l.rU,{to:"reviews",state:{from:null===(t=i.state)||void 0===t?void 0:t.from},children:"Reviews"})})]}),(0,h.jsx)(o.Suspense,{fallback:(0,h.jsx)("div",{children:"Loading..."}),children:(0,h.jsx)(c.j3,{})})]})}}}]);
//# sourceMappingURL=884.0640453c.chunk.js.map