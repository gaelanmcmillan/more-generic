(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[601],{1884:function(t,n,r){"use strict";r.d(n,{hj:function(){return d},kf:function(){return f},y9:function(){return g}});var e=r(7294),i=r(5893);function o(t,n){(null==n||n>t.length)&&(n=t.length);for(var r=0,e=Array(n);r<n;r++)e[r]=t[r];return e}var a=new Map,l=function(t,n){return Math.round(t+Math.random()*(n-t))},u=function(){var t=l(150,220),n=l(150,220);return"#".concat([t,n,Math.min(3*Math.round(185)-t-n,220)].map(function(t){return t.toString(16)}).join(""))},c=function(t){if(!a.has(t)){var n=u();a.set(t,n)}},f=function(){var t=(0,e.useState)([]),n=t[0],r=t[1],i=function(t){return function(e){e.stopPropagation(),n.includes(t)||r(n.concat(t))}},o=function(t){return function(e){e.stopPropagation(),r(n.filter(function(n){return n!=t}))}};return[n,function(){r([])},i,o]},s=function(t){var n=t.text,r=t.bgColor,e=t.onClick;return(0,i.jsx)("div",{onClick:e,style:{fontFamily:"Inconsolata",cursor:"pointer",backgroundColor:r,whiteSpace:"nowrap",borderRadius:"10px",paddingLeft:"0.5rem",paddingRight:"0.5rem",width:"fit-content",marginRight:"0.5rem",fontSize:"15px",fontWeight:"bold",display:"inline-block"},children:n})},d=function(t,n){var r,e=function(t,n){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,n){if(t){if("string"==typeof t)return o(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);if("Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(t,n)}}(t))){r&&(t=r);var e=0,i=function(){};return{s:i,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:i}}throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,l=!0,u=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return l=t.done,t},e:function(t){u=!0,a=t},f:function(){try{l||null==r.return||r.return()}finally{if(u)throw a}}}}(n);try{for(e.s();!(r=e.n()).done;){var i=r.value;if(!t.includes(i))return!1}}catch(a){e.e(a)}finally{e.f()}return!0},g=function(t){var n=t.tagList,r=t.clearListCallback,e=t.removeTagCallback;return(0,i.jsxs)("div",{style:{marginBottom:"1rem"},children:[0!==n.length?(0,i.jsx)(s,{text:"Clear All Tags",bgColor:"#CC99AA",onClick:r}):(0,i.jsx)(i.Fragment,{}),n.map(function(t){return(0,i.jsx)($,{tag:t,onClick:e(t)})})]})},$=function(t){var n=t.tag,r=t.onClick;t.registerColorCallback,t.getColor,c(n);var e=a.get(n);return(0,i.jsx)(s,{text:n,onClick:r,bgColor:e})};n.ZP=$},6650:function(t,n,r){"use strict";r.r(n),r.d(n,{__N_SSG:function(){return _},default:function(){return x}});var e=r(2640),i=r(9499),o=r(4141),a=r(1884),l=r(1664),u=r.n(l),c=r(5893);function f(t,n){(null==n||n>t.length)&&(n=t.length);for(var r=0,e=Array(n);r<n;r++)e[r]=t[r];return e}var s={easy:"#99BB99",medium:"#e8cb80",hard:"#bf7365"},d=o.ZP.div.withConfig({displayName:"SolutionCard__Wrapper",componentId:"sc-e1a8yg-0"})(['font-family:"Inconsolata";display:flex;flex-direction:row;margin-bottom:1rem;']),g=o.ZP.div.withConfig({displayName:"SolutionCard__InfoWrapper",componentId:"sc-e1a8yg-1"})(["width:100%;height:100%;display:flex;flex-direction:row;padding:0.5rem;padding-left:0.75rem;"]);o.ZP.div.withConfig({displayName:"SolutionCard__HorizontalSplit",componentId:"sc-e1a8yg-2"})(["overflow:hidden;display:flex;flex-direction:row;"]);var $=o.ZP.span.withConfig({displayName:"SolutionCard__Title",componentId:"sc-e1a8yg-3"})(["font-size:18px;width:100%;"]),h=o.ZP.div.withConfig({displayName:"SolutionCard__InfoContent",componentId:"sc-e1a8yg-4"})(["width:100%;"]),m=function(t){var n,r=function(t,n){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,n){if(t){if("string"==typeof t)return f(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);if("Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return f(t,n)}}(t))){r&&(t=r);var e=0,i=function(){};return{s:i,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:i}}throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,l=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return a=t.done,t},e:function(t){l=!0,o=t},f:function(){try{a||null==r.return||r.return()}finally{if(l)throw o}}}}(t.split(/\/+/));try{for(r.s();!(n=r.n()).done;){var e=n.value;if(e.endsWith(".com"))return e.slice(0,e.search(/.com/))}}catch(i){r.e(i)}finally{r.f()}return"Link"},p=function(t){var n=t.slug,r=t.title,e=t.url,o=t.tags,l=t.languages,f=(t.date,t.difficulty),p=t.prefix,y=t.addTagCallback,v=m(e);return(0,c.jsx)(d,{className:"soft-shadow",width:"100%",children:(0,c.jsxs)(g,{width:"100%",style:{borderLeft:"5px solid ".concat(s[f]),borderRadius:"0.5rem"},children:[(0,c.jsx)(u(),{href:(void 0===p?"/solutions/":p)+n,children:(0,c.jsxs)(h,{style:{cursor:"pointer"},children:[(0,c.jsx)($,{children:r}),(0,c.jsxs)("div",{children:[o.map(function(t,n){return(0,c.jsx)(a.ZP,{tag:t,onClick:y(t)},n)}),l.map(function(t,n){return(0,c.jsx)(a.ZP,{tag:t,onClick:y(t)},n)})]})]})}),(0,c.jsx)("div",{style:{float:"right",width:"fit-content",display:"flex"},children:(0,c.jsx)("div",{style:(0,i.Z)({margin:"auto",whiteSpace:"pre"},"margin","auto"),children:(0,c.jsxs)("a",{href:e,children:[v," ⧉"]})})})]})})},y=r(4092),v=r(7959),_=!0,x=function(t){var n=t.posts,r=(0,a.kf)(),i=(0,e.Z)(r,4),o=i[0],l=i[1],u=i[2],f=i[3];return(0,c.jsx)(v.Y,{children:(0,c.jsxs)(y.Z,{children:[(0,c.jsx)("div",{style:{marginBottom:"1rem",width:"100%",textAlign:"center"},children:(0,c.jsx)("i",{children:"Click on tags to filter solutions by category or language."})}),(0,c.jsx)(a.y9,{tagList:o,clearListCallback:l,removeTagCallback:f}),n.filter(function(t){return 0===o.length||(0,a.hj)(t.frontmatter.tags.concat(t.frontmatter.languages),o)}).map(function(t,n){return(0,c.jsx)(p,{slug:t.slug,title:t.frontmatter.title,tags:t.frontmatter.tags,url:t.frontmatter.url,languages:t.frontmatter.languages,date:t.frontmatter.date,author:t.frontmatter.author,addTagCallback:u,difficulty:t.frontmatter.difficulty},n)}),(0,c.jsxs)("div",{style:{marginBottom:"1rem",textAlign:"center"},children:[(0,c.jsx)("p",{children:"If you found a solution helpful, consider leaving a star!"}),(0,c.jsx)("iframe",{src:"https://ghbtns.com/github-btn.html?user=gaelanmcmillan&repo=more-generic&type=star&count=true&size=large",frameborder:"0",width:"120",height:"30",title:"GitHub"})]})]})})}},4069:function(t,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/solutions",function(){return r(6650)}])},2640:function(t,n,r){"use strict";function e(t,n){(null==n||n>t.length)&&(n=t.length);for(var r=0,e=Array(n);r<n;r++)e[r]=t[r];return e}function i(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var r,e,i=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=i){var o=[],a=!0,l=!1;try{for(i=i.call(t);!(a=(r=i.next()).done)&&(o.push(r.value),!n||o.length!==n);a=!0);}catch(u){l=!0,e=u}finally{try{a||null==i.return||i.return()}finally{if(l)throw e}}return o}}(t,n)||function(t,n){if(t){if("string"==typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);if("Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return e(t,n)}}(t,n)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.d(n,{Z:function(){return i}})}},function(t){t.O(0,[141,774,888,179],function(){return t(t.s=4069)}),_N_E=t.O()}]);