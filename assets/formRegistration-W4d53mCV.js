var B=Object.defineProperty;var E=(n,o,f)=>o in n?B(n,o,{enumerable:!0,configurable:!0,writable:!0,value:f}):n[o]=f;var g=(n,o,f)=>E(n,typeof o!="symbol"?o+"":o,f);import{d as q,r as C,c as I,o as t,a as l,b as m,j as F,t as u,e as y,f as c,w as $,F as P,g as V,u as r,h as b,i as p,_ as N}from"./index-CijzDicJ.js";import{E as S,v,c as A,s as M,u as R,_ as h}from"./form.types-DfNo3Pr1.js";class U{constructor(o={}){g(this,"_password");g(this,"_confirmPassword");g(this,"_email");o=o??{},this._password=o.password||null,this._confirmPassword=o.confirmPassword||null,this._email=o.email||null}get password(){return this._password}set password(o){this._password=o}get email(){return this._email}set email(o){this._email=o}get confirmPassword(){return this._confirmPassword}set confirmPassword(o){this._confirmPassword=o}reset(){this._password=null,this._confirmPassword=null,this._email=null}}const x={class:"form-registration m-form"},D={class:"form-registration__form-default m-form__default"},L={key:0,class:"m-form__default-title"},j={class:"m-form__default-body"},G={class:"m-form__form-footer"},H={key:0,class:"m-form__error"},O={key:1,class:"m-form__success"},Q=q({__name:"formRegistration",props:{defaultTitle:{default:S.DEFAULT_TITLE_REGISTRATION},error:{type:Boolean},success:{type:Boolean},loading:{type:Boolean,default:!1}},emits:["submit"],setup(n,{emit:o}){const f=o,d=n,i=C(new U),T=I(()=>({email:{required:v.required(),email:v.email},password:{required:v.required()},confirmPassword:{required:v.required(),sameAs:A.withMessage("Пароли не совпадают",M(i.value.password))}})),s=R(T,i),k=()=>{s.value.$touch(),!s.value.$invalid&&f("submit",i.value)};return(_,e)=>(t(),l(P,null,[m("div",x,[m("form",{class:"form-registration__form",onSubmit:F(k,["prevent"]),autocomplete:"off"},[m("div",D,[d.defaultTitle?(t(),l("div",L,u(d.defaultTitle),1)):y("",!0),m("div",j,[c(h,{modelValue:i.value.email,"onUpdate:modelValue":e[0]||(e[0]=a=>i.value.email=a),placeholder:"Введите значение",label:"Email",error:r(s).email.$error,valid:!r(s).email.$invalid,onInput:e[1]||(e[1]=a=>r(s).email.$touch()),onChange:e[2]||(e[2]=a=>r(s).email.$touch()),onBlur:e[3]||(e[3]=a=>!r(s).email.$model&&r(s).email.$touch())},{error:$(()=>[(t(!0),l(P,null,V(r(s).email.$errors,(a,w)=>(t(),l("span",{key:`error-${w}`},u(a.$message),1))),128))]),_:1},8,["modelValue","error","valid"]),c(h,{modelValue:i.value.password,"onUpdate:modelValue":e[4]||(e[4]=a=>i.value.password=a),label:"Пароль",name:"password",type:"password",placeholder:"Введите пароль",error:r(s).password.$error,valid:!r(s).password.$invalid,onInput:e[5]||(e[5]=a=>r(s).password.$touch()),onChange:e[6]||(e[6]=a=>r(s).password.$touch()),onBlur:e[7]||(e[7]=a=>!r(s).password.$model&&r(s).password.$touch())},{error:$(()=>[(t(!0),l(P,null,V(r(s).password.$errors,(a,w)=>(t(),l("span",{key:`error-${w}`},u(a.$message),1))),128))]),_:1},8,["modelValue","error","valid"]),c(h,{modelValue:i.value.confirmPassword,"onUpdate:modelValue":e[8]||(e[8]=a=>i.value.confirmPassword=a),label:"Пароль еще раз",name:"confirmPassword",type:"password",placeholder:"Введите пароль еще раз",error:r(s).confirmPassword.$error,valid:!r(s).confirmPassword.$invalid,onInput:e[9]||(e[9]=a=>r(s).confirmPassword.$touch()),onChange:e[10]||(e[10]=a=>r(s).confirmPassword.$touch()),onBlur:e[11]||(e[11]=a=>!r(s).confirmPassword.$model&&r(s).confirmPassword.$touch())},{error:$(()=>[(t(!0),l(P,null,V(r(s).confirmPassword.$errors,(a,w)=>(t(),l("span",{key:`error-${w}`},u(a.$message),1))),128))]),_:1},8,["modelValue","error","valid"]),m("div",G,[b(_.$slots,"footerText",{},()=>[e[12]||(e[12]=m("div",{class:"m-form__footer-text"},[p(" У вас есть аккаунт? "),m("a",{href:"#",class:"link"},"Войдите")],-1))]),c(N,{tag:"button",type:"submit",disabled:r(s).$invalid||d.loading,loading:d.loading},{loading:$(()=>e[13]||(e[13]=[p(" В процессе ")])),default:$(()=>[b(_.$slots,"buttonText",{},()=>[e[14]||(e[14]=p("Зарегистрироваться"))])]),_:3},8,["disabled","loading"])])])]),d.error?(t(),l("div",H,[b(_.$slots,"error",{},()=>[p(u(d.error),1)])])):y("",!0),d.success?(t(),l("div",O,[b(_.$slots,"success",{},()=>[p(u(d.success),1)])])):y("",!0)],32)]),p(" "+u(r(v).confirmPassword),1)],64))}});export{Q as default};