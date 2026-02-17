import{d as tn,r as x,w as nn,o as sn,c as U,a as m,u as d,I as an,b as h,e as rn,f as on,g as C,h as cn,i as z,j as ln,k as g,l as $,m as B,n as dn,t as N,p as un,q as fn,s as nt,v as Re,x as Ae,y as De,z as Te,A as Pe,B as M,C as hn,D as pn,E as st,F as ue,G as ke,H as Le,J as at,K as mn,L as gn,M as bn,N as Ne,O as yn,P as rt,Q as vn,R as En,S as wn,T as _n,U as it,V as ot,W as In,X as ct,Y as Sn,Z as Cn,_ as lt,$ as On,a0 as Rn,a1 as An,a2 as R,a3 as Dn,a4 as Tn}from"./index-DMKgB08i.js";import{_ as Pn}from"./_plugin-vue_export-helper-DlAUqK2U.js";/*! Capacitor: https://capacitorjs.com/ - MIT License */var ie;(function(t){t.Unimplemented="UNIMPLEMENTED",t.Unavailable="UNAVAILABLE"})(ie||(ie={}));class ae extends Error{constructor(e,n,s){super(e),this.message=e,this.code=n,this.data=s}}const kn=t=>{var e,n;return t!=null&&t.androidBridge?"android":!((n=(e=t==null?void 0:t.webkit)===null||e===void 0?void 0:e.messageHandlers)===null||n===void 0)&&n.bridge?"ios":"web"},Ln=t=>{const e=t.CapacitorCustomPlatform||null,n=t.Capacitor||{},s=n.Plugins=n.Plugins||{},a=()=>e!==null?e.name:kn(t),r=()=>a()!=="web",i=f=>{const p=u.get(f);return!!(p!=null&&p.platforms.has(a())||o(f))},o=f=>{var p;return(p=n.PluginHeaders)===null||p===void 0?void 0:p.find(I=>I.name===f)},c=f=>t.console.error(f),u=new Map,E=(f,p={})=>{const I=u.get(f);if(I)return console.warn('Capacitor plugin "'.concat(f,'" already registered. Cannot register plugins twice.')),I.proxy;const w=a(),A=o(f);let P;const Y=async()=>(!P&&w in p?P=typeof p[w]=="function"?P=await p[w]():P=p[w]:e!==null&&!P&&"web"in p&&(P=typeof p.web=="function"?P=await p.web():P=p.web),P),Oe=(D,k)=>{var v,l;if(A){const O=A==null?void 0:A.methods.find(_=>k===_.name);if(O)return O.rtype==="promise"?_=>n.nativePromise(f,k.toString(),_):(_,j)=>n.nativeCallback(f,k.toString(),_,j);if(D)return(v=D[k])===null||v===void 0?void 0:v.bind(D)}else{if(D)return(l=D[k])===null||l===void 0?void 0:l.bind(D);throw new ae('"'.concat(f,'" plugin is not implemented on ').concat(w),ie.Unimplemented)}},W=D=>{let k;const v=(...l)=>{const O=Y().then(_=>{const j=Oe(_,D);if(j){const X=j(...l);return k=X==null?void 0:X.remove,X}else throw new ae('"'.concat(f,".").concat(D,'()" is not implemented on ').concat(w),ie.Unimplemented)});return D==="addListener"&&(O.remove=async()=>k()),O};return v.toString=()=>"".concat(D.toString(),"() { [capacitor code] }"),Object.defineProperty(v,"name",{value:D,writable:!1,configurable:!1}),v},ge=W("addListener"),le=W("removeListener"),se=(D,k)=>{const v=ge({eventName:D},k),l=async()=>{const _=await v;le({eventName:D,callbackId:_},k)},O=new Promise(_=>v.then(()=>_({remove:l})));return O.remove=async()=>{console.warn("Using addListener() without 'await' is deprecated."),await l()},O},de=new Proxy({},{get(D,k){switch(k){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return A?se:ge;case"removeListener":return le;default:return W(k)}}});return s[f]=de,u.set(f,{name:f,proxy:de,platforms:new Set([...Object.keys(p),...A?[w]:[]])}),de};return n.convertFileSrc||(n.convertFileSrc=f=>f),n.getPlatform=a,n.handleError=c,n.isNativePlatform=r,n.isPluginAvailable=i,n.registerPlugin=E,n.Exception=ae,n.DEBUG=!!n.DEBUG,n.isLoggingEnabled=!!n.isLoggingEnabled,n},Nn=t=>t.Capacitor=Ln(t),ye=Nn(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),Ie=ye.registerPlugin;class Se{constructor(){this.listeners={},this.retainedEventArguments={},this.windowListeners={}}addListener(e,n){let s=!1;this.listeners[e]||(this.listeners[e]=[],s=!0),this.listeners[e].push(n);const r=this.windowListeners[e];r&&!r.registered&&this.addWindowListener(r),s&&this.sendRetainedArgumentsForEvent(e);const i=async()=>this.removeListener(e,n);return Promise.resolve({remove:i})}async removeAllListeners(){this.listeners={};for(const e in this.windowListeners)this.removeWindowListener(this.windowListeners[e]);this.windowListeners={}}notifyListeners(e,n,s){const a=this.listeners[e];if(!a){if(s){let r=this.retainedEventArguments[e];r||(r=[]),r.push(n),this.retainedEventArguments[e]=r}return}a.forEach(r=>r(n))}hasListeners(e){var n;return!!(!((n=this.listeners[e])===null||n===void 0)&&n.length)}registerWindowListener(e,n){this.windowListeners[n]={registered:!1,windowEventName:e,pluginEventName:n,handler:s=>{this.notifyListeners(n,s)}}}unimplemented(e="not implemented"){return new ye.Exception(e,ie.Unimplemented)}unavailable(e="not available"){return new ye.Exception(e,ie.Unavailable)}async removeListener(e,n){const s=this.listeners[e];if(!s)return;const a=s.indexOf(n);this.listeners[e].splice(a,1),this.listeners[e].length||this.removeWindowListener(this.windowListeners[e])}addWindowListener(e){window.addEventListener(e.windowEventName,e.handler),e.registered=!0}removeWindowListener(e){e&&(window.removeEventListener(e.windowEventName,e.handler),e.registered=!1)}sendRetainedArgumentsForEvent(e){const n=this.retainedEventArguments[e];n&&(delete this.retainedEventArguments[e],n.forEach(s=>{this.notifyListeners(e,s)}))}}const dt=t=>encodeURIComponent(t).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),ut=t=>t.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class Mn extends Se{async getCookies(){const e=document.cookie,n={};return e.split(";").forEach(s=>{if(s.length<=0)return;let[a,r]=s.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");a=ut(a).trim(),r=ut(r).trim(),n[a]=r}),n}async setCookie(e){try{const n=dt(e.key),s=dt(e.value),a=e.expires?"; expires=".concat(e.expires.replace("expires=","")):"",r=(e.path||"/").replace("path=",""),i=e.url!=null&&e.url.length>0?"domain=".concat(e.url):"";document.cookie="".concat(n,"=").concat(s||"").concat(a,"; path=").concat(r,"; ").concat(i,";")}catch(n){return Promise.reject(n)}}async deleteCookie(e){try{document.cookie="".concat(e.key,"=; Max-Age=0")}catch(n){return Promise.reject(n)}}async clearCookies(){try{const e=document.cookie.split(";")||[];for(const n of e)document.cookie=n.replace(/^ +/,"").replace(/=.*/,"=;expires=".concat(new Date().toUTCString(),";path=/"))}catch(e){return Promise.reject(e)}}async clearAllCookies(){try{await this.clearCookies()}catch(e){return Promise.reject(e)}}}Ie("CapacitorCookies",{web:()=>new Mn});const xn=async t=>new Promise((e,n)=>{const s=new FileReader;s.onload=()=>{const a=s.result;e(a.indexOf(",")>=0?a.split(",")[1]:a)},s.onerror=a=>n(a),s.readAsDataURL(t)}),$n=(t={})=>{const e=Object.keys(t);return Object.keys(t).map(a=>a.toLocaleLowerCase()).reduce((a,r,i)=>(a[r]=t[e[i]],a),{})},Bn=(t,e=!0)=>t?Object.entries(t).reduce((s,a)=>{const[r,i]=a;let o,c;return Array.isArray(i)?(c="",i.forEach(u=>{o=e?encodeURIComponent(u):u,c+="".concat(r,"=").concat(o,"&")}),c.slice(0,-1)):(o=e?encodeURIComponent(i):i,c="".concat(r,"=").concat(o)),"".concat(s,"&").concat(c)},"").substr(1):null,Un=(t,e={})=>{const n=Object.assign({method:t.method||"GET",headers:t.headers},e),a=$n(t.headers)["content-type"]||"";if(typeof t.data=="string")n.body=t.data;else if(a.includes("application/x-www-form-urlencoded")){const r=new URLSearchParams;for(const[i,o]of Object.entries(t.data||{}))r.set(i,o);n.body=r.toString()}else if(a.includes("multipart/form-data")||t.data instanceof FormData){const r=new FormData;if(t.data instanceof FormData)t.data.forEach((o,c)=>{r.append(c,o)});else for(const o of Object.keys(t.data))r.append(o,t.data[o]);n.body=r;const i=new Headers(n.headers);i.delete("content-type"),n.headers=i}else(a.includes("application/json")||typeof t.data=="object")&&(n.body=JSON.stringify(t.data));return n};class Fn extends Se{async request(e){const n=Un(e,e.webFetchExtra),s=Bn(e.params,e.shouldEncodeUrlParams),a=s?"".concat(e.url,"?").concat(s):e.url,r=await fetch(a,n),i=r.headers.get("content-type")||"";let{responseType:o="text"}=r.ok?e:{};i.includes("application/json")&&(o="json");let c,u;switch(o){case"arraybuffer":case"blob":u=await r.blob(),c=await xn(u);break;case"json":c=await r.json();break;case"document":case"text":default:c=await r.text()}const E={};return r.headers.forEach((f,p)=>{E[p]=f}),{data:c,headers:E,status:r.status,url:r.url}}async get(e){return this.request(Object.assign(Object.assign({},e),{method:"GET"}))}async post(e){return this.request(Object.assign(Object.assign({},e),{method:"POST"}))}async put(e){return this.request(Object.assign(Object.assign({},e),{method:"PUT"}))}async patch(e){return this.request(Object.assign(Object.assign({},e),{method:"PATCH"}))}async delete(e){return this.request(Object.assign(Object.assign({},e),{method:"DELETE"}))}}Ie("CapacitorHttp",{web:()=>new Fn});var ft;(function(t){t.Dark="DARK",t.Light="LIGHT",t.Default="DEFAULT"})(ft||(ft={}));var ht;(function(t){t.StatusBar="StatusBar",t.NavigationBar="NavigationBar"})(ht||(ht={}));class jn extends Se{async setStyle(){this.unavailable("not available for web")}async setAnimation(){this.unavailable("not available for web")}async show(){this.unavailable("not available for web")}async hide(){this.unavailable("not available for web")}}Ie("SystemBars",{web:()=>new jn});var ee;(function(t){t.Prompt="PROMPT",t.Camera="CAMERA",t.Photos="PHOTOS"})(ee||(ee={}));var fe;(function(t){t.Rear="REAR",t.Front="FRONT"})(fe||(fe={}));var Ve;(function(t){t.Uri="uri",t.Base64="base64",t.DataUrl="dataUrl"})(Ve||(Ve={}));class Vn extends Se{async getPhoto(e){return new Promise(async(n,s)=>{if(e.webUseInput||e.source===ee.Photos)this.fileInputExperience(e,n,s);else if(e.source===ee.Prompt){let a=document.querySelector("pwa-action-sheet");a||(a=document.createElement("pwa-action-sheet"),document.body.appendChild(a)),a.header=e.promptLabelHeader||"Photo",a.cancelable=!1,a.options=[{title:e.promptLabelPhoto||"From Photos"},{title:e.promptLabelPicture||"Take Picture"}],a.addEventListener("onSelection",async r=>{r.detail===0?this.fileInputExperience(e,n,s):this.cameraExperience(e,n,s)})}else this.cameraExperience(e,n,s)})}async pickImages(e){return new Promise(async(n,s)=>{this.multipleFileInputExperience(n,s)})}async cameraExperience(e,n,s){if(customElements.get("pwa-camera-modal")){const a=document.createElement("pwa-camera-modal");a.facingMode=e.direction===fe.Front?"user":"environment",document.body.appendChild(a);try{await a.componentOnReady(),a.addEventListener("onPhoto",async r=>{const i=r.detail;i===null?s(new ae("User cancelled photos app")):i instanceof Error?s(i):n(await this._getCameraPhoto(i,e)),a.dismiss(),document.body.removeChild(a)}),a.present()}catch(r){this.fileInputExperience(e,n,s)}}else console.error("Unable to load PWA Element 'pwa-camera-modal'. See the docs: https://capacitorjs.com/docs/web/pwa-elements."),this.fileInputExperience(e,n,s)}fileInputExperience(e,n,s){let a=document.querySelector("#_capacitor-camera-input");const r=()=>{var i;(i=a.parentNode)===null||i===void 0||i.removeChild(a)};a||(a=document.createElement("input"),a.id="_capacitor-camera-input",a.type="file",a.hidden=!0,document.body.appendChild(a),a.addEventListener("change",i=>{const o=a.files[0];let c="jpeg";if(o.type==="image/png"?c="png":o.type==="image/gif"&&(c="gif"),e.resultType==="dataUrl"||e.resultType==="base64"){const u=new FileReader;u.addEventListener("load",()=>{if(e.resultType==="dataUrl")n({dataUrl:u.result,format:c});else if(e.resultType==="base64"){const E=u.result.split(",")[1];n({base64String:E,format:c})}r()}),u.readAsDataURL(o)}else n({webPath:URL.createObjectURL(o),format:c}),r()}),a.addEventListener("cancel",i=>{s(new ae("User cancelled photos app")),r()})),a.accept="image/*",a.capture=!0,e.source===ee.Photos||e.source===ee.Prompt?a.removeAttribute("capture"):e.direction===fe.Front?a.capture="user":e.direction===fe.Rear&&(a.capture="environment"),a.click()}multipleFileInputExperience(e,n){let s=document.querySelector("#_capacitor-camera-input-multiple");const a=()=>{var r;(r=s.parentNode)===null||r===void 0||r.removeChild(s)};s||(s=document.createElement("input"),s.id="_capacitor-camera-input-multiple",s.type="file",s.hidden=!0,s.multiple=!0,document.body.appendChild(s),s.addEventListener("change",r=>{const i=[];for(let o=0;o<s.files.length;o++){const c=s.files[o];let u="jpeg";c.type==="image/png"?u="png":c.type==="image/gif"&&(u="gif"),i.push({webPath:URL.createObjectURL(c),format:u})}e({photos:i}),a()}),s.addEventListener("cancel",r=>{n(new ae("User cancelled photos app")),a()})),s.accept="image/*",s.click()}_getCameraPhoto(e,n){return new Promise((s,a)=>{const r=new FileReader,i=e.type.split("/")[1];n.resultType==="uri"?s({webPath:URL.createObjectURL(e),format:i,saved:!1}):(r.readAsDataURL(e),r.onloadend=()=>{const o=r.result;n.resultType==="dataUrl"?s({dataUrl:o,format:i,saved:!1}):s({base64String:o.split(",")[1],format:i,saved:!1})},r.onerror=o=>{a(o)})})}async checkPermissions(){if(typeof navigator>"u"||!navigator.permissions)throw this.unavailable("Permissions API not available in this browser");try{return{camera:(await window.navigator.permissions.query({name:"camera"})).state,photos:"granted"}}catch(e){throw this.unavailable("Camera permissions are not available in this browser")}}async requestPermissions(){throw this.unimplemented("Not implemented on web.")}async pickLimitedLibraryPhotos(){throw this.unavailable("Not implemented on web.")}async getLimitedLibraryPhotos(){throw this.unavailable("Not implemented on web.")}}const Hn=Ie("Camera",{web:()=>new Vn});class pt{static async fromFile(e){return{base64:await new Promise((s,a)=>{const r=new FileReader;r.onloadend=()=>{const o=String(r.result||"").split(",")[1];if(!o)return a(new Error("Invalid base64 data"));s(o)},r.onerror=()=>a(r.error),r.readAsDataURL(e)}),mimeType:e.type||"image/jpeg"}}static async fromCamera(){const e=await Hn.getPhoto({source:ee.Prompt,resultType:Ve.Base64,quality:85});if(!e.base64String)throw new Error("No base64 from camera");return{base64:e.base64String,mimeType:e.format?"image/".concat(e.format):"image/jpeg"}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gn=()=>{};var mt={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xt=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let a=t.charCodeAt(s);a<128?e[n++]=a:a<2048?(e[n++]=a>>6|192,e[n++]=a&63|128):(a&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(a=65536+((a&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=a>>18|240,e[n++]=a>>12&63|128,e[n++]=a>>6&63|128,e[n++]=a&63|128):(e[n++]=a>>12|224,e[n++]=a>>6&63|128,e[n++]=a&63|128)}return e},Wn=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const a=t[n++];if(a<128)e[s++]=String.fromCharCode(a);else if(a>191&&a<224){const r=t[n++];e[s++]=String.fromCharCode((a&31)<<6|r&63)}else if(a>239&&a<365){const r=t[n++],i=t[n++],o=t[n++],c=((a&7)<<18|(r&63)<<12|(i&63)<<6|o&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const r=t[n++],i=t[n++];e[s++]=String.fromCharCode((a&15)<<12|(r&63)<<6|i&63)}}return e.join("")},$t={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let a=0;a<t.length;a+=3){const r=t[a],i=a+1<t.length,o=i?t[a+1]:0,c=a+2<t.length,u=c?t[a+2]:0,E=r>>2,f=(r&3)<<4|o>>4;let p=(o&15)<<2|u>>6,I=u&63;c||(I=64,i||(p=64)),s.push(n[E],n[f],n[p],n[I])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(xt(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Wn(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let a=0;a<t.length;){const r=n[t.charAt(a++)],o=a<t.length?n[t.charAt(a)]:0;++a;const u=a<t.length?n[t.charAt(a)]:64;++a;const f=a<t.length?n[t.charAt(a)]:64;if(++a,r==null||o==null||u==null||f==null)throw new zn;const p=r<<2|o>>4;if(s.push(p),u!==64){const I=o<<4&240|u>>2;if(s.push(I),f!==64){const w=u<<6&192|f;s.push(w)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class zn extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const qn=function(t){const e=xt(t);return $t.encodeByteArray(e,!0)},Bt=function(t){return qn(t).replace(/\./g,"")},Jn=function(t){try{return $t.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kn(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yn=()=>Kn().__FIREBASE_DEFAULTS__,Xn=()=>{if(typeof process>"u"||typeof mt>"u")return;const t=mt.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Qn=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const e=t&&Jn(t[1]);return e&&JSON.parse(e)},Zn=()=>{try{return Gn()||Yn()||Xn()||Qn()}catch(t){console.info("Unable to get __FIREBASE_DEFAULTS__ due to: ".concat(t));return}},Ut=()=>{var t;return(t=Zn())==null?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}function ts(){try{return typeof indexedDB=="object"}catch(t){return!1}}function ns(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(s);a.onsuccess=()=>{a.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},a.onupgradeneeded=()=>{n=!1},a.onerror=()=>{var r;e(((r=a.error)==null?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ss="FirebaseError";class ce extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=ss,Object.setPrototypeOf(this,ce.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ft.prototype.create)}}class Ft{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},a="".concat(this.service,"/").concat(e),r=this.errors[e],i=r?as(r,s):"Error",o="".concat(this.serviceName,": ").concat(i," (").concat(a,").");return new ce(a,o,s)}}function as(t,e){return t.replace(rs,(n,s)=>{const a=e[s];return a!=null?String(a):"<".concat(s,"?>")})}const rs=/\{\$([^}]+)}/g;function He(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const a of n){if(!s.includes(a))return!1;const r=t[a],i=e[a];if(gt(r)&&gt(i)){if(!He(r,i))return!1}else if(r!==i)return!1}for(const a of s)if(!n.includes(a))return!1;return!0}function gt(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function is(t){return t&&t._delegate?t._delegate:t}class pe{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new es;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:n});a&&s.resolve(a)}catch(a){}}return this.instancesDeferred.get(n).promise}getImmediate(e){var a;const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(a=e==null?void 0:e.optional)!=null?a:!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error("Service ".concat(this.name," is not available"))}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error("Mismatching Component ".concat(e.name," for Provider ").concat(this.name,"."));if(this.component)throw Error("Component for ".concat(this.name," has already been provided"));if(this.component=e,!!this.shouldAutoInitialize()){if(ls(e))try{this.getOrInitializeService({instanceIdentifier:Q})}catch(n){}for(const[n,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:a});s.resolve(r)}catch(r){}}}}clearInstance(e=Q){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Q){return this.instances.has(e)}getOptions(e=Q){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error("".concat(this.name,"(").concat(s,") has already been initialized"));if(!this.isComponentSet())throw Error("Component ".concat(this.name," has not been registered yet"));const a=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,i]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(r);s===o&&i.resolve(a)}return a}onInit(e,n){var i;const s=this.normalizeInstanceIdentifier(n),a=(i=this.onInitCallbacks.get(s))!=null?i:new Set;a.add(e),this.onInitCallbacks.set(s,a);const r=this.instances.get(s);return r&&e(r,s),()=>{a.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const a of s)try{a(e,n)}catch(r){}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:cs(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch(a){}return s||null}normalizeInstanceIdentifier(e=Q){return this.component?this.component.multipleInstances?e:Q:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function cs(t){return t===Q?void 0:t}function ls(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error("Component ".concat(e.name," has already been registered with ").concat(this.name));n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new os(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var S;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(S||(S={}));const us={debug:S.DEBUG,verbose:S.VERBOSE,info:S.INFO,warn:S.WARN,error:S.ERROR,silent:S.SILENT},fs=S.INFO,hs={[S.DEBUG]:"log",[S.VERBOSE]:"log",[S.INFO]:"info",[S.WARN]:"warn",[S.ERROR]:"error"},ps=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),a=hs[e];if(a)console[a]("[".concat(s,"]  ").concat(t.name,":"),...n);else throw new Error("Attempted to log a message with an invalid logType (value: ".concat(e,")"))};class jt{constructor(e){this.name=e,this._logLevel=fs,this._logHandler=ps,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in S))throw new TypeError('Invalid value "'.concat(e,'" assigned to `logLevel`'));this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?us[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,S.DEBUG,...e),this._logHandler(this,S.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,S.VERBOSE,...e),this._logHandler(this,S.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,S.INFO,...e),this._logHandler(this,S.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,S.WARN,...e),this._logHandler(this,S.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,S.ERROR,...e),this._logHandler(this,S.ERROR,...e)}}const ms=(t,e)=>e.some(n=>t instanceof n);let bt,yt;function gs(){return bt||(bt=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function bs(){return yt||(yt=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Vt=new WeakMap,Ge=new WeakMap,Ht=new WeakMap,Me=new WeakMap,Xe=new WeakMap;function ys(t){const e=new Promise((n,s)=>{const a=()=>{t.removeEventListener("success",r),t.removeEventListener("error",i)},r=()=>{n(J(t.result)),a()},i=()=>{s(t.error),a()};t.addEventListener("success",r),t.addEventListener("error",i)});return e.then(n=>{n instanceof IDBCursor&&Vt.set(n,t)}).catch(()=>{}),Xe.set(e,t),e}function vs(t){if(Ge.has(t))return;const e=new Promise((n,s)=>{const a=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",i),t.removeEventListener("abort",i)},r=()=>{n(),a()},i=()=>{s(t.error||new DOMException("AbortError","AbortError")),a()};t.addEventListener("complete",r),t.addEventListener("error",i),t.addEventListener("abort",i)});Ge.set(t,e)}let We={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ge.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Ht.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return J(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Es(t){We=t(We)}function ws(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(xe(this),e,...n);return Ht.set(s,e.sort?e.sort():[e]),J(s)}:bs().includes(t)?function(...e){return t.apply(xe(this),e),J(Vt.get(this))}:function(...e){return J(t.apply(xe(this),e))}}function _s(t){return typeof t=="function"?ws(t):(t instanceof IDBTransaction&&vs(t),ms(t,gs())?new Proxy(t,We):t)}function J(t){if(t instanceof IDBRequest)return ys(t);if(Me.has(t))return Me.get(t);const e=_s(t);return e!==t&&(Me.set(t,e),Xe.set(e,t)),e}const xe=t=>Xe.get(t);function Is(t,e,{blocked:n,upgrade:s,blocking:a,terminated:r}={}){const i=indexedDB.open(t,e),o=J(i);return s&&i.addEventListener("upgradeneeded",c=>{s(J(i.result),c.oldVersion,c.newVersion,J(i.transaction),c)}),n&&i.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),o.then(c=>{r&&c.addEventListener("close",()=>r()),a&&c.addEventListener("versionchange",u=>a(u.oldVersion,u.newVersion,u))}).catch(()=>{}),o}const Ss=["get","getKey","getAll","getAllKeys","count"],Cs=["put","add","delete","clear"],$e=new Map;function vt(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if($e.get(e))return $e.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,a=Cs.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(a||Ss.includes(n)))return;const r=async function(i,...o){const c=this.transaction(i,a?"readwrite":"readonly");let u=c.store;return s&&(u=u.index(o.shift())),(await Promise.all([u[n](...o),a&&c.done]))[0]};return $e.set(e,r),r}Es(t=>({...t,get:(e,n,s)=>vt(e,n)||t.get(e,n,s),has:(e,n)=>!!vt(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Rs(n)){const s=n.getImmediate();return"".concat(s.library,"/").concat(s.version)}else return null}).filter(n=>n).join(" ")}}function Rs(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ze="@firebase/app",Et="0.14.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H=new jt("@firebase/app"),As="@firebase/app-compat",Ds="@firebase/analytics-compat",Ts="@firebase/analytics",Ps="@firebase/app-check-compat",ks="@firebase/app-check",Ls="@firebase/auth",Ns="@firebase/auth-compat",Ms="@firebase/database",xs="@firebase/data-connect",$s="@firebase/database-compat",Bs="@firebase/functions",Us="@firebase/functions-compat",Fs="@firebase/installations",js="@firebase/installations-compat",Vs="@firebase/messaging",Hs="@firebase/messaging-compat",Gs="@firebase/performance",Ws="@firebase/performance-compat",zs="@firebase/remote-config",qs="@firebase/remote-config-compat",Js="@firebase/storage",Ks="@firebase/storage-compat",Ys="@firebase/firestore",Xs="@firebase/ai",Qs="@firebase/firestore-compat",Zs="firebase";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qe="[DEFAULT]",ea={[ze]:"fire-core",[As]:"fire-core-compat",[Ts]:"fire-analytics",[Ds]:"fire-analytics-compat",[ks]:"fire-app-check",[Ps]:"fire-app-check-compat",[Ls]:"fire-auth",[Ns]:"fire-auth-compat",[Ms]:"fire-rtdb",[xs]:"fire-data-connect",[$s]:"fire-rtdb-compat",[Bs]:"fire-fn",[Us]:"fire-fn-compat",[Fs]:"fire-iid",[js]:"fire-iid-compat",[Vs]:"fire-fcm",[Hs]:"fire-fcm-compat",[Gs]:"fire-perf",[Ws]:"fire-perf-compat",[zs]:"fire-rc",[qs]:"fire-rc-compat",[Js]:"fire-gcs",[Ks]:"fire-gcs-compat",[Ys]:"fire-fst",[Qs]:"fire-fst-compat",[Xs]:"fire-vertex","fire-js":"fire-js",[Zs]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ve=new Map,ta=new Map,Je=new Map;function wt(t,e){try{t.container.addComponent(e)}catch(n){H.debug("Component ".concat(e.name," failed to register with FirebaseApp ").concat(t.name),n)}}function Ee(t){const e=t.name;if(Je.has(e))return H.debug("There were multiple attempts to register component ".concat(e,".")),!1;Je.set(e,t);for(const n of ve.values())wt(n,t);for(const n of ta.values())wt(n,t);return!0}function na(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function sa(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aa={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},K=new Ft("app","Firebase",aa);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{constructor(e,n,s){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new pe("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw K.create("app-deleted",{appName:this._name})}}function Gt(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s={name:qe,automaticDataCollectionEnabled:!0,...e},a=s.name;if(typeof a!="string"||!a)throw K.create("bad-app-name",{appName:String(a)});if(n||(n=Ut()),!n)throw K.create("no-options");const r=ve.get(a);if(r){if(He(n,r.options)&&He(s,r.config))return r;throw K.create("duplicate-app",{appName:a})}const i=new ds(a);for(const c of Je.values())i.addComponent(c);const o=new ra(n,s,i);return ve.set(a,o),o}function ia(t=qe){const e=ve.get(t);if(!e&&t===qe&&Ut())return Gt();if(!e)throw K.create("no-app",{appName:t});return e}function re(t,e,n){var i;let s=(i=ea[t])!=null?i:t;n&&(s+="-".concat(n));const a=s.match(/\s|\//),r=e.match(/\s|\//);if(a||r){const o=['Unable to register library "'.concat(s,'" with version "').concat(e,'":')];a&&o.push('library name "'.concat(s,'" contains illegal characters (whitespace or "/")')),a&&r&&o.push("and"),r&&o.push('version name "'.concat(e,'" contains illegal characters (whitespace or "/")')),H.warn(o.join(" "));return}Ee(new pe("".concat(s,"-version"),()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oa="firebase-heartbeat-database",ca=1,me="firebase-heartbeat-store";let Be=null;function Wt(){return Be||(Be=Is(oa,ca,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(me)}catch(n){console.warn(n)}}}}).catch(t=>{throw K.create("idb-open",{originalErrorMessage:t.message})})),Be}async function la(t){try{const n=(await Wt()).transaction(me),s=await n.objectStore(me).get(zt(t));return await n.done,s}catch(e){if(e instanceof ce)H.warn(e.message);else{const n=K.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});H.warn(n.message)}}}async function _t(t,e){try{const s=(await Wt()).transaction(me,"readwrite");await s.objectStore(me).put(e,zt(t)),await s.done}catch(n){if(n instanceof ce)H.warn(n.message);else{const s=K.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});H.warn(s.message)}}}function zt(t){return"".concat(t.name,"!").concat(t.options.appId)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const da=1024,ua=30;class fa{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new pa(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=It();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:a}),this._heartbeatsCache.heartbeats.length>ua){const i=ma(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(i,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){H.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=It(),{heartbeatsToSend:s,unsentEntries:a}=ha(this._heartbeatsCache.heartbeats),r=Bt(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(n){return H.warn(n),""}}}function It(){return new Date().toISOString().substring(0,10)}function ha(t,e=da){const n=[];let s=t.slice();for(const a of t){const r=n.find(i=>i.agent===a.agent);if(r){if(r.dates.push(a.date),St(n)>e){r.dates.pop();break}}else if(n.push({agent:a.agent,dates:[a.date]}),St(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class pa{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ts()?ns().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await la(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var s;if(await this._canUseIndexedDBPromise){const a=await this.read();return _t(this.app,{lastSentHeartbeatDate:(s=e.lastSentHeartbeatDate)!=null?s:a.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var s;if(await this._canUseIndexedDBPromise){const a=await this.read();return _t(this.app,{lastSentHeartbeatDate:(s=e.lastSentHeartbeatDate)!=null?s:a.lastSentHeartbeatDate,heartbeats:[...a.heartbeats,...e.heartbeats]})}else return}}function St(t){return Bt(JSON.stringify({version:2,heartbeats:t})).length}function ma(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let s=1;s<t.length;s++)t[s].date<n&&(n=t[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ga(t){Ee(new pe("platform-logger",e=>new Os(e),"PRIVATE")),Ee(new pe("heartbeat",e=>new fa(e),"PRIVATE")),re(ze,Et,t),re(ze,Et,"esm2020"),re("fire-js","")}ga("");var Ct="@firebase/ai",Ke="2.8.0";/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oe="AI",Ot="us-central1",ba="firebasevertexai.googleapis.com",we="v1beta",Rt=Ke,ya="gl-js",va="hybrid",Ea=180*1e3,wa="gemini-2.5-flash-lite";/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y extends ce{constructor(e,n,s){const a=oe,r="".concat(a,"/").concat(e),i="".concat(a,": ").concat(n," (").concat(r,")");super(e,i),this.code=e,this.customErrorData=s,Error.captureStackTrace&&Error.captureStackTrace(this,y),Object.setPrototypeOf(this,y.prototype),this.toString=()=>i}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const At=["user","model","function","system"],qt={HARM_SEVERITY_UNSUPPORTED:"HARM_SEVERITY_UNSUPPORTED"},Dt={SAFETY:"SAFETY",RECITATION:"RECITATION"},V={PREFER_ON_DEVICE:"prefer_on_device",ONLY_ON_DEVICE:"only_on_device",ONLY_IN_CLOUD:"only_in_cloud",PREFER_IN_CLOUD:"prefer_in_cloud"},q={ON_DEVICE:"on_device",IN_CLOUD:"in_cloud"};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b={ERROR:"error",REQUEST_ERROR:"request-error",RESPONSE_ERROR:"response-error",FETCH_ERROR:"fetch-error",SESSION_CLOSED:"session-closed",INVALID_CONTENT:"invalid-content",API_NOT_ENABLED:"api-not-enabled",INVALID_SCHEMA:"invalid-schema",NO_API_KEY:"no-api-key",NO_APP_ID:"no-app-id",NO_MODEL:"no-model",NO_PROJECT_ID:"no-project-id",PARSE_FAILED:"parse-failed",UNSUPPORTED:"unsupported"};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ne={STRING:"string",NUMBER:"number",INTEGER:"integer",BOOLEAN:"boolean",ARRAY:"array",OBJECT:"object"};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G={VERTEX_AI:"VERTEX_AI",GOOGLE_AI:"GOOGLE_AI"};/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e){this.backendType=e}}class Ce extends Jt{constructor(){super(G.GOOGLE_AI)}_getModelPath(e,n){return"/".concat(we,"/projects/").concat(e,"/").concat(n)}_getTemplatePath(e,n){return"/".concat(we,"/projects/").concat(e,"/templates/").concat(n)}}class Qe extends Jt{constructor(e=Ot){super(G.VERTEX_AI),e?this.location=e:this.location=Ot}_getModelPath(e,n){return"/".concat(we,"/projects/").concat(e,"/locations/").concat(this.location,"/").concat(n)}_getTemplatePath(e,n){return"/".concat(we,"/projects/").concat(e,"/locations/").concat(this.location,"/templates/").concat(n)}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _a(t){if(t instanceof Ce)return"".concat(oe,"/googleai");if(t instanceof Qe)return"".concat(oe,"/vertexai/").concat(t.location);throw new y(b.ERROR,"Invalid backend: ".concat(JSON.stringify(t.backendType)))}function Ia(t){const e=t.split("/");if(e[0]!==oe)throw new y(b.ERROR,"Invalid instance identifier, unknown prefix '".concat(e[0],"'"));switch(e[1]){case"vertexai":const s=e[2];if(!s)throw new y(b.ERROR,"Invalid instance identifier, unknown location '".concat(t,"'"));return new Qe(s);case"googleai":return new Ce;default:throw new y(b.ERROR,"Invalid instance identifier string: '".concat(t,"'"))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L=new jt("@firebase/vertexai");var Z;(function(t){t.UNAVAILABLE="unavailable",t.DOWNLOADABLE="downloadable",t.DOWNLOADING="downloading",t.AVAILABLE="available"})(Z||(Z={}));/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ue=[{type:"image"}];class F{constructor(e,n,s){this.languageModelProvider=e,this.mode=n,this.isDownloading=!1,this.onDeviceParams={createOptions:{expectedInputs:Ue}},s&&(this.onDeviceParams=s,this.onDeviceParams.createOptions?this.onDeviceParams.createOptions.expectedInputs||(this.onDeviceParams.createOptions.expectedInputs=Ue):this.onDeviceParams.createOptions={expectedInputs:Ue})}async isAvailable(e){if(!this.mode)return L.debug("On-device inference unavailable because mode is undefined."),!1;if(this.mode===V.ONLY_IN_CLOUD)return L.debug('On-device inference unavailable because mode is "only_in_cloud".'),!1;const n=await this.downloadIfAvailable();if(this.mode===V.ONLY_ON_DEVICE){if(n===Z.UNAVAILABLE)throw new y(b.API_NOT_ENABLED,"Local LanguageModel API not available in this environment.");return(n===Z.DOWNLOADABLE||n===Z.DOWNLOADING)&&(L.debug("Waiting for download of LanguageModel to complete."),await this.downloadPromise),!0}return n!==Z.AVAILABLE?(L.debug('On-device inference unavailable because availability is "'.concat(n,'".')),!1):F.isOnDeviceRequest(e)?!0:(L.debug("On-device inference unavailable because request is incompatible."),!1)}async generateContent(e){const n=await this.createSession(),s=await Promise.all(e.contents.map(F.toLanguageModelMessage)),a=await n.prompt(s,this.onDeviceParams.promptOptions);return F.toResponse(a)}async generateContentStream(e){const n=await this.createSession(),s=await Promise.all(e.contents.map(F.toLanguageModelMessage)),a=n.promptStreaming(s,this.onDeviceParams.promptOptions);return F.toStreamResponse(a)}async countTokens(e){throw new y(b.REQUEST_ERROR,"Count Tokens is not yet available for on-device model.")}static isOnDeviceRequest(e){if(e.contents.length===0)return L.debug("Empty prompt rejected for on-device inference."),!1;for(const n of e.contents){if(n.role==="function")return L.debug('"Function" role rejected for on-device inference.'),!1;for(const s of n.parts)if(s.inlineData&&F.SUPPORTED_MIME_TYPES.indexOf(s.inlineData.mimeType)===-1)return L.debug('Unsupported mime type "'.concat(s.inlineData.mimeType,'" rejected for on-device inference.')),!1}return!0}async downloadIfAvailable(){var n;const e=await((n=this.languageModelProvider)==null?void 0:n.availability(this.onDeviceParams.createOptions));return e===Z.DOWNLOADABLE&&this.download(),e}download(){var e;this.isDownloading||(this.isDownloading=!0,this.downloadPromise=(e=this.languageModelProvider)==null?void 0:e.create(this.onDeviceParams.createOptions).finally(()=>{this.isDownloading=!1}))}static async toLanguageModelMessage(e){const n=await Promise.all(e.parts.map(F.toLanguageModelMessageContent));return{role:F.toLanguageModelMessageRole(e.role),content:n}}static async toLanguageModelMessageContent(e){if(e.text)return{type:"text",value:e.text};if(e.inlineData){const s=await(await fetch("data:".concat(e.inlineData.mimeType,";base64,").concat(e.inlineData.data))).blob();return{type:"image",value:await createImageBitmap(s)}}throw new y(b.REQUEST_ERROR,"Processing of this Part type is not currently supported.")}static toLanguageModelMessageRole(e){return e==="model"?"assistant":"user"}async createSession(){if(!this.languageModelProvider)throw new y(b.UNSUPPORTED,"Chrome AI requested for unsupported browser version.");const e=await this.languageModelProvider.create(this.onDeviceParams.createOptions);return this.oldSession&&this.oldSession.destroy(),this.oldSession=e,e}static toResponse(e){return{json:async()=>({candidates:[{content:{parts:[{text:e}]}}]})}}static toStreamResponse(e){const n=new TextEncoder;return{body:e.pipeThrough(new TransformStream({transform(s,a){const r=JSON.stringify({candidates:[{content:{role:"model",parts:[{text:s}]}}]});a.enqueue(n.encode("data: ".concat(r,"\n\n")))}}))}}}F.SUPPORTED_MIME_TYPES=["image/jpeg","image/png"];function Sa(t,e,n){if(typeof e<"u"&&t)return new F(e.LanguageModel,t,n)}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ca{constructor(e,n,s,a,r){this.app=e,this.backend=n,this.chromeAdapterFactory=r;const i=a==null?void 0:a.getImmediate({optional:!0}),o=s==null?void 0:s.getImmediate({optional:!0});this.auth=o||null,this.appCheck=i||null,n instanceof Qe?this.location=n.location:this.location=""}_delete(){return Promise.resolve()}set options(e){this._options=e}get options(){return this._options}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oa(t,{instanceIdentifier:e}){if(!e)throw new y(b.ERROR,"AIService instance identifier is undefined.");const n=Ia(e),s=t.getProvider("app").getImmediate(),a=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new Ca(s,n,a,r,Sa)}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ra(t){var n,s,a,r,i,o,c;if((s=(n=t.app)==null?void 0:n.options)!=null&&s.apiKey)if((r=(a=t.app)==null?void 0:a.options)!=null&&r.projectId){if(!((o=(i=t.app)==null?void 0:i.options)!=null&&o.appId))throw new y(b.NO_APP_ID,'The "appId" field is empty in the local Firebase config. Firebase AI requires this field to contain a valid app ID.')}else throw new y(b.NO_PROJECT_ID,'The "projectId" field is empty in the local Firebase config. Firebase AI requires this field to contain a valid project ID.');else throw new y(b.NO_API_KEY,'The "apiKey" field is empty in the local Firebase config. Firebase AI requires this field to contain a valid API key.');const e={apiKey:t.app.options.apiKey,project:t.app.options.projectId,appId:t.app.options.appId,automaticDataCollectionEnabled:t.app.automaticDataCollectionEnabled,location:t.location,backend:t.backend};if(sa(t.app)&&t.app.settings.appCheckToken){const u=t.app.settings.appCheckToken;e.getAppCheckToken=()=>Promise.resolve({token:u})}else t.appCheck&&((c=t.options)!=null&&c.useLimitedUseAppCheckTokens?e.getAppCheckToken=()=>t.appCheck.getLimitedUseToken():e.getAppCheckToken=()=>t.appCheck.getToken());return t.auth&&(e.getAuthToken=()=>t.auth.getToken()),e}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(e,n){this._apiSettings=Ra(e),this.model=he.normalizeModelName(n,this._apiSettings.backend.backendType)}static normalizeModelName(e,n){return n===G.GOOGLE_AI?he.normalizeGoogleAIModelName(e):he.normalizeVertexAIModelName(e)}static normalizeGoogleAIModelName(e){return"models/".concat(e)}static normalizeVertexAIModelName(e){let n;return e.includes("/")?e.startsWith("models/")?n="publishers/google/".concat(e):n=e:n="publishers/google/models/".concat(e),n}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aa="Timeout has expired.",Fe="AbortError";class Da{constructor(e){this.params=e}toString(){const e=new URL(this.baseUrl);return e.pathname=this.pathname,e.search=this.queryParams.toString(),e.toString()}get pathname(){return this.params.templateId?"".concat(this.params.apiSettings.backend._getTemplatePath(this.params.apiSettings.project,this.params.templateId),":").concat(this.params.task):"".concat(this.params.apiSettings.backend._getModelPath(this.params.apiSettings.project,this.params.model),":").concat(this.params.task)}get baseUrl(){var e,n;return(n=(e=this.params.singleRequestOptions)==null?void 0:e.baseUrl)!=null?n:"https://".concat(ba)}get queryParams(){const e=new URLSearchParams;return this.params.stream&&e.set("alt","sse"),e}}function Ta(t){const e=[];return e.push("".concat(ya,"/").concat(Rt)),e.push("fire/".concat(Rt)),(t.params.apiSettings.inferenceMode===V.PREFER_ON_DEVICE||t.params.apiSettings.inferenceMode===V.PREFER_IN_CLOUD)&&e.push(va),e.join(" ")}async function Pa(t){const e=new Headers;if(e.append("Content-Type","application/json"),e.append("x-goog-api-client",Ta(t)),e.append("x-goog-api-key",t.params.apiSettings.apiKey),t.params.apiSettings.automaticDataCollectionEnabled&&e.append("X-Firebase-Appid",t.params.apiSettings.appId),t.params.apiSettings.getAppCheckToken){const n=await t.params.apiSettings.getAppCheckToken();n&&(e.append("X-Firebase-AppCheck",n.token),n.error&&L.warn("Unable to obtain a valid App Check token: ".concat(n.error.message)))}if(t.params.apiSettings.getAuthToken){const n=await t.params.apiSettings.getAuthToken();n&&e.append("Authorization","Firebase ".concat(n.accessToken))}return e}async function Ze(t,e){var u,E,f;const n=new Da(t);let s;const a=(u=t.singleRequestOptions)==null?void 0:u.signal,r=((E=t.singleRequestOptions)==null?void 0:E.timeout)!=null&&t.singleRequestOptions.timeout>=0?t.singleRequestOptions.timeout:Ea,i=new AbortController,o=setTimeout(()=>{i.abort(new DOMException(Aa,Fe)),L.debug("Aborting request to ".concat(n," due to timeout (").concat(r,"ms)"))},r),c=AbortSignal.any(a?[a,i.signal]:[i.signal]);if(a&&a.aborted)throw clearTimeout(o),new DOMException((f=a.reason)!=null?f:"Aborted externally before fetch",Fe);try{const p={method:"POST",headers:await Pa(n),signal:c,body:e};if(s=await fetch(n.toString(),p),!s.ok){let I="",w;try{const A=await s.json();I=A.error.message,A.error.details&&(I+=" ".concat(JSON.stringify(A.error.details)),w=A.error.details)}catch(A){}throw s.status===403&&w&&w.some(A=>A.reason==="SERVICE_DISABLED")&&w.some(A=>{var P,Y;return(Y=(P=A.links)==null?void 0:P[0])==null?void 0:Y.description.includes("Google developers console API activation")})?new y(b.API_NOT_ENABLED,"The Firebase AI SDK requires the Firebase AI API ('firebasevertexai.googleapis.com') to be enabled in your Firebase project. Enable this API by visiting the Firebase Console "+"at https://console.firebase.google.com/project/".concat(n.params.apiSettings.project,"/ailogic/ ")+'and clicking "Get started". If you enabled this API recently, wait a few minutes for the action to propagate to our systems and then retry.',{status:s.status,statusText:s.statusText,errorDetails:w}):new y(b.FETCH_ERROR,"Error fetching from ".concat(n,": [").concat(s.status," ").concat(s.statusText,"] ").concat(I),{status:s.status,statusText:s.statusText,errorDetails:w})}}catch(p){let I=p;throw p.code!==b.FETCH_ERROR&&p.code!==b.API_NOT_ENABLED&&p instanceof Error&&p.name!==Fe&&(I=new y(b.ERROR,"Error fetching from ".concat(n.toString(),": ").concat(p.message)),I.stack=p.stack),I}finally{clearTimeout(o)}return s}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function be(t){if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&L.warn("This response had ".concat(t.candidates.length," ")+"candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates."),Kt(t.candidates[0]))throw new y(b.RESPONSE_ERROR,"Response error: ".concat(te(t),". Response body stored in error.response"),{response:t});return!0}else return!1}function _e(t,e=q.IN_CLOUD){t.candidates&&!t.candidates[0].hasOwnProperty("index")&&(t.candidates[0].index=0);const n=ka(t);return n.inferenceSource=e,n}function ka(t){return t.text=()=>{if(be(t))return Tt(t,e=>!e.thought);if(t.promptFeedback)throw new y(b.RESPONSE_ERROR,"Text not available. ".concat(te(t)),{response:t});return""},t.thoughtSummary=()=>{if(be(t)){const e=Tt(t,n=>!!n.thought);return e===""?void 0:e}else if(t.promptFeedback)throw new y(b.RESPONSE_ERROR,"Thought summary not available. ".concat(te(t)),{response:t})},t.inlineDataParts=()=>{if(be(t))return Na(t);if(t.promptFeedback)throw new y(b.RESPONSE_ERROR,"Data not available. ".concat(te(t)),{response:t})},t.functionCalls=()=>{if(be(t))return La(t);if(t.promptFeedback)throw new y(b.RESPONSE_ERROR,"Function call not available. ".concat(te(t)),{response:t})},t}function Tt(t,e){var s,a,r,i;const n=[];if((a=(s=t.candidates)==null?void 0:s[0].content)!=null&&a.parts)for(const o of(i=(r=t.candidates)==null?void 0:r[0].content)==null?void 0:i.parts)o.text&&e(o)&&n.push(o.text);return n.length>0?n.join(""):""}function La(t){var n,s,a,r;const e=[];if((s=(n=t.candidates)==null?void 0:n[0].content)!=null&&s.parts)for(const i of(r=(a=t.candidates)==null?void 0:a[0].content)==null?void 0:r.parts)i.functionCall&&e.push(i.functionCall);if(e.length>0)return e}function Na(t){var n,s,a,r;const e=[];if((s=(n=t.candidates)==null?void 0:n[0].content)!=null&&s.parts)for(const i of(r=(a=t.candidates)==null?void 0:a[0].content)==null?void 0:r.parts)i.inlineData&&e.push(i);if(e.length>0)return e}const Ma=[Dt.RECITATION,Dt.SAFETY];function Kt(t){return!!t.finishReason&&Ma.some(e=>e===t.finishReason)}function te(t){var n,s,a;let e="";if((!t.candidates||t.candidates.length===0)&&t.promptFeedback)e+="Response was blocked",(n=t.promptFeedback)!=null&&n.blockReason&&(e+=" due to ".concat(t.promptFeedback.blockReason)),(s=t.promptFeedback)!=null&&s.blockReasonMessage&&(e+=": ".concat(t.promptFeedback.blockReasonMessage));else if((a=t.candidates)!=null&&a[0]){const r=t.candidates[0];Kt(r)&&(e+="Candidate was blocked due to ".concat(r.finishReason),r.finishMessage&&(e+=": ".concat(r.finishMessage)))}return e}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yt(t){var e,n;if((e=t.safetySettings)==null||e.forEach(s=>{if(s.method)throw new y(b.UNSUPPORTED,"SafetySetting.method is not supported in the the Gemini Developer API. Please remove this property.")}),(n=t.generationConfig)!=null&&n.topK){const s=Math.round(t.generationConfig.topK);s!==t.generationConfig.topK&&(L.warn("topK in GenerationConfig has been rounded to the nearest integer to match the format for requests to the Gemini Developer API."),t.generationConfig.topK=s)}return t}function et(t){return{candidates:t.candidates?$a(t.candidates):void 0,prompt:t.promptFeedback?Ba(t.promptFeedback):void 0,usageMetadata:t.usageMetadata}}function xa(t,e){return{generateContentRequest:{model:e,...t}}}function $a(t){const e=[];let n;return e&&t.forEach(s=>{var i,o;let a;if(s.citationMetadata&&(a={citations:s.citationMetadata.citationSources}),s.safetyRatings&&(n=s.safetyRatings.map(c=>{var u,E,f;return{...c,severity:(u=c.severity)!=null?u:qt.HARM_SEVERITY_UNSUPPORTED,probabilityScore:(E=c.probabilityScore)!=null?E:0,severityScore:(f=c.severityScore)!=null?f:0}})),(o=(i=s.content)==null?void 0:i.parts)!=null&&o.some(c=>c==null?void 0:c.videoMetadata))throw new y(b.UNSUPPORTED,"Part.videoMetadata is not supported in the Gemini Developer API. Please remove this property.");const r={index:s.index,content:s.content,finishReason:s.finishReason,finishMessage:s.finishMessage,safetyRatings:n,citationMetadata:a,groundingMetadata:s.groundingMetadata,urlContextMetadata:s.urlContextMetadata};e.push(r)}),e}function Ba(t){const e=[];return t.safetyRatings.forEach(s=>{var a,r,i;e.push({category:s.category,probability:s.probability,severity:(a=s.severity)!=null?a:qt.HARM_SEVERITY_UNSUPPORTED,probabilityScore:(r=s.probabilityScore)!=null?r:0,severityScore:(i=s.severityScore)!=null?i:0,blocked:s.blocked})}),{blockReason:t.blockReason,safetyRatings:e,blockReasonMessage:t.blockReasonMessage}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pt=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;function Ua(t,e,n){const s=t.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0})),a=Va(s),[r,i]=a.tee();return{stream:ja(r,e,n),response:Fa(i,e,n)}}async function Fa(t,e,n){const s=[],a=t.getReader();for(;;){const{done:r,value:i}=await a.read();if(r){let o=Ha(s);return e.backend.backendType===G.GOOGLE_AI&&(o=et(o)),_e(o,n)}s.push(i)}}async function*ja(t,e,n){var a,r;const s=t.getReader();for(;;){const{value:i,done:o}=await s.read();if(o)break;let c;e.backend.backendType===G.GOOGLE_AI?c=_e(et(i),n):c=_e(i,n);const u=(a=c.candidates)==null?void 0:a[0];!((r=u==null?void 0:u.content)!=null&&r.parts)&&!(u!=null&&u.finishReason)&&!(u!=null&&u.citationMetadata)&&!(u!=null&&u.urlContextMetadata)||(yield c)}}function Va(t){const e=t.getReader();return new ReadableStream({start(s){let a="";return r();function r(){return e.read().then(({value:i,done:o})=>{if(o){if(a.trim()){s.error(new y(b.PARSE_FAILED,"Failed to parse stream"));return}s.close();return}a+=i;let c=a.match(Pt),u;for(;c;){try{u=JSON.parse(c[1])}catch(E){s.error(new y(b.PARSE_FAILED,'Error parsing JSON response: "'.concat(c[1])));return}s.enqueue(u),a=a.substring(c[0].length),c=a.match(Pt)}return r()})}}})}function Ha(t){const e=t[t.length-1],n={promptFeedback:e==null?void 0:e.promptFeedback};for(const s of t)if(s.candidates)for(const a of s.candidates){const r=a.index||0;n.candidates||(n.candidates=[]),n.candidates[r]||(n.candidates[r]={index:a.index}),n.candidates[r].citationMetadata=a.citationMetadata,n.candidates[r].finishReason=a.finishReason,n.candidates[r].finishMessage=a.finishMessage,n.candidates[r].safetyRatings=a.safetyRatings,n.candidates[r].groundingMetadata=a.groundingMetadata;const i=a.urlContextMetadata;if(typeof i=="object"&&i!==null&&Object.keys(i).length>0&&(n.candidates[r].urlContextMetadata=i),a.content){if(!a.content.parts)continue;n.candidates[r].content||(n.candidates[r].content={role:a.content.role||"user",parts:[]});for(const o of a.content.parts){const c={...o};o.text!==""&&Object.keys(c).length>0&&n.candidates[r].content.parts.push(c)}}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ga=[b.FETCH_ERROR,b.ERROR,b.API_NOT_ENABLED];async function Xt(t,e,n,s){if(!e)return{response:await s(),inferenceSource:q.IN_CLOUD};switch(e.mode){case V.ONLY_ON_DEVICE:if(await e.isAvailable(t))return{response:await n(),inferenceSource:q.ON_DEVICE};throw new y(b.UNSUPPORTED,"Inference mode is ONLY_ON_DEVICE, but an on-device model is not available.");case V.ONLY_IN_CLOUD:return{response:await s(),inferenceSource:q.IN_CLOUD};case V.PREFER_IN_CLOUD:try{return{response:await s(),inferenceSource:q.IN_CLOUD}}catch(a){if(a instanceof y&&Ga.includes(a.code))return{response:await n(),inferenceSource:q.ON_DEVICE};throw a}case V.PREFER_ON_DEVICE:return await e.isAvailable(t)?{response:await n(),inferenceSource:q.ON_DEVICE}:{response:await s(),inferenceSource:q.IN_CLOUD};default:throw new y(b.ERROR,"Unexpected infererence mode: ".concat(e.mode))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wa(t,e,n,s){return t.backend.backendType===G.GOOGLE_AI&&(n=Yt(n)),Ze({task:"streamGenerateContent",model:e,apiSettings:t,stream:!0,singleRequestOptions:s},JSON.stringify(n))}async function Qt(t,e,n,s,a){const r=await Xt(n,s,()=>s.generateContentStream(n),()=>Wa(t,e,n,a));return Ua(r.response,t,r.inferenceSource)}async function za(t,e,n,s){return t.backend.backendType===G.GOOGLE_AI&&(n=Yt(n)),Ze({model:e,task:"generateContent",apiSettings:t,stream:!1,singleRequestOptions:s},JSON.stringify(n))}async function Zt(t,e,n,s,a){const r=await Xt(n,s,()=>s.generateContent(n),()=>za(t,e,n,a)),i=await qa(r.response,t);return{response:_e(i,r.inferenceSource)}}async function qa(t,e){const n=await t.json();return e.backend.backendType===G.GOOGLE_AI?et(n):n}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function en(t){if(t!=null){if(typeof t=="string")return{role:"system",parts:[{text:t}]};if(t.text)return{role:"system",parts:[t]};if(t.parts)return t.role?t:{role:"system",parts:t.parts}}}function Ye(t){let e=[];if(typeof t=="string")e=[{text:t}];else for(const n of t)typeof n=="string"?e.push({text:n}):e.push(n);return Ja(e)}function Ja(t){const e={role:"user",parts:[]},n={role:"function",parts:[]};let s=!1,a=!1;for(const r of t)"functionResponse"in r?(n.parts.push(r),a=!0):(e.parts.push(r),s=!0);if(s&&a)throw new y(b.INVALID_CONTENT,"Within a single message, FunctionResponse cannot be mixed with other type of Part in the request for sending chat message.");if(!s&&!a)throw new y(b.INVALID_CONTENT,"No Content is provided for sending chat message.");return s?e:n}function je(t){let e;return t.contents?e=t:e={contents:[Ye(t)]},t.systemInstruction&&(e.systemInstruction=en(t.systemInstruction)),e}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kt=["text","inlineData","functionCall","functionResponse","thought","thoughtSignature"],Ka={user:["text","inlineData"],function:["functionResponse"],model:["text","functionCall","thought","thoughtSignature"],system:["text"]},Lt={user:["model"],function:["model"],model:["user","function"],system:[]};function Ya(t){let e=null;for(const n of t){const{role:s,parts:a}=n;if(!e&&s!=="user")throw new y(b.INVALID_CONTENT,"First Content should be with role 'user', got ".concat(s));if(!At.includes(s))throw new y(b.INVALID_CONTENT,"Each item should include role field. Got ".concat(s," but valid roles are: ").concat(JSON.stringify(At)));if(!Array.isArray(a))throw new y(b.INVALID_CONTENT,"Content should have 'parts' property with an array of Parts");if(a.length===0)throw new y(b.INVALID_CONTENT,"Each Content should have at least one part");const r={text:0,inlineData:0,functionCall:0,functionResponse:0,thought:0,thoughtSignature:0,executableCode:0,codeExecutionResult:0};for(const o of a)for(const c of kt)c in o&&(r[c]+=1);const i=Ka[s];for(const o of kt)if(!i.includes(o)&&r[o]>0)throw new y(b.INVALID_CONTENT,"Content with role '".concat(s,"' can't contain '").concat(o,"' part"));if(e&&!Lt[s].includes(e.role))throw new y(b.INVALID_CONTENT,"Content with role '".concat(s,"' can't follow '").concat(e.role,"'. Valid previous roles: ").concat(JSON.stringify(Lt)));e=n}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nt="SILENT_ERROR";class Xa{constructor(e,n,s,a,r){this.model=n,this.chromeAdapter=s,this.params=a,this.requestOptions=r,this._history=[],this._sendPromise=Promise.resolve(),this._apiSettings=e,a!=null&&a.history&&(Ya(a.history),this._history=a.history)}async getHistory(){return await this._sendPromise,this._history}async sendMessage(e,n){var i,o,c,u,E;await this._sendPromise;const s=Ye(e),a={safetySettings:(i=this.params)==null?void 0:i.safetySettings,generationConfig:(o=this.params)==null?void 0:o.generationConfig,tools:(c=this.params)==null?void 0:c.tools,toolConfig:(u=this.params)==null?void 0:u.toolConfig,systemInstruction:(E=this.params)==null?void 0:E.systemInstruction,contents:[...this._history,s]};let r={};return this._sendPromise=this._sendPromise.then(()=>Zt(this._apiSettings,this.model,a,this.chromeAdapter,{...this.requestOptions,...n})).then(f=>{var p,I;if(f.response.candidates&&f.response.candidates.length>0){this._history.push(s);const w={parts:((p=f.response.candidates)==null?void 0:p[0].content.parts)||[],role:((I=f.response.candidates)==null?void 0:I[0].content.role)||"model"};this._history.push(w)}else{const w=te(f.response);w&&L.warn("sendMessage() was unsuccessful. ".concat(w,". Inspect response object for details."))}r=f}),await this._sendPromise,r}async sendMessageStream(e,n){var i,o,c,u,E;await this._sendPromise;const s=Ye(e),a={safetySettings:(i=this.params)==null?void 0:i.safetySettings,generationConfig:(o=this.params)==null?void 0:o.generationConfig,tools:(c=this.params)==null?void 0:c.tools,toolConfig:(u=this.params)==null?void 0:u.toolConfig,systemInstruction:(E=this.params)==null?void 0:E.systemInstruction,contents:[...this._history,s]},r=Qt(this._apiSettings,this.model,a,this.chromeAdapter,{...this.requestOptions,...n});return this._sendPromise=this._sendPromise.then(()=>r).catch(f=>{throw new Error(Nt)}).then(f=>f.response).then(f=>{if(f.candidates&&f.candidates.length>0){this._history.push(s);const p={...f.candidates[0].content};p.role||(p.role="model"),this._history.push(p)}else{const p=te(f);p&&L.warn("sendMessageStream() was unsuccessful. ".concat(p,". Inspect response object for details."))}}).catch(f=>{f.message!==Nt&&f.name!=="AbortError"&&L.error(f)}),r}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qa(t,e,n,s){let a="";if(t.backend.backendType===G.GOOGLE_AI){const i=xa(n,e);a=JSON.stringify(i)}else a=JSON.stringify(n);return(await Ze({model:e,task:"countTokens",apiSettings:t,stream:!1,singleRequestOptions:s},a)).json()}async function Za(t,e,n,s,a){if((s==null?void 0:s.mode)===V.ONLY_ON_DEVICE)throw new y(b.UNSUPPORTED,"countTokens() is not supported for on-device models.");return Qa(t,e,n,a)}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er extends he{constructor(e,n,s,a){super(e,n.model),this.chromeAdapter=a,this.generationConfig=n.generationConfig||{},tr(this.generationConfig),this.safetySettings=n.safetySettings||[],this.tools=n.tools,this.toolConfig=n.toolConfig,this.systemInstruction=en(n.systemInstruction),this.requestOptions=s||{}}async generateContent(e,n){const s=je(e);return Zt(this._apiSettings,this.model,{generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,...s},this.chromeAdapter,{...this.requestOptions,...n})}async generateContentStream(e,n){const s=je(e);return Qt(this._apiSettings,this.model,{generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,...s},this.chromeAdapter,{...this.requestOptions,...n})}startChat(e){return new Xa(this._apiSettings,this.model,this.chromeAdapter,{tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,generationConfig:this.generationConfig,safetySettings:this.safetySettings,...e},this.requestOptions)}async countTokens(e,n){const s=je(e);return Za(this._apiSettings,this.model,s,this.chromeAdapter,{...this.requestOptions,...n})}}function tr(t){var e,n;if(((e=t.thinkingConfig)==null?void 0:e.thinkingBudget)!=null&&((n=t.thinkingConfig)!=null&&n.thinkingLevel))throw new y(b.UNSUPPORTED,"Cannot set both thinkingBudget and thinkingLevel in a config.")}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(e){if(!e.type&&!e.anyOf)throw new y(b.INVALID_SCHEMA,"A schema must have either a 'type' or an 'anyOf' array of sub-schemas.");for(const n in e)this[n]=e[n];this.type=e.type,this.format=e.hasOwnProperty("format")?e.format:void 0,this.nullable=e.hasOwnProperty("nullable")?!!e.nullable:!1}toJSON(){const e={type:this.type};for(const n in this)this.hasOwnProperty(n)&&this[n]!==void 0&&(n!=="required"||this.type===ne.OBJECT)&&(e[n]=this[n]);return e}static array(e){return new rr(e,e.items)}static object(e){return new ir(e,e.properties,e.optionalProperties)}static string(e){return new Mt(e)}static enumString(e){return new Mt(e,e.enum)}static integer(e){return new nr(e)}static number(e){return new sr(e)}static boolean(e){return new ar(e)}static anyOf(e){return new or(e)}}class nr extends T{constructor(e){super({type:ne.INTEGER,...e})}}class sr extends T{constructor(e){super({type:ne.NUMBER,...e})}}class ar extends T{constructor(e){super({type:ne.BOOLEAN,...e})}}class Mt extends T{constructor(e,n){super({type:ne.STRING,...e}),this.enum=n}toJSON(){const e=super.toJSON();return this.enum&&(e.enum=this.enum),e}}class rr extends T{constructor(e,n){super({type:ne.ARRAY,...e}),this.items=n}toJSON(){const e=super.toJSON();return e.items=this.items.toJSON(),e}}class ir extends T{constructor(e,n,s=[]){super({type:ne.OBJECT,...e}),this.properties=n,this.optionalProperties=s}toJSON(){const e=super.toJSON();e.properties={...this.properties};const n=[];if(this.optionalProperties){for(const s of this.optionalProperties)if(!this.properties.hasOwnProperty(s))throw new y(b.INVALID_SCHEMA,'Property "'.concat(s,'" specified in "optionalProperties" does not exist.'))}for(const s in this.properties)this.properties.hasOwnProperty(s)&&(e.properties[s]=this.properties[s].toJSON(),this.optionalProperties.includes(s)||n.push(s));return n.length>0&&(e.required=n),delete e.optionalProperties,e}}class or extends T{constructor(e){if(e.anyOf.length===0)throw new y(b.INVALID_SCHEMA,"The 'anyOf' array must not be empty.");super({...e,type:void 0}),this.anyOf=e.anyOf}toJSON(){const e=super.toJSON();return this.anyOf&&Array.isArray(this.anyOf)&&(e.anyOf=this.anyOf.map(n=>n.toJSON())),e}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cr(t=ia(),e){var o,c;t=is(t);const n=na(t,oe),s=(o=e==null?void 0:e.backend)!=null?o:new Ce,a={useLimitedUseAppCheckTokens:(c=e==null?void 0:e.useLimitedUseAppCheckTokens)!=null?c:!1},r=_a(s),i=n.getImmediate({identifier:r});return i.options=a,i}function lr(t,e,n){var o;const s=e;let a;if(s.mode?a=s.inCloudParams||{model:wa}:a=e,!a.model)throw new y(b.NO_MODEL,"Must provide a model name. Example: getGenerativeModel({ model: 'my-model-name' })");const r=(o=t.chromeAdapterFactory)==null?void 0:o.call(t,s.mode,typeof window>"u"?void 0:window,s.onDeviceParams),i=new er(t,a,n,r);return i._apiSettings.inferenceMode=s.mode,i}function dr(){Ee(new pe(oe,Oa,"PUBLIC").setMultipleInstances(!0)),re(Ct,Ke),re(Ct,Ke,"esm2020")}dr();var ur="firebase",fr="12.9.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */re(ur,fr,"app");const hr={apiKey:"AIzaSyBy-l_g3Qc6FdjjWj94qc1nxz_uskmxaHY",authDomain:"lab06-expense.firebaseapp.com",projectId:"lab06-expense",storageBucket:"lab06-expense.firebasestorage.app",messagingSenderId:"43095205716",appId:"1:43095205716:web:4f6252efaca4bcf9b0cac1"},pr=Gt(hr),mr=T.object({properties:{caption:T.string(),tags:T.array({items:T.string()}),objects:T.array({items:T.object({properties:{name:T.string(),confidence:T.number()},optionalProperties:["confidence"]})}),safety:T.object({properties:{isSensitive:T.boolean(),notes:T.string()},optionalProperties:["notes"]})},optionalProperties:["objects","safety"]}),gr=cr(pr,{backend:new Ce}),br=lr(gr,{model:"gemini-2.5-flash",generationConfig:{responseMimeType:"application/json",responseSchema:mr}});class yr{static async analyze(e){var i;const n="วิเคราะห์ภาพนี้และตอบกลับตาม JSON schema เท่านั้น\n- caption: คำบรรยายสั้น 1 ประโยคภาษาไทย\n- tags: คีย์เวิร์ด 3-8 คำ\n- objects: ถ้าเห็นวัตถุเด่น ให้ระบุชื่อ\n- safety: ถ้าเป็นภาพอ่อนไหวให้ทำเครื่องหมาย",s={inlineData:{data:e.base64,mimeType:e.mimeType}},r=(i=(await br.generateContent([n,s])).response.text())!=null?i:"{}";return JSON.parse(r)}}const vr={class:"pills"},Er={class:"pill"},wr={key:0,class:"pill"},_r={key:1,class:"pill warn"},Ir={key:0,class:"stage"},Sr={class:"stage-head"},Cr={class:"stage-title"},Or={class:"viewport"},Rr={class:"viewport-overlay"},Ar={class:"placeholder"},Dr={class:"actions"},Tr={class:"msg"},Pr={key:1,class:"stage"},kr={class:"viewport"},Lr={class:"placeholder"},Nr={class:"actions"},Mr={key:2,class:"preview"},xr={class:"preview-head"},$r={class:"preview-title"},Br={class:"msg"},Ur={class:"msg hint"},Fr={class:"mini-tip"},jr={class:"section"},Vr={class:"caption"},Hr={class:"section"},Gr={class:"chips"},Wr={key:0,class:"section"},zr={key:0},qr={key:1},Jr={key:1,class:"section"},Kr={key:0,class:"notes"},Yr={slot:"content",class:"raw"},Xr=tn({__name:"Tab1Page",setup(t){const e=ye.isNativePlatform(),n=window.isSecureContext||location.hostname==="localhost",s=x(null),a=x(null),r=x(null),i=x(null),o=x(""),c=x(null),u=x(!1),E=x(""),f=x(""),p=x(!1),I=x("environment"),w=x("");let A=null;const P=!e&&n&&!!navigator.mediaDevices&&typeof navigator.mediaDevices.getUserMedia=="function";function Y(){var v;E.value="",f.value="",(v=s.value)==null||v.click()}function Oe(){i.value=null,o.value="",c.value=null,E.value="",f.value="",w.value=""}function W(v){var O;const l=(O=v==null?void 0:v.message)!=null?O:String(v);return/NotAllowedError|denied/i.test(l)?"ไม่ได้รับอนุญาตให้ใช้กล้อง: โปรดกด Allow กล้องในเบราว์เซอร์ แล้วลองใหม่":/NotFoundError/i.test(l)?"ไม่พบกล้อง: ตรวจสอบว่าเครื่องมี webcam และไม่ได้ถูกปิด/ปิดไดรเวอร์":/NotReadableError/i.test(l)?"กล้องถูกใช้งานโดยโปรแกรมอื่น (เช่น Zoom/Meet/OBS) ให้ปิดแล้วลองใหม่":l}async function ge(v){var _;E.value="",f.value="";const l=v.target,O=(_=l.files)==null?void 0:_[0];O&&(i.value=await pt.fromFile(O),o.value=URL.createObjectURL(O),c.value=null,l.value="",f.value="โหลดรูปสำเร็จ ✅ กดวิเคราะห์ได้เลย")}async function le(){if(w.value="",E.value="",f.value="",!P){w.value="Webcam ต้องใช้ http://localhost หรือ https และเบราว์เซอร์ต้องรองรับ getUserMedia";return}try{if(se(),A=await navigator.mediaDevices.getUserMedia({video:{facingMode:I.value},audio:!1}),p.value=!0,await An(),!a.value)throw new Error("Video element not ready");a.value.srcObject=A,await a.value.play(),f.value="เปิดกล้องแล้ว ✅ กดถ่ายภาพได้เลย"}catch(v){w.value=W(v),p.value=!1,se()}}function se(){A&&(A.getTracks().forEach(v=>v.stop()),A=null),p.value=!1}async function de(){try{if(!a.value||!r.value)return;const v=a.value,l=r.value,O=v.videoWidth||1280,_=v.videoHeight||720;l.width=O,l.height=_;const j=l.getContext("2d");if(!j)throw new Error("Canvas context not available");j.drawImage(v,0,0,O,_);const X=l.toDataURL("image/jpeg",.9),tt=X.split(",")[1];if(!tt)throw new Error("Invalid base64 from canvas");i.value={base64:tt,mimeType:"image/jpeg"},o.value=X,c.value=null,f.value="ถ่ายภาพสำเร็จ ✅ กดวิเคราะห์ได้เลย"}catch(v){w.value=W(v)}}nn(I,async()=>{p.value&&await le()}),sn(()=>{se()});async function D(){E.value="",f.value="",u.value=!0;try{const v=await pt.fromCamera();i.value=v,o.value="data:".concat(v.mimeType,";base64,").concat(v.base64),c.value=null,f.value="ได้รูปจาก Native Camera ✅ กดวิเคราะห์ได้เลย"}catch(v){E.value=W(v)}finally{u.value=!1}}async function k(){if(i.value){E.value="",f.value="",u.value=!0;try{c.value=await yr.analyze(i.value),f.value="วิเคราะห์เสร็จแล้ว ✅"}catch(v){E.value=W(v)}finally{u.value=!1}}}return(v,l)=>(R(),U(d(an),null,{default:m(()=>[h(d(ln),null,{default:m(()=>[h(d(rn),null,{default:m(()=>[h(d(on),null,{default:m(()=>[...l[1]||(l[1]=[C("Vision Studio",-1)])]),_:1}),h(d(cn),{slot:"end"},{default:m(()=>[h(d(z),{fill:"clear",disabled:u.value,onClick:Oe},{default:m(()=>[...l[2]||(l[2]=[C(" รีเซ็ต ",-1)])]),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1}),h(d(Rn),{class:"ion-padding"},{default:m(()=>[g("input",{ref_key:"fileEl",ref:s,type:"file",accept:"image/*",hidden:"",onChange:ge},null,544),g("div",vr,[g("div",Er,[g("span",{class:dn(["dot",{on:d(e)}])},null,2),g("span",null,N(d(e)?"Native (Android/iOS)":"Web (PC/Browser)"),1)]),i.value?(R(),$("div",wr,[l[3]||(l[3]=g("span",{class:"dot on"},null,-1)),g("span",null,"Image Ready • "+N(i.value.mimeType),1)])):B("",!0),!d(e)&&!d(n)?(R(),$("div",_r,[...l[4]||(l[4]=[g("span",{class:"dot"},null,-1),g("span",null,"Webcam ต้องใช้ localhost/https",-1)])])):B("",!0)]),h(d(un),null,{default:m(()=>[h(d(fn),null,{default:m(()=>[h(d(nt),{size:"12","size-lg":"7"},{default:m(()=>[h(d(Re),{class:"card"},{default:m(()=>[h(d(Ae),null,{default:m(()=>[h(d(De),null,{default:m(()=>[...l[5]||(l[5]=[C("Camera Stage",-1)])]),_:1}),h(d(Te),null,{default:m(()=>[...l[6]||(l[6]=[C(" Web: Live Preview + ถ่ายภาพ • Native: เปิดกล้องด้วย Capacitor ",-1)])]),_:1})]),_:1}),h(d(Pe),null,{default:m(()=>[d(e)?(R(),$("div",Pr,[g("div",kr,[g("div",Lr,[h(d(M),{icon:d(yn),class:"placeholder-icon"},null,8,["icon"]),l[16]||(l[16]=g("div",{class:"placeholder-title"},"โหมด Native",-1)),l[17]||(l[17]=g("div",{class:"placeholder-sub"}," กด “ถ่ายรูป (Native)” เพื่อเปิดกล้องมือถือ ",-1))])]),g("div",Nr,[h(d(z),{expand:"block",color:"tertiary",size:"large",disabled:u.value,onClick:D},{default:m(()=>[h(d(M),{icon:d(at),slot:"start"},null,8,["icon"]),l[18]||(l[18]=C(" ถ่ายรูป (Native) ",-1))]),_:1},8,["disabled"])])])):(R(),$("div",Ir,[g("div",Sr,[g("div",Cr,[h(d(M),{icon:d(hn)},null,8,["icon"]),l[7]||(l[7]=g("span",null,"Webcam Preview",-1))]),h(d(pn),{modelValue:I.value,"onUpdate:modelValue":l[0]||(l[0]=O=>I.value=O),disabled:u.value||!d(P)},{default:m(()=>[h(d(st),{value:"environment"},{default:m(()=>[h(d(ue),null,{default:m(()=>[...l[8]||(l[8]=[C("กล้องหลัง",-1)])]),_:1})]),_:1}),h(d(st),{value:"user"},{default:m(()=>[h(d(ue),null,{default:m(()=>[...l[9]||(l[9]=[C("กล้องหน้า",-1)])]),_:1})]),_:1})]),_:1},8,["modelValue","disabled"])]),g("div",Or,[ke(g("video",{ref_key:"videoEl",ref:a,class:"video",playsinline:"",autoplay:"",muted:""},null,512),[[Le,p.value]]),ke(g("div",Rr,[...l[10]||(l[10]=[g("div",{class:"hint-bubble"},"จัดเฟรมแล้วกด “ถ่ายภาพ”",-1)])],512),[[Le,p.value]]),ke(g("div",Ar,[h(d(M),{icon:d(at),class:"placeholder-icon"},null,8,["icon"]),l[11]||(l[11]=g("div",{class:"placeholder-title"},"ยังไม่เปิดกล้อง",-1)),l[12]||(l[12]=g("div",{class:"placeholder-sub"}," กด “เปิดกล้อง” แล้วอนุญาตสิทธิ์กล้องในเบราว์เซอร์ ",-1))],512),[[Le,!p.value]])]),g("div",Dr,[p.value?(R(),U(d(z),{key:1,expand:"block",color:"medium",size:"large",disabled:u.value,onClick:se},{default:m(()=>[h(d(M),{icon:d(gn),slot:"start"},null,8,["icon"]),l[14]||(l[14]=C(" ปิดกล้อง ",-1))]),_:1},8,["disabled"])):(R(),U(d(z),{key:0,expand:"block",color:"tertiary",size:"large",disabled:u.value||!d(P),onClick:le},{default:m(()=>[h(d(M),{icon:d(mn),slot:"start"},null,8,["icon"]),l[13]||(l[13]=C(" เปิดกล้อง ",-1))]),_:1},8,["disabled"])),h(d(z),{expand:"block",color:"primary",size:"large",disabled:u.value||!p.value,onClick:de},{default:m(()=>[h(d(M),{icon:d(bn),slot:"start"},null,8,["icon"]),l[15]||(l[15]=C(" ถ่ายภาพ ",-1))]),_:1},8,["disabled"])]),w.value?(R(),U(d(Ne),{key:0,color:"danger"},{default:m(()=>[g("p",Tr,N(w.value),1)]),_:1})):B("",!0)])),o.value?(R(),$("div",Mr,[g("div",xr,[g("div",$r,[h(d(M),{icon:d(rt)},null,8,["icon"]),l[19]||(l[19]=g("span",null,"Captured / Selected",-1))]),h(d(z),{fill:"clear",size:"small",disabled:u.value,onClick:Y},{default:m(()=>[...l[20]||(l[20]=[C(" เปลี่ยนรูป ",-1)])]),_:1},8,["disabled"])]),h(d(vn),{src:o.value,class:"preview-img"},null,8,["src"])])):B("",!0)]),_:1})]),_:1})]),_:1}),h(d(nt),{size:"12","size-lg":"5"},{default:m(()=>[h(d(Re),{class:"card"},{default:m(()=>[h(d(Ae),null,{default:m(()=>[h(d(De),null,{default:m(()=>[...l[21]||(l[21]=[C("Workflow",-1)])]),_:1}),h(d(Te),null,{default:m(()=>[...l[22]||(l[22]=[C("เลือก/ถ่าย → วิเคราะห์ → แสดงผล",-1)])]),_:1})]),_:1}),h(d(Pe),null,{default:m(()=>[h(d(z),{expand:"block",size:"large",disabled:u.value,onClick:Y},{default:m(()=>[h(d(M),{icon:d(rt),slot:"start"},null,8,["icon"]),l[23]||(l[23]=C(" เลือกไฟล์ภาพ ",-1))]),_:1},8,["disabled"]),h(d(z),{expand:"block",size:"large",color:"primary",disabled:!i.value||u.value,onClick:k},{default:m(()=>[h(d(M),{icon:d(En),slot:"start"},null,8,["icon"]),l[24]||(l[24]=C(" วิเคราะห์ด้วย Gemini ",-1))]),_:1},8,["disabled"]),u.value?(R(),U(d(wn),{key:0,type:"indeterminate",class:"mt12"})):B("",!0),E.value?(R(),U(d(Ne),{key:1,color:"danger"},{default:m(()=>[g("p",Br,N(E.value),1)]),_:1})):B("",!0),f.value?(R(),U(d(Ne),{key:2,color:"medium"},{default:m(()=>[g("p",Ur,N(f.value),1)]),_:1})):B("",!0),g("div",Fr,[h(d(M),{icon:d(_n)},null,8,["icon"]),l[25]||(l[25]=g("span",null,[C(" ถ้าเป็น Web ให้เปิดผ่าน "),g("b",null,"http://localhost"),C(" หรือ "),g("b",null,"https"),C(" และกด Allow กล้อง ")],-1))])]),_:1})]),_:1}),c.value?(R(),U(d(Re),{key:0,class:"card"},{default:m(()=>[h(d(Ae),null,{default:m(()=>[h(d(De),null,{default:m(()=>[...l[26]||(l[26]=[C("Analysis Result",-1)])]),_:1}),h(d(Te),null,{default:m(()=>[...l[27]||(l[27]=[C("Structured Output (JSON)",-1)])]),_:1})]),_:1}),h(d(Pe),null,{default:m(()=>{var O;return[g("div",jr,[l[28]||(l[28]=g("div",{class:"k"},"Caption",-1)),g("div",Vr,N(c.value.caption),1)]),g("div",Hr,[l[29]||(l[29]=g("div",{class:"k"},"Tags",-1)),g("div",Gr,[(R(!0),$(ot,null,it(c.value.tags,_=>(R(),U(d(Dn),{key:_,outline:""},{default:m(()=>[h(d(M),{icon:d(Tn)},null,8,["icon"]),h(d(ue),null,{default:m(()=>[C(N(_),1)]),_:2},1024)]),_:2},1024))),128))])]),(O=c.value.objects)!=null&&O.length?(R(),$("div",Wr,[l[30]||(l[30]=g("div",{class:"k"},"Objects",-1)),h(d(In),{inset:""},{default:m(()=>[(R(!0),$(ot,null,it(c.value.objects,(_,j)=>(R(),U(d(lt),{key:j},{default:m(()=>[h(d(ue),null,{default:m(()=>[g("h2",null,N(_.name),1),_.confidence!==void 0?(R(),$("p",zr," ความมั่นใจ: "+N((_.confidence*100).toFixed(0))+"% ",1)):(R(),$("p",qr,"ความมั่นใจ: ไม่ระบุ"))]),_:2},1024),_.confidence!==void 0?(R(),U(d(ct),{key:0,slot:"end",color:"dark"},{default:m(()=>[C(N((_.confidence*100).toFixed(0))+"% ",1)]),_:2},1024)):B("",!0)]),_:2},1024))),128))]),_:1})])):B("",!0),c.value.safety?(R(),$("div",Jr,[l[31]||(l[31]=g("div",{class:"k"},"Safety",-1)),h(d(ct),{color:c.value.safety.isSensitive?"danger":"success"},{default:m(()=>[C(N(c.value.safety.isSensitive?"Sensitive":"OK"),1)]),_:1},8,["color"]),c.value.safety.notes?(R(),$("div",Kr,N(c.value.safety.notes),1)):B("",!0)])):B("",!0),h(d(Sn),null,{default:m(()=>[h(d(Cn),{value:"raw"},{default:m(()=>[h(d(lt),{slot:"header"},{default:m(()=>[h(d(M),{icon:d(On),slot:"start"},null,8,["icon"]),h(d(ue),null,{default:m(()=>[...l[32]||(l[32]=[C("ดู JSON ดิบ",-1)])]),_:1})]),_:1}),g("div",Yr,[g("pre",null,N(JSON.stringify(c.value,null,2)),1)])]),_:1})]),_:1})]}),_:1})]),_:1})):B("",!0)]),_:1})]),_:1})]),_:1}),g("canvas",{ref_key:"canvasEl",ref:r,class:"hidden"},null,512)]),_:1})]),_:1}))}}),ei=Pn(Xr,[["__scopeId","data-v-18dfbda9"]]);export{ei as default};
