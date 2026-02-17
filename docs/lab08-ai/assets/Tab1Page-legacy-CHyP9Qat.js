System.register(["./index-legacy-CrVyhSBg.js","./_plugin-vue_export-helper-legacy-BVIICed7.js"],function(e,t){"use strict";var n,a,i,s,r,o,l,c,d,u,p,h,f,m,g,v,b,y,w,S,_,E,C,k,I,O,A,x,P,D,L,T,R,$,M,N,j,B,F,U,z,H,q,V,W,J,G,K,Y,X,Z,Q,ee,te,ne,ae,ie,se,re,oe;return{setters:[e=>{n=e.d,a=e.r,i=e.w,s=e.o,r=e.c,o=e.a,l=e.u,c=e.I,d=e.b,u=e.e,p=e.f,h=e.g,f=e.h,m=e.i,g=e.j,v=e.k,b=e.l,y=e.m,w=e.n,S=e.t,_=e.p,E=e.q,C=e.s,k=e.v,I=e.x,O=e.y,A=e.z,x=e.A,P=e.B,D=e.C,L=e.D,T=e.E,R=e.F,$=e.G,M=e.H,N=e.J,j=e.K,B=e.L,F=e.M,U=e.N,z=e.O,H=e.P,q=e.Q,V=e.R,W=e.S,J=e.T,G=e.U,K=e.V,Y=e.W,X=e.X,Z=e.Y,Q=e.Z,ee=e._,te=e.$,ne=e.a0,ae=e.a1,ie=e.a2,se=e.a3,re=e.a4},e=>{oe=e._}],execute:function(){var t,le=document.createElement("style");le.textContent=".pills[data-v-18dfbda9]{display:flex;flex-wrap:wrap;gap:10px;margin-bottom:12px}.pill[data-v-18dfbda9]{display:inline-flex;align-items:center;gap:8px;padding:8px 10px;border-radius:999px;background:rgba(0,0,0,.06);font-weight:800;font-size:.92rem}.pill.warn[data-v-18dfbda9]{background:rgba(255,196,0,.22)}.dot[data-v-18dfbda9]{width:10px;height:10px;border-radius:50%;background:rgba(0,0,0,.35)}.dot.on[data-v-18dfbda9]{background:rgba(0,180,60,.9)}.card[data-v-18dfbda9]{border-radius:18px;overflow:hidden}.stage[data-v-18dfbda9]{display:grid;gap:12px}.stage-head[data-v-18dfbda9]{display:grid;gap:10px}.stage-title[data-v-18dfbda9]{display:inline-flex;align-items:center;gap:8px;font-weight:900;font-size:1.02rem}.viewport[data-v-18dfbda9]{position:relative;border-radius:16px;overflow:hidden;background:#000;aspect-ratio:16 / 9;min-height:240px;display:grid;place-items:center}.video[data-v-18dfbda9]{width:100%;height:100%;object-fit:cover;display:block}.viewport-overlay[data-v-18dfbda9]{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;justify-content:center;align-items:flex-end;padding:12px;pointer-events:none}.hint-bubble[data-v-18dfbda9]{background:rgba(0,0,0,.55);color:#fff;padding:8px 10px;border-radius:999px;font-weight:800;font-size:.9rem}.placeholder[data-v-18dfbda9]{text-align:center;padding:18px}.placeholder-icon[data-v-18dfbda9]{font-size:42px;opacity:.75}.placeholder-title[data-v-18dfbda9]{margin-top:8px;font-weight:900;font-size:1.05rem;color:#fff}.placeholder-sub[data-v-18dfbda9]{margin-top:6px;opacity:.85;color:#fff}.actions[data-v-18dfbda9]{display:grid;grid-template-columns:1fr;gap:10px}.preview[data-v-18dfbda9]{margin-top:14px}.preview-head[data-v-18dfbda9]{display:flex;align-items:center;justify-content:space-between;margin-bottom:8px}.preview-title[data-v-18dfbda9]{display:inline-flex;align-items:center;gap:8px;font-weight:900}.preview-img[data-v-18dfbda9]{border-radius:16px;overflow:hidden}.mt12[data-v-18dfbda9]{margin-top:12px}.msg[data-v-18dfbda9]{margin:10px 0 0}.msg.hint[data-v-18dfbda9]{opacity:.85}.mini-tip[data-v-18dfbda9]{margin-top:12px;display:flex;gap:8px;align-items:flex-start;padding:10px 12px;border-radius:14px;background:rgba(0,0,0,.05);font-size:.92rem;line-height:1.35}.section[data-v-18dfbda9]{margin-top:12px}.k[data-v-18dfbda9]{font-weight:900;opacity:.75;margin-bottom:6px}.caption[data-v-18dfbda9]{font-size:1.05rem;font-weight:900;line-height:1.35}.chips[data-v-18dfbda9]{display:flex;flex-wrap:wrap;gap:8px}.notes[data-v-18dfbda9]{margin-top:8px;opacity:.9}.raw[data-v-18dfbda9]{padding:10px 14px 16px}.raw pre[data-v-18dfbda9]{margin:0;font-size:.85rem;white-space:pre-wrap;word-break:break-word}.hidden[data-v-18dfbda9]{display:none}\n/*$vite$:1*/",document.head.appendChild(le),function(e){e.Unimplemented="UNIMPLEMENTED",e.Unavailable="UNAVAILABLE"}(t||(t={}));class ce extends Error{constructor(e,t,n){super(e),this.message=e,this.code=t,this.data=n}}const de=e=>{const n=e.CapacitorCustomPlatform||null,a=e.Capacitor||{},i=a.Plugins=a.Plugins||{},s=()=>null!==n?n.name:(e=>{var t,n;return(null==e?void 0:e.androidBridge)?"android":(null===(n=null===(t=null==e?void 0:e.webkit)||void 0===t?void 0:t.messageHandlers)||void 0===n?void 0:n.bridge)?"ios":"web"})(e),r=e=>{var t;return null===(t=a.PluginHeaders)||void 0===t?void 0:t.find(t=>t.name===e)},o=new Map;return a.convertFileSrc||(a.convertFileSrc=e=>e),a.getPlatform=s,a.handleError=t=>e.console.error(t),a.isNativePlatform=()=>"web"!==s(),a.isPluginAvailable=e=>{const t=o.get(e);return!!(null==t?void 0:t.platforms.has(s()))||!!r(e)},a.registerPlugin=(e,l={})=>{const c=o.get(e);if(c)return console.warn(`Capacitor plugin "${e}" already registered. Cannot register plugins twice.`),c.proxy;const d=s(),u=r(e);let p;const h=i=>{let s;const r=(...r)=>{const o=(async()=>(!p&&d in l?p=p="function"==typeof l[d]?await l[d]():l[d]:null!==n&&!p&&"web"in l&&(p=p="function"==typeof l.web?await l.web():l.web),p))().then(n=>{const o=((n,i)=>{var s,r;if(!u){if(n)return null===(r=n[i])||void 0===r?void 0:r.bind(n);throw new ce(`"${e}" plugin is not implemented on ${d}`,t.Unimplemented)}{const t=null==u?void 0:u.methods.find(e=>i===e.name);if(t)return"promise"===t.rtype?t=>a.nativePromise(e,i.toString(),t):(t,n)=>a.nativeCallback(e,i.toString(),t,n);if(n)return null===(s=n[i])||void 0===s?void 0:s.bind(n)}})(n,i);if(o){const e=o(...r);return s=null==e?void 0:e.remove,e}throw new ce(`"${e}.${i}()" is not implemented on ${d}`,t.Unimplemented)});return"addListener"===i&&(o.remove=async()=>s()),o};return r.toString=()=>`${i.toString()}() { [capacitor code] }`,Object.defineProperty(r,"name",{value:i,writable:!1,configurable:!1}),r},f=h("addListener"),m=h("removeListener"),g=(e,t)=>{const n=f({eventName:e},t),a=async()=>{const a=await n;m({eventName:e,callbackId:a},t)},i=new Promise(e=>n.then(()=>e({remove:a})));return i.remove=async()=>{console.warn("Using addListener() without 'await' is deprecated."),await a()},i},v=new Proxy({},{get(e,t){switch(t){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return u?g:f;case"removeListener":return m;default:return h(t)}}});return i[e]=v,o.set(e,{name:e,proxy:v,platforms:new Set([...Object.keys(l),...u?[d]:[]])}),v},a.Exception=ce,a.DEBUG=!!a.DEBUG,a.isLoggingEnabled=!!a.isLoggingEnabled,a},ue=(e=>e.Capacitor=de(e))("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}),pe=ue.registerPlugin;class he{constructor(){this.listeners={},this.retainedEventArguments={},this.windowListeners={}}addListener(e,t){let n=!1;this.listeners[e]||(this.listeners[e]=[],n=!0),this.listeners[e].push(t);const a=this.windowListeners[e];return a&&!a.registered&&this.addWindowListener(a),n&&this.sendRetainedArgumentsForEvent(e),Promise.resolve({remove:async()=>this.removeListener(e,t)})}async removeAllListeners(){this.listeners={};for(const e in this.windowListeners)this.removeWindowListener(this.windowListeners[e]);this.windowListeners={}}notifyListeners(e,t,n){const a=this.listeners[e];if(a)a.forEach(e=>e(t));else if(n){let n=this.retainedEventArguments[e];n||(n=[]),n.push(t),this.retainedEventArguments[e]=n}}hasListeners(e){var t;return!!(null===(t=this.listeners[e])||void 0===t?void 0:t.length)}registerWindowListener(e,t){this.windowListeners[t]={registered:!1,windowEventName:e,pluginEventName:t,handler:e=>{this.notifyListeners(t,e)}}}unimplemented(e="not implemented"){return new ue.Exception(e,t.Unimplemented)}unavailable(e="not available"){return new ue.Exception(e,t.Unavailable)}async removeListener(e,t){const n=this.listeners[e];if(!n)return;const a=n.indexOf(t);this.listeners[e].splice(a,1),this.listeners[e].length||this.removeWindowListener(this.windowListeners[e])}addWindowListener(e){window.addEventListener(e.windowEventName,e.handler),e.registered=!0}removeWindowListener(e){e&&(window.removeEventListener(e.windowEventName,e.handler),e.registered=!1)}sendRetainedArgumentsForEvent(e){const t=this.retainedEventArguments[e];t&&(delete this.retainedEventArguments[e],t.forEach(t=>{this.notifyListeners(e,t)}))}}const fe=e=>encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),me=e=>e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class ge extends he{async getCookies(){const e=document.cookie,t={};return e.split(";").forEach(e=>{if(e.length<=0)return;let[n,a]=e.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");n=me(n).trim(),a=me(a).trim(),t[n]=a}),t}async setCookie(e){try{const t=fe(e.key),n=fe(e.value),a=e.expires?`; expires=${e.expires.replace("expires=","")}`:"",i=(e.path||"/").replace("path=",""),s=null!=e.url&&e.url.length>0?`domain=${e.url}`:"";document.cookie=`${t}=${n||""}${a}; path=${i}; ${s};`}catch(t){return Promise.reject(t)}}async deleteCookie(e){try{document.cookie=`${e.key}=; Max-Age=0`}catch(t){return Promise.reject(t)}}async clearCookies(){try{const e=document.cookie.split(";")||[];for(const t of e)document.cookie=t.replace(/^ +/,"").replace(/=.*/,`=;expires=${(new Date).toUTCString()};path=/`)}catch(e){return Promise.reject(e)}}async clearAllCookies(){try{await this.clearCookies()}catch(e){return Promise.reject(e)}}}pe("CapacitorCookies",{web:()=>new ge});const ve=(e,t={})=>{const n=Object.assign({method:e.method||"GET",headers:e.headers},t),a=((e={})=>{const t=Object.keys(e);return Object.keys(e).map(e=>e.toLocaleLowerCase()).reduce((n,a,i)=>(n[a]=e[t[i]],n),{})})(e.headers)["content-type"]||"";if("string"==typeof e.data)n.body=e.data;else if(a.includes("application/x-www-form-urlencoded")){const t=new URLSearchParams;for(const[n,a]of Object.entries(e.data||{}))t.set(n,a);n.body=t.toString()}else if(a.includes("multipart/form-data")||e.data instanceof FormData){const t=new FormData;if(e.data instanceof FormData)e.data.forEach((e,n)=>{t.append(n,e)});else for(const n of Object.keys(e.data))t.append(n,e.data[n]);n.body=t;const a=new Headers(n.headers);a.delete("content-type"),n.headers=a}else(a.includes("application/json")||"object"==typeof e.data)&&(n.body=JSON.stringify(e.data));return n};class be extends he{async request(e){const t=ve(e,e.webFetchExtra),n=((e,t=!0)=>e?Object.entries(e).reduce((e,n)=>{const[a,i]=n;let s,r;return Array.isArray(i)?(r="",i.forEach(e=>{s=t?encodeURIComponent(e):e,r+=`${a}=${s}&`}),r.slice(0,-1)):(s=t?encodeURIComponent(i):i,r=`${a}=${s}`),`${e}&${r}`},"").substr(1):null)(e.params,e.shouldEncodeUrlParams),a=n?`${e.url}?${n}`:e.url,i=await fetch(a,t),s=i.headers.get("content-type")||"";let r,o,{responseType:l="text"}=i.ok?e:{};switch(s.includes("application/json")&&(l="json"),l){case"arraybuffer":case"blob":o=await i.blob(),r=await(async e=>new Promise((t,n)=>{const a=new FileReader;a.onload=()=>{const e=a.result;t(e.indexOf(",")>=0?e.split(",")[1]:e)},a.onerror=e=>n(e),a.readAsDataURL(e)}))(o);break;case"json":r=await i.json();break;default:r=await i.text()}const c={};return i.headers.forEach((e,t)=>{c[t]=e}),{data:r,headers:c,status:i.status,url:i.url}}async get(e){return this.request(Object.assign(Object.assign({},e),{method:"GET"}))}async post(e){return this.request(Object.assign(Object.assign({},e),{method:"POST"}))}async put(e){return this.request(Object.assign(Object.assign({},e),{method:"PUT"}))}async patch(e){return this.request(Object.assign(Object.assign({},e),{method:"PATCH"}))}async delete(e){return this.request(Object.assign(Object.assign({},e),{method:"DELETE"}))}}var ye,we,Se,_e,Ee;pe("CapacitorHttp",{web:()=>new be}),function(e){e.Dark="DARK",e.Light="LIGHT",e.Default="DEFAULT"}(ye||(ye={})),function(e){e.StatusBar="StatusBar",e.NavigationBar="NavigationBar"}(we||(we={}));class Ce extends he{async setStyle(){this.unavailable("not available for web")}async setAnimation(){this.unavailable("not available for web")}async show(){this.unavailable("not available for web")}async hide(){this.unavailable("not available for web")}}pe("SystemBars",{web:()=>new Ce}),function(e){e.Prompt="PROMPT",e.Camera="CAMERA",e.Photos="PHOTOS"}(Se||(Se={})),function(e){e.Rear="REAR",e.Front="FRONT"}(_e||(_e={})),function(e){e.Uri="uri",e.Base64="base64",e.DataUrl="dataUrl"}(Ee||(Ee={}));class ke extends he{async getPhoto(e){return new Promise(async(t,n)=>{if(e.webUseInput||e.source===Se.Photos)this.fileInputExperience(e,t,n);else if(e.source===Se.Prompt){let a=document.querySelector("pwa-action-sheet");a||(a=document.createElement("pwa-action-sheet"),document.body.appendChild(a)),a.header=e.promptLabelHeader||"Photo",a.cancelable=!1,a.options=[{title:e.promptLabelPhoto||"From Photos"},{title:e.promptLabelPicture||"Take Picture"}],a.addEventListener("onSelection",async a=>{0===a.detail?this.fileInputExperience(e,t,n):this.cameraExperience(e,t,n)})}else this.cameraExperience(e,t,n)})}async pickImages(e){return new Promise(async(e,t)=>{this.multipleFileInputExperience(e,t)})}async cameraExperience(e,t,n){if(customElements.get("pwa-camera-modal")){const i=document.createElement("pwa-camera-modal");i.facingMode=e.direction===_e.Front?"user":"environment",document.body.appendChild(i);try{await i.componentOnReady(),i.addEventListener("onPhoto",async a=>{const s=a.detail;null===s?n(new ce("User cancelled photos app")):s instanceof Error?n(s):t(await this._getCameraPhoto(s,e)),i.dismiss(),document.body.removeChild(i)}),i.present()}catch(a){this.fileInputExperience(e,t,n)}}else console.error("Unable to load PWA Element 'pwa-camera-modal'. See the docs: https://capacitorjs.com/docs/web/pwa-elements."),this.fileInputExperience(e,t,n)}fileInputExperience(e,t,n){let a=document.querySelector("#_capacitor-camera-input");const i=()=>{var e;null===(e=a.parentNode)||void 0===e||e.removeChild(a)};a||(a=document.createElement("input"),a.id="_capacitor-camera-input",a.type="file",a.hidden=!0,document.body.appendChild(a),a.addEventListener("change",n=>{const s=a.files[0];let r="jpeg";if("image/png"===s.type?r="png":"image/gif"===s.type&&(r="gif"),"dataUrl"===e.resultType||"base64"===e.resultType){const n=new FileReader;n.addEventListener("load",()=>{if("dataUrl"===e.resultType)t({dataUrl:n.result,format:r});else if("base64"===e.resultType){const e=n.result.split(",")[1];t({base64String:e,format:r})}i()}),n.readAsDataURL(s)}else t({webPath:URL.createObjectURL(s),format:r}),i()}),a.addEventListener("cancel",e=>{n(new ce("User cancelled photos app")),i()})),a.accept="image/*",a.capture=!0,e.source===Se.Photos||e.source===Se.Prompt?a.removeAttribute("capture"):e.direction===_e.Front?a.capture="user":e.direction===_e.Rear&&(a.capture="environment"),a.click()}multipleFileInputExperience(e,t){let n=document.querySelector("#_capacitor-camera-input-multiple");const a=()=>{var e;null===(e=n.parentNode)||void 0===e||e.removeChild(n)};n||(n=document.createElement("input"),n.id="_capacitor-camera-input-multiple",n.type="file",n.hidden=!0,n.multiple=!0,document.body.appendChild(n),n.addEventListener("change",t=>{const i=[];for(let e=0;e<n.files.length;e++){const t=n.files[e];let a="jpeg";"image/png"===t.type?a="png":"image/gif"===t.type&&(a="gif"),i.push({webPath:URL.createObjectURL(t),format:a})}e({photos:i}),a()}),n.addEventListener("cancel",e=>{t(new ce("User cancelled photos app")),a()})),n.accept="image/*",n.click()}_getCameraPhoto(e,t){return new Promise((n,a)=>{const i=new FileReader,s=e.type.split("/")[1];"uri"===t.resultType?n({webPath:URL.createObjectURL(e),format:s,saved:!1}):(i.readAsDataURL(e),i.onloadend=()=>{const e=i.result;"dataUrl"===t.resultType?n({dataUrl:e,format:s,saved:!1}):n({base64String:e.split(",")[1],format:s,saved:!1})},i.onerror=e=>{a(e)})})}async checkPermissions(){if("undefined"==typeof navigator||!navigator.permissions)throw this.unavailable("Permissions API not available in this browser");try{return{camera:(await window.navigator.permissions.query({name:"camera"})).state,photos:"granted"}}catch(e){throw this.unavailable("Camera permissions are not available in this browser")}}async requestPermissions(){throw this.unimplemented("Not implemented on web.")}async pickLimitedLibraryPhotos(){throw this.unavailable("Not implemented on web.")}async getLimitedLibraryPhotos(){throw this.unavailable("Not implemented on web.")}}const Ie=pe("Camera",{web:()=>new ke});class Oe{static async fromFile(e){return{base64:await new Promise((t,n)=>{const a=new FileReader;a.onloadend=()=>{const e=String(a.result||"").split(",")[1];if(!e)return n(new Error("Invalid base64 data"));t(e)},a.onerror=()=>n(a.error),a.readAsDataURL(e)}),mimeType:e.type||"image/jpeg"}}static async fromCamera(){const e=await Ie.getPhoto({source:Se.Prompt,resultType:Ee.Base64,quality:85});if(!e.base64String)throw new Error("No base64 from camera");return{base64:e.base64String,mimeType:e.format?`image/${e.format}`:"image/jpeg"}}}
/**
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
             */var Ae={};
