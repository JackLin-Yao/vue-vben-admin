let t=document.createElement("style");t.innerHTML=".step2[data-v-3e6a7e30]{width:450px;margin:0 auto}",document.head.appendChild(t);import{a as e,d0 as s,d1 as i,i as a,o,j as r,k as n,bi as d,p as m}from"./index.9ddc54c2.js";import"./xlsx.a48e520c.js";import"./index.1e7ca35a.js";import"./Trigger.20ed9977.js";import"./omit.e94ccb8d.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.71c323b3.js";import"./CheckOutlined.04ceadd9.js";import{s as p}from"./index.01e110a1.js";import"./colors.fc272af0.js";import"./RightOutlined.5a1d395b.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.d989a75d.js";import"./index.6db5d59d.js";import"./index.a172b251.js";import"./index.90fcf243.js";import"./index.f24bb7a6.js";import"./UpOutlined.10a785f5.js";import"./index.6107397a.js";import"./index.6e7c95c1.js";import"./index.01150fe0.js";import"./index.3c805844.js";import"./index.083f42a9.js";import"./LoadingOutlined.201072ff.js";import"./RightOutlined.b735e334.js";import"./tsxHelper.877239e6.js";import"./index.0f525ba4.js";import"./useAttrs.ffe3ac1b.js";import"./index.ab1925fd.js";import{u as c}from"./useForm.71a6a5ef.js";import{step2Schemas as l}from"./data.8ce15ba8.js";var u=e({components:{BasicForm:p},emits:["next","prev"],setup(t,{emit:e}){const[s,{validate:i,setProps:a}]=c({labelWidth:80,schemas:l,actionColOptions:{span:14},resetButtonOptions:{text:"上一步"},submitButtonOptions:{text:"提交"},resetFunc:async function(){e("prev")},submitFunc:async function(){try{const t=await i();a({submitButtonOptions:{loading:!0}}),setTimeout((()=>{a({submitButtonOptions:{loading:!1}}),e("next",t)}),1500)}catch(t){}}});return{register:s}}});const j=d("data-v-3e6a7e30");s("data-v-3e6a7e30");const f={class:"step2"},b=m(" ant-design@alipay.com "),x=m(" test@example.com "),g=m(" Vben "),O=m(" 500元 ");i();const h=j(((t,e,s,i,d,m)=>{const p=a("a-alert"),c=a("a-descriptions-item"),l=a("a-descriptions"),u=a("a-divider"),h=a("BasicForm");return o(),r("div",f,[n(p,{message:"确认转账后，资金将直接打入对方账户，无法退回。","show-icon":""}),n(l,{column:1,class:"mt-5"},{default:j((()=>[n(c,{label:"付款账户"},{default:j((()=>[b])),_:1}),n(c,{label:"收款账户"},{default:j((()=>[x])),_:1}),n(c,{label:"收款人姓名"},{default:j((()=>[g])),_:1}),n(c,{label:"转账金额"},{default:j((()=>[O])),_:1})])),_:1}),n(u),n(h,{onRegister:t.register},null,8,["onRegister"])])}));u.render=h,u.__scopeId="data-v-3e6a7e30";export default u;