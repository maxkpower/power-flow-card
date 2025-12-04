function t(t,e,i,s){var r,o=arguments.length,a=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,s);else for(var n=t.length-1;n>=0;n--)(r=t[n])&&(a=(o<3?r(a):o>3?r(e,i,a):r(e,i))||a);return o>3&&a&&Object.defineProperty(e,i,a),a}"function"==typeof SuppressedError&&SuppressedError;var e,i,s="M12,20A6,6 0 0,1 6,14C6,10 12,3.25 12,3.25C12,3.25 18,10 18,14A6,6 0 0,1 12,20Z";function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(t[s]=i[s])}return t}).apply(this,arguments)}!function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(e||(e={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(i||(i={}));var o=function(t,i,s){var r=i?function(t){switch(t.number_format){case e.comma_decimal:return["en-US","en"];case e.decimal_comma:return["de","es","it"];case e.space_comma:return["fr","sv","cs"];case e.system:return;default:return t.language}}(i):void 0;if(Number.isNaN=Number.isNaN||function t(e){return"number"==typeof e&&t(e)},(null==i?void 0:i.number_format)!==e.none&&!Number.isNaN(Number(t))&&Intl)try{return new Intl.NumberFormat(r,a(t,s)).format(Number(t))}catch(e){return console.error(e),new Intl.NumberFormat(void 0,a(t,s)).format(Number(t))}return"string"==typeof t?t:function(t,e){return void 0===e&&(e=2),Math.round(t*Math.pow(10,e))/Math.pow(10,e)}(t,null==s?void 0:s.maximumFractionDigits).toString()+("currency"===(null==s?void 0:s.style)?" "+s.currency:"")},a=function(t,e){var i=r({maximumFractionDigits:2},e);if("string"!=typeof t)return i;if(!e||!e.minimumFractionDigits&&!e.maximumFractionDigits){var s=t.indexOf(".")>-1?t.split(".")[1].length:0;i.minimumFractionDigits=s,i.maximumFractionDigits=s}return i};
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const n=globalThis,l=n.ShadowRoot&&(void 0===n.ShadyCSS||n.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,c=Symbol(),h=new WeakMap;let d=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==c)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(l&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=h.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&h.set(e,t))}return t}toString(){return this.cssText}};const u=l?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new d("string"==typeof t?t:t+"",void 0,c))(e)})(t):t,{is:p,defineProperty:g,getOwnPropertyDescriptor:m,getOwnPropertyNames:v,getOwnPropertySymbols:f,getPrototypeOf:y}=Object,b=globalThis,$=b.trustedTypes,w=$?$.emptyScript:"",_=b.reactiveElementPolyfillSupport,x=(t,e)=>t,A={toAttribute(t,e){switch(e){case Boolean:t=t?w:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},M=(t,e)=>!p(t,e),C={attribute:!0,type:String,converter:A,reflect:!1,useDefault:!1,hasChanged:M};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),b.litPropertyMetadata??=new WeakMap;let E=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=C){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&g(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:r}=m(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:s,set(e){const o=s?.call(this);r?.call(this,e),this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??C}static _$Ei(){if(this.hasOwnProperty(x("elementProperties")))return;const t=y(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(x("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(x("properties"))){const t=this.properties,e=[...v(t),...f(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(u(t))}else void 0!==t&&e.push(u(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{if(l)t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const i of e){const e=document.createElement("style"),s=n.litNonce;void 0!==s&&e.setAttribute("nonce",s),e.textContent=i.cssText,t.appendChild(e)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const r=(void 0!==i.converter?.toAttribute?i.converter:A).toAttribute(e,i.type);this._$Em=t,null==r?this.removeAttribute(s):this.setAttribute(s,r),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:A;this._$Em=s;const o=r.fromAttribute(e,t.type);this[s]=o??this._$Ej?.get(s)??o,this._$Em=null}}requestUpdate(t,e,i){if(void 0!==t){const s=this.constructor,r=this[t];if(i??=s.getPropertyOptions(t),!((i.hasChanged??M)(r,e)||i.useDefault&&i.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(s._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:r},o){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??e??this[t]),!0!==r||void 0!==o)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===s&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,s=this[e];!0!==t||this._$AL.has(e)||void 0===s||this.C(e,void 0,i,s)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};E.elementStyles=[],E.shadowRootOptions={mode:"open"},E[x("elementProperties")]=new Map,E[x("finalized")]=new Map,_?.({ReactiveElement:E}),(b.reactiveElementVersions??=[]).push("2.1.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const H=globalThis,S=H.trustedTypes,k=S?S.createPolicy("lit-html",{createHTML:t=>t}):void 0,L="$lit$",P=`lit$${Math.random().toFixed(9).slice(2)}$`,V="?"+P,T=`<${V}>`,N=document,O=()=>N.createComment(""),U=t=>null===t||"object"!=typeof t&&"function"!=typeof t,R=Array.isArray,D="[ \t\n\f\r]",j=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,I=/-->/g,z=/>/g,W=RegExp(`>|${D}(?:([^\\s"'>=/]+)(${D}*=${D}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),F=/'/g,B=/"/g,Z=/^(?:script|style|textarea|title)$/i,q=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),G=q(1),Y=q(2),J=Symbol.for("lit-noChange"),K=Symbol.for("lit-nothing"),Q=new WeakMap,X=N.createTreeWalker(N,129);function tt(t,e){if(!R(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==k?k.createHTML(e):e}const et=(t,e)=>{const i=t.length-1,s=[];let r,o=2===e?"<svg>":3===e?"<math>":"",a=j;for(let e=0;e<i;e++){const i=t[e];let n,l,c=-1,h=0;for(;h<i.length&&(a.lastIndex=h,l=a.exec(i),null!==l);)h=a.lastIndex,a===j?"!--"===l[1]?a=I:void 0!==l[1]?a=z:void 0!==l[2]?(Z.test(l[2])&&(r=RegExp("</"+l[2],"g")),a=W):void 0!==l[3]&&(a=W):a===W?">"===l[0]?(a=r??j,c=-1):void 0===l[1]?c=-2:(c=a.lastIndex-l[2].length,n=l[1],a=void 0===l[3]?W:'"'===l[3]?B:F):a===B||a===F?a=W:a===I||a===z?a=j:(a=W,r=void 0);const d=a===W&&t[e+1].startsWith("/>")?" ":"";o+=a===j?i+T:c>=0?(s.push(n),i.slice(0,c)+L+i.slice(c)+P+d):i+P+(-2===c?e:d)}return[tt(t,o+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]};class it{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let r=0,o=0;const a=t.length-1,n=this.parts,[l,c]=et(t,e);if(this.el=it.createElement(l,i),X.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=X.nextNode())&&n.length<a;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(L)){const e=c[o++],i=s.getAttribute(t).split(P),a=/([.?@])?(.*)/.exec(e);n.push({type:1,index:r,name:a[2],strings:i,ctor:"."===a[1]?nt:"?"===a[1]?lt:"@"===a[1]?ct:at}),s.removeAttribute(t)}else t.startsWith(P)&&(n.push({type:6,index:r}),s.removeAttribute(t));if(Z.test(s.tagName)){const t=s.textContent.split(P),e=t.length-1;if(e>0){s.textContent=S?S.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],O()),X.nextNode(),n.push({type:2,index:++r});s.append(t[e],O())}}}else if(8===s.nodeType)if(s.data===V)n.push({type:2,index:r});else{let t=-1;for(;-1!==(t=s.data.indexOf(P,t+1));)n.push({type:7,index:r}),t+=P.length-1}r++}}static createElement(t,e){const i=N.createElement("template");return i.innerHTML=t,i}}function st(t,e,i=t,s){if(e===J)return e;let r=void 0!==s?i._$Co?.[s]:i._$Cl;const o=U(e)?void 0:e._$litDirective$;return r?.constructor!==o&&(r?._$AO?.(!1),void 0===o?r=void 0:(r=new o(t),r._$AT(t,i,s)),void 0!==s?(i._$Co??=[])[s]=r:i._$Cl=r),void 0!==r&&(e=st(t,r._$AS(t,e.values),r,s)),e}class rt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??N).importNode(e,!0);X.currentNode=s;let r=X.nextNode(),o=0,a=0,n=i[0];for(;void 0!==n;){if(o===n.index){let e;2===n.type?e=new ot(r,r.nextSibling,this,t):1===n.type?e=new n.ctor(r,n.name,n.strings,this,t):6===n.type&&(e=new ht(r,this,t)),this._$AV.push(e),n=i[++a]}o!==n?.index&&(r=X.nextNode(),o++)}return X.currentNode=N,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class ot{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=K,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=st(this,t,e),U(t)?t===K||null==t||""===t?(this._$AH!==K&&this._$AR(),this._$AH=K):t!==this._$AH&&t!==J&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>R(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==K&&U(this._$AH)?this._$AA.nextSibling.data=t:this.T(N.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=it.createElement(tt(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new rt(s,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=Q.get(t.strings);return void 0===e&&Q.set(t.strings,e=new it(t)),e}k(t){R(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const r of t)s===e.length?e.push(i=new ot(this.O(O()),this.O(O()),this,this.options)):i=e[s],i._$AI(r),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class at{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,r){this.type=1,this._$AH=K,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=K}_$AI(t,e=this,i,s){const r=this.strings;let o=!1;if(void 0===r)t=st(this,t,e,0),o=!U(t)||t!==this._$AH&&t!==J,o&&(this._$AH=t);else{const s=t;let a,n;for(t=r[0],a=0;a<r.length-1;a++)n=st(this,s[i+a],e,a),n===J&&(n=this._$AH[a]),o||=!U(n)||n!==this._$AH[a],n===K?t=K:t!==K&&(t+=(n??"")+r[a+1]),this._$AH[a]=n}o&&!s&&this.j(t)}j(t){t===K?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class nt extends at{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===K?void 0:t}}class lt extends at{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==K)}}class ct extends at{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){if((t=st(this,t,e,0)??K)===J)return;const i=this._$AH,s=t===K&&i!==K||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==K&&(i===K||s);s&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class ht{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){st(this,t)}}const dt=H.litHtmlPolyfillSupport;dt?.(it,ot),(H.litHtmlVersions??=[]).push("3.3.1");const ut=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let pt=class extends E{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const s=i?.renderBefore??e;let r=s._$litPart$;if(void 0===r){const t=i?.renderBefore??null;s._$litPart$=r=new ot(e.insertBefore(O(),t),t,void 0,i??{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return J}};pt._$litElement$=!0,pt.finalized=!0,ut.litElementHydrateSupport?.({LitElement:pt});const gt=ut.litElementPolyfillSupport;gt?.({LitElement:pt}),(ut.litElementVersions??=[]).push("4.2.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const mt={attribute:!0,type:String,converter:A,reflect:!1,hasChanged:M},vt=(t=mt,e,i)=>{const{kind:s,metadata:r}=i;let o=globalThis.litPropertyMetadata.get(r);if(void 0===o&&globalThis.litPropertyMetadata.set(r,o=new Map),"setter"===s&&((t=Object.create(t)).wrapped=!0),o.set(i.name,t),"accessor"===s){const{name:s}=i;return{set(i){const r=e.get.call(this);e.set.call(this,i),this.requestUpdate(s,r,t)},init(e){return void 0!==e&&this.C(s,void 0,t,e),e}}}if("setter"===s){const{name:s}=i;return function(i){const r=this[s];e.call(this,i),this.requestUpdate(s,r,t)}}throw Error("Unsupported decorator location: "+s)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ft(t){return(e,i)=>"object"==typeof i?vt(t,e,i):((t,e,i)=>{const s=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),s?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function yt(t,e){return(e,i,s)=>((t,e,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&"object"!=typeof e&&Object.defineProperty(t,e,i),i))(e,i,{get(){return(e=>e.renderRoot?.querySelector(t)??null)(this)}})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const bt=1;class $t{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const wt=(t=>(...e)=>({_$litDirective$:t,values:e}))(class extends $t{constructor(t){if(super(t),t.type!==bt||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(t=>""!==t)));for(const t in e)e[t]&&!this.nt?.has(t)&&this.st.add(t);return this.render(e)}const i=t.element.classList;for(const t of this.st)t in e||(i.remove(t),this.st.delete(t));for(const t in e){const s=!!e[t];s===this.st.has(t)||this.nt?.has(t)||(s?(i.add(t),this.st.add(t)):(i.remove(t),this.st.delete(t)))}return J}}),_t=(t,e)=>Number(`${Math.round(Number(`${t}e${e}`))}e-${e}`);
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function xt(t){return!isNaN(parseFloat(t))&&!isNaN(Number(t))}function At(t,e=0){return xt(t)?Number(t):e}function Mt(t,e=/\s+/){const i=[];if(null!=t){const s=Array.isArray(t)?t:`${t}`.split(e);for(const t of s){const e=`${t}`.trim();e&&i.push(e)}}return i}var Ct="2.6.2";console.groupCollapsed(`%c⚡ Power Flow Card v${Ct} is installed`,"color: #488fc2; font-weight: bold"),console.log("Readme:","https://github.com/ulic75/power-flow-card"),console.groupEnd();const Et=function(t,e,i){var s;return void 0===i&&(i=!1),function(){var r=[].slice.call(arguments),o=this,a=i&&!s;clearTimeout(s),s=setTimeout(function(){s=null,i||t.apply(o,r)},e),a&&t.apply(o,r)}}(t=>{console.log(`%c⚡ Power Flow Card v${Ct} %cError: ${t}`,"color: #488fc2; font-weight: bold","color: #b33a3a; font-weight: normal")},500),Ht=238.76104;let St=class extends pt{constructor(){super(...arguments),this._config={},this.unavailableOrMisconfiguredError=t=>Et(`entity "${null!=t?t:"Unknown"}" is not available or misconfigured`),this.entityAvailable=t=>{var e;return xt(null===(e=this.hass.states[t])||void 0===e?void 0:e.state)},this.entityInverted=t=>this._config.inverted_entities.includes(t),this.previousDur={},this.circleRate=(t,e)=>{var i,s;const r=null===(i=this._config)||void 0===i?void 0:i.min_flow_rate,o=null===(s=this._config)||void 0===s?void 0:s.max_flow_rate;return o-t/e*(o-r)},this.getEntityState=t=>t&&this.entityAvailable(t)?At(this.hass.states[t].state):(this.unavailableOrMisconfiguredError(t),0),this.getEntityStateWatts=t=>{if(!t||!this.entityAvailable(t))return this.unavailableOrMisconfiguredError(t),0;const e=this.hass.states[t],i=At(e.state);return"W"===e.attributes.unit_of_measurement?i:1e3*i},this.displayValue=t=>{if(null===t)return"0";const e=t>=this._config.watt_threshold;return`${o(e?_t(t/1e3,this._config.kw_decimals):_t(t,this._config.w_decimals),this.hass.locale)} ${e?"kW":"W"}`},this.renderIcon=(t,e)=>{var i,s;const r=null===(i=this._config.icons)||void 0===i?void 0:i[t];if(null==r?void 0:r.image){const e=null!==(s=r.image_size)&&void 0!==s?s:32;return G`<img
        class="custom-image"
        src=${r.image}
        alt=${t}
        style="width: ${e}px; height: ${e}px;"
      />`}const o=(null==r?void 0:r.icon)?void 0:e;return(null==r?void 0:r.icon)?G`<ha-icon .icon=${r.icon}></ha-icon>`:G`<ha-svg-icon .path=${o}></ha-svg-icon>`}}setConfig(t){if(!t.entities||!t.entities.battery&&!t.entities.grid&&!t.entities.solar)throw new Error("At least one entity for battery, grid or solar must be defined");this._config=Object.assign(Object.assign({},t),{inverted_entities:Mt(t.inverted_entities,","),kw_decimals:At(t.kw_decimals,1),min_flow_rate:At(t.min_flow_rate,.75),max_flow_rate:At(t.max_flow_rate,6),w_decimals:At(t.w_decimals,1),watt_threshold:At(t.watt_threshold)})}getCardSize(){return 3}render(){var t,e,i,r,a,n;if(!this._config||!this.hass)return G``;const{entities:l}=this._config,c=void 0!==l.grid,h=void 0!==l.battery,d=void 0!==l.gas,u=void 0!==l.water,p=void 0!==l.solar,g=c&&("string"==typeof l.grid||l.grid.production);let m=0;c&&(m="string"==typeof l.grid?this.entityInverted("grid")?Math.abs(Math.min(this.getEntityStateWatts(l.grid),0)):Math.max(this.getEntityStateWatts(l.grid),0):this.getEntityStateWatts(l.grid.consumption));let v=null,f=null;if(d){const e=this.hass.states[this._config.entities.gas],i=Number(e.state);v=null!==(t=e.attributes.unit_of_measurement)&&void 0!==t?t:"m³",f=this.entityInverted("gas")?Math.abs(Math.min(i,0)):Math.max(i,0)}let y=null,b=null;if(u){const t=this.hass.states[this._config.entities.water],i=Number(t.state);y=null!==(e=t.attributes.unit_of_measurement)&&void 0!==e?e:"m³",b=this.entityInverted("water")?Math.abs(Math.min(i,0)):Math.max(i,0)}let $=0;p&&($=this.entityInverted("solar")?Math.abs(Math.min(this.getEntityStateWatts(l.solar),0)):Math.max(this.getEntityStateWatts(l.solar),0));let w=null,_=null;h&&("string"==typeof l.battery?(w=this.entityInverted("battery")?Math.max(this.getEntityStateWatts(l.battery),0):Math.abs(Math.min(this.getEntityStateWatts(l.battery),0)),_=this.entityInverted("battery")?Math.abs(Math.min(this.getEntityStateWatts(l.battery),0)):Math.max(this.getEntityStateWatts(l.battery),0)):(w=this.getEntityStateWatts(null===(i=l.battery)||void 0===i?void 0:i.production),_=this.getEntityStateWatts(null===(r=l.battery)||void 0===r?void 0:r.consumption)));let x=null;g&&(x="string"==typeof l.grid?this.entityInverted("grid")?Math.max(this.getEntityStateWatts(l.grid),0):Math.abs(Math.min(this.getEntityStateWatts(l.grid),0)):this.getEntityStateWatts(l.grid.production));let A=null;p&&(A=$-(null!=x?x:0)-(null!=w?w:0));let M=null,C=null;null!==A&&A<0&&(h&&(M=Math.abs(A),M>m&&(C=Math.min(M-m,0),M=m)),A=0);let E=null;p&&h?(C||(C=Math.max(0,(x||0)-($||0)-(w||0)-(M||0))),E=w-(M||0)):!p&&h&&(C=x);let H=0;p&&x&&(H=x-(null!=C?C:0));let S=null;h&&(S=(null!=_?_:0)-(null!=C?C:0));const k=Math.max(m-(null!=M?M:0),0),L=Math.max(k+(null!=A?A:0)+(null!=S?S:0),0);let P,V;S&&(P=Ht*(S/L)),p&&(V=Ht*(A/L));const T=Ht*((L-(null!=S?S:0)-(null!=A?A:0))/L),N=k+(null!=A?A:0)+H+(null!=E?E:0)+(null!=S?S:0)+(null!=M?M:0)+(null!=C?C:0),O=(null===(a=l.battery_charge)||void 0===a?void 0:a.length)?this.getEntityState(l.battery_charge):null;let U="M16 20H8V6H16M16.67 4H15V2H9V4H7.33C6.6 4 6 4.6 6 5.33V20.67C6 21.4 6.6 22 7.33 22H16.67C17.41 22 18 21.41 18 20.67V5.33C18 4.6 17.4 4 16.67 4M15 16H9V19H15V16M15 7H9V10H15V7M15 11.5H9V14.5H15V11.5Z";null===O?U="M16.67,4H15V2H9V4H7.33A1.33,1.33 0 0,0 6,5.33V20.67C6,21.4 6.6,22 7.33,22H16.67A1.33,1.33 0 0,0 18,20.67V5.33C18,4.6 17.4,4 16.67,4Z":O<=72&&O>44?U="M16 20H8V6H16M16.67 4H15V2H9V4H7.33C6.6 4 6 4.6 6 5.33V20.67C6 21.4 6.6 22 7.33 22H16.67C17.41 22 18 21.41 18 20.67V5.33C18 4.6 17.4 4 16.67 4M15 16H9V19H15V16M15 11.5H9V14.5H15V11.5Z":O<=44&&O>16?U="M16 20H8V6H16M16.67 4H15V2H9V4H7.33C6.6 4 6 4.6 6 5.33V20.67C6 21.4 6.6 22 7.33 22H16.67C17.41 22 18 21.41 18 20.67V5.33C18 4.6 17.4 4 16.67 4M15 16H9V19H15V16":O<=16&&(U="M16,20H8V6H16M16.67,4H15V2H9V4H7.33A1.33,1.33 0 0,0 6,5.33V20.67C6,21.4 6.6,22 7.33,22H16.67A1.33,1.33 0 0,0 18,20.67V5.33C18,4.6 17.4,4 16.67,4Z");const R={batteryGrid:this.circleRate(null!==(n=null!=M?M:C)&&void 0!==n?n:0,N),batteryToHome:this.circleRate(null!=S?S:0,N),gridToHome:this.circleRate(k,N),solarToBattery:this.circleRate(null!=E?E:0,N),solarToGrid:this.circleRate(H,N),solarToHome:this.circleRate(null!=A?A:0,N)};return["batteryGrid","batteryToHome","gridToHome","solarToBattery","solarToGrid","solarToHome"].forEach(t=>{const e=this[`${t}Flow`];e&&this.previousDur[t]&&this.previousDur[t]!==R[t]&&(e.pauseAnimations(),e.setCurrentTime(e.getCurrentTime()*(R[t]/this.previousDur[t])),e.unpauseAnimations()),this.previousDur[t]=R[t]}),G`
      <ha-card .header=${this._config.title}>
        <div class="card-content">
          ${p||d||u?G`<div class="row">
                <div class="spacer"></div>
                ${p?G`<div class="circle-container solar">
                      <span class="label"
                        >${this.hass.localize("ui.panel.lovelace.cards.energy.energy_distribution.solar")}</span
                      >
                      <div class="circle">
                        ${this.renderIcon("solar","M11.45,2V5.55L15,3.77L11.45,2M10.45,8L8,10.46L11.75,11.71L10.45,8M2,11.45L3.77,15L5.55,11.45H2M10,2H2V10C2.57,10.17 3.17,10.25 3.77,10.25C7.35,10.26 10.26,7.35 10.27,3.75C10.26,3.16 10.17,2.57 10,2M17,22V16H14L19,7V13H22L17,22Z")}
                        <span class="solar">
                          ${this.displayValue($)}</span
                        >
                      </div>
                    </div>`:d||u?G`<div class="spacer"></div>`:""}
                ${d?G`<div class="circle-container gas">
                      <span class="label"
                        >${this.hass.localize("ui.panel.lovelace.cards.energy.energy_distribution.gas")}</span
                      >
                      <div class="circle">
                        ${this.renderIcon("gas","M17.66 11.2C17.43 10.9 17.15 10.64 16.89 10.38C16.22 9.78 15.46 9.35 14.82 8.72C13.33 7.26 13 4.85 13.95 3C13 3.23 12.17 3.75 11.46 4.32C8.87 6.4 7.85 10.07 9.07 13.22C9.11 13.32 9.15 13.42 9.15 13.55C9.15 13.77 9 13.97 8.8 14.05C8.57 14.15 8.33 14.09 8.14 13.93C8.08 13.88 8.04 13.83 8 13.76C6.87 12.33 6.69 10.28 7.45 8.64C5.78 10 4.87 12.3 5 14.47C5.06 14.97 5.12 15.47 5.29 15.97C5.43 16.57 5.7 17.17 6 17.7C7.08 19.43 8.95 20.67 10.96 20.92C13.1 21.19 15.39 20.8 17.03 19.32C18.86 17.66 19.5 15 18.56 12.72L18.43 12.46C18.22 12 17.66 11.2 17.66 11.2M14.5 17.5C14.22 17.74 13.76 18 13.4 18.1C12.28 18.5 11.16 17.94 10.5 17.28C11.69 17 12.4 16.12 12.61 15.23C12.78 14.43 12.46 13.77 12.33 13C12.21 12.26 12.23 11.63 12.5 10.94C12.69 11.32 12.89 11.7 13.13 12C13.9 13 15.11 13.44 15.37 14.8C15.41 14.94 15.43 15.08 15.43 15.23C15.46 16.05 15.1 16.95 14.5 17.5H14.5Z")}
                        ${o(f||0,this.hass.locale,{maximumFractionDigits:1})}
                        ${v}
                      </div>
                      <svg width="80" height="30">
                        <path d="M40 -10 v50" id="gas" />
                        ${f?Y`<circle
                              r="3.4"
                              class="gas"
                              vector-effect="non-scaling-stroke"
                            >
                              <animateMotion
                                dur="1.66s"
                                repeatCount="indefinite"
                                calcMode="linear"
                              >
                                <mpath xlink:href="#gas" />
                              </animateMotion>
                            </circle>`:""}
                      </svg>
                    </div>`:u?G`<div class="circle-container water">
                      <span class="label"
                        >${this.hass.localize("ui.panel.lovelace.cards.energy.energy_distribution.water")}</span
                      >
                      <div class="circle">
                        ${this.renderIcon("water",s)}
                        ${o(b||0,this.hass.locale,{maximumFractionDigits:1})}
                        ${y}
                      </div>
                      <svg width="80" height="30">
                        <path d="M40 -10 v40" id="water" />
                        ${b?Y`<circle
                                r="3.4"
                                class="water"
                                vector-effect="non-scaling-stroke"
                              >
                                <animateMotion
                                  dur="1.66s"
                                  repeatCount="indefinite"
                                  calcMode="linear"
                                >
                                  <mpath xlink:href="#water" />
                                </animateMotion>
                              </circle>`:""}
                      </svg>
                    </div> `:G`<div class="spacer"></div>`}
              </div>`:G``}
          <div class="row">
            ${c?G` <div class="circle-container grid">
                  <div class="circle">
                    ${this.renderIcon("grid","M8.28,5.45L6.5,4.55L7.76,2H16.23L17.5,4.55L15.72,5.44L15,4H9L8.28,5.45M18.62,8H14.09L13.3,5H10.7L9.91,8H5.38L4.1,10.55L5.89,11.44L6.62,10H17.38L18.1,11.45L19.89,10.56L18.62,8M17.77,22H15.7L15.46,21.1L12,15.9L8.53,21.1L8.3,22H6.23L9.12,11H11.19L10.83,12.35L12,14.1L13.16,12.35L12.81,11H14.88L17.77,22M11.4,15L10.5,13.65L9.32,18.13L11.4,15M14.68,18.12L13.5,13.64L12.6,15L14.68,18.12Z")}
                    ${null!==x?G`<span class="return">
                          <ha-svg-icon
                            class="small"
                            .path=${"M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"}
                          ></ha-svg-icon
                          >${this.displayValue(x)}
                        </span>`:null}
                    <span class="consumption">
                      <ha-svg-icon
                        class="small"
                        .path=${"M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"}
                      ></ha-svg-icon
                      >${this.displayValue(m)}
                    </span>
                  </div>
                  <span class="label"
                    >${this.hass.localize("ui.panel.lovelace.cards.energy.energy_distribution.grid")}</span
                  >
                </div>`:G`<div class="spacer"></div>`}
            <div class="circle-container home">
              <div class="circle">
                ${this.renderIcon("home","M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z")}
                ${this.displayValue(L)}
                <svg>
                  ${void 0!==V?Y`<circle
                            class="solar"
                            cx="40"
                            cy="40"
                            r="38"
                            stroke-dasharray="${V} ${Ht-V}"
                            shape-rendering="geometricPrecision"
                            stroke-dashoffset="-${Ht-V}"
                          />`:""}
                  ${P?Y`<circle
                            class="battery"
                            cx="40"
                            cy="40"
                            r="38"
                            stroke-dasharray="${P} ${Ht-P}"
                            stroke-dashoffset="-${Ht-P-(V||0)}"
                            shape-rendering="geometricPrecision"
                          />`:""}
                  <circle
                    class="grid"
                    cx="40"
                    cy="40"
                    r="38"
                    stroke-dasharray="${null!=T?T:Ht-V-(P||0)} ${void 0!==T?Ht-T:V+(P||0)}"
                    stroke-dashoffset="0"
                    shape-rendering="geometricPrecision"
                  />
                </svg>
              </div>
              ${d&&u?"":G` <span class="label"
                    >${this.hass.localize("ui.panel.lovelace.cards.energy.energy_distribution.home")}</span
                  >`}
            </div>
          </div>
          ${h||u&&d?G`<div class="row">
                <div class="spacer"></div>
                ${h?G` <div class="circle-container battery">
                      <div class="circle">
                        ${null!==O?G` <span>
                              ${o(O,this.hass.locale,{maximumFractionDigits:0,minimumFractionDigits:0})}%
                            </span>`:null}
                        ${this.renderIcon("battery",U)}
                        <span class="battery-in">
                          <ha-svg-icon
                            class="small"
                            .path=${"M11,4H13V16L18.5,10.5L19.92,11.92L12,19.84L4.08,11.92L5.5,10.5L11,16V4Z"}
                          ></ha-svg-icon
                          >${this.displayValue(w)}</span
                        >
                        <span class="battery-out">
                          <ha-svg-icon
                            class="small"
                            .path=${"M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z"}
                          ></ha-svg-icon
                          >${this.displayValue(_)}</span
                        >
                      </div>
                      <span class="label"
                        >${this.hass.localize("ui.panel.lovelace.cards.energy.energy_distribution.battery")}</span
                      >
                    </div>`:G`<div class="spacer"></div>`}
                ${d&&u?G`<div class="circle-container water bottom">
                      <svg width="80" height="30">
                        <path d="M40 40 v-40" id="water" />
                        ${b?Y`<circle
                                r="3.4"
                                class="water"
                                vector-effect="non-scaling-stroke"
                              >
                                <animateMotion
                                  dur="1.66s"
                                  repeatCount="indefinite"
                                  calcMode="linear"
                                >
                                  <mpath xlink:href="#water" />
                                </animateMotion>
                              </circle>`:""}
                      </svg>
                      <div class="circle">
                        ${this.renderIcon("water",s)}
                        ${o(b||0,this.hass.locale,{maximumFractionDigits:1})}
                        ${y}
                      </div>
                      <span class="label"
                        >${this.hass.localize("ui.panel.lovelace.cards.energy.energy_distribution.water")}</span
                      >
                    </div>`:G`<div class="spacer"></div>`}
              </div>`:G`<div class="spacer"></div>`}
          ${p?G`<div
                class="lines ${wt({high:h,"water-gas":!h&&d&&u})}"
              >
                <svg
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid slice"
                  id="solar-home-flow"
                >
                  <path
                    id="solar"
                    class="solar"
                    d="M${h?55:53},0 v${c?15:17} c0,${h?"35 10,30 30,30":"40 10,35 30,35"} h25"
                    vector-effect="non-scaling-stroke"
                  ></path>
                  ${A?Y`<circle
                            r="1"
                            class="solar"
                            vector-effect="non-scaling-stroke"
                          >
                            <animateMotion
                              dur="${R.solarToHome}s"
                              repeatCount="indefinite"
                              calcMode="linear"
                            >
                              <mpath xlink:href="#solar" />
                            </animateMotion>
                          </circle>`:""}
                </svg>
              </div>`:""}
          ${g&&p?G`<div
                class="lines ${wt({high:h,"water-gas":!h&&d&&u})}"
              >
                <svg
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid slice"
                  id="solar-grid-flow"
                >
                  <path
                    id="return"
                    class="return"
                    d="M${h?45:47},0 v15 c0,${h?"35 -10,30 -30,30":"40 -10,35 -30,35"} h-20"
                    vector-effect="non-scaling-stroke"
                  ></path>
                  ${H&&p?Y`<circle
                        r="1"
                        class="return"
                        vector-effect="non-scaling-stroke"
                      >
                        <animateMotion
                          dur="${R.solarToGrid}s"
                          repeatCount="indefinite"
                          calcMode="linear"
                        >
                          <mpath xlink:href="#return" />
                        </animateMotion>
                      </circle>`:""}
                </svg>
              </div>`:""}
          ${h&&p?G`<div
                class="lines ${wt({high:h,"water-gas":!h&&d&&u})}"
              >
                <svg
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid slice"
                  id="solar-battery-flow"
                >
                  <path
                    id="battery-solar"
                    class="battery-solar"
                    d="M50,0 V100"
                    vector-effect="non-scaling-stroke"
                  ></path>
                  ${E?Y`<circle
                            r="1"
                            class="battery-solar"
                            vector-effect="non-scaling-stroke"
                          >
                            <animateMotion
                              dur="${R.solarToBattery}s"
                              repeatCount="indefinite"
                              calcMode="linear"
                            >
                              <mpath xlink:href="#battery-solar" />
                            </animateMotion>
                          </circle>`:""}
                </svg>
              </div>`:""}
          ${c?G`<div
                class="lines ${wt({high:h,"water-gas":!h&&d&&u})}"
              >
                <svg
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid slice"
                  id="grid-home-flow"
                >
                  <path
                    class="grid"
                    id="grid"
                    d="M0,${h?50:p?56:53} H100"
                    vector-effect="non-scaling-stroke"
                  ></path>
                  ${k?Y`<circle
                    r="1"
                    class="grid"
                    vector-effect="non-scaling-stroke"
                  >
                    <animateMotion
                      dur="${R.gridToHome}s"
                      repeatCount="indefinite"
                      calcMode="linear"
                    >
                      <mpath xlink:href="#grid" />
                    </animateMotion>
                  </circle>`:""}
                </svg>
              </div>`:null}
          ${h?G`<div
                class="lines ${wt({high:h,"water-gas":!h&&d&&u})}"
              >
                <svg
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid slice"
                  id="battery-home-flow"
                >
                  <path
                    id="battery-home"
                    class="battery-home"
                    d="M55,100 v-${c?15:17} c0,-35 10,-30 30,-30 h20"
                    vector-effect="non-scaling-stroke"
                  ></path>
                  ${S?Y`<circle
                        r="1"
                        class="battery-home"
                        vector-effect="non-scaling-stroke"
                      >
                        <animateMotion
                          dur="${R.batteryToHome}s"
                          repeatCount="indefinite"
                          calcMode="linear"
                        >
                          <mpath xlink:href="#battery-home" />
                        </animateMotion>
                      </circle>`:""}
                </svg>
              </div>`:""}
          ${c&&h?G`<div
                class="lines ${wt({high:h,"water-gas":!h&&d&&u})}"
              >
                <svg
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid slice"
                  id="battery-grid-flow"
                >
                  <path
                    id="battery-grid"
                    class=${wt({"battery-from-grid":Boolean(M),"battery-to-grid":Boolean(C)})}
                    d="M45,100 v-15 c0,-35 -10,-30 -30,-30 h-20"
                    vector-effect="non-scaling-stroke"
                  ></path>
                  ${M?Y`<circle
                    r="1"
                    class="battery-from-grid"
                    vector-effect="non-scaling-stroke"
                  >
                    <animateMotion
                      dur="${R.batteryGrid}s"
                      repeatCount="indefinite"
                      keyPoints="1;0" keyTimes="0;1"
                      calcMode="linear"
                    >
                      <mpath xlink:href="#battery-grid" />
                    </animateMotion>
                  </circle>`:""}
                  ${C?Y`<circle
                        r="1"
                        class="battery-to-grid"
                        vector-effect="non-scaling-stroke"
                      >
                        <animateMotion
                          dur="${R.batteryGrid}s"
                          repeatCount="indefinite"
                          calcMode="linear"
                        >
                          <mpath xlink:href="#battery-grid" />
                        </animateMotion>
                      </circle>`:""}
                </svg>
              </div>`:""}
        </div>
        ${function(t){if(!t)return!1;if(t.startsWith("/"))return!0;try{return new URL(t,window.location.origin).origin===window.location.origin}catch(t){return!1}}(this._config.dashboard_link)?G`
              <div class="card-actions">
                <a href=${this._config.dashboard_link}
                  ><mwc-button>
                    ${this.hass.localize("ui.panel.lovelace.cards.energy.energy_distribution.go_to_energy_dashboard")}
                  </mwc-button></a
                >
              </div>
            `:""}
      </ha-card>
    `}};St.styles=((t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new d(i,t,c)})`
    :host {
      --mdc-icon-size: 24px;
      --glass-background: rgba(255, 255, 255, 0.1);
      --glass-border: rgba(255, 255, 255, 0.2);
      --glass-shadow: rgba(0, 0, 0, 0.1);
      --glass-blur: 12px;
      /* MUI Color Palette */
      --mui-solar: #ffc107;
      --mui-solar-glow: rgba(255, 193, 7, 0.4);
      --mui-grid-consumption: #f44336;
      --mui-grid-consumption-glow: rgba(244, 67, 54, 0.4);
      --mui-grid-return: #4caf50;
      --mui-grid-return-glow: rgba(76, 175, 80, 0.4);
      --mui-battery-in: #8bc34a;
      --mui-battery-in-glow: rgba(139, 195, 74, 0.4);
      --mui-battery-out: #009688;
      --mui-battery-out-glow: rgba(0, 150, 136, 0.4);
      --mui-home: #2196f3;
      --mui-home-glow: rgba(33, 150, 243, 0.4);
      --mui-gas: #ff9800;
      --mui-gas-glow: rgba(255, 152, 0, 0.4);
      --mui-water: #00bcd4;
      --mui-water-glow: rgba(0, 188, 212, 0.4);
    }
    ha-card {
      background: var(--glass-background) !important;
      backdrop-filter: blur(var(--glass-blur));
      -webkit-backdrop-filter: blur(var(--glass-blur));
      border: 1px solid var(--glass-border) !important;
      border-radius: 16px !important;
      box-shadow: 0 8px 32px var(--glass-shadow),
        inset 0 1px 0 rgba(255, 255, 255, 0.1);
    }
    .card-content {
      position: relative;
      padding: 16px;
    }
    .lines {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 146px;
      display: flex;
      justify-content: center;
      padding: 0 16px 16px;
      box-sizing: border-box;
    }
    .lines.water-gas {
      bottom: 110px;
    }
    .lines.high {
      bottom: 100px;
      height: 156px;
    }
    .lines svg {
      width: calc(100% - 160px);
      height: 100%;
      max-width: 340px;
    }
    .row {
      display: flex;
      justify-content: space-between;
      max-width: 500px;
      margin: 0 auto;
    }
    .circle-container {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .circle-container.solar {
      margin: 0 4px;
      height: 130px;
    }
    .circle-container.gas {
      margin-left: 4px;
      height: 130px;
    }
    .circle-container.water {
      margin-left: 4px;
      height: 130px;
    }
    .circle-container.water.bottom {
      position: relative;
      top: -20px;
      margin-bottom: -20px;
    }
    .circle-container.battery {
      height: 110px;
      justify-content: flex-end;
    }
    .spacer {
      width: 84px;
    }
    .circle {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      box-sizing: border-box;
      border: 1.5px solid;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      font-size: 12px;
      line-height: 12px;
      position: relative;
      text-decoration: none;
      color: var(--primary-text-color);
      background: var(--glass-background);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      box-shadow: 0 4px 16px var(--glass-shadow),
        inset 0 1px 0 rgba(255, 255, 255, 0.15);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    .circle:hover {
      transform: scale(1.05);
      box-shadow: 0 6px 24px var(--glass-shadow),
        inset 0 1px 0 rgba(255, 255, 255, 0.2);
    }
    ha-svg-icon,
    ha-icon {
      padding-bottom: 2px;
      filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1));
    }
    ha-svg-icon.small {
      --mdc-icon-size: 12px;
    }
    .custom-image {
      object-fit: contain;
      margin-bottom: 2px;
      filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1));
      border-radius: 4px;
    }
    .label {
      color: var(--secondary-text-color);
      font-size: 12px;
      margin-top: 6px;
      font-weight: 500;
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    }
    line,
    path {
      stroke: var(--primary-text-color);
      stroke-width: 1.5;
      fill: none;
      filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.15));
    }
    .circle svg {
      position: absolute;
      fill: none;
      stroke-width: 4px;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
    }
    .gas path,
    .gas circle {
      stroke: var(--mui-gas);
    }
    circle.gas {
      stroke-width: 4;
      fill: var(--mui-gas);
      filter: drop-shadow(0 0 8px var(--mui-gas-glow));
    }
    .gas .circle {
      border-color: var(--mui-gas);
      box-shadow: 0 4px 16px var(--glass-shadow),
        0 0 20px var(--mui-gas-glow),
        inset 0 1px 0 rgba(255, 255, 255, 0.15);
    }
    .water path,
    .water circle {
      stroke: var(--mui-water);
    }
    circle.water {
      stroke-width: 4;
      fill: var(--mui-water);
      filter: drop-shadow(0 0 8px var(--mui-water-glow));
    }
    .water .circle {
      border-color: var(--mui-water);
      box-shadow: 0 4px 16px var(--glass-shadow),
        0 0 20px var(--mui-water-glow),
        inset 0 1px 0 rgba(255, 255, 255, 0.15);
    }
    .solar {
      color: var(--primary-text-color);
    }
    .solar .circle {
      border-color: var(--mui-solar);
      box-shadow: 0 4px 16px var(--glass-shadow),
        0 0 20px var(--mui-solar-glow),
        inset 0 1px 0 rgba(255, 255, 255, 0.15);
    }
    circle.solar,
    path.solar {
      stroke: var(--mui-solar);
    }
    circle.solar {
      stroke-width: 4;
      fill: var(--mui-solar);
      filter: drop-shadow(0 0 8px var(--mui-solar-glow));
    }
    .battery .circle {
      border-color: var(--mui-battery-in);
      box-shadow: 0 4px 16px var(--glass-shadow),
        0 0 20px var(--mui-battery-in-glow),
        inset 0 1px 0 rgba(255, 255, 255, 0.15);
    }
    circle.battery,
    path.battery {
      stroke: var(--mui-battery-out);
    }
    path.battery-home,
    circle.battery-home {
      stroke: var(--mui-battery-out);
    }
    circle.battery-home {
      stroke-width: 4;
      fill: var(--mui-battery-out);
      filter: drop-shadow(0 0 8px var(--mui-battery-out-glow));
    }
    path.battery-solar,
    circle.battery-solar {
      stroke: var(--mui-battery-in);
    }
    circle.battery-solar {
      stroke-width: 4;
      fill: var(--mui-battery-in);
      filter: drop-shadow(0 0 8px var(--mui-battery-in-glow));
    }
    .battery-in {
      color: var(--mui-battery-in);
    }
    .battery-out {
      color: var(--mui-battery-out);
    }
    path.battery-from-grid {
      stroke: var(--mui-grid-consumption);
    }
    path.battery-to-grid {
      stroke: var(--mui-grid-return);
    }
    path.return,
    circle.return,
    circle.battery-to-grid {
      stroke: var(--mui-grid-return);
    }
    circle.return,
    circle.battery-to-grid {
      stroke-width: 4;
      fill: var(--mui-grid-return);
      filter: drop-shadow(0 0 8px var(--mui-grid-return-glow));
    }
    .return {
      color: var(--mui-grid-return);
    }
    .grid .circle {
      border-color: var(--mui-grid-consumption);
      box-shadow: 0 4px 16px var(--glass-shadow),
        0 0 20px var(--mui-grid-consumption-glow),
        inset 0 1px 0 rgba(255, 255, 255, 0.15);
    }
    .consumption {
      color: var(--mui-grid-consumption);
    }
    circle.grid,
    circle.battery-from-grid,
    path.grid {
      stroke: var(--mui-grid-consumption);
    }
    circle.grid,
    circle.battery-from-grid {
      stroke-width: 4;
      fill: var(--mui-grid-consumption);
      filter: drop-shadow(0 0 8px var(--mui-grid-consumption-glow));
    }
    .home .circle {
      border-width: 0;
      border-color: var(--mui-home);
      box-shadow: 0 4px 16px var(--glass-shadow),
        0 0 20px var(--mui-home-glow),
        inset 0 1px 0 rgba(255, 255, 255, 0.15);
    }
    .home .circle.border {
      border-width: 1.5px;
    }
    .circle svg circle {
      animation: rotate-in 0.6s ease-in;
      transition: stroke-dashoffset 0.4s ease, stroke-dasharray 0.4s ease;
      fill: none;
    }
    @keyframes rotate-in {
      from {
        stroke-dashoffset: 238.76104;
        stroke-dasharray: 238.76104;
      }
    }
    .card-actions {
      border-top: 1px solid var(--glass-border);
      padding: 8px 16px;
    }
    .card-actions a {
      text-decoration: none;
    }
    .card-actions mwc-button {
      --mdc-theme-primary: var(--primary-text-color);
    }
  `,t([ft({attribute:!1})],St.prototype,"hass",void 0),t([function(t){return ft({...t,state:!0,attribute:!1})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */()],St.prototype,"_config",void 0),t([yt("#battery-grid-flow")],St.prototype,"batteryGridFlow",void 0),t([yt("#battery-home-flow")],St.prototype,"batteryToHomeFlow",void 0),t([yt("#grid-home-flow")],St.prototype,"gridToHomeFlow",void 0),t([yt("#solar-battery-flow")],St.prototype,"solarToBatteryFlow",void 0),t([yt("#solar-grid-flow")],St.prototype,"solarToGridFlow",void 0),t([yt("#solar-home-flow")],St.prototype,"solarToHomeFlow",void 0),St=t([(t=>(e,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)})("power-flow-card")],St);const kt=window;kt.customCards=kt.customCards||[],kt.customCards.push({type:"power-flow-card",name:"Power Flow Card",description:"A power distribution card inspired by the official Energy Distribution card for Home Assistant"});export{St as PowerFlowCard};
