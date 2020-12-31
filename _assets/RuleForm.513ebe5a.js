import{a as e,h as s,i,o,j as t,k as a,w as r,p as l}from"./index.9ddc54c2.js";import"./xlsx.a48e520c.js";import"./index.1e7ca35a.js";import"./Trigger.20ed9977.js";import"./omit.e94ccb8d.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.71c323b3.js";import"./CheckOutlined.04ceadd9.js";import{s as n}from"./index.01e110a1.js";import"./colors.fc272af0.js";import"./RightOutlined.5a1d395b.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.d989a75d.js";import"./index.6db5d59d.js";import"./index.a172b251.js";import"./index.90fcf243.js";import"./index.f24bb7a6.js";import"./UpOutlined.10a785f5.js";import"./index.6107397a.js";import"./index.6e7c95c1.js";import"./index.01150fe0.js";import"./index.3c805844.js";import"./index.083f42a9.js";import{a as d}from"./index.a5990709.js";import"./LoadingOutlined.201072ff.js";import"./RightOutlined.b735e334.js";import"./useTimeout.261f68e1.js";import"./tsxHelper.877239e6.js";import"./index.2418dbe9.js";import"./domUtils.34789ce4.js";import"./index.0f525ba4.js";import"./animation.e52d0262.js";import"./useScrollTo.73d3059d.js";import"./useAttrs.ffe3ac1b.js";import"./index.ab1925fd.js";import{u as c}from"./useForm.71a6a5ef.js";const p=[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},required:!0},{field:"field2",component:"Input",label:"字段2",colProps:{span:8},required:!0},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8},required:!0},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]},rules:[{required:!0,message:"请输入aa"}]},{field:"field44",component:"Input",label:"自定义校验",colProps:{span:8},rules:[{required:!0,validator:async(e,s)=>s?"1"===s?Promise.reject("值不能为1"):Promise.resolve():Promise.reject("值不能为空"),trigger:"change"}]},{field:"field5",component:"CheckboxGroup",label:"字段5",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]},rules:[{required:!0}]},{field:"field7",component:"RadioGroup",label:"字段7",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]},rules:[{required:!0,message:"覆盖默认生成的校验信息"}]}];var m=e({components:{BasicForm:n,CollapseContainer:d},setup(){const{createMessage:e}=s(),[i,{validateFields:o,clearValidate:t,getFieldsValue:a,setFieldsValue:r}]=c({labelWidth:120,schemas:p,actionColOptions:{span:24}});return{register:i,schemas:p,handleSubmit:s=>{e.success("click search,values:"+JSON.stringify(s))},getFormValues:function(){const s=a();e.success("values:"+JSON.stringify(s))},setFormValues:function(){r({field1:1111,field5:["1"],field7:"1"})},validateForm:async function(){try{await o()}catch(e){}},resetValidate:async function(){t()}}}});const u={class:"m-4"},f={class:"mb-4"},j=l("手动校验表单"),b=l("清空校验信息"),g=l("获取表单值"),x=l("设置表单值");m.render=function(e,s,l,n,d,c){const p=i("a-button"),m=i("BasicForm"),v=i("CollapseContainer");return o(),t("div",u,[a("div",f,[a(p,{onClick:e.validateForm,class:"mr-2"},{default:r((()=>[j])),_:1},8,["onClick"]),a(p,{onClick:e.resetValidate,class:"mr-2"},{default:r((()=>[b])),_:1},8,["onClick"]),a(p,{onClick:e.getFormValues,class:"mr-2"},{default:r((()=>[g])),_:1},8,["onClick"]),a(p,{onClick:e.setFormValues,class:"mr-2"},{default:r((()=>[x])),_:1},8,["onClick"])]),a(v,{title:"表单校验"},{default:r((()=>[a(m,{onRegister:e.register,onSubmit:e.handleSubmit},null,8,["onRegister","onSubmit"])])),_:1})])};export default m;