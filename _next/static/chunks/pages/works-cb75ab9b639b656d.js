(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[547],{4255:function(t,n,e){"use strict";var r=e(4141),i=e(5893),o=r.ZP.div.withConfig({displayName:"MaskedImage__Wrapper",componentId:"sc-1fitqyb-0"})(["display:flex;width:",";height:",";background-color:",";"],function(t){return t.width||"100px"},function(t){return t.height||"100px"},function(t){return t.background||"white"}),a=r.ZP.div.withConfig({displayName:"MaskedImage__Mask",componentId:"sc-1fitqyb-1"})(["-webkit-mask-image:",";mask-image:",";-webkit-mask-size:",";mask-size:",";-webkit-mask-repeat:",";mask-repeat:",";width:100%;height:100%;position:relative;"],function(t){return t.src||"none"},function(t){return t.src||"none"},function(t){return t.size||"100%"},function(t){return t.size||"100%"},function(t){return t.repeat||"no-repeat"},function(t){return t.repeat||"no-repeat"}),c=r.ZP.div.withConfig({displayName:"MaskedImage__ColorBox",componentId:"sc-1fitqyb-2"})(["position:absolute;display:inline-block;background-color:",";width:inherit;height:inherit;"],function(t){return t.foreground||"black"}),l=function(t){var n,e=t.src,r=t.width,l=t.height,s=t.background,u=t.foreground,d=t.children;return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(o,{width:r,height:l,background:s,children:(0,i.jsxs)(a,{src:'url("'.concat(e,'")'),children:[d,void 0===(n=u)?(0,i.jsx)(i.Fragment,{}):(0,i.jsx)(c,{foreground:u})]})})})};n.Z=l},6264:function(t,n,e){"use strict";e.d(n,{hj:function(){return f},kf:function(){return u},y9:function(){return h}});var r=e(7294),i=e(5893);function o(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=Array(n);e<n;e++)r[e]=t[e];return r}var a=new Map,c=function(t,n){return Math.round(t+Math.random()*(n-t))},l=function(){var t=c(150,220),n=c(150,220);return"#".concat([t,n,Math.min(3*Math.round(185)-t-n,220)].map(function(t){return t.toString(16)}).join(""))},s=function(t){if(!a.has(t)){var n=l();a.set(t,n)}},u=function(){var t=(0,r.useState)([]),n=t[0],e=t[1],i=function(t){return function(r){r.stopPropagation(),n.includes(t)||e(n.concat(t))}},o=function(t){return function(r){r.stopPropagation(),e(n.filter(function(n){return n!=t}))}};return[n,function(){e([])},i,o]},d=function(t){var n=t.text,e=t.bgColor,r=t.onClick;return(0,i.jsx)("div",{onClick:r,style:{fontFamily:"Inconsolata",cursor:"pointer",backgroundColor:e,whiteSpace:"nowrap",borderRadius:"10px",paddingLeft:"0.5rem",paddingRight:"0.5rem",width:"fit-content",marginRight:"0.5rem",fontSize:"15px",fontWeight:"bold",display:"inline-block"},children:n})},f=function(t,n){var e,r=function(t,n){var e="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!e){if(Array.isArray(t)||(e=function(t,n){if(t){if("string"==typeof t)return o(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);if("Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return o(t,n)}}(t))){e&&(t=e);var r=0,i=function(){};return{s:i,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:i}}throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,c=!0,l=!1;return{s:function(){e=e.call(t)},n:function(){var t=e.next();return c=t.done,t},e:function(t){l=!0,a=t},f:function(){try{c||null==e.return||e.return()}finally{if(l)throw a}}}}(n);try{for(r.s();!(e=r.n()).done;){var i=e.value;if(!t.includes(i))return!1}}catch(a){r.e(a)}finally{r.f()}return!0},h=function(t){var n=t.tagList,e=t.clearListCallback,r=t.removeTagCallback;return(0,i.jsxs)("div",{style:{marginBottom:"1rem"},children:[0!==n.length?(0,i.jsx)(d,{text:"Clear All Tags",bgColor:"#CC99AA",onClick:e}):(0,i.jsx)(i.Fragment,{}),n.map(function(t){return(0,i.jsx)(m,{tag:t,onClick:r(t)})})]})},m=function(t){var n=t.tag,e=t.onClick;t.registerColorCallback,t.getColor,s(n);var r=a.get(n);return(0,i.jsx)(d,{text:n,onClick:e,bgColor:r})};n.ZP=m},6149:function(t,n,e){"use strict";e.r(n),e.d(n,{__N_SSG:function(){return _},default:function(){return C}});var r=e(2640),i=e(9008),o=e.n(i),a=e(7294),c=e(4141),l=e(4255),s=e(5893),u=c.ZP.div.withConfig({displayName:"BlogPostCard__HoverThumbnail",componentId:"sc-dcvpib-0"})(["transition:","s ease all;width:100%;height:100%;opacity:0%;background-color:var(--link-blue);z-index:2;position:absolute;display:inline-block;"],.8),d=c.ZP.div.withConfig({displayName:"BlogPostCard__Wrapper",componentId:"sc-dcvpib-1"})(["font-family:Inconsolata;position:relative;> h1,h2,h3{font-weight:bold;}display:flex;flex-direction:row;@media (max-width:600px){flex-direction:column;}margin-bottom:2rem;height:auto;transition:","s ease all;*{transition:","s ease all;}&:hover{transform:scale(1.01);","{opacity:100%;}*{color:var(--link-blue);border-color:var(--link-blue);}}"],.8,.8,u),f=c.ZP.div.withConfig({displayName:"BlogPostCard__ThumbnailWrapper",componentId:"sc-dcvpib-2"})(["display:flex;align-self:center;height:250px;@media (max-width:600px){width:100%;height:100%;flex:2;aspect-ratio:1;}aspect-ratio:1;justify-content:center;align-items:center;"]),h=c.ZP.div.withConfig({displayName:"BlogPostCard__Thumbnail",componentId:"sc-dcvpib-3"})(["border-radius:0.5rem;border-width:4px;border-style:solid;width:",";height:",";"],function(t){return t.width},function(t){return t.height}),m=c.ZP.div.withConfig({displayName:"BlogPostCard__InfoWrapper",componentId:"sc-dcvpib-4"})(["position:relative;overflow:hidden;display:flex;align-items:center;"]),$=c.ZP.div.withConfig({displayName:"BlogPostCard__InfoContent",componentId:"sc-dcvpib-5"})(["overflow:visible;@media (max-width:600px){margin-top:0;margin-left:1.5rem;margin-right:1.5rem;}display:flex;margin:1rem;flex-direction:column;height:95%;width:95%;"]);c.ZP.div.withConfig({displayName:"BlogPostCard__Excerpt",componentId:"sc-dcvpib-6"})([""]),c.ZP.span.withConfig({displayName:"BlogPostCard__DateAndAuthor",componentId:"sc-dcvpib-7"})(["margin-top:auto;align-self:start;"]);var g=e(6977),p=function(t,n){(0,a.useEffect)(function(){var e=function(e){t.current&&!t.current.contains(e.target)&&n()};return document.addEventListener("mousedown",e),function(){document.removeEventListener("mousedown",e)}},[t])},v=function(t){var n=(0,a.useRef)(null);return p(n,t.callback),(0,s.jsx)("div",{ref:n,children:t.children})},x=function(){function t(){var t;return{width:window.innerWidth,height:window.innerHeight}}var n=(0,a.useState)({width:0,height:0}),e=n[0],r=n[1];return(0,a.useEffect)(function(){var n=function(){r(t())};return window.addEventListener("resize",n),function(){return window.removeEventListener("resize",n)}},[!0]),[e,r,t]},b=e(6264),y=e(4207),w=c.ZP.div.withConfig({displayName:"works__ProjectPreviewPane",componentId:"sc-nbvuah-0"})(['font-family:"Inconsolata";visibility:',";position:fixed;margin:0 auto;top:",";left:",";transform:translate(-50%,-50%);max-width:min(95vw,500px);width:90vw;max-height:80%;overflow-y:scroll;&::-webkit-scrollbar{display:none;}z-index:10;padding:1rem;"],function(t){return t.isVisible?"visible":"hidden"},function(t){return"".concat(t.top,"px")},function(t){return"".concat(t.left,"px")});c.ZP.div.withConfig({displayName:"works__FlexRow",componentId:"sc-nbvuah-1"})(["display:flex;flex-direction:row;"]);var j=c.ZP.div.withConfig({displayName:"works__FlexCol",componentId:"sc-nbvuah-2"})(["display:flex;flex-direction:column;"]),k=function(t){var n=t.project,e=t.addTagCallback;t.removeTagCallback;var i=(0,a.useState)(!1),c=i[0],g=i[1],p=x(),y=(0,r.Z)(p,3),k=y[0],_=y[1],C=y[2];return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o(),{children:(0,s.jsx)("title",{children:"Gaelan McMillan's Works"})}),(0,s.jsxs)(v,{callback:function(){g(!1)},children:[(0,s.jsxs)(d,{className:"soft-shadow soft-radius",onClick:function(){g(!c),_(C())},children:[(0,s.jsx)(f,{percentageOfWrapperWidth:"20",children:(0,s.jsx)(h,{width:"90%",height:"90%",children:(0,s.jsx)(l.Z,{width:"100%",height:"100%",src:n.frontmatter.thumbnail,foreground:"var(--colorbox-foreground)",background:"transparent",children:(0,s.jsx)(u,{})})})}),(0,s.jsx)(m,{children:(0,s.jsxs)($,{children:[(0,s.jsx)("h2",{children:n.frontmatter.title}),(0,s.jsx)("div",{style:{paddingBottom:"1rem"},children:n.frontmatter.excerpt}),(0,s.jsxs)(j,{style:{marginTop:"auto"},children:[(0,s.jsxs)("div",{children:[n.frontmatter.tags.map(function(t,n){return(0,s.jsx)(b.ZP,{tag:t,onClick:e(t)},n)}),n.frontmatter.languages.map(function(t,n){return(0,s.jsx)(b.ZP,{tag:t,onClick:e(t)},n)})]}),(0,s.jsx)("div",{children:"Gaelan McMillan"!==n.frontmatter.author?n.frontmatter.author:""})]})]})})]}),(0,s.jsx)(w,{className:"soft-radius soft-shadow tooltip-bg-color",left:k.width/2,top:k.height/2,isVisible:c,children:(0,s.jsxs)("div",{style:{textAlign:"center"},children:[(0,s.jsx)("h1",{children:n.frontmatter.title}),(0,s.jsxs)("div",{style:{marginBottom:"0.5rem"},children:["Topics:"," ",n.frontmatter.tags.map(function(t,n){return(0,s.jsx)(b.ZP,{tag:t},n)})]}),(0,s.jsxs)("div",{style:{marginBottom:"0.5rem"},children:["Langauges:"," ",n.frontmatter.languages.map(function(t,n){return(0,s.jsx)(b.ZP,{tag:t,onClick:void 0},n)})]}),void 0!==n.frontmatter.demolink?(0,s.jsx)("a",{href:n.frontmatter.demolink,children:(0,s.jsx)("h3",{children:"Demo ⧉"})}):(0,s.jsx)(s.Fragment,{}),void 0!==n.frontmatter.demoimg?(0,s.jsx)("img",{src:n.frontmatter.demoimg,style:{width:"80%",borderRadius:"1rem",marginBottom:"1rem"},alt:"A visual sample of the project."}):(0,s.jsx)(s.Fragment,{}),(0,s.jsx)("p",{children:n.frontmatter.body}),void 0!==n.frontmatter.gitlink?(0,s.jsx)("a",{href:n.frontmatter.gitlink,children:(0,s.jsx)("h3",{children:"GitHub ⧉"})}):(0,s.jsx)(s.Fragment,{})]})})]})]})},_=!0,C=function(t){var n=t.projects,e=t.allTags,i=(0,b.kf)(),o=(0,r.Z)(i,4),c=o[0],l=o[1],u=o[2],d=o[3],f=(0,a.useState)(!1),h=f[0],m=f[1];return(0,s.jsx)(y.Y,{children:(0,s.jsxs)(g.Z,{children:[(0,s.jsx)("div",{style:{marginBottom:"1rem",width:"100%",textAlign:"center",userSelect:"none",cursor:"pointer"},onClick:function(){m(!h)},children:(0,s.jsx)("i",{children:"Click on tags to filter projects by category or language."})}),(0,s.jsx)("div",{style:{marginBottom:"1rem",display:"".concat(h?"block":"none")},children:e.map(function(t,n){return(0,s.jsx)(b.ZP,{tag:t,onClick:u(t)},n)})}),(0,s.jsx)(b.y9,{tagList:c,clearListCallback:l,removeTagCallback:d}),n.filter(function(t){return 0===c.length||(0,b.hj)(t.frontmatter.tags.concat(t.frontmatter.languages),c)}).map(function(t,n){return(0,s.jsx)(k,{project:t,addTagCallback:u},n)})]})})}},6337:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/works",function(){return e(6149)}])},2640:function(t,n,e){"use strict";function r(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=Array(n);e<n;e++)r[e]=t[e];return r}function i(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e,r,i=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=i){var o=[],a=!0,c=!1;try{for(i=i.call(t);!(a=(e=i.next()).done)&&(o.push(e.value),!n||o.length!==n);a=!0);}catch(l){c=!0,r=l}finally{try{a||null==i.return||i.return()}finally{if(c)throw r}}return o}}(t,n)||function(t,n){if(t){if("string"==typeof t)return r(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);if("Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return r(t,n)}}(t,n)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}e.d(n,{Z:function(){return i}})}},function(t){t.O(0,[343,774,888,179],function(){return t(t.s=6337)}),_N_E=t.O()}]);