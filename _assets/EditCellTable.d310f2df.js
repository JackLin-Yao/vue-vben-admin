import{a as e,i as t,o as i,j as d,k as o}from"./index.9ddc54c2.js";import"./xlsx.a48e520c.js";import"./useSortable.3153aa06.js";import"./index.1e7ca35a.js";import"./Trigger.20ed9977.js";import"./omit.e94ccb8d.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.71c323b3.js";import"./CheckOutlined.04ceadd9.js";import"./index.01e110a1.js";import"./colors.fc272af0.js";import"./index.914f22ed.js";import"./RightOutlined.5a1d395b.js";import"./index.b64d03a0.js";import"./types.e671a8d1.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.d989a75d.js";import"./_baseFor.f4e5f03f.js";import"./index.6db5d59d.js";import"./index.a172b251.js";import"./index.90fcf243.js";import"./index.f24bb7a6.js";import"./UpOutlined.10a785f5.js";import"./LeftOutlined.3c8aea2a.js";import"./index.6107397a.js";import"./index.6e7c95c1.js";import"./index.02c7a5b0.js";import"./index.01150fe0.js";import"./index.2eda427c.js";import"./zh_CN.0242bd16.js";import"./index.3c805844.js";import"./index.083f42a9.js";import"./CaretDownFilled.a38fe53e.js";import"./index.a5990709.js";import"./CheckOutlined.60746704.js";import"./CloseOutlined.7bc225a7.js";import{s as n,a}from"./index.1e9f683e.js";import"./FullscreenOutlined.cb05ecf3.js";import"./LeftOutlined.504a55f1.js";import"./LoadingOutlined.201072ff.js";import"./TableAction.15f54ae5.js";import"./RightOutlined.b735e334.js";import"./SettingOutlined.70b40013.js";import"./useTimeout.261f68e1.js";import"./tsxHelper.877239e6.js";import"./index.2418dbe9.js";import"./domUtils.34789ce4.js";import"./index.0f525ba4.js";import"./animation.e52d0262.js";import"./useScrollTo.73d3059d.js";import"./useAttrs.ffe3ac1b.js";import"./index.ab1925fd.js";import"./useForm.71a6a5ef.js";import"./index.c53a78c4.js";import"./useWindowSizeFn.0112e3aa.js";import"./uuid.40269c00.js";import"./useExpose.71340b2e.js";import{u as s}from"./useTable.0fdeb956.js";import{o as r}from"./select.9b082a34.js";import{d as p}from"./table.23b71fbc.js";const m=[{title:"输入框",dataIndex:"name",edit:!0,editComponentProps:{prefix:"$"},width:200},{title:"默认输入状态",dataIndex:"name7",edit:!0,editable:!0,width:200},{title:"输入框校验",dataIndex:"name1",edit:!0,editRule:!0,width:200},{title:"输入框函数校验",dataIndex:"name2",edit:!0,editRule:async e=>"2"===e?"不能输入该值":"",width:200},{title:"数字输入框",dataIndex:"id",edit:!0,editRule:!0,editComponent:"InputNumber",width:200},{title:"下拉框",dataIndex:"name3",edit:!0,editComponent:"Select",editComponentProps:{options:[{label:"Option1",value:"1"},{label:"Option2",value:"2"}]},width:200},{title:"远程下拉",dataIndex:"name4",edit:!0,editComponent:"ApiSelect",editComponentProps:{api:r},width:200},{title:"勾选框",dataIndex:"name5",edit:!0,editComponent:"Checkbox",editValueMap:e=>e?"是":"否",width:200},{title:"开关",dataIndex:"name6",edit:!0,editComponent:"Switch",editValueMap:e=>e?"开":"关",width:200}];var l=e({components:{BasicTable:n,EditTableHeaderIcon:a},setup(){const[e]=s({title:"可编辑单元格示例",api:p,columns:m,showIndexColumn:!1,bordered:!0});return{registerTable:e,handleEditEnd:function({record:e,index:t,key:i,value:d}){},handleEditCancel:function(){}}}});const j={class:"p-4"};l.render=function(e,n,a,s,r,p){const m=t("BasicTable");return i(),d("div",j,[o(m,{onRegister:e.registerTable,onEditEnd:e.handleEditEnd,onEditCancel:e.handleEditCancel},null,8,["onRegister","onEditEnd","onEditCancel"])])};export default l;