let t=document.createElement("style");t.innerHTML=".account-setting{margin:12px;background:#fff}.account-setting .base-title{padding-left:0}.account-setting .ant-tabs-tab-active{background-color:#e6f7ff}",document.head.appendChild(t);import{a as e,i,o as s,j as a,w as o,k as r,aM as n,b9 as d,cL as m}from"./index.9ddc54c2.js";import"./xlsx.a48e520c.js";import"./index.1e7ca35a.js";import"./Trigger.20ed9977.js";import"./omit.e94ccb8d.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.71c323b3.js";import"./CheckOutlined.04ceadd9.js";import"./index.01e110a1.js";import"./colors.fc272af0.js";import"./RightOutlined.5a1d395b.js";import"./types.e671a8d1.js";import"./index.08360487.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.d989a75d.js";import"./_baseFor.f4e5f03f.js";import"./index.6db5d59d.js";import"./index.a172b251.js";import"./index.90fcf243.js";import"./index.f24bb7a6.js";import{T as p}from"./index.eff90745.js";import"./UpOutlined.10a785f5.js";import"./LeftOutlined.3c8aea2a.js";import"./index.6107397a.js";import"./index.6e7c95c1.js";import"./index.01150fe0.js";import"./index.2eda427c.js";import"./zh_CN.0242bd16.js";import"./index.b5da176f.js";import"./index.3c805844.js";import"./index.e828a213.js";import"./index.083f42a9.js";import"./FileOutlined.96b030fe.js";import{s as f}from"./index.a5990709.js";import"./LoadingOutlined.201072ff.js";import"./RightOutlined.b735e334.js";import"./useTimeout.261f68e1.js";import"./tsxHelper.877239e6.js";import"./index.2418dbe9.js";import"./domUtils.34789ce4.js";import"./index.0f525ba4.js";import"./animation.e52d0262.js";import"./useScrollTo.73d3059d.js";import"./header.0299ae16.js";import"./useAttrs.ffe3ac1b.js";import"./index.ab1925fd.js";import"./useForm.71a6a5ef.js";import{s as c}from"./data.8adaf682.js";import j from"./AccountBind.ab22f522.js";import l from"./BaseSetting.3cfdc972.js";import b from"./SecureSetting.43f17ff9.js";import u from"./MsgNotify.5b7d8254.js";var x=e({components:{ScrollContainer:f,Tabs:p,TabPane:p.TabPane,BaseSetting:l,SecureSetting:b,AccountBind:j,MsgNotify:u},setup:()=>({prefixCls:"account-setting",settingList:c,tabBarStyle:{width:"220px"}})});x.render=function(t,e,p,f,c,j){const l=i("TabPane"),b=i("Tabs"),u=i("ScrollContainer");return s(),a(u,null,{default:o((()=>[r("div",{ref:"wrapperRef",class:t.prefixCls},[r(b,{"tab-position":"left",tabBarStyle:t.tabBarStyle},{default:o((()=>[(s(!0),a(n,null,d(t.settingList,(t=>(s(),a(l,{key:t.key,tab:t.name},{default:o((()=>[(s(),a(m(t.component)))])),_:2},1032,["tab"])))),128))])),_:1},8,["tabBarStyle"])],2)])),_:1})};export default x;