import{_ as h}from"./iframe-7b1ded94.js";import{a as l,R as o,r as a,C as d,A as E,H as R,D as x}from"./index-f0b0925c.js";import"./preview-6f4d6ef3.js";import"../sb-preview/runtime.mjs";import"./_commonjsHelpers-87174ba5.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-dd3358aa.js";import"./index-356e4a49.js";var i={},c=l;i.createRoot=c.createRoot,i.hydrateRoot=c.hydrateRoot;var n=new Map,y=({callback:t,children:e})=>{let r=a.useRef();return a.useLayoutEffect(()=>{r.current!==t&&(r.current=t,t())},[t]),e},_=async(t,e)=>{let r=await w(e);return new Promise(s=>{r.render(o.createElement(y,{callback:()=>s(null)},t))})},v=(t,e)=>{let r=n.get(t);r&&(r.unmount(),n.delete(t))},w=async t=>{let e=n.get(t);return e||(e=i.createRoot(t),n.set(t,e)),e},D={code:d,a:E,...R},f=class extends a.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(t){let{showException:e}=this.props;e(t)}render(){let{hasError:t}=this.state,{children:e}=this.props;return t?null:e}},F=class{constructor(){this.render=async(t,e,r)=>{let s={...D,...e==null?void 0:e.components};return new Promise((m,u)=>{h(()=>import("./index-f6e989f6.js"),["./index-f6e989f6.js","./index-78a6706f.js","./index-f0b0925c.js","./iframe-7b1ded94.js","./_commonjsHelpers-87174ba5.js","./index-d475d2ea.js","./index-d37d4223.js","./index-dd3358aa.js","./index-356e4a49.js"],import.meta.url).then(({MDXProvider:p})=>_(o.createElement(f,{showException:u,key:Math.random()},o.createElement(p,{components:s},o.createElement(x,{context:t,docsParameter:e}))),r)).then(m)})},this.unmount=t=>{v(t)}}};export{F as DocsRenderer,D as defaultComponents};
//# sourceMappingURL=DocsRenderer-7FRJXR4N-dec60b05.js.map