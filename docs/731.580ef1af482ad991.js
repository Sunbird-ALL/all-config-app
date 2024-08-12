"use strict";(self.webpackChunkcontent_service_ui=self.webpackChunkcontent_service_ui||[]).push([[731],{9731:(R,m,e)=>{e.r(m),e.d(m,{FamilarityModule:()=>E});var T=e(6814),c=e(9310),l=e(95),Z=e(8783),t=e(4946),F=e(7351),g=e(5219),p=e(707),s=e(6361),u=e(3714),d=e(4480),f=e(3965),C=e(9445);function A(i,o){if(1&i){const a=t.EpF();t.TgZ(0,"div",11)(1,"form",12)(2,"div",13),t._UZ(3,"input",14),t.qZA(),t.TgZ(4,"div",13),t._UZ(5,"p-dropdown",15),t.qZA()()(),t.TgZ(6,"div",16)(7,"button",17),t.NdJ("click",function(){t.CHM(a);const r=t.oxw();return t.KtG(r.searchTarget())}),t.qZA(),t.TgZ(8,"button",18),t.NdJ("click",function(){t.CHM(a);const r=t.oxw(),x=t.MAs(7);return t.KtG(r.clear(x))}),t.qZA()()}if(2&i){const a=t.oxw();t.xp6(1),t.Q6J("formGroup",a.familarityForm),t.xp6(4),t.Q6J("showClear",!0)("options",a.languageList),t.xp6(2),t.s9C("label","Search")}}function L(i,o){1&i&&(t.TgZ(0,"tr")(1,"th",19)(2,"div",20),t._uU(3," Serial No. "),t.qZA()(),t.TgZ(4,"th",19)(5,"div",20),t._uU(6," Character "),t._UZ(7,"p-columnFilter",21),t.qZA()(),t.TgZ(8,"th",19)(9,"div",20),t._uU(10," Score "),t._UZ(11,"p-columnFilter",22),t.qZA()()())}function U(i,o){if(1&i&&(t.TgZ(0,"tr",23)(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA()()),2&i){const a=o.$implicit,n=o.rowIndex,r=t.oxw();t.Q6J("pEditableRow",r.tutorial),t.xp6(2),t.hij(" ",n+1," "),t.xp6(2),t.hij(" ",a.character," "),t.xp6(2),t.hij(" ",a.score," ")}}function J(i,o){1&i&&(t.TgZ(0,"tr")(1,"td",24),t._uU(2,"No Target found."),t.qZA()())}function M(i,o){1&i&&(t.TgZ(0,"tr")(1,"td",24),t._uU(2," Loading Target ... Please wait. "),t.qZA()())}const S=function(){return[10,100,200,300]},b=function(){return["name","country.name","representative.name","status"]};let N=(()=>{class i{constructor(a,n){this.formBuilder=a,this.contentService=n,this.messages=[],this.targetList=[],this.loading=!1,this.languageList=Z.X.languages}ngOnInit(){this.initializeAddForm()}initializeAddForm(){this.familarityForm=this.formBuilder.group({userID:["",l.kI.required],language:["",l.kI.required]})}searchTarget(){this.familarityForm.invalid?this.messages=[{severity:"error",summary:"Add Required Data"}]:this.contentService.searchFamiliarty(this.familarityForm.value.userID,this.familarityForm.value.language).subscribe(r=>{console.log(r),this.targetList=r,this.loading=!1},r=>{this.messages=[{severity:"error",summary:"error"}]})}clearAllValues(){this.contentService.searchTarget(null,null).subscribe(a=>{console.log(a),this.targetList=a,this.loading=!1},a=>{this.messages=[{severity:"error",summary:"error"}]})}clear(a){this.clearAllValues(),this.familarityForm.reset(),a.clear()}static#t=this.\u0275fac=function(n){return new(n||i)(t.Y36(l.qu),t.Y36(F._))};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-familarity-list"]],decls:13,vars:12,consts:[[1,"grid"],[1,"col-12"],[3,"value","enableService","closable","valueChange"],[1,"card"],["dataKey","id","styleClass","p-datatable-gridlines","responsiveLayout","scroll",3,"value","rows","rowsPerPageOptions","loading","rowHover","paginator","globalFilterFields"],["dt",""],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],["pTemplate","emptymessage"],["pTemplate","loadingbody"],[1,"filter-container"],[1,"filter-fields",3,"formGroup"],[1,"filter-item"],["autofocus","","formControlName","userID","id","userId","type","text","pInputText","","placeholder","Enter User ID"],["formControlName","language","optionLabel","label","autofocus","","placeholder","Select Language","optionValue","value",3,"showClear","options"],[1,"button-container"],["pButton","","pRipple","","icon","pi pi-search",1,"p-button-success","mr-2",3,"label","click"],["pButton","","label","Clear","icon","pi pi-filter-slash",1,"p-button-outlined","mb-2",3,"click"],["id","",2,"min-width","12rem"],[1,"flex","justify-content-between","align-items-center"],["type","text","field","character","display","menu","matchMode","contains","placeholder","Search"],["type","text","field","score","display","menu","matchMode","contains","placeholder","Search"],[3,"pEditableRow"],["colspan","8"]],template:function(n,r){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"p-messages",2),t.NdJ("valueChange",function(Q){return r.messages=Q}),t.qZA(),t.TgZ(3,"div",3)(4,"h5"),t._uU(5,"Familiarity List"),t.qZA(),t.TgZ(6,"p-table",4,5),t.YNc(8,A,9,4,"ng-template",6),t.YNc(9,L,12,0,"ng-template",7),t.YNc(10,U,7,4,"ng-template",8),t.YNc(11,J,3,0,"ng-template",9),t.YNc(12,M,3,0,"ng-template",10),t.qZA()()()()),2&n&&(t.xp6(2),t.Q6J("value",r.messages)("enableService",!1)("closable",!0),t.xp6(4),t.Q6J("value",r.targetList)("rows",10)("rowsPerPageOptions",t.DdM(10,S))("loading",r.loading)("rowHover",!0)("paginator",!0)("globalFilterFields",t.DdM(11,b)))},dependencies:[g.jx,p.Hq,l._Y,l.Fj,l.JJ,l.JL,s.iA,s.D$,s.xl,u.o,d.H,f.Lt,l.sg,l.u,C.V],styles:[".filter-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1rem}.filter-fields[_ngcontent-%COMP%]{display:flex;gap:1rem;flex-wrap:nowrap}.button-container[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;gap:.5rem}@media (max-width: 768px){.filter-fields[_ngcontent-%COMP%]{flex-direction:column;gap:1rem}.button-container[_ngcontent-%COMP%]{flex-direction:column;align-items:flex-start;gap:.5rem}}"]})}return i})(),I=(()=>{class i{static#t=this.\u0275fac=function(n){return new(n||i)};static#e=this.\u0275mod=t.oAB({type:i});static#i=this.\u0275inj=t.cJS({imports:[c.Bz.forChild([{path:"",component:N}]),c.Bz]})}return i})();var O=e(3904),h=e(1312),j=e(2610),v=e(7161),D=e(4055),P=e(6651),B=e(6022),Y=e(7902),H=e(4104),z=e(6804),y=e(5118);let E=(()=>{class i{static#t=this.\u0275fac=function(n){return new(n||i)};static#e=this.\u0275mod=t.oAB({type:i});static#i=this.\u0275inj=t.cJS({providers:[y.xA,y.E7,g.ez],imports:[T.ez,I,h.S,O.D,v.O,l.u5,s.U$,B.Xt,p.hJ,Y.JH,u.j,z.KZ,d.T,D.q4,f.kW,P.q,H.EV,h.S,v.O,l.UX,j.O]})}return i})()}}]);