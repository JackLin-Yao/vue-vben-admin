import{k as e,J as t,cO as n,v as o,W as r,a as i,H as a,aY as s,I as l,i as c,o as d,j as u,aM as f,b9 as p,w as m,m as b,p as g,n as v,K as y}from"./index.9ddc54c2.js";import{s as A}from"./index.914f22ed.js";import{D as O}from"./index.02c7a5b0.js";import{a as D}from"./index.3c805844.js";import{s as j}from"./index.ab1925fd.js";var w={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M456 231a56 56 0 10112 0 56 56 0 10-112 0zm0 280a56 56 0 10112 0 56 56 0 10-112 0zm0 280a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"more",theme:"outlined"};function x(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var C=function(o,r){var i=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?Object(arguments[t]):{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){x(e,t,n[t])}))}return e}({},o,r.attrs);return e(n,t(i,{icon:w}),null)};C.displayName="MoreOutlined",C.inheritAttrs=!1;const k="key",h=["10","50","80","100"],z=~~h[0],I={pageField:"page",sizeField:"pageSize",listField:"items",totalField:"total"};function M(e){const{field:t,order:n}=e;return{field:t,order:n}}function P(e){return e}const F="center",L="INDEX",N="ACTION",S=Symbol("basic-table");function $(e){r(S,e)}function B(){return o(S)}var T=i({name:"TableAction",components:{Icon:j,PopConfirmButton:D,Divider:O,Dropdown:A,MoreOutlined:C},props:{actions:{type:Array,default:null},dropDownActions:{type:Array,default:null},divider:a.bool.def(!0)},setup(e){const{prefixCls:t}=s("basic-table-action"),n=B();return{prefixCls:t,getActions:l((()=>e.actions.map((e=>{const{popConfirm:t}=e;return{type:"link",size:"small",...e,...t||{},onConfirm:null==t?void 0:t.confirm,onCancel:null==t?void 0:t.cancel,enable:!!t}})))),getDropList:l((()=>(e.dropDownActions||[]).map(((t,n)=>{const{label:o}=t;return{...t,text:o,divider:n<e.dropDownActions.length-1&&e.divider}})))),getAlign:l((()=>{var e;const t=n.getColumns().find((e=>"ACTION"===e.flag));return null!=(e=null==t?void 0:t.align)?e:"left"}))}}});T.render=function(t,n,o,r,i,a){const s=c("Icon"),l=c("PopConfirmButton"),A=c("Divider"),O=c("MoreOutlined"),D=c("a-button"),j=c("Dropdown");return d(),u("div",{class:[t.prefixCls,t.getAlign]},[(d(!0),u(f,null,p(t.getActions,((n,o)=>(d(),u(f,{key:`${o}-${n.label}`},[e(l,n,{default:m((()=>[n.icon?(d(),u(s,{key:0,icon:n.icon,class:"mr-1"},null,8,["icon"])):b("v-if",!0),g(" "+v(n.label),1)])),_:2},1040),t.divider&&o<t.getActions.length?(d(),u(A,{key:0,type:"vertical"})):b("v-if",!0)],64)))),128)),t.dropDownActions?(d(),u(j,{key:0,trigger:["hover"],dropMenuList:t.getDropList},{default:m((()=>[y(t.$slots,"more"),t.$slots.more?b("v-if",!0):(d(),u(D,{key:0,type:"link",size:"small"},{default:m((()=>[e(O,{class:"icon-more"})])),_:1}))])),_:3},8,["dropMenuList"])):b("v-if",!0)],2)};export{N as A,F as D,I as F,L as I,z as P,k as R,h as a,M as b,P as c,$ as d,T as s,B as u};