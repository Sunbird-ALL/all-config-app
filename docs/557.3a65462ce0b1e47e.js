"use strict";(self.webpackChunkcontent_service_ui=self.webpackChunkcontent_service_ui||[]).push([[557],{8557:(dt,b,a)=>{a.r(b),a.d(b,{StoryModule:()=>st});var c=a(6814),r=a(95),g=a(9310),p=a(5219),h=a(8783),t=a(4946),u=a(5118),_=a(7351),y=a(707),v=a(3714),f=a(4480),x=a(3965),C=a(9445);function q(i,d){1&i&&(t.TgZ(0,"small"),t._uU(1),t.qZA()),2&i&&(t.xp6(1),t.Oqu("Author"))}const T=function(i){return{"ng-invalid ng-dirty":i}};function L(i,d){if(1&i){const e=t.EpF();t.TgZ(0,"div")(1,"form",1)(2,"div",2)(3,"p-messages",3),t.NdJ("valueChange",function(n){t.CHM(e);const s=t.oxw();return t.KtG(s.messages=n)}),t.qZA(),t.TgZ(4,"div",4)(5,"label",5),t._uU(6),t.qZA(),t._UZ(7,"input",6),t.qZA(),t.TgZ(8,"div",4)(9,"label",7),t._uU(10),t.qZA(),t._UZ(11,"input",8),t.YNc(12,q,2,1,"small",0),t.qZA(),t.TgZ(13,"div",4)(14,"label",9),t._uU(15),t.qZA(),t._UZ(16,"p-dropdown",10),t.qZA(),t.TgZ(17,"div",4)(18,"label",9),t._uU(19),t.qZA(),t._UZ(20,"p-dropdown",11),t.qZA(),t.TgZ(21,"div",4)(22,"label",12),t._uU(23),t.qZA(),t._UZ(24,"textarea",13),t.qZA()(),t.TgZ(25,"div",14)(26,"button",15),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.addOrEditStory("Add"))}),t.qZA(),t._uU(27,"\xa0 "),t.TgZ(28,"button",16),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.cancel())}),t.qZA()()()()}if(2&i){const e=t.oxw();t.xp6(1),t.Q6J("formGroup",e.addStoryForm),t.xp6(2),t.Q6J("value",e.messages)("enableService",!1)("closable",!0),t.xp6(3),t.hij("","Name"," *"),t.xp6(1),t.s9C("placeholder","Enter Name"),t.xp6(3),t.hij("","Author"," *"),t.xp6(1),t.s9C("placeholder","Enter Author"),t.xp6(1),t.Q6J("ngIf",e.submitted&&e.addStoryForm.controls.author.errors),t.xp6(3),t.hij("","Language"," *"),t.xp6(1),t.s9C("placeholder","Select Language"),t.Q6J("showClear",!0)("options",e.languageList)("ngClass",t.VKq(22,T,e.addStoryForm.controls.language.errors)),t.xp6(3),t.hij("","Category","*"),t.xp6(1),t.s9C("placeholder","Select Category"),t.Q6J("showClear",!0)("options",e.contentTypeList),t.xp6(3),t.hij("","Description"," "),t.xp6(1),t.s9C("placeholder","Enter description"),t.xp6(2),t.s9C("label","Submit"),t.xp6(2),t.s9C("label","Cancel")}}function U(i,d){if(1&i){const e=t.EpF();t.TgZ(0,"div")(1,"form",1)(2,"div",2)(3,"p-messages",3),t.NdJ("valueChange",function(n){t.CHM(e);const s=t.oxw();return t.KtG(s.messages=n)}),t.qZA(),t.TgZ(4,"div",4)(5,"label",5),t._uU(6),t.qZA(),t._UZ(7,"input",6),t.qZA(),t.TgZ(8,"div",4)(9,"label",7),t._uU(10),t.qZA(),t._UZ(11,"input",8),t.qZA(),t.TgZ(12,"div",4)(13,"label",9),t._uU(14),t.qZA(),t._UZ(15,"p-dropdown",10),t.qZA()(),t.TgZ(16,"div",14)(17,"button",15),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.addOrEditStory("Edit"))}),t.qZA(),t._uU(18,"\xa0 "),t.TgZ(19,"button",16),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.cancel())}),t.qZA()()()()}if(2&i){const e=t.oxw();t.xp6(1),t.Q6J("formGroup",e.editStoryForm),t.xp6(2),t.Q6J("value",e.messages)("enableService",!1)("closable",!0),t.xp6(3),t.hij("","Name"," *"),t.xp6(1),t.s9C("placeholder","Enter Name"),t.xp6(3),t.hij("","Author"," *"),t.xp6(1),t.s9C("placeholder","Enter Author"),t.xp6(3),t.hij("","Language"," *"),t.xp6(1),t.s9C("placeholder","Select Language"),t.Q6J("showClear",!0)("options",e.languageList)("ngClass",t.VKq(15,T,e.editStoryForm.controls.language.errors)),t.xp6(2),t.s9C("label","Submit"),t.xp6(2),t.s9C("label","Cancel")}}let S=(()=>{class i{constructor(e,o,n,s,l){this.formBuilder=e,this.ref=o,this.dialogConfig=n,this.contentService=s,this.router=l,this.difficultyLvlList=h.X.difficultyLvlList,this.languageList=h.X.languages,this.contentTypeList=h.X.contentTypeList,this.data=this.dialogConfig.data,this.mode=this.data.mode,this.storyList=this.data.wordAndSentenceData}ngOnInit(){this.initializeAddForm(),"Edit"===this.mode&&this.initialzeEditForm(),this.addStoryForm.patchValue({category:this.contentTypeList[0].value})}initializeAddForm(){this.addStoryForm=this.formBuilder.group({name:["",r.kI.required],author:["",r.kI.required],language:["",r.kI.required],category:["",r.kI.required],description:"",image:"",difficulty:""})}initialzeEditForm(){this.editStoryForm=this.formBuilder.group({name:[this.storyList?.name,r.kI.required],author:[this.storyList?.author,r.kI.required],language:[this.storyList?.language,r.kI.required],image:this.storyList?.image,difficulty:this.storyList?.difficulty,description:this.storyList?.description,category:this.storyList?.category})}cancel(){this.ref.close()}addOrEditStory(e){if("Add"===e){if(this.addStoryForm.invalid)return void(this.messages=[{severity:"error",summary:"Add Required Data"}]);this.contentService.addMoreStory({name:this.addStoryForm.value.name,author:this.addStoryForm.value.author,language:this.addStoryForm.value.language,category:this.addStoryForm.value.category,description:this.addStoryForm.value.description,status:"live"}).subscribe(n=>{"success"===n.status&&this.ref.close(n.data)},n=>{this.messages=[{severity:"error",summary:"error"}]})}else if("Edit"===e){if(this.editStoryForm.invalid)return void(this.messages=[{severity:"error",summary:"Error"}]);this.contentService.editStory({name:this.editStoryForm.value.name,author:this.editStoryForm.value.author,language:this.editStoryForm.value.language,category:this.editStoryForm.value.category,status:"live"},this.storyList._id).subscribe(n=>{n.updated&&this.ref.close(n.updated)},n=>{this.messages=[{severity:"error",summary:"Please fill all fields"}]})}}navigateToSomeRoute(){this.router.navigate(["/content/story/list"])}static#t=this.\u0275fac=function(o){return new(o||i)(t.Y36(r.qu),t.Y36(u.E7),t.Y36(u.S),t.Y36(_._),t.Y36(g.F0))};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-add-or-edit-story"]],decls:2,vars:2,consts:[[4,"ngIf"],[3,"formGroup"],[1,"card","p-fluid"],[3,"value","enableService","closable","valueChange"],[1,"field"],["for","name"],["type","text","name","name","pInputText","","id","name","autofocus","","formControlName","name",3,"placeholder"],["for","author"],["type","text","name","author","pInputText","","id","author","autofocus","","formControlName","author",3,"placeholder"],["for","multiselect"],["formControlName","language","optionLabel","label","appendTo","body","optionValue","value",3,"showClear","options","placeholder","ngClass"],["formControlName","category","optionLabel","label","appendTo","body","optionValue","value",3,"showClear","options","placeholder"],["for","description"],["type","text","name","description","pInputText","","id","description","formControlName","description","rows","3",3,"placeholder"],[1,"p-col-12","p-md-6","p-lg-4","p-xl-3","p-button-container"],["pButton","","pRipple","","icon","pi pi-check",1,"p-button","p-button-success",3,"label","click"],["pButton","","pRipple","","type","button","icon","pi pi-times",1,"p-button","p-button-danger",3,"label","click"]],template:function(o,n){1&o&&(t.YNc(0,L,29,24,"div",0),t.YNc(1,U,20,17,"div",0)),2&o&&(t.Q6J("ngIf","Add"===n.mode),t.xp6(1),t.Q6J("ngIf","Edit"===n.mode))},dependencies:[c.mk,c.O5,r._Y,r.Fj,r.JJ,r.JL,y.Hq,v.o,f.H,x.Lt,r.sg,r.u,C.V],styles:["input.ng-touched.ng-invalid[_ngcontent-%COMP%], textarea.ng-touched.ng-invalid[_ngcontent-%COMP%]{border:1px solid red}small[_ngcontent-%COMP%]{color:red}.p-button-container[_ngcontent-%COMP%]{float:right}#disabled-input[_ngcontent-%COMP%]{background-color:#f0f0f0;opacity:.7;pointer-events:none}"]})}return i})();var I=a(8645);let M=(()=>{class i{constructor(){this.mediaRecorder=null,this.chunks=[],this.audioSubject=new I.x}startRecording(){}stopRecording(){}playAudio(e){new Audio(e).play()}playAudioWithProgress(e){const o=new Audio(e);return o.controls=!1,o.addEventListener("timeupdate",()=>{this.audioSubject.next({type:"timeupdate",currentTime:o.currentTime,duration:o.duration})}),o.addEventListener("ended",()=>{this.audioSubject.next({type:"ended"})}),o.play(),this.audioSubject.asObservable()}static#t=this.\u0275fac=function(o){return new(o||i)};static#e=this.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function w(i,d){1&i&&(t.TgZ(0,"small"),t._uU(1),t.qZA()),2&i&&(t.xp6(1),t.Oqu("contentText"))}const A=function(i){return{"ng-invalid ng-dirty":i}};function E(i,d){if(1&i){const e=t.EpF();t.TgZ(0,"div")(1,"form",1)(2,"div",2)(3,"p-messages",3),t.NdJ("valueChange",function(n){t.CHM(e);const s=t.oxw();return t.KtG(s.messages=n)}),t.qZA(),t.TgZ(4,"div",4)(5,"label",5),t._uU(6),t.qZA(),t._UZ(7,"input",6),t.qZA(),t.TgZ(8,"div",4)(9,"label",7),t._uU(10),t.qZA(),t._UZ(11,"p-dropdown",8),t.qZA(),t.TgZ(12,"div",4)(13,"label",5),t._uU(14),t.qZA(),t._UZ(15,"input",9),t.qZA(),t.TgZ(16,"div",4)(17,"label",10),t._uU(18),t.qZA(),t._UZ(19,"textarea",11),t.YNc(20,w,2,1,"small",0),t.qZA()(),t.TgZ(21,"div",12)(22,"button",13),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.addContent())}),t.qZA(),t._uU(23,"\xa0 "),t.TgZ(24,"button",14),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.cancel())}),t.qZA()()()()}if(2&i){const e=t.oxw();t.xp6(1),t.Q6J("formGroup",e.ContentForm),t.xp6(2),t.Q6J("value",e.messages)("enableService",!1)("closable",!0),t.xp6(3),t.hij("","Collection Id"," *"),t.xp6(1),t.s9C("placeholder","Enter collectionId"),t.xp6(3),t.Oqu("Content Type"),t.xp6(1),t.s9C("placeholder","Select Content Type"),t.Q6J("showClear",!0)("options",e.contentTypeList)("ngClass",t.VKq(18,A,e.ContentForm.controls.contentType.errors)),t.xp6(3),t.hij("","Index"," *"),t.xp6(1),t.s9C("placeholder","Enter Index"),t.xp6(3),t.hij("","Content Text"," *"),t.xp6(1),t.s9C("placeholder","Enter contentText"),t.xp6(1),t.Q6J("ngIf",e.submitted&&e.ContentForm.controls.contentText.errors),t.xp6(2),t.s9C("label","Submit"),t.xp6(2),t.s9C("label","Cancel")}}function J(i,d){1&i&&(t.TgZ(0,"small"),t._uU(1),t.qZA()),2&i&&(t.xp6(1),t.Oqu("contentText"))}function O(i,d){if(1&i){const e=t.EpF();t.TgZ(0,"div")(1,"form",1)(2,"div",2)(3,"p-messages",3),t.NdJ("valueChange",function(n){t.CHM(e);const s=t.oxw();return t.KtG(s.messages=n)}),t.qZA(),t.TgZ(4,"div",4)(5,"label",5),t._uU(6),t.qZA(),t._UZ(7,"input",6),t.qZA(),t.TgZ(8,"div",4)(9,"label",7),t._uU(10),t.qZA(),t._UZ(11,"p-dropdown",8),t.qZA(),t.TgZ(12,"div",4)(13,"label",10),t._uU(14),t.qZA(),t._UZ(15,"textarea",11),t.YNc(16,J,2,1,"small",0),t.qZA()(),t.TgZ(17,"div",12)(18,"button",13),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.editContent())}),t.qZA(),t._uU(19,"\xa0 "),t.TgZ(20,"button",14),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.cancel())}),t.qZA()()()()}if(2&i){const e=t.oxw();t.xp6(1),t.Q6J("formGroup",e.editContentForm),t.xp6(2),t.Q6J("value",e.messages)("enableService",!1)("closable",!0),t.xp6(3),t.hij("","Collection Id"," *"),t.xp6(1),t.s9C("placeholder","Enter collectionId"),t.xp6(3),t.Oqu("Content Type"),t.xp6(1),t.s9C("placeholder","Select Content Type"),t.Q6J("showClear",!0)("options",e.contentTypeList)("ngClass",t.VKq(16,A,e.editContentForm.controls.contentType.errors)),t.xp6(3),t.hij("","Content Text"," *"),t.xp6(1),t.s9C("placeholder","Enter contentText"),t.xp6(1),t.Q6J("ngIf",e.submitted&&e.editContentForm.controls.contentText.errors),t.xp6(2),t.s9C("label","Submit"),t.xp6(2),t.s9C("label","Cancel")}}let D=(()=>{class i{constructor(e,o,n,s,l,at,lt){this.formBuilder=e,this.ref=o,this.dialogConfig=n,this.contentService=s,this.audioService=l,this.messageService=at,this.router=lt,this.contentTypeList=h.X.contentTypeList,this.isRecording=!1,this.isPlaying=!1,this.progressValue=0,this.currentTime="0:00",this.duration="0:00",this.data=this.dialogConfig.data,this.mode=this.data.mode,this.storyDetailData=this.data.wordAndSentenceData}ngOnInit(){"Edit"===this.data.mode&&(this.initializeEditForm(),this.editContentForm.patchValue({contentType:this.storyDetailData.category})),this.initializeAddForm(),this.ContentForm.patchValue({contentType:this.contentTypeList[0].value})}initializeEditForm(){this.editContentForm=this.formBuilder.group({collectionId:[this.storyDetailData?.collectionId,r.kI.required],contentType:[this.storyDetailData?.category,r.kI.required],contentText:[this.storyDetailData?.contentSourceData[0].text||"",r.kI.required],contentAudio:[""]})}initializeAddForm(){this.ContentForm=this.formBuilder.group({collectionId:[this.storyDetailData?.collectionId,r.kI.required],contentType:["",r.kI.required],contentText:["",r.kI.required],contentAudio:[""]})}cancel(){this.ref.close()}navigateToSomeRoute(){this.router.navigate(["/content/story/list"])}editContent(){this.editContentForm.invalid?this.messages=[{severity:"error",summary:"Add Required Data"}]:this.contentService.editMoreWords({publisher:this.storyDetailData.data.publisher,name:this.storyDetailData.data.name,contentType:"Sentence",image:" ",status:1,collectionId:this.editContentForm.value.collectionId,data:[{[this.storyDetailData.language]:{text:this.editContentForm.value.contentText}}]},this.storyDetailData.data._id).subscribe(o=>{o.updated&&this.ref.close(o.updated)},o=>{this.messages=[{severity:"error",summary:"Please fill all fields"}]})}addContent(){this.ContentForm.invalid?this.messages=[{severity:"error",summary:"Add Required Data"}]:this.contentService.addMoreWords({collectionId:this.ContentForm.value.collectionId,name:this.storyDetailData.name,contentType:this.ContentForm.value.contentType,imageUrl:"",status:this.storyDetailData.status,publisher:this.storyDetailData.author,language:this.storyDetailData.language,contentSourceData:[{language:this.storyDetailData.language,audioUrl:"",text:this.ContentForm.value.contentText}],contentIndex:1,tags:[]}).subscribe(o=>{"success"===o.status&&this.ref.close(o.data)},o=>{this.messages=[{severity:"error",summary:""}]})}startRecording(){this.audioService.startRecording()}stopRecording(){this.audioService.stopRecording()}get recordButtonLabel(){return this.isRecording?"Stop Recording":"Record"}playRecorded(){}playUploaded(){}playAudio(e){this.audioSubscription&&this.audioSubscription.unsubscribe(),this.audioSubscription=this.audioService.playAudioWithProgress(e).subscribe(o=>{"timeupdate"===o.type?(this.progressValue=o.currentTime/o.duration*100,this.currentTime=this.formatTime(o.currentTime),this.duration=this.formatTime(o.duration)):"ended"===o.type&&(this.isPlaying=!1,this.progressValue=0,this.currentTime="0:00")},o=>{console.error("Error playing audio:",o)}),this.isPlaying=!0}ngOnDestroy(){this.audioSubscription&&this.audioSubscription.unsubscribe()}formatTime(e){const o=Math.floor(e/60),n=Math.floor(e%60);return`${o}:${n<10?"0":""}${n}`}handleFileInput(e){const o=e.files&&e.files[0];if(o){const n=o;if(n){const s=new FileReader;s.onload=l=>{this.uploadedImage=l.target.result},s.readAsDataURL(n),this.messageService.add({severity:"info",summary:"File Uploaded",detail:`${n.name} is uploaded`})}}}onAudioUpload(e){const o=e.files&&e.files[0];o&&console.log("Uploaded audio file:",o)}static#t=this.\u0275fac=function(o){return new(o||i)(t.Y36(r.qu),t.Y36(u.E7),t.Y36(u.S),t.Y36(_._),t.Y36(M),t.Y36(p.ez),t.Y36(g.F0))};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-add-sentence-for-story"]],features:[t._Bn([p.ez])],decls:2,vars:2,consts:[[4,"ngIf"],[3,"formGroup"],[1,"card","p-fluid"],[3,"value","enableService","closable","valueChange"],[1,"field"],["for","contentType"],["type","text","name","collectionId","pInputText","","id","collectionId","autofocus","","formControlName","collectionId","readonly","",3,"placeholder"],["for","multiselect"],["formControlName","contentType","optionLabel","label","appendTo","body","optionValue","value",3,"showClear","options","placeholder","ngClass"],["type","number","name","index","pInputText","","id","index","autofocus","","formControlName","index","min","0",3,"placeholder"],["for","contentText"],["type","text","name","contentText","pInputText","","id","contentText","autofocus","","formControlName","contentText","rows","2",3,"placeholder"],[1,"p-col-12","p-md-6","p-lg-4","p-xl-3","p-button-container"],["pButton","","pRipple","","icon","pi pi-check",1,"p-button","p-button-success",3,"label","click"],["pButton","","pRipple","","type","button","icon","pi pi-times",1,"p-button","p-button-danger",3,"label","click"]],template:function(o,n){1&o&&(t.YNc(0,E,25,20,"div",0),t.YNc(1,O,21,18,"div",0)),2&o&&(t.Q6J("ngIf","Add_Content"===n.mode),t.xp6(1),t.Q6J("ngIf","Edit"===n.mode))},dependencies:[c.mk,c.O5,r._Y,r.Fj,r.wV,r.JJ,r.JL,r.qQ,y.Hq,v.o,f.H,x.Lt,r.sg,r.u,C.V],styles:[".button-row[_ngcontent-%COMP%]{display:flex;gap:10px}button[_ngcontent-%COMP%], .upload-button[_ngcontent-%COMP%]{color:#fff;border:none;cursor:pointer}.upload-button[_ngcontent-%COMP%]   .ui-button-text[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}button[_ngcontent-%COMP%]:hover, .upload-button[_ngcontent-%COMP%]:hover{background-color:#005ba3}button[_ngcontent-%COMP%]:active, .upload-button[_ngcontent-%COMP%]:active{background-color:#036}.horizontal-radio-group[_ngcontent-%COMP%]{display:flex;flex-direction:row}.radio-option[_ngcontent-%COMP%]{margin-right:10px}.radio-option[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]{width:20px}  .p-fileupload-choose{background-color:#64748b}  .p-fileupload-choose span{color:#fff}"]})}return i})();var m=a(6361),Z=a(3904),F=a(7680);const N=["dt"];function k(i,d){if(1&i){const e=t.EpF();t.TgZ(0,"div",12)(1,"button",13),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.clear(n.dt1))}),t.qZA(),t.TgZ(2,"div",14)(3,"button",15),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.addMoreStory())}),t.qZA()()()}2&i&&(t.xp6(3),t.s9C("label","Add Stories"))}function j(i,d){1&i&&(t.TgZ(0,"tr")(1,"th",16)(2,"div",17),t._uU(3," Title "),t._UZ(4,"p-columnFilter",18),t.qZA()(),t.TgZ(5,"th",16)(6,"div",17),t._uU(7," Author "),t._UZ(8,"p-columnFilter",19),t.qZA()(),t.TgZ(9,"th",16)(10,"div",17),t._uU(11," Tags "),t._UZ(12,"p-columnFilter",20),t.qZA()(),t.TgZ(13,"th",21)(14,"div",17),t._uU(15," Language "),t._UZ(16,"p-columnFilter",22),t.qZA()(),t.TgZ(17,"th",23)(18,"div",17),t._uU(19," Created At "),t._UZ(20,"p-sortIcon",24)(21,"p-columnFilter",25),t.qZA()(),t.TgZ(22,"th",26)(23,"div",17),t._uU(24," Updated At "),t._UZ(25,"p-sortIcon",24)(26,"p-columnFilter",27),t.qZA()(),t.TgZ(27,"th",16)(28,"div",17),t._uU(29," Collection ID "),t._UZ(30,"p-columnFilter",28),t.qZA()(),t.TgZ(31,"th",29)(32,"div",17),t._uU(33," Actions "),t.qZA()()())}const Y=function(i){return{"disabled-row":i}};function P(i,d){if(1&i){const e=t.EpF();t.TgZ(0,"tr",30)(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.ALo(11,"date"),t.qZA(),t.TgZ(12,"td"),t._uU(13),t.ALo(14,"date"),t.qZA(),t.TgZ(15,"td",31),t.NdJ("click",function(){const s=t.CHM(e).$implicit,l=t.oxw();return t.KtG(l.openWordList(s.collectionId))}),t._uU(16),t.qZA(),t.TgZ(17,"td",32)(18,"button",33),t.NdJ("click",function(){const s=t.CHM(e).$implicit,l=t.oxw();return t.KtG(l.addWord(s))}),t.qZA(),t.TgZ(19,"button",34),t.NdJ("click",function(){const s=t.CHM(e).$implicit,l=t.oxw();return t.KtG(l.editStory(s))}),t.qZA(),t.TgZ(20,"button",35),t.NdJ("click",function(){const s=t.CHM(e).$implicit,l=t.oxw();return t.KtG(l.deleteProduct(s))}),t.qZA()()()}if(2&i){const e=d.$implicit,o=t.oxw();t.Q6J("pEditableRow",o.tutorial)("ngClass",t.VKq(15,Y,e.deleted)),t.xp6(2),t.hij(" ",e.name," "),t.xp6(2),t.hij(" ",e.author," "),t.xp6(2),t.hij(" ",e.tags," "),t.xp6(2),t.hij(" ",e.language," "),t.xp6(2),t.hij(" ",t.xi3(11,9,e.createdAt,"dd/MM/yyyy")," "),t.xp6(3),t.hij(" ",t.xi3(14,12,e.updatedAt,"dd/MM/yyyy")," "),t.xp6(3),t.hij(" ",e.collectionId," ")}}function R(i,d){1&i&&(t.TgZ(0,"tr")(1,"td",36),t._uU(2,"No Stories found."),t.qZA()())}function Q(i,d){1&i&&(t.TgZ(0,"tr")(1,"td",36),t._uU(2," Loading Stories ... Please wait. "),t.qZA()())}function H(i,d){1&i&&(t.TgZ(0,"div",37)(1,"div",38),t._UZ(2,"p-progressSpinner"),t.qZA()())}const G=function(){return[10,100,200,300]},K=function(){return["name","country.name","representative.name","status"]},B=function(){return{width:"450px"}};let V=(()=>{class i{constructor(e,o,n,s,l){this.contentService=e,this.ref=o,this.dialogService=n,this.confirmationService=s,this.router=l,this.storyList=[],this.loading=!1,this.messages=[]}ngOnInit(){this.getStoriesList()}getStoriesList(){this.loading=!0,this.contentService.getStoriesList().subscribe({next:e=>{"success"===e.status&&(this.storyList=e.data,this.loading=!1)},error:e=>{this.loading=!1,this.messages=[],this.messages=[{severity:"error",detail:e?.error?.params?.errmsg}]}})}addMoreStory(){this.ref=this.dialogService.open(S,{header:"Add Stories",data:{mode:"Add"},width:"40%",contentStyle:{overflow:"auto"}}),this.ref.onClose.subscribe(e=>{e&&(this.storyList.push(e),this.messages=[],this.messages=[{severity:"info",summary:"Created",detail:"Story is Created"}],this.dataTable.reset(),this.dataTable.value=this.storyList)})}addWord(e){this.ref=this.dialogService.open(D,{header:"Add Content",data:{mode:"Add_Content",wordAndSentenceData:e},width:"40%",contentStyle:{overflow:"auto"}}),this.ref.onClose.subscribe(o=>{o&&(this.storyList.push(o),this.messages=[],this.messages=[{severity:"info",summary:"Created",detail:"Content is Created"}],this.dataTable.reset(),this.dataTable.value=this.storyList)})}editStory(e){this.ref=this.dialogService.open(S,{header:"Edit Story",data:{mode:"Edit",wordAndSentenceData:e},width:"40%",contentStyle:{overflow:"auto"}}),this.ref.onClose.subscribe(o=>{if(o){const n=this.storyList.findIndex(s=>s._id===o._id);-1!==n&&(this.storyList[n]=o),this.messages=[],this.messages=[{severity:"info",summary:"Updated",detail:"Story is Updated"}],this.dataTable.reset(),this.dataTable.value=this.storyList}})}deleteProduct(e){this.confirmationService.confirm({message:"Are you sure that you want to proceed?",header:"Confirmation",icon:"pi pi-exclamation-triangle",accept:()=>{this.contentService.deleteCollection(e?._id).subscribe(o=>{e.deleted=!0}),this.messages=[],this.messages=[{severity:"info",summary:"Confirmed",detail:"You have accepted"}]},reject:()=>{this.messages=[],this.messages=[{severity:"info",summary:"Rejected",detail:"You have rejected"}]}})}clear(e){e.clear()}openWordList(e){this.router.navigate(["/content/word-sentence/list"],{queryParams:{collectionId:e}})}static#t=this.\u0275fac=function(o){return new(o||i)(t.Y36(_._),t.Y36(u.E7),t.Y36(u.xA),t.Y36(p.YP),t.Y36(g.F0))};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["ng-component"]],viewQuery:function(o,n){if(1&o&&t.Gf(N,5),2&o){let s;t.iGM(s=t.CRH())&&(n.dataTable=s.first)}},features:[t._Bn([p.ez,p.YP])],decls:15,vars:16,consts:[[1,"grid"],[1,"col-12"],[3,"value","enableService","closable","valueChange"],[1,"card"],["dataKey","id","styleClass","p-datatable-gridlines","responsiveLayout","scroll",3,"value","rows","rowsPerPageOptions","loading","rowHover","paginator","globalFilterFields"],["dt",""],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],["pTemplate","emptymessage"],["pTemplate","loadingbody"],["class","loading-overlay",4,"ngIf"],[1,"flex","justify-content-between","flex-column","sm:flex-row"],["pButton","","label","Clear","icon","pi pi-filter-slash",1,"p-button-outlined","mb-2",3,"click"],[1,"my-2"],["pButton","","pRipple","","icon","pi pi-plus",1,"p-button-success","mr-2",3,"label","click"],["id","",2,"min-width","12rem"],[1,"flex","justify-content-between","align-items-center"],["type","text","field","name","display","menu","matchMode","contains","placeholder","Search by name"],["type","text","field","author","display","menu","matchMode","contains","placeholder","Search by Author"],["type","text","field","tags","display","menu","matchMode","contains","placeholder","Search by Tags"],["id","",2,"min-width","14rem"],["type","text","field","language","display","menu","matchMode","contains","placeholder","Search by Language"],["id","","pSortableColumn","createdAt",2,"min-width","12rem"],["field","updatedAt"],["type","date","field","createdAt","display","menu","placeholder","mm/dd/yyyy",1,"ml-auto"],["id","","pSortableColumn","updatedAt",2,"min-width","12rem"],["type","date","field","updatedAt","display","menu","placeholder","mm/dd/yyyy",1,"ml-auto"],["type","text","field","collectionId","display","menu","matchMode","contains"],["id","",2,"min-width","13rem"],[3,"pEditableRow","ngClass"],[2,"cursor","pointer","text-decoration","underline","color","blue",3,"click"],[2,"text-align","center"],["pButton","","pRipple","","icon","pi pi-plus",1,"p-button-rounded","p-button-secondary","mr-2",3,"click"],["pButton","","pRipple","","icon","pi pi-pencil",1,"p-button-rounded","p-button-success","mr-2",3,"click"],["pButton","","pRipple","","icon","pi pi-trash",1,"p-button-rounded","p-button-danger","mr-2",3,"click"],["colspan","8"],[1,"loading-overlay"],[1,"spinner-message-container"]],template:function(o,n){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"p-messages",2),t.NdJ("valueChange",function(l){return n.messages=l}),t.qZA(),t.TgZ(3,"div",3)(4,"h5"),t._uU(5,"Stories List"),t.qZA(),t.TgZ(6,"p-table",4,5),t.YNc(8,k,4,1,"ng-template",6),t.YNc(9,j,34,0,"ng-template",7),t.YNc(10,P,21,17,"ng-template",8),t.YNc(11,R,3,0,"ng-template",9),t.YNc(12,Q,3,0,"ng-template",10),t.qZA()()(),t.YNc(13,H,3,0,"div",11),t.qZA(),t._UZ(14,"p-confirmDialog")),2&o&&(t.xp6(2),t.Q6J("value",n.messages)("enableService",!1)("closable",!0),t.xp6(4),t.Q6J("value",n.storyList)("rows",10)("rowsPerPageOptions",t.DdM(13,G))("loading",n.loading)("rowHover",!0)("paginator",!0)("globalFilterFields",t.DdM(14,K)),t.xp6(7),t.Q6J("ngIf",n.loading),t.xp6(1),t.Akn(t.DdM(15,B)))},dependencies:[c.mk,c.O5,m.iA,p.jx,m.lQ,m.fz,m.D$,m.xl,y.Hq,f.H,Z.Q,C.V,F.G,c.uU],styles:[".disabled-row[_ngcontent-%COMP%]{opacity:.5;pointer-events:none}"]})}return i})(),z=(()=>{class i{static#t=this.\u0275fac=function(o){return new(o||i)};static#e=this.\u0275mod=t.oAB({type:i});static#o=this.\u0275inj=t.cJS({imports:[g.Bz.forChild([{path:"",component:V}]),g.Bz]})}return i})();var $=a(6804),W=a(4055),X=a(6651),tt=a(4104),et=a(7902),ot=a(6022),it=a(7161),nt=a(1312),rt=a(2610);let st=(()=>{class i{static#t=this.\u0275fac=function(o){return new(o||i)};static#e=this.\u0275mod=t.oAB({type:i});static#o=this.\u0275inj=t.cJS({providers:[u.xA,u.E7,p.ez],imports:[c.ez,r.u5,m.U$,ot.Xt,y.hJ,et.JH,v.j,$.KZ,f.T,W.q4,x.kW,X.q,tt.EV,nt.S,Z.D,it.O,r.UX,z,rt.O,F.L]})}return i})()}}]);