/**
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
             */const xe=function(e){const t=[];let n=0;for(let a=0;a<e.length;a++){let i=e.charCodeAt(a);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&a+1<e.length&&56320==(64512&e.charCodeAt(a+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++a)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},Pe={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,a=[];for(let i=0;i<e.length;i+=3){const t=e[i],s=i+1<e.length,r=s?e[i+1]:0,o=i+2<e.length,l=o?e[i+2]:0,c=t>>2,d=(3&t)<<4|r>>4;let u=(15&r)<<2|l>>6,p=63&l;o||(p=64,s||(u=64)),a.push(n[c],n[d],n[u],n[p])}return a.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(xe(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,a=0;for(;n<e.length;){const i=e[n++];if(i<128)t[a++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[a++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[a++]=String.fromCharCode(55296+(s>>10)),t[a++]=String.fromCharCode(56320+(1023&s))}else{const s=e[n++],r=e[n++];t[a++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&r)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,a=[];for(let i=0;i<e.length;){const t=n[e.charAt(i++)],s=i<e.length?n[e.charAt(i)]:0;++i;const r=i<e.length?n[e.charAt(i)]:64;++i;const o=i<e.length?n[e.charAt(i)]:64;if(++i,null==t||null==s||null==r||null==o)throw new De;const l=t<<2|s>>4;if(a.push(l),64!==r){const e=s<<4&240|r>>2;if(a.push(e),64!==o){const e=r<<6&192|o;a.push(e)}}}return a},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class De extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Le=function(e){return function(e){const t=xe(e);return Pe.encodeByteArray(t,!0)}(e).replace(/\./g,"")},Te=()=>
/**
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
             */
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw new Error("Unable to locate global object.")}
/**
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
             */().__FIREBASE_DEFAULTS__,Re=()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const t=e&&function(e){try{return Pe.decodeString(e,!0)}catch(n){console.error("base64Decode failed: ",n)}return null}(e[1]);return t&&JSON.parse(t)},$e=()=>{try{return Te()||(()=>{if("undefined"==typeof process)return;const e=Ae.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0})()||Re()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},Me=()=>{var e;return null===(e=$e())||void 0===e?void 0:e.config};
/**
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
             */
class Ne{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}class je extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,je.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Be.prototype.create)}}class Be{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},a=`${this.service}/${e}`,i=this.errors[e],s=i?function(e,t){return e.replace(Fe,(e,n)=>{const a=t[n];return null!=a?String(a):`<${n}?>`})}(i,n):"Error",r=`${this.serviceName}: ${s} (${a}).`;return new je(a,r,n)}}const Fe=/\{\$([^}]+)}/g;function Ue(e,t){if(e===t)return!0;const n=Object.keys(e),a=Object.keys(t);for(const i of n){if(!a.includes(i))return!1;const n=e[i],s=t[i];if(ze(n)&&ze(s)){if(!Ue(n,s))return!1}else if(n!==s)return!1}for(const i of a)if(!n.includes(i))return!1;return!0}function ze(e){return null!==e&&"object"==typeof e}
/**
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
             */class He{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
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
             */const qe="[DEFAULT]";
/**
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
             */class Ve{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new Ne;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),a=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(a)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(a)return null;throw i}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
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
             */(e))try{this.getOrInitializeService({instanceIdentifier:qe})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:a});n.resolve(e)}catch(t){}}}}clearInstance(e=qe){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=qe){return this.instances.has(e)}getOptions(e=qe){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,s]of this.instancesDeferred.entries())n===this.normalizeInstanceIdentifier(i)&&s.resolve(a);return a}onInit(e,t){var n;const a=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(a))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(a,i);const s=this.instances.get(a);return s&&e(s,a),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const a of n)try{a(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(a=e,a===qe?void 0:a),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}var a;return n||null}normalizeInstanceIdentifier(e=qe){return this.component?this.component.multipleInstances?e:qe:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class We{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Ve(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
/**
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
             */var Je;!function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"}(Je||(Je={}));const Ge={debug:Je.DEBUG,verbose:Je.VERBOSE,info:Je.INFO,warn:Je.WARN,error:Je.ERROR,silent:Je.SILENT},Ke=Je.INFO,Ye={[Je.DEBUG]:"log",[Je.VERBOSE]:"log",[Je.INFO]:"info",[Je.WARN]:"warn",[Je.ERROR]:"error"},Xe=(e,t,...n)=>{if(t<e.logLevel)return;const a=(new Date).toISOString(),i=Ye[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${a}]  ${e.name}:`,...n)};class Ze{constructor(e){this.name=e,this._logLevel=Ke,this._logHandler=Xe,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Je))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?Ge[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Je.DEBUG,...e),this._logHandler(this,Je.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Je.VERBOSE,...e),this._logHandler(this,Je.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Je.INFO,...e),this._logHandler(this,Je.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Je.WARN,...e),this._logHandler(this,Je.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Je.ERROR,...e),this._logHandler(this,Je.ERROR,...e)}}let Qe,et;const tt=new WeakMap,nt=new WeakMap,at=new WeakMap,it=new WeakMap,st=new WeakMap;let rt={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return nt.get(e);if("objectStoreNames"===t)return e.objectStoreNames||at.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ct(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function ot(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(et||(et=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(dt(this),t),ct(tt.get(this))}:function(...t){return ct(e.apply(dt(this),t))}:function(t,...n){const a=e.call(dt(this),t,...n);return at.set(a,t.sort?t.sort():[t]),ct(a)}}function lt(e){return"function"==typeof e?ot(e):(e instanceof IDBTransaction&&function(e){if(nt.has(e))return;const t=new Promise((t,n)=>{const a=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),a()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),a()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)});nt.set(e,t)}(e),t=e,(Qe||(Qe=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some(e=>t instanceof e)?new Proxy(e,rt):e);var t}function ct(e){if(e instanceof IDBRequest)return function(e){const t=new Promise((t,n)=>{const a=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(ct(e.result)),a()},s=()=>{n(e.error),a()};e.addEventListener("success",i),e.addEventListener("error",s)});return t.then(t=>{t instanceof IDBCursor&&tt.set(t,e)}).catch(()=>{}),st.set(t,e),t}(e);if(it.has(e))return it.get(e);const t=lt(e);return t!==e&&(it.set(e,t),st.set(t,e)),t}const dt=e=>st.get(e),ut=["get","getKey","getAll","getAllKeys","count"],pt=["put","add","delete","clear"],ht=new Map;function ft(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(ht.get(t))return ht.get(t);const n=t.replace(/FromIndex$/,""),a=t!==n,i=pt.includes(n);if(!(n in(a?IDBIndex:IDBObjectStore).prototype)||!i&&!ut.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,i?"readwrite":"readonly");let r=s.store;return a&&(r=r.index(t.shift())),(await Promise.all([r[n](...t),i&&s.done]))[0]};return ht.set(t,s),s}var mt;mt=rt,rt={...mt,get:(e,t,n)=>ft(e,t)||mt.get(e,t,n),has:(e,t)=>!!ft(e,t)||mt.has(e,t)};
/**
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
             */
class gt{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null}).filter(e=>e).join(" ")}}const vt="@firebase/app",bt="0.14.8",yt=new Ze("@firebase/app"),wt="@firebase/app-compat",St="@firebase/analytics-compat",_t="@firebase/analytics",Et="@firebase/app-check-compat",Ct="@firebase/app-check",kt="@firebase/auth",It="@firebase/auth-compat",Ot="@firebase/database",At="@firebase/data-connect",xt="@firebase/database-compat",Pt="@firebase/functions",Dt="@firebase/functions-compat",Lt="@firebase/installations",Tt="@firebase/installations-compat",Rt="@firebase/messaging",$t="@firebase/messaging-compat",Mt="@firebase/performance",Nt="@firebase/performance-compat",jt="@firebase/remote-config",Bt="@firebase/remote-config-compat",Ft="@firebase/storage",Ut="@firebase/storage-compat",zt="@firebase/firestore",Ht="@firebase/ai",qt="@firebase/firestore-compat",Vt="firebase",Wt="[DEFAULT]",Jt={[vt]:"fire-core",[wt]:"fire-core-compat",[_t]:"fire-analytics",[St]:"fire-analytics-compat",[Ct]:"fire-app-check",[Et]:"fire-app-check-compat",[kt]:"fire-auth",[It]:"fire-auth-compat",[Ot]:"fire-rtdb",[At]:"fire-data-connect",[xt]:"fire-rtdb-compat",[Pt]:"fire-fn",[Dt]:"fire-fn-compat",[Lt]:"fire-iid",[Tt]:"fire-iid-compat",[Rt]:"fire-fcm",[$t]:"fire-fcm-compat",[Mt]:"fire-perf",[Nt]:"fire-perf-compat",[jt]:"fire-rc",[Bt]:"fire-rc-compat",[Ft]:"fire-gcs",[Ut]:"fire-gcs-compat",[zt]:"fire-fst",[qt]:"fire-fst-compat",[Ht]:"fire-vertex","fire-js":"fire-js",[Vt]:"fire-js-all"},Gt=new Map,Kt=new Map,Yt=new Map;function Xt(e,t){try{e.container.addComponent(t)}catch(n){yt.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Zt(e){const t=e.name;if(Yt.has(t))return yt.debug(`There were multiple attempts to register component ${t}.`),!1;Yt.set(t,e);for(const n of Gt.values())Xt(n,e);for(const n of Kt.values())Xt(n,e);return!0}
/**
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
             */
const Qt=new Be("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."});
/**
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
             */
class en{constructor(e,t,n){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new He("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Qt.create("app-deleted",{appName:this._name})}}function tn(e,t={}){let n=e;"object"!=typeof t&&(t={name:t});const a={name:Wt,automaticDataCollectionEnabled:!0,...t},i=a.name;if("string"!=typeof i||!i)throw Qt.create("bad-app-name",{appName:String(i)});if(n||(n=Me()),!n)throw Qt.create("no-options");const s=Gt.get(i);if(s){if(Ue(n,s.options)&&Ue(a,s.config))return s;throw Qt.create("duplicate-app",{appName:i})}const r=new We(i);for(const l of Yt.values())r.addComponent(l);const o=new en(n,a,r);return Gt.set(i,o),o}function nn(e,t,n){var a;let i=null!==(a=Jt[e])&&void 0!==a?a:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),r=t.match(/\s|\//);if(s||r){const e=[`Unable to register library "${i}" with version "${t}":`];return s&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&r&&e.push("and"),r&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void yt.warn(e.join(" "))}Zt(new He(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}
/**
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
             */const an="firebase-heartbeat-store";let sn=null;function rn(){return sn||(sn=function(e,t,{blocked:n,upgrade:a,blocking:i,terminated:s}={}){const r=indexedDB.open(e,t),o=ct(r);return a&&r.addEventListener("upgradeneeded",e=>{a(ct(r.result),e.oldVersion,e.newVersion,ct(r.transaction),e)}),n&&r.addEventListener("blocked",e=>n(e.oldVersion,e.newVersion,e)),o.then(e=>{s&&e.addEventListener("close",()=>s()),i&&e.addEventListener("versionchange",e=>i(e.oldVersion,e.newVersion,e))}).catch(()=>{}),o}("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)try{e.createObjectStore(an)}catch(n){console.warn(n)}}}).catch(e=>{throw Qt.create("idb-open",{originalErrorMessage:e.message})})),sn}async function on(e,t){try{const n=(await rn()).transaction(an,"readwrite"),a=n.objectStore(an);await a.put(t,ln(e)),await n.done}catch(n){if(n instanceof je)yt.warn(n.message);else{const e=Qt.create("idb-set",{originalErrorMessage:null==n?void 0:n.message});yt.warn(e.message)}}}function ln(e){return`${e.name}!${e.options.appId}`}
/**
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
             */class cn{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new un(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){try{var e;const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=dn();var t;if(null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)&&(this._heartbeatsCache=await this._heartbeatsCachePromise,null==(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)))return;if(this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(e=>e.date===a))return;if(this._heartbeatsCache.heartbeats.push({date:a,agent:n}),this._heartbeatsCache.heartbeats.length>30){const e=function(e){if(0===e.length)return-1;let t=0,n=e[0].date;for(let a=1;a<e.length;a++)e[a].date<n&&(n=e[a].date,t=a);return t}
/**
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
             */(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(e,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(n){yt.warn(n)}}async getHeartbeatsHeader(){try{var e;if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)||0===this._heartbeatsCache.heartbeats.length)return"";const t=dn(),{heartbeatsToSend:n,unsentEntries:a}=function(e,t=1024){const n=[];let a=e.slice();for(const i of e){const e=n.find(e=>e.agent===i.agent);if(e){if(e.dates.push(i.date),pn(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),pn(n)>t){n.pop();break}a=a.slice(1)}return{heartbeatsToSend:n,unsentEntries:a}}(this._heartbeatsCache.heartbeats),i=Le(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return yt.warn(t),""}}}function dn(){return(new Date).toISOString().substring(0,10)}class un{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!function(){try{return"object"==typeof indexedDB}catch(e){return!1}}()&&new Promise((e,t)=>{try{let n=!0;const a="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(a);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(a),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}}).then(()=>!0).catch(()=>!1)}async read(){if(await this._canUseIndexedDBPromise){const e=await async function(e){try{const t=(await rn()).transaction(an),n=await t.objectStore(an).get(ln(e));return await t.done,n}catch(t){if(t instanceof je)yt.warn(t.message);else{const e=Qt.create("idb-get",{originalErrorMessage:null==t?void 0:t.message});yt.warn(e.message)}}}(this.app);return null!=e&&e.heartbeats?e:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){var t;const n=await this.read();return on(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){if(await this._canUseIndexedDBPromise){var t;const n=await this.read();return on(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function pn(e){return Le(JSON.stringify({version:2,heartbeats:e})).length}var hn;hn="",Zt(new He("platform-logger",e=>new gt(e),"PRIVATE")),Zt(new He("heartbeat",e=>new cn(e),"PRIVATE")),nn(vt,bt,hn),nn(vt,bt,"esm2020"),nn("fire-js","");var fn="@firebase/ai",mn="2.8.0";
/**
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
             */
const gn="AI",vn="us-central1",bn="v1beta",yn=mn;
/**
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
             */
class wn extends je{constructor(e,t,n){const a=`${gn}: ${t} (${gn}/${e})`;super(e,a),this.code=e,this.customErrorData=n,Error.captureStackTrace&&Error.captureStackTrace(this,wn),Object.setPrototypeOf(this,wn.prototype),this.toString=()=>a}}
/**
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
             */const Sn=["user","model","function","system"],_n="HARM_SEVERITY_UNSUPPORTED",En="SAFETY",Cn="RECITATION",kn="prefer_on_device",In="only_on_device",On="only_in_cloud",An="prefer_in_cloud",xn="on_device",Pn="in_cloud",Dn="error",Ln="request-error",Tn="response-error",Rn="fetch-error",$n="invalid-content",Mn="api-not-enabled",Nn="invalid-schema",jn="no-api-key",Bn="no-app-id",Fn="no-model",Un="no-project-id",zn="parse-failed",Hn="unsupported",qn="string",Vn="number",Wn="integer",Jn="boolean",Gn="array",Kn="object",Yn="VERTEX_AI",Xn="GOOGLE_AI";
/**
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
             */
class Zn{constructor(e){this.backendType=e}}class Qn extends Zn{constructor(){super(Xn)}_getModelPath(e,t){return`/${bn}/projects/${e}/${t}`}_getTemplatePath(e,t){return`/${bn}/projects/${e}/templates/${t}`}}class ea extends Zn{constructor(e=vn){super(Yn),this.location=e||vn}_getModelPath(e,t){return`/${bn}/projects/${e}/locations/${this.location}/${t}`}_getTemplatePath(e,t){return`/${bn}/projects/${e}/locations/${this.location}/templates/${t}`}}
/**
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
             */
/**
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
             */
const ta=new Ze("@firebase/vertexai");var na;!function(e){e.UNAVAILABLE="unavailable",e.DOWNLOADABLE="downloadable",e.DOWNLOADING="downloading",e.AVAILABLE="available"}(na||(na={}));
/**
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
             */
const aa=[{type:"image"}];class ia{constructor(e,t,n){this.languageModelProvider=e,this.mode=t,this.isDownloading=!1,this.onDeviceParams={createOptions:{expectedInputs:aa}},n&&(this.onDeviceParams=n,this.onDeviceParams.createOptions?this.onDeviceParams.createOptions.expectedInputs||(this.onDeviceParams.createOptions.expectedInputs=aa):this.onDeviceParams.createOptions={expectedInputs:aa})}async isAvailable(e){if(!this.mode)return ta.debug("On-device inference unavailable because mode is undefined."),!1;if(this.mode===On)return ta.debug('On-device inference unavailable because mode is "only_in_cloud".'),!1;const t=await this.downloadIfAvailable();if(this.mode===In){if(t===na.UNAVAILABLE)throw new wn(Mn,"Local LanguageModel API not available in this environment.");return t!==na.DOWNLOADABLE&&t!==na.DOWNLOADING||(ta.debug("Waiting for download of LanguageModel to complete."),await this.downloadPromise,!0)}return t!==na.AVAILABLE?(ta.debug(`On-device inference unavailable because availability is "${t}".`),!1):!!ia.isOnDeviceRequest(e)||(ta.debug("On-device inference unavailable because request is incompatible."),!1)}async generateContent(e){const t=await this.createSession(),n=await Promise.all(e.contents.map(ia.toLanguageModelMessage)),a=await t.prompt(n,this.onDeviceParams.promptOptions);return ia.toResponse(a)}async generateContentStream(e){const t=await this.createSession(),n=await Promise.all(e.contents.map(ia.toLanguageModelMessage)),a=t.promptStreaming(n,this.onDeviceParams.promptOptions);return ia.toStreamResponse(a)}async countTokens(e){throw new wn(Ln,"Count Tokens is not yet available for on-device model.")}static isOnDeviceRequest(e){if(0===e.contents.length)return ta.debug("Empty prompt rejected for on-device inference."),!1;for(const t of e.contents){if("function"===t.role)return ta.debug('"Function" role rejected for on-device inference.'),!1;for(const e of t.parts)if(e.inlineData&&-1===ia.SUPPORTED_MIME_TYPES.indexOf(e.inlineData.mimeType))return ta.debug(`Unsupported mime type "${e.inlineData.mimeType}" rejected for on-device inference.`),!1}return!0}async downloadIfAvailable(){var e;const t=await(null===(e=this.languageModelProvider)||void 0===e?void 0:e.availability(this.onDeviceParams.createOptions));return t===na.DOWNLOADABLE&&this.download(),t}download(){var e;this.isDownloading||(this.isDownloading=!0,this.downloadPromise=null===(e=this.languageModelProvider)||void 0===e?void 0:e.create(this.onDeviceParams.createOptions).finally(()=>{this.isDownloading=!1}))}static async toLanguageModelMessage(e){const t=await Promise.all(e.parts.map(ia.toLanguageModelMessageContent));return{role:ia.toLanguageModelMessageRole(e.role),content:t}}static async toLanguageModelMessageContent(e){if(e.text)return{type:"text",value:e.text};if(e.inlineData){const t=await fetch(`data:${e.inlineData.mimeType};base64,${e.inlineData.data}`),n=await t.blob();return{type:"image",value:await createImageBitmap(n)}}throw new wn(Ln,"Processing of this Part type is not currently supported.")}static toLanguageModelMessageRole(e){return"model"===e?"assistant":"user"}async createSession(){if(!this.languageModelProvider)throw new wn(Hn,"Chrome AI requested for unsupported browser version.");const e=await this.languageModelProvider.create(this.onDeviceParams.createOptions);return this.oldSession&&this.oldSession.destroy(),this.oldSession=e,e}static toResponse(e){return{json:async()=>({candidates:[{content:{parts:[{text:e}]}}]})}}static toStreamResponse(e){const t=new TextEncoder;return{body:e.pipeThrough(new TransformStream({transform(e,n){const a=JSON.stringify({candidates:[{content:{role:"model",parts:[{text:e}]}}]});n.enqueue(t.encode(`data: ${a}\n\n`))}}))}}}function sa(e,t,n){if(void 0!==t&&e)return new ia(t.LanguageModel,e,n)}
/**
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
             */ia.SUPPORTED_MIME_TYPES=["image/jpeg","image/png"];class ra{constructor(e,t,n,a,i){this.app=e,this.backend=t,this.chromeAdapterFactory=i;const s=null==a?void 0:a.getImmediate({optional:!0}),r=null==n?void 0:n.getImmediate({optional:!0});this.auth=r||null,this.appCheck=s||null,this.location=t instanceof ea?t.location:""}_delete(){return Promise.resolve()}set options(e){this._options=e}get options(){return this._options}}
/**
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
             */function oa(e,{instanceIdentifier:t}){if(!t)throw new wn(Dn,"AIService instance identifier is undefined.");const n=function(e){const t=e.split("/");if(t[0]!==gn)throw new wn(Dn,`Invalid instance identifier, unknown prefix '${t[0]}'`);switch(t[1]){case"vertexai":const n=t[2];if(!n)throw new wn(Dn,`Invalid instance identifier, unknown location '${e}'`);return new ea(n);case"googleai":return new Qn;default:throw new wn(Dn,`Invalid instance identifier string: '${e}'`)}}(t),a=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return new ra(a,n,i,s,sa)}
/**
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
             */
/**
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
             */
class la{constructor(e,t){this._apiSettings=function(e){var t,n,a;if(null===(t=e.app)||void 0===t||null===(t=t.options)||void 0===t||!t.apiKey)throw new wn(jn,'The "apiKey" field is empty in the local Firebase config. Firebase AI requires this field to contain a valid API key.');if(null===(n=e.app)||void 0===n||null===(n=n.options)||void 0===n||!n.projectId)throw new wn(Un,'The "projectId" field is empty in the local Firebase config. Firebase AI requires this field to contain a valid project ID.');if(null===(a=e.app)||void 0===a||null===(a=a.options)||void 0===a||!a.appId)throw new wn(Bn,'The "appId" field is empty in the local Firebase config. Firebase AI requires this field to contain a valid app ID.');const i={apiKey:e.app.options.apiKey,project:e.app.options.projectId,appId:e.app.options.appId,automaticDataCollectionEnabled:e.app.automaticDataCollectionEnabled,location:e.location,backend:e.backend};if(null!=(r=e.app)&&void 0!==r.settings&&e.app.settings.appCheckToken){const t=e.app.settings.appCheckToken;i.getAppCheckToken=()=>Promise.resolve({token:t})}else if(e.appCheck){var s;null!==(s=e.options)&&void 0!==s&&s.useLimitedUseAppCheckTokens?i.getAppCheckToken=()=>e.appCheck.getLimitedUseToken():i.getAppCheckToken=()=>e.appCheck.getToken()}var r;return e.auth&&(i.getAuthToken=()=>e.auth.getToken()),i}(e),this.model=la.normalizeModelName(t,this._apiSettings.backend.backendType)}static normalizeModelName(e,t){return t===Xn?la.normalizeGoogleAIModelName(e):la.normalizeVertexAIModelName(e)}static normalizeGoogleAIModelName(e){return`models/${e}`}static normalizeVertexAIModelName(e){let t;return t=e.includes("/")?e.startsWith("models/")?`publishers/google/${e}`:e:`publishers/google/models/${e}`,t}}
/**
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
             */const ca="AbortError";class da{constructor(e){this.params=e}toString(){const e=new URL(this.baseUrl);return e.pathname=this.pathname,e.search=this.queryParams.toString(),e.toString()}get pathname(){return this.params.templateId?`${this.params.apiSettings.backend._getTemplatePath(this.params.apiSettings.project,this.params.templateId)}:${this.params.task}`:`${this.params.apiSettings.backend._getModelPath(this.params.apiSettings.project,this.params.model)}:${this.params.task}`}get baseUrl(){var e,t;return null!==(e=null===(t=this.params.singleRequestOptions)||void 0===t?void 0:t.baseUrl)&&void 0!==e?e:"https://firebasevertexai.googleapis.com"}get queryParams(){const e=new URLSearchParams;return this.params.stream&&e.set("alt","sse"),e}}async function ua(e){const t=new Headers;if(t.append("Content-Type","application/json"),t.append("x-goog-api-client",function(e){const t=[];return t.push(`gl-js/${yn}`),t.push(`fire/${yn}`),e.params.apiSettings.inferenceMode!==kn&&e.params.apiSettings.inferenceMode!==An||t.push("hybrid"),t.join(" ")}(e)),t.append("x-goog-api-key",e.params.apiSettings.apiKey),e.params.apiSettings.automaticDataCollectionEnabled&&t.append("X-Firebase-Appid",e.params.apiSettings.appId),e.params.apiSettings.getAppCheckToken){const n=await e.params.apiSettings.getAppCheckToken();n&&(t.append("X-Firebase-AppCheck",n.token),n.error&&ta.warn(`Unable to obtain a valid App Check token: ${n.error.message}`))}if(e.params.apiSettings.getAuthToken){const n=await e.params.apiSettings.getAuthToken();n&&t.append("Authorization",`Firebase ${n.accessToken}`)}return t}async function pa(e,t){var n,a;const i=new da(e);let s;const r=null===(n=e.singleRequestOptions)||void 0===n?void 0:n.signal,o=null!=(null===(a=e.singleRequestOptions)||void 0===a?void 0:a.timeout)&&e.singleRequestOptions.timeout>=0?e.singleRequestOptions.timeout:18e4,l=new AbortController,c=setTimeout(()=>{l.abort(new DOMException("Timeout has expired.",ca)),ta.debug(`Aborting request to ${i} due to timeout (${o}ms)`)},o),d=AbortSignal.any(r?[r,l.signal]:[l.signal]);var u;if(r&&r.aborted)throw clearTimeout(c),new DOMException(null!==(u=r.reason)&&void 0!==u?u:"Aborted externally before fetch",ca);try{const e={method:"POST",headers:await ua(i),signal:d,body:t};if(s=await fetch(i.toString(),e),!s.ok){let e,t="";try{const n=await s.json();t=n.error.message,n.error.details&&(t+=` ${JSON.stringify(n.error.details)}`,e=n.error.details)}catch(p){}if(403===s.status&&e&&e.some(e=>"SERVICE_DISABLED"===e.reason)&&e.some(e=>{var t;return null===(t=e.links)||void 0===t||null===(t=t[0])||void 0===t?void 0:t.description.includes("Google developers console API activation")}))throw new wn(Mn,`The Firebase AI SDK requires the Firebase AI API ('firebasevertexai.googleapis.com') to be enabled in your Firebase project. Enable this API by visiting the Firebase Console at https://console.firebase.google.com/project/${i.params.apiSettings.project}/ailogic/ and clicking "Get started". If you enabled this API recently, wait a few minutes for the action to propagate to our systems and then retry.`,{status:s.status,statusText:s.statusText,errorDetails:e});throw new wn(Rn,`Error fetching from ${i}: [${s.status} ${s.statusText}] ${t}`,{status:s.status,statusText:s.statusText,errorDetails:e})}}catch(p){let e=p;throw p.code!==Rn&&p.code!==Mn&&p instanceof Error&&p.name!==ca&&(e=new wn(Dn,`Error fetching from ${i.toString()}: ${p.message}`),e.stack=p.stack),e}finally{clearTimeout(c)}return s}
/**
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
             */function ha(e){if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&ta.warn(`This response had ${e.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),va(e.candidates[0]))throw new wn(Tn,`Response error: ${ba(e)}. Response body stored in error.response`,{response:e});return!0}return!1}function fa(e,t=Pn){e.candidates&&!e.candidates[0].hasOwnProperty("index")&&(e.candidates[0].index=0);const n=function(e){return e.text=()=>{if(ha(e))return ma(e,e=>!e.thought);if(e.promptFeedback)throw new wn(Tn,`Text not available. ${ba(e)}`,{response:e});return""},e.thoughtSummary=()=>{if(ha(e)){const t=ma(e,e=>!!e.thought);return""===t?void 0:t}if(e.promptFeedback)throw new wn(Tn,`Thought summary not available. ${ba(e)}`,{response:e})},e.inlineDataParts=()=>{if(ha(e))return function(e){var t;const n=[];if(null!==(t=e.candidates)&&void 0!==t&&null!==(t=t[0].content)&&void 0!==t&&t.parts)for(const i of null===(a=e.candidates)||void 0===a||null===(a=a[0].content)||void 0===a?void 0:a.parts){var a;i.inlineData&&n.push(i)}return n.length>0?n:void 0}(e);if(e.promptFeedback)throw new wn(Tn,`Data not available. ${ba(e)}`,{response:e})},e.functionCalls=()=>{if(ha(e))return function(e){var t;const n=[];if(null!==(t=e.candidates)&&void 0!==t&&null!==(t=t[0].content)&&void 0!==t&&t.parts)for(const i of null===(a=e.candidates)||void 0===a||null===(a=a[0].content)||void 0===a?void 0:a.parts){var a;i.functionCall&&n.push(i.functionCall)}return n.length>0?n:void 0}(e);if(e.promptFeedback)throw new wn(Tn,`Function call not available. ${ba(e)}`,{response:e})},e}(e);return n.inferenceSource=t,n}function ma(e,t){var n;const a=[];if(null!==(n=e.candidates)&&void 0!==n&&null!==(n=n[0].content)&&void 0!==n&&n.parts)for(const s of null===(i=e.candidates)||void 0===i||null===(i=i[0].content)||void 0===i?void 0:i.parts){var i;s.text&&t(s)&&a.push(s.text)}return a.length>0?a.join(""):""}const ga=[Cn,En];function va(e){return!!e.finishReason&&ga.some(t=>t===e.finishReason)}function ba(e){var t;let n="";var a,i;if(e.candidates&&0!==e.candidates.length||!e.promptFeedback){if(null!==(t=e.candidates)&&void 0!==t&&t[0]){const t=e.candidates[0];va(t)&&(n+=`Candidate was blocked due to ${t.finishReason}`,t.finishMessage&&(n+=`: ${t.finishMessage}`))}}else n+="Response was blocked",null!==(a=e.promptFeedback)&&void 0!==a&&a.blockReason&&(n+=` due to ${e.promptFeedback.blockReason}`),null!==(i=e.promptFeedback)&&void 0!==i&&i.blockReasonMessage&&(n+=`: ${e.promptFeedback.blockReasonMessage}`);return n}
/**
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
             */function ya(e){var t,n;if(null===(t=e.safetySettings)||void 0===t||t.forEach(e=>{if(e.method)throw new wn(Hn,"SafetySetting.method is not supported in the the Gemini Developer API. Please remove this property.")}),null!==(n=e.generationConfig)&&void 0!==n&&n.topK){const t=Math.round(e.generationConfig.topK);t!==e.generationConfig.topK&&(ta.warn("topK in GenerationConfig has been rounded to the nearest integer to match the format for requests to the Gemini Developer API."),e.generationConfig.topK=t)}return e}function wa(e){return{candidates:e.candidates?Sa(e.candidates):void 0,prompt:e.promptFeedback?_a(e.promptFeedback):void 0,usageMetadata:e.usageMetadata}}function Sa(e){const t=[];let n;return t&&e.forEach(e=>{var a;let i;if(e.citationMetadata&&(i={citations:e.citationMetadata.citationSources}),e.safetyRatings&&(n=e.safetyRatings.map(e=>{var t,n,a;return{...e,severity:null!==(t=e.severity)&&void 0!==t?t:_n,probabilityScore:null!==(n=e.probabilityScore)&&void 0!==n?n:0,severityScore:null!==(a=e.severityScore)&&void 0!==a?a:0}})),null!==(a=e.content)&&void 0!==a&&null!==(a=a.parts)&&void 0!==a&&a.some(e=>null==e?void 0:e.videoMetadata))throw new wn(Hn,"Part.videoMetadata is not supported in the Gemini Developer API. Please remove this property.");const s={index:e.index,content:e.content,finishReason:e.finishReason,finishMessage:e.finishMessage,safetyRatings:n,citationMetadata:i,groundingMetadata:e.groundingMetadata,urlContextMetadata:e.urlContextMetadata};t.push(s)}),t}function _a(e){const t=[];return e.safetyRatings.forEach(e=>{var n,a,i;t.push({category:e.category,probability:e.probability,severity:null!==(n=e.severity)&&void 0!==n?n:_n,probabilityScore:null!==(a=e.probabilityScore)&&void 0!==a?a:0,severityScore:null!==(i=e.severityScore)&&void 0!==i?i:0,blocked:e.blocked})}),{blockReason:e.blockReason,safetyRatings:t,blockReasonMessage:e.blockReasonMessage}}
/**
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
             */const Ea=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;function Ca(e,t,n){const a=function(e){const t=e.getReader();return new ReadableStream({start(e){let n="";return a();function a(){return t.read().then(({value:t,done:i})=>{if(i)return n.trim()?void e.error(new wn(zn,"Failed to parse stream")):void e.close();n+=t;let s,r=n.match(Ea);for(;r;){try{s=JSON.parse(r[1])}catch(o){return void e.error(new wn(zn,`Error parsing JSON response: "${r[1]}`))}e.enqueue(s),n=n.substring(r[0].length),r=n.match(Ea)}return a()})}}})}(e.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0}))),[i,s]=a.tee();return{stream:Ia(i,t,n),response:ka(s,t,n)}}async function ka(e,t,n){const a=[],i=e.getReader();for(;;){const{done:e,value:s}=await i.read();if(e){let e=Oa(a);return t.backend.backendType===Xn&&(e=wa(e)),fa(e,n)}a.push(s)}}async function*Ia(e,t,n){const a=e.getReader();for(;;){var i,s;const{value:e,done:r}=await a.read();if(r)break;let o;o=t.backend.backendType===Xn?fa(wa(e),n):fa(e,n);const l=null===(i=o.candidates)||void 0===i?void 0:i[0];(null!=l&&null!==(s=l.content)&&void 0!==s&&s.parts||null!=l&&l.finishReason||null!=l&&l.citationMetadata||null!=l&&l.urlContextMetadata)&&(yield o)}}function Oa(e){const t=e[e.length-1],n={promptFeedback:null==t?void 0:t.promptFeedback};for(const a of e)if(a.candidates)for(const e of a.candidates){const t=e.index||0;n.candidates||(n.candidates=[]),n.candidates[t]||(n.candidates[t]={index:e.index}),n.candidates[t].citationMetadata=e.citationMetadata,n.candidates[t].finishReason=e.finishReason,n.candidates[t].finishMessage=e.finishMessage,n.candidates[t].safetyRatings=e.safetyRatings,n.candidates[t].groundingMetadata=e.groundingMetadata;const a=e.urlContextMetadata;if("object"==typeof a&&null!==a&&Object.keys(a).length>0&&(n.candidates[t].urlContextMetadata=a),e.content){if(!e.content.parts)continue;n.candidates[t].content||(n.candidates[t].content={role:e.content.role||"user",parts:[]});for(const a of e.content.parts){const e={...a};""!==a.text&&Object.keys(e).length>0&&n.candidates[t].content.parts.push(e)}}}return n}
/**
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
             */const Aa=[Rn,Dn,Mn];async function xa(e,t,n,a){if(!t)return{response:await a(),inferenceSource:Pn};switch(t.mode){case In:if(await t.isAvailable(e))return{response:await n(),inferenceSource:xn};throw new wn(Hn,"Inference mode is ONLY_ON_DEVICE, but an on-device model is not available.");case On:return{response:await a(),inferenceSource:Pn};case An:try{return{response:await a(),inferenceSource:Pn}}catch(i){if(i instanceof wn&&Aa.includes(i.code))return{response:await n(),inferenceSource:xn};throw i}case kn:return await t.isAvailable(e)?{response:await n(),inferenceSource:xn}:{response:await a(),inferenceSource:Pn};default:throw new wn(Dn,`Unexpected infererence mode: ${t.mode}`)}}
/**
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
             */async function Pa(e,t,n,a,i){const s=await xa(n,a,()=>a.generateContentStream(n),()=>async function(e,t,n,a){return e.backend.backendType===Xn&&(n=ya(n)),pa({task:"streamGenerateContent",model:t,apiSettings:e,stream:!0,singleRequestOptions:a},JSON.stringify(n))}(e,t,n,i));return Ca(s.response,e,s.inferenceSource)}async function Da(e,t,n,a,i){const s=await xa(n,a,()=>a.generateContent(n),()=>async function(e,t,n,a){return e.backend.backendType===Xn&&(n=ya(n)),pa({model:t,task:"generateContent",apiSettings:e,stream:!1,singleRequestOptions:a},JSON.stringify(n))}(e,t,n,i)),r=await async function(e,t){const n=await e.json();return t.backend.backendType===Xn?wa(n):n}
/**
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
             */(s.response,e);return{response:fa(r,s.inferenceSource)}}function La(e){if(null!=e)return"string"==typeof e?{role:"system",parts:[{text:e}]}:e.text?{role:"system",parts:[e]}:e.parts?e.role?e:{role:"system",parts:e.parts}:void 0}function Ta(e){let t=[];if("string"==typeof e)t=[{text:e}];else for(const n of e)"string"==typeof n?t.push({text:n}):t.push(n);return function(e){const t={role:"user",parts:[]},n={role:"function",parts:[]};let a=!1,i=!1;for(const s of e)"functionResponse"in s?(n.parts.push(s),i=!0):(t.parts.push(s),a=!0);if(a&&i)throw new wn($n,"Within a single message, FunctionResponse cannot be mixed with other type of Part in the request for sending chat message.");if(!a&&!i)throw new wn($n,"No Content is provided for sending chat message.");return a?t:n}(t)}function Ra(e){let t;return t=e.contents?e:{contents:[Ta(e)]},e.systemInstruction&&(t.systemInstruction=La(e.systemInstruction)),t}
/**
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
             */const $a=["text","inlineData","functionCall","functionResponse","thought","thoughtSignature"],Ma={user:["text","inlineData"],function:["functionResponse"],model:["text","functionCall","thought","thoughtSignature"],system:["text"]},Na={user:["model"],function:["model"],model:["user","function"],system:[]},ja="SILENT_ERROR";class Ba{constructor(e,t,n,a,i){this.model=t,this.chromeAdapter=n,this.params=a,this.requestOptions=i,this._history=[],this._sendPromise=Promise.resolve(),this._apiSettings=e,null!=a&&a.history&&(function(e){let t=null;for(const n of e){const{role:e,parts:a}=n;if(!t&&"user"!==e)throw new wn($n,`First Content should be with role 'user', got ${e}`);if(!Sn.includes(e))throw new wn($n,`Each item should include role field. Got ${e} but valid roles are: ${JSON.stringify(Sn)}`);if(!Array.isArray(a))throw new wn($n,"Content should have 'parts' property with an array of Parts");if(0===a.length)throw new wn($n,"Each Content should have at least one part");const i={text:0,inlineData:0,functionCall:0,functionResponse:0,thought:0,thoughtSignature:0,executableCode:0,codeExecutionResult:0};for(const t of a)for(const e of $a)e in t&&(i[e]+=1);const s=Ma[e];for(const t of $a)if(!s.includes(t)&&i[t]>0)throw new wn($n,`Content with role '${e}' can't contain '${t}' part`);if(t&&!Na[e].includes(t.role))throw new wn($n,`Content with role '${e}' can't follow '${t.role}'. Valid previous roles: ${JSON.stringify(Na)}`);t=n}}
/**
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
             */(a.history),this._history=a.history)}async getHistory(){return await this._sendPromise,this._history}async sendMessage(e,t){var n,a,i,s,r;await this._sendPromise;const o=Ta(e),l={safetySettings:null===(n=this.params)||void 0===n?void 0:n.safetySettings,generationConfig:null===(a=this.params)||void 0===a?void 0:a.generationConfig,tools:null===(i=this.params)||void 0===i?void 0:i.tools,toolConfig:null===(s=this.params)||void 0===s?void 0:s.toolConfig,systemInstruction:null===(r=this.params)||void 0===r?void 0:r.systemInstruction,contents:[...this._history,o]};let c={};return this._sendPromise=this._sendPromise.then(()=>Da(this._apiSettings,this.model,l,this.chromeAdapter,{...this.requestOptions,...t})).then(e=>{if(e.response.candidates&&e.response.candidates.length>0){var t,n;this._history.push(o);const a={parts:(null===(t=e.response.candidates)||void 0===t?void 0:t[0].content.parts)||[],role:(null===(n=e.response.candidates)||void 0===n?void 0:n[0].content.role)||"model"};this._history.push(a)}else{const t=ba(e.response);t&&ta.warn(`sendMessage() was unsuccessful. ${t}. Inspect response object for details.`)}c=e}),await this._sendPromise,c}async sendMessageStream(e,t){var n,a,i,s,r;await this._sendPromise;const o=Ta(e),l={safetySettings:null===(n=this.params)||void 0===n?void 0:n.safetySettings,generationConfig:null===(a=this.params)||void 0===a?void 0:a.generationConfig,tools:null===(i=this.params)||void 0===i?void 0:i.tools,toolConfig:null===(s=this.params)||void 0===s?void 0:s.toolConfig,systemInstruction:null===(r=this.params)||void 0===r?void 0:r.systemInstruction,contents:[...this._history,o]},c=Pa(this._apiSettings,this.model,l,this.chromeAdapter,{...this.requestOptions,...t});return this._sendPromise=this._sendPromise.then(()=>c).catch(e=>{throw new Error(ja)}).then(e=>e.response).then(e=>{if(e.candidates&&e.candidates.length>0){this._history.push(o);const t={...e.candidates[0].content};t.role||(t.role="model"),this._history.push(t)}else{const t=ba(e);t&&ta.warn(`sendMessageStream() was unsuccessful. ${t}. Inspect response object for details.`)}}).catch(e=>{e.message!==ja&&"AbortError"!==e.name&&ta.error(e)}),c}}
/**
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
             */async function Fa(e,t,n,a,i){if((null==a?void 0:a.mode)===In)throw new wn(Hn,"countTokens() is not supported for on-device models.");return async function(e,t,n,a){let i="";if(e.backend.backendType===Xn){const e=function(e,t){return{generateContentRequest:{model:t,...e}}}(n,t);i=JSON.stringify(e)}else i=JSON.stringify(n);return(await pa({model:t,task:"countTokens",apiSettings:e,stream:!1,singleRequestOptions:a},i)).json()}(e,t,n,i)}
/**
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
             */class Ua extends la{constructor(e,t,n,a){super(e,t.model),this.chromeAdapter=a,this.generationConfig=t.generationConfig||{},function(e){var t,n;if(null!=(null===(t=e.thinkingConfig)||void 0===t?void 0:t.thinkingBudget)&&null!==(n=e.thinkingConfig)&&void 0!==n&&n.thinkingLevel)throw new wn(Hn,"Cannot set both thinkingBudget and thinkingLevel in a config.")}
/**
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
             */(this.generationConfig),this.safetySettings=t.safetySettings||[],this.tools=t.tools,this.toolConfig=t.toolConfig,this.systemInstruction=La(t.systemInstruction),this.requestOptions=n||{}}async generateContent(e,t){const n=Ra(e);return Da(this._apiSettings,this.model,{generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,...n},this.chromeAdapter,{...this.requestOptions,...t})}async generateContentStream(e,t){const n=Ra(e);return Pa(this._apiSettings,this.model,{generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,...n},this.chromeAdapter,{...this.requestOptions,...t})}startChat(e){return new Ba(this._apiSettings,this.model,this.chromeAdapter,{tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,generationConfig:this.generationConfig,safetySettings:this.safetySettings,...e},this.requestOptions)}async countTokens(e,t){const n=Ra(e);return Fa(this._apiSettings,this.model,n,this.chromeAdapter,{...this.requestOptions,...t})}}class za{constructor(e){if(!e.type&&!e.anyOf)throw new wn(Nn,"A schema must have either a 'type' or an 'anyOf' array of sub-schemas.");for(const t in e)this[t]=e[t];this.type=e.type,this.format=e.hasOwnProperty("format")?e.format:void 0,this.nullable=!!e.hasOwnProperty("nullable")&&!!e.nullable}toJSON(){const e={type:this.type};for(const t in this)this.hasOwnProperty(t)&&void 0!==this[t]&&("required"===t&&this.type!==Kn||(e[t]=this[t]));return e}static array(e){return new Ja(e,e.items)}static object(e){return new Ga(e,e.properties,e.optionalProperties)}static string(e){return new Wa(e)}static enumString(e){return new Wa(e,e.enum)}static integer(e){return new Ha(e)}static number(e){return new qa(e)}static boolean(e){return new Va(e)}static anyOf(e){return new Ka(e)}}class Ha extends za{constructor(e){super({type:Wn,...e})}}class qa extends za{constructor(e){super({type:Vn,...e})}}class Va extends za{constructor(e){super({type:Jn,...e})}}class Wa extends za{constructor(e,t){super({type:qn,...e}),this.enum=t}toJSON(){const e=super.toJSON();return this.enum&&(e.enum=this.enum),e}}class Ja extends za{constructor(e,t){super({type:Gn,...e}),this.items=t}toJSON(){const e=super.toJSON();return e.items=this.items.toJSON(),e}}class Ga extends za{constructor(e,t,n=[]){super({type:Kn,...e}),this.properties=t,this.optionalProperties=n}toJSON(){const e=super.toJSON();e.properties={...this.properties};const t=[];if(this.optionalProperties)for(const n of this.optionalProperties)if(!this.properties.hasOwnProperty(n))throw new wn(Nn,`Property "${n}" specified in "optionalProperties" does not exist.`);for(const n in this.properties)this.properties.hasOwnProperty(n)&&(e.properties[n]=this.properties[n].toJSON(),this.optionalProperties.includes(n)||t.push(n));return t.length>0&&(e.required=t),delete e.optionalProperties,e}}class Ka extends za{constructor(e){if(0===e.anyOf.length)throw new wn(Nn,"The 'anyOf' array must not be empty.");super({...e,type:void 0}),this.anyOf=e.anyOf}toJSON(){const e=super.toJSON();return this.anyOf&&Array.isArray(this.anyOf)&&(e.anyOf=this.anyOf.map(e=>e.toJSON())),e}}
/**
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
             */Zt(new He(gn,oa,"PUBLIC").setMultipleInstances(!0)),nn(fn,mn),nn(fn,mn,"esm2020"),
/**
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
             */
nn("firebase","12.9.0","app");const Ya=tn({apiKey:"AIzaSyBy-l_g3Qc6FdjjWj94qc1nxz_uskmxaHY",authDomain:"lab06-expense.firebaseapp.com",projectId:"lab06-expense",storageBucket:"lab06-expense.firebasestorage.app",messagingSenderId:"43095205716",appId:"1:43095205716:web:4f6252efaca4bcf9b0cac1"}),Xa=za.object({properties:{caption:za.string(),tags:za.array({items:za.string()}),objects:za.array({items:za.object({properties:{name:za.string(),confidence:za.number()},optionalProperties:["confidence"]})}),safety:za.object({properties:{isSensitive:za.boolean(),notes:za.string()},optionalProperties:["notes"]})},optionalProperties:["objects","safety"]}),Za=function(e=function(e=Wt){const t=Gt.get(e);if(!t&&e===Wt&&Me())return tn();if(!t)throw Qt.create("no-app",{appName:e});return t}(),t){var n,a,i;const s=function(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}(e=(i=e)&&i._delegate?i._delegate:i,gn),r=null!==(n=null==t?void 0:t.backend)&&void 0!==n?n:new Qn,o={useLimitedUseAppCheckTokens:null!==(a=null==t?void 0:t.useLimitedUseAppCheckTokens)&&void 0!==a&&a},l=function(e){if(e instanceof Qn)return`${gn}/googleai`;if(e instanceof ea)return`${gn}/vertexai/${e.location}`;throw new wn(Dn,`Invalid backend: ${JSON.stringify(e.backendType)}`)}(r),c=s.getImmediate({identifier:l});return c.options=o,c}(Ya,{backend:new Qn}),Qa=function(e,t,n){var a;const i=t;let s;if(s=i.mode?i.inCloudParams||{model:"gemini-2.5-flash-lite"}:t,!s.model)throw new wn(Fn,"Must provide a model name. Example: getGenerativeModel({ model: 'my-model-name' })");const r=null===(a=e.chromeAdapterFactory)||void 0===a?void 0:a.call(e,i.mode,"undefined"==typeof window?void 0:window,i.onDeviceParams),o=new Ua(e,s,n,r);return o._apiSettings.inferenceMode=i.mode,o}(Za,{model:"gemini-2.5-flash",generationConfig:{responseMimeType:"application/json",responseSchema:Xa}});class ei{static async analyze(e){var t;const n={inlineData:{data:e.base64,mimeType:e.mimeType}},a=null!==(t=(await Qa.generateContent(["วิเคราะห์ภาพนี้และตอบกลับตาม JSON schema เท่านั้น\n- caption: คำบรรยายสั้น 1 ประโยคภาษาไทย\n- tags: คีย์เวิร์ด 3-8 คำ\n- objects: ถ้าเห็นวัตถุเด่น ให้ระบุชื่อ\n- safety: ถ้าเป็นภาพอ่อนไหวให้ทำเครื่องหมาย",n])).response.text())&&void 0!==t?t:"{}";return JSON.parse(a)}}const ti={class:"pills"},ni={class:"pill"},ai={key:0,class:"pill"},ii={key:1,class:"pill warn"},si={key:0,class:"stage"},ri={class:"stage-head"},oi={class:"stage-title"},li={class:"viewport"},ci={class:"viewport-overlay"},di={class:"placeholder"},ui={class:"actions"},pi={class:"msg"},hi={key:1,class:"stage"},fi={class:"viewport"},mi={class:"placeholder"},gi={class:"actions"},vi={key:2,class:"preview"},bi={class:"preview-head"},yi={class:"preview-title"},wi={class:"msg"},Si={class:"msg hint"},_i={class:"mini-tip"},Ei={class:"section"},Ci={class:"caption"},ki={class:"section"},Ii={class:"chips"},Oi={key:0,class:"section"},Ai={key:0},xi={key:1},Pi={key:1,class:"section"},Di={key:0,class:"notes"},Li={slot:"content",class:"raw"};e("default",oe(n({__name:"Tab1Page",setup(e){const t=ue.isNativePlatform(),n=window.isSecureContext||"localhost"===location.hostname,oe=a(null),le=a(null),ce=a(null),de=a(null),pe=a(""),he=a(null),fe=a(!1),me=a(""),ge=a(""),ve=a(!1),be=a("environment"),ye=a("");let we=null;const Se=!t&&n&&!!navigator.mediaDevices&&"function"==typeof navigator.mediaDevices.getUserMedia;function _e(){var e;me.value="",ge.value="",null===(e=oe.value)||void 0===e||e.click()}function Ee(){de.value=null,pe.value="",he.value=null,me.value="",ge.value="",ye.value=""}function Ce(e){var t;const n=null!==(t=null==e?void 0:e.message)&&void 0!==t?t:String(e);return/NotAllowedError|denied/i.test(n)?"ไม่ได้รับอนุญาตให้ใช้กล้อง: โปรดกด Allow กล้องในเบราว์เซอร์ แล้วลองใหม่":/NotFoundError/i.test(n)?"ไม่พบกล้อง: ตรวจสอบว่าเครื่องมี webcam และไม่ได้ถูกปิด/ปิดไดรเวอร์":/NotReadableError/i.test(n)?"กล้องถูกใช้งานโดยโปรแกรมอื่น (เช่น Zoom/Meet/OBS) ให้ปิดแล้วลองใหม่":n}async function ke(e){var t;me.value="",ge.value="";const n=e.target,a=null===(t=n.files)||void 0===t?void 0:t[0];a&&(de.value=await Oe.fromFile(a),pe.value=URL.createObjectURL(a),he.value=null,n.value="",ge.value="โหลดรูปสำเร็จ ✅ กดวิเคราะห์ได้เลย")}async function Ie(){if(ye.value="",me.value="",ge.value="",Se)try{if(Ae(),we=await navigator.mediaDevices.getUserMedia({video:{facingMode:be.value},audio:!1}),ve.value=!0,await ae(),!le.value)throw new Error("Video element not ready");le.value.srcObject=we,await le.value.play(),ge.value="เปิดกล้องแล้ว ✅ กดถ่ายภาพได้เลย"}catch(e){ye.value=Ce(e),ve.value=!1,Ae()}else ye.value="Webcam ต้องใช้ http://localhost หรือ https และเบราว์เซอร์ต้องรองรับ getUserMedia"}function Ae(){we&&(we.getTracks().forEach(e=>e.stop()),we=null),ve.value=!1}async function xe(){try{if(!le.value||!ce.value)return;const e=le.value,t=ce.value,n=e.videoWidth||1280,a=e.videoHeight||720;t.width=n,t.height=a;const i=t.getContext("2d");if(!i)throw new Error("Canvas context not available");i.drawImage(e,0,0,n,a);const s=t.toDataURL("image/jpeg",.9),r=s.split(",")[1];if(!r)throw new Error("Invalid base64 from canvas");de.value={base64:r,mimeType:"image/jpeg"},pe.value=s,he.value=null,ge.value="ถ่ายภาพสำเร็จ ✅ กดวิเคราะห์ได้เลย"}catch(e){ye.value=Ce(e)}}async function Pe(){me.value="",ge.value="",fe.value=!0;try{const e=await Oe.fromCamera();de.value=e,pe.value=`data:${e.mimeType};base64,${e.base64}`,he.value=null,ge.value="ได้รูปจาก Native Camera ✅ กดวิเคราะห์ได้เลย"}catch(e){me.value=Ce(e)}finally{fe.value=!1}}async function De(){if(de.value){me.value="",ge.value="",fe.value=!0;try{he.value=await ei.analyze(de.value),ge.value="วิเคราะห์เสร็จแล้ว ✅"}catch(e){me.value=Ce(e)}finally{fe.value=!1}}}return i(be,async()=>{ve.value&&await Ie()}),s(()=>{Ae()}),(e,a)=>(ie(),r(l(c),null,{default:o(()=>[d(l(g),null,{default:o(()=>[d(l(u),null,{default:o(()=>[d(l(p),null,{default:o(()=>[...a[1]||(a[1]=[h("Vision Studio",-1)])]),_:1}),d(l(f),{slot:"end"},{default:o(()=>[d(l(m),{fill:"clear",disabled:fe.value,onClick:Ee},{default:o(()=>[...a[2]||(a[2]=[h(" รีเซ็ต ",-1)])]),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1}),d(l(ne),{class:"ion-padding"},{default:o(()=>[v("input",{ref_key:"fileEl",ref:oe,type:"file",accept:"image/*",hidden:"",onChange:ke},null,544),v("div",ti,[v("div",ni,[v("span",{class:w(["dot",{on:l(t)}])},null,2),v("span",null,S(l(t)?"Native (Android/iOS)":"Web (PC/Browser)"),1)]),de.value?(ie(),b("div",ai,[a[3]||(a[3]=v("span",{class:"dot on"},null,-1)),v("span",null,"Image Ready • "+S(de.value.mimeType),1)])):y("",!0),l(t)||l(n)?y("",!0):(ie(),b("div",ii,[...a[4]||(a[4]=[v("span",{class:"dot"},null,-1),v("span",null,"Webcam ต้องใช้ localhost/https",-1)])]))]),d(l(_),null,{default:o(()=>[d(l(E),null,{default:o(()=>[d(l(C),{size:"12","size-lg":"7"},{default:o(()=>[d(l(k),{class:"card"},{default:o(()=>[d(l(I),null,{default:o(()=>[d(l(O),null,{default:o(()=>[...a[5]||(a[5]=[h("Camera Stage",-1)])]),_:1}),d(l(A),null,{default:o(()=>[...a[6]||(a[6]=[h(" Web: Live Preview + ถ่ายภาพ • Native: เปิดกล้องด้วย Capacitor ",-1)])]),_:1})]),_:1}),d(l(x),null,{default:o(()=>[l(t)?(ie(),b("div",hi,[v("div",fi,[v("div",mi,[d(l(P),{icon:l(z),class:"placeholder-icon"},null,8,["icon"]),a[16]||(a[16]=v("div",{class:"placeholder-title"},"โหมด Native",-1)),a[17]||(a[17]=v("div",{class:"placeholder-sub"}," กด “ถ่ายรูป (Native)” เพื่อเปิดกล้องมือถือ ",-1))])]),v("div",gi,[d(l(m),{expand:"block",color:"tertiary",size:"large",disabled:fe.value,onClick:Pe},{default:o(()=>[d(l(P),{icon:l(N),slot:"start"},null,8,["icon"]),a[18]||(a[18]=h(" ถ่ายรูป (Native) ",-1))]),_:1},8,["disabled"])])])):(ie(),b("div",si,[v("div",ri,[v("div",oi,[d(l(P),{icon:l(D)},null,8,["icon"]),a[7]||(a[7]=v("span",null,"Webcam Preview",-1))]),d(l(L),{modelValue:be.value,"onUpdate:modelValue":a[0]||(a[0]=e=>be.value=e),disabled:fe.value||!l(Se)},{default:o(()=>[d(l(T),{value:"environment"},{default:o(()=>[d(l(R),null,{default:o(()=>[...a[8]||(a[8]=[h("กล้องหลัง",-1)])]),_:1})]),_:1}),d(l(T),{value:"user"},{default:o(()=>[d(l(R),null,{default:o(()=>[...a[9]||(a[9]=[h("กล้องหน้า",-1)])]),_:1})]),_:1})]),_:1},8,["modelValue","disabled"])]),v("div",li,[$(v("video",{ref_key:"videoEl",ref:le,class:"video",playsinline:"",autoplay:"",muted:""},null,512),[[M,ve.value]]),$(v("div",ci,[...a[10]||(a[10]=[v("div",{class:"hint-bubble"},"จัดเฟรมแล้วกด “ถ่ายภาพ”",-1)])],512),[[M,ve.value]]),$(v("div",di,[d(l(P),{icon:l(N),class:"placeholder-icon"},null,8,["icon"]),a[11]||(a[11]=v("div",{class:"placeholder-title"},"ยังไม่เปิดกล้อง",-1)),a[12]||(a[12]=v("div",{class:"placeholder-sub"}," กด “เปิดกล้อง” แล้วอนุญาตสิทธิ์กล้องในเบราว์เซอร์ ",-1))],512),[[M,!ve.value]])]),v("div",ui,[ve.value?(ie(),r(l(m),{key:1,expand:"block",color:"medium",size:"large",disabled:fe.value,onClick:Ae},{default:o(()=>[d(l(P),{icon:l(B),slot:"start"},null,8,["icon"]),a[14]||(a[14]=h(" ปิดกล้อง ",-1))]),_:1},8,["disabled"])):(ie(),r(l(m),{key:0,expand:"block",color:"tertiary",size:"large",disabled:fe.value||!l(Se),onClick:Ie},{default:o(()=>[d(l(P),{icon:l(j),slot:"start"},null,8,["icon"]),a[13]||(a[13]=h(" เปิดกล้อง ",-1))]),_:1},8,["disabled"])),d(l(m),{expand:"block",color:"primary",size:"large",disabled:fe.value||!ve.value,onClick:xe},{default:o(()=>[d(l(P),{icon:l(F),slot:"start"},null,8,["icon"]),a[15]||(a[15]=h(" ถ่ายภาพ ",-1))]),_:1},8,["disabled"])]),ye.value?(ie(),r(l(U),{key:0,color:"danger"},{default:o(()=>[v("p",pi,S(ye.value),1)]),_:1})):y("",!0)])),pe.value?(ie(),b("div",vi,[v("div",bi,[v("div",yi,[d(l(P),{icon:l(H)},null,8,["icon"]),a[19]||(a[19]=v("span",null,"Captured / Selected",-1))]),d(l(m),{fill:"clear",size:"small",disabled:fe.value,onClick:_e},{default:o(()=>[...a[20]||(a[20]=[h(" เปลี่ยนรูป ",-1)])]),_:1},8,["disabled"])]),d(l(q),{src:pe.value,class:"preview-img"},null,8,["src"])])):y("",!0)]),_:1})]),_:1})]),_:1}),d(l(C),{size:"12","size-lg":"5"},{default:o(()=>[d(l(k),{class:"card"},{default:o(()=>[d(l(I),null,{default:o(()=>[d(l(O),null,{default:o(()=>[...a[21]||(a[21]=[h("Workflow",-1)])]),_:1}),d(l(A),null,{default:o(()=>[...a[22]||(a[22]=[h("เลือก/ถ่าย → วิเคราะห์ → แสดงผล",-1)])]),_:1})]),_:1}),d(l(x),null,{default:o(()=>[d(l(m),{expand:"block",size:"large",disabled:fe.value,onClick:_e},{default:o(()=>[d(l(P),{icon:l(H),slot:"start"},null,8,["icon"]),a[23]||(a[23]=h(" เลือกไฟล์ภาพ ",-1))]),_:1},8,["disabled"]),d(l(m),{expand:"block",size:"large",color:"primary",disabled:!de.value||fe.value,onClick:De},{default:o(()=>[d(l(P),{icon:l(V),slot:"start"},null,8,["icon"]),a[24]||(a[24]=h(" วิเคราะห์ด้วย Gemini ",-1))]),_:1},8,["disabled"]),fe.value?(ie(),r(l(W),{key:0,type:"indeterminate",class:"mt12"})):y("",!0),me.value?(ie(),r(l(U),{key:1,color:"danger"},{default:o(()=>[v("p",wi,S(me.value),1)]),_:1})):y("",!0),ge.value?(ie(),r(l(U),{key:2,color:"medium"},{default:o(()=>[v("p",Si,S(ge.value),1)]),_:1})):y("",!0),v("div",_i,[d(l(P),{icon:l(J)},null,8,["icon"]),a[25]||(a[25]=v("span",null,[h(" ถ้าเป็น Web ให้เปิดผ่าน "),v("b",null,"http://localhost"),h(" หรือ "),v("b",null,"https"),h(" และกด Allow กล้อง ")],-1))])]),_:1})]),_:1}),he.value?(ie(),r(l(k),{key:0,class:"card"},{default:o(()=>[d(l(I),null,{default:o(()=>[d(l(O),null,{default:o(()=>[...a[26]||(a[26]=[h("Analysis Result",-1)])]),_:1}),d(l(A),null,{default:o(()=>[...a[27]||(a[27]=[h("Structured Output (JSON)",-1)])]),_:1})]),_:1}),d(l(x),null,{default:o(()=>{var e;return[v("div",Ei,[a[28]||(a[28]=v("div",{class:"k"},"Caption",-1)),v("div",Ci,S(he.value.caption),1)]),v("div",ki,[a[29]||(a[29]=v("div",{class:"k"},"Tags",-1)),v("div",Ii,[(ie(!0),b(K,null,G(he.value.tags,e=>(ie(),r(l(se),{key:e,outline:""},{default:o(()=>[d(l(P),{icon:l(re)},null,8,["icon"]),d(l(R),null,{default:o(()=>[h(S(e),1)]),_:2},1024)]),_:2},1024))),128))])]),null!==(e=he.value.objects)&&void 0!==e&&e.length?(ie(),b("div",Oi,[a[30]||(a[30]=v("div",{class:"k"},"Objects",-1)),d(l(Y),{inset:""},{default:o(()=>[(ie(!0),b(K,null,G(he.value.objects,(e,t)=>(ie(),r(l(ee),{key:t},{default:o(()=>[d(l(R),null,{default:o(()=>[v("h2",null,S(e.name),1),void 0!==e.confidence?(ie(),b("p",Ai," ความมั่นใจ: "+S((100*e.confidence).toFixed(0))+"% ",1)):(ie(),b("p",xi,"ความมั่นใจ: ไม่ระบุ"))]),_:2},1024),void 0!==e.confidence?(ie(),r(l(X),{key:0,slot:"end",color:"dark"},{default:o(()=>[h(S((100*e.confidence).toFixed(0))+"% ",1)]),_:2},1024)):y("",!0)]),_:2},1024))),128))]),_:1})])):y("",!0),he.value.safety?(ie(),b("div",Pi,[a[31]||(a[31]=v("div",{class:"k"},"Safety",-1)),d(l(X),{color:he.value.safety.isSensitive?"danger":"success"},{default:o(()=>[h(S(he.value.safety.isSensitive?"Sensitive":"OK"),1)]),_:1},8,["color"]),he.value.safety.notes?(ie(),b("div",Di,S(he.value.safety.notes),1)):y("",!0)])):y("",!0),d(l(Z),null,{default:o(()=>[d(l(Q),{value:"raw"},{default:o(()=>[d(l(ee),{slot:"header"},{default:o(()=>[d(l(P),{icon:l(te),slot:"start"},null,8,["icon"]),d(l(R),null,{default:o(()=>[...a[32]||(a[32]=[h("ดู JSON ดิบ",-1)])]),_:1})]),_:1}),v("div",Li,[v("pre",null,S(JSON.stringify(he.value,null,2)),1)])]),_:1})]),_:1})]}),_:1})]),_:1})):y("",!0)]),_:1})]),_:1})]),_:1}),v("canvas",{ref_key:"canvasEl",ref:ce,class:"hidden"},null,512)]),_:1})]),_:1}))}}),[["__scopeId","data-v-18dfbda9"]]))}}});
