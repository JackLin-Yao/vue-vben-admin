let s=document.createElement("style");s.innerHTML=".scroll-wrap[data-v-6aa17979]{width:50%;height:300px;background:#fff}",document.head.appendChild(s);import{a as o,r as l,f as a,d0 as r,d1 as t,i as e,o as c,j as i,k as n,aM as d,b9 as p,n as m,bi as u,p as f}from"./index.9ddc54c2.js";import"./xlsx.a48e520c.js";import"./_baseSlice.1123a25b.js";import{A as j}from"./index.0fb921c0.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.d989a75d.js";import{a as x,s as b}from"./index.a5990709.js";import"./RightOutlined.b735e334.js";import"./useTimeout.261f68e1.js";import"./tsxHelper.877239e6.js";import"./index.2418dbe9.js";import"./domUtils.34789ce4.js";import"./index.0f525ba4.js";import"./animation.e52d0262.js";import"./useScrollTo.73d3059d.js";var C=o({components:{CollapseContainer:x,ScrollContainer:b,Alert:j},setup(){const s=l(null),o=()=>{const o=a(s);if(!o)throw new Error("scroll is Null");return o};return{scrollTo:function(s){o().scrollTo(s)},scrollRef:s,scrollBottom:function(){o().scrollBottom()}}}});const T=u("data-v-6aa17979");r("data-v-6aa17979");const _={class:"p-4"},v={class:"my-4"},h=f("滚动到100px位置"),k=f("滚动到800px位置"),y=f("滚动到顶部"),g=f("滚动到底部"),w={class:"scroll-wrap"},A={class:"p-3"};t();const S=T(((s,o,l,a,r,t)=>{const u=e("Alert"),f=e("a-button"),j=e("ScrollContainer");return c(),i("div",_,[n(u,{message:"抽取el-scrollbar，并对其进行扩展,滚动条美化,适用于各个浏览器",type:"info"}),n("div",v,[n(f,{onClick:o[1]||(o[1]=o=>s.scrollTo(100)),class:"mr-2"},{default:T((()=>[h])),_:1}),n(f,{onClick:o[2]||(o[2]=o=>s.scrollTo(800)),class:"mr-2"},{default:T((()=>[k])),_:1}),n(f,{onClick:o[3]||(o[3]=o=>s.scrollTo(0)),class:"mr-2"},{default:T((()=>[y])),_:1}),n(f,{onClick:o[4]||(o[4]=o=>s.scrollBottom()),class:"mr-2"},{default:T((()=>[g])),_:1})]),n("div",w,[n(j,{class:"mt-4",ref:"scrollRef"},{default:T((()=>[n("ul",A,[(c(),i(d,null,p(100,(s=>n("li",{key:s,class:"p-2",style:{border:"1px solid #eee"}},m(s),1))),64))])])),_:1},512)])])}));C.render=S,C.__scopeId="data-v-6aa17979";export default C;