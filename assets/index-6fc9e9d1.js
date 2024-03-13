(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function y(){}function oe(t){return t()}function Z(){return Object.create(null)}function j(t){t.forEach(oe)}function le(t){return typeof t=="function"}function H(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function fe(t){return Object.keys(t).length===0}const ue=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function v(t,e){t.appendChild(e)}function h(t,e,n){t.insertBefore(e,n||null)}function m(t){t.parentNode&&t.parentNode.removeChild(t)}function ce(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function b(t){return document.createElement(t)}function I(t){return document.createTextNode(t)}function E(){return I(" ")}function J(){return I("")}function Q(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function N(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function ae(t){return Array.from(t.childNodes)}function U(t,e){e=""+e,t.data!==e&&(t.data=e)}function ee(t,e,n){t.classList[n?"add":"remove"](e)}function D(t,e){return new t(e)}let Y;function W(t){Y=t}function de(){if(!Y)throw new Error("Function called outside component initialization");return Y}function _e(t){de().$$.on_mount.push(t)}const x=[],S=[];let M=[];const K=[],pe=Promise.resolve();let V=!1;function me(){V||(V=!0,pe.then(se))}function G(t){M.push(t)}function he(t){K.push(t)}const z=new Set;let T=0;function se(){if(T!==0)return;const t=Y;do{try{for(;T<x.length;){const e=x[T];T++,W(e),ge(e.$$)}}catch(e){throw x.length=0,T=0,e}for(W(null),x.length=0,T=0;S.length;)S.pop()();for(let e=0;e<M.length;e+=1){const n=M[e];z.has(n)||(z.add(n),n())}M.length=0}while(x.length);for(;K.length;)K.pop()();V=!1,z.clear(),W(t)}function ge(t){if(t.fragment!==null){t.update(),j(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(G)}}function be(t){const e=[],n=[];M.forEach(r=>t.indexOf(r)===-1?e.push(r):n.push(r)),n.forEach(r=>r()),M=e}const R=new Set;let C;function F(){C={r:0,c:[],p:C}}function X(){C.r||j(C.c),C=C.p}function w(t,e){t&&t.i&&(R.delete(t),t.i(e))}function k(t,e,n,r){if(t&&t.o){if(R.has(t))return;R.add(t),C.c.push(()=>{R.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}function ve(t,e,n){const r=t.$$.props[e];r!==void 0&&(t.$$.bound[r]=n,n(t.$$.ctx[r]))}function P(t){t&&t.c()}function L(t,e,n,r){const{fragment:i,after_update:o}=t.$$;i&&i.m(e,n),r||G(()=>{const l=t.$$.on_mount.map(oe).filter(le);t.$$.on_destroy?t.$$.on_destroy.push(...l):j(l),t.$$.on_mount=[]}),o.forEach(G)}function O(t,e){const n=t.$$;n.fragment!==null&&(be(n.after_update),j(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ye(t,e){t.$$.dirty[0]===-1&&(x.push(t),me(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function q(t,e,n,r,i,o,l,f=[-1]){const s=Y;W(t);const u=t.$$={fragment:null,ctx:[],props:o,update:y,not_equal:i,bound:Z(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(s?s.$$.context:[])),callbacks:Z(),dirty:f,skip_bound:!1,root:e.target||s.$$.root};l&&l(u.root);let g=!1;if(u.ctx=n?n(t,e.props||{},(d,c,..._)=>{const a=_.length?_[0]:c;return u.ctx&&i(u.ctx[d],u.ctx[d]=a)&&(!u.skip_bound&&u.bound[d]&&u.bound[d](a),g&&ye(t,d)),c}):[],u.update(),g=!0,j(u.before_update),u.fragment=r?r(u.ctx):!1,e.target){if(e.hydrate){const d=ae(e.target);u.fragment&&u.fragment.l(d),d.forEach(m)}else u.fragment&&u.fragment.c();e.intro&&w(t.$$.fragment),L(t,e.target,e.anchor,e.customElement),se()}W(s)}class B{$destroy(){O(this,1),this.$destroy=y}$on(e,n){if(!le(n))return y;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const i=r.indexOf(n);i!==-1&&r.splice(i,1)}}$set(e){this.$$set&&!fe(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function we(t){let e,n,r,i=`<code class="language-undefined">Version: XX.YY (YYYYMMDD)
Maintainer: Andrew Wong (andrew.j.wong@unsw.edu.au)</code>`;return{c(){e=b("h1"),e.textContent="COMP6845 | TITLE",n=E(),r=b("pre"),N(r,"class","language-undefined")},m(o,l){h(o,e,l),h(o,n,l),h(o,r,l),r.innerHTML=i},p:y,i:y,o:y,d(o){o&&m(e),o&&m(n),o&&m(r)}}}class $e extends B{constructor(e){super(),q(this,e,null,we,H,{})}}function te(t){let e,n,r=t[0][t[1]-1][0]+"",i,o,l,f;return{c(){e=b("button"),n=I("« "),i=I(r),o=I(" «")},m(s,u){h(s,e,u),v(e,n),v(e,i),v(e,o),l||(f=Q(e,"click",t[7]),l=!0)},p(s,u){u&3&&r!==(r=s[0][s[1]-1][0]+"")&&U(i,r)},d(s){s&&m(e),l=!1,f()}}}function ne(t){let e,n,r=t[0][t[1]+1][0]+"",i,o,l,f;return{c(){e=b("button"),n=I("» "),i=I(r),o=I(" »")},m(s,u){h(s,e,u),v(e,n),v(e,i),v(e,o),l||(f=Q(e,"click",t[8]),l=!0)},p(s,u){u&3&&r!==(r=s[0][s[1]+1][0]+"")&&U(i,r)},d(s){s&&m(e),l=!1,f()}}}function ke(t){let e,n,r,i,o,l,f=t[0][t[1]][0]+"",s,u,g,d,c,_=t[1]>0&&te(t),a=t[1]<t[0].length-1&&ne(t);return{c(){e=b("div"),n=b("div"),r=b("div"),_&&_.c(),i=E(),o=b("div"),l=b("h4"),s=I(f),u=E(),g=b("div"),a&&a.c(),d=E(),c=b("hr"),N(r,"class","svelte-14sokvu"),N(o,"class","svelte-14sokvu"),N(g,"class","svelte-14sokvu"),N(n,"class","navigation svelte-14sokvu"),N(c,"class","svelte-14sokvu"),ee(c,"wide",t[3]),N(e,"class","container svelte-14sokvu")},m(p,$){h(p,e,$),v(e,n),v(n,r),_&&_.m(r,null),v(n,i),v(n,o),v(o,l),v(l,s),v(n,u),v(n,g),a&&a.m(g,null),v(e,d),v(e,c),t[9](e)},p(p,[$]){p[1]>0?_?_.p(p,$):(_=te(p),_.c(),_.m(r,null)):_&&(_.d(1),_=null),$&3&&f!==(f=p[0][p[1]][0]+"")&&U(s,f),p[1]<p[0].length-1?a?a.p(p,$):(a=ne(p),a.c(),a.m(g,null)):a&&(a.d(1),a=null),$&8&&ee(c,"wide",p[3])},i:y,o:y,d(p){p&&m(e),_&&_.d(),a&&a.d(),t[9](null)}}}function Ie(t,e,n){let{items:r=[]}=e,{activeItem:i}=e,o=0,l,f,s,u;_e(()=>{new IntersectionObserver(([_])=>n(3,u=_.intersectionRatio<1),{threshold:[1]}).observe(s)});const g=()=>{n(1,o--,o)},d=()=>{n(1,o++,o)};function c(_){S[_?"unshift":"push"](()=>{s=_,n(2,s)})}return t.$$set=_=>{"items"in _&&n(0,r=_.items),"activeItem"in _&&n(4,i=_.activeItem)},t.$$.update=()=>{t.$$.dirty&115&&(l!==i&&(n(5,l=i),n(1,o=r.findIndex(([_,a])=>a===i))),f!==o&&(n(6,f=o),n(4,i=r[o][1])))},[r,o,s,u,i,l,f,g,d,c]}class Ee extends B{constructor(e){super(),q(this,e,Ie,ke,H,{items:0,activeItem:4})}}function Ne(t){let e,n,r;return{c(){e=b("h1"),e.textContent="Welcome!",n=E(),r=b("p"),r.textContent="This is a page"},m(i,o){h(i,e,o),h(i,n,o),h(i,r,o)},p:y,i:y,o:y,d(i){i&&m(e),i&&m(n),i&&m(r)}}}class Ce extends B{constructor(e){super(),q(this,e,null,Ne,H,{})}}function Ae(t){let e,n,r;return{c(){e=b("h1"),e.textContent="Next!",n=E(),r=b("p"),r.textContent="This is the second page"},m(i,o){h(i,e,o),h(i,n,o),h(i,r,o)},p:y,i:y,o:y,d(i){i&&m(e),i&&m(n),i&&m(r)}}}class Le extends B{constructor(e){super(),q(this,e,null,Ae,H,{})}}const A=[["Welcome",Ce],["Next",Le]];const{window:Oe}=ue;function ie(t,e,n){const r=t.slice();return r[9]=e[n][0],r[10]=e[n][1],r}function Te(t){let e,n,r,i,o,l;function f(d){t[6](d)}let s={items:A};t[1]!==void 0&&(s.activeItem=t[1]),e=new Ee({props:s}),S.push(()=>ve(e,"activeItem",f));var u=t[1];function g(d){return{props:{}}}return u&&(o=D(u,g()),t[7](o)),{c(){P(e.$$.fragment),r=E(),i=b("main"),o&&P(o.$$.fragment),N(i,"class","svelte-ck21ns")},m(d,c){L(e,d,c),h(d,r,c),h(d,i,c),o&&L(o,i,null),t[8](i),l=!0},p(d,c){const _={};!n&&c&2&&(n=!0,_.activeItem=d[1],he(()=>n=!1)),e.$set(_);const a={};if(c&2&&u!==(u=d[1])){if(o){F();const p=o;k(p.$$.fragment,1,0,()=>{O(p,1)}),X()}u?(o=D(u,g()),d[7](o),P(o.$$.fragment),w(o.$$.fragment,1),L(o,i,null)):o=null}else u&&o.$set(a)},i(d){l||(w(e.$$.fragment,d),o&&w(o.$$.fragment,d),l=!0)},o(d){k(e.$$.fragment,d),o&&k(o.$$.fragment,d),l=!1},d(d){O(e,d),d&&m(r),d&&m(i),t[7](null),o&&O(o),t[8](null)}}}function xe(t){let e,n,r=A,i=[];for(let l=0;l<r.length;l+=1)i[l]=re(ie(t,r,l));const o=l=>k(i[l],1,1,()=>{i[l]=null});return{c(){for(let l=0;l<i.length;l+=1)i[l].c();e=J()},m(l,f){for(let s=0;s<i.length;s+=1)i[s]&&i[s].m(l,f);h(l,e,f),n=!0},p(l,f){if(f&0){r=A;let s;for(s=0;s<r.length;s+=1){const u=ie(l,r,s);i[s]?(i[s].p(u,f),w(i[s],1)):(i[s]=re(u),i[s].c(),w(i[s],1),i[s].m(e.parentNode,e))}for(F(),s=r.length;s<i.length;s+=1)o(s);X()}},i(l){if(!n){for(let f=0;f<r.length;f+=1)w(i[f]);n=!0}},o(l){i=i.filter(Boolean);for(let f=0;f<i.length;f+=1)k(i[f]);n=!1},d(l){ce(i,l),l&&m(e)}}}function re(t){let e,n,r;var i=t[10];function o(l){return{}}return i&&(e=D(i,o())),{c(){e&&P(e.$$.fragment),n=J()},m(l,f){e&&L(e,l,f),h(l,n,f),r=!0},p(l,f){if(i!==(i=l[10])){if(e){F();const s=e;k(s.$$.fragment,1,0,()=>{O(s,1)}),X()}i?(e=D(i,o()),P(e.$$.fragment),w(e.$$.fragment,1),L(e,n.parentNode,n)):e=null}},i(l){r||(e&&w(e.$$.fragment,l),r=!0)},o(l){e&&k(e.$$.fragment,l),r=!1},d(l){l&&m(n),e&&O(e,l)}}}function Me(t){let e,n,r,i,o,l,f,s,u,g;e=new $e({});const d=[xe,Te],c=[];function _(a,p){return a[0]?0:1}return o=_(t),l=c[o]=d[o](t),{c(){P(e.$$.fragment),n=E(),r=b("hr"),i=E(),l.c(),f=J()},m(a,p){L(e,a,p),h(a,n,p),h(a,r,p),h(a,i,p),c[o].m(a,p),h(a,f,p),s=!0,u||(g=Q(Oe,"hashchange",t[4]),u=!0)},p(a,[p]){let $=o;o=_(a),o===$?c[o].p(a,p):(F(),k(c[$],1,1,()=>{c[$]=null}),X(),l=c[o],l?l.p(a,p):(l=c[o]=d[o](a),l.c()),w(l,1),l.m(f.parentNode,f))},i(a){s||(w(e.$$.fragment,a),w(l),s=!0)},o(a){k(e.$$.fragment,a),k(l),s=!1},d(a){O(e,a),a&&m(n),a&&m(r),a&&m(i),c[o].d(a),a&&m(f),u=!1,g()}}}function Pe(t,e,n){let r=!1,i=A[0][1];function o(){var c;n(0,r=location.hash=="#all"),n(1,i=((c=A[Number(location.hash.slice(1))])==null?void 0:c[1])||A[0][1])}o();let l,f,s=!0;function u(c){i=c,n(1,i)}function g(c){S[c?"unshift":"push"](()=>{f=c,n(3,f)})}function d(c){S[c?"unshift":"push"](()=>{l=c,n(2,l)})}return t.$$.update=()=>{t.$$.dirty&3&&!r&&(location.hash=String(A.findIndex(([c,_])=>_===i))),t.$$.dirty&45&&f&&l&&(l.querySelectorAll("blockquote").forEach(c=>{c.textContent.startsWith("$> ")&&(c.style.userSelect="none",c.style.setProperty("--leftLineColour","#21b0d7")),c.textContent.startsWith("splunk> ")&&(c.style.userSelect="none",c.style.setProperty("--leftLineColour","#5cbf5c"))}),r||(s?n(5,s=!1):setTimeout(()=>window.scrollTo(0,l.offsetTop-50),0)))},[r,i,l,f,o,s,u,g,d]}class Se extends B{constructor(e){super(),q(this,e,Pe,Me,H,{})}}new Se({target:document.getElementById("app")});
