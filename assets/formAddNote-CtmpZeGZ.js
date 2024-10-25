var L=Object.defineProperty;var H=(i,s,e)=>s in i?L(i,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[s]=e;var T=(i,s,e)=>H(i,typeof s!="symbol"?s+"":s,e);import{d as M,r as C,k as P,c as y,l as j,o as a,a as u,b as g,u as o,n as x,t as v,e as f,m as z,v as O,p as G,q as J,h,i as _,F,f as w,w as k,g as D,_ as K,j as Q}from"./index-mIgHh3Ps.js";import{a as R,E as W,v as E,u as X,_ as Y}from"./form.types-BxdpGETW.js";const Z=["for"],ee=["id","rows","placeholder","disabled","name"],te={inheritAttrs:!1},se=M({...te,__name:"textareaDefault",props:{modelValue:{},counter:{default:()=>({visible:!1})},id:{},name:{},theme:{},modifier:{},cssClass:{default:"textarea-default"},disabled:{type:Boolean,default:!1},label:{},placeholder:{},valid:{type:Boolean,default:!1},error:{type:[Boolean,String],default:!1},rows:{default:3}},emits:["update:model-value","blur","focus","change"],setup(i,{emit:s}){const e=i,n=C(0),$=C(null),p=s,l=P(),V=R(),m=C(!1),t=C(!1),r=y(()=>[e.cssClass,{[`${e.cssClass}--${e.theme}`]:e.theme,[`${e.cssClass}--${e.modifier}`]:e.modifier,[`${e.cssClass}--disabled`]:e.disabled,[`${e.cssClass}--filled`]:!!e.modelValue,[`${e.cssClass}--valid`]:e.valid,[`${e.cssClass}--invalid`]:e.error,[`${e.cssClass}--focused`]:m.value,[`${e.cssClass}--hover`]:t.value&&!m.value}]),b=y({get(){return e.modelValue},set(d){p("update:model-value",d)}}),N=y(()=>l.placeholder?void 0:e.placeholder),S=y(()=>({blur:A,focus:U,change:I,input:q})),q=d=>{if(!e.counter.visible)return;const c=d.target;n.value=c.value.length,e.counter.max&&n.value>e.counter.max&&(n.value=e.counter.max,p("update:model-value",c.value.slice(0,e.counter.max)))},A=d=>{m.value=!1,p("blur",d)},U=d=>{m.value=!0,p("focus",d)},I=d=>{p("change",d)};return j(()=>{e.modelValue&&(n.value=e.modelValue.toString().length??0)}),(d,c)=>(a(),u("div",{class:x(["form-group",r.value])},[g("div",{class:x(`${e.cssClass}__group`)},[e.label?(a(),u("label",{key:0,for:e.id||o(V),class:x(`${e.cssClass}__label`)},v(e.label),11,Z)):f("",!0),z(g("textarea",G({"onUpdate:modelValue":c[0]||(c[0]=B=>b.value=B),id:e.id||o(V),rows:e.rows,placeholder:N.value,disabled:e.disabled,class:`${e.cssClass}__textarea`,name:e.name,autocomplete:"off"},J(S.value),{ref_key:"textareaField",ref:$,onMouseover:c[1]||(c[1]=B=>t.value=!0),onMouseleave:c[2]||(c[2]=B=>t.value=!1)}),null,16,ee),[[O,b.value]])],2),l.placeholder?(a(),u("div",{key:0,class:x(`${e.cssClass}__placeholder`)},[h(d.$slots,"placeholder")],2)):f("",!0),e.error||e.counter.visible?(a(),u("div",{key:1,class:x(`${e.cssClass}__footer`)},[e.error?(a(),u("div",{key:0,class:x(`${e.cssClass}__error`)},[h(d.$slots,"error",{},()=>[_(v(e.error),1)])],2)):f("",!0),e.counter.visible?(a(),u("div",{key:1,class:x(`${e.cssClass}__counter`)},[_(v(n.value),1),e.counter.max?(a(),u(F,{key:0},[_(" / ")],64)):f("",!0),_(v(e.counter.max),1)],2)):f("",!0)],2)):f("",!0)],2))}});class le{constructor(s={}){T(this,"_title");T(this,"_text");s=s??{},this._title=s.title||null,this._text=s.text||null}get title(){return this._title}set title(s){this._title=s}get text(){return this._text}set text(s){this._text=s}reset(){this._title=null,this._text=null}}const oe={class:"add-note m-form"},re={class:"add-note__form-default m-form__default"},ae={key:0,class:"m-form__default-title"},ue={class:"m-form__default-body"},ne={class:"m-form__form-footer"},de={key:0,class:"m-form__error"},ie={key:1,class:"m-form__success"},ve=M({__name:"formAddNote",props:{defaultTitle:{default:W.DEFAULT_TITLE_NOTE_ADD},error:{type:Boolean},success:{type:Boolean},loading:{type:Boolean,default:!1}},emits:["submit"],setup(i,{emit:s}){const e=s,n=i,$=C(new le),p=y(()=>({title:{required:E.required()},text:{required:E.required()}})),l=X(p,$),V=()=>{l.value.$touch(),!l.value.$invalid&&e("submit",$.value)};return(m,t)=>(a(),u("div",oe,[g("form",{class:"add-note__form",onSubmit:Q(V,["prevent"]),autocomplete:"off"},[g("div",re,[n.defaultTitle?(a(),u("div",ae,v(n.defaultTitle),1)):f("",!0),g("div",ue,[w(Y,{modelValue:$.value.title,"onUpdate:modelValue":t[0]||(t[0]=r=>$.value.title=r),placeholder:"Введите название",label:"Название заметки",counter:{visible:!0,max:100},error:o(l).title.$error,valid:!o(l).title.$invalid,onInput:t[1]||(t[1]=r=>o(l).title.$touch()),onChange:t[2]||(t[2]=r=>o(l).title.$touch()),onBlur:t[3]||(t[3]=r=>!o(l).title.$model&&o(l).title.$touch())},{error:k(()=>[(a(!0),u(F,null,D(o(l).title.$errors,(r,b)=>(a(),u("span",{key:`error-${b}`},v(r.$message),1))),128))]),_:1},8,["modelValue","error","valid"]),w(se,{modelValue:$.value.text,"onUpdate:modelValue":t[4]||(t[4]=r=>$.value.text=r),label:"Текст заметки",placeholder:"Введите текст",rows:10,counter:{visible:!0,max:500},error:o(l).text.$error,valid:!o(l).text.$invalid,onInput:t[5]||(t[5]=r=>o(l).text.$touch()),onChange:t[6]||(t[6]=r=>o(l).text.$touch()),onBlur:t[7]||(t[7]=r=>!o(l).text.$model&&o(l).text.$touch())},{error:k(()=>[(a(!0),u(F,null,D(o(l).text.$errors,(r,b)=>(a(),u("span",{key:`error-${b}`},v(r.$message),1))),128))]),_:1},8,["modelValue","error","valid"]),g("div",ne,[h(m.$slots,"footerText"),w(K,{tag:"button",type:"submit",disabled:o(l).$invalid||n.loading,loading:n.loading},{loading:k(()=>t[8]||(t[8]=[_(" В процессе ")])),default:k(()=>[h(m.$slots,"buttonText",{},()=>[t[9]||(t[9]=_("Добавить"))])]),_:3},8,["disabled","loading"])])])]),n.error?(a(),u("div",de,[h(m.$slots,"error",{},()=>[_(v(n.error),1)])])):f("",!0),n.success?(a(),u("div",ie,[h(m.$slots,"success",{},()=>[_(v(n.success),1)])])):f("",!0)],32)]))}});export{ve as default};
