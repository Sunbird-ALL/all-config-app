"use strict";(self.webpackChunkcontent_service_ui=self.webpackChunkcontent_service_ui||[]).push([[351],{5118:(M,x,c)=>{c.d(x,{E7:()=>b,S:()=>v,xA:()=>U});var e=c(4946),l=c(6825),g=c(6814),w=c(5219),a=c(2076),R=c(7778),D=c(9212),u=c(8377),h=c(2332),_=c(8645);const L=["mask"],I=["content"],T=["titlebar"];function O(o,s){if(1&o){const t=e.EpF();e.TgZ(0,"div",11),e.NdJ("mousedown",function(i){e.CHM(t);const r=e.oxw(2);return e.KtG(r.initResize(i))}),e.qZA()}}function P(o,s){1&o&&e._UZ(0,"WindowMaximizeIcon",21),2&o&&e.Q6J("styleClass","p-dialog-header-maximize-icon")}function Y(o,s){1&o&&e._UZ(0,"WindowMinimizeIcon",21),2&o&&e.Q6J("styleClass","p-dialog-header-maximize-icon")}const A=function(){return{"p-dialog-header-icon p-dialog-header-maximize p-link":!0}};function K(o,s){if(1&o){const t=e.EpF();e.TgZ(0,"button",18),e.NdJ("click",function(){e.CHM(t);const i=e.oxw(3);return e.KtG(i.maximize())})("keydown.enter",function(){e.CHM(t);const i=e.oxw(3);return e.KtG(i.maximize())}),e._UZ(1,"span",19),e.YNc(2,P,1,1,"WindowMaximizeIcon",20),e.YNc(3,Y,1,1,"WindowMinimizeIcon",20),e.qZA()}if(2&o){const t=e.oxw(3);e.Q6J("ngClass",e.DdM(4,A)),e.xp6(1),e.Q6J("ngClass",t.maximized?t.minimizeIcon:t.maximizeIcon),e.xp6(1),e.Q6J("ngIf",!t.maximized&&!t.maximizeIcon),e.xp6(1),e.Q6J("ngIf",t.maximized&&!t.minimizeIcon)}}function F(o,s){if(1&o){const t=e.EpF();e.TgZ(0,"button",22),e.NdJ("click",function(){e.CHM(t);const i=e.oxw(3);return e.KtG(i.hide())})("keydown.enter",function(){e.CHM(t);const i=e.oxw(3);return e.KtG(i.hide())}),e._UZ(1,"TimesIcon",21),e.qZA()}2&o&&(e.Q6J("ngClass","p-dialog-header-icon p-dialog-header-maximize p-link"),e.xp6(1),e.Q6J("styleClass","p-dialog-header-close-icon"))}function S(o,s){if(1&o){const t=e.EpF();e.TgZ(0,"div",12,13),e.NdJ("mousedown",function(i){e.CHM(t);const r=e.oxw(2);return e.KtG(r.initDrag(i))}),e.TgZ(2,"span",14),e._uU(3),e.qZA(),e.TgZ(4,"div",15),e.YNc(5,K,4,5,"button",16),e.YNc(6,F,2,2,"button",17),e.qZA()()}if(2&o){const t=e.oxw(2);e.xp6(3),e.Oqu(t.config.header),e.xp6(2),e.Q6J("ngIf",t.config.maximizable),e.xp6(1),e.Q6J("ngIf",!1!==t.config.closable)}}function W(o,s){}function Z(o,s){if(1&o&&(e.TgZ(0,"div",23),e._uU(1),e.qZA()),2&o){const t=e.oxw(2);e.xp6(1),e.hij(" ",t.config.footer," ")}}const B=function(o,s,t,n){return{"p-dialog p-dynamic-dialog p-component":!0,"p-dialog-rtl":o,"p-dialog-resizable":s,"p-dialog-draggable":t,"p-dialog-maximized":n}},G=function(o,s){return{transform:o,transition:s}},N=function(o){return{value:"visible",params:o}};function V(o,s){if(1&o){const t=e.EpF();e.TgZ(0,"div",3,4),e.NdJ("@animation.start",function(i){e.CHM(t);const r=e.oxw();return e.KtG(r.onAnimationStart(i))})("@animation.done",function(i){e.CHM(t);const r=e.oxw();return e.KtG(r.onAnimationEnd(i))}),e.YNc(2,O,1,0,"div",5),e.YNc(3,S,7,3,"div",6),e.TgZ(4,"div",7,8),e.YNc(6,W,0,0,"ng-template",9),e.qZA(),e.YNc(7,Z,2,1,"div",10),e.qZA()}if(2&o){const t=e.oxw();e.Tol(t.config.styleClass),e.Udp("width",t.config.width)("height",t.config.height),e.Q6J("ngClass",e.l5B(13,B,t.config.rtl,t.config.resizable,t.config.draggable,t.maximized))("ngStyle",t.config.style)("@animation",e.VKq(21,N,e.WLB(18,G,t.transformOptions,t.config.transitionOptions||"150ms cubic-bezier(0, 0, 0.2, 1)"))),e.xp6(2),e.Q6J("ngIf",t.config.resizable),e.xp6(1),e.Q6J("ngIf",!1!==t.config.showHeader),e.xp6(1),e.Q6J("ngStyle",t.config.contentStyle),e.xp6(3),e.Q6J("ngIf",t.config.footer)}}const X=function(o,s,t,n,i,r,m,f,d){return{"p-dialog-mask":!0,"p-component-overlay p-component-overlay-enter p-dialog-mask-scrollblocker":o,"p-dialog-left":s,"p-dialog-right":t,"p-dialog-top":n,"p-dialog-bottom":i,"p-dialog-top-left":r,"p-dialog-top-right":m,"p-dialog-bottom-left":f,"p-dialog-bottom-right":d}};let z=(()=>{class o{viewContainerRef;constructor(t){this.viewContainerRef=t}static \u0275fac=function(n){return new(n||o)(e.Y36(e.s_b))};static \u0275dir=e.lG2({type:o,selectors:[["","pDynamicDialogContent",""]],hostAttrs:[1,"p-element"]})}return o})();class v{data;header;ariaLabelledBy;footer;width;height;closeOnEscape;baseZIndex;autoZIndex;dismissableMask;rtl;style;contentStyle;styleClass;transitionOptions;closable;showHeader;modal;maskStyleClass;resizable;draggable;keepInViewport;minX;minY;maximizable;maximizeIcon;minimizeIcon;position}class b{constructor(){}close(s){this._onClose.next(s)}destroy(){this._onDestroy.next(null)}dragStart(s){this._onDragStart.next(s)}dragEnd(s){this._onDragEnd.next(s)}resizeInit(s){this._onResizeInit.next(s)}resizeEnd(s){this._onResizeEnd.next(s)}maximize(s){this._onMaximize.next(s)}_onClose=new _.x;onClose=this._onClose.asObservable();_onDestroy=new _.x;onDestroy=this._onDestroy.asObservable();_onDragStart=new _.x;onDragStart=this._onDragStart.asObservable();_onDragEnd=new _.x;onDragEnd=this._onDragEnd.asObservable();_onResizeInit=new _.x;onResizeInit=this._onResizeInit.asObservable();_onResizeEnd=new _.x;onResizeEnd=this._onResizeEnd.asObservable();_onMaximize=new _.x;onMaximize=this._onMaximize.asObservable()}const j=(0,l.oQ)([(0,l.oB)({transform:"{{transform}}",opacity:0}),(0,l.jt)("{{transition}}",(0,l.oB)({transform:"none",opacity:1}))]),J=(0,l.oQ)([(0,l.jt)("{{transition}}",(0,l.oB)({transform:"{{transform}}",opacity:0}))]);let H=(()=>{class o{document;platformId;componentFactoryResolver;cd;renderer;config;dialogRef;zone;primeNGConfig;parentDialog;visible=!0;componentRef;mask;resizing;dragging;maximized;_style={};originalStyle;lastPageX;lastPageY;insertionPoint;maskViewChild;contentViewChild;headerViewChild;childComponentType;container;wrapper;documentKeydownListener;documentEscapeListener;maskClickListener;transformOptions="scale(0.7)";documentResizeListener;documentResizeEndListener;documentDragListener;documentDragEndListener;get minX(){return this.config.minX?this.config.minX:0}get minY(){return this.config.minY?this.config.minY:0}get keepInViewport(){return this.config.keepInViewport}get maximizable(){return this.config.maximizable}get maximizeIcon(){return this.config.maximizeIcon}get minimizeIcon(){return this.config.minimizeIcon}get style(){return this._style}get position(){return this.config.position}set style(t){t&&(this._style={...t},this.originalStyle=t)}get parent(){const t=Array.from(this.document.getElementsByClassName("p-dialog"));if(t.length>1)return t.pop()}constructor(t,n,i,r,m,f,d,p,y,C){this.document=t,this.platformId=n,this.componentFactoryResolver=i,this.cd=r,this.renderer=m,this.config=f,this.dialogRef=d,this.zone=p,this.primeNGConfig=y,this.parentDialog=C}ngAfterViewInit(){this.loadChildComponent(this.childComponentType),this.cd.detectChanges()}loadChildComponent(t){let n=this.componentFactoryResolver.resolveComponentFactory(t),i=this.insertionPoint?.viewContainerRef;i?.clear(),this.componentRef=i?.createComponent(n)}moveOnTop(){!1!==this.config.autoZIndex&&(h.P9.set("modal",this.container,(this.config.baseZIndex||0)+this.primeNGConfig.zIndex.modal),this.wrapper.style.zIndex=String(parseInt(this.container.style.zIndex,10)-1))}onAnimationStart(t){switch(t.toState){case"visible":this.container=t.element,this.wrapper=this.container.parentElement,this.moveOnTop(),this.parent&&this.unbindGlobalListeners(),this.bindGlobalListeners(),!1!==this.config.modal&&this.enableModality(),this.focus();break;case"void":this.wrapper&&!1!==this.config.modal&&a.p.addClass(this.wrapper,"p-component-overlay-leave")}}onAnimationEnd(t){"void"===t.toState&&(this.onContainerDestroy(),this.dialogRef.destroy())}onContainerDestroy(){this.unbindGlobalListeners(),this.container&&!1!==this.config.autoZIndex&&h.P9.clear(this.container),!1!==this.config.modal&&this.disableModality(),this.container=null}close(){this.visible=!1,this.cd.markForCheck()}hide(){this.dialogRef&&this.dialogRef.close()}enableModality(){!1!==this.config.closable&&this.config.dismissableMask&&(this.maskClickListener=this.renderer.listen(this.wrapper,"mousedown",t=>{this.wrapper&&this.wrapper.isSameNode(t.target)&&this.hide()})),!1!==this.config.modal&&a.p.addClass(this.document.body,"p-overflow-hidden")}disableModality(){this.wrapper&&(this.config.dismissableMask&&this.unbindMaskClickListener(),!1!==this.config.modal&&a.p.removeClass(this.document.body,"p-overflow-hidden"),this.cd.destroyed||this.cd.detectChanges())}onKeydown(t){if(9===t.which){t.preventDefault();let n=a.p.getFocusableElements(this.container);if(n&&n.length>0)if(n[0].ownerDocument.activeElement){let i=n.indexOf(n[0].ownerDocument.activeElement);t.shiftKey?-1==i||0===i?n[n.length-1].focus():n[i-1].focus():-1==i||i===n.length-1?n[0].focus():n[i+1].focus()}else n[0].focus()}}focus(){const t=a.p.getFocusableElements(this.container);t&&t.length>0&&this.zone.runOutsideAngular(()=>{setTimeout(()=>t[0].focus(),5)})}maximize(){this.maximized=!this.maximized,this.maximized?a.p.addClass(this.document.body,"p-overflow-hidden"):a.p.removeClass(this.document.body,"p-overflow-hidden"),this.dialogRef.maximize({maximized:this.maximized})}initResize(t){this.config.resizable&&(this.documentResizeListener||this.bindDocumentResizeListeners(),this.resizing=!0,this.lastPageX=t.pageX,this.lastPageY=t.pageY,a.p.addClass(this.document.body,"p-unselectable-text"),this.dialogRef.resizeInit(t))}onResize(t){if(this.resizing){let n=t.pageX-this.lastPageX,i=t.pageY-this.lastPageY,r=a.p.getOuterWidth(this.container),m=a.p.getOuterHeight(this.container),f=a.p.getOuterHeight(this.contentViewChild.nativeElement),d=r+n,p=m+i,y=this.container.style.minWidth,C=this.container.style.minHeight,E=this.container.getBoundingClientRect(),k=a.p.getViewport();(!parseInt(this.container.style.top)||!parseInt(this.container.style.left))&&(d+=n,p+=i),(!y||d>parseInt(y))&&E.left+d<k.width&&(this._style.width=d+"px",this.container.style.width=this._style.width),(!C||p>parseInt(C))&&E.top+p<k.height&&(this.contentViewChild.nativeElement.style.height=f+p-m+"px",this._style.height&&(this._style.height=p+"px",this.container.style.height=this._style.height)),this.lastPageX=t.pageX,this.lastPageY=t.pageY}}resizeEnd(t){this.resizing&&(this.resizing=!1,a.p.removeClass(this.document.body,"p-unselectable-text"),this.dialogRef.resizeEnd(t))}initDrag(t){a.p.hasClass(t.target,"p-dialog-header-icon")||a.p.hasClass(t.target.parentElement,"p-dialog-header-icon")||this.config.draggable&&(this.dragging=!0,this.lastPageX=t.pageX,this.lastPageY=t.pageY,this.container.style.margin="0",a.p.addClass(this.document.body,"p-unselectable-text"),this.dialogRef.dragStart(t))}onDrag(t){if(this.dragging){let n=a.p.getOuterWidth(this.container),i=a.p.getOuterHeight(this.container),r=t.pageX-this.lastPageX,m=t.pageY-this.lastPageY,f=this.container.getBoundingClientRect(),d=f.left+r,p=f.top+m,y=a.p.getViewport();this.container.style.position="fixed",this.keepInViewport?(d>=this.minX&&d+n<y.width&&(this._style.left=d+"px",this.lastPageX=t.pageX,this.container.style.left=d+"px"),p>=this.minY&&p+i<y.height&&(this._style.top=p+"px",this.lastPageY=t.pageY,this.container.style.top=p+"px")):(this.lastPageX=t.pageX,this.container.style.left=d+"px",this.lastPageY=t.pageY,this.container.style.top=p+"px")}}endDrag(t){this.dragging&&(this.dragging=!1,a.p.removeClass(this.document.body,"p-unselectable-text"),this.dialogRef.dragEnd(t),this.cd.detectChanges())}resetPosition(){this.container.style.position="",this.container.style.left="",this.container.style.top="",this.container.style.margin=""}bindDocumentDragListener(){(0,g.NF)(this.platformId)&&this.zone.runOutsideAngular(()=>{this.documentDragListener=this.renderer.listen(this.document,"mousemove",this.onDrag.bind(this))})}bindDocumentDragEndListener(){(0,g.NF)(this.platformId)&&this.zone.runOutsideAngular(()=>{this.documentDragEndListener=this.renderer.listen(this.document,"mouseup",this.endDrag.bind(this))})}unbindDocumentDragEndListener(){this.documentDragEndListener&&(this.documentDragEndListener(),this.documentDragListener=null)}unbindDocumentDragListener(){this.documentDragListener&&(this.documentDragListener(),this.documentDragListener=null)}bindDocumentResizeListeners(){(0,g.NF)(this.platformId)&&this.zone.runOutsideAngular(()=>{this.documentResizeListener=this.renderer.listen(this.document,"mousemove",this.onResize.bind(this)),this.documentResizeEndListener=this.renderer.listen(this.document,"mouseup",this.resizeEnd.bind(this))})}unbindDocumentResizeListeners(){this.documentResizeListener&&this.documentResizeEndListener&&(this.documentResizeListener(),this.documentResizeEndListener(),this.documentResizeListener=null,this.documentResizeEndListener=null)}bindGlobalListeners(){this.parentDialog&&this.parentDialog.unbindDocumentKeydownListener(),this.bindDocumentKeydownListener(),!1!==this.config.closeOnEscape&&!1!==this.config.closable&&this.bindDocumentEscapeListener(),this.config.resizable&&this.bindDocumentResizeListeners(),this.config.draggable&&(this.bindDocumentDragListener(),this.bindDocumentDragEndListener())}unbindGlobalListeners(){this.unbindDocumentKeydownListener(),this.unbindDocumentEscapeListener(),this.unbindDocumentResizeListeners(),this.unbindDocumentDragListener(),this.unbindDocumentDragEndListener(),this.parentDialog&&this.parentDialog.bindDocumentKeydownListener()}bindDocumentKeydownListener(){if((0,g.NF)(this.platformId)){if(this.documentKeydownListener)return;this.zone.runOutsideAngular(()=>{this.documentKeydownListener=this.renderer.listen(this.document,"keydown",this.onKeydown.bind(this))})}}unbindDocumentKeydownListener(){this.documentKeydownListener&&(this.documentKeydownListener(),this.documentKeydownListener=null)}bindDocumentEscapeListener(){this.documentEscapeListener=this.renderer.listen(this.maskViewChild?this.maskViewChild.nativeElement.ownerDocument:"document","keydown",n=>{27==n.which&&parseInt(this.container.style.zIndex)==h.P9.getCurrent()&&this.hide()})}unbindDocumentEscapeListener(){this.documentEscapeListener&&(this.documentEscapeListener(),this.documentEscapeListener=null)}unbindMaskClickListener(){this.maskClickListener&&(this.maskClickListener(),this.maskClickListener=null)}ngOnDestroy(){this.onContainerDestroy(),this.componentRef&&this.componentRef.destroy()}static \u0275fac=function(n){return new(n||o)(e.Y36(g.K0),e.Y36(e.Lbi),e.Y36(e._Vd),e.Y36(e.sBO),e.Y36(e.Qsj),e.Y36(v),e.Y36(b),e.Y36(e.R0b),e.Y36(w.b4),e.Y36(o,12))};static \u0275cmp=e.Xpm({type:o,selectors:[["p-dynamicDialog"]],viewQuery:function(n,i){if(1&n&&(e.Gf(z,5),e.Gf(L,5),e.Gf(I,5),e.Gf(T,5)),2&n){let r;e.iGM(r=e.CRH())&&(i.insertionPoint=r.first),e.iGM(r=e.CRH())&&(i.maskViewChild=r.first),e.iGM(r=e.CRH())&&(i.contentViewChild=r.first),e.iGM(r=e.CRH())&&(i.headerViewChild=r.first)}},hostAttrs:[1,"p-element"],decls:3,vars:14,consts:[[3,"ngClass"],["mask",""],["role","dialog",3,"ngClass","ngStyle","class","width","height",4,"ngIf"],["role","dialog",3,"ngClass","ngStyle"],["container",""],["class","p-resizable-handle","style","z-index: 90;",3,"mousedown",4,"ngIf"],["class","p-dialog-header",3,"mousedown",4,"ngIf"],[1,"p-dialog-content",3,"ngStyle"],["content",""],["pDynamicDialogContent",""],["class","p-dialog-footer",4,"ngIf"],[1,"p-resizable-handle",2,"z-index","90",3,"mousedown"],[1,"p-dialog-header",3,"mousedown"],["titlebar",""],[1,"p-dialog-title"],[1,"p-dialog-header-icons"],["type","button","tabindex","-1","pRipple","",3,"ngClass","click","keydown.enter",4,"ngIf"],["type","button",3,"ngClass","click","keydown.enter",4,"ngIf"],["type","button","tabindex","-1","pRipple","",3,"ngClass","click","keydown.enter"],[1,"p-dialog-header-maximize-icon",3,"ngClass"],[3,"styleClass",4,"ngIf"],[3,"styleClass"],["type","button",3,"ngClass","click","keydown.enter"],[1,"p-dialog-footer"]],template:function(n,i){1&n&&(e.TgZ(0,"div",0,1),e.YNc(2,V,8,23,"div",2),e.qZA()),2&n&&(e.Tol(i.config.maskStyleClass),e.Q6J("ngClass",e.rFY(4,X,[!1!==i.config.modal,"left"===i.position,"right"===i.position,"top"===i.position,"bottom"===i.position,"topleft"===i.position||"top-left"===i.position,"topright"===i.position||"top-right"===i.position,"bottomleft"===i.position||"bottom-left"===i.position,"bottomright"===i.position||"bottom-right"===i.position])),e.xp6(2),e.Q6J("ngIf",i.visible))},dependencies:function(){return[g.mk,g.O5,g.PC,D.T,u.g,R.q,z]},styles:[".p-dialog-mask{position:fixed;top:0;left:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center;pointer-events:none}.p-dialog-mask.p-component-overlay{pointer-events:auto}.p-dialog{display:flex;flex-direction:column;pointer-events:auto;max-height:90%;transform:scale(1);position:relative}.p-dialog-content{overflow-y:auto;flex-grow:1}.p-dialog-header{display:flex;align-items:center;justify-content:space-between;flex-shrink:0}.p-dialog-draggable .p-dialog-header{cursor:move}.p-dialog-footer{flex-shrink:0}.p-dialog .p-dialog-header-icons{display:flex;align-items:center}.p-dialog .p-dialog-header-icon{display:flex;align-items:center;justify-content:center;overflow:hidden;position:relative}.p-fluid .p-dialog-footer .p-button{width:auto}.p-dialog-top .p-dialog,.p-dialog-bottom .p-dialog,.p-dialog-left .p-dialog,.p-dialog-right .p-dialog,.p-dialog-top-left .p-dialog,.p-dialog-top-right .p-dialog,.p-dialog-bottom-left .p-dialog,.p-dialog-bottom-right .p-dialog{margin:.75rem;transform:translateZ(0)}.p-dialog-maximized{transition:none;transform:none;width:100vw!important;height:100vh!important;top:0!important;left:0!important;max-height:100%;height:100%}.p-dialog-maximized .p-dialog-content{flex-grow:1}.p-dialog-left{justify-content:flex-start}.p-dialog-right{justify-content:flex-end}.p-dialog-top{align-items:flex-start}.p-dialog-top-left{justify-content:flex-start;align-items:flex-start}.p-dialog-top-right{justify-content:flex-end;align-items:flex-start}.p-dialog-bottom{align-items:flex-end}.p-dialog-bottom-left{justify-content:flex-start;align-items:flex-end}.p-dialog-bottom-right{justify-content:flex-end;align-items:flex-end}.p-dialog .p-resizable-handle{position:absolute;font-size:.1px;display:block;cursor:se-resize;width:12px;height:12px;right:1px;bottom:1px}.p-confirm-dialog .p-dialog-content{display:flex;align-items:center}\n"],encapsulation:2,data:{animation:[(0,l.X$)("animation",[(0,l.eR)("void => visible",[(0,l._7)(j)]),(0,l.eR)("visible => void",[(0,l._7)(J)])])]}})}return o})();class Q{_parentInjector;_additionalTokens;constructor(s,t){this._parentInjector=s,this._additionalTokens=t}get(s,t,n){return this._additionalTokens.get(s)||this._parentInjector.get(s,t)}}let U=(()=>{class o{componentFactoryResolver;appRef;injector;document;dialogComponentRefMap=new Map;constructor(t,n,i,r){this.componentFactoryResolver=t,this.appRef=n,this.injector=i,this.document=r}open(t,n){const i=this.appendDialogComponentToBody(n);return this.dialogComponentRefMap.get(i).instance.childComponentType=t,i}appendDialogComponentToBody(t){const n=new WeakMap;n.set(v,t);const i=new b;n.set(b,i);const r=i.onClose.subscribe(()=>{this.dialogComponentRefMap.get(i).instance.close()}),m=i.onDestroy.subscribe(()=>{this.removeDialogComponentFromBody(i),m.unsubscribe(),r.unsubscribe()}),d=this.componentFactoryResolver.resolveComponentFactory(H).create(new Q(this.injector,n));return this.appRef.attachView(d.hostView),this.document.body.appendChild(d.hostView.rootNodes[0]),this.dialogComponentRefMap.set(i,d),i}removeDialogComponentFromBody(t){if(!t||!this.dialogComponentRefMap.has(t))return;const n=this.dialogComponentRefMap.get(t);this.appRef.detachView(n.hostView),n.destroy(),this.dialogComponentRefMap.delete(t)}static \u0275fac=function(n){return new(n||o)(e.LFG(e._Vd),e.LFG(e.z2F),e.LFG(e.zs3),e.LFG(g.K0))};static \u0275prov=e.Yz7({token:o,factory:o.\u0275fac})}return o})()},7680:(M,x,c)=>{c.d(x,{G:()=>g,L:()=>w});var e=c(6814),l=c(4946);let g=(()=>{class a{styleClass;style;strokeWidth="2";fill="none";animationDuration="2s";static \u0275fac=function(u){return new(u||a)};static \u0275cmp=l.Xpm({type:a,selectors:[["p-progressSpinner"]],hostAttrs:[1,"p-element"],inputs:{styleClass:"styleClass",style:"style",strokeWidth:"strokeWidth",fill:"fill",animationDuration:"animationDuration"},decls:3,vars:6,consts:[["role","alert","aria-busy","true",1,"p-progress-spinner",3,"ngStyle","ngClass"],["viewBox","25 25 50 50",1,"p-progress-spinner-svg"],["cx","50","cy","50","r","20","stroke-miterlimit","10",1,"p-progress-spinner-circle"]],template:function(u,h){1&u&&(l.TgZ(0,"div",0),l.O4$(),l.TgZ(1,"svg",1),l._UZ(2,"circle",2),l.qZA()()),2&u&&(l.Q6J("ngStyle",h.style)("ngClass",h.styleClass),l.xp6(1),l.Udp("animation-duration",h.animationDuration),l.xp6(1),l.uIk("fill",h.fill)("stroke-width",h.strokeWidth))},dependencies:[e.mk,e.PC],styles:['.p-progress-spinner{position:relative;margin:0 auto;width:100px;height:100px;display:inline-block}.p-progress-spinner:before{content:"";display:block;padding-top:100%}.p-progress-spinner-svg{animation:p-progress-spinner-rotate 2s linear infinite;height:100%;transform-origin:center center;width:100%;position:absolute;inset:0;margin:auto}.p-progress-spinner-circle{stroke-dasharray:89,200;stroke-dashoffset:0;stroke:#d62d20;animation:p-progress-spinner-dash 1.5s ease-in-out infinite,p-progress-spinner-color 6s ease-in-out infinite;stroke-linecap:round}@keyframes p-progress-spinner-rotate{to{transform:rotate(360deg)}}@keyframes p-progress-spinner-dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35px}to{stroke-dasharray:89,200;stroke-dashoffset:-124px}}@keyframes p-progress-spinner-color{to,0%{stroke:#d62d20}40%{stroke:#0057e7}66%{stroke:#008744}80%,90%{stroke:#ffa700}}\n'],encapsulation:2,changeDetection:0})}return a})(),w=(()=>{class a{static \u0275fac=function(u){return new(u||a)};static \u0275mod=l.oAB({type:a});static \u0275inj=l.cJS({imports:[e.ez]})}return a})()}}]);