(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[601],{1884:function(t,n,r){"use strict";var e=r(5893),i=new Map,o=function(t,n){return Math.round(t+Math.random()*(n-t))},a=function(){var t=o(150,220),n=o(150,220);return"#".concat([t,n,Math.min(3*Math.round(185)-t-n,220)].map(function(t){return t.toString(16)}).join(""))},s=function(t){if(!i.has(t)){var n=a();i.set(t,n)}},l=function(t){var n=t.tag;return s(n),(0,e.jsx)("div",{style:{backgroundColor:i.get(n),whiteSpace:"nowrap",borderRadius:"10px",paddingLeft:"0.5rem",paddingRight:"0.5rem",width:"fit-content",marginRight:"0.5rem",fontSize:"15px",fontWeight:"bold",display:"inline-block"},children:n})};n.Z=l},6650:function(t,n,r){"use strict";r.r(n),r.d(n,{__N_SSG:function(){return g},default:function(){return m}});var e=r(9499),i=r(4141),o=r(1884),a=r(5893);function s(t,n){(null==n||n>t.length)&&(n=t.length);for(var r=0,e=Array(n);r<n;r++)e[r]=t[r];return e}var l=i.ZP.div.withConfig({displayName:"SolutionCard__Wrapper",componentId:"sc-e1a8yg-0"})(['font-family:"Inconsolata";display:flex;flex-direction:row;margin-bottom:1rem;']),u=i.ZP.div.withConfig({displayName:"SolutionCard__InfoWrapper",componentId:"sc-e1a8yg-1"})(["width:100%;height:100%;display:flex;flex-direction:row;padding:0.5rem;"]);i.ZP.div.withConfig({displayName:"SolutionCard__HorizontalSplit",componentId:"sc-e1a8yg-2"})(["overflow:hidden;display:flex;flex-direction:row;"]);var c=i.ZP.span.withConfig({displayName:"SolutionCard__Title",componentId:"sc-e1a8yg-3"})(["font-size:18px;"]),d=i.ZP.div.withConfig({displayName:"SolutionCard__InfoContent",componentId:"sc-e1a8yg-4"})(["width:100%;"]),f=function(t){var n,r=function(t,n){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,n){if(t){if("string"==typeof t)return s(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);if("Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return s(t,n)}}(t))){r&&(t=r);var e=0,i=function(){};return{s:i,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:i}}throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,l=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return a=t.done,t},e:function(t){l=!0,o=t},f:function(){try{a||null==r.return||r.return()}finally{if(l)throw o}}}}(t.split(/\/+/));try{for(r.s();!(n=r.n()).done;){var e=n.value;if(e.endsWith(".com"))return e.slice(0,e.search(/.com/))}}catch(i){r.e(i)}finally{r.f()}return"Link"},h=function(t){var n=t.slug,r=t.title,i=t.url,s=t.tags,h=t.languages,$=(t.date,t.prefix),p=f(i);return(0,a.jsx)(l,{className:"soft-shadow",width:"100%",children:(0,a.jsxs)(u,{width:"100%",children:[(0,a.jsx)(d,{style:{},children:(0,a.jsxs)("a",{style:{color:"unset",textDecoration:"none"},href:(void 0===$?"/solutions/":$)+n,children:[(0,a.jsx)(c,{children:r}),(0,a.jsxs)("div",{children:[s.map(function(t,n){return(0,a.jsx)(o.Z,{tag:t},n)}),h.map(function(t,n){return(0,a.jsx)(o.Z,{tag:t},n)})]})]})}),(0,a.jsx)("div",{style:{float:"right",width:"fit-content",display:"flex"},children:(0,a.jsx)("div",{style:(0,e.Z)({margin:"auto",whiteSpace:"pre"},"margin","auto"),children:(0,a.jsxs)("a",{href:i,children:[p," ⧉"]})})})]})})},$=r(4092),p=r(7959),g=!0,m=function(t){var n=t.posts;return(0,a.jsx)(p.Y,{children:(0,a.jsxs)($.Z,{children:[(0,a.jsx)("div",{style:{marginBottom:"1rem",width:"100%",textAlign:"center"},children:(0,a.jsx)("i",{children:"The posts below are just code at the moment. Editorials are a work in progress!"})}),n.map(function(t,n){return(0,a.jsx)(h,{slug:t.slug,title:t.frontmatter.title,tags:t.frontmatter.tags,url:t.frontmatter.url,languages:t.frontmatter.languages,date:t.frontmatter.date,author:t.frontmatter.author},n)})]})})}},4069:function(t,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/solutions",function(){return r(6650)}])}},function(t){t.O(0,[141,774,888,179],function(){return t(t.s=4069)}),_N_E=t.O()}]);