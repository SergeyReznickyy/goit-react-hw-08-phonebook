"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[851],{7851:function(e,a,t){t.r(a),t.d(a,{default:function(){return k}});var r=t(1413),n=t(9439),s=t(2791),i=t(4420),l=t(1087),o=t(4802),u=t(8007),c=t(1614),m=t(697),d=t(3044),h=t(3239),f=t(890),Z=t(1889),p=t(7665),x=t(4518),v=t(533),w=t(9658),j=t(403),N=t(5047),b=t(7834),g=t(9176),y=t(184);function k(){var e=(0,b.a)(),a=e.error,t=e.isAuth,k=(0,s.useState)({firstName:!0,lastName:!0,email:!0,password:!0}),C=(0,n.Z)(k,2),P=C[0],S=C[1],_=(0,i.I0)(),W=(0,s.useState)(""),A=(0,n.Z)(W,2),q=A[0],E=A[1],z=(0,s.useState)(""),T=(0,n.Z)(z,2),D=T[0],F=T[1],I=(0,s.useState)(""),U=(0,n.Z)(I,2),L=U[0],V=U[1],$=(0,s.useState)(""),B=(0,n.Z)($,2),G=B[0],H=B[1];console.log(P);var J=(0,u.Z_)().matches(/^[a-zA-Z\u0430-\u044f\u0456\u0457\u0454\u0491\u0410-\u042f\u0406\u0407\u0404\u0490]+([' -][a-zA-Z\u0430-\u044f\u0456\u0457\u0454\u0491\u0410-\u042f\u0406\u0407\u0404\u0490]*)*$/).max(35),K=(0,u.Z_)().email(),M=(0,u.Z_)().min(6);(0,s.useEffect)((function(){return function(){_((0,g.f)())}}),[_]);var O=function(e){var a=e.currentTarget,t=a.name,n=a.value;switch(t){case"firstName":J.validate(n).then((function(){return S((function(e){return(0,r.Z)((0,r.Z)({},e),{},{firstName:!0})}))})).catch((function(){return S((function(e){return(0,r.Z)((0,r.Z)({},e),{},{firstName:!1})}))})),E(n);break;case"lastName":J.validate(n).then((function(){return S((function(e){return(0,r.Z)((0,r.Z)({},e),{},{lastName:!0})}))})).catch((function(){return S((function(e){return(0,r.Z)((0,r.Z)({},e),{},{lastName:!1})}))})),F(n);break;case"email":K.validate(n).then((function(){return S((function(e){return(0,r.Z)((0,r.Z)({},e),{},{email:!0})}))})).catch((function(){return S((function(e){return(0,r.Z)((0,r.Z)({},e),{},{email:!1})}))})),V(n);break;case"password":M.validate(n).then((function(){return S((function(e){return(0,r.Z)((0,r.Z)({},e),{},{password:!0})}))})).catch((function(){return S((function(e){return(0,r.Z)((0,r.Z)({},e),{},{password:!1})}))})),H(n);break;default:throw new Error("unsupported input name")}};return(0,y.jsxs)(c.Z,{component:"main",maxWidth:"xs",children:[(0,y.jsxs)(m.Z,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,y.jsx)(d.Z,{sx:{m:1,bgcolor:"secondary.main"},children:t?(0,y.jsx)(h.Z,{size:24,color:"inherit"}):(0,y.jsx)(j.Z,{})}),(0,y.jsx)(f.Z,{component:"h1",variant:"h5",children:"Sign up"}),(0,y.jsxs)(m.Z,{component:"form",noValidate:!0,onSubmit:function(e){if(e.preventDefault(),P.firstName&&P.lastName&&P.email&&P.password){var a=e.target.elements,t={name:"".concat(a.firstName.value," ").concat(a.lastName.value),email:a.email.value,password:a.password.value};_((0,N.y1)(t))}else(0,o.yv)("Please check the entered data",{variant:"error"})},sx:{mt:3},children:[(0,y.jsxs)(Z.ZP,{container:!0,spacing:2,children:[(0,y.jsx)(Z.ZP,{item:!0,xs:12,sm:6,children:(0,y.jsx)(p.Z,{onChange:O,type:"text",value:q,error:!P.firstName,autoComplete:"given-name",name:"firstName",required:!0,fullWidth:!0,id:"firstName",label:"First Name",autoFocus:!0})}),(0,y.jsx)(Z.ZP,{item:!0,xs:12,sm:6,children:(0,y.jsx)(p.Z,{onChange:O,type:"text",value:D,error:!P.lastName,required:!0,fullWidth:!0,id:"lastName",label:"Last Name",name:"lastName",autoComplete:"family-name"})}),(0,y.jsx)(Z.ZP,{item:!0,xs:12,children:(0,y.jsx)(p.Z,{onChange:O,type:"email",value:L,error:!P.email,required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email"})}),(0,y.jsx)(Z.ZP,{item:!0,xs:12,children:(0,y.jsx)(p.Z,{onChange:O,value:G,error:!P.password,title:"Password must contain at least 8 characters",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"new-password"})})]}),(0,y.jsx)(x.Z,{type:"submit",fullWidth:!0,variant:"contained",disabled:t,sx:{mt:3,mb:2},children:"Sign Up"}),(0,y.jsx)(Z.ZP,{container:!0,justifyContent:"flex-end",children:(0,y.jsx)(Z.ZP,{item:!0,children:(0,y.jsx)(v.Z,{variant:"body2",component:l.rU,to:"/login",children:"Already have an account? Sign in"})})})]})]}),a&&(0,y.jsx)(w.Z,{severity:"error",children:"Network Error"!==a?"The password should have at least 9 characters..":a})]})}}}]);
//# sourceMappingURL=851.edd32dc1.chunk.js.map