import{r as u,R as Ke,e as L,$ as qe,a as h,j as o,b as Xe}from"./styled-components.browser.esm-99cdaa8f.js";/**
 * @remix-run/router v1.7.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function A(){return A=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},A.apply(this,arguments)}var R;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(R||(R={}));const Ue="popstate";function Qe(e){e===void 0&&(e={});function t(s,i){let{pathname:a="/",search:c="",hash:l=""}=O(s.location.hash.substr(1));return be("",{pathname:a,search:c,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(s,i){let a=s.document.querySelector("base"),c="";if(a&&a.getAttribute("href")){let l=s.location.href,m=l.indexOf("#");c=m===-1?l:l.slice(0,m)}return c+"#"+(typeof i=="string"?i:W(i))}function r(s,i){E(s.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(i)+")")}return et(t,n,r,e)}function j(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function E(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Ze(){return Math.random().toString(36).substr(2,8)}function Ve(e,t){return{usr:e.state,key:e.key,idx:t}}function be(e,t,n,r){return n===void 0&&(n=null),A({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?O(t):t,{state:n,key:t&&t.key||r||Ze()})}function W(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function O(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function et(e,t,n,r){r===void 0&&(r={});let{window:s=document.defaultView,v5Compat:i=!1}=r,a=s.history,c=R.Pop,l=null,m=d();m==null&&(m=0,a.replaceState(A({},a.state,{idx:m}),""));function d(){return(a.state||{idx:null}).idx}function f(){c=R.Pop;let x=d(),p=x==null?null:x-m;m=x,l&&l({action:c,location:b.location,delta:p})}function v(x,p){c=R.Push;let N=be(b.location,x,p);n&&n(N,x),m=d()+1;let y=Ve(N,m),C=b.createHref(N);try{a.pushState(y,"",C)}catch(I){if(I instanceof DOMException&&I.name==="DataCloneError")throw I;s.location.assign(C)}i&&l&&l({action:c,location:b.location,delta:1})}function w(x,p){c=R.Replace;let N=be(b.location,x,p);n&&n(N,x),m=d();let y=Ve(N,m),C=b.createHref(N);a.replaceState(y,"",C),i&&l&&l({action:c,location:b.location,delta:0})}function g(x){let p=s.location.origin!=="null"?s.location.origin:s.location.href,N=typeof x=="string"?x:W(x);return j(p,"No window.location.(origin|href) available to create URL for href: "+N),new URL(N,p)}let b={get action(){return c},get location(){return e(s,a)},listen(x){if(l)throw new Error("A history only accepts one active listener");return s.addEventListener(Ue,f),l=x,()=>{s.removeEventListener(Ue,f),l=null}},createHref(x){return t(s,x)},createURL:g,encodeLocation(x){let p=g(x);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:v,replace:w,go(x){return a.go(x)}};return b}var Ce;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Ce||(Ce={}));function tt(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?O(t):t,s=_(r.pathname||"/",n);if(s==null)return null;let i=Ie(e);nt(i);let a=null;for(let c=0;a==null&&c<i.length;++c)a=mt(i[c],ft(s));return a}function Ie(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let s=(i,a,c)=>{let l={relativePath:c===void 0?i.path||"":c,caseSensitive:i.caseSensitive===!0,childrenIndex:a,route:i};l.relativePath.startsWith("/")&&(j(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let m=S([r,l.relativePath]),d=n.concat(l);i.children&&i.children.length>0&&(j(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+m+'".')),Ie(i.children,t,d,m)),!(i.path==null&&!i.index)&&t.push({path:m,score:ct(m,i.index),routesMeta:d})};return e.forEach((i,a)=>{var c;if(i.path===""||!((c=i.path)!=null&&c.includes("?")))s(i,a);else for(let l of ze(i.path))s(i,a,l)}),t}function ze(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,s=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return s?[i,""]:[i];let a=ze(r.join("/")),c=[];return c.push(...a.map(l=>l===""?i:[i,l].join("/"))),s&&c.push(...a),c.map(l=>e.startsWith("/")&&l===""?"/":l)}function nt(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:ut(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const rt=/^:\w+$/,st=3,ot=2,it=1,at=10,lt=-2,Pe=e=>e==="*";function ct(e,t){let n=e.split("/"),r=n.length;return n.some(Pe)&&(r+=lt),t&&(r+=ot),n.filter(s=>!Pe(s)).reduce((s,i)=>s+(rt.test(i)?st:i===""?it:at),r)}function ut(e,t){return e.length===t.length&&e.slice(0,-1).every((r,s)=>r===t[s])?e[e.length-1]-t[t.length-1]:0}function mt(e,t){let{routesMeta:n}=e,r={},s="/",i=[];for(let a=0;a<n.length;++a){let c=n[a],l=a===n.length-1,m=s==="/"?t:t.slice(s.length)||"/",d=dt({path:c.relativePath,caseSensitive:c.caseSensitive,end:l},m);if(!d)return null;Object.assign(r,d.params);let f=c.route;i.push({params:r,pathname:S([s,d.pathname]),pathnameBase:vt(S([s,d.pathnameBase])),route:f}),d.pathnameBase!=="/"&&(s=S([s,d.pathnameBase]))}return i}function dt(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=ht(e.path,e.caseSensitive,e.end),s=t.match(n);if(!s)return null;let i=s[0],a=i.replace(/(.)\/+$/,"$1"),c=s.slice(1);return{params:r.reduce((m,d,f)=>{if(d==="*"){let v=c[f]||"";a=i.slice(0,i.length-v.length).replace(/(.)\/+$/,"$1")}return m[d]=pt(c[f]||"",d),m},{}),pathname:i,pathnameBase:a,pattern:e}}function ht(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),E(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],s="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(a,c)=>(r.push(c),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),s+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?s+="\\/*$":e!==""&&e!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,t?void 0:"i"),r]}function ft(e){try{return decodeURI(e)}catch(t){return E(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function pt(e,t){try{return decodeURIComponent(e)}catch(n){return E(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function _(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function bt(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:s=""}=typeof e=="string"?O(e):e;return{pathname:n?n.startsWith("/")?n:xt(n,t):t,search:gt(r),hash:Nt(s)}}function xt(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(s=>{s===".."?n.length>1&&n.pop():s!=="."&&n.push(s)}),n.length>1?n.join("/"):"/"}function oe(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Be(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Oe(e,t,n,r){r===void 0&&(r=!1);let s;typeof e=="string"?s=O(e):(s=A({},e),j(!s.pathname||!s.pathname.includes("?"),oe("?","pathname","search",s)),j(!s.pathname||!s.pathname.includes("#"),oe("#","pathname","hash",s)),j(!s.search||!s.search.includes("#"),oe("#","search","hash",s)));let i=e===""||s.pathname==="",a=i?"/":s.pathname,c;if(r||a==null)c=n;else{let f=t.length-1;if(a.startsWith("..")){let v=a.split("/");for(;v[0]==="..";)v.shift(),f-=1;s.pathname=v.join("/")}c=f>=0?t[f]:"/"}let l=bt(s,c),m=a&&a!=="/"&&a.endsWith("/"),d=(i||a===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(m||d)&&(l.pathname+="/"),l}const S=e=>e.join("/").replace(/\/\/+/g,"/"),vt=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),gt=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Nt=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function wt(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Me=["post","put","patch","delete"];new Set(Me);const jt=["get",...Me];new Set(jt);/**
 * React Router v6.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function te(){return te=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},te.apply(this,arguments)}const Y=u.createContext(null);Y.displayName="DataRouter";const we=u.createContext(null);we.displayName="DataRouterState";const Dt=u.createContext(null);Dt.displayName="Await";const V=u.createContext(null);V.displayName="Navigation";const G=u.createContext(null);G.displayName="Location";const T=u.createContext({outlet:null,matches:[],isDataRoute:!1});T.displayName="Route";const je=u.createContext(null);je.displayName="RouteError";function yt(e,t){let{relative:n}=t===void 0?{}:t;J()||j(!1,"useHref() may be used only in the context of a <Router> component.");let{basename:r,navigator:s}=u.useContext(V),{hash:i,pathname:a,search:c}=re(e,{relative:n}),l=a;return r!=="/"&&(l=a==="/"?r:S([r,a])),s.createHref({pathname:l,search:c,hash:i})}function J(){return u.useContext(G)!=null}function M(){return J()||j(!1,"useLocation() may be used only in the context of a <Router> component."),u.useContext(G).location}const He="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function $e(e){u.useContext(V).static||u.useLayoutEffect(e)}function Et(){let{isDataRoute:e}=u.useContext(T);return e?Ot():Ut()}function Ut(){J()||j(!1,"useNavigate() may be used only in the context of a <Router> component.");let e=u.useContext(Y),{basename:t,navigator:n}=u.useContext(V),{matches:r}=u.useContext(T),{pathname:s}=M(),i=JSON.stringify(Be(r).map(l=>l.pathnameBase)),a=u.useRef(!1);return $e(()=>{a.current=!0}),u.useCallback(function(l,m){if(m===void 0&&(m={}),E(a.current,He),!a.current)return;if(typeof l=="number"){n.go(l);return}let d=Oe(l,JSON.parse(i),s,m.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:S([t,d.pathname])),(m.replace?n.replace:n.push)(d,m.state,m)},[t,n,i,s,e])}function re(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=u.useContext(T),{pathname:s}=M(),i=JSON.stringify(Be(r).map(a=>a.pathnameBase));return u.useMemo(()=>Oe(e,JSON.parse(i),s,n==="path"),[e,i,s,n])}function Vt(e,t){return Ct(e,t)}function Ct(e,t,n){J()||j(!1,"useRoutes() may be used only in the context of a <Router> component.");let{navigator:r}=u.useContext(V),{matches:s}=u.useContext(T),i=s[s.length-1],a=i?i.params:{},c=i?i.pathname:"/",l=i?i.pathnameBase:"/",m=i&&i.route;{let p=m&&m.path||"";Mt(c,!m||p.endsWith("*"),"You rendered descendant <Routes> (or called `useRoutes()`) at "+('"'+c+'" (under <Route path="'+p+'">) but the ')+`parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

`+('Please change the parent <Route path="'+p+'"> to <Route ')+('path="'+(p==="/"?"*":p+"/*")+'">.'))}let d=M(),f;if(t){var v;let p=typeof t=="string"?O(t):t;l==="/"||(v=p.pathname)!=null&&v.startsWith(l)||j(!1,"When overriding the location using `<Routes location>` or `useRoutes(routes, location)`, the location pathname must begin with the portion of the URL pathname that was "+('matched by all parent routes. The current pathname base is "'+l+'" ')+('but pathname "'+p.pathname+'" was given in the `location` prop.')),f=p}else f=d;let w=f.pathname||"/",g=l==="/"?w:w.slice(l.length)||"/",b=tt(e,{pathname:g});E(m||b!=null,'No routes matched location "'+f.pathname+f.search+f.hash+'" '),E(b==null||b[b.length-1].route.element!==void 0||b[b.length-1].route.Component!==void 0,'Matched leaf route at location "'+f.pathname+f.search+f.hash+'" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.');let x=Lt(b&&b.map(p=>Object.assign({},p,{params:Object.assign({},a,p.params),pathname:S([l,r.encodeLocation?r.encodeLocation(p.pathname).pathname:p.pathname]),pathnameBase:p.pathnameBase==="/"?l:S([l,r.encodeLocation?r.encodeLocation(p.pathnameBase).pathname:p.pathnameBase])})),s,n);return t&&x?u.createElement(G.Provider,{value:{location:te({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:R.Pop}},x):x}function Pt(){let e=Bt(),t=wt(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r="rgba(200,200,200, 0.5)",s={padding:"0.5rem",backgroundColor:r},i={padding:"2px 4px",backgroundColor:r},a=null;return console.error("Error handled by React Router default ErrorBoundary:",e),a=u.createElement(u.Fragment,null,u.createElement("p",null,"💿 Hey developer 👋"),u.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",u.createElement("code",{style:i},"ErrorBoundary")," or"," ",u.createElement("code",{style:i},"errorElement")," prop on your route.")),u.createElement(u.Fragment,null,u.createElement("h2",null,"Unexpected Application Error!"),u.createElement("h3",{style:{fontStyle:"italic"}},t),n?u.createElement("pre",{style:s},n):null,a)}const St=u.createElement(Pt,null);class Tt extends u.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?u.createElement(T.Provider,{value:this.props.routeContext},u.createElement(je.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Rt(e){let{routeContext:t,match:n,children:r}=e,s=u.useContext(Y);return s&&s.static&&s.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=n.route.id),u.createElement(T.Provider,{value:t},r)}function Lt(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var s;if((s=n)!=null&&s.errors)e=n.matches;else return null}let i=e,a=(r=n)==null?void 0:r.errors;if(a!=null){let c=i.findIndex(l=>l.route.id&&(a==null?void 0:a[l.route.id]));c>=0||j(!1,"Could not find a matching route for errors on route IDs: "+Object.keys(a).join(",")),i=i.slice(0,Math.min(i.length,c+1))}return i.reduceRight((c,l,m)=>{let d=l.route.id?a==null?void 0:a[l.route.id]:null,f=null;n&&(f=l.route.errorElement||St);let v=t.concat(i.slice(0,m+1)),w=()=>{let g;return d?g=f:l.route.Component?g=u.createElement(l.route.Component,null):l.route.element?g=l.route.element:g=c,u.createElement(Rt,{match:l,routeContext:{outlet:c,matches:v,isDataRoute:n!=null},children:g})};return n&&(l.route.ErrorBoundary||l.route.errorElement||m===0)?u.createElement(Tt,{location:n.location,revalidation:n.revalidation,component:f,error:d,children:w(),routeContext:{outlet:null,matches:v,isDataRoute:!0}}):w()},null)}var xe;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate"})(xe||(xe={}));var H;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId"})(H||(H={}));function De(e){return e+" must be used within a data router.  See https://reactrouter.com/routers/picking-a-router."}function Ft(e){let t=u.useContext(Y);return t||j(!1,De(e)),t}function kt(e){let t=u.useContext(we);return t||j(!1,De(e)),t}function It(e){let t=u.useContext(T);return t||j(!1,De(e)),t}function ye(e){let t=It(e),n=t.matches[t.matches.length-1];return n.route.id||j(!1,e+' can only be used on routes that contain a unique "id"'),n.route.id}function zt(){return ye(H.UseRouteId)}function Bt(){var e;let t=u.useContext(je),n=kt(H.UseRouteError),r=ye(H.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function Ot(){let{router:e}=Ft(xe.UseNavigateStable),t=ye(H.UseNavigateStable),n=u.useRef(!1);return $e(()=>{n.current=!0}),u.useCallback(function(s,i){i===void 0&&(i={}),E(n.current,He),n.current&&(typeof s=="number"?e.navigate(s):e.navigate(s,te({fromRouteId:t},i)))},[e,t])}const Se={};function Mt(e,t,n){!t&&!Se[e]&&(Se[e]=!0,E(!1,n))}function Ae(e){j(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Ht(e){let{basename:t="/",children:n=null,location:r,navigationType:s=R.Pop,navigator:i,static:a=!1}=e;J()&&j(!1,"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let c=t.replace(/^\/*/,"/"),l=u.useMemo(()=>({basename:c,navigator:i,static:a}),[c,i,a]);typeof r=="string"&&(r=O(r));let{pathname:m="/",search:d="",hash:f="",state:v=null,key:w="default"}=r,g=u.useMemo(()=>{let b=_(m,c);return b==null?null:{location:{pathname:b,search:d,hash:f,state:v,key:w},navigationType:s}},[c,m,d,f,v,w,s]);return E(g!=null,'<Router basename="'+c+'"> is not able to match the URL '+('"'+m+d+f+'" because it does not start with the ')+"basename, so the <Router> won't render anything."),g==null?null:u.createElement(V.Provider,{value:l},u.createElement(G.Provider,{children:n,value:g}))}function $t(e){let{children:t,location:n}=e;return Vt(ve(t),n)}var Te;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(Te||(Te={}));new Promise(()=>{});function ve(e,t){t===void 0&&(t=[]);let n=[];return u.Children.forEach(e,(r,s)=>{if(!u.isValidElement(r))return;let i=[...t,s];if(r.type===u.Fragment){n.push.apply(n,ve(r.props.children,i));return}r.type!==Ae&&j(!1,"["+(typeof r.type=="string"?r.type:r.type.name)+"] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>"),!r.props.index||!r.props.children||j(!1,"An index route cannot have child routes.");let a={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=ve(r.props.children,i)),n.push(a)}),n}/**
 * React Router DOM v6.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function B(){return B=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},B.apply(this,arguments)}function Ee(e,t){if(e==null)return{};var n={},r=Object.keys(e),s,i;for(i=0;i<r.length;i++)s=r[i],!(t.indexOf(s)>=0)&&(n[s]=e[s]);return n}const Z="get",ee="application/x-www-form-urlencoded";function se(e){return e!=null&&typeof e.tagName=="string"}function At(e){return se(e)&&e.tagName.toLowerCase()==="button"}function Wt(e){return se(e)&&e.tagName.toLowerCase()==="form"}function _t(e){return se(e)&&e.tagName.toLowerCase()==="input"}function Yt(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Gt(e,t){return e.button===0&&(!t||t==="_self")&&!Yt(e)}let K=null;function Jt(){if(K===null)try{new FormData(document.createElement("form"),0),K=!1}catch{K=!0}return K}const Kt=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function ie(e){return e!=null&&!Kt.has(e)?(E(!1,'"'+e+'" is not a valid `encType` for `<Form>`/`<fetcher.Form>` '+('and will default to "'+ee+'"')),null):e}function qt(e,t){let n,r,s,i,a;if(Wt(e)){let c=e.getAttribute("action");r=c?_(c,t):null,n=e.getAttribute("method")||Z,s=ie(e.getAttribute("enctype"))||ee,i=new FormData(e)}else if(At(e)||_t(e)&&(e.type==="submit"||e.type==="image")){let c=e.form;if(c==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let l=e.getAttribute("formaction")||c.getAttribute("action");if(r=l?_(l,t):null,n=e.getAttribute("formmethod")||c.getAttribute("method")||Z,s=ie(e.getAttribute("formenctype"))||ie(c.getAttribute("enctype"))||ee,i=new FormData(c,e),!Jt()){let{name:m,type:d,value:f}=e;if(d==="image"){let v=m?m+".":"";i.append(v+"x","0"),i.append(v+"y","0")}else m&&i.append(m,f)}}else{if(se(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=Z,r=null,s=ee,a=e}return i&&s==="text/plain"&&(a=i,i=void 0),{action:r,method:n.toLowerCase(),encType:s,formData:i,body:a}}const Xt=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],Qt=["aria-current","caseSensitive","className","end","style","to","children"],Zt=["reloadDocument","replace","state","method","action","onSubmit","submit","relative","preventScrollReset"],en="startTransition",Re=Ke[en];function tn(e){let{basename:t,children:n,future:r,window:s}=e,i=u.useRef();i.current==null&&(i.current=Qe({window:s,v5Compat:!0}));let a=i.current,[c,l]=u.useState({action:a.action,location:a.location}),{v7_startTransition:m}=r||{},d=u.useCallback(f=>{m&&Re?Re(()=>l(f)):l(f)},[l,m]);return u.useLayoutEffect(()=>a.listen(d),[a,d]),u.createElement(Ht,{basename:t,children:n,location:c.location,navigationType:c.action,navigator:a})}const nn=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",rn=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,k=u.forwardRef(function(t,n){let{onClick:r,relative:s,reloadDocument:i,replace:a,state:c,target:l,to:m,preventScrollReset:d}=t,f=Ee(t,Xt),{basename:v}=u.useContext(V),w,g=!1;if(typeof m=="string"&&rn.test(m)&&(w=m,nn))try{let N=new URL(window.location.href),y=m.startsWith("//")?new URL(N.protocol+m):new URL(m),C=_(y.pathname,v);y.origin===N.origin&&C!=null?m=C+y.search+y.hash:g=!0}catch{E(!1,'<Link to="'+m+'"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.')}let b=yt(m,{relative:s}),x=cn(m,{replace:a,state:c,target:l,preventScrollReset:d,relative:s});function p(N){r&&r(N),N.defaultPrevented||x(N)}return u.createElement("a",B({},f,{href:w||b,onClick:g||i?r:p,ref:n,target:l}))});k.displayName="Link";const sn=u.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:s=!1,className:i="",end:a=!1,style:c,to:l,children:m}=t,d=Ee(t,Qt),f=re(l,{relative:d.relative}),v=M(),w=u.useContext(we),{navigator:g}=u.useContext(V),b=g.encodeLocation?g.encodeLocation(f).pathname:f.pathname,x=v.pathname,p=w&&w.navigation&&w.navigation.location?w.navigation.location.pathname:null;s||(x=x.toLowerCase(),p=p?p.toLowerCase():null,b=b.toLowerCase());let N=x===b||!a&&x.startsWith(b)&&x.charAt(b.length)==="/",y=p!=null&&(p===b||!a&&p.startsWith(b)&&p.charAt(b.length)==="/"),C=N?r:void 0,I;typeof i=="function"?I=i({isActive:N,isPending:y}):I=[i,N?"active":null,y?"pending":null].filter(Boolean).join(" ");let Je=typeof c=="function"?c({isActive:N,isPending:y}):c;return u.createElement(k,B({},d,{"aria-current":C,className:I,ref:n,style:Je,to:l}),typeof m=="function"?m({isActive:N,isPending:y}):m)});sn.displayName="NavLink";const on=u.forwardRef((e,t)=>{let n=mn();return u.createElement(We,B({},e,{submit:n,ref:t}))});on.displayName="Form";const We=u.forwardRef((e,t)=>{let{reloadDocument:n,replace:r,state:s,method:i=Z,action:a,onSubmit:c,submit:l,relative:m,preventScrollReset:d}=e,f=Ee(e,Zt),v=i.toLowerCase()==="get"?"get":"post",w=dn(a,{relative:m}),g=b=>{if(c&&c(b),b.defaultPrevented)return;b.preventDefault();let x=b.nativeEvent.submitter,p=(x==null?void 0:x.getAttribute("formmethod"))||i;l(x||b.currentTarget,{method:p,replace:r,state:s,relative:m,preventScrollReset:d})};return u.createElement("form",B({ref:t,method:v,action:w,onSubmit:n?c:g},f))});We.displayName="FormImpl";var ge;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher"})(ge||(ge={}));var Le;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Le||(Le={}));function an(e){return e+" must be used within a data router.  See https://reactrouter.com/routers/picking-a-router."}function ln(e){let t=u.useContext(Y);return t||j(!1,an(e)),t}function cn(e,t){let{target:n,replace:r,state:s,preventScrollReset:i,relative:a}=t===void 0?{}:t,c=Et(),l=M(),m=re(e,{relative:a});return u.useCallback(d=>{if(Gt(d,n)){d.preventDefault();let f=r!==void 0?r:W(l)===W(m);c(e,{replace:f,state:s,preventScrollReset:i,relative:a})}},[l,c,m,r,s,n,e,i,a])}function un(){if(typeof document>"u")throw new Error("You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.")}function mn(){let{router:e}=ln(ge.UseSubmit),{basename:t}=u.useContext(V),n=zt();return u.useCallback(function(r,s){s===void 0&&(s={}),un();let{action:i,method:a,encType:c,formData:l,body:m}=qt(r,t);e.navigate(s.action||i,{preventScrollReset:s.preventScrollReset,formData:l,body:m,formMethod:s.method||a,formEncType:s.encType||c,replace:s.replace,state:s.state,fromRouteId:n})},[e,t,n])}function dn(e,t){let{relative:n}=t===void 0?{}:t,{basename:r}=u.useContext(V),s=u.useContext(T);s||j(!1,"useFormAction must be used inside a RouteContext");let[i]=s.matches.slice(-1),a=B({},re(e||".",{relative:n})),c=M();if(e==null&&(a.search=c.search,a.hash=c.hash,i.route.index)){let l=new URLSearchParams(a.search);l.delete("index"),a.search=l.toString()?"?"+l.toString():""}return(!e||e===".")&&i.route.index&&(a.search=a.search?a.search.replace(/^\?/,"?index&"):"?index"),r!=="/"&&(a.pathname=a.pathname==="/"?r:S([r,a.pathname])),W(a)}const hn="/webstories/assets/svg-1-a97b9157.svg",fn="/webstories/assets/svg-2-6068b440.svg",pn="/webstories/assets/svg-3-3a1c64a9.svg",bn="/webstories/assets/profile-36f18cf7.jpg",xn={primary:!0,lightBg:!1,lightTopLine:!0,lightText:!0,lightTextDesc:!0,topLine:"Marketing Agency",headline:"Lead Generation Specialist for Online Businesses",description:"We help business owners increase their revenue. Our team of unique specialist can help you achieve your business goals.",buttonLabel:"Get Started",imgStart:"",img:hn,alt:"Credit Card",start:""},vn={primary:!0,lightBg:!1,lightTopLine:!0,lightText:!0,lightTextDesc:!0,topLine:"Instant Setup",headline:"Extremely quick onboarding process",description:"Once you've joined, our team of specialist will reach out to you and get you set up in minutes.",buttonLabel:"Learn More",imgStart:"",img:fn,alt:"Vault",start:""},gn={primary:!1,lightBg:!0,lightTopLine:!1,lightText:!1,lightTextDesc:!1,topLine:"Sarah Jeni",headline:"Ultra helped me increase my revenue by over 3X in less than 3 months!",description:"Their team is wonderful! I can't believe I didn't start working with them earlier.",buttonLabel:"View Case Study",imgStart:"start",img:bn,alt:"Vault",start:"true"},Nn={primary:!0,lightBg:!1,lightTopLine:!0,lightText:!0,lightTextDesc:!0,topLine:"Secure Database",headline:"All your data is stored on our secure server",description:"You will never have to worry about your information getting leaked. Our team of security experts will ensure your records are kept safe.",buttonLabel:"Sign Up Now",imgStart:"start",img:pn,alt:"Vault",start:"true"};var _e={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},ne=L.createContext&&L.createContext(_e),F=globalThis&&globalThis.__assign||function(){return F=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},F.apply(this,arguments)},wn=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)t.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(n[r[s]]=e[r[s]]);return n};function Ye(e){return e&&e.map(function(t,n){return L.createElement(t.tag,F({key:n},t.attr),Ye(t.child))})}function U(e){return function(t){return L.createElement(jn,F({attr:F({},e.attr)},t),Ye(e.child))}}function jn(e){var t=function(n){var r=e.attr,s=e.size,i=e.title,a=wn(e,["attr","size","title"]),c=s||n.size||"1em",l;return n.className&&(l=n.className),e.className&&(l=(l?l+" ":"")+e.className),L.createElement("svg",F({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,a,{className:l,style:F(F({color:e.color||n.color},n.style),e.style),height:c,width:c,xmlns:"http://www.w3.org/2000/svg"}),i&&L.createElement("title",null,i),e.children)};return ne!==void 0?L.createElement(ne.Consumer,null,function(n){return t(n)}):t(_e)}function Dn(e){return U({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"}}]})(e)}function yn(e){return U({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"}}]})(e)}function En(e){return U({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"}}]})(e)}function Ge(e){return U({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M445.7 127.9V384l-63.4 36.5V164.7L223.8 73.1 65.2 164.7l.4 255.9L2.3 384V128.1L224.2 0l221.5 127.9zM255.6 420.5L224 438.9l-31.8-18.2v-256l-63.3 36.6.1 255.9 94.9 54.9 95.1-54.9v-256l-63.4-36.6v255.9z"}}]})(e)}function Un(e){return U({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"}}]})(e)}function Vn(e){return U({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"}}]})(e)}function Cn(e){return U({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"}}]})(e)}function Pn(e){return U({tag:"svg",attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"}}]})(e)}qe`
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
`;const Ne=h.div`
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
`,z=h.button`
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
`,Sn=h.div`
  background-color: #101522;
  padding: 4rem 0 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,Tn=h.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 24px;
  padding: 24px;
  color: #fff;
`,Rn=h.p`
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  margin-bottom: 24px;
  font-size: 24px;
`,Ln=h.p`
  margin-bottom: 24px;
  font-size: 20px;
`,Fn=h.form`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 820px) {
    flex-direction: column;
    width: 80%;
  }
`,kn=h.input`
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
`,In=h.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`,Fe=h.div`
  display: flex;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`,q=h.div`
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
`,X=h.h2`
  margin-bottom: 16px;
`,D=h(k)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;

  &:hover {
    color: rgb(99, 102, 241);
    transition: 0.3s ease-out;
  }
`,zn=h.section`
  max-width: 1000px;
  width: 100%;
`,Bn=h.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 1000px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`,On=h(k)`
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
`,Mn=h(Ge)`
  margin-right: 10px;
`,Hn=h.small`
  color: #fff;
  margin-bottom: 16px;
`,$n=h.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`,$=h.a`
  color: #fff;
  font-size: 24px;

  &:hover {
    color: rgb(99, 102, 241);
    transition: 0.3s ease-out;
  }
`,An=h.nav`
  background: #101522;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
`,Wn=h(Ne)`
  display: flex;
  justify-content: space-between;
  height: 80px;

  ${Ne}
`,_n=h(k)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
`,Yn=h(Ge)`
  margin-right: 0.5rem;
`,Gn=h.div`
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
`,Jn=h.ul`
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
`,ae=h.li`
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
`,le=h(k)`
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
`,Kn=h.li`
  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120px;
  }
`,qn=h(k)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 8px 16px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
`,Xn=h.div`
  color: #fff;
  padding: 160px 0;
  background: ${({lightBg:e})=>e?"#fff":"#101522"};
`,Qn=h.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  align-items: center;
  flex-direction: ${({imgStart:e})=>e?"row-reverse":"row"};
`,ke=h.div`
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
`,Zn=h.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;

  @media (min-width: 480px) and (max-width: 1200px) {
    padding-bottom: 65px;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    padding-bottom: 65px;
  }
`,er=h.div`
  max-width: 555px;
  display: flex;
  justify-content: ${({start:e})=>e?"flex-start":"flex-end"};
`,tr=h.div`
  color: ${({lightTopLine:e})=>e?"#a9b3c1":"rgb(99, 102, 241)"};
  font-size: 18px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
`,nr=h.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
`,rr=h.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({lightText:e})=>e?"#f7f8fa":"#1c2237"};
`,sr=h.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({lightTextDesc:e})=>e?"#a9b3c1":"#1c2237"};
`,or=h.div`
  padding: 100px 0 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: rgb(99, 102, 241);
`,ir=h.div`
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
`,ar=h.h1`
  color: #fff;
  font-size: 48px;
  margin-bottom: 24px;
`,lr=h.div`
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
`,ce=h(k)`
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
`,ue=h.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  padding: 24px;
  align-items: center;
  color: #fff;
`,me=h.div`
  margin: 24px 0;
`,de=h.h3`
  margin-bottom: 5px;
  font-size: 24px;
`,he=h.h4`
  font-size: 40px;
`,fe=h.p`
  font-size: 14px;
  margin-bottom: 24px;
`,pe=h.ul`
  margin: 16px 0 32px;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #a9b3c1;
`,P=h.li`
  margin-bottom: 10px;
`;function cr(){const[e,t]=u.useState(!1),[n,r]=u.useState(!0),[s,i]=u.useState(!1),[a,c]=u.useState(!1),[l,m]=u.useState(!1),d=()=>{i(!0),m(!1),c(!1)},f=()=>{i(!1),m(!1),c(!0)},v=()=>{i(!1),m(!0),c(!1)},w=()=>t(!e),g=()=>t(!1),b=()=>{window.innerwidth<=960?r(!1):r(!0)};return u.useEffect(()=>{b()},[]),window.addEventListener("resize",b),o.jsxDEV(o.Fragment,{children:o.jsxDEV(ne.Provider,{value:{color:"#fff"},children:o.jsxDEV(An,{children:o.jsxDEV(Wn,{children:[o.jsxDEV(_n,{to:"/",children:[o.jsxDEV(Yn,{},void 0,!1,{fileName:"/Users/praveen/Documents/webstories/src/components/website/Navbar.jsx",lineNumber:67,columnNumber:15},this),"ULTRA"]},void 0,!0,{fileName:"/Users/praveen/Documents/webstories/src/components/website/Navbar.jsx",lineNumber:66,columnNumber:13},this),o.jsxDEV(Gn,{onClick:w,children:e?o.jsxDEV(Pn,{},void 0,!1,{fileName:"/Users/praveen/Documents/webstories/src/components/website/Navbar.jsx",lineNumber:71,columnNumber:24},this):o.jsxDEV(Cn,{},void 0,!1,{fileName:"/Users/praveen/Documents/webstories/src/components/website/Navbar.jsx",lineNumber:71,columnNumber:38},this)},void 0,!1,{fileName:"/Users/praveen/Documents/webstories/src/components/website/Navbar.jsx",lineNumber:70,columnNumber:13},this),o.jsxDEV(Jn,{onClick:w,click:e,children:[o.jsxDEV(ae,{onClick:d,homeClick:s,children:o.jsxDEV(le,{to:"/",onClick:g,children:"Home"},void 0,!1,{fileName:"/Users/praveen/Documents/webstories/src/components/website/Navbar.jsx",lineNumber:75,columnNumber:17},this)},void 0,!1,{fileName:"/Users/praveen/Documents/webstories/src/components/website/Navbar.jsx",lineNumber:74,columnNumber:15},this),o.jsxDEV(ae,{onClick:f,servicesClick:a,children:o.jsxDEV(le,{to:"/services",onClick:g,children:"Services"},void 0,!1,{fileName:"/Users/praveen/Documents/webstories/src/components/website/Navbar.jsx",lineNumber:84,columnNumber:17},this)},void 0,!1,{fileName:"/Users/praveen/Documents/webstories/src/components/website/Navbar.jsx",lineNumber:80,columnNumber:15},this),o.jsxDEV(ae,{onClick:v,productsClick:l,children:o.jsxDEV(le,{to:"/Products",onClick:g,children:"Products"},void 0,!1,{fileName:"/Users/praveen/Documents/webstories/src/components/website/Navbar.jsx",lineNumber:93,columnNumber:17},this)},void 0,!1,{fileName:"/Users/praveen/Documents/webstories/src/components/website/Navbar.jsx",lineNumber:89,columnNumber:15},this),o.jsxDEV(Kn,{children:n?o.jsxDEV("a",{href:`${window.location.origin}/webstories-admin/#/auth/login`,children:o.jsxDEV(z,{primary:!0,children:"Dashboard"},void 0,!1,{fileName:"/Users/praveen/Documents/webstories/src/components/website/Navbar.jsx",lineNumber:103,columnNumber:21},this)},void 0,!1,{fileName:"/Users/praveen/Documents/webstories/src/components/website/Navbar.jsx",lineNumber:100,columnNumber:19},this):o.jsxDEV(qn,{to:"/sign-up",children:o.jsxDEV(z,{onClick:g,fontBig:!0,primary:!0,children:"SIGN UP"},void 0,!1,{fileName:"/Users/praveen/Documents/webstories/src/components/website/Navbar.jsx",lineNumber:107,columnNumber:21},this)},void 0,!1,{fileName:"/Users/praveen/Documents/webstories/src/components/website/Navbar.jsx",lineNumber:106,columnNumber:19},this)},void 0,!1,{fileName:"/Users/praveen/Documents/webstories/src/components/website/Navbar.jsx",lineNumber:98,columnNumber:15},this)]},void 0,!0,{fileName:"/Users/praveen/Documents/webstories/src/components/website/Navbar.jsx",lineNumber:73,columnNumber:13},this)]},void 0,!0,{fileName:"/Users/praveen/Documents/webstories/src/components/website/Navbar.jsx",lineNumber:65,columnNumber:11},this)},void 0,!1,{fileName:"/Users/praveen/Documents/webstories/src/components/website/Navbar.jsx",lineNumber:64,columnNumber:9},this)},void 0,!1,{fileName:"/Users/praveen/Documents/webstories/src/components/website/Navbar.jsx",lineNumber:63,columnNumber:7},this)},void 0,!1,{fileName:"/Users/praveen/Documents/webstories/src/components/website/Navbar.jsx",lineNumber:62,columnNumber:5},this)}function ur(){const e=new Date;return o.jsxDEV(Sn,{children:[o.jsxDEV(Tn,{children:[o.jsxDEV(Rn,{children:"Join our exclusive membership to receive the latest news and trends"},void 0,!1,{fileName:"/Users/praveen/Documents/webstories/src/components/website/Footer.jsx",lineNumber:37,columnNumber:9},this),o.jsxDEV(Ln,{children:"You can unsubscribe at any time."},void 0,!1,{fileName:"/Users/praveen/Documents/webstories/src/components/website/Footer.jsx",lineNumber:40,columnNumber:9},this),o.jsxDEV(Fn,{children:[o.jsxDEV(kn,{name:"email",type:"email",placeholder:"Your Email"},void 0,!1,{fileName:"/Users/praveen/Documents/webstories/src/components/website/Footer.jsx",lineNumber:42,columnNumber:11},this),o.jsxDEV(z,{fontBig:!0,children:"Subscribe"},void 0,!1,{fileName:"/Users/praveen/Documents/webstories/src/components/website/Footer.jsx",lineNumber:43,columnNumber:11},this)]},void 0,!0,{fileName:"/Users/praveen/Documents/webstories/src/components/website/Footer.jsx",lineNumber:41,columnNumber:9},this)]},void 0,!0,{fileName:"/Users/praveen/Documents/webstories/src/components/website/Footer.jsx",lineNumber:36,columnNumber:7},this),o.jsxDEV(In,{children:[o.jsxDEV(Fe,{children:[o.jsxDEV(q,{children:[o.jsxDEV(X,{children:"About Us"},void 0,!1,{fileName:"/Users/praveen/Documents/webstories/src/components/website/Footer.jsx",lineNumber:49,columnNumber:13},this),o.jsxDEV(D,{to:"/sign-up",children:"How it works"},void 0,!1,{fileName:"/Users/praveen/Documents/webstories/src/components/website/Footer.jsx",lineNumber:50,columnNumber:13},this),o.jsxDEV(D,{to:"/",children:"Testimonials"},void 0,!1,{fileName:"/Users/praveen/Documents/webstories/src/components/website/Footer.jsx",lineNumber:51,columnNumber:13},this),o.jsxDEV(D,{to:"/",children:"Careers"},void 0,!1,{fileName:"/Users/praveen/Documents/webstories/src/components/website/Footer.jsx",lineNumber:52,columnNumber:13},this),o.jsxDEV(D,{to:"/",children:"Investors"},void 0,!1,{fileName:"/Users/praveen/Documents/webstories/src/components/website/Footer.jsx",lineNumber:53,columnNumber:13},this),o.jsxDEV(D,{to:"/",children:"Terms of Service"},void 0,!1,{fileName:"/Users/praveen/Documents/webstories/src/components/website/Footer.jsx",lineNumber:54,columnNumber:13},this)]},void 0,!0,{fileName:"/Users/praveen/Documents/webstories/src/components/website/Footer.jsx",lineNumber:48,columnNumber:11},this),o.jsxDEV(q,{children:[o.jsxDEV(X,{children:"Contact Us"},void 0,!1,{fileName:"/Users/praveen/Documents/webstories/src/components/website/Footer.jsx",lineNumber:57,columnNumber:13},this),o.jsxDEV(D,{to:"/",children:"Contact"},void 0,!1,{fileName:"/Users/praveen/Documents/webstories/src/components/website/Footer.jsx",lineNumber:58,columnNumber:13},this),o.jsxDEV(D,{to:"/",children:"Support"},void 0,!1,{fileName:"/Users/praveen/Documents/webstories/src/components/website/Footer.jsx",lineNumber:59,columnNumber:13},this),o.jsxDEV(D,{to:"/",children:"Destinations"},void 0,!1,{fileName:"/Users/praveen/Documents/webstories/src/components/website/Footer.jsx",lineNumber:60,columnNumber:13},this),o.jsxDEV(D,{to:"/",children:"Sponsorships"},void 0,!1,{fileName:"/Users/praveen/Documents/webstories/src/components/website/Footer.jsx",lineNumber:61,columnNumber:13},this)]},void 0,!0,{fileName:"/Users/praveen/Documents/webstories/src/components/website/Footer.jsx",lineNumber:56,columnNumber:11},this)]},void 0,!0,{fileName:"/Users/praveen/Documents/webstories/src/components/website/Footer.jsx",lineNumber:47,columnNumber:9},this),o.jsxDEV(Fe,{children:[o.jsxDEV(q,{children:[o.jsxDEV(X,{children:"Videos"},void 0,!1,{fileName:"/Users/praveen/Documents/webstories/src/components/website/Footer.jsx",lineNumber:66,columnNumber:13},this),o.jsxDEV(D,{to:"/",children:"Submit Video"},void 0,!1,{fileName:"/Users/praveen/Documents/webstories/src/components/website/Footer.jsx",lineNumber:67,columnNumber:13},this),o.jsxDEV(D,{to:"/",children:"Ambassadors"},void 0,!1,{fileName:"/Users/praveen/Documents/webstories/src/components/website/Footer.jsx",lineNumber:68,columnNumber:13},this),o.jsxDEV(D,{to:"/",children:"Agency"},void 0,!1,{fileName:"/Users/praveen/Documents/webstories/src/components/website/Footer.jsx",lineNumber:69,columnNumber:13},this),o.jsxDEV(D,{to:"/",children:"Influencer"},void 0,!1,{fileName:"/Users/praveen/Documents/webstories/src/components/website/Footer.jsx",lineNumber:70,columnNumber:13},this)]},void 0,!0,{fileName:"/Users/praveen/Documents/webstories/src/components/website/Footer.jsx",lineNumber:65,columnNumber:11},this),o.jsxDEV(q,{children:[o.jsxDEV(X,{children:"Social Media"},void 0,!1,{fileName:"/Users/praveen/Documents/webstories/src/components/website/Footer.jsx",lineNumber:73,columnNumber:13},this),o.jsxDEV(D,{to:"/",children:"Instagram"},void 0,!1,{fileName:"/Users/praveen/Documents/webstories/src/components/website/Footer.jsx",lineNumber:74,columnNumber:13},this),o.jsxDEV(D,{to:"/",children:"Facebook"},void 0,!1,{fileName:"/Users/praveen/Documents/webstories/src/components/website/Footer.jsx",lineNumber:75,columnNumber:13},this),o.jsxDEV(D,{to:"/",children:"Youtube"},void 0,!1,{fileName:"/Users/praveen/Documents/webstories/src/components/website/Footer.jsx",lineNumber:76,columnNumber:13},this),o.jsxDEV(D,{to:"/",children:"Twitter"},void 0,!1,{fileName:"/Users/praveen/Documents/webstories/src/components/website/Footer.jsx",lineNumber:77,columnNumber:13},this)]},void 0,!0,{fileName:"/Users/praveen/Documents/webstories/src/components/website/Footer.jsx",lineNumber:72,columnNumber:11},this)]},void 0,!0,{fileName:"/Users/praveen/Documents/webstories/src/components/website/Footer.jsx",lineNumber:64,columnNumber:9},this)]},void 0,!0,{fileName:"/Users/praveen/Documents/webstories/src/components/website/Footer.jsx",lineNumber:46,columnNumber:7},this),o.jsxDEV(zn,{children:o.jsxDEV(Bn,{children:[o.jsxDEV(On,{to:"/",children:[o.jsxDEV(Mn,{},void 0,!1,{fileName:"/Users/praveen/Documents/webstories/src/components/website/Footer.jsx",lineNumber:84,columnNumber:13},this),"ULTRA"]},void 0,!0,{fileName:"/Users/praveen/Documents/webstories/src/components/website/Footer.jsx",lineNumber:83,columnNumber:11},this),o.jsxDEV(Hn,{children:["ULTRA © ",e.getFullYear()," "]},void 0,!0,{fileName:"/Users/praveen/Documents/webstories/src/components/website/Footer.jsx",lineNumber:87,columnNumber:11},this),o.jsxDEV($n,{children:[o.jsxDEV($,{href:"/",target:"_blank","aria-label":"Facebook",children:o.jsxDEV(Dn,{},void 0,!1,{fileName:"/Users/praveen/Documents/webstories/src/components/website/Footer.jsx",lineNumber:90,columnNumber:15},this)},void 0,!1,{fileName:"/Users/praveen/Documents/webstories/src/components/website/Footer.jsx",lineNumber:89,columnNumber:13},this),o.jsxDEV($,{href:"/",target:"_blank","aria-label":"Instagram",children:o.jsxDEV(yn,{},void 0,!1,{fileName:"/Users/praveen/Documents/webstories/src/components/website/Footer.jsx",lineNumber:93,columnNumber:15},this)},void 0,!1,{fileName:"/Users/praveen/Documents/webstories/src/components/website/Footer.jsx",lineNumber:92,columnNumber:13},this),o.jsxDEV($,{href:"/",target:"_blank","aria-label":"YouTube",children:o.jsxDEV(Vn,{},void 0,!1,{fileName:"/Users/praveen/Documents/webstories/src/components/website/Footer.jsx",lineNumber:96,columnNumber:15},this)},void 0,!1,{fileName:"/Users/praveen/Documents/webstories/src/components/website/Footer.jsx",lineNumber:95,columnNumber:13},this),o.jsxDEV($,{href:"/",target:"_blank","aria-label":"Twitter",children:o.jsxDEV(Un,{},void 0,!1,{fileName:"/Users/praveen/Documents/webstories/src/components/website/Footer.jsx",lineNumber:99,columnNumber:15},this)},void 0,!1,{fileName:"/Users/praveen/Documents/webstories/src/components/website/Footer.jsx",lineNumber:98,columnNumber:13},this),o.jsxDEV($,{href:"/",target:"_blank","aria-label":"LinkedIn",children:o.jsxDEV(En,{},void 0,!1,{fileName:"/Users/praveen/Documents/webstories/src/components/website/Footer.jsx",lineNumber:102,columnNumber:15},this)},void 0,!1,{fileName:"/Users/praveen/Documents/webstories/src/components/website/Footer.jsx",lineNumber:101,columnNumber:13},this)]},void 0,!0,{fileName:"/Users/praveen/Documents/webstories/src/components/website/Footer.jsx",lineNumber:88,columnNumber:11},this)]},void 0,!0,{fileName:"/Users/praveen/Documents/webstories/src/components/website/Footer.jsx",lineNumber:82,columnNumber:9},this)},void 0,!1,{fileName:"/Users/praveen/Documents/webstories/src/components/website/Footer.jsx",lineNumber:81,columnNumber:7},this)]},void 0,!0,{fileName:"/Users/praveen/Documents/webstories/src/components/website/Footer.jsx",lineNumber:35,columnNumber:5},this)}const Q=({primary:e,lightBg:t,topLine:n,lightTopLine:r,lightText:s,lightTextDesc:i,headline:a,description:c,buttonLabel:l,img:m,alt:d,imgStart:f,start:v})=>o.jsxDEV(o.Fragment,{children:o.jsxDEV(Xn,{lightBg:t,children:o.jsxDEV(Ne,{children:o.jsxDEV(Qn,{imgStart:f,children:[o.jsxDEV(ke,{children:o.jsxDEV(Zn,{children:[o.jsxDEV(tr,{lightTopLine:r,children:n},void 0,!1,{fileName:"/Users/praveen/Documents/webstories/src/components/website/InfoSection.jsx",lineNumber:38,columnNumber:17},globalThis),o.jsxDEV(rr,{lightText:s,children:a},void 0,!1,{fileName:"/Users/praveen/Documents/webstories/src/components/website/InfoSection.jsx",lineNumber:39,columnNumber:17},globalThis),o.jsxDEV(sr,{lightTextDesc:i,children:c},void 0,!1,{fileName:"/Users/praveen/Documents/webstories/src/components/website/InfoSection.jsx",lineNumber:40,columnNumber:17},globalThis),o.jsxDEV("a",{href:`${window.location.origin}/webstories-admin/#/auth/login`,children:o.jsxDEV(z,{big:!0,fontBig:!0,primary:e,children:l},void 0,!1,{fileName:"/Users/praveen/Documents/webstories/src/components/website/InfoSection.jsx",lineNumber:44,columnNumber:19},globalThis)},void 0,!1,{fileName:"/Users/praveen/Documents/webstories/src/components/website/InfoSection.jsx",lineNumber:41,columnNumber:17},globalThis)]},void 0,!0,{fileName:"/Users/praveen/Documents/webstories/src/components/website/InfoSection.jsx",lineNumber:37,columnNumber:15},globalThis)},void 0,!1,{fileName:"/Users/praveen/Documents/webstories/src/components/website/InfoSection.jsx",lineNumber:36,columnNumber:13},globalThis),o.jsxDEV(ke,{children:o.jsxDEV(er,{start:v,children:o.jsxDEV(nr,{src:m,alt:d},void 0,!1,{fileName:"/Users/praveen/Documents/webstories/src/components/website/InfoSection.jsx",lineNumber:52,columnNumber:17},globalThis)},void 0,!1,{fileName:"/Users/praveen/Documents/webstories/src/components/website/InfoSection.jsx",lineNumber:51,columnNumber:15},globalThis)},void 0,!1,{fileName:"/Users/praveen/Documents/webstories/src/components/website/InfoSection.jsx",lineNumber:50,columnNumber:13},globalThis)]},void 0,!0,{fileName:"/Users/praveen/Documents/webstories/src/components/website/InfoSection.jsx",lineNumber:35,columnNumber:11},globalThis)},void 0,!1,{fileName:"/Users/praveen/Documents/webstories/src/components/website/InfoSection.jsx",lineNumber:34,columnNumber:9},globalThis)},void 0,!1,{fileName:"/Users/praveen/Documents/webstories/src/components/website/InfoSection.jsx",lineNumber:33,columnNumber:7},globalThis)},void 0,!1,{fileName:"/Users/praveen/Documents/webstories/src/components/website/InfoSection.jsx",lineNumber:32,columnNumber:5},globalThis);function mr(e){return U({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M196.844 14.125l-8.75 2.906-43.22 13.44-3.5 1.155-1.75 2.938L30.75 206.593l-14 21.032 5.344 15.156L41.5 308.47l2.344 7 7.594-.595 74.156-4.687 6.437-.563 1.75-5.844 77.095-239.436 1.156-2.938-1.155-2.906-11.125-35.625-2.03-6.094-.032-.25h-.032l-.812-2.405zm123.812 5.25l-2.906 5.844-18.125 40.874-1.75 3.5 1.188 4.094L383.156 274l1.75 4.656 4.657 1.188 64.843 14.03 7.594 1.157V295l2.906-7 26.875-60.72 1.75-4.092-1.75-4.094L390.157 28.688l-2.343-4.657-5.25-.592-55.47-3.5-6.437-.563zM184.594 37.47l7.562 23.936-.906 2.844-89.594 174.125 23.625 31.094-6.874 21.31-32.78-42.5-42.563-.842L38 230.188l1-1.563 46.094.938L183.72 37.75l.874-.28zm147.156 1.75l16.47.874 76.343 153.22 36.5 8.374 11.53 21.718-48.468-10.656-7.22 53.438-18.436-3.844L407.093 201l-77.53-156.72 2.186-5.06zm-79.437 85.28l-5.25 3.5-37.375 25.094-3.5 2.344-.594 4.093L166.47 416.5l-.564 5.25 4.063 3.5 76.53 63.656 6.406 5.282 5.844-5.282 75.344-66.562 4.094-2.938-.594-4.656-28.625-251.125-.564-4.094-4.093-2.342-46.72-29.782-5.28-2.906zm.562 22.53l19.5 12.095 12.25 202.406 30.844 24.908 2.843 24.812-.875.78-40.594-32.905-75.156 48.188-15.094-12.47 79.437-50.687-13.155-217.125zm108.438 148.345l-7.5 37.563 32.218 94 33.595 14.968 19.438-39.375-48.094-85.155-29.657-22zM108.625 350.5l-29.687 10.813L32 431.47l2.625 34.593 31.188-12.75 46.937-70.188-4.125-32.625z"}}]})(e)}function dr(e){return U({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M92.906 94.813l60.438 79.75 78.125-79.75H92.905zm189.25 0L359.25 173.5l58.688-78.688H282.155zm-25.344.843l-84.718 86.47H341.53l-84.717-86.47zm177.907 7.906l-58.626 78.563H494.53l-59.81-78.563zm-358.064.75l-57.78 77.813h116.78l-59-77.813zm-58.5 96.5L226.562 429.22 143.344 200.81H18.156zm145.063 0l93.593 256.844 93.593-256.844H163.22zm207.06 0L287.064 429.22 495.469 200.81H370.28z"}}]})(e)}function hr(e){return U({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M291.28 113.14c-21.105-.197-46.504 4.78-76.186 15.538l-61.31 97.62a9 9 0 0 1-7.57 4.214l-105.65.613.278 118.38 94.486.743a9 9 0 0 1 8.53 6.354c7.957 25.855 26.634 40.548 49.097 49.65 18.63 7.55 39.57 10.712 57.074 11.95-.924-9.667-.874-20.846 1.69-31.51 1.845-7.666 5.07-15.214 10.843-21.23 4.665-4.864 11.064-8.425 18.566-9.9-2.417-8.75-1.9-17.564.358-25.414 3.358-11.673 9.468-22.114 14.11-31.853a9 9 0 0 1 .002-.025c.904-8.89.39-20.137 2.015-30.924.813-5.394 2.175-10.806 5.143-15.803 1.907-3.21 4.615-6.177 7.955-8.473l-11.76-29.533c-7.754 29.296-23.77 49.333-40.265 62.213-11.166 8.717-22.448 14.333-31.495 17.992-9.046 3.66-16.89 5.758-17.437 5.955l-6.104-16.933c3.808-1.373 8.865-2.503 16.79-5.71 7.927-3.205 17.69-8.092 27.167-15.49 18.955-14.8 37.084-39.063 38.16-83.08a9 9 0 0 1 17.36-3.11l26.15 65.67c13.382 6.284 22.786 6.51 31.265 3.968 7.728-2.317 15.188-7.56 23.012-13.512-3.2-26.703-10.97-53.765-21.06-81.12-12.893-20.23-30.257-31.92-54.5-35.87-5.236-.853-10.81-1.314-16.718-1.37zm128.425 34.286l-37.166 5.428c8.478 24.046 15.285 48.305 18.58 72.832 25.347 4.217 36.318-.862 54.722-5.698 5.58-20.544 7.754-38.29 3.863-49.715-2.1-6.165-5.503-10.796-11.75-14.734-6.097-3.844-15.258-6.83-28.25-8.114zm33.604 91.8c-15.195 4.203-30.293 8.315-55.456 4.157-9.19 7.16-19.212 14.996-32.14 18.87-12.515 3.753-27.416 3.04-44.187-4.792-1.482.74-2.348 1.687-3.293 3.276-1.194 2.01-2.206 5.216-2.82 9.29-.93 6.17-1.052 14.123-1.467 22.267 42.27 11.538 84.406 18.628 126.424 19.78 10.864-8.28 18.62-17.718 21.59-28.792 3.073-11.467 1.617-25.51-8.65-44.055zm-143.34 70.797c-4.47 9.197-9.032 17.62-11.183 25.1-2.734 9.505-2.687 16.425 5.14 25.7 30.633 19.38 65.708 25.593 102.438 30.464 12.98-8.606 24.286-17.244 29.422-26.133 5.3-9.17 6.31-18.654-3.71-35.334-40.81-1.786-81.518-8.768-122.106-19.797zm-19.943 62.38a9 9 0 0 1-2.386.44c-5.964.33-9.28 2.154-12.087 5.08-2.806 2.924-4.992 7.41-6.332 12.98-2.308 9.597-1.81 21.784-.493 31.19 29.334 14.184 59.095 25.29 93.064 26.41 19.342-4.057 26.193-10.234 30.187-17.71 3.1-5.802 4.263-13.514 5.814-22.45-35.73-4.915-72.027-11.895-104.85-33.11a9 9 0 0 1-1.852-1.592c-.364-.41-.716-.823-1.06-1.238z"}}]})(e)}const fr=()=>o.jsxDEV(ne.Provider,{value:{color:"#a9b3c1",size:64},children:o.jsxDEV(or,{children:o.jsxDEV(ir,{children:[o.jsxDEV(ar,{children:"Our Services"},void 0,!1,{fileName:"/Users/praveen/Documents/webstories/src/components/website/Pricing.jsx",lineNumber:28,columnNumber:11},globalThis),o.jsxDEV(lr,{children:[o.jsxDEV(ce,{to:"/sign-up",children:o.jsxDEV(ue,{children:[o.jsxDEV(me,{children:o.jsxDEV(hr,{},void 0,!1,{fileName:"/Users/praveen/Documents/webstories/src/components/website/Pricing.jsx",lineNumber:33,columnNumber:19},globalThis)},void 0,!1,{fileName:"/Users/praveen/Documents/webstories/src/components/website/Pricing.jsx",lineNumber:32,columnNumber:17},globalThis),o.jsxDEV(de,{children:"Starter Pack"},void 0,!1,{fileName:"/Users/praveen/Documents/webstories/src/components/website/Pricing.jsx",lineNumber:35,columnNumber:17},globalThis),o.jsxDEV(he,{children:"$99.99"},void 0,!1,{fileName:"/Users/praveen/Documents/webstories/src/components/website/Pricing.jsx",lineNumber:36,columnNumber:17},globalThis),o.jsxDEV(fe,{children:"per month"},void 0,!1,{fileName:"/Users/praveen/Documents/webstories/src/components/website/Pricing.jsx",lineNumber:37,columnNumber:17},globalThis),o.jsxDEV(pe,{children:[o.jsxDEV(P,{children:"100 New Users"},void 0,!1,{fileName:"/Users/praveen/Documents/webstories/src/components/website/Pricing.jsx",lineNumber:39,columnNumber:19},globalThis),o.jsxDEV(P,{children:"$10,000 Budget"},void 0,!1,{fileName:"/Users/praveen/Documents/webstories/src/components/website/Pricing.jsx",lineNumber:40,columnNumber:19},globalThis),o.jsxDEV(P,{children:"Retargeting analytics"},void 0,!1,{fileName:"/Users/praveen/Documents/webstories/src/components/website/Pricing.jsx",lineNumber:41,columnNumber:19},globalThis)]},void 0,!0,{fileName:"/Users/praveen/Documents/webstories/src/components/website/Pricing.jsx",lineNumber:38,columnNumber:17},globalThis),o.jsxDEV(z,{primary:!0,children:"Choose Plan"},void 0,!1,{fileName:"/Users/praveen/Documents/webstories/src/components/website/Pricing.jsx",lineNumber:43,columnNumber:17},globalThis)]},void 0,!0,{fileName:"/Users/praveen/Documents/webstories/src/components/website/Pricing.jsx",lineNumber:31,columnNumber:15},globalThis)},void 0,!1,{fileName:"/Users/praveen/Documents/webstories/src/components/website/Pricing.jsx",lineNumber:30,columnNumber:13},globalThis),o.jsxDEV(ce,{to:"/sign-up",children:o.jsxDEV(ue,{children:[o.jsxDEV(me,{children:o.jsxDEV(mr,{},void 0,!1,{fileName:"/Users/praveen/Documents/webstories/src/components/website/Pricing.jsx",lineNumber:49,columnNumber:19},globalThis)},void 0,!1,{fileName:"/Users/praveen/Documents/webstories/src/components/website/Pricing.jsx",lineNumber:48,columnNumber:17},globalThis),o.jsxDEV(de,{children:"Gold Rush"},void 0,!1,{fileName:"/Users/praveen/Documents/webstories/src/components/website/Pricing.jsx",lineNumber:51,columnNumber:17},globalThis),o.jsxDEV(he,{children:"$299.99"},void 0,!1,{fileName:"/Users/praveen/Documents/webstories/src/components/website/Pricing.jsx",lineNumber:52,columnNumber:17},globalThis),o.jsxDEV(fe,{children:"per month"},void 0,!1,{fileName:"/Users/praveen/Documents/webstories/src/components/website/Pricing.jsx",lineNumber:53,columnNumber:17},globalThis),o.jsxDEV(pe,{children:[o.jsxDEV(P,{children:"1000 New Users"},void 0,!1,{fileName:"/Users/praveen/Documents/webstories/src/components/website/Pricing.jsx",lineNumber:55,columnNumber:19},globalThis),o.jsxDEV(P,{children:"$50,000 Budget"},void 0,!1,{fileName:"/Users/praveen/Documents/webstories/src/components/website/Pricing.jsx",lineNumber:56,columnNumber:19},globalThis),o.jsxDEV(P,{children:"Lead Gen Analytics"},void 0,!1,{fileName:"/Users/praveen/Documents/webstories/src/components/website/Pricing.jsx",lineNumber:57,columnNumber:19},globalThis)]},void 0,!0,{fileName:"/Users/praveen/Documents/webstories/src/components/website/Pricing.jsx",lineNumber:54,columnNumber:17},globalThis),o.jsxDEV(z,{primary:!0,children:"Choose Plan"},void 0,!1,{fileName:"/Users/praveen/Documents/webstories/src/components/website/Pricing.jsx",lineNumber:59,columnNumber:17},globalThis)]},void 0,!0,{fileName:"/Users/praveen/Documents/webstories/src/components/website/Pricing.jsx",lineNumber:47,columnNumber:15},globalThis)},void 0,!1,{fileName:"/Users/praveen/Documents/webstories/src/components/website/Pricing.jsx",lineNumber:46,columnNumber:13},globalThis),o.jsxDEV(ce,{to:"/sign-up",children:o.jsxDEV(ue,{children:[o.jsxDEV(me,{children:o.jsxDEV(dr,{},void 0,!1,{fileName:"/Users/praveen/Documents/webstories/src/components/website/Pricing.jsx",lineNumber:65,columnNumber:19},globalThis)},void 0,!1,{fileName:"/Users/praveen/Documents/webstories/src/components/website/Pricing.jsx",lineNumber:64,columnNumber:17},globalThis),o.jsxDEV(de,{children:"Diamond Kings"},void 0,!1,{fileName:"/Users/praveen/Documents/webstories/src/components/website/Pricing.jsx",lineNumber:67,columnNumber:17},globalThis),o.jsxDEV(he,{children:"$999.99"},void 0,!1,{fileName:"/Users/praveen/Documents/webstories/src/components/website/Pricing.jsx",lineNumber:68,columnNumber:17},globalThis),o.jsxDEV(fe,{children:"per month"},void 0,!1,{fileName:"/Users/praveen/Documents/webstories/src/components/website/Pricing.jsx",lineNumber:69,columnNumber:17},globalThis),o.jsxDEV(pe,{children:[o.jsxDEV(P,{children:"Unlimited Users"},void 0,!1,{fileName:"/Users/praveen/Documents/webstories/src/components/website/Pricing.jsx",lineNumber:71,columnNumber:19},globalThis),o.jsxDEV(P,{children:"Unlimited Budget"},void 0,!1,{fileName:"/Users/praveen/Documents/webstories/src/components/website/Pricing.jsx",lineNumber:72,columnNumber:19},globalThis),o.jsxDEV(P,{children:"24/7 Support"},void 0,!1,{fileName:"/Users/praveen/Documents/webstories/src/components/website/Pricing.jsx",lineNumber:73,columnNumber:19},globalThis)]},void 0,!0,{fileName:"/Users/praveen/Documents/webstories/src/components/website/Pricing.jsx",lineNumber:70,columnNumber:17},globalThis),o.jsxDEV(z,{primary:!0,children:"Choose Plan"},void 0,!1,{fileName:"/Users/praveen/Documents/webstories/src/components/website/Pricing.jsx",lineNumber:75,columnNumber:17},globalThis)]},void 0,!0,{fileName:"/Users/praveen/Documents/webstories/src/components/website/Pricing.jsx",lineNumber:63,columnNumber:15},globalThis)},void 0,!1,{fileName:"/Users/praveen/Documents/webstories/src/components/website/Pricing.jsx",lineNumber:62,columnNumber:13},globalThis)]},void 0,!0,{fileName:"/Users/praveen/Documents/webstories/src/components/website/Pricing.jsx",lineNumber:29,columnNumber:11},globalThis)]},void 0,!0,{fileName:"/Users/praveen/Documents/webstories/src/components/website/Pricing.jsx",lineNumber:27,columnNumber:9},globalThis)},void 0,!1,{fileName:"/Users/praveen/Documents/webstories/src/components/website/Pricing.jsx",lineNumber:26,columnNumber:7},globalThis)},void 0,!1,{fileName:"/Users/praveen/Documents/webstories/src/components/website/Pricing.jsx",lineNumber:25,columnNumber:5},globalThis);function pr(){const{pathname:e}=M();return u.useEffect(()=>{window.scrollTo(0,0)},[e]),null}const br=()=>o.jsxDEV(o.Fragment,{children:[o.jsxDEV(pr,{},void 0,!1,{fileName:"/Users/praveen/Documents/webstories/src/pages/HomePage/Home.jsx",lineNumber:8,columnNumber:7},globalThis),o.jsxDEV(cr,{},void 0,!1,{fileName:"/Users/praveen/Documents/webstories/src/pages/HomePage/Home.jsx",lineNumber:9,columnNumber:7},globalThis),o.jsxDEV(Q,{...xn},void 0,!1,{fileName:"/Users/praveen/Documents/webstories/src/pages/HomePage/Home.jsx",lineNumber:10,columnNumber:7},globalThis),o.jsxDEV(Q,{...gn},void 0,!1,{fileName:"/Users/praveen/Documents/webstories/src/pages/HomePage/Home.jsx",lineNumber:11,columnNumber:7},globalThis),o.jsxDEV(Q,{...vn},void 0,!1,{fileName:"/Users/praveen/Documents/webstories/src/pages/HomePage/Home.jsx",lineNumber:12,columnNumber:7},globalThis),o.jsxDEV(fr,{},void 0,!1,{fileName:"/Users/praveen/Documents/webstories/src/pages/HomePage/Home.jsx",lineNumber:13,columnNumber:7},globalThis),o.jsxDEV(Q,{...Nn},void 0,!1,{fileName:"/Users/praveen/Documents/webstories/src/pages/HomePage/Home.jsx",lineNumber:14,columnNumber:7},globalThis),o.jsxDEV(ur,{},void 0,!1,{fileName:"/Users/praveen/Documents/webstories/src/pages/HomePage/Home.jsx",lineNumber:15,columnNumber:7},globalThis)]},void 0,!0,{fileName:"/Users/praveen/Documents/webstories/src/pages/HomePage/Home.jsx",lineNumber:7,columnNumber:5},globalThis);function xr(){return o.jsxDEV(tn,{children:o.jsxDEV($t,{children:o.jsxDEV(Ae,{path:"/",element:o.jsxDEV(br,{},void 0,!1,{fileName:"/Users/praveen/Documents/webstories/src/App.jsx",lineNumber:33,columnNumber:34},this)},void 0,!1,{fileName:"/Users/praveen/Documents/webstories/src/App.jsx",lineNumber:33,columnNumber:9},this)},void 0,!1,{fileName:"/Users/praveen/Documents/webstories/src/App.jsx",lineNumber:32,columnNumber:7},this)},void 0,!1,{fileName:"/Users/praveen/Documents/webstories/src/App.jsx",lineNumber:31,columnNumber:5},this)}Xe.render(o.jsxDEV(L.StrictMode,{children:o.jsxDEV(xr,{},void 0,!1,{fileName:"/Users/praveen/Documents/webstories/src/index.jsx",lineNumber:8,columnNumber:5},globalThis)},void 0,!1,{fileName:"/Users/praveen/Documents/webstories/src/index.jsx",lineNumber:7,columnNumber:3},globalThis),document.getElementById("root"));
