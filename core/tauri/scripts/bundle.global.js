"use strict";var __TAURI_IIFE__=(()=>{var L=Object.defineProperty;var de=Object.getOwnPropertyDescriptor;var me=Object.getOwnPropertyNames;var pe=Object.prototype.hasOwnProperty;var c=(n,e)=>{for(var t in e)L(n,t,{get:e[t],enumerable:!0})},ge=(n,e,t,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of me(e))!pe.call(n,s)&&s!==t&&L(n,s,{get:()=>e[s],enumerable:!(r=de(e,s))||r.enumerable});return n};var he=n=>ge(L({},"__esModule",{value:!0}),n);var Jt={};c(Jt,{app:()=>U,cli:()=>k,clipboard:()=>I,dialog:()=>N,event:()=>V,fs:()=>j,globalShortcut:()=>q,http:()=>$,invoke:()=>$t,notification:()=>J,os:()=>ne,path:()=>K,process:()=>Q,shell:()=>Z,tauri:()=>R,updater:()=>X,window:()=>te});var U={};c(U,{getName:()=>be,getTauriVersion:()=>Pe,getVersion:()=>_e,hide:()=>ve,show:()=>we});var R={};c(R,{convertFileSrc:()=>fe,invoke:()=>f,transformCallback:()=>d});function ye(){return window.crypto.getRandomValues(new Uint32Array(1))[0]}function d(n,e=!1){let t=ye(),r=`_${t}`;return Object.defineProperty(window,r,{value:s=>(e&&Reflect.deleteProperty(window,r),n==null?void 0:n(s)),writable:!1,configurable:!0}),t}async function f(n,e={}){return new Promise((t,r)=>{let s=d(l=>{t(l),Reflect.deleteProperty(window,`_${o}`)},!0),o=d(l=>{r(l),Reflect.deleteProperty(window,`_${s}`)},!0);window.__TAURI_IPC__({cmd:n,callback:s,error:o,...e})})}function fe(n,e="asset"){let t=encodeURIComponent(n);return navigator.userAgent.includes("Windows")?`https://${e}.localhost/${t}`:`${e}://localhost/${t}`}async function i(n){return f("tauri",n)}async function _e(){return i({__tauriModule:"App",message:{cmd:"getAppVersion"}})}async function be(){return i({__tauriModule:"App",message:{cmd:"getAppName"}})}async function Pe(){return i({__tauriModule:"App",message:{cmd:"getTauriVersion"}})}async function we(){return i({__tauriModule:"App",message:{cmd:"show"}})}async function ve(){return i({__tauriModule:"App",message:{cmd:"hide"}})}var k={};c(k,{getMatches:()=>Me});async function Me(){return i({__tauriModule:"Cli",message:{cmd:"cliMatches"}})}var I={};c(I,{readText:()=>Oe,writeText:()=>Te});async function Te(n){return i({__tauriModule:"Clipboard",message:{cmd:"writeText",data:n}})}async function Oe(){return i({__tauriModule:"Clipboard",message:{cmd:"readText",data:null}})}var N={};c(N,{ask:()=>Ce,confirm:()=>De,message:()=>Ae,open:()=>Fe,save:()=>Ee});async function Fe(n={}){return typeof n=="object"&&Object.freeze(n),i({__tauriModule:"Dialog",message:{cmd:"openDialog",options:n}})}async function Ee(n={}){return typeof n=="object"&&Object.freeze(n),i({__tauriModule:"Dialog",message:{cmd:"saveDialog",options:n}})}async function Ae(n,e){var r;let t=typeof e=="string"?{title:e}:e;return i({__tauriModule:"Dialog",message:{cmd:"messageDialog",message:n.toString(),title:(r=t==null?void 0:t.title)==null?void 0:r.toString(),type:t==null?void 0:t.type}})}async function Ce(n,e){var r;let t=typeof e=="string"?{title:e}:e;return i({__tauriModule:"Dialog",message:{cmd:"askDialog",message:n.toString(),title:(r=t==null?void 0:t.title)==null?void 0:r.toString(),type:t==null?void 0:t.type}})}async function De(n,e){var r;let t=typeof e=="string"?{title:e}:e;return i({__tauriModule:"Dialog",message:{cmd:"confirmDialog",message:n.toString(),title:(r=t==null?void 0:t.title)==null?void 0:r.toString(),type:t==null?void 0:t.type}})}var V={};c(V,{TauriEvent:()=>M,emit:()=>T,listen:()=>z,once:()=>H});async function ie(n,e){return i({__tauriModule:"Event",message:{cmd:"unlisten",event:n,eventId:e}})}async function w(n,e,t){await i({__tauriModule:"Event",message:{cmd:"emit",event:n,windowLabel:e,payload:typeof t=="string"?t:JSON.stringify(t)}})}async function _(n,e,t){return i({__tauriModule:"Event",message:{cmd:"listen",event:n,windowLabel:e,handler:d(t)}}).then(r=>async()=>ie(n,r))}async function v(n,e,t){return _(n,e,r=>{t(r),ie(n,r.id).catch(()=>{})})}var M=(u=>(u.WINDOW_RESIZED="tauri://resize",u.WINDOW_MOVED="tauri://move",u.WINDOW_CLOSE_REQUESTED="tauri://close-requested",u.WINDOW_CREATED="tauri://window-created",u.WINDOW_DESTROYED="tauri://destroyed",u.WINDOW_FOCUS="tauri://focus",u.WINDOW_BLUR="tauri://blur",u.WINDOW_SCALE_FACTOR_CHANGED="tauri://scale-change",u.WINDOW_THEME_CHANGED="tauri://theme-changed",u.WINDOW_FILE_DROP="tauri://file-drop",u.WINDOW_FILE_DROP_HOVER="tauri://file-drop-hover",u.WINDOW_FILE_DROP_CANCELLED="tauri://file-drop-cancelled",u.MENU="tauri://menu",u.CHECK_UPDATE="tauri://update",u.UPDATE_AVAILABLE="tauri://update-available",u.INSTALL_UPDATE="tauri://update-install",u.STATUS_UPDATE="tauri://update-status",u.DOWNLOAD_PROGRESS="tauri://update-download-progress",u))(M||{});async function z(n,e){return _(n,null,e)}async function H(n,e){return v(n,null,e)}async function T(n,e){return w(n,void 0,e)}var j={};c(j,{BaseDirectory:()=>O,Dir:()=>O,copyFile:()=>Ne,createDir:()=>ke,exists:()=>Ve,readBinaryFile:()=>xe,readDir:()=>Ue,readTextFile:()=>Se,removeDir:()=>Ie,removeFile:()=>ze,renameFile:()=>He,writeBinaryFile:()=>Re,writeFile:()=>Le,writeTextFile:()=>Le});var O=(a=>(a[a.Audio=1]="Audio",a[a.Cache=2]="Cache",a[a.Config=3]="Config",a[a.Data=4]="Data",a[a.LocalData=5]="LocalData",a[a.Desktop=6]="Desktop",a[a.Document=7]="Document",a[a.Download=8]="Download",a[a.Executable=9]="Executable",a[a.Font=10]="Font",a[a.Home=11]="Home",a[a.Picture=12]="Picture",a[a.Public=13]="Public",a[a.Runtime=14]="Runtime",a[a.Template=15]="Template",a[a.Video=16]="Video",a[a.Resource=17]="Resource",a[a.App=18]="App",a[a.Log=19]="Log",a[a.Temp=20]="Temp",a[a.AppConfig=21]="AppConfig",a[a.AppData=22]="AppData",a[a.AppLocalData=23]="AppLocalData",a[a.AppCache=24]="AppCache",a[a.AppLog=25]="AppLog",a))(O||{});async function Se(n,e={}){return i({__tauriModule:"Fs",message:{cmd:"readTextFile",path:n,options:e}})}async function xe(n,e={}){let t=await i({__tauriModule:"Fs",message:{cmd:"readFile",path:n,options:e}});return Uint8Array.from(t)}async function Le(n,e,t){typeof t=="object"&&Object.freeze(t),typeof n=="object"&&Object.freeze(n);let r={path:"",contents:""},s=t;return typeof n=="string"?r.path=n:(r.path=n.path,r.contents=n.contents),typeof e=="string"?r.contents=e??"":s=e,i({__tauriModule:"Fs",message:{cmd:"writeFile",path:r.path,contents:Array.from(new TextEncoder().encode(r.contents)),options:s}})}async function Re(n,e,t){typeof t=="object"&&Object.freeze(t),typeof n=="object"&&Object.freeze(n);let r={path:"",contents:[]},s=t;return typeof n=="string"?r.path=n:(r.path=n.path,r.contents=n.contents),e&&"dir"in e?s=e:typeof n=="string"&&(r.contents=e??[]),i({__tauriModule:"Fs",message:{cmd:"writeFile",path:r.path,contents:Array.from(r.contents instanceof ArrayBuffer?new Uint8Array(r.contents):r.contents),options:s}})}async function Ue(n,e={}){return i({__tauriModule:"Fs",message:{cmd:"readDir",path:n,options:e}})}async function ke(n,e={}){return i({__tauriModule:"Fs",message:{cmd:"createDir",path:n,options:e}})}async function Ie(n,e={}){return i({__tauriModule:"Fs",message:{cmd:"removeDir",path:n,options:e}})}async function Ne(n,e,t={}){return i({__tauriModule:"Fs",message:{cmd:"copyFile",source:n,destination:e,options:t}})}async function ze(n,e={}){return i({__tauriModule:"Fs",message:{cmd:"removeFile",path:n,options:e}})}async function He(n,e,t={}){return i({__tauriModule:"Fs",message:{cmd:"renameFile",oldPath:n,newPath:e,options:t}})}async function Ve(n,e={}){return i({__tauriModule:"Fs",message:{cmd:"exists",path:n,options:e}})}var q={};c(q,{isRegistered:()=>Ge,register:()=>je,registerAll:()=>qe,unregister:()=>$e,unregisterAll:()=>Je});async function je(n,e){return i({__tauriModule:"GlobalShortcut",message:{cmd:"register",shortcut:n,handler:d(e)}})}async function qe(n,e){return i({__tauriModule:"GlobalShortcut",message:{cmd:"registerAll",shortcuts:n,handler:d(e)}})}async function Ge(n){return i({__tauriModule:"GlobalShortcut",message:{cmd:"isRegistered",shortcut:n}})}async function $e(n){return i({__tauriModule:"GlobalShortcut",message:{cmd:"unregister",shortcut:n}})}async function Je(){return i({__tauriModule:"GlobalShortcut",message:{cmd:"unregisterAll"}})}var $={};c($,{Body:()=>p,Client:()=>E,Response:()=>F,ResponseType:()=>re,fetch:()=>Ke,getClient:()=>se});var re=(r=>(r[r.JSON=1]="JSON",r[r.Text=2]="Text",r[r.Binary=3]="Binary",r))(re||{}),p=class{constructor(e,t){this.type=e,this.payload=t}static form(e){let t={};for(let r in e){let s=e[r],o;typeof s=="string"?o=s:s instanceof Uint8Array||Array.isArray(s)?o=Array.from(s):typeof s.file=="string"?o={file:s.file,mime:s.mime,fileName:s.fileName}:o={file:Array.from(s.file),mime:s.mime,fileName:s.fileName},t[r]=o}return new p("Form",t)}static json(e){return new p("Json",e)}static text(e){return new p("Text",e)}static bytes(e){return new p("Bytes",Array.from(e instanceof ArrayBuffer?new Uint8Array(e):e))}},F=class{constructor(e){this.url=e.url,this.status=e.status,this.ok=this.status>=200&&this.status<300,this.headers=e.headers,this.rawHeaders=e.rawHeaders,this.data=e.data}},E=class{constructor(e){this.id=e}async drop(){return i({__tauriModule:"Http",message:{cmd:"dropClient",client:this.id}})}async request(e){let t=!e.responseType||e.responseType===1;return t&&(e.responseType=2),i({__tauriModule:"Http",message:{cmd:"httpRequest",client:this.id,options:e}}).then(r=>{let s=new F(r);if(t){try{s.data=JSON.parse(s.data)}catch(o){if(s.ok&&s.data==="")s.data={};else if(s.ok)throw Error(`Failed to parse response \`${s.data}\` as JSON: ${o};
              try setting the \`responseType\` option to \`ResponseType.Text\` or \`ResponseType.Binary\` if the API does not return a JSON response.`)}return s}return s})}async get(e,t){return this.request({method:"GET",url:e,...t})}async post(e,t,r){return this.request({method:"POST",url:e,body:t,...r})}async put(e,t,r){return this.request({method:"PUT",url:e,body:t,...r})}async patch(e,t){return this.request({method:"PATCH",url:e,...t})}async delete(e,t){return this.request({method:"DELETE",url:e,...t})}};async function se(n){return i({__tauriModule:"Http",message:{cmd:"createClient",options:n}}).then(e=>new E(e))}var G=null;async function Ke(n,e){return G===null&&(G=await se()),G.request({url:n,method:(e==null?void 0:e.method)??"GET",...e})}var J={};c(J,{isPermissionGranted:()=>Qe,requestPermission:()=>Ze,sendNotification:()=>Ye});async function Qe(){return window.Notification.permission!=="default"?Promise.resolve(window.Notification.permission==="granted"):i({__tauriModule:"Notification",message:{cmd:"isNotificationPermissionGranted"}})}async function Ze(){return window.Notification.requestPermission()}function Ye(n){typeof n=="string"?new window.Notification(n):new window.Notification(n.title,n)}var K={};c(K,{BaseDirectory:()=>O,appCacheDir:()=>tt,appConfigDir:()=>ae,appDataDir:()=>Be,appDir:()=>Xe,appLocalDataDir:()=>et,appLogDir:()=>oe,audioDir:()=>nt,basename:()=>At,cacheDir:()=>it,configDir:()=>rt,dataDir:()=>st,delimiter:()=>vt,desktopDir:()=>at,dirname:()=>Ft,documentDir:()=>ot,downloadDir:()=>lt,executableDir:()=>ut,extname:()=>Et,fontDir:()=>ct,homeDir:()=>dt,isAbsolute:()=>Ct,join:()=>Ot,localDataDir:()=>mt,logDir:()=>Pt,normalize:()=>Tt,pictureDir:()=>pt,publicDir:()=>gt,resolve:()=>Mt,resolveResource:()=>yt,resourceDir:()=>ht,runtimeDir:()=>ft,sep:()=>wt,templateDir:()=>_t,videoDir:()=>bt});function b(){return navigator.appVersion.includes("Win")}async function Xe(){return ae()}async function ae(){return i({__tauriModule:"Path",message:{cmd:"resolvePath",path:"",directory:21}})}async function Be(){return i({__tauriModule:"Path",message:{cmd:"resolvePath",path:"",directory:22}})}async function et(){return i({__tauriModule:"Path",message:{cmd:"resolvePath",path:"",directory:23}})}async function tt(){return i({__tauriModule:"Path",message:{cmd:"resolvePath",path:"",directory:24}})}async function nt(){return i({__tauriModule:"Path",message:{cmd:"resolvePath",path:"",directory:1}})}async function it(){return i({__tauriModule:"Path",message:{cmd:"resolvePath",path:"",directory:2}})}async function rt(){return i({__tauriModule:"Path",message:{cmd:"resolvePath",path:"",directory:3}})}async function st(){return i({__tauriModule:"Path",message:{cmd:"resolvePath",path:"",directory:4}})}async function at(){return i({__tauriModule:"Path",message:{cmd:"resolvePath",path:"",directory:6}})}async function ot(){return i({__tauriModule:"Path",message:{cmd:"resolvePath",path:"",directory:7}})}async function lt(){return i({__tauriModule:"Path",message:{cmd:"resolvePath",path:"",directory:8}})}async function ut(){return i({__tauriModule:"Path",message:{cmd:"resolvePath",path:"",directory:9}})}async function ct(){return i({__tauriModule:"Path",message:{cmd:"resolvePath",path:"",directory:10}})}async function dt(){return i({__tauriModule:"Path",message:{cmd:"resolvePath",path:"",directory:11}})}async function mt(){return i({__tauriModule:"Path",message:{cmd:"resolvePath",path:"",directory:5}})}async function pt(){return i({__tauriModule:"Path",message:{cmd:"resolvePath",path:"",directory:12}})}async function gt(){return i({__tauriModule:"Path",message:{cmd:"resolvePath",path:"",directory:13}})}async function ht(){return i({__tauriModule:"Path",message:{cmd:"resolvePath",path:"",directory:17}})}async function yt(n){return i({__tauriModule:"Path",message:{cmd:"resolvePath",path:n,directory:17}})}async function ft(){return i({__tauriModule:"Path",message:{cmd:"resolvePath",path:"",directory:14}})}async function _t(){return i({__tauriModule:"Path",message:{cmd:"resolvePath",path:"",directory:15}})}async function bt(){return i({__tauriModule:"Path",message:{cmd:"resolvePath",path:"",directory:16}})}async function Pt(){return oe()}async function oe(){return i({__tauriModule:"Path",message:{cmd:"resolvePath",path:"",directory:25}})}var wt=b()?"\\":"/",vt=b()?";":":";async function Mt(...n){return i({__tauriModule:"Path",message:{cmd:"resolve",paths:n}})}async function Tt(n){return i({__tauriModule:"Path",message:{cmd:"normalize",path:n}})}async function Ot(...n){return i({__tauriModule:"Path",message:{cmd:"join",paths:n}})}async function Ft(n){return i({__tauriModule:"Path",message:{cmd:"dirname",path:n}})}async function Et(n){return i({__tauriModule:"Path",message:{cmd:"extname",path:n}})}async function At(n,e){return i({__tauriModule:"Path",message:{cmd:"basename",path:n,ext:e}})}async function Ct(n){return i({__tauriModule:"Path",message:{cmd:"isAbsolute",path:n}})}var Q={};c(Q,{exit:()=>Dt,relaunch:()=>Wt});async function Dt(n=0){return i({__tauriModule:"Process",message:{cmd:"exit",exitCode:n}})}async function Wt(){return i({__tauriModule:"Process",message:{cmd:"relaunch"}})}var Z={};c(Z,{Child:()=>A,Command:()=>P,EventEmitter:()=>g,open:()=>xt});async function St(n,e,t=[],r){return typeof t=="object"&&Object.freeze(t),i({__tauriModule:"Shell",message:{cmd:"execute",program:e,args:t,options:r,onEventFn:d(n)}})}var g=class{constructor(){this.eventListeners=Object.create(null)}addListener(e,t){return this.on(e,t)}removeListener(e,t){return this.off(e,t)}on(e,t){return e in this.eventListeners?this.eventListeners[e].push(t):this.eventListeners[e]=[t],this}once(e,t){let r=(...s)=>{this.removeListener(e,r),t(...s)};return this.addListener(e,r)}off(e,t){return e in this.eventListeners&&(this.eventListeners[e]=this.eventListeners[e].filter(r=>r!==t)),this}removeAllListeners(e){return e?delete this.eventListeners[e]:this.eventListeners=Object.create(null),this}emit(e,...t){if(e in this.eventListeners){let r=this.eventListeners[e];for(let s of r)s(...t);return!0}return!1}listenerCount(e){return e in this.eventListeners?this.eventListeners[e].length:0}prependListener(e,t){return e in this.eventListeners?this.eventListeners[e].unshift(t):this.eventListeners[e]=[t],this}prependOnceListener(e,t){let r=(...s)=>{this.removeListener(e,r),t(...s)};return this.prependListener(e,r)}},A=class{constructor(e){this.pid=e}async write(e){return i({__tauriModule:"Shell",message:{cmd:"stdinWrite",pid:this.pid,buffer:typeof e=="string"?e:Array.from(e)}})}async kill(){return i({__tauriModule:"Shell",message:{cmd:"killChild",pid:this.pid}})}},P=class extends g{constructor(t,r=[],s){super();this.stdout=new g;this.stderr=new g;this.program=t,this.args=typeof r=="string"?[r]:r,this.options=s??{}}static sidecar(t,r=[],s){let o=new P(t,r,s);return o.options.sidecar=!0,o}async spawn(){return St(t=>{switch(t.event){case"Error":this.emit("error",t.payload);break;case"Terminated":this.emit("close",t.payload);break;case"Stdout":this.stdout.emit("data",t.payload);break;case"Stderr":this.stderr.emit("data",t.payload);break}},this.program,this.args,this.options).then(t=>new A(t))}async execute(){return new Promise((t,r)=>{this.on("error",r);let s=[],o=[];this.stdout.on("data",l=>{s.push(l)}),this.stderr.on("data",l=>{o.push(l)}),this.on("close",l=>{t({code:l.code,signal:l.signal,stdout:s.join(`
`),stderr:o.join(`
`)})}),this.spawn().catch(r)})}};async function xt(n,e){return i({__tauriModule:"Shell",message:{cmd:"open",path:n,with:e}})}var X={};c(X,{checkUpdate:()=>Rt,installUpdate:()=>Lt,onUpdaterEvent:()=>Y});async function Y(n){return z("tauri://update-status",e=>{n(e==null?void 0:e.payload)})}async function Lt(){let n;function e(){n&&n(),n=void 0}return new Promise((t,r)=>{function s(o){if(o.error)return e(),r(o.error);if(o.status==="DONE")return e(),t()}Y(s).then(o=>{n=o}).catch(o=>{throw e(),o}),T("tauri://update-install").catch(o=>{throw e(),o})})}async function Rt(){let n;function e(){n&&n(),n=void 0}return new Promise((t,r)=>{function s(l){return e(),t({manifest:l,shouldUpdate:!0})}function o(l){if(l.error)return e(),r(l.error);if(l.status==="UPTODATE")return e(),t({shouldUpdate:!1})}H("tauri://update-available",l=>{s(l==null?void 0:l.payload)}).catch(l=>{throw e(),l}),Y(o).then(l=>{n=l}).catch(l=>{throw e(),l}),T("tauri://update").catch(l=>{throw e(),l})})}var te={};c(te,{CloseRequestedEvent:()=>x,LogicalPosition:()=>D,LogicalSize:()=>C,PhysicalPosition:()=>y,PhysicalSize:()=>h,UserAttentionType:()=>ue,WebviewWindow:()=>m,WebviewWindowHandle:()=>W,WindowManager:()=>S,appWindow:()=>B,availableMonitors:()=>Nt,currentMonitor:()=>kt,getAll:()=>ce,getCurrent:()=>Ut,primaryMonitor:()=>It});var C=class{constructor(e,t){this.type="Logical";this.width=e,this.height=t}},h=class{constructor(e,t){this.type="Physical";this.width=e,this.height=t}toLogical(e){return new C(this.width/e,this.height/e)}},D=class{constructor(e,t){this.type="Logical";this.x=e,this.y=t}},y=class{constructor(e,t){this.type="Physical";this.x=e,this.y=t}toLogical(e){return new D(this.x/e,this.y/e)}},ue=(t=>(t[t.Critical=1]="Critical",t[t.Informational=2]="Informational",t))(ue||{});function Ut(){return new m(window.__TAURI_METADATA__.__currentWindow.label,{skip:!0})}function ce(){return window.__TAURI_METADATA__.__windows.map(n=>new m(n.label,{skip:!0}))}var le=["tauri://created","tauri://error"],W=class{constructor(e){this.label=e,this.listeners=Object.create(null)}async listen(e,t){return this._handleTauriEvent(e,t)?Promise.resolve(()=>{let r=this.listeners[e];r.splice(r.indexOf(t),1)}):_(e,this.label,t)}async once(e,t){return this._handleTauriEvent(e,t)?Promise.resolve(()=>{let r=this.listeners[e];r.splice(r.indexOf(t),1)}):v(e,this.label,t)}async emit(e,t){if(le.includes(e)){for(let r of this.listeners[e]||[])r({event:e,id:-1,windowLabel:this.label,payload:t});return Promise.resolve()}return w(e,this.label,t)}_handleTauriEvent(e,t){return le.includes(e)?(e in this.listeners?this.listeners[e].push(t):this.listeners[e]=[t],!0):!1}},S=class extends W{async scaleFactor(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"scaleFactor"}}}})}async innerPosition(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"innerPosition"}}}}).then(({x:e,y:t})=>new y(e,t))}async outerPosition(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"outerPosition"}}}}).then(({x:e,y:t})=>new y(e,t))}async innerSize(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"innerSize"}}}}).then(({width:e,height:t})=>new h(e,t))}async outerSize(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"outerSize"}}}}).then(({width:e,height:t})=>new h(e,t))}async isFullscreen(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"isFullscreen"}}}})}async isMaximized(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"isMaximized"}}}})}async isDecorated(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"isDecorated"}}}})}async isResizable(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"isResizable"}}}})}async isVisible(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"isVisible"}}}})}async theme(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"theme"}}}})}async isValid(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"isValid"}}}}).catch(e=>!1)}async center(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"center"}}}})}async requestUserAttention(e){let t=null;return e&&(e===1?t={type:"Critical"}:t={type:"Informational"}),i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"requestUserAttention",payload:t}}}})}async setResizable(e){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setResizable",payload:e}}}})}async setTitle(e){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setTitle",payload:e}}}})}async maximize(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"maximize"}}}})}async unmaximize(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"unmaximize"}}}})}async toggleMaximize(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"toggleMaximize"}}}})}async minimize(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"minimize"}}}})}async unminimize(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"unminimize"}}}})}async show(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"show"}}}})}async hide(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"hide"}}}})}async close(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"close"}}}})}async setDecorations(e){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setDecorations",payload:e}}}})}async setAlwaysOnTop(e){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setAlwaysOnTop",payload:e}}}})}async setSize(e){if(!e||e.type!=="Logical"&&e.type!=="Physical")throw new Error("the `size` argument must be either a LogicalSize or a PhysicalSize instance");return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setSize",payload:{type:e.type,data:{width:e.width,height:e.height}}}}}})}async setMinSize(e){if(e&&e.type!=="Logical"&&e.type!=="Physical")throw new Error("the `size` argument must be either a LogicalSize or a PhysicalSize instance");return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setMinSize",payload:e?{type:e.type,data:{width:e.width,height:e.height}}:null}}}})}async setMaxSize(e){if(e&&e.type!=="Logical"&&e.type!=="Physical")throw new Error("the `size` argument must be either a LogicalSize or a PhysicalSize instance");return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setMaxSize",payload:e?{type:e.type,data:{width:e.width,height:e.height}}:null}}}})}async setPosition(e){if(!e||e.type!=="Logical"&&e.type!=="Physical")throw new Error("the `position` argument must be either a LogicalPosition or a PhysicalPosition instance");return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setPosition",payload:{type:e.type,data:{x:e.x,y:e.y}}}}}})}async setFullscreen(e){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setFullscreen",payload:e}}}})}async setFocus(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setFocus"}}}})}async setIcon(e){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setIcon",payload:{icon:typeof e=="string"?e:Array.from(e)}}}}})}async setSkipTaskbar(e){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setSkipTaskbar",payload:e}}}})}async setCursorGrab(e){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setCursorGrab",payload:e}}}})}async setCursorVisible(e){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setCursorVisible",payload:e}}}})}async setCursorIcon(e){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setCursorIcon",payload:e}}}})}async setCursorPosition(e){if(!e||e.type!=="Logical"&&e.type!=="Physical")throw new Error("the `position` argument must be either a LogicalPosition or a PhysicalPosition instance");return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setCursorPosition",payload:{type:e.type,data:{x:e.x,y:e.y}}}}}})}async setIgnoreCursorEvents(e){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setIgnoreCursorEvents",payload:e}}}})}async startDragging(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"startDragging"}}}})}async onResized(e){return this.listen("tauri://resize",e)}async onMoved(e){return this.listen("tauri://move",e)}async onCloseRequested(e){return this.listen("tauri://close-requested",t=>{let r=new x(t);Promise.resolve(e(r)).then(()=>{if(!r.isPreventDefault())return this.close()})})}async onFocusChanged(e){let t=await this.listen("tauri://focus",s=>{e({...s,payload:!0})}),r=await this.listen("tauri://blur",s=>{e({...s,payload:!1})});return()=>{t(),r()}}async onScaleChanged(e){return this.listen("tauri://scale-change",e)}async onMenuClicked(e){return this.listen("tauri://menu",e)}async onFileDropEvent(e){let t=await this.listen("tauri://file-drop",o=>{e({...o,payload:{type:"drop",paths:o.payload}})}),r=await this.listen("tauri://file-drop-hover",o=>{e({...o,payload:{type:"hover",paths:o.payload}})}),s=await this.listen("tauri://file-drop-cancelled",o=>{e({...o,payload:{type:"cancel"}})});return()=>{t(),r(),s()}}async onThemeChanged(e){return this.listen("tauri://theme-changed",e)}},x=class{constructor(e){this._preventDefault=!1;this.event=e.event,this.windowLabel=e.windowLabel,this.id=e.id}preventDefault(){this._preventDefault=!0}isPreventDefault(){return this._preventDefault}},m=class extends S{constructor(e,t={}){super(e),t!=null&&t.skip||i({__tauriModule:"Window",message:{cmd:"createWebview",data:{options:{label:e,...t}}}}).then(async()=>this.emit("tauri://created")).catch(async r=>this.emit("tauri://error",r))}static getByLabel(e){return ce().some(t=>t.label===e)?new m(e,{skip:!0}):null}},B;"__TAURI_METADATA__"in window?B=new m(window.__TAURI_METADATA__.__currentWindow.label,{skip:!0}):(console.warn(`Could not find "window.__TAURI_METADATA__". The "appWindow" value will reference the "main" window label.
Note that this is not an issue if running this frontend on a browser instead of a Tauri window.`),B=new m("main",{skip:!0}));function ee(n){return n===null?null:{name:n.name,scaleFactor:n.scaleFactor,position:new y(n.position.x,n.position.y),size:new h(n.size.width,n.size.height)}}async function kt(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{cmd:{type:"currentMonitor"}}}}).then(ee)}async function It(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{cmd:{type:"primaryMonitor"}}}}).then(ee)}async function Nt(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{cmd:{type:"availableMonitors"}}}}).then(n=>n.map(ee))}var ne={};c(ne,{EOL:()=>zt,arch:()=>qt,platform:()=>Ht,tempdir:()=>Gt,type:()=>jt,version:()=>Vt});var zt=b()?`\r
`:`
`;async function Ht(){return i({__tauriModule:"Os",message:{cmd:"platform"}})}async function Vt(){return i({__tauriModule:"Os",message:{cmd:"version"}})}async function jt(){return i({__tauriModule:"Os",message:{cmd:"osType"}})}async function qt(){return i({__tauriModule:"Os",message:{cmd:"arch"}})}async function Gt(){return i({__tauriModule:"Os",message:{cmd:"tempdir"}})}var $t=f;return he(Jt);})();
window.__TAURI__ = __TAURI_IIFE__
