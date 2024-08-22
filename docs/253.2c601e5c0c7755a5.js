"use strict";(self.webpackChunkcontent_service_ui=self.webpackChunkcontent_service_ui||[]).push([[253],{5253:(V,h,o)=>{o.r(h),o.d(h,{AdaptiveLearningModule:()=>P});var p=o(6814),a=o(95),f=o(3714),u=o(707),Z=o(1312),l=o(5118),C=o(9310),c=o(5219),e=o(4946),x=o(7351),g=o(4480),A=o(9445);function _(i,r){if(1&i){const t=e.EpF();e.TgZ(0,"div")(1,"form",1)(2,"div",2)(3,"p-messages",3),e.NdJ("valueChange",function(s){e.CHM(t);const d=e.oxw();return e.KtG(d.messages=s)}),e.qZA(),e.TgZ(4,"div",4)(5,"label",5),e._uU(6),e.qZA(),e._UZ(7,"input",6),e.qZA(),e.TgZ(8,"div",4)(9,"label",7),e._uU(10),e.TgZ(11,"span",8),e._uU(12,"*"),e.qZA()(),e.TgZ(13,"input",9),e.NdJ("input",function(s){e.CHM(t);const d=e.oxw();return e.KtG(d.filterNumbersOnly(s))}),e.qZA()()(),e.TgZ(14,"div",10)(15,"button",11),e.NdJ("click",function(){e.CHM(t);const s=e.oxw();return e.KtG(s.addUdiseCode())}),e.qZA(),e._uU(16,"\xa0 "),e.TgZ(17,"button",12),e.NdJ("click",function(){e.CHM(t);const s=e.oxw();return e.KtG(s.cancel())}),e.qZA()()()()}if(2&i){const t=e.oxw();e.xp6(1),e.Q6J("formGroup",t.addUdiseForm),e.xp6(2),e.Q6J("value",t.messages)("enableService",!1)("closable",!0),e.xp6(3),e.Oqu("School Name"),e.xp6(1),e.s9C("placeholder","Enter School Name"),e.xp6(3),e.hij("","Udise Code"," "),e.xp6(3),e.s9C("placeholder","Enter Udise Code"),e.xp6(2),e.s9C("label","Submit"),e.xp6(2),e.s9C("label","Cancel")}}let T=(()=>{class i{constructor(t,n,s){this.formBuilder=t,this.contentService=n,this.ref=s}ngOnInit(){this.initializeAddForm()}initializeAddForm(){this.addUdiseForm=this.formBuilder.group({school_name:[""],udise_code:["",[a.kI.required,a.kI.minLength(11),a.kI.maxLength(11),a.kI.pattern(/^\d+$/)]]})}addUdiseCode(){if(this.addUdiseForm?.invalid){const n=this.addUdiseForm?.controls.udise_code?.value;this.messages=n&&n?.length<11?[{severity:"error",summary:"UDISE Code Must be length of 11"}]:[{severity:"error",summary:"Add Required Data"}]}else this.contentService.addUdiseCode({school_name:this.addUdiseForm.value.school_name,udise_code:this.addUdiseForm.value.udise_code}).subscribe({next:n=>{"udise_code is already exists"===n?.result?this.messages=[{severity:"error",summary:"UDISE Code Already exists"}]:n.result&&this.ref.close(n.result)},error:n=>{this.messages=[{severity:"error",summary:"error"}]}})}filterNumbersOnly(t){const s=t.target.value.replace(/[^0-9]/g,"");this.addUdiseForm.get("udise_code")?.setValue(s)}cancel(){this.ref.close()}static#e=this.\u0275fac=function(n){return new(n||i)(e.Y36(a.qu),e.Y36(x._),e.Y36(l.E7))};static#t=this.\u0275cmp=e.Xpm({type:i,selectors:[["app-add-udise-code"]],decls:1,vars:1,consts:[[4,"ngIf"],[3,"formGroup"],[1,"card","p-fluid"],[3,"value","enableService","closable","valueChange"],[1,"field"],["for","name"],["type","text","name","school_name","pInputText","","id","school_name","autofocus","","formControlName","school_name",3,"placeholder"],["for","udise_code"],[1,"required"],["type","text","name","udise_code","pInputText","","id","udise_code","autofocus","","formControlName","udise_code","minlength","11","maxlength","11","pattern","^\\d+$",3,"placeholder","input"],[1,"p-col-12","p-md-6","p-lg-4","p-xl-3","p-button-container"],["pButton","","pRipple","","icon","pi pi-check",1,"p-button","p-button-success",3,"label","click"],["pButton","","pRipple","","type","button","icon","pi pi-times",1,"p-button","p-button-danger",3,"label","click"]],template:function(n,s){1&n&&e.YNc(0,_,18,10,"div",0),2&n&&e.Q6J("ngIf",!0)},dependencies:[p.O5,u.Hq,a._Y,a.Fj,a.JJ,a.JL,a.wO,a.nD,a.c5,f.o,g.H,a.sg,a.u,A.V],styles:[".required[_ngcontent-%COMP%]{color:red;margin-right:10px;margin-bottom:10px}"]})}return i})();var U=o(3904),m=o(6361),y=o(7680);const b=["dt"];function S(i,r){if(1&i){const t=e.EpF();e.TgZ(0,"div",12),e._UZ(1,"div"),e.TgZ(2,"div",13)(3,"button",14),e.NdJ("click",function(){e.CHM(t);const s=e.oxw();return e.KtG(s.addMoreUdiseCode())}),e.qZA()()()}2&i&&(e.xp6(3),e.s9C("label","Add Udise Code"))}function L(i,r){1&i&&(e.TgZ(0,"tr")(1,"th",15)(2,"div",16),e._uU(3," Serial No. "),e.qZA()(),e.TgZ(4,"th",17)(5,"div",16),e._uU(6," Udise Code "),e._UZ(7,"p-columnFilter",18),e.qZA()(),e.TgZ(8,"th",17)(9,"div",16),e._uU(10," School Name "),e._UZ(11,"p-columnFilter",19),e.qZA()(),e.TgZ(12,"th",20)(13,"div",16),e._uU(14," Actions "),e.qZA()()())}const F=function(i){return{"disabled-row":i}};function N(i,r){if(1&i){const t=e.EpF();e.TgZ(0,"tr",21)(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td",22)(8,"button",23),e.NdJ("click",function(){const d=e.CHM(t).$implicit,v=e.oxw();return e.KtG(v.deleteUdise(d))}),e.qZA()()()}if(2&i){const t=r.$implicit,n=r.rowIndex,s=e.oxw();e.Q6J("pEditableRow",s.tutorial)("ngClass",e.VKq(5,F,t.deleted)),e.xp6(2),e.hij(" ",n+1," "),e.xp6(2),e.hij(" ",t.udise_code," "),e.xp6(2),e.hij(" ",t.school_name?t.school_name:"-"," ")}}function J(i,r){1&i&&(e.TgZ(0,"tr")(1,"td",24),e._uU(2,"No Udise Codes found"),e.qZA()())}function M(i,r){1&i&&(e.TgZ(0,"tr")(1,"td",24),e._uU(2," Loading Udise Codes ... Please wait. "),e.qZA()())}function Y(i,r){1&i&&(e.TgZ(0,"div",25)(1,"div",26),e._UZ(2,"p-progressSpinner"),e.qZA()())}const E=function(){return[10,100,200,300]},I=function(){return[]},j=function(){return{width:"450px"}};let H=(()=>{class i{ngOnInit(){this.getUdiseCode()}constructor(t,n,s,d){this.contentService=t,this.ref=n,this.dialogService=s,this.confirmationService=d,this.messages=[],this.adaptiveLists=[],this.loading=!1}getUdiseCode(){this.loading=!0,this.contentService.getUdiseCode().subscribe({next:t=>{t?.result?.length>0&&(this.adaptiveLists=t.result,this.loading=!1)},error:t=>{this.loading=!1,this.messages=[],this.messages=[{severity:"error",detail:t?.error?.params?.errmsg}]}})}addMoreUdiseCode(){this.ref=this.dialogService.open(T,{header:"Add Udise Code",data:{mode:"Add"},width:"40%",contentStyle:{overflow:"auto"}}),this.ref.onClose.subscribe(t=>{t&&(this.adaptiveLists.push(t),this.messages=[],this.messages=[{severity:"info",summary:"Created",detail:"Story is Created"}],this.dataTable.reset(),this.dataTable.value=this.adaptiveLists)})}deleteUdise(t){this.confirmationService.confirm({message:"Are you sure that you want to proceed?",header:"Confirmation",icon:"pi pi-exclamation-triangle",accept:()=>{this.contentService.deleteUdiseCode(t?.udise_code).subscribe(n=>{t.deleted=!0}),this.messages=[],this.messages=[{severity:"info",summary:"Confirmed",detail:"Udise Code deleted"}]},reject:()=>{this.messages=[],this.messages=[{severity:"error",summary:"Rejected",detail:"You have rejected"}]}})}static#e=this.\u0275fac=function(n){return new(n||i)(e.Y36(x._),e.Y36(l.E7),e.Y36(l.xA),e.Y36(c.YP))};static#t=this.\u0275cmp=e.Xpm({type:i,selectors:[["app-adaptive-learning"]],viewQuery:function(n,s){if(1&n&&e.Gf(b,5),2&n){let d;e.iGM(d=e.CRH())&&(s.dataTable=d.first)}},features:[e._Bn([c.ez,c.YP])],decls:15,vars:16,consts:[[1,"grid"],[1,"col-12"],[3,"value","enableService","closable","valueChange"],[1,"card"],["dataKey","id","styleClass","p-datatable-gridlines","responsiveLayout","scroll",3,"value","rows","rowsPerPageOptions","loading","rowHover","paginator","globalFilterFields"],["dt",""],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],["pTemplate","emptymessage"],["pTemplate","loadingbody"],["class","loading-overlay",4,"ngIf"],[1,"flex","justify-content-between","flex-column","sm:flex-row"],[1,"my-2"],["pButton","","pRipple","","icon","pi pi-plus",1,"p-button-success","mr-2",3,"label","click"],["id","",2,"width","100px"],[1,"flex","justify-content-between","align-items-center"],["id","",2,"min-width","12rem"],["type","text","field","udise_code","display","menu","matchMode","contains","placeholder","Search"],["type","text","field","school_name","display","menu","matchMode","contains","placeholder","Search"],["id","",2,"width","110px"],[3,"pEditableRow","ngClass"],[2,"text-align","center","z-index","999"],["pButton","","pRipple","","icon","pi pi-trash",1,"p-button-rounded","p-button-danger","mr-2",3,"click"],["colspan","8"],[1,"loading-overlay"],[1,"spinner-message-container"]],template:function(n,s){1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"p-messages",2),e.NdJ("valueChange",function(v){return s.messages=v}),e.qZA(),e.TgZ(3,"div",3)(4,"h5"),e._uU(5,"Udise Code"),e.qZA(),e.TgZ(6,"p-table",4,5),e.YNc(8,S,4,1,"ng-template",6),e.YNc(9,L,15,0,"ng-template",7),e.YNc(10,N,9,7,"ng-template",8),e.YNc(11,J,3,0,"ng-template",9),e.YNc(12,M,3,0,"ng-template",10),e.qZA()()(),e.YNc(13,Y,3,0,"div",11),e.qZA(),e._UZ(14,"p-confirmDialog")),2&n&&(e.xp6(2),e.Q6J("value",s.messages)("enableService",!1)("closable",!0),e.xp6(4),e.Q6J("value",s.adaptiveLists)("rows",10)("rowsPerPageOptions",e.DdM(13,E))("loading",s.loading)("rowHover",!0)("paginator",!0)("globalFilterFields",e.DdM(14,I)),e.xp6(7),e.Q6J("ngIf",s.loading),e.xp6(1),e.Akn(e.DdM(15,j)))},dependencies:[p.mk,p.O5,U.Q,u.Hq,c.jx,m.iA,m.D$,m.xl,g.H,A.V,y.G],styles:[".disabled-row[_ngcontent-%COMP%]{opacity:.5;pointer-events:none}"]})}return i})(),O=(()=>{class i{static#e=this.\u0275fac=function(n){return new(n||i)};static#t=this.\u0275mod=e.oAB({type:i});static#i=this.\u0275inj=e.cJS({imports:[C.Bz.forChild([{path:"",component:H}]),C.Bz]})}return i})();var w=o(3965),B=o(2610),G=o(7161),D=o(4055),Q=o(6651),R=o(6022),q=o(7902),z=o(4104),K=o(6804);let P=(()=>{class i{static#e=this.\u0275fac=function(n){return new(n||i)};static#t=this.\u0275mod=e.oAB({type:i});static#i=this.\u0275inj=e.cJS({providers:[l.xA,l.E7,c.ez],imports:[O,p.ez,U.D,a.u5,m.U$,R.Xt,u.hJ,q.JH,f.j,K.KZ,g.T,D.q4,w.kW,Q.q,z.EV,Z.S,G.O,a.UX,B.O,y.L]})}return i})()}}]);