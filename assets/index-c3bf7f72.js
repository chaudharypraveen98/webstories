import{r as d,R as Ve,e as R,$ as We,a as h,j as r,b as He,S as _e,u as Ae,c as Ge,d as Je}from"./useIndexedDBMedia-e884b012.js";import{C as qe}from"./index-eb901d44.js";/**
 * @remix-run/router v1.7.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function D(){return D=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},D.apply(this,arguments)}var E;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(E||(E={}));const me="popstate";function Ke(e){e===void 0&&(e={});function t(a,o){let{pathname:l="/",search:c="",hash:s=""}=O(a.location.hash.substr(1));return ce("",{pathname:l,search:c,hash:s},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(a,o){let l=a.document.querySelector("base"),c="";if(l&&l.getAttribute("href")){let s=a.location.href,u=s.indexOf("#");c=u===-1?s:s.slice(0,u)}return c+"#"+(typeof o=="string"?o:J(o))}function i(a,o){Y(a.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(o)+")")}return Xe(t,n,i,e)}function b(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Y(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Ye(){return Math.random().toString(36).substr(2,8)}function ge(e,t){return{usr:e.state,key:e.key,idx:t}}function ce(e,t,n,i){return n===void 0&&(n=null),D({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?O(t):t,{state:n,key:t&&t.key||i||Ye()})}function J(e){let{pathname:t="/",search:n="",hash:i=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(t+=i.charAt(0)==="#"?i:"#"+i),t}function O(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let i=e.indexOf("?");i>=0&&(t.search=e.substr(i),e=e.substr(0,i)),e&&(t.pathname=e)}return t}function Xe(e,t,n,i){i===void 0&&(i={});let{window:a=document.defaultView,v5Compat:o=!1}=i,l=a.history,c=E.Pop,s=null,u=f();u==null&&(u=0,l.replaceState(D({},l.state,{idx:u}),""));function f(){return(l.state||{idx:null}).idx}function p(){c=E.Pop;let m=f(),C=m==null?null:m-u;u=m,s&&s({action:c,location:x.location,delta:C})}function v(m,C){c=E.Push;let y=ce(x.location,m,C);n&&n(y,m),u=f()+1;let k=ge(y,u),T=x.createHref(y);try{l.pushState(k,"",T)}catch(Q){if(Q instanceof DOMException&&Q.name==="DataCloneError")throw Q;a.location.assign(T)}o&&s&&s({action:c,location:x.location,delta:1})}function w(m,C){c=E.Replace;let y=ce(x.location,m,C);n&&n(y,m),u=f();let k=ge(y,u),T=x.createHref(y);l.replaceState(k,"",T),o&&s&&s({action:c,location:x.location,delta:0})}function g(m){let C=a.location.origin!=="null"?a.location.origin:a.location.href,y=typeof m=="string"?m:J(m);return b(C,"No window.location.(origin|href) available to create URL for href: "+y),new URL(y,C)}let x={get action(){return c},get location(){return e(a,l)},listen(m){if(s)throw new Error("A history only accepts one active listener");return a.addEventListener(me,p),s=m,()=>{a.removeEventListener(me,p),s=null}},createHref(m){return t(a,m)},createURL:g,encodeLocation(m){let C=g(m);return{pathname:C.pathname,search:C.search,hash:C.hash}},push:v,replace:w,go(m){return l.go(m)}};return x}var ve;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(ve||(ve={}));function Qe(e,t,n){n===void 0&&(n="/");let i=typeof t=="string"?O(t):t,a=pe(i.pathname||"/",n);if(a==null)return null;let o=ke(e);Ze(o);let l=null;for(let c=0;l==null&&c<o.length;++c)l=lt(o[c],ut(a));return l}function ke(e,t,n,i){t===void 0&&(t=[]),n===void 0&&(n=[]),i===void 0&&(i="");let a=(o,l,c)=>{let s={relativePath:c===void 0?o.path||"":c,caseSensitive:o.caseSensitive===!0,childrenIndex:l,route:o};s.relativePath.startsWith("/")&&(b(s.relativePath.startsWith(i),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(i.length));let u=z([i,s.relativePath]),f=n.concat(s);o.children&&o.children.length>0&&(b(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),ke(o.children,t,f,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:ot(u,o.index),routesMeta:f})};return e.forEach((o,l)=>{var c;if(o.path===""||!((c=o.path)!=null&&c.includes("?")))a(o,l);else for(let s of Ee(o.path))a(o,l,s)}),t}function Ee(e){let t=e.split("/");if(t.length===0)return[];let[n,...i]=t,a=n.endsWith("?"),o=n.replace(/\?$/,"");if(i.length===0)return a?[o,""]:[o];let l=Ee(i.join("/")),c=[];return c.push(...l.map(s=>s===""?o:[o,s].join("/"))),a&&c.push(...l),c.map(s=>e.startsWith("/")&&s===""?"/":s)}function Ze(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:st(t.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const et=/^:\w+$/,tt=3,nt=2,rt=1,it=10,at=-2,be=e=>e==="*";function ot(e,t){let n=e.split("/"),i=n.length;return n.some(be)&&(i+=at),t&&(i+=nt),n.filter(a=>!be(a)).reduce((a,o)=>a+(et.test(o)?tt:o===""?rt:it),i)}function st(e,t){return e.length===t.length&&e.slice(0,-1).every((i,a)=>i===t[a])?e[e.length-1]-t[t.length-1]:0}function lt(e,t){let{routesMeta:n}=e,i={},a="/",o=[];for(let l=0;l<n.length;++l){let c=n[l],s=l===n.length-1,u=a==="/"?t:t.slice(a.length)||"/",f=ct({path:c.relativePath,caseSensitive:c.caseSensitive,end:s},u);if(!f)return null;Object.assign(i,f.params);let p=c.route;o.push({params:i,pathname:z([a,f.pathname]),pathnameBase:xt(z([a,f.pathnameBase])),route:p}),f.pathnameBase!=="/"&&(a=z([a,f.pathnameBase]))}return o}function ct(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,i]=dt(e.path,e.caseSensitive,e.end),a=t.match(n);if(!a)return null;let o=a[0],l=o.replace(/(.)\/+$/,"$1"),c=a.slice(1);return{params:i.reduce((u,f,p)=>{if(f==="*"){let v=c[p]||"";l=o.slice(0,o.length-v.length).replace(/(.)\/+$/,"$1")}return u[f]=ht(c[p]||"",f),u},{}),pathname:o,pathnameBase:l,pattern:e}}function dt(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Y(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let i=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(l,c)=>(i.push(c),"/([^\\/]+)"));return e.endsWith("*")?(i.push("*"),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),i]}function ut(e){try{return decodeURI(e)}catch(t){return Y(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function ht(e,t){try{return decodeURIComponent(e)}catch(n){return Y(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function pe(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,i=e.charAt(n);return i&&i!=="/"?null:e.slice(n)||"/"}function ft(e,t){t===void 0&&(t="/");let{pathname:n,search:i="",hash:a=""}=typeof e=="string"?O(e):e;return{pathname:n?n.startsWith("/")?n:pt(n,t):t,search:mt(i),hash:gt(a)}}function pt(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?n.length>1&&n.pop():a!=="."&&n.push(a)}),n.length>1?n.join("/"):"/"}function Z(e,t,n,i){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Re(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function ze(e,t,n,i){i===void 0&&(i=!1);let a;typeof e=="string"?a=O(e):(a=D({},e),b(!a.pathname||!a.pathname.includes("?"),Z("?","pathname","search",a)),b(!a.pathname||!a.pathname.includes("#"),Z("#","pathname","hash",a)),b(!a.search||!a.search.includes("#"),Z("#","search","hash",a)));let o=e===""||a.pathname==="",l=o?"/":a.pathname,c;if(i||l==null)c=n;else{let p=t.length-1;if(l.startsWith("..")){let v=l.split("/");for(;v[0]==="..";)v.shift(),p-=1;a.pathname=v.join("/")}c=p>=0?t[p]:"/"}let s=ft(a,c),u=l&&l!=="/"&&l.endsWith("/"),f=(o||l===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(u||f)&&(s.pathname+="/"),s}const z=e=>e.join("/").replace(/\/\/+/g,"/"),xt=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),mt=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,gt=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function vt(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Be=["post","put","patch","delete"];new Set(Be);const bt=["get",...Be];new Set(bt);/**
 * React Router v6.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function q(){return q=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},q.apply(this,arguments)}const xe=d.createContext(null),yt=d.createContext(null),N=d.createContext(null),X=d.createContext(null),U=d.createContext({outlet:null,matches:[],isDataRoute:!1}),Te=d.createContext(null);function jt(e,t){let{relative:n}=t===void 0?{}:t;W()||b(!1);let{basename:i,navigator:a}=d.useContext(N),{hash:o,pathname:l,search:c}=Oe(e,{relative:n}),s=l;return i!=="/"&&(s=l==="/"?i:z([i,l])),a.createHref({pathname:s,search:c,hash:o})}function W(){return d.useContext(X)!=null}function H(){return W()||b(!1),d.useContext(X).location}function Ie(e){d.useContext(N).static||d.useLayoutEffect(e)}function wt(){let{isDataRoute:e}=d.useContext(U);return e?Ut():Ct()}function Ct(){W()||b(!1);let e=d.useContext(xe),{basename:t,navigator:n}=d.useContext(N),{matches:i}=d.useContext(U),{pathname:a}=H(),o=JSON.stringify(Re(i).map(s=>s.pathnameBase)),l=d.useRef(!1);return Ie(()=>{l.current=!0}),d.useCallback(function(s,u){if(u===void 0&&(u={}),!l.current)return;if(typeof s=="number"){n.go(s);return}let f=ze(s,JSON.parse(o),a,u.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:z([t,f.pathname])),(u.replace?n.replace:n.push)(f,u.state,u)},[t,n,o,a,e])}function Oe(e,t){let{relative:n}=t===void 0?{}:t,{matches:i}=d.useContext(U),{pathname:a}=H(),o=JSON.stringify(Re(i).map(l=>l.pathnameBase));return d.useMemo(()=>ze(e,JSON.parse(o),a,n==="path"),[e,o,a,n])}function St(e,t){return Lt(e,t)}function Lt(e,t,n){W()||b(!1);let{navigator:i}=d.useContext(N),{matches:a}=d.useContext(U),o=a[a.length-1],l=o?o.params:{};o&&o.pathname;let c=o?o.pathnameBase:"/";o&&o.route;let s=H(),u;if(t){var f;let x=typeof t=="string"?O(t):t;c==="/"||(f=x.pathname)!=null&&f.startsWith(c)||b(!1),u=x}else u=s;let p=u.pathname||"/",v=c==="/"?p:p.slice(c.length)||"/",w=Qe(e,{pathname:v}),g=zt(w&&w.map(x=>Object.assign({},x,{params:Object.assign({},l,x.params),pathname:z([c,i.encodeLocation?i.encodeLocation(x.pathname).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?c:z([c,i.encodeLocation?i.encodeLocation(x.pathnameBase).pathname:x.pathnameBase])})),a,n);return t&&g?d.createElement(X.Provider,{value:{location:q({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:E.Pop}},g):g}function Pt(){let e=Ot(),t=vt(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return d.createElement(d.Fragment,null,d.createElement("h2",null,"Unexpected Application Error!"),d.createElement("h3",{style:{fontStyle:"italic"}},t),n?d.createElement("pre",{style:a},n):null,o)}const kt=d.createElement(Pt,null);class Et extends d.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?d.createElement(U.Provider,{value:this.props.routeContext},d.createElement(Te.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Rt(e){let{routeContext:t,match:n,children:i}=e,a=d.useContext(xe);return a&&a.static&&a.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=n.route.id),d.createElement(U.Provider,{value:t},i)}function zt(e,t,n){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var a;if((a=n)!=null&&a.errors)e=n.matches;else return null}let o=e,l=(i=n)==null?void 0:i.errors;if(l!=null){let c=o.findIndex(s=>s.route.id&&(l==null?void 0:l[s.route.id]));c>=0||b(!1),o=o.slice(0,Math.min(o.length,c+1))}return o.reduceRight((c,s,u)=>{let f=s.route.id?l==null?void 0:l[s.route.id]:null,p=null;n&&(p=s.route.errorElement||kt);let v=t.concat(o.slice(0,u+1)),w=()=>{let g;return f?g=p:s.route.Component?g=d.createElement(s.route.Component,null):s.route.element?g=s.route.element:g=c,d.createElement(Rt,{match:s,routeContext:{outlet:c,matches:v,isDataRoute:n!=null},children:g})};return n&&(s.route.ErrorBoundary||s.route.errorElement||u===0)?d.createElement(Et,{location:n.location,revalidation:n.revalidation,component:p,error:f,children:w(),routeContext:{outlet:null,matches:v,isDataRoute:!0}}):w()},null)}var de;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate"})(de||(de={}));var V;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId"})(V||(V={}));function Bt(e){let t=d.useContext(xe);return t||b(!1),t}function Tt(e){let t=d.useContext(yt);return t||b(!1),t}function It(e){let t=d.useContext(U);return t||b(!1),t}function Ue(e){let t=It(),n=t.matches[t.matches.length-1];return n.route.id||b(!1),n.route.id}function Ot(){var e;let t=d.useContext(Te),n=Tt(V.UseRouteError),i=Ue(V.UseRouteError);return t||((e=n.errors)==null?void 0:e[i])}function Ut(){let{router:e}=Bt(de.UseNavigateStable),t=Ue(V.UseNavigateStable),n=d.useRef(!1);return Ie(()=>{n.current=!0}),d.useCallback(function(a,o){o===void 0&&(o={}),n.current&&(typeof a=="number"?e.navigate(a):e.navigate(a,q({fromRouteId:t},o)))},[e,t])}function F(e){b(!1)}function Mt(e){let{basename:t="/",children:n=null,location:i,navigationType:a=E.Pop,navigator:o,static:l=!1}=e;W()&&b(!1);let c=t.replace(/^\/*/,"/"),s=d.useMemo(()=>({basename:c,navigator:o,static:l}),[c,o,l]);typeof i=="string"&&(i=O(i));let{pathname:u="/",search:f="",hash:p="",state:v=null,key:w="default"}=i,g=d.useMemo(()=>{let x=pe(u,c);return x==null?null:{location:{pathname:x,search:f,hash:p,state:v,key:w},navigationType:a}},[c,u,f,p,v,w,a]);return g==null?null:d.createElement(N.Provider,{value:s},d.createElement(X.Provider,{children:n,value:g}))}function Ft(e){let{children:t,location:n}=e;return St(ue(t),n)}var ye;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(ye||(ye={}));new Promise(()=>{});function ue(e,t){t===void 0&&(t=[]);let n=[];return d.Children.forEach(e,(i,a)=>{if(!d.isValidElement(i))return;let o=[...t,a];if(i.type===d.Fragment){n.push.apply(n,ue(i.props.children,o));return}i.type!==F&&b(!1),!i.props.index||!i.props.children||b(!1);let l={id:i.props.id||o.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(l.children=ue(i.props.children,o)),n.push(l)}),n}/**
 * React Router DOM v6.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function he(){return he=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},he.apply(this,arguments)}function Nt(e,t){if(e==null)return{};var n={},i=Object.keys(e),a,o;for(o=0;o<i.length;o++)a=i[o],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function $t(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Dt(e,t){return e.button===0&&(!t||t==="_self")&&!$t(e)}const Vt=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],Wt="startTransition",je=Ve[Wt];function Ht(e){let{basename:t,children:n,future:i,window:a}=e,o=d.useRef();o.current==null&&(o.current=Ke({window:a,v5Compat:!0}));let l=o.current,[c,s]=d.useState({action:l.action,location:l.location}),{v7_startTransition:u}=i||{},f=d.useCallback(p=>{u&&je?je(()=>s(p)):s(p)},[s,u]);return d.useLayoutEffect(()=>l.listen(f),[l,f]),d.createElement(Mt,{basename:t,children:n,location:c.location,navigationType:c.action,navigator:l})}const _t=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",At=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,M=d.forwardRef(function(t,n){let{onClick:i,relative:a,reloadDocument:o,replace:l,state:c,target:s,to:u,preventScrollReset:f}=t,p=Nt(t,Vt),{basename:v}=d.useContext(N),w,g=!1;if(typeof u=="string"&&At.test(u)&&(w=u,_t))try{let y=new URL(window.location.href),k=u.startsWith("//")?new URL(y.protocol+u):new URL(u),T=pe(k.pathname,v);k.origin===y.origin&&T!=null?u=T+k.search+k.hash:g=!0}catch{}let x=jt(u,{relative:a}),m=Gt(u,{replace:l,state:c,target:s,preventScrollReset:f,relative:a});function C(y){i&&i(y),y.defaultPrevented||m(y)}return d.createElement("a",he({},p,{href:w||x,onClick:g||o?i:C,ref:n,target:s}))});var we;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher"})(we||(we={}));var Ce;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Ce||(Ce={}));function Gt(e,t){let{target:n,replace:i,state:a,preventScrollReset:o,relative:l}=t===void 0?{}:t,c=wt(),s=H(),u=Oe(e,{relative:l});return d.useCallback(f=>{if(Dt(f,n)){f.preventDefault();let p=i!==void 0?i:J(s)===J(u);c(e,{replace:p,state:a,preventScrollReset:o,relative:l})}},[s,c,u,i,a,n,e,o,l])}const _="/webstories/assets/svg-1-2ddb1a30.svg",Me="/webstories/assets/svg-2-89dd0ad0.svg",Jt="/webstories/assets/svg-3-ae44351c.svg",qt="/webstories/assets/profile-36f18cf7.jpg",Kt={primary:!0,lightBg:!1,lightTopLine:!0,lightText:!0,lightTextDesc:!0,topLine:"Marketing Agency",headline:"Lead Generation Specialist for Online Businesses",description:"We help business owners increase their revenue. Our team of unique specialist can help you achieve your business goals.",buttonLabel:"Get Started",imgStart:"",img:_,alt:"Credit Card",start:""},Yt={primary:!0,lightBg:!1,lightTopLine:!0,lightText:!0,lightTextDesc:!0,topLine:"Instant Setup",headline:"Extremely quick onboarding process",description:"Once you've joined, our team of specialist will reach out to you and get you set up in minutes.",buttonLabel:"Learn More",imgStart:"",img:Me,alt:"Vault",start:""},Xt={primary:!1,lightBg:!0,lightTopLine:!1,lightText:!1,lightTextDesc:!1,topLine:"Sarah Jeni",headline:"Ultra helped me increase my revenue by over 3X in less than 3 months!",description:"Their team is wonderful! I can't believe I didn't start working with them earlier.",buttonLabel:"View Case Study",imgStart:"start",img:qt,alt:"Vault",start:"true"},Qt={primary:!0,lightBg:!1,lightTopLine:!0,lightText:!0,lightTextDesc:!0,topLine:"Secure Database",headline:"All your data is stored on our secure server",description:"You will never have to worry about your information getting leaked. Our team of security experts will ensure your records are kept safe.",buttonLabel:"Sign Up Now",imgStart:"start",img:Jt,alt:"Vault",start:"true"};var Fe={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},K=R.createContext&&R.createContext(Fe),B=globalThis&&globalThis.__assign||function(){return B=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++){t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},B.apply(this,arguments)},Zt=globalThis&&globalThis.__rest||function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,i=Object.getOwnPropertySymbols(e);a<i.length;a++)t.indexOf(i[a])<0&&Object.prototype.propertyIsEnumerable.call(e,i[a])&&(n[i[a]]=e[i[a]]);return n};function Ne(e){return e&&e.map(function(t,n){return R.createElement(t.tag,B({key:n},t.attr),Ne(t.child))})}function S(e){return function(t){return R.createElement(en,B({attr:B({},e.attr)},t),Ne(e.child))}}function en(e){var t=function(n){var i=e.attr,a=e.size,o=e.title,l=Zt(e,["attr","size","title"]),c=a||n.size||"1em",s;return n.className&&(s=n.className),e.className&&(s=(s?s+" ":"")+e.className),R.createElement("svg",B({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,i,l,{className:s,style:B(B({color:e.color||n.color},n.style),e.style),height:c,width:c,xmlns:"http://www.w3.org/2000/svg"}),o&&R.createElement("title",null,o),e.children)};return K!==void 0?R.createElement(K.Consumer,null,function(n){return t(n)}):t(Fe)}function tn(e){return S({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"}}]})(e)}function nn(e){return S({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"}}]})(e)}function rn(e){return S({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"}}]})(e)}function $e(e){return S({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M445.7 127.9V384l-63.4 36.5V164.7L223.8 73.1 65.2 164.7l.4 255.9L2.3 384V128.1L224.2 0l221.5 127.9zM255.6 420.5L224 438.9l-31.8-18.2v-256l-63.3 36.6.1 255.9 94.9 54.9 95.1-54.9v-256l-63.4-36.6v255.9z"}}]})(e)}function an(e){return S({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"}}]})(e)}function on(e){return S({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"}}]})(e)}function sn(e){return S({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"}}]})(e)}function ln(e){return S({tag:"svg",attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"}}]})(e)}We`
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
`;const fe=h.div`
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
`,I=h.button`
  border-radius: 4px;
  background: ${({primary:e})=>e?"#4B59F7":"#0467FB"};
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
    background-color: ${({primary:e})=>e?"#0467FB":"#4B59F7"};
  }
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`,cn=h.nav`
  background: #101522;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
`,dn=h(fe)`
  display: flex;
  justify-content: space-between;
  height: 80px;

  ${fe}
`,un=h(M)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
`,hn=h($e)`
  margin-right: 0.5rem;
`,fn=h.div`
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
`,pn=h.ul`
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
`,ee=h.li`
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
`,te=h(M)`
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
      color: #4b59f7;
      transition: all 0.3s ease;
    }
  }
`,xn=h.li`
  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120px;
  }
`,Se=h(M)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 8px 16px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
`;function mn(){const[e,t]=d.useState(!1),[n,i]=d.useState(!0),[a,o]=d.useState(!1),[l,c]=d.useState(!1),[s,u]=d.useState(!1),f=()=>{o(!0),u(!1),c(!1)},p=()=>{o(!1),u(!1),c(!0)},v=()=>{o(!1),u(!0),c(!1)},w=()=>t(!e),g=()=>t(!1),x=()=>{window.innerwidth<=960?i(!1):i(!0)};return d.useEffect(()=>{x()},[]),window.addEventListener("resize",x),r.jsx(r.Fragment,{children:r.jsx(K.Provider,{value:{color:"#fff"},children:r.jsx(cn,{children:r.jsxs(dn,{children:[r.jsxs(un,{to:"/",children:[r.jsx(hn,{}),"ULTRA"]}),r.jsx(fn,{onClick:w,children:e?r.jsx(ln,{}):r.jsx(sn,{})}),r.jsxs(pn,{onClick:w,click:e,children:[r.jsx(ee,{onClick:f,homeClick:a,children:r.jsx(te,{to:"/",onClick:g,children:"Home"})}),r.jsx(ee,{onClick:p,servicesClick:l,children:r.jsx(te,{to:"/services",onClick:g,children:"Services"})}),r.jsx(ee,{onClick:v,productsClick:s,children:r.jsx(te,{to:"/Products",onClick:g,children:"Products"})}),r.jsx(xn,{children:n?r.jsx(Se,{to:"/sign-up",children:r.jsx(I,{primary:!0,children:"SIGN UP"})}):r.jsx(Se,{to:"/sign-up",children:r.jsx(I,{onClick:g,fontBig:!0,primary:!0,children:"SIGN UP"})})})]})]})})})})}const gn=h.div`
  background-color: #101522;
  padding: 4rem 0 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,vn=h.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 24px;
  padding: 24px;
  color: #fff;
`,bn=h.p`
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
  margin-bottom: 24px;
  font-size: 24px;
`,yn=h.p`
  margin-bottom: 24px;
  font-size: 20px;
`,jn=h.form`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 820px) {
    flex-direction: column;
    width: 80%;
  }
`,wn=h.input`
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
`,Cn=h.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`,Le=h.div`
  display: flex;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`,A=h.div`
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
`,G=h.h2`
  margin-bottom: 16px;
`,j=h(M)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;

  &:hover {
    color: #0467fb;
    transition: 0.3s ease-out;
  }
`,Sn=h.section`
  max-width: 1000px;
  width: 100%;
`,Ln=h.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 1000px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`,Pn=h(M)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;

  &:hover {
    color: #0467fb;
    transition: 0.3s ease-out;
  }
`,kn=h($e)`
  margin-right: 10px;
`,En=h.small`
  color: #fff;
  margin-bottom: 16px;
`,Rn=h.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;

`,$=h.a`
  color: #fff;
  font-size: 24px;

  &:hover {
    color: #0467fb;
    transition: 0.3s ease-out;
  }
`;function zn(){const e=new Date;return r.jsxs(gn,{children:[r.jsxs(vn,{children:[r.jsx(bn,{children:"Join our exclusive membership to receive the latest news and trends"}),r.jsx(yn,{children:"You can unsubscribe at any time."}),r.jsxs(jn,{children:[r.jsx(wn,{name:"email",type:"email",placeholder:"Your Email"}),r.jsx(I,{fontBig:!0,children:"Subscribe"})]})]}),r.jsxs(Cn,{children:[r.jsxs(Le,{children:[r.jsxs(A,{children:[r.jsx(G,{children:"About Us"}),r.jsx(j,{to:"/sign-up",children:"How it works"}),r.jsx(j,{to:"/",children:"Testimonials"}),r.jsx(j,{to:"/",children:"Careers"}),r.jsx(j,{to:"/",children:"Investors"}),r.jsx(j,{to:"/",children:"Terms of Service"})]}),r.jsxs(A,{children:[r.jsx(G,{children:"Contact Us"}),r.jsx(j,{to:"/",children:"Contact"}),r.jsx(j,{to:"/",children:"Support"}),r.jsx(j,{to:"/",children:"Destinations"}),r.jsx(j,{to:"/",children:"Sponsorships"})]})]}),r.jsxs(Le,{children:[r.jsxs(A,{children:[r.jsx(G,{children:"Videos"}),r.jsx(j,{to:"/",children:"Submit Video"}),r.jsx(j,{to:"/",children:"Ambassadors"}),r.jsx(j,{to:"/",children:"Agency"}),r.jsx(j,{to:"/",children:"Influencer"})]}),r.jsxs(A,{children:[r.jsx(G,{children:"Social Media"}),r.jsx(j,{to:"/",children:"Instagram"}),r.jsx(j,{to:"/",children:"Facebook"}),r.jsx(j,{to:"/",children:"Youtube"}),r.jsx(j,{to:"/",children:"Twitter"})]})]})]}),r.jsx(Sn,{children:r.jsxs(Ln,{children:[r.jsxs(Pn,{to:"/",children:[r.jsx(kn,{}),"ULTRA"]}),r.jsxs(En,{children:["ULTRA © ",e.getFullYear()," "]}),r.jsxs(Rn,{children:[r.jsx($,{href:"/",target:"_blank","aria-label":"Facebook",children:r.jsx(tn,{})}),r.jsx($,{href:"/",target:"_blank","aria-label":"Instagram",children:r.jsx(nn,{})}),r.jsx($,{href:"/",target:"_blank","aria-label":"YouTube",children:r.jsx(on,{})}),r.jsx($,{href:"/",target:"_blank","aria-label":"Twitter",children:r.jsx(an,{})}),r.jsx($,{href:"/",target:"_blank","aria-label":"LinkedIn",children:r.jsx(rn,{})})]})]})})]})}const Bn=h.div`
    color: #fff;
    padding: 160px 0;
    background: ${({lightBg:e})=>e?"#fff":"#101522"};
`,Tn=h.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({imgStart:e})=>e?"row-reverse":"row"};
`,Pe=h.div`
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
`,In=h.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;

  @media (min-width: 480px) and (max-width: 1200px) {
    padding-bottom: 65px;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    padding-bottom: 65px;  
  }
`,On=h.div`
  max-width: 555px;
  display: flex;
  justify-content: ${({start:e})=>e?"flex-start":"flex-end"};
`,Un=h.div`
  color: ${({lightTopLine:e})=>e?"#a9b3c1":"#4B59F7"};
  font-size: 18px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
`,Mn=h.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
`,Fn=h.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({lightText:e})=>e?"#f7f8fa":"#1c2237"};
`,Nn=h.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({lightTextDesc:e})=>e?"#a9b3c1":"#1c2237"};
`,P=({primary:e,lightBg:t,topLine:n,lightTopLine:i,lightText:a,lightTextDesc:o,headline:l,description:c,buttonLabel:s,img:u,alt:f,imgStart:p,start:v})=>r.jsx(r.Fragment,{children:r.jsx(Bn,{lightBg:t,children:r.jsx(fe,{children:r.jsxs(Tn,{imgStart:p,children:[r.jsx(Pe,{children:r.jsxs(In,{children:[r.jsx(Un,{lightTopLine:i,children:n}),r.jsx(Fn,{lightText:a,children:l}),r.jsx(Nn,{lightTextDesc:o,children:c}),r.jsx(M,{to:"/sign-up",children:r.jsx(I,{big:!0,fontBig:!0,primary:e,children:s})})]})}),r.jsx(Pe,{children:r.jsx(On,{start:v,children:r.jsx(Mn,{src:u,alt:f})})})]})})})});function $n(e){return S({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M196.844 14.125l-8.75 2.906-43.22 13.44-3.5 1.155-1.75 2.938L30.75 206.593l-14 21.032 5.344 15.156L41.5 308.47l2.344 7 7.594-.595 74.156-4.687 6.437-.563 1.75-5.844 77.095-239.436 1.156-2.938-1.155-2.906-11.125-35.625-2.03-6.094-.032-.25h-.032l-.812-2.405zm123.812 5.25l-2.906 5.844-18.125 40.874-1.75 3.5 1.188 4.094L383.156 274l1.75 4.656 4.657 1.188 64.843 14.03 7.594 1.157V295l2.906-7 26.875-60.72 1.75-4.092-1.75-4.094L390.157 28.688l-2.343-4.657-5.25-.592-55.47-3.5-6.437-.563zM184.594 37.47l7.562 23.936-.906 2.844-89.594 174.125 23.625 31.094-6.874 21.31-32.78-42.5-42.563-.842L38 230.188l1-1.563 46.094.938L183.72 37.75l.874-.28zm147.156 1.75l16.47.874 76.343 153.22 36.5 8.374 11.53 21.718-48.468-10.656-7.22 53.438-18.436-3.844L407.093 201l-77.53-156.72 2.186-5.06zm-79.437 85.28l-5.25 3.5-37.375 25.094-3.5 2.344-.594 4.093L166.47 416.5l-.564 5.25 4.063 3.5 76.53 63.656 6.406 5.282 5.844-5.282 75.344-66.562 4.094-2.938-.594-4.656-28.625-251.125-.564-4.094-4.093-2.342-46.72-29.782-5.28-2.906zm.562 22.53l19.5 12.095 12.25 202.406 30.844 24.908 2.843 24.812-.875.78-40.594-32.905-75.156 48.188-15.094-12.47 79.437-50.687-13.155-217.125zm108.438 148.345l-7.5 37.563 32.218 94 33.595 14.968 19.438-39.375-48.094-85.155-29.657-22zM108.625 350.5l-29.687 10.813L32 431.47l2.625 34.593 31.188-12.75 46.937-70.188-4.125-32.625z"}}]})(e)}function Dn(e){return S({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M92.906 94.813l60.438 79.75 78.125-79.75H92.905zm189.25 0L359.25 173.5l58.688-78.688H282.155zm-25.344.843l-84.718 86.47H341.53l-84.717-86.47zm177.907 7.906l-58.626 78.563H494.53l-59.81-78.563zm-358.064.75l-57.78 77.813h116.78l-59-77.813zm-58.5 96.5L226.562 429.22 143.344 200.81H18.156zm145.063 0l93.593 256.844 93.593-256.844H163.22zm207.06 0L287.064 429.22 495.469 200.81H370.28z"}}]})(e)}function Vn(e){return S({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M291.28 113.14c-21.105-.197-46.504 4.78-76.186 15.538l-61.31 97.62a9 9 0 0 1-7.57 4.214l-105.65.613.278 118.38 94.486.743a9 9 0 0 1 8.53 6.354c7.957 25.855 26.634 40.548 49.097 49.65 18.63 7.55 39.57 10.712 57.074 11.95-.924-9.667-.874-20.846 1.69-31.51 1.845-7.666 5.07-15.214 10.843-21.23 4.665-4.864 11.064-8.425 18.566-9.9-2.417-8.75-1.9-17.564.358-25.414 3.358-11.673 9.468-22.114 14.11-31.853a9 9 0 0 1 .002-.025c.904-8.89.39-20.137 2.015-30.924.813-5.394 2.175-10.806 5.143-15.803 1.907-3.21 4.615-6.177 7.955-8.473l-11.76-29.533c-7.754 29.296-23.77 49.333-40.265 62.213-11.166 8.717-22.448 14.333-31.495 17.992-9.046 3.66-16.89 5.758-17.437 5.955l-6.104-16.933c3.808-1.373 8.865-2.503 16.79-5.71 7.927-3.205 17.69-8.092 27.167-15.49 18.955-14.8 37.084-39.063 38.16-83.08a9 9 0 0 1 17.36-3.11l26.15 65.67c13.382 6.284 22.786 6.51 31.265 3.968 7.728-2.317 15.188-7.56 23.012-13.512-3.2-26.703-10.97-53.765-21.06-81.12-12.893-20.23-30.257-31.92-54.5-35.87-5.236-.853-10.81-1.314-16.718-1.37zm128.425 34.286l-37.166 5.428c8.478 24.046 15.285 48.305 18.58 72.832 25.347 4.217 36.318-.862 54.722-5.698 5.58-20.544 7.754-38.29 3.863-49.715-2.1-6.165-5.503-10.796-11.75-14.734-6.097-3.844-15.258-6.83-28.25-8.114zm33.604 91.8c-15.195 4.203-30.293 8.315-55.456 4.157-9.19 7.16-19.212 14.996-32.14 18.87-12.515 3.753-27.416 3.04-44.187-4.792-1.482.74-2.348 1.687-3.293 3.276-1.194 2.01-2.206 5.216-2.82 9.29-.93 6.17-1.052 14.123-1.467 22.267 42.27 11.538 84.406 18.628 126.424 19.78 10.864-8.28 18.62-17.718 21.59-28.792 3.073-11.467 1.617-25.51-8.65-44.055zm-143.34 70.797c-4.47 9.197-9.032 17.62-11.183 25.1-2.734 9.505-2.687 16.425 5.14 25.7 30.633 19.38 65.708 25.593 102.438 30.464 12.98-8.606 24.286-17.244 29.422-26.133 5.3-9.17 6.31-18.654-3.71-35.334-40.81-1.786-81.518-8.768-122.106-19.797zm-19.943 62.38a9 9 0 0 1-2.386.44c-5.964.33-9.28 2.154-12.087 5.08-2.806 2.924-4.992 7.41-6.332 12.98-2.308 9.597-1.81 21.784-.493 31.19 29.334 14.184 59.095 25.29 93.064 26.41 19.342-4.057 26.193-10.234 30.187-17.71 3.1-5.802 4.263-13.514 5.814-22.45-35.73-4.915-72.027-11.895-104.85-33.11a9 9 0 0 1-1.852-1.592c-.364-.41-.716-.823-1.06-1.238z"}}]})(e)}const Wn=h.div`
  padding: 100px 0 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #4b59f7;
`,Hn=h.div`
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
`,_n=h.h1`
  color: #fff;
  font-size: 48px;
  margin-bottom: 24px;
`,An=h.div`
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
`,ne=h(M)`
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
`,re=h.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  padding: 24px;
  align-items: center;
  color: #fff;
`,ie=h.div`
  margin: 24px 0;
`,ae=h.h3`
  margin-bottom: 5px;
  font-size: 24px;
`,oe=h.h4`
  font-size: 40px;
`,se=h.p`
  font-size: 14px;
  margin-bottom: 24px;
`,le=h.ul`
  margin: 16px 0 32px;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #a9b3c1;
`,L=h.li`
  margin-bottom: 10px;
`,De=()=>r.jsx(K.Provider,{value:{color:"#a9b3c1",size:64},children:r.jsx(Wn,{children:r.jsxs(Hn,{children:[r.jsx(_n,{children:"Our Services"}),r.jsxs(An,{children:[r.jsx(ne,{to:"/sign-up",children:r.jsxs(re,{children:[r.jsx(ie,{children:r.jsx(Vn,{})}),r.jsx(ae,{children:"Starter Pack"}),r.jsx(oe,{children:"$99.99"}),r.jsx(se,{children:"per month"}),r.jsxs(le,{children:[r.jsx(L,{children:"100 New Users"}),r.jsx(L,{children:"$10,000 Budget"}),r.jsx(L,{children:"Retargeting analytics"})]}),r.jsx(I,{primary:!0,children:"Choose Plan"})]})}),r.jsx(ne,{to:"/sign-up",children:r.jsxs(re,{children:[r.jsx(ie,{children:r.jsx($n,{})}),r.jsx(ae,{children:"Gold Rush"}),r.jsx(oe,{children:"$299.99"}),r.jsx(se,{children:"per month"}),r.jsxs(le,{children:[r.jsx(L,{children:"1000 New Users"}),r.jsx(L,{children:"$50,000 Budget"}),r.jsx(L,{children:"Lead Gen Analytics"})]}),r.jsx(I,{primary:!0,children:"Choose Plan"})]})}),r.jsx(ne,{to:"/sign-up",children:r.jsxs(re,{children:[r.jsx(ie,{children:r.jsx(Dn,{})}),r.jsx(ae,{children:"Diamond Kings"}),r.jsx(oe,{children:"$999.99"}),r.jsx(se,{children:"per month"}),r.jsxs(le,{children:[r.jsx(L,{children:"Unlimited Users"}),r.jsx(L,{children:"Unlimited Budget"}),r.jsx(L,{children:"24/7 Support"})]}),r.jsx(I,{primary:!0,children:"Choose Plan"})]})})]})]})})});function Gn(){const{pathname:e}=H();return d.useEffect(()=>{window.scrollTo(0,0)},[e]),null}const Jn=()=>r.jsxs(r.Fragment,{children:[r.jsx(Gn,{}),r.jsx(mn,{}),r.jsx(P,{...Kt}),r.jsx(P,{...Xt}),r.jsx(P,{...Yt}),r.jsx(De,{}),r.jsx(P,{...Qt}),r.jsx(zn,{})]}),qn={lightBg:!1,lightText:!0,lightTopLine:!0,lightTextDesc:!0,topLine:"View Our Products",headline:"Shop through our catalog of products",description:"We provide worldwide shipping to all countries. If there are any issues, just issue a refund and we will process your request",buttonLabel:"Shop Now",imgStart:"",img:_,alt:"Credit Card"},Kn={lightBg:!0,lightText:!1,lightTopLine:!1,lightTextDesc:!1,topLine:"100% Secure",headline:"Stay protected 24/7 anywhere anytime",description:"We have you covered no matter where you are located. Over 140 locations worldwide to ensure you have access anytime",buttonLabel:"Learn More",imgStart:"start",img:Me,alt:"Vault"};function Yn(){return r.jsxs(r.Fragment,{children:[r.jsx(P,{...qn}),r.jsx(P,{...Kn})]})}const Xn={lightBg:!1,lightText:!0,lightTextDesc:!0,topLine:"Exclusive Access",headline:"Unlimited Transactions with zero fees",description:"Get access to our exclusive diamond card that allows you to  send unlimited transactions without getting charged any fees",buttonLabel:"Get Started",imgStart:"",img:_,alt:"Credit Card"},Qn={lightBg:!0,lightText:!1,lightTextDesc:!1,topLine:"Easy Setup",headline:"Super fast and simple onboarding process",description:"Get everything set up and ready in under 10 minutes. All you need to do is add your information and you're ready to go.",buttonLabel:"Start Now",imgStart:"start",img:_,alt:"Vault"};function Zn(){return r.jsxs(r.Fragment,{children:[r.jsx(De,{}),r.jsx(P,{...Xn}),r.jsx(P,{...Qn})]})}const er={lightBg:!0,lightText:!1,lightTopLine:!0,lightTextDesc:!1,topLine:"Sign up Today",headline:"Join today to receive an exclusive offer",description:"Get access to our exclusive diamond king package. Limited quantity available.",buttonLabel:"Sign Up",imgStart:"",img:_,alt:"Credit Card"};function tr(){return r.jsx(r.Fragment,{children:r.jsx(P,{...er})})}He();const nr=()=>{Ae();const{isInitializingIndexDB:e,isRefreshingMedia:t}=Ge(({state:n})=>({isInitializingIndexDB:n.isInitializingIndexDB,isRefreshingMedia:n.isRefreshingMedia}));return!e&&!t?r.jsx(qe,{}):r.jsx("p",{children:"Please wait"})};function rr(){return console.log("/webstories"),r.jsx(Ht,{children:r.jsxs(Ft,{children:[r.jsx(F,{path:"/",element:r.jsx(Jn,{})}),r.jsx(F,{path:"/dashboard",element:r.jsx(_e,{children:r.jsx(nr,{})})}),r.jsx(F,{path:"/services",element:r.jsx(Zn,{})}),r.jsx(F,{path:"/products",element:r.jsx(Yn,{})}),r.jsx(F,{path:"/sign-up",element:r.jsx(tr,{})})]})})}Je.render(r.jsx(R.StrictMode,{children:r.jsx(rr,{})}),document.getElementById("root"));
