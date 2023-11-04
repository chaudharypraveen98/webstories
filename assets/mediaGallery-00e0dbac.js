import{r as u,b0 as xe,s as ke,D as w,e as h,x as z,L,ak as J,a as v,ag as Xe,eM as Ye,B as de,ai as Ke,N as Me,H as Pe,O as $e,aX as H,dl as oe,bM as Qe}from"./useIndexedDBMedia-7140d5c5.js";import{e as Re,a as G,b as Ie,D as _e,v as Je,i as X,d as De,f as Y,g as Ze,h as et,j as me,r as N,k as tt,I as nt,L as rt,s as ot,p as at,l as it,m as st,n as lt,T as ct,u as ut,o as dt,q as mt,t as pt,w as ht}from"./editor-dd44f868.js";import"./index-c3dfb6ed.js";function D({width:t,height:e}){return t/e}function K(t,e=0){const n=10**e;return Math.round((t+Number.EPSILON)*n)/n}function gt(t){return(e,n)=>t(n)-t(e)}class ft{constructor(e){this.comparator=e,this.heap=[],this.n=0}greater(e,n){return this.comparator(this.heap[e],this.heap[n])<0}swap(e,n){const r=this.heap[e];this.heap[e]=this.heap[n],this.heap[n]=r}swim(e){let n=e,r=Math.floor(n/2);for(;n>1&&this.greater(r,n);)this.swap(r,n),n=r,r=Math.floor(n/2)}sink(e){let n=e,r=n*2;for(;r<=this.n&&(r<this.n&&this.greater(r,r+1)&&(r+=1),!!this.greater(n,r));)this.swap(n,r),n=r,r=n*2}push(e){this.n+=1,this.heap[this.n]=e,this.swim(this.n)}pop(){if(this.n===0)return;this.swap(1,this.n),this.n-=1;const e=this.heap.pop();return this.sink(1),e}size(){return this.n}}function yt(t,e,n){const r=new Map,o=new Set,a=new Map;a.set(e,0);const i=new ft(gt(l=>l.weight));for(i.push({id:e,weight:0});i.size()>0;){const{id:l,weight:s}=i.pop();if(!o.has(l)){const c=t(l);o.add(l),c.forEach((d,p)=>{const f=s+d,m=r.get(p),g=a.get(p);(g===void 0||g>f&&(g/f>1.005||m!==void 0&&m<l))&&(a.set(p,f),i.push({id:p,weight:f}),r.set(p,l))})}}return a.has(n)?r:void 0}function wt(t,e){const n=[];for(let r=e;r!==void 0;r=t.get(r))n.push(r);return n.reverse()}function bt(t,e,n){const r=yt(t,e,n);return r?wt(r,n):void 0}function Ct({photos:t,targetRowHeight:e,containerWidth:n}){const r=t.reduce((o,a)=>Math.min(D(a),o),Number.MAX_VALUE);return K(n/e/r)+2}function Se(t,e,n,r){const o=e-(t.length-1)*n-2*r*t.length,a=t.reduce((i,l)=>i+D(l),0);return o/a}function Et(t,e,n,r,o,a,i){const l=t.slice(e,n),s=Se(l,r,a,i);return s>0?(s-o)**2*l.length:void 0}function vt({photos:t,layoutOptions:e,targetRowHeight:n,limitNodeSearch:r,rowConstraints:o}){return a=>{var i,l;const{containerWidth:s,spacing:c,padding:d}=e,p=new Map;p.set(a,0);const f=(i=o==null?void 0:o.minPhotos)!=null?i:1,m=Math.min(r,(l=o==null?void 0:o.maxPhotos)!=null?l:1/0);for(let g=a+f;g<t.length+1&&!(g-a>m);g+=1){const y=Et(t,a,g,s,n,c,d);if(y===void 0)break;p.set(g,y)}return p}}function xt({photos:t,layoutOptions:e}){const{spacing:n,padding:r,containerWidth:o,targetRowHeight:a,rowConstraints:i}=e,l=Ct({photos:t,containerWidth:o,targetRowHeight:a}),s=vt({photos:t,layoutOptions:e,targetRowHeight:a,limitNodeSearch:l,rowConstraints:i}),c=bt(s,0,t.length);if(c===void 0)return;const d=[];for(let p=1;p<c.length;p+=1){const f=t.map((g,y)=>({photo:g,index:y})).slice(c[p-1],c[p]),m=Se(f.map(({photo:g})=>g),o,n,r);d.push(f.map(({photo:g,index:y},C)=>({photo:g,layout:{height:m,width:m*D(g),index:y,photoIndex:C,photosCount:f.length}})))}return d}function Z(...t){return[...t].filter(e=>!!e).join(" ")}function Ne(t,{width:e,photosCount:n},{spacing:r,padding:o,containerWidth:a}){const i=r*(n-1)+2*o*n;return`calc((${t} - ${i}px) / ${K((a-i)/e,5)})`}function kt(t,e){return e.layout!=="rows"?`calc(100% - ${2*e.padding}px)`:Ne("100%",t,e)}function pe(t,e,n){var r,o;return Ne((o=(r=t.match(/calc\((.*)\)/))==null?void 0:r[1])!=null?o:t,e,n)}function Mt(t,e,n){let r,o;const a=t.srcSet||t.images;return a&&a.length>0&&(r=a.concat(a.find(({width:i})=>i===t.width)?[]:[{src:t.src,width:t.width,height:t.height}]).sort((i,l)=>i.width-l.width).map(i=>`${i.src} ${i.width}w`).join(", ")),n.sizes?o=(n.sizes.sizes||[]).map(({viewport:i,size:l})=>`${i} ${pe(l,e,n)}`).concat(pe(n.sizes.size,e,n)).join(", "):r&&(o=`${Math.ceil(e.width/n.containerWidth*100)}vw`),{srcSet:r,sizes:o}}function ae(t){var e,n;const{photo:r,layout:o,layoutOptions:a,imageProps:{style:i,className:l,...s}={},renderPhoto:c}=t,{onClick:d}=a,p={display:"block",boxSizing:"content-box",width:kt(o,a),height:"auto",aspectRatio:`${r.width} / ${r.height}`,...a.padding?{padding:`${a.padding}px`}:null,...(a.layout==="columns"||a.layout==="masonry")&&o.photoIndex<o.photosCount-1?{marginBottom:`${a.spacing}px`}:null,...d?{cursor:"pointer"}:null,...i},f=d?C=>{d({event:C,photo:r,index:o.index})}:void 0,m={src:r.src,alt:(e=r.alt)!=null?e:"",title:r.title,onClick:f,style:p,className:Z("react-photo-album--photo",l),loading:"lazy",decoding:"async",...Mt(r,o,a),...s},g=C=>{const{src:R,alt:I,srcSet:k,sizes:E,style:b,...x}=m;return u.createElement("img",{alt:I,...k?{srcSet:k,sizes:E}:null,src:R,style:C!=null&&C.wrapped?{display:"block",width:"100%",height:"100%"}:b,...x})},y=(({display:C,boxSizing:R,width:I,aspectRatio:k,padding:E,marginBottom:b,cursor:x})=>({display:C,boxSizing:R,width:I,aspectRatio:k,padding:E,marginBottom:b,cursor:x}))(p);return u.createElement(u.Fragment,null,(n=c==null?void 0:c({photo:r,layout:o,layoutOptions:a,imageProps:m,renderDefaultPhoto:g,wrapperStyle:y}))!=null?n:g())}function Pt({rowContainerProps:t,children:e}){return u.createElement("div",{...t},e)}function $t(t){const{layoutOptions:e,rowIndex:n,rowsCount:r,renderRowContainer:o,rowContainerProps:{style:a,className:i,...l}={},children:s}=t,c={className:Z("react-photo-album--row",i),style:{display:"flex",flexDirection:"row",flexWrap:"nowrap",alignItems:"flex-start",justifyContent:"space-between",...n<r-1?{marginBottom:`${e.spacing}px`}:null,...a},...l};return u.createElement(u.Fragment,null,(o??Pt)({layoutOptions:e,rowIndex:n,rowsCount:r,rowContainerProps:c,children:s}))}function Rt(t){const{photos:e,layoutOptions:n,renderPhoto:r,renderRowContainer:o,componentsProps:a}=t,i=xt({photos:e,layoutOptions:n});return i?u.createElement(u.Fragment,null,i.map((l,s)=>u.createElement($t,{key:`row-${s}`,layoutOptions:n,rowIndex:s,rowsCount:i.length,renderRowContainer:o,rowContainerProps:a==null?void 0:a.rowContainerProps},l.map(({photo:c,layout:d})=>u.createElement(ae,{key:c.key||c.src,photo:c,layout:d,layoutOptions:n,renderPhoto:r,imageProps:a==null?void 0:a.imageProps}))))):null}function It(t,e,n,r){const o=new Map,a=new Set;a.add(n);for(let i=0;i<e;i+=1){const l=[...a.keys()];a.clear(),l.forEach(s=>{const c=i>0?o.get(s)[i].weight:0;t(s).forEach(({neighbor:d,weight:p})=>{let f=o.get(d);f||(f=[],o.set(d,f));const m=c+p,g=f[i+1];(!g||g.weight>m&&(g.weight/m>1.0001||s<g.node))&&(f[i+1]={node:s,weight:m}),i<e-1&&d!==r&&a.add(d)})})}return o}function _t(t,e,n){const r=[n];for(let o=n,a=e;a>0;a-=1)o=t.get(o)[a].node,r.push(o);return r.reverse()}function Dt(t,e,n,r){return _t(It(t,e,n,r),e,r)}function St({photos:t,spacing:e,padding:n,targetColumnWidth:r,targetColumnHeight:o}){return a=>{const i=[],l=o*1.5;let s=r/D(t[a])+2*n;for(let c=a+1;c<t.length+1&&(i.push({neighbor:c,weight:(o-s)**2}),!(s>l||c===t.length));c+=1)s+=r/D(t[c])+e+2*n;return i}}function he({path:t,photos:e,containerWidth:n,columnsGaps:r,columnsRatios:o,spacing:a,padding:i}){const l=[],s=o.reduce((c,d)=>c+d,0);for(let c=0;c<t.length-1;c+=1){const d=e.map((m,g)=>({photo:m,index:g})).slice(t[c],t[c+1]),p=o.reduce((m,g,y)=>m+(r[c]-r[y])*g,0),f=(n-(t.length-2)*a-2*(t.length-1)*i-p)*o[c]/s;l.push(d.map(({photo:m,index:g},y)=>({photo:m,layout:{width:f,height:f/D(m),index:g,photoIndex:y,photosCount:d.length}})))}return l}function Nt({photos:t,layoutOptions:e,targetColumnWidth:n}){const{columns:r,spacing:o,padding:a,containerWidth:i}=e,l=[],s=[];if(t.length<=r){const m=t.length>0?t.reduce((y,C)=>y+D(C),0)/t.length:1;for(let y=0;y<r;y+=1)l[y]=2*a,s[y]=y<t.length?D(t[y]):m;const g=he({path:Array.from({length:r+1}).map((y,C)=>Math.min(C,t.length)),photos:t,columnsRatios:s,columnsGaps:l,containerWidth:i,spacing:o,padding:a});return{columnsGaps:l,columnsRatios:s,columnsModel:g}}const c=(t.reduce((m,g)=>m+n/D(g),0)+o*(t.length-r)+2*a*t.length)/r,d=St({photos:t,targetColumnWidth:n,targetColumnHeight:c,spacing:o,padding:a}),p=Dt(d,r,0,t.length);for(let m=0;m<p.length-1;m+=1){const g=t.slice(p[m],p[m+1]);l[m]=o*(g.length-1)+2*a*g.length,s[m]=1/g.reduce((y,C)=>y+1/D(C),0)}const f=he({path:p,photos:t,columnsRatios:s,columnsGaps:l,containerWidth:i,spacing:o,padding:a});return{columnsGaps:l,columnsRatios:s,columnsModel:f}}function Te(t){const{photos:e,layoutOptions:n}=t,{columns:r,spacing:o,padding:a,containerWidth:i}=n,l=(i-o*(r-1)-2*a*r)/r,{columnsGaps:s,columnsRatios:c,columnsModel:d}=Nt({photos:e,layoutOptions:n,targetColumnWidth:l});return d.findIndex(p=>p.findIndex(({layout:{width:f,height:m}})=>f<0||m<0)>=0)>=0?r>1?Te({photos:e,layoutOptions:{...n,columns:r-1}}):void 0:{columnsModel:d,columnsGaps:s,columnsRatios:c}}function Tt({photos:t,layoutOptions:e}){return Te({photos:t,layoutOptions:e})}function Ot({columnContainerProps:t,children:e}){return u.createElement("div",{...t},e)}function jt(t){const{layoutOptions:e,columnIndex:n,columnsCount:r,columnsGaps:o,columnsRatios:a}=t,{layout:i,spacing:l,padding:s}=e;if(i==="masonry"||!o||!a)return`calc((100% - ${l*(r-1)}px) / ${r})`;const c=a.reduce((p,f)=>p+f,0),d=a.reduce((p,f,m)=>p+(o[n]-o[m])*f,0);return`calc((100% - ${K((r-1)*l+2*r*s+d,3)}px) * ${K(a[n]/c,5)} + ${2*s}px)`}function Oe(t){const{layoutOptions:e,renderColumnContainer:n,children:r,columnContainerProps:{style:o,className:a,...i}={},...l}=t,s={className:Z("react-photo-album--column",a),style:{display:"flex",flexDirection:"column",flexWrap:"nowrap",alignItems:"flex-start",width:jt(t),justifyContent:e.layout==="columns"?"space-between":"flex-start",...o},...i};return u.createElement(u.Fragment,null,(n??Ot)({layoutOptions:e,columnContainerProps:s,children:r,...l}))}function Lt(t){const{photos:e,layoutOptions:n,renderPhoto:r,renderColumnContainer:o,componentsProps:a}=t,i=Tt({photos:e,layoutOptions:n});if(!i)return null;const{columnsModel:l,columnsRatios:s,columnsGaps:c}=i;return u.createElement(u.Fragment,null,l.map((d,p)=>u.createElement(Oe,{key:`column-${p}`,layoutOptions:n,columnIndex:p,columnsCount:l.length,columnsGaps:c,columnsRatios:s,renderColumnContainer:o,columnContainerProps:a==null?void 0:a.columnContainerProps},d.map(({photo:f,layout:m})=>u.createElement(ae,{key:f.key||f.src,photo:f,layout:m,layoutOptions:n,renderPhoto:r,imageProps:a==null?void 0:a.imageProps})))))}function je(t){const{photos:e,layoutOptions:n}=t,{columns:r,spacing:o,padding:a,containerWidth:i}=n,l=(i-o*(r-1)-2*a*r)/r;if(l<=0)return r>1?je({...t,layoutOptions:{...n,columns:r-1}}):void 0;const s=[];for(let d=0;d<r;d+=1)s[d]=0;return e.reduce((d,p,f)=>{const m=s.reduce((g,y,C)=>y<s[g]-1?C:g,0);return s[m]=s[m]+l/D(p)+o+2*a,d[m].push({photo:p,index:f}),d},Array.from({length:r}).map(()=>[])).map(d=>d.map(({photo:p,index:f},m)=>({photo:p,layout:{width:l,height:l/D(p),index:f,photoIndex:m,photosCount:d.length}})))}function zt(t){const{photos:e,layoutOptions:n,renderPhoto:r,renderColumnContainer:o,componentsProps:a}=t,i=je({photos:e,layoutOptions:n});return i?u.createElement(u.Fragment,null,i.map((l,s)=>u.createElement(Oe,{key:`masonry-column-${s}`,layoutOptions:n,columnsCount:i.length,columnIndex:s,renderColumnContainer:o,columnContainerProps:a==null?void 0:a.columnContainerProps},l.map(({photo:c,layout:d})=>u.createElement(ae,{key:c.key||c.src,photo:c,layout:d,layoutOptions:n,renderPhoto:r,imageProps:a==null?void 0:a.imageProps}))))):null}function Wt({containerProps:t,children:e,containerRef:n}){return u.createElement("div",{ref:n,...t},e)}function At(t){const{layout:e,renderContainer:n,children:r,containerRef:o,containerProps:{style:a,className:i,...l}={}}=t,s={className:Z("react-photo-album",`react-photo-album--${e}`,i),style:{display:"flex",flexWrap:"nowrap",justifyContent:"space-between",flexDirection:e==="rows"?"column":"row",...a},...l};return u.createElement(u.Fragment,null,(n??Wt)({containerProps:s,containerRef:o,layout:e,children:r}))}function Bt(t){const e=u.useRef(t);return(!t||!e.current||t.join()!==e.current.join())&&(e.current=t),e.current}function Ft(t,{newContainerWidth:e,newScrollbarWidth:n}){const{containerWidth:r,scrollbarWidth:o}=t;return r!==void 0&&o!==void 0&&e!==void 0&&n!==void 0&&e>r&&e-r<=20&&n<o?{containerWidth:r,scrollbarWidth:n}:r!==e||o!==n?{containerWidth:e,scrollbarWidth:n}:t}function Vt(t,e){let n=t==null?void 0:t.clientWidth;if(n!==void 0&&e&&e.length>0){const r=[...e.filter(a=>a>0)].sort((a,i)=>i-a);r.push(Math.floor(r[r.length-1]/2));const o=n;n=r.find((a,i)=>a<=o||i===r.length-1)}return n}function Gt(t,e){const[{containerWidth:n},r]=u.useReducer(Ft,{containerWidth:e}),o=u.useRef(null),a=u.useRef();return{containerRef:u.useCallback(l=>{var s;(s=a.current)==null||s.disconnect(),a.current=void 0,o.current=l;const c=()=>r({newContainerWidth:Vt(o.current,t),newScrollbarWidth:window.innerWidth-document.documentElement.clientWidth});c(),l&&typeof ResizeObserver<"u"&&(a.current=new ResizeObserver(c),a.current.observe(l))},[t]),containerWidth:n}}const qt=Object.freeze([1200,600,300,0]);function Le(t,e){return typeof t=="function"?t(e):t}function ze(t,e){return typeof t<"u"?Le(t,e):void 0}function Ut(t,e){const n=qt.findIndex(r=>r<=e);return Le(t[n>=0?n:0],e)}function U(t,e,n,r=0){const o=ze(t,e);return Math.round(Math.max(o===void 0?Ut(n,e):o,r))}function Ht({layout:t,onClick:e,containerWidth:n,targetRowHeight:r,rowConstraints:o,columns:a,spacing:i,padding:l,sizes:s}){return{layout:t,onClick:e,containerWidth:n,columns:U(a,n,[5,4,3,2],1),spacing:U(i,n,[20,15,10,5]),padding:U(l,n,[0,0,0,0,0]),targetRowHeight:U(r,n,[c=>c/5,c=>c/4,c=>c/3,c=>c/2]),rowConstraints:ze(o,n),sizes:s}}function Xt(t,e){return typeof t=="function"?t(e):t}function Yt(t,e,n){const{photos:r,layout:o,renderPhoto:a,renderRowContainer:i,renderColumnContainer:l}=t,s=Ht({containerWidth:e,...t}),c={photos:r,renderPhoto:a,componentsProps:n};return o==="rows"?u.createElement(Rt,{layoutOptions:s,renderRowContainer:i,...c}):o==="columns"?u.createElement(Lt,{layoutOptions:s,renderColumnContainer:l,...c}):u.createElement(zt,{layoutOptions:s,renderColumnContainer:l,...c})}function Kt(t){const{photos:e,layout:n,renderContainer:r,defaultContainerWidth:o,breakpoints:a}=t,{containerRef:i,containerWidth:l}=Gt(Bt(a),o);if(!n||!["rows","columns","masonry"].includes(n)||!Array.isArray(e))return null;const s=Xt(t.componentsProps,l);return u.createElement(At,{layout:n,containerRef:i,renderContainer:r,containerProps:s==null?void 0:s.containerProps},l?Yt(t,l,s):null)}function Qt(t){let{mediaId:e,type:n,onClose:r}=t;const{actions:{deleteMedia:o}}=Re(),{showSnackbar:a}=xe(),{deleteMediaElement:i}=G(m=>{let{actions:{deleteMediaElement:g}}=m;return{deleteMediaElement:g}}),{deleteElementsByResourceId:l}=Ie(m=>({deleteElementsByResourceId:m.actions.deleteElementsByResourceId})),s=u.useCallback(async()=>{r();try{await o(e),i({id:e}),l({id:e})}catch(m){ke("local_media_deletion",m.message),a({message:w("Failed to delete media item.","web-stories"),dismissible:!0})}},[o,i,l,e,r,a]),c=w("Delete Image?","web-stories"),d=w("Delete Video?","web-stories"),p=w("You are about to permanently delete this image from your site. The image will appear broken in any content that uses it.","web-stories"),f=w("You are about to permanently delete this video from your site. The video will appear broken in any content that uses it.","web-stories");return h.createElement(_e,{isOpen:!0,onClose:r,title:n==="image"?c:d,secondaryText:w("Cancel","web-stories"),onPrimary:s,primaryText:w("Delete","web-stories"),maxWidth:512},h.createElement(z.Paragraph,{size:L.Small},n==="image"?p:f),h.createElement(z.Paragraph,{size:L.Small,isBold:!0},w("This action can not be undone.","web-stories")))}const We=J(["display:flex;width:","px;margin-right:28px;"],152),Jt=v.img.withConfig({displayName:"mediaEditDialog__Image",componentId:"sc-ctku7j-0"})(["",""],We),Zt=v.video.withConfig({displayName:"mediaEditDialog__Video",componentId:"sc-ctku7j-1"})(["",""],We),en=v.div.withConfig({displayName:"mediaEditDialog__DialogBody",componentId:"sc-ctku7j-2"})(["display:flex;justify-content:left;align-items:flex-start;"]),tn=v.div.withConfig({displayName:"mediaEditDialog__MetadataTextContainer",componentId:"sc-ctku7j-3"})(["display:flex;flex-direction:column;margin:0 4px;"]),nn=v(z.Span).withConfig({displayName:"mediaEditDialog__DateText",componentId:"sc-ctku7j-4"})(["margin-bottom:8px;"]),rn=v(Je).withConfig({displayName:"mediaEditDialog__AssistiveTextArea",componentId:"sc-ctku7j-5"})(["margin:20px 0 4px;"]),on=w("Edit Image","web-stories"),an=w("Edit Video","web-stories"),ge=w("Assistive text","web-stories"),fe=w("Video description","web-stories"),sn=w("Describe the appearance and function of the image. Leave empty if the image is purely decorative.","web-stories"),ln=w("For indexability and accessibility. Include any burned-in text inside the video.","web-stories");function cn(t){let{resource:e,onClose:n}=t;const{id:r,src:o,creationDate:a,width:i,height:l,type:s,alt:c,poster:d,mimeType:p}=e,{actions:{updateMedia:f}}=Re(),{updateMediaElement:m}=G(b=>{let{actions:{updateMediaElement:x}}=b;return{updateMediaElement:x}}),{showSnackbar:g}=xe(),[y,C]=u.useState(c),R=Xe(a),I=u.useCallback(b=>{C(b.target.value)},[]),k=u.useCallback(async()=>{try{await f(r,{altText:y}),m({id:r,data:{alt:y}}),n()}catch(b){ke("local_media_edit",b.message),g({message:w("Failed to update, please try again.","web-stories"),dismissible:!0})}},[y,r,n,g,f,m]),E=s==="image";return h.createElement(_e,{isOpen:!0,onClose:n,title:E?on:an,secondaryText:w("Cancel","web-stories"),onPrimary:k,primaryText:w("Save","web-stories")},h.createElement(en,null,s==="image"?h.createElement(Jt,{src:X(152,e),alt:c,loading:"lazy",crossOrigin:"anonymous",decoding:"async"}):h.createElement(Zt,{key:o,crossOrigin:"anonymous",poster:d,preload:"metadata",muted:!0},h.createElement("source",{src:o,type:p})),h.createElement(tn,null,Ye(R)&&h.createElement(nn,{size:L.XSmall},de(w("Uploaded: %s","web-stories"),Ke(a))),h.createElement(z.Span,{size:L.Small},de(w("%1$d x %2$d pixels","web-stories"),i,l)),h.createElement(rn,{value:y,"aria-label":E?ge:fe,type:"text",placeholder:E?ge:fe,onChange:I}),h.createElement(z.Paragraph,{size:L.Small},E?sn:ln))))}const un=v(De).withConfig({displayName:"dropDownMenu__MoreButton",componentId:"sc-1eq0xdj-0"})(["top:4px;right:4px;"]),dn=v.div.withConfig({displayName:"dropDownMenu__DropDownContainer",componentId:"sc-1eq0xdj-1"})(["margin-top:10px;"]),mn=v.div.withConfig({displayName:"dropDownMenu__MenuContainer",componentId:"sc-1eq0xdj-2"})(["z-index:1;"]),pn=J(["min-width:160px;margin-top:0;li{display:block;}"]),ye="edit",we="delete";function hn(t){let{resource:e,display:n,isMenuOpen:r,onMenuOpen:o,onMenuCancelled:a,onMenuSelected:i,setParentActive:l=H}=t;const s=[{options:[{label:w("Edit meta data","web-stories"),value:ye},{label:w("Delete from library","web-stories"),value:we}]}],[c,d]=u.useState(!1),[p,f]=u.useState(!1),m=u.useRef(),g=u.useCallback(()=>{var E;a(),(E=m.current)==null||E.focus(),l()},[a,l]),{canTranscodeResource:y}=G(E=>{let{state:{canTranscodeResource:b}}=E;return{canTranscodeResource:b}}),C=u.useCallback(()=>{d(!1),g()},[d,g]),R=u.useCallback(()=>{f(!1),g()},[f,g]),I=u.useMemo(()=>`list-${Y()}`,[]),k=u.useMemo(()=>`button-${Y()}`,[]);return y(e)&&h.createElement(mn,null,m.current&&h.createElement(Ze,{target:m.current}),h.createElement(un,{ref:m,onClick:o,"aria-label":w("More","web-stories"),"aria-pressed":r,"aria-haspopup":!0,"aria-expanded":r,"aria-owns":r?I:null,id:k,$display:n,tabIndex:n||r?0:-1},h.createElement(et,null)),(n||r)&&h.createElement(Me,{anchor:m,placement:Pe.BottomStart,isOpen:r},h.createElement(dn,null,h.createElement($e,{parentId:k,listId:I,handleMenuItemSelect:(E,b)=>{switch(i(),b){case ye:f(!0);break;case we:d(!0)}},groups:s,onDismissMenu:g,hasMenuRole:!0,menuStylesOverride:pn}))),c&&h.createElement(Qt,{mediaId:e.id,type:e.type,onClose:C}),p&&h.createElement(cn,{resource:e,onClose:R}))}const gn=v(z.Span).withConfig({displayName:"attribution__StyledText",componentId:"sc-dg18hp-0"})(["color:",";"],t=>{let{theme:e,active:n}=t;return oe(e.colors.standard.white,n?1:.6)}),fn=v.a.withConfig({displayName:"attribution__Link",componentId:"sc-dg18hp-1"})(["display:block;position:absolute;left:0;bottom:0;width:100%;padding:8px;background-color:",";text-overflow:ellipsis;overflow:hidden;white-space:nowrap;text-decoration:none;"],t=>{let{theme:e,active:n}=t;return oe(e.colors.bg.primary,n?.8:.6)}),yn=t=>{let{author:e,url:n}=t;const[r,o]=u.useState(!1),a=()=>o(!0),i=()=>o(!1);return h.createElement(fn,{title:e,active:r,onPointerEnter:a,onFocus:a,onPointerLeave:i,onBlur:i,href:n,target:"_blank",rel:"noreferrer"},h.createElement(gn,{size:L.XSmall},e))};function V(){return V=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},V.apply(this,arguments)}const Ae=J(["width:100%;cursor:pointer;transition:0.2s transform,0.15s opacity;border-radius:4px;opacity:0;object-fit:cover;"]),be=v.img.withConfig({displayName:"innerElement__Image",componentId:"sc-qkk7ov-0"})(["",""],Ae),wn=v.video.withConfig({displayName:"innerElement__Video",componentId:"sc-qkk7ov-1"})([""," ",""],Ae,t=>{let{showWithoutDelay:e}=t;return e?"opacity: 1;":""}),bn=v.div.withConfig({displayName:"innerElement__DurationWrapper",componentId:"sc-qkk7ov-2"})(["position:absolute;bottom:8px;left:8px;background:",";border-radius:100px;height:18px;padding:0 6px;"],t=>{let{theme:e}=t;return e.colors.opacity.black64}),Cn=v.div.withConfig({displayName:"innerElement__MuteWrapper",componentId:"sc-qkk7ov-3"})(["position:absolute;bottom:8px;right:8px;height:24px;width:24px;background:",";color:",";border-radius:100px;"],t=>{let{theme:e}=t;return e.colors.opacity.black64},t=>{let{theme:e}=t;return e.colors.fg.primary}),En=v(z.Span).attrs({size:L.XSmall}).withConfig({displayName:"innerElement__Duration",componentId:"sc-qkk7ov-4"})(["color:",";display:block;"],t=>{let{theme:e}=t;return e.colors.fg.primary}),vn=v.img.withConfig({displayName:"innerElement__CloneImg",componentId:"sc-qkk7ov-5"})(["opacity:0;width:",";height:",";position:absolute;"],t=>{let{width:e}=t;return`${e}px`},t=>{let{height:e}=t;return`${e}px`});var xn=u.memo(function(e){let{type:n,src:r,resource:o,alt:a,width:i,height:l,onClick:s,onLoad:c=H,showVideoDetail:d,mediaElement:p,active:f,isMuted:m}=e;const g=u.useRef(null),y=u.useRef(null),{handleDrag:C,handleDrop:R}=me(P=>{let{state:M,actions:O}=P;return{handleDrag:O.handleDrag,handleDrop:O.handleDrop,dropTargets:M.dropTargets,activeDropTargetId:M.activeDropTargetId}},(P,M)=>{if(y.current)return!1;if(y.current===null)return y.current=!1,!1;if(P!=null&&P.dropTargets&&(M!=null&&M.dropTargets)){const O=Object.keys(P.dropTargets),te=Object.keys(M.dropTargets);if(O.join()!==te.join())return!1}return(P==null?void 0:P.activeDropTargetId)===(M==null?void 0:M.activeDropTargetId)}),{setDraggingResource:I}=me(P=>{let{actions:{setDraggingResource:M}}=P;return{setDraggingResource:M}});let k;u.useEffect(()=>{o.poster&&(g.current=o.poster)},[o.poster]);const{lengthFormatted:E,poster:b,mimeType:x}=o,$=b??g.current,S=$||X(i,o),T={width:i,height:l,alt:a,crossOrigin:"anonymous"},_={...T,onLoad:()=>{p.current&&(p.current.style.opacity=1),c()},loading:"lazy",decoding:"async",draggable:!1},j={..._,onLoad:void 0},W={..._,src:S},B={...T,title:a,alt:null,loop:n===N.Gif,muted:!0,preload:"metadata",poster:$,showWithoutDelay:f};if(n===N.Image||n===N.Sticker?(k=h.createElement(be,V({key:r},W,{ref:p})),j.src=S):[N.Video,N.Gif].includes(n)&&(k=h.createElement(h.Fragment,null,b&&!f?h.createElement(be,V({key:r},W,{ref:p})):h.createElement(wn,V({key:r},B,{ref:p}),n===N.Gif?o.output.src&&h.createElement("source",{src:o.output.src,type:o.output.mimeType}):h.createElement("source",{src:X(i,o),type:x})),n===N.Video&&d&&E&&h.createElement(bn,null,h.createElement(En,null,E)),n===N.Video&&d&&m&&h.createElement(Cn,null,h.createElement(tt,null))),j.src=b),!k)throw new Error("Invalid media element type.");const ee=n===N.Image?S:b;return h.createElement(h.Fragment,null,k,f&&h.createElement(nt,{showIcon:!1}),h.createElement(rt,{active:f,handleDrag:P=>{y.current||(ot.set(o.id,{url:S,type:"cached"}),I(o),y.current=!0),C(o,P.clientX,P.clientY)},handleDragEnd:()=>{R(o),y.current=!1},type:o.type,elementProps:{resource:o},onClick:s(ee),cloneElement:vn,cloneProps:j}))});const kn=v.div.withConfig({displayName:"insertionMenu__DropDownContainer",componentId:"sc-xjd4tf-0"})(["margin-top:10px;min-width:160px;"]),Mn=v.div.withConfig({displayName:"insertionMenu__MenuContainer",componentId:"sc-xjd4tf-1"})(["z-index:1;"]),Pn=J(["min-width:160px;margin-top:0;li{display:block;}"]),Ce="insert",Ee="addBackground";function $n(t){let{resource:e,display:n,onInsert:r,width:o,index:a,isLocal:i=!1,setParentActive:l=H,setParentInactive:s=H}=t;const c=u.useRef(),[d,p]=u.useState(!1),f=u.useCallback(x=>{x.stopPropagation(),p(!0)},[]),m=u.useCallback(()=>{var x;p(!1),(x=c.current)==null||x.focus(),l()},[l]),{currentBackgroundId:g,combineElements:y}=Ie(x=>{var $,S,T;return{currentBackgroundId:(T=(S=($=x.state.currentPage)==null?void 0:$.elements)==null?void 0:S[0])==null?void 0:T.id,combineElements:x.actions.combineElements}}),{type:C,poster:R}=e,I=[{options:[{label:["image","gif"].includes(C)?w("Insert image","web-stories"):w("Insert video","web-stories"),value:Ce},{label:w("Add as background","web-stories"),value:Ee}]}];at({ref:c},[],3);const k=it();Qe(i?null:c,"tab",k,[k]);const E=u.useMemo(()=>`list-${Y()}`,[]),b=u.useMemo(()=>`button-${Y()}`,[]);return h.createElement(Mn,null,h.createElement(De,{ref:c,onClick:f,"aria-label":w("Open insertion menu","web-stories"),"aria-pressed":d,"aria-haspopup":!0,"aria-expanded":d,"aria-owns":d?E:null,id:b,$display:n,tabIndex:a===0?0:-1},h.createElement(st,null)),d&&h.createElement(Me,{anchor:c,placement:Pe.BottomStart,isOpen:d},h.createElement(kn,null,h.createElement($e,{parentId:b,listId:E,handleMenuItemSelect:(x,$)=>{const S=R||X(o,e),T=lt(e.type,{resource:e});switch(p(!1),$){case Ce:r(e,S);break;case Ee:y({firstElement:T,secondId:g})}s()},groups:I,onDismissMenu:m,hasMenuRole:!0,menuStylesOverride:Pn}))))}function Q(){return Q=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Q.apply(this,arguments)}const Rn=600,In=v.div.attrs(t=>({style:{width:t.width+"px",height:t.height+"px",margin:t.margin,backgroundColor:"transparent",color:"inherit",border:"none",padding:0}})).withConfig({displayName:"mediaElement__Container",componentId:"sc-n7038j-0"})([""]),_n=v.div.withConfig({displayName:"mediaElement__InnerContainer",componentId:"sc-n7038j-1"})(["position:relative;display:flex;margin-bottom:10px;background-color:",";"],t=>{let{theme:e,$baseColor:n}=t;return n||oe(e.colors.standard.black,.3)}),Dn=v(ut).withConfig({displayName:"mediaElement__BlurhashContainer",componentId:"sc-n7038j-2"})(["position:absolute !important;top:0;left:0;"]);function ve(t){var se,le,ce,ue;let{index:e,resource:n,width:r,height:o,margin:a,onInsert:i,providerType:l,canEditMedia:s}=t;const{id:c,src:d,type:p,width:f,height:m,alt:g,isMuted:y,baseColor:C,blurHash:R}=n,{isCurrentResourceProcessing:I,isCurrentResourceUploading:k}=G(A=>{let{state:F}=A;return{isCurrentResourceProcessing:F.isCurrentResourceProcessing,isCurrentResourceUploading:F.isCurrentResourceUploading}}),E=f&&m?f/m:1,b=r||o/E,x=o||b/E,$=u.useRef(),[S,T]=u.useState(!0),[_,j]=u.useState(!1),[W,B]=u.useState(!1),[ee,P]=u.useState(!1),M=u.useCallback(()=>j(!0),[]),O=u.useCallback(()=>j(!1),[]),te=u.useCallback(()=>B(!0),[]),Be=u.useCallback(()=>B(!1),[]),Fe=u.useCallback(()=>{B(!1),j(!1)},[]),[q,ne]=u.useState(null),re=u.useRef(_);re.current=_,u.useEffect(()=>{var F;if(![N.Video,N.Gif].includes(p))return;const A=()=>{q!==null&&(clearTimeout(q),ne(null))};if(!W)if(_){if(T(!1),$.current&&q===null){const He=setTimeout(()=>{re.current&&d&&$.current.play().catch(dt)},Rn);ne(He)}}else T(!0),A(),$.current&&((F=$.current)!=null&&F.pause)&&d&&($.current.pause(),$.current.currentTime=0);return A},[W,_,p,d,q,ne,re]);const Ve=u.useCallback(A=>()=>{i(n,A)},[i,n]),Ge=_&&((le=(se=n.attribution)==null?void 0:se.author)==null?void 0:le.displayName)&&((ue=(ce=n.attribution)==null?void 0:ce.author)==null?void 0:ue.url)&&h.createElement(yn,{author:n.attribution.author.displayName,url:n.attribution.author.url}),qe=u.useRef(),Ue=u.useCallback(()=>P(!0),[]),ie=!ee&&!_;return h.createElement(In,{ref:qe,"data-testid":`mediaElement-${p}`,"data-id":c,className:"mediaElement",width:b,height:x,margin:a,onPointerEnter:M,onFocus:M,onPointerLeave:O,onBlur:O,tabIndex:"-1"},h.createElement(_n,{$baseColor:ie&&C},h.createElement(xn,{type:p,src:d,mediaElement:$,resource:n,alt:g,isMuted:y,width:b,height:x,onClick:Ve,onLoad:Ue,showVideoDetail:S,active:_}),Ge,ie&&R&&h.createElement(Dn,{hash:R,width:b,height:x,punch:1}),(!d||I(c)||k(c))&&h.createElement(mt,{loadingMessage:w("Uploading media…","web-stories")}),h.createElement($n,{resource:n,display:_,onInsert:i,width:b,index:e,isLocal:l==="local",setParentActive:M,setParentInactive:O}),l==="local"&&s&&h.createElement(hn,{resource:n,display:_,isMenuOpen:W,onMenuOpen:te,onMenuCancelled:Be,onMenuSelected:Fe,setParentActive:M})))}var Sn=u.memo(function(e){let{providerType:n="local",canEditMedia:r=!1,...o}=e;const{isCurrentResourceProcessing:a,isCurrentResourceUploading:i}=G(s=>{let{state:c}=s;return{isCurrentResourceProcessing:c.isCurrentResourceProcessing,isCurrentResourceUploading:c.isCurrentResourceUploading}}),{id:l}=o.resource;return a(l)||i(l)?h.createElement(ct,{title:w("Uploading media…","web-stories")},h.createElement(ve,Q({},o,{providerType:n,canEditMedia:r}))):h.createElement(ve,Q({},o,{providerType:n,canEditMedia:r}))});const Nn={maxPhotos:2},Tn=t=>{let{children:e,containerRef:n}=t;return h.createElement(ht,{ref:n},e)},On=t=>{let{children:e}=t;return e};function Wn(t){let{resources:e,uploadingResources:n=[],onInsert:r,providerType:o,canEditMedia:a=!1}=t;const i=[...n.map(s=>({key:`uploading-${s.id}`,src:s.src,width:s.width,height:s.height,resource:s})),...e.map(s=>({key:s.id,src:s.src,width:s.width,height:s.height,resource:s}))].map((s,c)=>({...s,index:c})),l=u.useCallback(s=>{let{photo:c,layout:d}=s;return h.createElement(Sn,{key:c.key,index:c.index,margin:"0px 0px 8px 0px",resource:c.resource,width:d.width,height:d.height,onInsert:r,providerType:o,canEditMedia:a})},[o,r,a]);return h.createElement("div",null,h.createElement(Kt,{layout:"rows",photos:i,renderPhoto:l,renderRowContainer:On,renderContainer:Tn,targetRowHeight:110,rowConstraints:Nn,spacing:8,defaultContainerWidth:pt}))}export{Wn as default};
