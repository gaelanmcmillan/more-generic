(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[248],{4255:function(e,t,n){"use strict";var r=n(4141),i=n(5893),o=r.ZP.div.withConfig({displayName:"MaskedImage__Wrapper",componentId:"sc-1fitqyb-0"})(["display:flex;width:",";height:",";background-color:",";"],function(e){return e.width||"100px"},function(e){return e.height||"100px"},function(e){return e.background||"white"}),a=r.ZP.div.withConfig({displayName:"MaskedImage__Mask",componentId:"sc-1fitqyb-1"})(["-webkit-mask-image:",";mask-image:",";-webkit-mask-size:",";mask-size:",";-webkit-mask-repeat:",";mask-repeat:",";width:100%;height:100%;position:relative;"],function(e){return e.src||"none"},function(e){return e.src||"none"},function(e){return e.size||"100%"},function(e){return e.size||"100%"},function(e){return e.repeat||"no-repeat"},function(e){return e.repeat||"no-repeat"}),s=r.ZP.div.withConfig({displayName:"MaskedImage__ColorBox",componentId:"sc-1fitqyb-2"})(["position:absolute;display:inline-block;background-color:",";width:inherit;height:inherit;"],function(e){return e.foreground||"black"}),l=function(e){var t,n=e.src,r=e.width,l=e.height,c=e.background,u=e.foreground,d=e.children;return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(o,{width:r,height:l,background:c,children:(0,i.jsxs)(a,{src:'url("'.concat(n,'")'),children:[d,void 0===(t=u)?(0,i.jsx)(i.Fragment,{}):(0,i.jsx)(s,{foreground:u})]})})})};t.Z=l},6746:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return N},default:function(){return E}});var r={};n.r(r),n.d(r,{MDXContext:function(){return l},MDXProvider:function(){return $},useMDXComponents:function(){return u},withMDXComponents:function(){return c}});var i=n(9499),o=n(9794),a=n(7294),s=n(2746);let l=a.createContext({});function c(e){return function(t){let n=u(t.components);return a.createElement(e,{...t,allComponents:n})}}function u(e){let t=a.useContext(l);return a.useMemo(()=>"function"==typeof e?e(t):{...t,...e},[t,e])}let d={};function $({components:e,children:t,disableParentContext:n}){let r=u(e);return n&&(r=e||d),a.createElement(l.Provider,{value:r},t)}function p({compiledSource:e,frontmatter:t,scope:n,components:i={},lazy:o}){let[l,c]=(0,a.useState)(!o||"undefined"==typeof window);(0,a.useEffect)(()=>{if(o){let e=window.requestIdleCallback(()=>{c(!0)});return()=>window.cancelIdleCallback(e)}},[]);let u=(0,a.useMemo)(()=>{let i=Object.assign({opts:{...r,...s.c}},{frontmatter:t},n),o=Object.keys(i),a=Object.values(i),l=Reflect.construct(Function,o.concat(`${e}`));return l.apply(l,a).default},[n,e]);if(!l)return a.createElement("div",{dangerouslySetInnerHTML:{__html:""},suppressHydrationWarning:!0});let d=a.createElement($,{components:i},a.createElement(u,null));return o?a.createElement("div",null,d):d}"undefined"!=typeof window&&(window.requestIdleCallback=window.requestIdleCallback||function(e){var t=Date.now();return setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},window.cancelIdleCallback=window.cancelIdleCallback||function(e){clearTimeout(e)});var f=n(9008),h=n.n(f),m=n(6977),g=n(4255),_=n(4141),x=n(5893),y=_.ZP.div.withConfig({displayName:"ToolTip__TextWrapper",componentId:"sc-1xbj7uo-0"})(["display:inline;width:fit-content;height:auto;text-decoration:dotted underline;> *{transition:0.4s ease all;opacity:0;visibility:hidden;}&:hover{> *{visibility:visible;opacity:1;}}position:relative;"]),b=_.ZP.div.withConfig({displayName:"ToolTip__Displayed",componentId:"sc-1xbj7uo-1"})(["display:inline;position:absolute;margin-top:2rem;margin-left:-50%;transform:translate(-50%,0);@media (max-width:768px){float:left;margin:none;min-width:100vw;> *{min-width:100vw;}}height:auto;> *{height:auto;}z-index:3;"]),w=_.ZP.div.withConfig({displayName:"ToolTip__ArrowWrapper",componentId:"sc-1xbj7uo-2"})(["display:inline;margin-top:1.1rem;position:absolute;margin-left:-50%;transform:translate(-50%,0);z-index:5;"]),v=_.ZP.div.withConfig({displayName:"ToolTip__InnerArrow",componentId:"sc-1xbj7uo-3"})(["height:15px;width:15px;transform:translate(0,50%) rotate(45deg);-webkit-clip-path:polygon(-100% 0%,-100% 200%,0% 100%,100% 0%,200% -100%,-100% -100%);clip-path:polygon(-100% 0%,-100% 200%,0% 100%,100% 0%,200% -100%,-100% -100%);"]),k=function(){return(0,x.jsx)(w,{children:(0,x.jsx)(v,{className:"tooltip-bg-color soft-dark-shadow"})})},j=function(e){var t=e.text,n=e.children;return(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)(y,{children:[t,(0,x.jsx)(k,{}),(0,x.jsx)(b,{className:"soft-dark-shadow soft-radius tooltip-bg-color",style:{padding:"1rem"},children:n})]})})},C=n(4207);function I(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?I(Object(n),!0).forEach(function(t){(0,i.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):I(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var T=function(e){var t=e.src,n=e.alt,r=e.maxWidth;return(0,x.jsx)("div",{style:{width:"100%",display:"flex"},children:(0,x.jsx)("img",{src:t,alt:n,width:"100%",style:{marginLeft:"auto",marginRight:"auto",marginTop:"1rem",marginBottom:"1rem",maxWidth:void 0===r?"inherit":r,borderRadius:"1rem",border:"3px solid #586e75"}})})},N=!0,E=function(e){e.slug;var t=e.frontmatter,n=t.title,r=t.url,i=(t.author,t.tags,t.languages,t.date,e.source);return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(h(),{children:(0,x.jsxs)("title",{children:['GM solves "',n,'"']})}),(0,x.jsx)(C.Y,{children:(0,x.jsxs)(m.Z,{lg:6,md:8,sm:12,xs:12,children:[(0,x.jsx)("h1",{children:(0,x.jsxs)("a",{href:r,children:[n," ⧉"]})}),(0,x.jsx)(p,P(P({},i),{},{components:{CH:o.CH,ToolTip:j,MaskedImage:g.Z,InlineImage:T}})),(0,x.jsxs)("div",{style:{marginBottom:"1rem",textAlign:"center"},children:[(0,x.jsx)("p",{children:"If you found this solution helpful, consider leaving a star!"}),(0,x.jsx)("iframe",{src:"https://ghbtns.com/github-btn.html?user=gaelanmcmillan&repo=more-generic&type=star&count=true&size=large",frameborder:"0",width:"120",height:"30",title:"GitHub"})]})]})})]})}},497:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/solves/[slug]",function(){return n(6746)}])},2746:function(e,t,n){let r=n(5893);e.exports.c=r}},function(e){e.O(0,[542,343,774,888,179],function(){return e(e.s=497)}),_N_E=e.O()}]);