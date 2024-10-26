import{s as ve,d as Pe,r as x,k as Ve,c as h,l as Ae,o as R,a as _,b as k,u as f,n as E,t as N,e as z,m as Te,x as ze,p as Se,q as De,h as J,f as Le,w as Ie,T as ke,i as B,F as Ne,y as Be,z as Fe,A as D,B as X,C as te,D as Me,E as Ge,G as qe,H as ae,I as se,J as oe}from"./index-CijzDicJ.js";const Ue=()=>Date.now().toString(36)+Math.random().toString(36).substring(2);ve('<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 14" id="icon-on-password-7b5813"><path stroke="#B1C909" stroke-width="2" d="M17 7c0 1.155-.78 2.65-2.277 3.9C13.253 12.129 11.226 13 9 13s-4.254-.872-5.723-2.1C1.78 9.65 1 8.156 1 7s.78-2.65 2.277-3.9C4.747 1.871 6.774 1 9 1s4.254.872 5.723 2.1C16.22 4.35 17 5.844 17 7Z" /><circle cx="9" cy="7" r="3" stroke="#B1C909" stroke-width="2" /></symbol>',"icon-on-password-7b5813");const He="icon-on-password-7b5813";ve('<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16" id="icon-off-password-902895"><path stroke="#B1C909" stroke-width="2" d="M17 8c0 1.155-.78 2.65-2.277 3.9C13.253 13.129 11.226 14 9 14s-4.254-.872-5.723-2.1C1.78 10.65 1 9.156 1 8s.78-2.65 2.277-3.9C4.747 2.871 6.774 2 9 2s4.254.872 5.723 2.1C16.22 5.35 17 6.844 17 8Z" /><circle cx="9" cy="8" r="3" stroke="#B1C909" stroke-width="2" /><path stroke="#B1C909" stroke-width="2" d="m2 1 14 14" /></symbol>',"icon-off-password-902895");const Ze="icon-off-password-902895",We=["for"],Je=["type","id","placeholder","autocomplete","disabled","name"],Ke=["aria-label"],Qe={width:"16",height:"16",xmlns:"http://www.w3.org/2000/svg"},Xe=["href"],Ye={inheritAttrs:!1},_t=Pe({...Ye,__name:"inputDefault",props:{modelValue:{},counter:{default:()=>({visible:!1})},type:{default:"text"},id:{},name:{},label:{},placeholder:{},theme:{},cssClass:{default:"input-default"},autocomplete:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},valid:{type:Boolean,default:!1},error:{type:[Boolean,String],default:!1}},emits:["update:model-value","blur","focus","change"],setup(e,{emit:n}){const t=e,r=x(0),s=x(!1),o=x(null),p=n,c=Ve(),d=x(!1),l=x(!1),v=Ue(),$=h(()=>[t.cssClass,{[`${t.cssClass}--${t.theme}`]:t.theme,[`${t.cssClass}--focused`]:d.value,[`${t.cssClass}--hover`]:l.value&&!d.value,[`${t.cssClass}--disabled`]:t.disabled,[`${t.cssClass}--filled`]:!!t.modelValue,[`${t.cssClass}--valid`]:t.valid,[`${t.cssClass}--invalid`]:t.error}]),g=h({get(){return t.modelValue},set(y){p("update:model-value",y)}}),m=h(()=>c.placeholder?void 0:t.placeholder),a=()=>{t.type!=="password"||!o.value||o.value.value.length&&(s.value=!s.value,o.value.setAttribute("type",s.value?"text":"password"))},i=h(()=>({blur:w,focus:j,change:S,input:u})),u=y=>{if(!t.counter.visible)return;const O=y.target;r.value=O.value.length,t.counter.max&&r.value>t.counter.max&&(r.value=t.counter.max,p("update:model-value",O.value.slice(0,t.counter.max)))},w=y=>{d.value=!1,p("blur",y)},j=y=>{d.value=!0,u(y),p("focus",y)},S=y=>{p("change",y)};return Ae(()=>{t.modelValue&&(r.value=t.modelValue.toString().length??0)}),(y,O)=>(R(),_("div",{class:E(["form-group",$.value])},[k("div",{class:E(`${t.cssClass}__group`)},[t.label?(R(),_("label",{key:0,for:t.id||f(v),class:E(`${t.cssClass}__label`)},N(t.label),11,We)):z("",!0),k("div",{class:E(`${t.cssClass}__input-wrapper`)},[Te(k("input",Se({"onUpdate:modelValue":O[0]||(O[0]=C=>g.value=C),type:t.type,id:t.id||f(v),placeholder:m.value,autocomplete:t.autocomplete?"on":"off",disabled:t.disabled,class:`${t.cssClass}__input`,name:t.name},De(i.value),{ref_key:"inputField",ref:o,onMouseover:O[1]||(O[1]=C=>l.value=!0),onMouseleave:O[2]||(O[2]=C=>l.value=!1)}),null,16,Je),[[ze,g.value]]),t.type==="password"?(R(),_("button",{key:0,type:"button","aria-label":s.value?"Hide password":"Show password",onClick:a,class:E(`${t.cssClass}__password-toggle`)},[J(y.$slots,"passwordIcon",{passwordVisible:s.value},()=>[Le(ke,{name:"fade"},{default:Ie(()=>[(R(),_("svg",Qe,[k("use",{href:`#${s.value?f(Ze):f(He)}`},null,8,Xe)]))]),_:1})])],10,Ke)):z("",!0)],2)],2),c.placeholder?(R(),_("div",{key:0,class:E(`${t.cssClass}__placeholder`)},[J(y.$slots,"placeholder")],2)):z("",!0),t.error||t.counter.visible?(R(),_("div",{key:1,class:E(`${t.cssClass}__footer`)},[t.error?(R(),_("div",{key:0,class:E(`${t.cssClass}__error`)},[J(y.$slots,"error",{},()=>[B(N(t.error),1)])],2)):z("",!0),t.counter.visible?(R(),_("div",{key:1,class:E(`${t.cssClass}__counter`)},[B(N(r.value),1),t.counter.max?(R(),_(Ne,{key:0},[B(" / ")],64)):z("",!0),B(N(t.counter.max),1)],2)):z("",!0)],2)):z("",!0)],2))}});function le(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),t.push.apply(t,r)}return t}function V(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?le(Object(t),!0).forEach(function(r){et(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):le(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function et(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function ie(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return Object.keys(e).reduce((t,r)=>(n.includes(r)||(t[r]=f(e[r])),t),{})}function G(e){return typeof e=="function"}function tt(e){return Ge(e)||qe(e)}function pe(e,n,t){let r=e;const s=n.split(".");for(let o=0;o<s.length;o++){if(!r[s[o]])return t;r=r[s[o]]}return r}function K(e,n,t){return h(()=>e.some(r=>pe(n,r,{[t]:!1})[t]))}function ue(e,n,t){return h(()=>e.reduce((r,s)=>{const o=pe(n,s,{[t]:!1})[t]||[];return r.concat(o)},[]))}function me(e,n,t,r){return e.call(r,f(n),f(t),r)}function ge(e){return e.$valid!==void 0?!e.$valid:!e}function rt(e,n,t,r,s,o,p){let{$lazy:c,$rewardEarly:d}=s,l=arguments.length>7&&arguments[7]!==void 0?arguments[7]:[],v=arguments.length>8?arguments[8]:void 0,$=arguments.length>9?arguments[9]:void 0,g=arguments.length>10?arguments[10]:void 0;const m=x(!!r.value),a=x(0);t.value=!1;const i=D([n,r].concat(l,g),()=>{if(c&&!r.value||d&&!$.value&&!t.value)return;let u;try{u=me(e,n,v,p)}catch(w){u=Promise.reject(w)}a.value++,t.value=!!a.value,m.value=!1,Promise.resolve(u).then(w=>{a.value--,t.value=!!a.value,o.value=w,m.value=ge(w)}).catch(w=>{a.value--,t.value=!!a.value,o.value=w,m.value=!0})},{immediate:!0,deep:typeof n=="object"});return{$invalid:m,$unwatch:i}}function nt(e,n,t,r,s,o,p,c){let{$lazy:d,$rewardEarly:l}=r;const v=()=>({}),$=h(()=>{if(d&&!t.value||l&&!c.value)return!1;let g=!0;try{const m=me(e,n,p,o);s.value=m,g=ge(m)}catch(m){s.value=m}return g});return{$unwatch:v,$invalid:$}}function at(e,n,t,r,s,o,p,c,d,l,v){const $=x(!1),g=e.$params||{},m=x(null);let a,i;e.$async?{$invalid:a,$unwatch:i}=rt(e.$validator,n,$,t,r,m,s,e.$watchTargets,d,l,v):{$invalid:a,$unwatch:i}=nt(e.$validator,n,t,r,m,s,d,l);const u=e.$message;return{$message:G(u)?h(()=>u(ie({$pending:$,$invalid:a,$params:ie(g),$model:n,$response:m,$validator:o,$propertyPath:c,$property:p}))):u||"",$params:g,$pending:$,$invalid:a,$response:m,$unwatch:i}}function st(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const n=f(e),t=Object.keys(n),r={},s={},o={};let p=null;return t.forEach(c=>{const d=n[c];switch(!0){case G(d.$validator):r[c]=d;break;case G(d):r[c]={$validator:d};break;case c==="$validationGroups":p=d;break;case c.startsWith("$"):o[c]=d;break;default:s[c]=d}}),{rules:r,nestedValidators:s,config:o,validationGroups:p}}const ot="__root";function lt(e,n,t,r,s,o,p,c,d){const l=Object.keys(e),v=r.get(s,e),$=x(!1),g=x(!1),m=x(0);if(v){if(!v.$partial)return v;v.$unwatch(),$.value=v.$dirty.value}const a={$dirty:$,$path:s,$touch:()=>{$.value||($.value=!0)},$reset:()=>{$.value&&($.value=!1)},$commit:()=>{}};return l.length?(l.forEach(i=>{a[i]=at(e[i],n,a.$dirty,o,p,i,t,s,d,g,m)}),a.$externalResults=h(()=>c.value?[].concat(c.value).map((i,u)=>({$propertyPath:s,$property:t,$validator:"$externalResults",$uid:`${s}-externalResult-${u}`,$message:i,$params:{},$response:null,$pending:!1})):[]),a.$invalid=h(()=>{const i=l.some(u=>f(a[u].$invalid));return g.value=i,!!a.$externalResults.value.length||i}),a.$pending=h(()=>l.some(i=>f(a[i].$pending))),a.$error=h(()=>a.$dirty.value?a.$pending.value||a.$invalid.value:!1),a.$silentErrors=h(()=>l.filter(i=>f(a[i].$invalid)).map(i=>{const u=a[i];return te({$propertyPath:s,$property:t,$validator:i,$uid:`${s}-${i}`,$message:u.$message,$params:u.$params,$response:u.$response,$pending:u.$pending})}).concat(a.$externalResults.value)),a.$errors=h(()=>a.$dirty.value?a.$silentErrors.value:[]),a.$unwatch=()=>l.forEach(i=>{a[i].$unwatch()}),a.$commit=()=>{g.value=!0,m.value=Date.now()},r.set(s,e,a),a):(v&&r.set(s,e,a),a)}function it(e,n,t,r,s,o,p){const c=Object.keys(e);return c.length?c.reduce((d,l)=>(d[l]=Y({validations:e[l],state:n,key:l,parentKey:t,resultsCache:r,globalConfig:s,instance:o,externalResults:p}),d),{}):{}}function ut(e,n,t){const r=h(()=>[n,t].filter(a=>a).reduce((a,i)=>a.concat(Object.values(f(i))),[])),s=h({get(){return e.$dirty.value||(r.value.length?r.value.every(a=>a.$dirty):!1)},set(a){e.$dirty.value=a}}),o=h(()=>{const a=f(e.$silentErrors)||[],i=r.value.filter(u=>(f(u).$silentErrors||[]).length).reduce((u,w)=>u.concat(...w.$silentErrors),[]);return a.concat(i)}),p=h(()=>{const a=f(e.$errors)||[],i=r.value.filter(u=>(f(u).$errors||[]).length).reduce((u,w)=>u.concat(...w.$errors),[]);return a.concat(i)}),c=h(()=>r.value.some(a=>a.$invalid)||f(e.$invalid)||!1),d=h(()=>r.value.some(a=>f(a.$pending))||f(e.$pending)||!1),l=h(()=>r.value.some(a=>a.$dirty)||r.value.some(a=>a.$anyDirty)||s.value),v=h(()=>s.value?d.value||c.value:!1),$=()=>{e.$touch(),r.value.forEach(a=>{a.$touch()})},g=()=>{e.$commit(),r.value.forEach(a=>{a.$commit()})},m=()=>{e.$reset(),r.value.forEach(a=>{a.$reset()})};return r.value.length&&r.value.every(a=>a.$dirty)&&$(),{$dirty:s,$errors:p,$invalid:c,$anyDirty:l,$error:v,$pending:d,$touch:$,$reset:m,$silentErrors:o,$commit:g}}function Y(e){let{validations:n,state:t,key:r,parentKey:s,childResults:o,resultsCache:p,globalConfig:c={},instance:d,externalResults:l}=e;const v=s?`${s}.${r}`:r,{rules:$,nestedValidators:g,config:m,validationGroups:a}=st(n),i=V(V({},c),m),u=r?h(()=>{const b=f(t);return b?f(b[r]):void 0}):t,w=V({},f(l)||{}),j=h(()=>{const b=f(l);return r?b?f(b[r]):void 0:b}),S=lt($,u,r,p,v,i,d,j,t),y=it(g,u,v,p,i,d,j),O={};a&&Object.entries(a).forEach(b=>{let[T,P]=b;O[T]={$invalid:K(P,y,"$invalid"),$error:K(P,y,"$error"),$pending:K(P,y,"$pending"),$errors:ue(P,y,"$errors"),$silentErrors:ue(P,y,"$silentErrors")}});const{$dirty:C,$errors:I,$invalid:H,$anyDirty:be,$error:Oe,$pending:Z,$touch:W,$reset:xe,$silentErrors:Ce,$commit:ne}=ut(S,y,o),Re=r?h({get:()=>f(u),set:b=>{C.value=!0;const T=f(t),P=f(l);P&&(P[r]=w[r]),X(T[r])?T[r].value=b:T[r]=b}}):null;r&&i.$autoDirty&&D(u,()=>{C.value||W();const b=f(l);b&&(b[r]=w[r])},{flush:"sync"});async function _e(){return W(),i.$rewardEarly&&(ne(),await oe()),await oe(),new Promise(b=>{if(!Z.value)return b(!H.value);const T=D(Z,()=>{b(!H.value),T()})})}function Ee(b){return(o.value||{})[b]}function je(){X(l)?l.value=w:Object.keys(w).length===0?Object.keys(l).forEach(b=>{delete l[b]}):Object.assign(l,w)}return te(V(V(V({},S),{},{$model:Re,$dirty:C,$error:Oe,$errors:I,$invalid:H,$anyDirty:be,$pending:Z,$touch:W,$reset:xe,$path:v||ot,$silentErrors:Ce,$validate:_e,$commit:ne},o&&{$getResultsForChild:Ee,$clearExternalResults:je,$validationGroups:O}),y))}class ct{constructor(){this.storage=new Map}set(n,t,r){this.storage.set(n,{rules:t,result:r})}checkRulesValidity(n,t,r){const s=Object.keys(r),o=Object.keys(t);return o.length!==s.length||!o.every(c=>s.includes(c))?!1:o.every(c=>t[c].$params?Object.keys(t[c].$params).every(d=>f(r[c].$params[d])===f(t[c].$params[d])):!0)}get(n,t){const r=this.storage.get(n);if(!r)return;const{rules:s,result:o}=r,p=this.checkRulesValidity(n,t,s),c=o.$unwatch?o.$unwatch:()=>({});return p?o:{$dirty:o.$dirty,$partial:!0,$unwatch:c}}}const M={COLLECT_ALL:!0,COLLECT_NONE:!1},ce=Symbol("vuelidate#injectChildResults"),de=Symbol("vuelidate#removeChildResults");function dt(e){let{$scope:n,instance:t}=e;const r={},s=x([]),o=h(()=>s.value.reduce((v,$)=>(v[$]=f(r[$]),v),{}));function p(v,$){let{$registerAs:g,$scope:m,$stopPropagation:a}=$;a||n===M.COLLECT_NONE||m===M.COLLECT_NONE||n!==M.COLLECT_ALL&&n!==m||(r[g]=v,s.value.push(g))}t.__vuelidateInjectInstances=[].concat(t.__vuelidateInjectInstances||[],p);function c(v){s.value=s.value.filter($=>$!==v),delete r[v]}t.__vuelidateRemoveInstances=[].concat(t.__vuelidateRemoveInstances||[],c);const d=ae(ce,[]);se(ce,t.__vuelidateInjectInstances);const l=ae(de,[]);return se(de,t.__vuelidateRemoveInstances),{childResults:o,sendValidationResultsToParent:d,removeValidationResultsFromParent:l}}function he(e){return new Proxy(e,{get(n,t){return typeof n[t]=="object"?he(n[t]):h(()=>n[t])}})}let fe=0;function Et(e,n){var t;let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};arguments.length===1&&(r=e,e=void 0,n=void 0);let{$registerAs:s,$scope:o=M.COLLECT_ALL,$stopPropagation:p,$externalResults:c,currentVueInstance:d}=r;const l=d||((t=Be())===null||t===void 0?void 0:t.proxy),v=l?l.$options:{};s||(fe+=1,s=`_vuelidate_${fe}`);const $=x({}),g=new ct,{childResults:m,sendValidationResultsToParent:a,removeValidationResultsFromParent:i}=l?dt({$scope:o,instance:l}):{childResults:x({})};if(!e&&v.validations){const u=v.validations;n=x({}),Fe(()=>{n.value=l,D(()=>G(u)?u.call(n.value,new he(n.value)):u,w=>{$.value=Y({validations:w,state:n,childResults:m,resultsCache:g,globalConfig:r,instance:l,externalResults:c||l.vuelidateExternalResults})},{immediate:!0})}),r=v.validationsConfig||r}else{const u=X(e)||tt(e)?e:te(e||{});D(u,w=>{$.value=Y({validations:w,state:n,childResults:m,resultsCache:g,globalConfig:r,instance:l??{},externalResults:c})},{immediate:!0})}return l&&(a.forEach(u=>u($,{$registerAs:s,$scope:o,$stopPropagation:p})),Me(()=>i.forEach(u=>u(s)))),h(()=>V(V({},f($.value)),m.value))}function $e(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),t.push.apply(t,r)}return t}function L(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?$e(Object(t),!0).forEach(function(r){ft(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):$e(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function ft(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function q(e){return typeof e=="function"}function ee(e){return e!==null&&typeof e=="object"&&!Array.isArray(e)}function U(e){return q(e.$validator)?L({},e):{$validator:e}}function ye(e){return typeof e=="object"?e.$valid:e}function we(e){return e.$validator||e}function $t(e,n){if(!ee(e))throw new Error(`[@vuelidate/validators]: First parameter to "withParams" should be an object, provided ${typeof e}`);if(!ee(n)&&!q(n))throw new Error("[@vuelidate/validators]: Validator must be a function or object with $validator parameter");const t=U(n);return t.$params=L(L({},t.$params||{}),e),t}function vt(e,n){if(!q(e)&&typeof f(e)!="string")throw new Error(`[@vuelidate/validators]: First parameter to "withMessage" should be string or a function returning a string, provided ${typeof e}`);if(!ee(n)&&!q(n))throw new Error("[@vuelidate/validators]: Validator must be a function or object with $validator parameter");const t=U(n);return t.$message=e,t}function pt(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];const t=U(e);return L(L({},t),{},{$async:!0,$watchTargets:n})}function mt(e){return{$validator(n){for(var t=arguments.length,r=new Array(t>1?t-1:0),s=1;s<t;s++)r[s-1]=arguments[s];return f(n).reduce((o,p,c)=>{const d=Object.entries(p).reduce((l,v)=>{let[$,g]=v;const m=e[$]||{},a=Object.entries(m).reduce((i,u)=>{let[w,j]=u;const y=we(j).call(this,g,p,c,...r),O=ye(y);if(i.$data[w]=y,i.$data.$invalid=!O||!!i.$data.$invalid,i.$data.$error=i.$data.$invalid,!O){let C=j.$message||"";const I=j.$params||{};typeof C=="function"&&(C=C({$pending:!1,$invalid:!O,$params:I,$model:g,$response:y})),i.$errors.push({$property:$,$message:C,$params:I,$response:y,$model:g,$pending:!1,$validator:w})}return{$valid:i.$valid&&O,$data:i.$data,$errors:i.$errors}},{$valid:!0,$data:{},$errors:[]});return l.$data[$]=a.$data,l.$errors[$]=a.$errors,{$valid:l.$valid&&a.$valid,$data:l.$data,$errors:l.$errors}},{$valid:!0,$data:{},$errors:{}});return{$valid:o.$valid&&d.$valid,$data:o.$data.concat(d.$data),$errors:o.$errors.concat(d.$errors)}},{$valid:!0,$data:[],$errors:[]})},$message:n=>{let{$response:t}=n;return t?t.$errors.map(r=>Object.values(r).map(s=>s.map(o=>o.$message)).reduce((s,o)=>s.concat(o),[])):[]}}}const re=e=>{if(e=f(e),Array.isArray(e))return!!e.length;if(e==null)return!1;if(e===!1)return!0;if(e instanceof Date)return!isNaN(e.getTime());if(typeof e=="object"){for(let n in e)return!0;return!1}return!!String(e).length},gt=e=>(e=f(e),Array.isArray(e)?e.length:typeof e=="object"?Object.keys(e).length:String(e).length);function A(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return r=>(r=f(r),!re(r)||n.every(s=>(s.lastIndex=0,s.test(r))))}var F=Object.freeze({__proto__:null,forEach:mt,len:gt,normalizeValidatorObject:U,regex:A,req:re,unwrap:f,unwrapNormalizedValidator:we,unwrapValidatorResponse:ye,withAsync:pt,withMessage:vt,withParams:$t});A(/^[a-zA-Z]*$/);A(/^[a-zA-Z0-9]*$/);A(/^\d*(\.\d+)?$/);const ht=/^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;var yt=A(ht),wt={$validator:yt,$message:"Value is not a valid email address",$params:{type:"email"}};function bt(e){return typeof e=="string"&&(e=e.trim()),re(e)}var Q={$validator:bt,$message:"Value is required",$params:{type:"required"}};function Ot(e){return n=>f(n)===f(e)}function jt(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"other";return{$validator:Ot(e),$message:t=>`The value must be equal to the ${n} value`,$params:{equalTo:e,otherName:n,type:"sameAs"}}}const xt=/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i;A(xt);A(/(^[0-9]*$)|(^-[0-9]+$)/);A(/^[-]?\d*(\.\d+)?$/);const Pt={required(e="Поле обязательно для заполнения"){return F.withMessage(e,Q)},email:F.withMessage("Некорректный адрес электронной почты",wt),password:F.withMessage("Некорректный пароль",Q),sameAs:F.withMessage("Пароли должны совпадать",Q)};var Ct=(e=>(e.DEFAULT_TITLE_LOGIN="Вход в ваш аккаунт",e.DEFAULT_TITLE_REGISTRATION="Регистрация",e.DEFAULT_TITLE_NOTE_ADD="Добавление заметки",e))(Ct||{});export{Ct as E,_t as _,Ue as a,F as c,jt as s,Et as u,Pt as v};