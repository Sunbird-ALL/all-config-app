"use strict";(self.webpackChunkcontent_service_ui=self.webpackChunkcontent_service_ui||[]).push([[477],{6477:(w,u,s)=>{s.r(u),s.d(u,{ConfigLoginModule:()=>O});var l=s(6814),g=s(9310),i=s(95),f=s(553),o=s(4946),d=s(5118),h=s(7351),c=s(707),m=s(7680);function b(n,p){1&n&&(o.TgZ(0,"div",8),o._uU(1," Please select an environment. "),o.qZA())}function C(n,p){1&n&&(o.TgZ(0,"div",9)(1,"div",10),o._UZ(2,"p-progressSpinner"),o.qZA()())}let x=(()=>{class n{constructor(r,e,t,a){this.fb=r,this.ref=e,this.contentService=t,this.router=a,this.display=!0,this.devUrl=f.N.devPort,this.prodUrl=f.N.prodPort,this.loading=!1}ngOnInit(){this.environmentForm=this.fb.group({environment:["",i.kI.required]})}submitEnvironment(){if(this.loading=!0,this.environmentForm.valid){const r=this.environmentForm.value.environment;this.contentService.getApiHost(r),this.loading=!1,this.ref.close(r),this.router.navigate(["/content/story/list"])}else this.loading=!1,this.markFormGroupTouched(this.environmentForm)}markFormGroupTouched(r){Object.values(r.controls).forEach(e=>{e.markAsTouched(),e instanceof i.cw&&this.markFormGroupTouched(e)})}static#o=this.\u0275fac=function(e){return new(e||n)(o.Y36(i.qu),o.Y36(d.E7),o.Y36(h._),o.Y36(g.F0))};static#n=this.\u0275cmp=o.Xpm({type:n,selectors:[["app-global-api-host"]],decls:19,vars:5,consts:[[2,"width","420px",3,"formGroup"],[1,"field"],["type","radio","formControlName","environment","value","dev"],[2,"margin-left","10px"],["type","radio","formControlName","environment","value","prod"],["class","text-danger",4,"ngIf"],["pButton","","type","button","pButton","","label","Submit",2,"height","45px",3,"click"],["class","loading-overlay",4,"ngIf"],[1,"text-danger"],[1,"loading-overlay"],[1,"spinner-message-container"]],template:function(e,t){1&e&&(o.TgZ(0,"div")(1,"form",0)(2,"div",1)(3,"label"),o._UZ(4,"input",2),o._uU(5," Development "),o._UZ(6,"br"),o.TgZ(7,"a",3),o._uU(8),o.qZA()()(),o.TgZ(9,"div",1)(10,"label"),o._UZ(11,"input",4),o._uU(12," Production "),o._UZ(13,"br"),o.TgZ(14,"a",3),o._uU(15),o.qZA()()(),o.YNc(16,b,2,0,"div",5),o.qZA(),o.TgZ(17,"button",6),o.NdJ("click",function(){return t.submitEnvironment()}),o.qZA()(),o.YNc(18,C,3,0,"div",7)),2&e&&(o.xp6(1),o.Q6J("formGroup",t.environmentForm),o.xp6(7),o.Oqu(t.devUrl),o.xp6(7),o.Oqu(t.prodUrl),o.xp6(1),o.Q6J("ngIf",t.environmentForm.get("environment").invalid&&t.environmentForm.get("environment").touched),o.xp6(2),o.Q6J("ngIf",t.loading))},dependencies:[l.O5,i._Y,i.Fj,i._,i.JJ,i.JL,i.sg,i.u,c.Hq,m.G],styles:[".dialog-content[_ngcontent-%COMP%]   .ui-dialog-title[_ngcontent-%COMP%]{font-size:28px}.field[_ngcontent-%COMP%]{margin-bottom:10px}label[_ngcontent-%COMP%]{display:block;margin-bottom:5px;font-size:18px}input[type=radio][_ngcontent-%COMP%]{margin-right:5px}.text-danger[_ngcontent-%COMP%]{color:red;font-size:14px;margin-top:5px}button[_ngcontent-%COMP%]{margin-top:12%;width:100%;background-color:#007bff;color:#fff;padding:12px;border:none;border-radius:5px;cursor:pointer}button[_ngcontent-%COMP%]:hover{background-color:#0056b3}"]})}return n})();var Z=s(6778),v=s(3714);function P(n,p){1&n&&(o.TgZ(0,"small",14),o._uU(1,"Username is required."),o.qZA())}function y(n,p){1&n&&(o.TgZ(0,"small",14),o._uU(1,"Password is required."),o.qZA())}function T(n,p){1&n&&(o.TgZ(0,"div",15)(1,"div",16),o._UZ(2,"p-progressSpinner"),o.qZA()())}let _=(()=>{class n{constructor(r,e,t,a,U){this.fb=r,this.authService=e,this.router=t,this.contentService=a,this.dialogService=U,this.showPassword=!1,this.loading=!1,this.loginForm=this.fb.group({username:["",[i.kI.required]],password:["",[i.kI.required]]})}ngOnInit(){}login(r){if(this.loginForm.valid){this.loading=!0;const{username:e,password:t}=r.value;this.contentService.getVirtualID(e,t).subscribe({next:a=>{this.loading=!1,a?.result?.virtualID&&this.checkVirtualID(Number(a?.result?.virtualID))},error:a=>{this.loading=!1,console.error("API call failed:",a)}})}}checkVirtualID(r){this.authService.checkVirtualID(r)?this.dialogService.open(x,{header:"Select Environment",closable:!0,contentStyle:{"font-size":"28px"}}):this.router.navigate(["/forbidden"])}togglePasswordVisibility(){this.showPassword=!this.showPassword}static#o=this.\u0275fac=function(e){return new(e||n)(o.Y36(i.qu),o.Y36(Z.e),o.Y36(g.F0),o.Y36(h._),o.Y36(d.xA))};static#n=this.\u0275cmp=o.Xpm({type:n,selectors:[["app-config-login"]],decls:22,vars:10,consts:[[1,"login-container"],[3,"formGroup","ngSubmit"],[2,"text-align","center"],[1,"p-field"],["for","username"],[1,"required"],["type","text","id","username","formControlName","username","pInputText","","required",""],["class","error-message",4,"ngIf"],["for","password"],[1,"password-input-container"],["id","password","formControlName","password","pPassword","","required","",3,"type"],[1,"pi",2,"padding-bottom","6px",3,"ngClass","click"],["type","submit","pButton","","label","Login",2,"height","45px"],["class","loading-overlay",4,"ngIf"],[1,"error-message"],[1,"loading-overlay"],[1,"spinner-message-container"]],template:function(e,t){1&e&&(o.TgZ(0,"div",0)(1,"form",1),o.NdJ("ngSubmit",function(){return t.login(t.loginForm)}),o.TgZ(2,"h1",2),o._uU(3,"Login"),o.qZA(),o.TgZ(4,"div",3)(5,"label",4),o._uU(6,"Username"),o.TgZ(7,"span",5),o._uU(8,"*"),o.qZA()(),o._UZ(9,"input",6),o.YNc(10,P,2,0,"small",7),o.qZA(),o.TgZ(11,"div",3)(12,"label",8),o._uU(13,"Password"),o.TgZ(14,"span",5),o._uU(15,"*"),o.qZA()(),o.TgZ(16,"div",9),o._UZ(17,"input",10),o.TgZ(18,"i",11),o.NdJ("click",function(){return t.togglePasswordVisibility()}),o.qZA()(),o.YNc(19,y,2,0,"small",7),o.qZA(),o._UZ(20,"button",12),o.qZA(),o.YNc(21,T,3,0,"div",13),o.qZA()),2&e&&(o.xp6(1),o.Q6J("formGroup",t.loginForm),o.xp6(3),o.ekj("p-error",t.loginForm.get("username").touched&&t.loginForm.get("username").hasError("required")),o.xp6(6),o.Q6J("ngIf",t.loginForm.get("username").touched&&t.loginForm.get("username").hasError("required")),o.xp6(1),o.ekj("p-error",t.loginForm.get("password").touched&&t.loginForm.get("password").hasError("required")),o.xp6(6),o.s9C("type",t.showPassword?"text":"password"),o.xp6(1),o.Q6J("ngClass",t.showPassword?"pi-eye-slash":"pi-eye"),o.xp6(1),o.Q6J("ngIf",t.loginForm.get("password").touched&&t.loginForm.get("password").hasError("required")),o.xp6(2),o.Q6J("ngIf",t.loading))},dependencies:[l.mk,l.O5,i._Y,i.Fj,i.JJ,i.JL,i.Q7,i.sg,i.u,v.o,c.Hq,m.G],styles:[".login-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh}h1[_ngcontent-%COMP%]{font-size:24px;color:#333;margin-bottom:20px}form[_ngcontent-%COMP%]{width:450px;text-align:left;padding:20px;border:1px solid #ddd;border-radius:5px;box-shadow:0 0 10px #0000001a;background-color:#fff}.p-field[_ngcontent-%COMP%]{margin-bottom:20px}label[_ngcontent-%COMP%]{display:block;font-size:16px;margin-bottom:6px;color:#333}input[_ngcontent-%COMP%]{width:100%;height:35px;padding:8px;margin-bottom:10px;box-sizing:border-box;border:1px solid #ddd;border-radius:3px}button[_ngcontent-%COMP%]{width:100%;background-color:#007bff;color:#fff;padding:12px;border:none;border-radius:5px;cursor:pointer}button[_ngcontent-%COMP%]:hover{background-color:#0056b3}.required[_ngcontent-%COMP%]{color:red;margin-left:3px}.error-message[_ngcontent-%COMP%]{left:0;bottom:-18px;font-size:12px;color:red;text-align:left;margin-top:5px}.p-field[_ngcontent-%COMP%]{position:relative}.password-input-container[_ngcontent-%COMP%]{display:flex;align-items:center}.pi[_ngcontent-%COMP%]{position:absolute;right:10px;cursor:pointer;font-size:18px;color:#999}.pi[_ngcontent-%COMP%]:hover{color:#333}"]})}return n})(),F=(()=>{class n{static#o=this.\u0275fac=function(e){return new(e||n)};static#n=this.\u0275mod=o.oAB({type:n});static#t=this.\u0275inj=o.cJS({imports:[g.Bz.forChild([{path:"",component:_}]),g.Bz]})}return n})();var A=s(1312);let O=(()=>{class n{static#o=this.\u0275fac=function(e){return new(e||n)};static#n=this.\u0275mod=o.oAB({type:n});static#t=this.\u0275inj=o.cJS({providers:[d.xA],imports:[l.ez,F,i.u5,i.UX,v.j,c.hJ,A.S,m.L]})}return n})()}}]);