import{S as Ye,i as We,s as Xe,a as Ze,e as D,c as Qe,b as F,g as X,t as V,d as Z,f as q,h as C,j as xe,o as $e,k as et,l as tt,m as nt,n as ke,p as H,q as rt,r as at,u as st,v as J,w as G,x as oe,y as K,z as M,A as Ce}from"./chunks/index-7b66872c.js";import{g as Fe,f as Je,s as W,a as Re,b as ot,i as it}from"./chunks/singletons-c23c1a95.js";import{_ as ee}from"./chunks/preload-helper-aa6bc0ce.js";import{s as lt}from"./chunks/env-public-6aa99648.js";function ct(r,e){return r==="/"||e==="ignore"?r:e==="never"?r.endsWith("/")?r.slice(0,-1):r:e==="always"&&!r.endsWith("/")?r+"/":r}function ft(r){for(const e in r)r[e]=r[e].replace(/%23/g,"#").replace(/%3[Bb]/g,";").replace(/%2[Cc]/g,",").replace(/%2[Ff]/g,"/").replace(/%3[Ff]/g,"?").replace(/%3[Aa]/g,":").replace(/%40/g,"@").replace(/%26/g,"&").replace(/%3[Dd]/g,"=").replace(/%2[Bb]/g,"+").replace(/%24/g,"$");return r}const ut=["href","pathname","search","searchParams","toString","toJSON"];function pt(r,e){const n=new URL(r);for(const s of ut){let o=n[s];Object.defineProperty(n,s,{get(){return e(),o},enumerable:!0,configurable:!0})}return dt(n),n}function dt(r){Object.defineProperty(r,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}function ht(r){let e=5381;if(typeof r=="string"){let n=r.length;for(;n;)e=e*33^r.charCodeAt(--n)}else if(ArrayBuffer.isView(r)){const n=new Uint8Array(r.buffer,r.byteOffset,r.byteLength);let s=n.length;for(;s;)e=e*33^n[--s]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const me=window.fetch;window.fetch=(r,e)=>{if((r instanceof Request?r.method:(e==null?void 0:e.method)||"GET")!=="GET"){const s=new URL(r instanceof Request?r.url:r.toString(),document.baseURI).href;he.delete(s)}return me(r,e)};const he=new Map;function mt(r,e,n){let o=`script[data-sveltekit-fetched][data-url=${JSON.stringify(r instanceof Request?r.url:r)}]`;(n==null?void 0:n.body)&&(typeof n.body=="string"||ArrayBuffer.isView(n.body))&&(o+=`[data-hash="${ht(n.body)}"]`);const l=document.querySelector(o);if(l!=null&&l.textContent){const{body:t,...c}=JSON.parse(l.textContent),f=l.getAttribute("data-ttl");return f&&he.set(e,{body:t,init:c,ttl:1e3*Number(f)}),Promise.resolve(new Response(t,c))}return me(r,n)}function _t(r,e){const n=he.get(r);if(n){if(performance.now()<n.ttl)return new Response(n.body,n.init);he.delete(r)}return me(r,e)}const gt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function wt(r){const e=[],n=[];let s=!0;return{pattern:r==="/"?/^\/$/:new RegExp(`^${r.split(/(?:\/|$)/).slice(1).filter(yt).map((l,t,c)=>{const f=decodeURIComponent(l),d=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(f);if(d)return e.push(d[1]),n.push(d[2]),"(?:/(.*))?";const g=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(f);if(g)return e.push(g[1]),n.push(g[2]),"(?:/([^/]+))?";const v=t===c.length-1;return f?"/"+f.split(/\[(.+?)\](?!\])/).map((T,z)=>{if(z%2){const B=gt.exec(T);if(!B)throw new Error(`Invalid param: ${T}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,ie,Q,le,te]=B;return e.push(le),n.push(te),Q?"(.*?)":ie?"([^/]*)?":"([^/]+?)"}return v&&T.includes(".")&&(s=!1),T.normalize().replace(/%5[Bb]/g,"[").replace(/%5[Dd]/g,"]").replace(/#/g,"%23").replace(/\?/g,"%3F").replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}).join(""):void 0}).join("")}${s?"/?":""}$`),names:e,types:n}}function yt(r){return!/^\([^)]+\)$/.test(r)}function bt(r,e,n,s){const o={};for(let l=0;l<e.length;l+=1){const t=e[l],c=n[l];let f=r[l+1]||"";if(c){const d=s[c];if(!d)throw new Error(`Missing "${c}" param matcher`);if(!d(f))return}o[t]=f}return o}function vt(r,e,n,s){const o=new Set(e);return Object.entries(n).map(([c,[f,d,g]])=>{const{pattern:v,names:U,types:k}=wt(c),T={id:c,exec:z=>{const B=v.exec(z);if(B)return bt(B,U,k,s)},errors:[1,...g||[]].map(z=>r[z]),layouts:[0,...d||[]].map(t),leaf:l(f)};return T.errors.length=T.layouts.length=Math.max(T.errors.length,T.layouts.length),T});function l(c){const f=c<0;return f&&(c=~c),[f,r[c]]}function t(c){return c===void 0?c:[o.has(c),r[c]]}}function kt(r){let e,n,s;var o=r[0][0];function l(t){return{props:{data:t[2],form:t[1]}}}return o&&(e=J(o,l(r))),{c(){e&&G(e.$$.fragment),n=D()},l(t){e&&oe(e.$$.fragment,t),n=D()},m(t,c){e&&K(e,t,c),F(t,n,c),s=!0},p(t,c){const f={};if(c&4&&(f.data=t[2]),c&2&&(f.form=t[1]),o!==(o=t[0][0])){if(e){X();const d=e;V(d.$$.fragment,1,0,()=>{M(d,1)}),Z()}o?(e=J(o,l(t)),G(e.$$.fragment),q(e.$$.fragment,1),K(e,n.parentNode,n)):e=null}else o&&e.$set(f)},i(t){s||(e&&q(e.$$.fragment,t),s=!0)},o(t){e&&V(e.$$.fragment,t),s=!1},d(t){t&&C(n),e&&M(e,t)}}}function Et(r){let e,n,s;var o=r[0][0];function l(t){return{props:{data:t[2],$$slots:{default:[St]},$$scope:{ctx:t}}}}return o&&(e=J(o,l(r))),{c(){e&&G(e.$$.fragment),n=D()},l(t){e&&oe(e.$$.fragment,t),n=D()},m(t,c){e&&K(e,t,c),F(t,n,c),s=!0},p(t,c){const f={};if(c&4&&(f.data=t[2]),c&1051&&(f.$$scope={dirty:c,ctx:t}),o!==(o=t[0][0])){if(e){X();const d=e;V(d.$$.fragment,1,0,()=>{M(d,1)}),Z()}o?(e=J(o,l(t)),G(e.$$.fragment),q(e.$$.fragment,1),K(e,n.parentNode,n)):e=null}else o&&e.$set(f)},i(t){s||(e&&q(e.$$.fragment,t),s=!0)},o(t){e&&V(e.$$.fragment,t),s=!1},d(t){t&&C(n),e&&M(e,t)}}}function $t(r){let e,n,s;var o=r[0][1];function l(t){return{props:{data:t[3],form:t[1]}}}return o&&(e=J(o,l(r))),{c(){e&&G(e.$$.fragment),n=D()},l(t){e&&oe(e.$$.fragment,t),n=D()},m(t,c){e&&K(e,t,c),F(t,n,c),s=!0},p(t,c){const f={};if(c&8&&(f.data=t[3]),c&2&&(f.form=t[1]),o!==(o=t[0][1])){if(e){X();const d=e;V(d.$$.fragment,1,0,()=>{M(d,1)}),Z()}o?(e=J(o,l(t)),G(e.$$.fragment),q(e.$$.fragment,1),K(e,n.parentNode,n)):e=null}else o&&e.$set(f)},i(t){s||(e&&q(e.$$.fragment,t),s=!0)},o(t){e&&V(e.$$.fragment,t),s=!1},d(t){t&&C(n),e&&M(e,t)}}}function Rt(r){let e,n,s;var o=r[0][1];function l(t){return{props:{data:t[3],$$slots:{default:[Ot]},$$scope:{ctx:t}}}}return o&&(e=J(o,l(r))),{c(){e&&G(e.$$.fragment),n=D()},l(t){e&&oe(e.$$.fragment,t),n=D()},m(t,c){e&&K(e,t,c),F(t,n,c),s=!0},p(t,c){const f={};if(c&8&&(f.data=t[3]),c&1043&&(f.$$scope={dirty:c,ctx:t}),o!==(o=t[0][1])){if(e){X();const d=e;V(d.$$.fragment,1,0,()=>{M(d,1)}),Z()}o?(e=J(o,l(t)),G(e.$$.fragment),q(e.$$.fragment,1),K(e,n.parentNode,n)):e=null}else o&&e.$set(f)},i(t){s||(e&&q(e.$$.fragment,t),s=!0)},o(t){e&&V(e.$$.fragment,t),s=!1},d(t){t&&C(n),e&&M(e,t)}}}function Ot(r){let e,n,s;var o=r[0][2];function l(t){return{props:{data:t[4],form:t[1]}}}return o&&(e=J(o,l(r))),{c(){e&&G(e.$$.fragment),n=D()},l(t){e&&oe(e.$$.fragment,t),n=D()},m(t,c){e&&K(e,t,c),F(t,n,c),s=!0},p(t,c){const f={};if(c&16&&(f.data=t[4]),c&2&&(f.form=t[1]),o!==(o=t[0][2])){if(e){X();const d=e;V(d.$$.fragment,1,0,()=>{M(d,1)}),Z()}o?(e=J(o,l(t)),G(e.$$.fragment),q(e.$$.fragment,1),K(e,n.parentNode,n)):e=null}else o&&e.$set(f)},i(t){s||(e&&q(e.$$.fragment,t),s=!0)},o(t){e&&V(e.$$.fragment,t),s=!1},d(t){t&&C(n),e&&M(e,t)}}}function St(r){let e,n,s,o;const l=[Rt,$t],t=[];function c(f,d){return f[0][2]?0:1}return e=c(r),n=t[e]=l[e](r),{c(){n.c(),s=D()},l(f){n.l(f),s=D()},m(f,d){t[e].m(f,d),F(f,s,d),o=!0},p(f,d){let g=e;e=c(f),e===g?t[e].p(f,d):(X(),V(t[g],1,1,()=>{t[g]=null}),Z(),n=t[e],n?n.p(f,d):(n=t[e]=l[e](f),n.c()),q(n,1),n.m(s.parentNode,s))},i(f){o||(q(n),o=!0)},o(f){V(n),o=!1},d(f){t[e].d(f),f&&C(s)}}}function Ge(r){let e,n=r[6]&&Ke(r);return{c(){e=et("div"),n&&n.c(),this.h()},l(s){e=tt(s,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var o=nt(e);n&&n.l(o),o.forEach(C),this.h()},h(){ke(e,"id","svelte-announcer"),ke(e,"aria-live","assertive"),ke(e,"aria-atomic","true"),H(e,"position","absolute"),H(e,"left","0"),H(e,"top","0"),H(e,"clip","rect(0 0 0 0)"),H(e,"clip-path","inset(50%)"),H(e,"overflow","hidden"),H(e,"white-space","nowrap"),H(e,"width","1px"),H(e,"height","1px")},m(s,o){F(s,e,o),n&&n.m(e,null)},p(s,o){s[6]?n?n.p(s,o):(n=Ke(s),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(s){s&&C(e),n&&n.d()}}}function Ke(r){let e;return{c(){e=rt(r[7])},l(n){e=at(n,r[7])},m(n,s){F(n,e,s)},p(n,s){s&128&&st(e,n[7])},d(n){n&&C(e)}}}function It(r){let e,n,s,o,l;const t=[Et,kt],c=[];function f(g,v){return g[0][1]?0:1}e=f(r),n=c[e]=t[e](r);let d=r[5]&&Ge(r);return{c(){n.c(),s=Ze(),d&&d.c(),o=D()},l(g){n.l(g),s=Qe(g),d&&d.l(g),o=D()},m(g,v){c[e].m(g,v),F(g,s,v),d&&d.m(g,v),F(g,o,v),l=!0},p(g,[v]){let U=e;e=f(g),e===U?c[e].p(g,v):(X(),V(c[U],1,1,()=>{c[U]=null}),Z(),n=c[e],n?n.p(g,v):(n=c[e]=t[e](g),n.c()),q(n,1),n.m(s.parentNode,s)),g[5]?d?d.p(g,v):(d=Ge(g),d.c(),d.m(o.parentNode,o)):d&&(d.d(1),d=null)},i(g){l||(q(n),l=!0)},o(g){V(n),l=!1},d(g){c[e].d(g),g&&C(s),d&&d.d(g),g&&C(o)}}}function Lt(r,e,n){let{stores:s}=e,{page:o}=e,{components:l}=e,{form:t}=e,{data_0:c=null}=e,{data_1:f=null}=e,{data_2:d=null}=e;xe(s.page.notify);let g=!1,v=!1,U=null;return $e(()=>{const k=s.page.subscribe(()=>{g&&(n(6,v=!0),n(7,U=document.title||"untitled page"))});return n(5,g=!0),k}),r.$$set=k=>{"stores"in k&&n(8,s=k.stores),"page"in k&&n(9,o=k.page),"components"in k&&n(0,l=k.components),"form"in k&&n(1,t=k.form),"data_0"in k&&n(2,c=k.data_0),"data_1"in k&&n(3,f=k.data_1),"data_2"in k&&n(4,d=k.data_2)},r.$$.update=()=>{r.$$.dirty&768&&s.page.set(o)},[l,t,c,f,d,g,v,U,s,o]}class At extends Ye{constructor(e){super(),We(this,e,Lt,It,Xe,{stores:8,page:9,components:0,form:1,data_0:2,data_1:3,data_2:4})}}const Nt={},_e=[()=>ee(()=>import("./chunks/0-7dd30f12.js"),["chunks/0-7dd30f12.js","components/pages/_layout.svelte-0f38cb1b.js","assets/_layout-d9c87bab.css","chunks/preload-helper-aa6bc0ce.js","chunks/index-7b66872c.js","chunks/stores-a4cf1a4d.js","chunks/utils-d8ad23a1.js"],import.meta.url),()=>ee(()=>import("./chunks/1-be8c884d.js"),["chunks/1-be8c884d.js","components/error.svelte-895007dc.js","chunks/index-7b66872c.js","chunks/stores-a5dd1fbc.js","chunks/singletons-c23c1a95.js"],import.meta.url),()=>ee(()=>import("./chunks/2-7da19092.js"),["chunks/2-7da19092.js","components/pages/(app)/_layout.svelte-fc234f3d.js","chunks/index-7b66872c.js","chunks/navigation-7e1dc79b.js","chunks/stores-a4cf1a4d.js","chunks/singletons-c23c1a95.js","chunks/Subheader-45bba2be.js","chunks/utils-d8ad23a1.js"],import.meta.url),()=>ee(()=>import("./chunks/3-361c4816.js"),["chunks/3-361c4816.js","components/pages/(app)/_page.svelte-c1d7a40d.js","chunks/index-7b66872c.js","chunks/stores-a4cf1a4d.js"],import.meta.url),()=>ee(()=>import("./chunks/4-9ca1302c.js"),["chunks/4-9ca1302c.js","components/pages/(app)/automaths/_page.svelte-15c5d21a.js","chunks/index-7b66872c.js","chunks/navigation-7e1dc79b.js","chunks/stores-a4cf1a4d.js","chunks/singletons-c23c1a95.js","chunks/images-15dfbace.js","assets/images-d13b24d9.css","chunks/utils-d8ad23a1.js","chunks/preload-helper-aa6bc0ce.js","chunks/env-public-6aa99648.js","chunks/Subheader-45bba2be.js","chunks/stores-a5dd1fbc.js"],import.meta.url),()=>ee(()=>import("./chunks/5-644c2eee.js"),["chunks/5-644c2eee.js","components/pages/(app)/automaths/assessment/_page.svelte-e072477e.js","assets/_page-852bcdd8.css","chunks/index-7b66872c.js","chunks/images-15dfbace.js","assets/images-d13b24d9.css","chunks/navigation-7e1dc79b.js","chunks/stores-a4cf1a4d.js","chunks/singletons-c23c1a95.js","chunks/utils-d8ad23a1.js","chunks/preload-helper-aa6bc0ce.js","chunks/env-public-6aa99648.js","chunks/stores-a5dd1fbc.js"],import.meta.url)],jt=[],Pt={"/(app)":[3,[2]],"/(app)/automaths":[4,[2]],"/(app)/automaths/assessment":[5,[2]]},Ut={handleError:({error:r})=>{console.error(r)}};class Oe{constructor(e,n){this.status=e,typeof n=="string"?this.body={message:n}:n?this.body=n:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class Me{constructor(e,n){this.status=e,this.location=n}}const Tt="/__data.json";async function Dt(r){var e;for(const n in r)if(typeof((e=r[n])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(r).map(async([s,o])=>[s,await o])));return r}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const Vt=-1,qt=-2,Bt=-3,Ct=-4,Ft=-5,Jt=-6;function Gt(r){const e=JSON.parse(r);if(typeof e=="number")return o(e);const n=e,s=Array(n.length);function o(l){if(l===Vt)return;if(l===Bt)return NaN;if(l===Ct)return 1/0;if(l===Ft)return-1/0;if(l===Jt)return-0;if(l in s)return s[l];const t=n[l];if(!t||typeof t!="object")s[l]=t;else if(Array.isArray(t))if(typeof t[0]=="string")switch(t[0]){case"Date":s[l]=new Date(t[1]);break;case"Set":const f=new Set;s[l]=f;for(let v=1;v<t.length;v+=1)f.add(o(t[v]));break;case"Map":const d=new Map;s[l]=d;for(let v=1;v<t.length;v+=2)d.set(o(t[v]),o(t[v+1]));break;case"RegExp":s[l]=new RegExp(t[1],t[2]);break;case"Object":s[l]=Object(t[1]);break;case"BigInt":s[l]=BigInt(t[1]);break;case"null":const g=Object.create(null);s[l]=g;for(let v=1;v<t.length;v+=2)g[t[v]]=o(t[v+1]);break}else{const c=new Array(t.length);s[l]=c;for(let f=0;f<t.length;f+=1){const d=t[f];d!==qt&&(c[f]=o(d))}}else{const c={};s[l]=c;for(const f in t){const d=t[f];c[f]=o(d)}}return s[l]}return o(0)}const He="sveltekit:scroll",Y="sveltekit:index",ue=vt(_e,jt,Pt,Nt),Se=_e[0],Ie=_e[1];Se();Ie();let se={};try{se=JSON.parse(sessionStorage[He])}catch{}function Ee(r){se[r]=Re()}function Kt({target:r,base:e,trailing_slash:n}){var Ve;const s=[];let o=null;const l={before_navigate:[],after_navigate:[]};let t={branch:[],error:null,url:null},c=!1,f=!1,d=!0,g=!1,v=!1,U,k=(Ve=history.state)==null?void 0:Ve[Y];k||(k=Date.now(),history.replaceState({...history.state,[Y]:k},"",location.href));const T=se[k];T&&(history.scrollRestoration="manual",scrollTo(T.x,T.y));let z=!1,B,ie,Q;async function le(){Q=Q||Promise.resolve(),await Q,Q=null;const a=new URL(location.href),p=ye(a,!0);o=null,await Ae(p,a,[])}async function te(a,{noscroll:p=!1,replaceState:h=!1,keepfocus:i=!1,state:u={}},m,_){return typeof a=="string"&&(a=new URL(a,Fe(document))),be({url:a,scroll:p?Re():null,keepfocus:i,redirect_chain:m,details:{state:u,replaceState:h},nav_token:_,accepted:()=>{},blocked:()=>{},type:"goto"})}async function Le(a){const p=ye(a,!1);if(!p)throw new Error(`Attempted to prefetch a URL that does not belong to this app: ${a}`);return o={id:p.id,promise:Pe(p)},o.promise}async function Ae(a,p,h,i,u={},m){var $,E;ie=u;let _=a&&await Pe(a);if(_||(_=await De(p,null,ae(new Error(`Not found: ${p.pathname}`),{url:p,params:{},routeId:null}),404)),p=(a==null?void 0:a.url)||p,ie!==u)return!1;if(_.type==="redirect")if(h.length>10||h.includes(p.pathname))_=await ce({status:500,error:ae(new Error("Redirect loop"),{url:p,params:{},routeId:null}),url:p,routeId:null});else return te(new URL(_.location,p).href,{},[...h,p.pathname],u),!1;else((E=($=_.props)==null?void 0:$.page)==null?void 0:E.status)>=400&&await W.updated.check()&&await fe(p);if(s.length=0,v=!1,g=!0,i&&i.details){const{details:y}=i,b=y.replaceState?0:1;y.state[Y]=k+=b,history[y.replaceState?"replaceState":"pushState"](y.state,"",p)}if(o=null,f){t=_.state,_.props.page&&(_.props.page.url=p);const y=de();U.$set(_.props),y()}else Ne(_);if(i){const{scroll:y,keepfocus:b}=i;if(!b){const O=document.body,I=O.getAttribute("tabindex");O.tabIndex=-1,O.focus({preventScroll:!0}),setTimeout(()=>{var L;(L=getSelection())==null||L.removeAllRanges()}),I!==null?O.setAttribute("tabindex",I):O.removeAttribute("tabindex")}if(await Ce(),d){const O=p.hash&&document.getElementById(p.hash.slice(1));y?scrollTo(y.x,y.y):O?O.scrollIntoView():scrollTo(0,0)}}else await Ce();d=!0,_.props.page&&(B=_.props.page),m&&m(),g=!1}function Ne(a){var u,m;t=a.state;const p=document.querySelector("style[data-sveltekit]");p&&p.remove(),B=a.props.page;const h=de();U=new At({target:r,props:{...a.props,stores:W},hydrate:!0}),h();const i={from:null,to:pe("to",{params:t.params,routeId:(m=(u=t.route)==null?void 0:u.id)!=null?m:null,url:new URL(location.href)}),type:"load"};l.after_navigate.forEach(_=>_(i)),f=!0}async function ne({url:a,params:p,branch:h,status:i,error:u,route:m,form:_}){var I;const $=h.filter(Boolean),E={type:"loaded",state:{url:a,params:p,branch:h,error:u,route:m},props:{components:$.map(L=>L.node.component)}};_!==void 0&&(E.props.form=_);let y={},b=!B;for(let L=0;L<$.length;L+=1){const j=$[L];y={...y,...j.data},(b||!t.branch.some(P=>P===j))&&(E.props[`data_${L}`]=y,b=b||Object.keys((I=j.data)!=null?I:{}).length>0)}if(b||(b=Object.keys(B.data).length!==Object.keys(y).length),!t.url||a.href!==t.url.href||t.error!==u||_!==void 0||b){E.props.page={error:u,params:p,routeId:m&&m.id,status:i,url:a,form:_,data:b?y:B.data};const L=(j,P)=>{Object.defineProperty(E.props.page,j,{get:()=>{throw new Error(`$page.${j} has been replaced by $page.url.${P}`)}})};L("origin","origin"),L("path","pathname"),L("query","searchParams")}return E}async function ge({loader:a,parent:p,url:h,params:i,routeId:u,server_data_node:m}){var y,b,O,I,L;let _=null;const $={dependencies:new Set,params:new Set,parent:!1,url:!1},E=await a();if((y=E.shared)!=null&&y.load){let j=function(...S){for(const w of S){const{href:R}=new URL(w,h);$.dependencies.add(R)}};const P={routeId:u,params:new Proxy(i,{get:(S,w)=>($.params.add(w),S[w])}),data:(b=m==null?void 0:m.data)!=null?b:null,url:pt(h,()=>{$.url=!0}),async fetch(S,w){let R;S instanceof Request?(R=S.url,w={body:S.method==="GET"||S.method==="HEAD"?void 0:await S.blob(),cache:S.cache,credentials:S.credentials,headers:S.headers,integrity:S.integrity,keepalive:S.keepalive,method:S.method,mode:S.mode,redirect:S.redirect,referrer:S.referrer,referrerPolicy:S.referrerPolicy,signal:S.signal,...w}):R=S;const N=new URL(R,h).href;return j(N),f?_t(N,w):mt(R,N,w)},setHeaders:()=>{},depends:j,parent(){return $.parent=!0,p()}};Object.defineProperties(P,{props:{get(){throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},session:{get(){throw new Error("session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")},enumerable:!1},stuff:{get(){throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1}}),_=(O=await E.shared.load.call(null,P))!=null?O:null,_=_?await Dt(_):null}return{node:E,loader:a,server:m,shared:(I=E.shared)!=null&&I.load?{type:"data",data:_,uses:$}:null,data:(L=_!=null?_:m==null?void 0:m.data)!=null?L:null}}function je(a,p,h,i){if(v)return!0;if(!h)return!1;if(h.parent&&p||h.url&&a)return!0;for(const u of h.params)if(i[u]!==t.params[u])return!0;for(const u of h.dependencies)if(s.some(m=>m(new URL(u))))return!0;return!1}function we(a,p){var h,i;return(a==null?void 0:a.type)==="data"?{type:"data",data:a.data,uses:{dependencies:new Set((h=a.uses.dependencies)!=null?h:[]),params:new Set((i=a.uses.params)!=null?i:[]),parent:!!a.uses.parent,url:!!a.uses.url}}:(a==null?void 0:a.type)==="skip"&&p!=null?p:null}async function Pe({id:a,invalidating:p,url:h,params:i,route:u}){var S;if((o==null?void 0:o.id)===a)return o.promise;const{errors:m,layouts:_,leaf:$}=u,E=[..._,$];m.forEach(w=>w==null?void 0:w().catch(()=>{})),E.forEach(w=>w==null?void 0:w[1]().catch(()=>{}));let y=null;const b=t.url?a!==t.url.pathname+t.url.search:!1,O=E.reduce((w,R,N)=>{var re;const A=t.branch[N],x=!!(R!=null&&R[0])&&((A==null?void 0:A.loader)!==R[1]||je(b,w.some(Boolean),(re=A.server)==null?void 0:re.uses,i));return w.push(x),w},[]);if(O.some(Boolean)){try{y=await ze(h,O)}catch(w){return ce({status:500,error:ae(w,{url:h,params:i,routeId:u.id}),url:h,routeId:u.id})}if(y.type==="redirect")return y}const I=y==null?void 0:y.nodes;let L=!1;const j=E.map(async(w,R)=>{var re;if(!w)return;const N=t.branch[R],A=I==null?void 0:I[R];if((!A||A.type==="skip")&&w[1]===(N==null?void 0:N.loader)&&!je(b,L,(re=N.shared)==null?void 0:re.uses,i))return N;if(L=!0,(A==null?void 0:A.type)==="error")throw A;return ge({loader:w[1],url:h,params:i,routeId:u.id,parent:async()=>{var Be;const qe={};for(let ve=0;ve<R;ve+=1)Object.assign(qe,(Be=await j[ve])==null?void 0:Be.data);return qe},server_data_node:we(A===void 0&&w[0]?{type:"skip"}:A!=null?A:null,N==null?void 0:N.server)})});for(const w of j)w.catch(()=>{});const P=[];for(let w=0;w<E.length;w+=1)if(E[w])try{P.push(await j[w])}catch(R){if(R instanceof Me)return{type:"redirect",location:R.location};let N=500,A;I!=null&&I.includes(R)?(N=(S=R.status)!=null?S:N,A=R.error):R instanceof Oe?(N=R.status,A=R.body):A=ae(R,{params:i,url:h,routeId:u.id});const x=await Ue(w,P,m);return x?await ne({url:h,params:i,branch:P.slice(0,x.idx).concat(x.node),status:N,error:A,route:u}):await De(h,u.id,A,N)}else P.push(void 0);return await ne({url:h,params:i,branch:P,status:200,error:null,route:u,form:p?void 0:null})}async function Ue(a,p,h){for(;a--;)if(h[a]){let i=a;for(;!p[i];)i-=1;try{return{idx:i+1,node:{node:await h[a](),loader:h[a],data:{},server:null,shared:null}}}catch{continue}}}async function ce({status:a,error:p,url:h,routeId:i}){var y;const u={},m=await Se();let _=null;if(m.server)try{const b=await ze(h,[!0]);if(b.type!=="data"||b.nodes[0]&&b.nodes[0].type!=="data")throw 0;_=(y=b.nodes[0])!=null?y:null}catch{(h.origin!==location.origin||h.pathname!==location.pathname||c)&&await fe(h)}const $=await ge({loader:Se,url:h,params:u,routeId:i,parent:()=>Promise.resolve({}),server_data_node:we(_)}),E={node:await Ie(),loader:Ie,shared:null,server:null,data:null};return await ne({url:h,params:u,branch:[$,E],status:a,error:p,route:null})}function ye(a,p){if(Te(a))return;const h=decodeURI(a.pathname.slice(e.length)||"/");for(const i of ue){const u=i.exec(h);if(u){const m=new URL(a.origin+ct(a.pathname,n)+a.search+a.hash);return{id:m.pathname+m.search,invalidating:p,route:i,params:ft(u),url:m}}}}function Te(a){return a.origin!==location.origin||!a.pathname.startsWith(e)}async function be({url:a,scroll:p,keepfocus:h,redirect_chain:i,details:u,type:m,delta:_,nav_token:$,accepted:E,blocked:y}){var j,P,S,w;let b=!1;const O=ye(a,!1),I={from:pe("from",{params:t.params,routeId:(P=(j=t.route)==null?void 0:j.id)!=null?P:null,url:t.url}),to:pe("to",{params:(S=O==null?void 0:O.params)!=null?S:null,routeId:(w=O==null?void 0:O.route.id)!=null?w:null,url:a}),type:m};_!==void 0&&(I.delta=_);const L={...I,cancel:()=>{b=!0}};if(l.before_navigate.forEach(R=>R(L)),b){y();return}Ee(k),E(),f&&W.navigating.set(I),await Ae(O,a,i,{scroll:p,keepfocus:h,details:u},$,()=>{l.after_navigate.forEach(R=>R(I)),W.navigating.set(null)})}async function De(a,p,h,i){return a.origin===location.origin&&a.pathname===location.pathname&&!c?await ce({status:i,error:h,url:a,routeId:p}):await fe(a)}function fe(a){return location.href=a.href,new Promise(()=>{})}return{after_navigate:a=>{$e(()=>(l.after_navigate.push(a),()=>{const p=l.after_navigate.indexOf(a);l.after_navigate.splice(p,1)}))},before_navigate:a=>{$e(()=>(l.before_navigate.push(a),()=>{const p=l.before_navigate.indexOf(a);l.before_navigate.splice(p,1)}))},disable_scroll_handling:()=>{(g||!f)&&(d=!1)},goto:(a,p={})=>te(a,p,[]),invalidate:a=>{if(a===void 0)throw new Error("`invalidate()` (with no arguments) has been replaced by `invalidateAll()`");if(typeof a=="function")s.push(a);else{const{href:p}=new URL(a,location.href);s.push(h=>h.href===p)}return le()},invalidateAll:()=>(v=!0,le()),prefetch:async a=>{const p=new URL(a,Fe(document));await Le(p)},prefetch_routes:async a=>{const h=(a?ue.filter(i=>a.some(u=>i.exec(u))):ue).map(i=>Promise.all([...i.layouts,i.leaf].map(u=>u==null?void 0:u[1]())));await Promise.all(h)},apply_action:async a=>{if(a.type==="error"){const p=new URL(location.href),{branch:h,route:i}=t;if(!i)return;const u=await Ue(t.branch.length,h,i.errors);if(u){const m=await ne({url:p,params:t.params,branch:h.slice(0,u.idx).concat(u.node),status:500,error:a.error,route:i});t=m.state;const _=de();U.$set(m.props),_()}}else if(a.type==="redirect")te(a.location,{},[]);else{const p={form:a.data,page:{...B,form:a.data,status:a.status}},h=de();U.$set(p),h()}},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",i=>{var _,$;let u=!1;const m={from:pe("from",{params:t.params,routeId:($=(_=t.route)==null?void 0:_.id)!=null?$:null,url:t.url}),to:null,type:"unload",cancel:()=>u=!0};l.before_navigate.forEach(E=>E(m)),u?(i.preventDefault(),i.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){Ee(k);try{sessionStorage[He]=JSON.stringify(se)}catch{}}});const a=i=>{const{url:u,options:m}=Je(i);if(u&&m.prefetch){if(Te(u))return;Le(u)}};let p;const h=i=>{clearTimeout(p),p=setTimeout(()=>{var u;(u=i.target)==null||u.dispatchEvent(new CustomEvent("sveltekit:trigger_prefetch",{bubbles:!0}))},20)};addEventListener("touchstart",a),addEventListener("mousemove",h),addEventListener("sveltekit:trigger_prefetch",a),addEventListener("click",i=>{if(i.button||i.which!==1||i.metaKey||i.ctrlKey||i.shiftKey||i.altKey||i.defaultPrevented)return;const{a:u,url:m,options:_}=Je(i);if(!u||!m)return;const $=u instanceof SVGAElement;if(!$&&m.protocol!==location.protocol&&!(m.protocol==="https:"||m.protocol==="http:"))return;const E=(u.getAttribute("rel")||"").split(/\s+/);if(u.hasAttribute("download")||E.includes("external")||_.reload||($?u.target.baseVal:u.target))return;const[y,b]=m.href.split("#");if(b!==void 0&&y===location.href.split("#")[0]){z=!0,Ee(k),t.url=m,W.page.set({...B,url:m}),W.page.notify();return}be({url:m,scroll:_.noscroll?Re():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:m.href===location.href},accepted:()=>i.preventDefault(),blocked:()=>i.preventDefault(),type:"link"})}),addEventListener("popstate",i=>{if(i.state){if(i.state[Y]===k)return;const u=i.state[Y]-k;be({url:new URL(location.href),scroll:se[i.state[Y]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{k=i.state[Y]},blocked:()=>{history.go(-u)},type:"popstate",delta:u})}}),addEventListener("hashchange",()=>{z&&(z=!1,history.replaceState({...history.state,[Y]:++k},"",location.href))});for(const i of document.querySelectorAll("link"))i.rel==="icon"&&(i.href=i.href);addEventListener("pageshow",i=>{i.persisted&&W.navigating.set(null)})},_hydrate:async({status:a,error:p,node_ids:h,params:i,routeId:u,data:m,form:_})=>{var y;c=!0;const $=new URL(location.href);let E;try{const b=h.map(async(O,I)=>{const L=m[I];return ge({loader:_e[O],url:$,params:i,routeId:u,parent:async()=>{const j={};for(let P=0;P<I;P+=1)Object.assign(j,(await b[P]).data);return j},server_data_node:we(L)})});E=await ne({url:$,params:i,branch:await Promise.all(b),status:a,error:p,form:_,route:(y=ue.find(O=>O.id===u))!=null?y:null})}catch(b){if(b instanceof Me){await fe(new URL(b.location,location.href));return}E=await ce({status:b instanceof Oe?b.status:500,error:ae(b,{url:$,params:i,routeId:u}),url:$,routeId:u})}Ne(E)}}}async function ze(r,e){const n=new URL(r);n.pathname=r.pathname.replace(/\/$/,"")+Tt;const s=await me(n.href,{headers:{"x-sveltekit-invalidated":e.map(l=>l?"1":"").join(",")}}),o=await s.text();if(!s.ok)throw new Error(JSON.parse(o));return Gt(o)}function ae(r,e){var n;return r instanceof Oe?r.body:(n=Ut.handleError({error:r,event:e}))!=null?n:{message:e.routeId!=null?"Internal Error":"Not Found"}}const Mt=["hash","href","host","hostname","origin","pathname","port","protocol","search","searchParams","toString","toJSON"];function pe(r,e){for(const n of Mt)Object.defineProperty(e,n,{get(){throw new Error(`The navigation shape changed - ${r}.${n} should now be ${r}.url.${n}`)},enumerable:!1});return e}function de(){return()=>{}}async function Xt({env:r,hydrate:e,paths:n,target:s,trailing_slash:o}){lt(r),ot(n);const l=Kt({target:s,base:n.base,trailing_slash:o});it({client:l}),e?await l._hydrate(e):l.goto(location.href,{replaceState:!0}),l._start_router()}export{Xt as start};
