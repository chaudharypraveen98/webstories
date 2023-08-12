import{r as d,R as Me,e as E,$ as $e,a as h,j as i,b as Fe}from"./styled-components.browser.esm-6d277b54.js";/**
 * @remix-run/router v1.7.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function $(){return $=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},$.apply(this,arguments)}var P;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(P||(P={}));const pe="popstate";function Ve(e){e===void 0&&(e={});function t(a,o){let{pathname:s="/",search:c="",hash:l=""}=U(a.location.hash.substr(1));return le("",{pathname:s,search:c,hash:l},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(a,o){let s=a.document.querySelector("base"),c="";if(s&&s.getAttribute("href")){let l=a.location.href,u=l.indexOf("#");c=u===-1?l:l.slice(0,u)}return c+"#"+(typeof o=="string"?o:A(o))}function r(a,o){K(a.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(o)+")")}return He(t,n,r,e)}function b(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function K(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function We(){return Math.random().toString(36).substr(2,8)}function me(e,t){return{usr:e.state,key:e.key,idx:t}}function le(e,t,n,r){return n===void 0&&(n=null),$({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?U(t):t,{state:n,key:t&&t.key||r||We()})}function A(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function U(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function He(e,t,n,r){r===void 0&&(r={});let{window:a=document.defaultView,v5Compat:o=!1}=r,s=a.history,c=P.Pop,l=null,u=f();u==null&&(u=0,s.replaceState($({},s.state,{idx:u}),""));function f(){return(s.state||{idx:null}).idx}function p(){c=P.Pop;let x=f(),C=x==null?null:x-u;u=x,l&&l({action:c,location:m.location,delta:C})}function v(x,C){c=P.Push;let y=le(m.location,x,C);n&&n(y,x),u=f()+1;let k=me(y,u),I=m.createHref(y);try{s.pushState(k,"",I)}catch(q){if(q instanceof DOMException&&q.name==="DataCloneError")throw q;a.location.assign(I)}o&&l&&l({action:c,location:m.location,delta:1})}function w(x,C){c=P.Replace;let y=le(m.location,x,C);n&&n(y,x),u=f();let k=me(y,u),I=m.createHref(y);s.replaceState(k,"",I),o&&l&&l({action:c,location:m.location,delta:0})}function g(x){let C=a.location.origin!=="null"?a.location.origin:a.location.href,y=typeof x=="string"?x:A(x);return b(C,"No window.location.(origin|href) available to create URL for href: "+y),new URL(y,C)}let m={get action(){return c},get location(){return e(a,s)},listen(x){if(l)throw new Error("A history only accepts one active listener");return a.addEventListener(pe,p),l=x,()=>{a.removeEventListener(pe,p),l=null}},createHref(x){return t(a,x)},createURL:g,encodeLocation(x){let C=g(x);return{pathname:C.pathname,search:C.search,hash:C.hash}},push:v,replace:w,go(x){return s.go(x)}};return m}var xe;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(xe||(xe={}));function De(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?U(t):t,a=he(r.pathname||"/",n);if(a==null)return null;let o=Se(e);_e(o);let s=null;for(let c=0;s==null&&c<o.length;++c)s=Ze(o[c],nt(a));return s}function Se(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let a=(o,s,c)=>{let l={relativePath:c===void 0?o.path||"":c,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};l.relativePath.startsWith("/")&&(b(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=R([r,l.relativePath]),f=n.concat(l);o.children&&o.children.length>0&&(b(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Se(o.children,t,f,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:Xe(u,o.index),routesMeta:f})};return e.forEach((o,s)=>{var c;if(o.path===""||!((c=o.path)!=null&&c.includes("?")))a(o,s);else for(let l of Le(o.path))a(o,s,l)}),t}function Le(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,a=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return a?[o,""]:[o];let s=Le(r.join("/")),c=[];return c.push(...s.map(l=>l===""?o:[o,l].join("/"))),a&&c.push(...s),c.map(l=>e.startsWith("/")&&l===""?"/":l)}function _e(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Qe(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Ae=/^:\w+$/,Ge=3,Je=2,Ke=1,Ye=10,qe=-2,ge=e=>e==="*";function Xe(e,t){let n=e.split("/"),r=n.length;return n.some(ge)&&(r+=qe),t&&(r+=Je),n.filter(a=>!ge(a)).reduce((a,o)=>a+(Ae.test(o)?Ge:o===""?Ke:Ye),r)}function Qe(e,t){return e.length===t.length&&e.slice(0,-1).every((r,a)=>r===t[a])?e[e.length-1]-t[t.length-1]:0}function Ze(e,t){let{routesMeta:n}=e,r={},a="/",o=[];for(let s=0;s<n.length;++s){let c=n[s],l=s===n.length-1,u=a==="/"?t:t.slice(a.length)||"/",f=et({path:c.relativePath,caseSensitive:c.caseSensitive,end:l},u);if(!f)return null;Object.assign(r,f.params);let p=c.route;o.push({params:r,pathname:R([a,f.pathname]),pathnameBase:ot(R([a,f.pathnameBase])),route:p}),f.pathnameBase!=="/"&&(a=R([a,f.pathnameBase]))}return o}function et(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=tt(e.path,e.caseSensitive,e.end),a=t.match(n);if(!a)return null;let o=a[0],s=o.replace(/(.)\/+$/,"$1"),c=a.slice(1);return{params:r.reduce((u,f,p)=>{if(f==="*"){let v=c[p]||"";s=o.slice(0,o.length-v.length).replace(/(.)\/+$/,"$1")}return u[f]=rt(c[p]||"",f),u},{}),pathname:o,pathnameBase:s,pattern:e}}function tt(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),K(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(s,c)=>(r.push(c),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),r]}function nt(e){try{return decodeURI(e)}catch(t){return K(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function rt(e,t){try{return decodeURIComponent(e)}catch(n){return K(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function he(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function it(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:a=""}=typeof e=="string"?U(e):e;return{pathname:n?n.startsWith("/")?n:at(n,t):t,search:lt(r),hash:st(a)}}function at(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?n.length>1&&n.pop():a!=="."&&n.push(a)}),n.length>1?n.join("/"):"/"}function X(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function ke(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Pe(e,t,n,r){r===void 0&&(r=!1);let a;typeof e=="string"?a=U(e):(a=$({},e),b(!a.pathname||!a.pathname.includes("?"),X("?","pathname","search",a)),b(!a.pathname||!a.pathname.includes("#"),X("#","pathname","hash",a)),b(!a.search||!a.search.includes("#"),X("#","search","hash",a)));let o=e===""||a.pathname==="",s=o?"/":a.pathname,c;if(r||s==null)c=n;else{let p=t.length-1;if(s.startsWith("..")){let v=s.split("/");for(;v[0]==="..";)v.shift(),p-=1;a.pathname=v.join("/")}c=p>=0?t[p]:"/"}let l=it(a,c),u=s&&s!=="/"&&s.endsWith("/"),f=(o||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||f)&&(l.pathname+="/"),l}const R=e=>e.join("/").replace(/\/\/+/g,"/"),ot=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),lt=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,st=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function ct(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Ee=["post","put","patch","delete"];new Set(Ee);const dt=["get",...Ee];new Set(dt);/**
 * React Router v6.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function G(){return G=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},G.apply(this,arguments)}const fe=d.createContext(null),ut=d.createContext(null),O=d.createContext(null),Y=d.createContext(null),T=d.createContext({outlet:null,matches:[],isDataRoute:!1}),Re=d.createContext(null);function ht(e,t){let{relative:n}=t===void 0?{}:t;V()||b(!1);let{basename:r,navigator:a}=d.useContext(O),{hash:o,pathname:s,search:c}=Ie(e,{relative:n}),l=s;return r!=="/"&&(l=s==="/"?r:R([r,s])),a.createHref({pathname:l,search:c,hash:o})}function V(){return d.useContext(Y)!=null}function W(){return V()||b(!1),d.useContext(Y).location}function ze(e){d.useContext(O).static||d.useLayoutEffect(e)}function ft(){let{isDataRoute:e}=d.useContext(T);return e?kt():pt()}function pt(){V()||b(!1);let e=d.useContext(fe),{basename:t,navigator:n}=d.useContext(O),{matches:r}=d.useContext(T),{pathname:a}=W(),o=JSON.stringify(ke(r).map(l=>l.pathnameBase)),s=d.useRef(!1);return ze(()=>{s.current=!0}),d.useCallback(function(l,u){if(u===void 0&&(u={}),!s.current)return;if(typeof l=="number"){n.go(l);return}let f=Pe(l,JSON.parse(o),a,u.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:R([t,f.pathname])),(u.replace?n.replace:n.push)(f,u.state,u)},[t,n,o,a,e])}function Ie(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=d.useContext(T),{pathname:a}=W(),o=JSON.stringify(ke(r).map(s=>s.pathnameBase));return d.useMemo(()=>Pe(e,JSON.parse(o),a,n==="path"),[e,o,a,n])}function mt(e,t){return xt(e,t)}function xt(e,t,n){V()||b(!1);let{navigator:r}=d.useContext(O),{matches:a}=d.useContext(T),o=a[a.length-1],s=o?o.params:{};o&&o.pathname;let c=o?o.pathnameBase:"/";o&&o.route;let l=W(),u;if(t){var f;let m=typeof t=="string"?U(t):t;c==="/"||(f=m.pathname)!=null&&f.startsWith(c)||b(!1),u=m}else u=l;let p=u.pathname||"/",v=c==="/"?p:p.slice(c.length)||"/",w=De(e,{pathname:v}),g=jt(w&&w.map(m=>Object.assign({},m,{params:Object.assign({},s,m.params),pathname:R([c,r.encodeLocation?r.encodeLocation(m.pathname).pathname:m.pathname]),pathnameBase:m.pathnameBase==="/"?c:R([c,r.encodeLocation?r.encodeLocation(m.pathnameBase).pathname:m.pathnameBase])})),a,n);return t&&g?d.createElement(Y.Provider,{value:{location:G({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:P.Pop}},g):g}function gt(){let e=Lt(),t=ct(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return d.createElement(d.Fragment,null,d.createElement("h2",null,"Unexpected Application Error!"),d.createElement("h3",{style:{fontStyle:"italic"}},t),n?d.createElement("pre",{style:a},n):null,o)}const vt=d.createElement(gt,null);class bt extends d.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?d.createElement(T.Provider,{value:this.props.routeContext},d.createElement(Re.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function yt(e){let{routeContext:t,match:n,children:r}=e,a=d.useContext(fe);return a&&a.static&&a.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=n.route.id),d.createElement(T.Provider,{value:t},r)}function jt(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var a;if((a=n)!=null&&a.errors)e=n.matches;else return null}let o=e,s=(r=n)==null?void 0:r.errors;if(s!=null){let c=o.findIndex(l=>l.route.id&&(s==null?void 0:s[l.route.id]));c>=0||b(!1),o=o.slice(0,Math.min(o.length,c+1))}return o.reduceRight((c,l,u)=>{let f=l.route.id?s==null?void 0:s[l.route.id]:null,p=null;n&&(p=l.route.errorElement||vt);let v=t.concat(o.slice(0,u+1)),w=()=>{let g;return f?g=p:l.route.Component?g=d.createElement(l.route.Component,null):l.route.element?g=l.route.element:g=c,d.createElement(yt,{match:l,routeContext:{outlet:c,matches:v,isDataRoute:n!=null},children:g})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?d.createElement(bt,{location:n.location,revalidation:n.revalidation,component:p,error:f,children:w(),routeContext:{outlet:null,matches:v,isDataRoute:!0}}):w()},null)}var se;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate"})(se||(se={}));var F;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId"})(F||(F={}));function wt(e){let t=d.useContext(fe);return t||b(!1),t}function Ct(e){let t=d.useContext(ut);return t||b(!1),t}function St(e){let t=d.useContext(T);return t||b(!1),t}function Be(e){let t=St(),n=t.matches[t.matches.length-1];return n.route.id||b(!1),n.route.id}function Lt(){var e;let t=d.useContext(Re),n=Ct(F.UseRouteError),r=Be(F.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function kt(){let{router:e}=wt(se.UseNavigateStable),t=Be(F.UseNavigateStable),n=d.useRef(!1);return ze(()=>{n.current=!0}),d.useCallback(function(a,o){o===void 0&&(o={}),n.current&&(typeof a=="number"?e.navigate(a):e.navigate(a,G({fromRouteId:t},o)))},[e,t])}function Ue(e){b(!1)}function Pt(e){let{basename:t="/",children:n=null,location:r,navigationType:a=P.Pop,navigator:o,static:s=!1}=e;V()&&b(!1);let c=t.replace(/^\/*/,"/"),l=d.useMemo(()=>({basename:c,navigator:o,static:s}),[c,o,s]);typeof r=="string"&&(r=U(r));let{pathname:u="/",search:f="",hash:p="",state:v=null,key:w="default"}=r,g=d.useMemo(()=>{let m=he(u,c);return m==null?null:{location:{pathname:m,search:f,hash:p,state:v,key:w},navigationType:a}},[c,u,f,p,v,w,a]);return g==null?null:d.createElement(O.Provider,{value:l},d.createElement(Y.Provider,{children:n,value:g}))}function Et(e){let{children:t,location:n}=e;return mt(ce(t),n)}var ve;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(ve||(ve={}));new Promise(()=>{});function ce(e,t){t===void 0&&(t=[]);let n=[];return d.Children.forEach(e,(r,a)=>{if(!d.isValidElement(r))return;let o=[...t,a];if(r.type===d.Fragment){n.push.apply(n,ce(r.props.children,o));return}r.type!==Ue&&b(!1),!r.props.index||!r.props.children||b(!1);let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=ce(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function de(){return de=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},de.apply(this,arguments)}function Rt(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,o;for(o=0;o<r.length;o++)a=r[o],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function zt(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function It(e,t){return e.button===0&&(!t||t==="_self")&&!zt(e)}const Bt=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],Ut="startTransition",be=Me[Ut];function Tt(e){let{basename:t,children:n,future:r,window:a}=e,o=d.useRef();o.current==null&&(o.current=Ve({window:a,v5Compat:!0}));let s=o.current,[c,l]=d.useState({action:s.action,location:s.location}),{v7_startTransition:u}=r||{},f=d.useCallback(p=>{u&&be?be(()=>l(p)):l(p)},[l,u]);return d.useLayoutEffect(()=>s.listen(f),[s,f]),d.createElement(Pt,{basename:t,children:n,location:c.location,navigationType:c.action,navigator:s})}const Ot=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Nt=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,N=d.forwardRef(function(t,n){let{onClick:r,relative:a,reloadDocument:o,replace:s,state:c,target:l,to:u,preventScrollReset:f}=t,p=Rt(t,Bt),{basename:v}=d.useContext(O),w,g=!1;if(typeof u=="string"&&Nt.test(u)&&(w=u,Ot))try{let y=new URL(window.location.href),k=u.startsWith("//")?new URL(y.protocol+u):new URL(u),I=he(k.pathname,v);k.origin===y.origin&&I!=null?u=I+k.search+k.hash:g=!0}catch{}let m=ht(u,{relative:a}),x=Mt(u,{replace:s,state:c,target:l,preventScrollReset:f,relative:a});function C(y){r&&r(y),y.defaultPrevented||x(y)}return d.createElement("a",de({},p,{href:w||m,onClick:g||o?r:C,ref:n,target:l}))});var ye;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher"})(ye||(ye={}));var je;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(je||(je={}));function Mt(e,t){let{target:n,replace:r,state:a,preventScrollReset:o,relative:s}=t===void 0?{}:t,c=ft(),l=W(),u=Ie(e,{relative:s});return d.useCallback(f=>{if(It(f,n)){f.preventDefault();let p=r!==void 0?r:A(l)===A(u);c(e,{replace:p,state:a,preventScrollReset:o,relative:s})}},[l,c,u,r,a,n,e,o,s])}const $t="/webstories/assets/svg-1-a97b9157.svg",Ft="/webstories/assets/svg-2-6068b440.svg",Vt="/webstories/assets/svg-3-3a1c64a9.svg",Wt="/webstories/assets/profile-36f18cf7.jpg",Ht={primary:!0,lightBg:!1,lightTopLine:!0,lightText:!0,lightTextDesc:!0,topLine:"Marketing Agency",headline:"Lead Generation Specialist for Online Businesses",description:"We help business owners increase their revenue. Our team of unique specialist can help you achieve your business goals.",buttonLabel:"Get Started",imgStart:"",img:$t,alt:"Credit Card",start:""},Dt={primary:!0,lightBg:!1,lightTopLine:!0,lightText:!0,lightTextDesc:!0,topLine:"Instant Setup",headline:"Extremely quick onboarding process",description:"Once you've joined, our team of specialist will reach out to you and get you set up in minutes.",buttonLabel:"Learn More",imgStart:"",img:Ft,alt:"Vault",start:""},_t={primary:!1,lightBg:!0,lightTopLine:!1,lightText:!1,lightTextDesc:!1,topLine:"Sarah Jeni",headline:"Ultra helped me increase my revenue by over 3X in less than 3 months!",description:"Their team is wonderful! I can't believe I didn't start working with them earlier.",buttonLabel:"View Case Study",imgStart:"start",img:Wt,alt:"Vault",start:"true"},At={primary:!0,lightBg:!1,lightTopLine:!0,lightText:!0,lightTextDesc:!0,topLine:"Secure Database",headline:"All your data is stored on our secure server",description:"You will never have to worry about your information getting leaked. Our team of security experts will ensure your records are kept safe.",buttonLabel:"Sign Up Now",imgStart:"start",img:Vt,alt:"Vault",start:"true"};var Te={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},J=E.createContext&&E.createContext(Te),z=globalThis&&globalThis.__assign||function(){return z=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},z.apply(this,arguments)},Gt=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};function Oe(e){return e&&e.map(function(t,n){return E.createElement(t.tag,z({key:n},t.attr),Oe(t.child))})}function S(e){return function(t){return E.createElement(Jt,z({attr:z({},e.attr)},t),Oe(e.child))}}function Jt(e){var t=function(n){var r=e.attr,a=e.size,o=e.title,s=Gt(e,["attr","size","title"]),c=a||n.size||"1em",l;return n.className&&(l=n.className),e.className&&(l=(l?l+" ":"")+e.className),E.createElement("svg",z({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,s,{className:l,style:z(z({color:e.color||n.color},n.style),e.style),height:c,width:c,xmlns:"http://www.w3.org/2000/svg"}),o&&E.createElement("title",null,o),e.children)};return J!==void 0?E.createElement(J.Consumer,null,function(n){return t(n)}):t(Te)}function Kt(e){return S({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"}}]})(e)}function Yt(e){return S({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"}}]})(e)}function qt(e){return S({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"}}]})(e)}function Ne(e){return S({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M445.7 127.9V384l-63.4 36.5V164.7L223.8 73.1 65.2 164.7l.4 255.9L2.3 384V128.1L224.2 0l221.5 127.9zM255.6 420.5L224 438.9l-31.8-18.2v-256l-63.3 36.6.1 255.9 94.9 54.9 95.1-54.9v-256l-63.4-36.6v255.9z"}}]})(e)}function Xt(e){return S({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"}}]})(e)}function Qt(e){return S({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"}}]})(e)}function Zt(e){return S({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"}}]})(e)}function en(e){return S({tag:"svg",attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"}}]})(e)}$e`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Source Sans Pro', sans-serif;
}
* {
  scrollbar-width: thin;
  scrollbar-color: rgba(155, 155, 155, 0.5) transparent;
}
*::-webkit-scrollbar {
  width: 0.5px;
}
*::-webkit-scrollbar-track {
  background: transparent;
}
*::-webkit-scrollbar-thumb {
  background: rgba(155, 155, 155, 0.5);
  border-radius: 20px;
  border: transparent;
}
`;const ue=h.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;
  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`,B=h.button`
  border-radius: 4px;
  background: ${({primary:e})=>"rgb(99, 102, 241)"};
  white-space: nowrap;
  padding: ${({big:e})=>e?"12px 64px":"10px 20px"};
  color: #fff;
  font-size: ${({fontBig:e})=>e?"20px":"16px"};
  outline: none;
  border: none;
  cursor: pointer;
  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background-color: ${({primary:e})=>"rgb(99, 102, 241)"};
  }
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`,tn=h.div`
  background-color: #101522;
  padding: 4rem 0 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,nn=h.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 24px;
  padding: 24px;
  color: #fff;
`,rn=h.p`
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  margin-bottom: 24px;
  font-size: 24px;
`,an=h.p`
  margin-bottom: 24px;
  font-size: 20px;
`,on=h.form`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 820px) {
    flex-direction: column;
    width: 80%;
  }
`,ln=h.input`
  padding: 10px 20px;
  border-radius: 2px;
  margin-right: 10px;
  outline: none;
  border: none;
  font-size: 16px;
  border: 1px solid #fff;

  &::placeholder {
    color: #242424;
  }

  @media screen and (max-width: 820px) {
    width: 100%;
    margin: 0 0 16px 0;
  }
`,sn=h.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`,we=h.div`
  display: flex;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`,H=h.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: #fff;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`,D=h.h2`
  margin-bottom: 16px;
`,j=h(N)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;

  &:hover {
    color: rgb(99, 102, 241);
    transition: 0.3s ease-out;
  }
`,cn=h.section`
  max-width: 1000px;
  width: 100%;
`,dn=h.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 1000px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`,un=h(N)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;

  &:hover {
    color: rgb(99, 102, 241);
    transition: 0.3s ease-out;
  }
`,hn=h(Ne)`
  margin-right: 10px;
`,fn=h.small`
  color: #fff;
  margin-bottom: 16px;
`,pn=h.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`,M=h.a`
  color: #fff;
  font-size: 24px;

  &:hover {
    color: rgb(99, 102, 241);
    transition: 0.3s ease-out;
  }
`,mn=h.nav`
  background: #101522;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
`,xn=h(ue)`
  display: flex;
  justify-content: space-between;
  height: 80px;

  ${ue}
`,gn=h(N)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
`,vn=h(Ne)`
  margin-right: 0.5rem;
`,bn=h.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`,yn=h.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    opacity: 1;
    transition: all 0.5s ease;
    background-color: #101522;
    left: ${({click:e})=>e?0:"-100%"};
  }
`,Q=h.li`
  height: 80px;
  border-bottom: 2px solid transparent;
  border-radius: 2px;

  &:hover {
    border-bottom: 4px solid #fff;
  }

  @media screen and (max-width: 960px) {
    width: 100%;

    &:hover {
      border-bottom: none;
    }
  }
`,Z=h(N)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;

    &:hover {
      color: rgb(99, 102, 241);
      transition: all 0.3s ease;
    }
  }
`,jn=h.li`
  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120px;
  }
`,wn=h(N)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 8px 16px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
`,Cn=h.div`
  color: #fff;
  padding: 160px 0;
  background: ${({lightBg:e})=>e?"#fff":"#101522"};
`,Sn=h.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  align-items: center;
  flex-direction: ${({imgStart:e})=>e?"row-reverse":"row"};
`,Ce=h.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;

  @media (min-width: 480px) and (max-width: 1200px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`,Ln=h.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;

  @media (min-width: 480px) and (max-width: 1200px) {
    padding-bottom: 65px;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    padding-bottom: 65px;
  }
`,kn=h.div`
  max-width: 555px;
  display: flex;
  justify-content: ${({start:e})=>e?"flex-start":"flex-end"};
`,Pn=h.div`
  color: ${({lightTopLine:e})=>e?"#a9b3c1":"rgb(99, 102, 241)"};
  font-size: 18px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
`,En=h.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
`,Rn=h.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({lightText:e})=>e?"#f7f8fa":"#1c2237"};
`,zn=h.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({lightTextDesc:e})=>e?"#a9b3c1":"#1c2237"};
`,In=h.div`
  padding: 100px 0 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: rgb(99, 102, 241);
`,Bn=h.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  @media screen and (max-width: 960px) {
    margin: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`,Un=h.h1`
  color: #fff;
  font-size: 48px;
  margin-bottom: 24px;
`,Tn=h.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`,ee=h(N)`
  background: #242424;
  box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2);
  width: 280px;
  height: 500px;
  text-decoration: none;
  border-radius: 4px;
  &:nth-child(2) {
    margin: 24px;
  }
  &:hover {
    transform: scale(1.06);
    transition: all 0.3s ease-out;
    color: #1c2237;
  }
  @media screen and (max-width: 960px) {
    width: 90%;
    &:hover {
      transform: none;
    }
  }
`,te=h.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  padding: 24px;
  align-items: center;
  color: #fff;
`,ne=h.div`
  margin: 24px 0;
`,re=h.h3`
  margin-bottom: 5px;
  font-size: 24px;
`,ie=h.h4`
  font-size: 40px;
`,ae=h.p`
  font-size: 14px;
  margin-bottom: 24px;
`,oe=h.ul`
  margin: 16px 0 32px;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #a9b3c1;
`,L=h.li`
  margin-bottom: 10px;
`;function On(){const[e,t]=d.useState(!1),[n,r]=d.useState(!0),[a,o]=d.useState(!1),[s,c]=d.useState(!1),[l,u]=d.useState(!1),f=()=>{o(!0),u(!1),c(!1)},p=()=>{o(!1),u(!1),c(!0)},v=()=>{o(!1),u(!0),c(!1)},w=()=>t(!e),g=()=>t(!1),m=()=>{window.innerwidth<=960?r(!1):r(!0)};return d.useEffect(()=>{m()},[]),window.addEventListener("resize",m),i.jsx(i.Fragment,{children:i.jsx(J.Provider,{value:{color:"#fff"},children:i.jsx(mn,{children:i.jsxs(xn,{children:[i.jsxs(gn,{to:"/",children:[i.jsx(vn,{}),"ULTRA"]}),i.jsx(bn,{onClick:w,children:e?i.jsx(en,{}):i.jsx(Zt,{})}),i.jsxs(yn,{onClick:w,click:e,children:[i.jsx(Q,{onClick:f,homeClick:a,children:i.jsx(Z,{to:"/",onClick:g,children:"Home"})}),i.jsx(Q,{onClick:p,servicesClick:s,children:i.jsx(Z,{to:"/services",onClick:g,children:"Services"})}),i.jsx(Q,{onClick:v,productsClick:l,children:i.jsx(Z,{to:"/Products",onClick:g,children:"Products"})}),i.jsx(jn,{children:n?i.jsx("a",{href:`${window.location.origin}/webstories-admin/#/auth/login`,children:i.jsx(B,{primary:!0,children:"Dashboard"})}):i.jsx(wn,{to:"/sign-up",children:i.jsx(B,{onClick:g,fontBig:!0,primary:!0,children:"SIGN UP"})})})]})]})})})})}function Nn(){const e=new Date;return i.jsxs(tn,{children:[i.jsxs(nn,{children:[i.jsx(rn,{children:"Join our exclusive membership to receive the latest news and trends"}),i.jsx(an,{children:"You can unsubscribe at any time."}),i.jsxs(on,{children:[i.jsx(ln,{name:"email",type:"email",placeholder:"Your Email"}),i.jsx(B,{fontBig:!0,children:"Subscribe"})]})]}),i.jsxs(sn,{children:[i.jsxs(we,{children:[i.jsxs(H,{children:[i.jsx(D,{children:"About Us"}),i.jsx(j,{to:"/sign-up",children:"How it works"}),i.jsx(j,{to:"/",children:"Testimonials"}),i.jsx(j,{to:"/",children:"Careers"}),i.jsx(j,{to:"/",children:"Investors"}),i.jsx(j,{to:"/",children:"Terms of Service"})]}),i.jsxs(H,{children:[i.jsx(D,{children:"Contact Us"}),i.jsx(j,{to:"/",children:"Contact"}),i.jsx(j,{to:"/",children:"Support"}),i.jsx(j,{to:"/",children:"Destinations"}),i.jsx(j,{to:"/",children:"Sponsorships"})]})]}),i.jsxs(we,{children:[i.jsxs(H,{children:[i.jsx(D,{children:"Videos"}),i.jsx(j,{to:"/",children:"Submit Video"}),i.jsx(j,{to:"/",children:"Ambassadors"}),i.jsx(j,{to:"/",children:"Agency"}),i.jsx(j,{to:"/",children:"Influencer"})]}),i.jsxs(H,{children:[i.jsx(D,{children:"Social Media"}),i.jsx(j,{to:"/",children:"Instagram"}),i.jsx(j,{to:"/",children:"Facebook"}),i.jsx(j,{to:"/",children:"Youtube"}),i.jsx(j,{to:"/",children:"Twitter"})]})]})]}),i.jsx(cn,{children:i.jsxs(dn,{children:[i.jsxs(un,{to:"/",children:[i.jsx(hn,{}),"ULTRA"]}),i.jsxs(fn,{children:["ULTRA © ",e.getFullYear()," "]}),i.jsxs(pn,{children:[i.jsx(M,{href:"/",target:"_blank","aria-label":"Facebook",children:i.jsx(Kt,{})}),i.jsx(M,{href:"/",target:"_blank","aria-label":"Instagram",children:i.jsx(Yt,{})}),i.jsx(M,{href:"/",target:"_blank","aria-label":"YouTube",children:i.jsx(Qt,{})}),i.jsx(M,{href:"/",target:"_blank","aria-label":"Twitter",children:i.jsx(Xt,{})}),i.jsx(M,{href:"/",target:"_blank","aria-label":"LinkedIn",children:i.jsx(qt,{})})]})]})})]})}const _=({primary:e,lightBg:t,topLine:n,lightTopLine:r,lightText:a,lightTextDesc:o,headline:s,description:c,buttonLabel:l,img:u,alt:f,imgStart:p,start:v})=>i.jsx(i.Fragment,{children:i.jsx(Cn,{lightBg:t,children:i.jsx(ue,{children:i.jsxs(Sn,{imgStart:p,children:[i.jsx(Ce,{children:i.jsxs(Ln,{children:[i.jsx(Pn,{lightTopLine:r,children:n}),i.jsx(Rn,{lightText:a,children:s}),i.jsx(zn,{lightTextDesc:o,children:c}),i.jsx("a",{href:`${window.location.origin}/webstories-admin/#/auth/login`,children:i.jsx(B,{big:!0,fontBig:!0,primary:e,children:l})})]})}),i.jsx(Ce,{children:i.jsx(kn,{start:v,children:i.jsx(En,{src:u,alt:f})})})]})})})});function Mn(e){return S({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M196.844 14.125l-8.75 2.906-43.22 13.44-3.5 1.155-1.75 2.938L30.75 206.593l-14 21.032 5.344 15.156L41.5 308.47l2.344 7 7.594-.595 74.156-4.687 6.437-.563 1.75-5.844 77.095-239.436 1.156-2.938-1.155-2.906-11.125-35.625-2.03-6.094-.032-.25h-.032l-.812-2.405zm123.812 5.25l-2.906 5.844-18.125 40.874-1.75 3.5 1.188 4.094L383.156 274l1.75 4.656 4.657 1.188 64.843 14.03 7.594 1.157V295l2.906-7 26.875-60.72 1.75-4.092-1.75-4.094L390.157 28.688l-2.343-4.657-5.25-.592-55.47-3.5-6.437-.563zM184.594 37.47l7.562 23.936-.906 2.844-89.594 174.125 23.625 31.094-6.874 21.31-32.78-42.5-42.563-.842L38 230.188l1-1.563 46.094.938L183.72 37.75l.874-.28zm147.156 1.75l16.47.874 76.343 153.22 36.5 8.374 11.53 21.718-48.468-10.656-7.22 53.438-18.436-3.844L407.093 201l-77.53-156.72 2.186-5.06zm-79.437 85.28l-5.25 3.5-37.375 25.094-3.5 2.344-.594 4.093L166.47 416.5l-.564 5.25 4.063 3.5 76.53 63.656 6.406 5.282 5.844-5.282 75.344-66.562 4.094-2.938-.594-4.656-28.625-251.125-.564-4.094-4.093-2.342-46.72-29.782-5.28-2.906zm.562 22.53l19.5 12.095 12.25 202.406 30.844 24.908 2.843 24.812-.875.78-40.594-32.905-75.156 48.188-15.094-12.47 79.437-50.687-13.155-217.125zm108.438 148.345l-7.5 37.563 32.218 94 33.595 14.968 19.438-39.375-48.094-85.155-29.657-22zM108.625 350.5l-29.687 10.813L32 431.47l2.625 34.593 31.188-12.75 46.937-70.188-4.125-32.625z"}}]})(e)}function $n(e){return S({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M92.906 94.813l60.438 79.75 78.125-79.75H92.905zm189.25 0L359.25 173.5l58.688-78.688H282.155zm-25.344.843l-84.718 86.47H341.53l-84.717-86.47zm177.907 7.906l-58.626 78.563H494.53l-59.81-78.563zm-358.064.75l-57.78 77.813h116.78l-59-77.813zm-58.5 96.5L226.562 429.22 143.344 200.81H18.156zm145.063 0l93.593 256.844 93.593-256.844H163.22zm207.06 0L287.064 429.22 495.469 200.81H370.28z"}}]})(e)}function Fn(e){return S({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M291.28 113.14c-21.105-.197-46.504 4.78-76.186 15.538l-61.31 97.62a9 9 0 0 1-7.57 4.214l-105.65.613.278 118.38 94.486.743a9 9 0 0 1 8.53 6.354c7.957 25.855 26.634 40.548 49.097 49.65 18.63 7.55 39.57 10.712 57.074 11.95-.924-9.667-.874-20.846 1.69-31.51 1.845-7.666 5.07-15.214 10.843-21.23 4.665-4.864 11.064-8.425 18.566-9.9-2.417-8.75-1.9-17.564.358-25.414 3.358-11.673 9.468-22.114 14.11-31.853a9 9 0 0 1 .002-.025c.904-8.89.39-20.137 2.015-30.924.813-5.394 2.175-10.806 5.143-15.803 1.907-3.21 4.615-6.177 7.955-8.473l-11.76-29.533c-7.754 29.296-23.77 49.333-40.265 62.213-11.166 8.717-22.448 14.333-31.495 17.992-9.046 3.66-16.89 5.758-17.437 5.955l-6.104-16.933c3.808-1.373 8.865-2.503 16.79-5.71 7.927-3.205 17.69-8.092 27.167-15.49 18.955-14.8 37.084-39.063 38.16-83.08a9 9 0 0 1 17.36-3.11l26.15 65.67c13.382 6.284 22.786 6.51 31.265 3.968 7.728-2.317 15.188-7.56 23.012-13.512-3.2-26.703-10.97-53.765-21.06-81.12-12.893-20.23-30.257-31.92-54.5-35.87-5.236-.853-10.81-1.314-16.718-1.37zm128.425 34.286l-37.166 5.428c8.478 24.046 15.285 48.305 18.58 72.832 25.347 4.217 36.318-.862 54.722-5.698 5.58-20.544 7.754-38.29 3.863-49.715-2.1-6.165-5.503-10.796-11.75-14.734-6.097-3.844-15.258-6.83-28.25-8.114zm33.604 91.8c-15.195 4.203-30.293 8.315-55.456 4.157-9.19 7.16-19.212 14.996-32.14 18.87-12.515 3.753-27.416 3.04-44.187-4.792-1.482.74-2.348 1.687-3.293 3.276-1.194 2.01-2.206 5.216-2.82 9.29-.93 6.17-1.052 14.123-1.467 22.267 42.27 11.538 84.406 18.628 126.424 19.78 10.864-8.28 18.62-17.718 21.59-28.792 3.073-11.467 1.617-25.51-8.65-44.055zm-143.34 70.797c-4.47 9.197-9.032 17.62-11.183 25.1-2.734 9.505-2.687 16.425 5.14 25.7 30.633 19.38 65.708 25.593 102.438 30.464 12.98-8.606 24.286-17.244 29.422-26.133 5.3-9.17 6.31-18.654-3.71-35.334-40.81-1.786-81.518-8.768-122.106-19.797zm-19.943 62.38a9 9 0 0 1-2.386.44c-5.964.33-9.28 2.154-12.087 5.08-2.806 2.924-4.992 7.41-6.332 12.98-2.308 9.597-1.81 21.784-.493 31.19 29.334 14.184 59.095 25.29 93.064 26.41 19.342-4.057 26.193-10.234 30.187-17.71 3.1-5.802 4.263-13.514 5.814-22.45-35.73-4.915-72.027-11.895-104.85-33.11a9 9 0 0 1-1.852-1.592c-.364-.41-.716-.823-1.06-1.238z"}}]})(e)}const Vn=()=>i.jsx(J.Provider,{value:{color:"#a9b3c1",size:64},children:i.jsx(In,{children:i.jsxs(Bn,{children:[i.jsx(Un,{children:"Our Services"}),i.jsxs(Tn,{children:[i.jsx(ee,{to:"/sign-up",children:i.jsxs(te,{children:[i.jsx(ne,{children:i.jsx(Fn,{})}),i.jsx(re,{children:"Starter Pack"}),i.jsx(ie,{children:"$99.99"}),i.jsx(ae,{children:"per month"}),i.jsxs(oe,{children:[i.jsx(L,{children:"100 New Users"}),i.jsx(L,{children:"$10,000 Budget"}),i.jsx(L,{children:"Retargeting analytics"})]}),i.jsx(B,{primary:!0,children:"Choose Plan"})]})}),i.jsx(ee,{to:"/sign-up",children:i.jsxs(te,{children:[i.jsx(ne,{children:i.jsx(Mn,{})}),i.jsx(re,{children:"Gold Rush"}),i.jsx(ie,{children:"$299.99"}),i.jsx(ae,{children:"per month"}),i.jsxs(oe,{children:[i.jsx(L,{children:"1000 New Users"}),i.jsx(L,{children:"$50,000 Budget"}),i.jsx(L,{children:"Lead Gen Analytics"})]}),i.jsx(B,{primary:!0,children:"Choose Plan"})]})}),i.jsx(ee,{to:"/sign-up",children:i.jsxs(te,{children:[i.jsx(ne,{children:i.jsx($n,{})}),i.jsx(re,{children:"Diamond Kings"}),i.jsx(ie,{children:"$999.99"}),i.jsx(ae,{children:"per month"}),i.jsxs(oe,{children:[i.jsx(L,{children:"Unlimited Users"}),i.jsx(L,{children:"Unlimited Budget"}),i.jsx(L,{children:"24/7 Support"})]}),i.jsx(B,{primary:!0,children:"Choose Plan"})]})})]})]})})});function Wn(){const{pathname:e}=W();return d.useEffect(()=>{window.scrollTo(0,0)},[e]),null}const Hn=()=>i.jsxs(i.Fragment,{children:[i.jsx(Wn,{}),i.jsx(On,{}),i.jsx(_,{...Ht}),i.jsx(_,{..._t}),i.jsx(_,{...Dt}),i.jsx(Vn,{}),i.jsx(_,{...At}),i.jsx(Nn,{})]});function Dn(){return i.jsx(Tt,{children:i.jsx(Et,{children:i.jsx(Ue,{path:"/",element:i.jsx(Hn,{})})})})}Fe.render(i.jsx(E.StrictMode,{children:i.jsx(Dn,{})}),document.getElementById("root"));
