"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[779],{241:function(n,t,e){e.d(t,{Bt:function(){return h},DD:function(){return p},Tg:function(){return i},on:function(){return s},y:function(){return f}});var r=e(861),a=e(687),u=e.n(a),o=e(263),c="88e21d85616f2eea57c4948e250da063",i=function(){var n=(0,r.Z)(u().mark((function n(){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("https://api.themoviedb.org/3/trending/all/day",{params:{api_key:c}});case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("https://api.themoviedb.org/3/search/movie",{params:{query:t,api_key:c}});case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("https://api.themoviedb.org/3/movie/".concat(t),{params:{api_key:c}});case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/credits"),{params:{api_key:c}});case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews"),{params:{api_key:c}});case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},779:function(n,t,e){e.r(t),e.d(t,{default:function(){return w}});var r,a,u,o=e(861),c=e(439),i=e(687),s=e.n(i),p=e(791),f=e(689),h=e(241),l=e(168),d=e(934),v=d.Z.p(r||(r=(0,l.Z)(["\n  font-size: 30px;\n  font-weight: 600;\n  color: orangered;\n\n  margin-bottom: 5px;\n"]))),m=d.Z.p(a||(a=(0,l.Z)(["\n  font-size: 20px;\n  font-weight: 400;\n  margin-bottom: 15px;\n  color: black;\n  line-height: 25px;\n\n  letter-spacing: 0em;\n"]))),x=d.Z.p(u||(u=(0,l.Z)(["\n  font-size: 30px;\n  font-weight: 500;\n  margin-bottom: 5px;\n  color: orangered;\n  line-height: 30px;\n  text-align: center;\n"]))),g=e(184);function w(){var n=(0,p.useState)([]),t=(0,c.Z)(n,2),e=t[0],r=t[1],a=(0,f.UO)().moviesId;return(0,p.useEffect)((function(){function n(){return(n=(0,o.Z)(s().mark((function n(){var t;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,h.Bt)(a);case 3:t=n.sent,r(t.results),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[a]),(0,g.jsx)(g.Fragment,{children:0!==e.length?(0,g.jsx)("ul",{children:e.map((function(n){var t=n.id,e=n.author,r=n.content;return(0,g.jsxs)("li",{children:[(0,g.jsxs)(v,{children:[" Author: ",e]}),(0,g.jsx)(m,{children:r})]},t)}))}):(0,g.jsx)(x,{children:"Reviews not found"})})}}}]);
//# sourceMappingURL=779.cd28d503.chunk.js.map