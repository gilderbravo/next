(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{U1Ny:function(t,i,e){"use strict";e.r(i),e.d(i,"SalesModule",function(){return Z});var n=e("ofXK"),o=e("tyNb"),a=e("VKBe"),s=e("1kSV"),c=e("PSD3"),r=e.n(c),l=e("fXoL"),b=e("NCuw"),d=e("CFL1"),u=e("ed8r"),h=e("3Pt+");function m(t,i){1&t&&(l.Vb(0,"div",2),l.Vb(1,"div",3),l.Vb(2,"div",4),l.Vb(3,"span"),l.Hc(4,"Caja Cerrada. "),l.Ub(),l.Vb(5,"span"),l.Hc(6,"Para generar una transaccion debe aperturar su caja"),l.Ub(),l.Ub(),l.Ub(),l.Ub())}const p=function(){return["../expense/","new"]};function g(t,i){1&t&&(l.Vb(0,"div",22),l.Vb(1,"button",23),l.Hc(2," Salida de Dinero "),l.Ub(),l.Ub()),2&t&&(l.Bb(1),l.oc("routerLink",l.rc(1,p)))}const f=function(){return["../income/","new"]};function v(t,i){1&t&&(l.Vb(0,"div",22),l.Vb(1,"button",24),l.Hc(2," Ingreso de Dinero "),l.Ub(),l.Ub()),2&t&&(l.Bb(1),l.oc("routerLink",l.rc(1,f)))}const y=function(t){return[t]};function V(t,i){if(1&t&&(l.Vb(0,"button",36),l.Hc(1," Salida"),l.Ub()),2&t){const t=l.ic().$implicit;l.oc("routerLink",l.sc(1,y,"../expense/"+t.subtransactionid))}}function U(t,i){if(1&t&&(l.Vb(0,"button",37),l.Hc(1,"Ingreso"),l.Ub()),2&t){const t=l.ic().$implicit;l.oc("routerLink",l.sc(1,y,"../income/"+t.subtransactionid))}}function M(t,i){if(1&t){const t=l.Wb();l.Vb(0,"div",25),l.Vb(1,"div",26),l.Fc(2,V,2,3,"button",27),l.Fc(3,U,2,3,"button",28),l.Vb(4,"button",29),l.fc("click",function(){l.yc(t);const e=i.$implicit;return l.ic(2).prepareDelete(e)}),l.Qb(5,"i",30),l.Ub(),l.Ub(),l.Vb(6,"div",31),l.Hc(7),l.Ub(),l.Vb(8,"div",32),l.Hc(9),l.jc(10,"date"),l.Ub(),l.Vb(11,"div",33),l.Hc(12),l.Ub(),l.Vb(13,"div",34),l.Hc(14),l.Ub(),l.Vb(15,"div",35),l.Hc(16),l.Ub(),l.Ub()}if(2&t){const t=i.$implicit;l.Bb(2),l.oc("ngIf",4==t.transationtypeid),l.Bb(1),l.oc("ngIf",31==t.transationtypeid),l.Bb(4),l.Ic(t.name),l.Bb(2),l.Ic(l.lc(10,7,t.date,"dd/MM/yyyy HH:mm:ss")),l.Bb(3),l.Ic(t.comment2),l.Bb(2),l.Ic(t.employed),l.Bb(2),l.Ic(t.total)}}function S(t,i){if(1&t){const t=l.Wb();l.Vb(0,"ngb-pagination",38),l.fc("pageChange",function(i){return l.yc(t),l.ic(2).page=i})("pageChange",function(i){return l.yc(t),l.ic(2).loadPage(i)}),l.Ub()}if(2&t){const t=l.ic(2);l.oc("collectionSize",t.totalItems)("page",t.page)}}function z(t,i){if(1&t){const t=l.Wb();l.Vb(0,"div"),l.Vb(1,"div",5),l.Vb(2,"div",6),l.Vb(3,"label",7),l.Hc(4,"Fecha Inicio"),l.Ub(),l.Vb(5,"div",8),l.Vb(6,"ejs-datetimepicker",9),l.fc("ngModelChange",function(i){return l.yc(t),l.ic().dateinit=i}),l.Ub(),l.Ub(),l.Vb(7,"label",10),l.Hc(8,"Fecha Final"),l.Ub(),l.Vb(9,"div",8),l.Vb(10,"ejs-datetimepicker",11),l.fc("ngModelChange",function(i){return l.yc(t),l.ic().dateend=i}),l.Ub(),l.Ub(),l.Vb(11,"div",10),l.Vb(12,"button",12),l.fc("click",function(){return l.yc(t),l.ic().search("")}),l.Hc(13,"Buscar"),l.Ub(),l.Ub(),l.Fc(14,g,3,2,"div",13),l.Fc(15,v,3,2,"div",13),l.Ub(),l.Vb(16,"h3",14),l.Hc(17,"Registrados ("),l.Vb(18,"small"),l.Hc(19),l.Ub(),l.Hc(20,")"),l.Ub(),l.Vb(21,"div",15),l.Vb(22,"div",16),l.Vb(23,"div",17),l.Vb(24,"div",18),l.Hc(25,"Accion"),l.Ub(),l.Vb(26,"div",18),l.Hc(27,"Estado"),l.Ub(),l.Vb(28,"div",18),l.Hc(29,"Fecha"),l.Ub(),l.Vb(30,"div",18),l.Hc(31,"Descripcion"),l.Ub(),l.Vb(32,"div",18),l.Hc(33,"Empleado"),l.Ub(),l.Vb(34,"div",18),l.Hc(35,"Monto"),l.Ub(),l.Ub(),l.Fc(36,M,17,10,"div",19),l.Ub(),l.Ub(),l.Vb(37,"div",20),l.Fc(38,S,1,2,"ngb-pagination",21),l.Ub(),l.Ub(),l.Ub()}if(2&t){const t=l.ic();l.Bb(6),l.oc("ngModel",t.dateinit),l.Bb(4),l.oc("ngModel",t.dateend),l.Bb(4),l.oc("ngIf",t.salesService.statusCashbox),l.Bb(1),l.oc("ngIf",t.salesService.statusCashbox),l.Bb(4),l.Ic(t.totalItems),l.Bb(17),l.oc("ngForOf",t.transactions),l.Bb(2),l.oc("ngIf",t.showPagination)}}let w=(()=>{class t{constructor(t,i,e,n){this.ngbPaginationConfig=t,this.salesService=i,this.datepipe=e,this.userService=n,this.today=new Date,this.dateinit=new Date(this.today.getFullYear(),this.today.getMonth()),this.dateend=new Date(this.today.getFullYear(),this.today.getMonth()+1,0),this.totalItems=0,this.page=1,this.previousPage=1,this.showPagination=!0,this.size=10,this.order="id",this.filter="",this.asc=!0,this.load=!0,this.statecashbox=!1,this.ngbPaginationConfig.boundaryLinks=!0}ngOnInit(){this.list(this.page-1)}list(t){this.load=!0,this.salesService.listCashboxflow(t,this.size,this.order,this.asc,this.filter,this.datepipe.transform(this.dateinit,"dd/MM/yyyy"),this.datepipe.transform(this.dateend,"dd/MM/yyyy"),this.userService.subsidiaryid).subscribe(t=>{t.content.length>0&&(this.totalItems=t.totalElements,this.showPagination=!0,this.transactions=t.content),this.load=!1})}loadPage(t){t!==this.previousPage&&(this.previousPage=t,this.list(this.page-1))}search(t){this.filter=t,this.previousPage=1,this.page=1,this.filter.length<=0&&(this.filter=""),this.list(0)}prepareDelete(t){r.a.fire({title:"Esta a punto de el Flujo de Caja",showCancelButton:!0,confirmButtonText:"Si, Deseo Eliminar"}).then(i=>{i.isConfirmed&&(this.salesService.deleteCashboxflow(t.id),this.previousPage=1,this.page=1,this.list(0))})}}return t.\u0275fac=function(i){return new(i||t)(l.Pb(s.c),l.Pb(b.a),l.Pb(n.f),l.Pb(d.a))},t.\u0275cmp=l.Jb({type:t,selectors:[["app-cashboxflows"]],features:[l.Ab([s.c])],decls:2,vars:2,consts:[["class","row animated fadeIn",4,"ngIf"],[4,"ngIf"],[1,"row","animated","fadeIn"],[1,"col-sm-12"],[1,"alert","alert-danger","text-center"],[1,"card",2,"padding","2px"],[1,"col-md-12","row"],["col-md-2",""],[1,"col-md-2","form-group"],["id","dateinit","placeholder","Select a datetime ","format","dd/MM/yyyy",3,"ngModel","ngModelChange"],[1,"col-md-1"],["id","dateend","placeholder","Select a datetime ","format","dd/MM/yyyy",3,"ngModel","ngModelChange"],["type","submit",1,"btn","btn-success","waves-effect","waves-light",3,"click"],["class","text-right col-md-2",4,"ngIf"],[1,"card-title"],[1,"wrapper-mobile"],[1,"table-mobile"],[1,"row-mobile","header-mobile"],[1,"cell-mobile"],["class","row-mobile",4,"ngFor","ngForOf"],[2,"position","relative","left","30%"],[3,"collectionSize","page","pageChange",4,"ngIf"],[1,"text-right","col-md-2"],["type","button",1,"btn","waves-effect","waves-light","btn-rounded","btn-danger",3,"routerLink"],["type","button",1,"btn","waves-effect","waves-light","btn-rounded","btn-primary",3,"routerLink"],[1,"row-mobile"],["data-title","Accion",1,"cell-mobile",2,"width","180px"],["title","Egresos","class","btn btn-danger btn-xs waves-effect waves-light w-50",3,"routerLink",4,"ngIf"],["title","Ingresos","class","btn btn-primary btn-xs waves-effect waves-light  w-50",3,"routerLink",4,"ngIf"],["title","Eliminar Caja",1,"btn","btn-danger","btn-xs","waves-effect","waves-light","m-l-10",3,"click"],[1,"fa","fa-trash"],["data-title","Estado",1,"cell-mobile"],["data-title","Fecha",1,"cell-mobile"],["data-title","Descripcion",1,"cell-mobile"],["data-title","Empleado",1,"cell-mobile"],["data-title","Monto",1,"cell-mobile"],["title","Egresos",1,"btn","btn-danger","btn-xs","waves-effect","waves-light","w-50",3,"routerLink"],["title","Ingresos",1,"btn","btn-primary","btn-xs","waves-effect","waves-light","w-50",3,"routerLink"],[3,"collectionSize","page","pageChange"]],template:function(t,i){1&t&&(l.Fc(0,m,7,0,"div",0),l.Fc(1,z,39,7,"div",1)),2&t&&(l.oc("ngIf",0==i.salesService.statusCashbox),l.Bb(1),l.oc("ngIf",!i.load))},directives:[n.o,u.a,h.m,h.p,n.n,o.f,s.b],pipes:[n.f],styles:[""]}),t})();var C=e("/67R"),B=e("K7Ed"),x=e("LjSU"),H=e("Rm4T"),P=e("B+r4"),D=e("OzZK"),O=e("RwU8"),F=e("C2AL"),T=e("FwiY"),j=e("0lU3"),k=e("zAKX");const I=function(){return{standalone:!0}};function Q(t,i){if(1&t){const t=l.Wb();l.Vb(0,"div",12),l.Vb(1,"div",27),l.Vb(2,"input",21),l.fc("ngModelChange",function(t){return i.$implicit.product=t}),l.Ub(),l.Ub(),l.Vb(3,"div",28),l.Vb(4,"input",29),l.fc("ngModelChange",function(t){return i.$implicit.amount=t})("blur",function(){return l.yc(t),l.ic().calculateTotal()}),l.Ub(),l.Ub(),l.Vb(5,"div",30),l.Vb(6,"input",31),l.fc("ngModelChange",function(t){return i.$implicit.unitpricesale=t})("blur",function(){return l.yc(t),l.ic().calculateTotal()}),l.Ub(),l.Ub(),l.Vb(7,"div",32),l.Hc(8),l.jc(9,"currency"),l.Ub(),l.Vb(10,"div",33),l.Vb(11,"button",34),l.fc("click",function(){l.yc(t);const e=i.$implicit,n=i.index;return l.ic().removeDetail(e,n)}),l.Qb(12,"i",35),l.Ub(),l.Ub(),l.Ub()}if(2&t){const t=i.$implicit;l.Bb(2),l.oc("ngModel",t.product)("ngModelOptions",l.rc(10,I)),l.Bb(2),l.oc("ngModel",t.amount)("ngModelOptions",l.rc(11,I)),l.Bb(2),l.oc("ngModel",t.unitpricesale)("ngModelOptions",l.rc(12,I)),l.Bb(2),l.Ic(l.lc(9,7,t.totalmoney,"S/"))}}function L(t,i){if(1&t&&l.Qb(0,"nz-option",36),2&t){const t=i.$implicit;l.oc("nzValue",t.employedid)("nzLabel",t.businessname)}}const G=function(){return["dd/MM/yyyy"]};let $=(()=>{class t{constructor(t,i,e,n,o,a,s,c,r,l){this.datepipe=t,this.userService=i,this.clientService=e,this.saleService=n,this.formBuilder=o,this.router=a,this.businessobjectService=c,this.settingsService=r,this.i18n=l,this.employeds=[],this.load=!0,this.isSubmitted=!1,this.identitynumberdoc="",this.subjectrolid=1,this.configurationUser={},this.transaction={email:"",details:[],total:0,employedid:this.userService.employedid,dateinit:new Date,vouchertypeid:16,transactiontypeid:4},s.params.subscribe(t=>{this.id=t.id,"new"!==this.id&&this.loadCashboxflow(this.id)})}ngOnInit(){this.validateFormGroup(),this.listEmployeds(),this.saleService.statusCashboxs(this.userService.subsidiaryid,this.datepipe.transform(new Date,"dd/MM/yyyy"),this.datepipe.transform(new Date,"dd/MM/yyyy")),console.log(this.saleService.statusCashbox)}validateFormGroup(){this.form=this.formBuilder.group({})}get f(){return this.form.controls}save(){if(this.isSubmitted=!0,!this.form.invalid){if(this.transaction.dateinit&&this.stringDateformatDDMMYY(this.transaction.dateinit),this.transaction.details.length<=0)return alertify.error("No Tiene Detalles... "),void(this.isSubmitted=!1);this.saleService.saveCashboxflow(this.transaction,"sales/pay-sale").subscribe({next:t=>(r.a.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0}).fire({icon:"success",title:"Se Guardo la salida de Dinero"}),this.isSubmitted=!1,this.router.navigate(["/sales/cashboxflows"])),error:t=>{console.error("There was an error!",t),this.isSubmitted=!1}})}}stringDateformatDDMMYY(t){this.transaction.startdate=this.datepipe.transform(t,"dd/MM/yyyy HH:mm:ss")}loadCashboxflow(t){this.saleService.loadCashboxflow(t).subscribe(t=>{this.transaction=t,this.transaction.dateinit=new Date(t.date),this.calculateTotal()})}removeDetail(t,i){t.id>0&&this.transaction.detailsremove.push(t),this.transaction.details.splice(i,1),this.calculateTotal()}addProductToDetailsbasic(){var t=new Date;new Date(t.getFullYear(),t.getMonth(),1),new Date(t.getFullYear(),t.getMonth()+1,0),this.transaction.details.push({comment:"",amount:1,unitmeasure:"NIU",product:"",stock:0,businessobjectid:1,businessobjectdetailid:1,valuedbusinessobjectid:1,unitpricesale:0,unitpricereal:0,totalmoney:0,subtransactionid:0,subtransactionorderid:0,nameobjectrole:"Servicio",id:0,unitpricepurchase:0,operationaffectedid:30,minimalPrice:0,stockTemp:0,code:""}),this.calculateTotal()}calculateTotal(){this.transaction.neto=0,this.transaction.total=0;let t=0,i=0,e=this.transaction.details;for(let n=0;n<e.length;n++)e[n].totalmoney=e[n].amount*e[n].unitpricesale,i+=e[n].amount*e[n].unitpricesale,t+=e[n].totalmoney,e[n].total=e[n].totalmoney;this.transaction.neto=0==this.userService.setting.includedigv?t:t/(1*this.userService.igv.valor+1),this.transaction.igv=0==this.userService.setting.includedigv||0==this.transaction.applytax?0:this.transaction.neto*this.userService.igv.valor,this.transaction.total=this.transaction.neto+this.transaction.igv,this.transaction.total=Math.round(100*this.transaction.total)/100,this.transaction.neto=Math.round(100*this.transaction.neto)/100,this.transaction.igv=Math.round(100*this.transaction.igv)/100}listEmployeds(){this.load=!0,this.settingsService.listEployed().subscribe(t=>{this.employeds=t})}}return t.\u0275fac=function(i){return new(i||t)(l.Pb(n.f),l.Pb(d.a),l.Pb(C.a),l.Pb(b.a),l.Pb(h.d),l.Pb(o.e),l.Pb(o.a),l.Pb(B.a),l.Pb(x.a),l.Pb(H.e))},t.\u0275cmp=l.Jb({type:t,selectors:[["app-expense"]],decls:74,vars:42,consts:[[1,"container-mobile"],[1,"flex1-mobile"],[1,"card"],[3,"nzSpan"],["nz-button","","nzType","primary","nzShape","circle",3,"click"],["nz-icon","","nzType","plus-circle","nzTheme","twotone"],[1,"wrapper-mobile"],[1,"table-mobile"],[1,"row-mobile","header-green"],[1,"cell-mobile"],[1,"cell-mobile","detail-amount"],["class","row-mobile",4,"ngFor","ngForOf"],[1,"row-mobile"],[1,"cell-mobile","texto","btn-primary"],[1,"flex2-mobile"],["nz-form","",3,"formGroup"],[1,"padding-add"],[3,"nzSm","nzXs"],["nz-row","",3,"nzGutter"],["nz-col","",3,"nzSpan"],[3,"nzFormat","ngModel","ngModelOptions","ngModelChange"],["type","text",1,"form-control",3,"ngModel","ngModelOptions","ngModelChange"],[3,"ngModel","ngModelOptions","ngModelChange"],[3,"nzValue","nzLabel",4,"ngFor","ngForOf"],[1,"floating-button",2,"text-align","center"],["type","button",1,"btn","btn-primary","waves-effect","waves-light","m-r-10",3,"disabled","click"],["routerLink","/sales/cashboxflows",1,"btn","btn-inverse","waves-effect","waves-light"],["data-title","Descripcion",1,"cell-mobile"],["data-title","Cantidad",1,"cell-mobile"],["type","text",1,"form-control",3,"ngModel","ngModelOptions","ngModelChange","blur"],["data-title","Precio",1,"cell-mobile"],["data-plus-as-tab","true","type","text",1,"form-control",3,"ngModel","ngModelOptions","ngModelChange","blur"],["data-title","Sub Total",1,"cell-mobile"],[1,"cell-mobile",2,"width","120px"],[1,"btn","btn-danger","btn-xs",3,"click"],[1,"fa","fa-trash"],[3,"nzValue","nzLabel"]],template:function(t,i){1&t&&(l.Vb(0,"div",0),l.Vb(1,"div",1),l.Vb(2,"div",2),l.Vb(3,"nz-form-item"),l.Vb(4,"nz-form-control",3),l.Vb(5,"button",4),l.fc("click",function(){return i.addProductToDetailsbasic()}),l.Qb(6,"i",5),l.Ub(),l.Ub(),l.Ub(),l.Vb(7,"div",6),l.Vb(8,"div",7),l.Vb(9,"div",8),l.Vb(10,"div",9),l.Hc(11,"Descripcion"),l.Ub(),l.Vb(12,"div",10),l.Hc(13,"Cantidad"),l.Ub(),l.Vb(14,"div",10),l.Hc(15,"Precio"),l.Ub(),l.Vb(16,"div",9),l.Hc(17,"Sub Total"),l.Ub(),l.Vb(18,"div",9),l.Hc(19,"Accion"),l.Ub(),l.Ub(),l.Fc(20,Q,13,13,"div",11),l.Vb(21,"div",12),l.Qb(22,"div",9),l.Qb(23,"div",9),l.Qb(24,"div",9),l.Vb(25,"div",9),l.Hc(26," SubTotal"),l.Ub(),l.Vb(27,"div",9),l.Hc(28),l.jc(29,"currency"),l.Ub(),l.Ub(),l.Vb(30,"div",12),l.Qb(31,"div",9),l.Qb(32,"div",9),l.Qb(33,"div",9),l.Vb(34,"div",9),l.Hc(35," IGV "),l.Ub(),l.Vb(36,"div",9),l.Hc(37),l.jc(38,"currency"),l.Ub(),l.Ub(),l.Vb(39,"div",12),l.Qb(40,"div",9),l.Qb(41,"div",9),l.Qb(42,"div",9),l.Vb(43,"div",13),l.Hc(44," TOTAL"),l.Ub(),l.Vb(45,"div",13),l.Hc(46),l.jc(47,"currency"),l.Ub(),l.Ub(),l.Ub(),l.Ub(),l.Ub(),l.Ub(),l.Vb(48,"div",14),l.Vb(49,"form",15),l.Vb(50,"div",2),l.Vb(51,"nz-form-item",16),l.Vb(52,"nz-form-label",17),l.Hc(53,"Fecha"),l.Ub(),l.Vb(54,"nz-form-control",17),l.Vb(55,"div",18),l.Vb(56,"div",19),l.Vb(57,"nz-date-picker",20),l.fc("ngModelChange",function(t){return i.transaction.dateinit=t}),l.Ub(),l.Ub(),l.Ub(),l.Ub(),l.Ub(),l.Vb(58,"nz-form-item",16),l.Vb(59,"nz-form-label",17),l.Hc(60,"Documento"),l.Ub(),l.Vb(61,"nz-form-control",17),l.Vb(62,"input",21),l.fc("ngModelChange",function(t){return i.transaction.comment2=t}),l.Ub(),l.Ub(),l.Ub(),l.Vb(63,"nz-form-item",16),l.Vb(64,"nz-form-label",17),l.Hc(65,"Usuario"),l.Ub(),l.Vb(66,"nz-form-control",17),l.Vb(67,"nz-select",22),l.fc("ngModelChange",function(t){return i.transaction.employedid=t}),l.Fc(68,L,1,2,"nz-option",23),l.Ub(),l.Ub(),l.Ub(),l.Vb(69,"div",24),l.Vb(70,"button",25),l.fc("click",function(){return i.save()}),l.Hc(71,"Guardar"),l.Ub(),l.Vb(72,"button",26),l.Hc(73,"Cancelar"),l.Ub(),l.Ub(),l.Ub(),l.Ub(),l.Ub(),l.Ub()),2&t&&(l.Bb(4),l.oc("nzSpan",1),l.Bb(16),l.oc("ngForOf",i.transaction.details),l.Bb(8),l.Jc(" ",l.lc(29,29,i.transaction.neto,"S/"),""),l.Bb(9),l.Jc(" ",l.lc(38,32,i.transaction.igv,"S/")," "),l.Bb(9),l.Jc(" ",l.lc(47,35,i.transaction.total,"S/"),""),l.Bb(3),l.oc("formGroup",i.form),l.Bb(3),l.oc("nzSm",6)("nzXs",24),l.Bb(2),l.oc("nzSm",14)("nzXs",24),l.Bb(1),l.oc("nzGutter",8),l.Bb(1),l.oc("nzSpan",16),l.Bb(1),l.oc("nzFormat",l.rc(38,G))("ngModel",i.transaction.dateinit)("ngModelOptions",l.rc(39,I)),l.Bb(2),l.oc("nzSm",6)("nzXs",24),l.Bb(2),l.oc("nzSm",14)("nzXs",24),l.Bb(1),l.oc("ngModel",i.transaction.comment2)("ngModelOptions",l.rc(40,I)),l.Bb(2),l.oc("nzSm",6)("nzXs",24),l.Bb(2),l.oc("nzSm",14)("nzXs",24),l.Bb(1),l.oc("ngModel",i.transaction.employedid)("ngModelOptions",l.rc(41,I)),l.Bb(1),l.oc("ngForOf",i.employeds),l.Bb(2),l.oc("disabled",i.isSubmitted))},directives:[P.c,P.a,D.a,O.a,F.a,T.b,n.n,h.x,h.n,h.h,j.a,h.m,h.p,h.c,k.b,o.f,k.a],pipes:[n.d],styles:[".padding-add[_ngcontent-%COMP%] {\n        padding: 5px;\n      }\n\n      .texto[_ngcontent-%COMP%]{\n\n        font-weight:bold;\n      }\n      .detail-amount[_ngcontent-%COMP%]{\n        width: 15%;\n      }\n\n      nz-select[_ngcontent-%COMP%] {\n        width: 200px;\n      }"]}),t})();const X=function(){return{standalone:!0}};function E(t,i){if(1&t){const t=l.Wb();l.Vb(0,"div",12),l.Vb(1,"div",27),l.Vb(2,"input",21),l.fc("ngModelChange",function(t){return i.$implicit.product=t}),l.Ub(),l.Ub(),l.Vb(3,"div",28),l.Vb(4,"input",29),l.fc("ngModelChange",function(t){return i.$implicit.amount=t})("blur",function(){return l.yc(t),l.ic().calculateTotal()}),l.Ub(),l.Ub(),l.Vb(5,"div",30),l.Vb(6,"input",31),l.fc("ngModelChange",function(t){return i.$implicit.unitpricesale=t})("blur",function(){return l.yc(t),l.ic().calculateTotal()}),l.Ub(),l.Ub(),l.Vb(7,"div",32),l.Hc(8),l.jc(9,"currency"),l.Ub(),l.Vb(10,"div",33),l.Vb(11,"button",34),l.fc("click",function(){l.yc(t);const e=i.$implicit,n=i.index;return l.ic().removeDetail(e,n)}),l.Qb(12,"i",35),l.Ub(),l.Ub(),l.Ub()}if(2&t){const t=i.$implicit;l.Bb(2),l.oc("ngModel",t.product)("ngModelOptions",l.rc(10,X)),l.Bb(2),l.oc("ngModel",t.amount)("ngModelOptions",l.rc(11,X)),l.Bb(2),l.oc("ngModel",t.unitpricesale)("ngModelOptions",l.rc(12,X)),l.Bb(2),l.Ic(l.lc(9,7,t.totalmoney,"S/"))}}function Y(t,i){if(1&t&&l.Qb(0,"nz-option",36),2&t){const t=i.$implicit;l.oc("nzValue",t.employedid)("nzLabel",t.businessname)}}const J=function(){return["dd/MM/yyyy"]};let N=(()=>{class t{constructor(t,i,e,n,o,a,s,c,r,l){this.datepipe=t,this.userService=i,this.clientService=e,this.saleService=n,this.formBuilder=o,this.router=a,this.businessobjectService=c,this.settingsService=r,this.i18n=l,this.employeds=[],this.load=!0,this.isSubmitted=!1,this.identitynumberdoc="",this.subjectrolid=1,this.configurationUser={},this.transaction={email:"",details:[],total:0,employedid:this.userService.employedid,dateinit:new Date,vouchertypeid:35,transactiontypeid:31},s.params.subscribe(t=>{this.id=t.id,"new"!==this.id&&this.loadCashboxflow(this.id)})}ngOnInit(){this.validateFormGroup(),this.listEmployeds(),this.saleService.statusCashboxs(this.userService.subsidiaryid,this.datepipe.transform(new Date,"dd/MM/yyyy"),this.datepipe.transform(new Date,"dd/MM/yyyy")),console.log(this.saleService.statusCashbox)}validateFormGroup(){this.form=this.formBuilder.group({})}get f(){return this.form.controls}save(){if(this.isSubmitted=!0,!this.form.invalid){if(this.transaction.dateinit&&this.stringDateformatDDMMYY(this.transaction.dateinit),this.transaction.details.length<=0)return alertify.error("No Tiene Detalles... "),void(this.isSubmitted=!1);this.saleService.saveCashboxflow(this.transaction,"sales/pay-sale").subscribe({next:t=>(r.a.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0}).fire({icon:"success",title:"Se Guardo el ingreso de dinero"}),this.isSubmitted=!1,this.router.navigate(["/sales/cashboxflows"])),error:t=>{console.error("There was an error!",t),this.isSubmitted=!1}})}}stringDateformatDDMMYY(t){this.transaction.startdate=this.datepipe.transform(t,"dd/MM/yyyy HH:mm:ss")}loadCashboxflow(t){this.saleService.loadCashboxflow(t).subscribe(t=>{this.transaction=t,this.transaction.dateinit=new Date(t.date),this.calculateTotal()})}removeDetail(t,i){t.id>0&&this.transaction.detailsremove.push(t),this.transaction.details.splice(i,1),this.calculateTotal()}addProductToDetailsbasic(){var t=new Date;new Date(t.getFullYear(),t.getMonth(),1),new Date(t.getFullYear(),t.getMonth()+1,0),this.transaction.details.push({comment:"",amount:1,unitmeasure:"NIU",product:"",stock:0,businessobjectid:1,businessobjectdetailid:1,valuedbusinessobjectid:1,unitpricesale:0,unitpricereal:0,totalmoney:0,subtransactionid:0,subtransactionorderid:0,nameobjectrole:"Servicio",id:0,unitpricepurchase:0,operationaffectedid:30,minimalPrice:0,stockTemp:0,code:""}),this.calculateTotal()}calculateTotal(){this.transaction.neto=0,this.transaction.total=0;let t=0,i=0,e=this.transaction.details;for(let n=0;n<e.length;n++)e[n].totalmoney=e[n].amount*e[n].unitpricesale,i+=e[n].amount*e[n].unitpricesale,t+=e[n].totalmoney,e[n].total=e[n].totalmoney;this.transaction.neto=0==this.userService.setting.includedigv?t:t/(1*this.userService.igv.valor+1),this.transaction.igv=0==this.userService.setting.includedigv||0==this.transaction.applytax?0:this.transaction.neto*this.userService.igv.valor,this.transaction.total=this.transaction.neto+this.transaction.igv,this.transaction.total=Math.round(100*this.transaction.total)/100,this.transaction.neto=Math.round(100*this.transaction.neto)/100,this.transaction.igv=Math.round(100*this.transaction.igv)/100}listEmployeds(){this.load=!0,this.settingsService.listEployed().subscribe(t=>{this.employeds=t})}}return t.\u0275fac=function(i){return new(i||t)(l.Pb(n.f),l.Pb(d.a),l.Pb(C.a),l.Pb(b.a),l.Pb(h.d),l.Pb(o.e),l.Pb(o.a),l.Pb(B.a),l.Pb(x.a),l.Pb(H.e))},t.\u0275cmp=l.Jb({type:t,selectors:[["app-income"]],decls:74,vars:42,consts:[[1,"container-mobile"],[1,"flex1-mobile"],[1,"card"],[3,"nzSpan"],["nz-button","","nzType","primary","nzShape","circle",3,"click"],["nz-icon","","nzType","plus-circle","nzTheme","twotone"],[1,"wrapper-mobile"],[1,"table-mobile"],[1,"row-mobile","header-green"],[1,"cell-mobile"],[1,"cell-mobile","detail-amount"],["class","row-mobile",4,"ngFor","ngForOf"],[1,"row-mobile"],[1,"cell-mobile","texto","btn-primary"],[1,"flex2-mobile"],["nz-form","",3,"formGroup"],[1,"padding-add"],[3,"nzSm","nzXs"],["nz-row","",3,"nzGutter"],["nz-col","",3,"nzSpan"],[3,"nzFormat","ngModel","ngModelOptions","ngModelChange"],["type","text",1,"form-control",3,"ngModel","ngModelOptions","ngModelChange"],[3,"ngModel","ngModelOptions","ngModelChange"],[3,"nzValue","nzLabel",4,"ngFor","ngForOf"],[1,"floating-button",2,"text-align","center"],["type","button",1,"btn","btn-primary","waves-effect","waves-light","m-r-10",3,"disabled","click"],["routerLink","/sales/cashboxflows",1,"btn","btn-inverse","waves-effect","waves-light"],["data-title","Descripcion",1,"cell-mobile"],["data-title","Cantidad",1,"cell-mobile"],["type","text",1,"form-control",3,"ngModel","ngModelOptions","ngModelChange","blur"],["data-title","Precio",1,"cell-mobile"],["data-plus-as-tab","true","type","text",1,"form-control",3,"ngModel","ngModelOptions","ngModelChange","blur"],["data-title","Sub Total",1,"cell-mobile"],[1,"cell-mobile",2,"width","120px"],[1,"btn","btn-danger","btn-xs",3,"click"],[1,"fa","fa-trash"],[3,"nzValue","nzLabel"]],template:function(t,i){1&t&&(l.Vb(0,"div",0),l.Vb(1,"div",1),l.Vb(2,"div",2),l.Vb(3,"nz-form-item"),l.Vb(4,"nz-form-control",3),l.Vb(5,"button",4),l.fc("click",function(){return i.addProductToDetailsbasic()}),l.Qb(6,"i",5),l.Ub(),l.Ub(),l.Ub(),l.Vb(7,"div",6),l.Vb(8,"div",7),l.Vb(9,"div",8),l.Vb(10,"div",9),l.Hc(11,"Descripcion"),l.Ub(),l.Vb(12,"div",10),l.Hc(13,"Cantidad"),l.Ub(),l.Vb(14,"div",10),l.Hc(15,"Precio"),l.Ub(),l.Vb(16,"div",9),l.Hc(17,"Sub Total"),l.Ub(),l.Vb(18,"div",9),l.Hc(19,"Accion"),l.Ub(),l.Ub(),l.Fc(20,E,13,13,"div",11),l.Vb(21,"div",12),l.Qb(22,"div",9),l.Qb(23,"div",9),l.Qb(24,"div",9),l.Vb(25,"div",9),l.Hc(26," SubTotal"),l.Ub(),l.Vb(27,"div",9),l.Hc(28),l.jc(29,"currency"),l.Ub(),l.Ub(),l.Vb(30,"div",12),l.Qb(31,"div",9),l.Qb(32,"div",9),l.Qb(33,"div",9),l.Vb(34,"div",9),l.Hc(35," IGV "),l.Ub(),l.Vb(36,"div",9),l.Hc(37),l.jc(38,"currency"),l.Ub(),l.Ub(),l.Vb(39,"div",12),l.Qb(40,"div",9),l.Qb(41,"div",9),l.Qb(42,"div",9),l.Vb(43,"div",13),l.Hc(44," TOTAL"),l.Ub(),l.Vb(45,"div",13),l.Hc(46),l.jc(47,"currency"),l.Ub(),l.Ub(),l.Ub(),l.Ub(),l.Ub(),l.Ub(),l.Vb(48,"div",14),l.Vb(49,"form",15),l.Vb(50,"div",2),l.Vb(51,"nz-form-item",16),l.Vb(52,"nz-form-label",17),l.Hc(53,"Fecha"),l.Ub(),l.Vb(54,"nz-form-control",17),l.Vb(55,"div",18),l.Vb(56,"div",19),l.Vb(57,"nz-date-picker",20),l.fc("ngModelChange",function(t){return i.transaction.dateinit=t}),l.Ub(),l.Ub(),l.Ub(),l.Ub(),l.Ub(),l.Vb(58,"nz-form-item",16),l.Vb(59,"nz-form-label",17),l.Hc(60,"Documento"),l.Ub(),l.Vb(61,"nz-form-control",17),l.Vb(62,"input",21),l.fc("ngModelChange",function(t){return i.transaction.comment2=t}),l.Ub(),l.Ub(),l.Ub(),l.Vb(63,"nz-form-item",16),l.Vb(64,"nz-form-label",17),l.Hc(65,"Usuario"),l.Ub(),l.Vb(66,"nz-form-control",17),l.Vb(67,"nz-select",22),l.fc("ngModelChange",function(t){return i.transaction.employedid=t}),l.Fc(68,Y,1,2,"nz-option",23),l.Ub(),l.Ub(),l.Ub(),l.Vb(69,"div",24),l.Vb(70,"button",25),l.fc("click",function(){return i.save()}),l.Hc(71,"Guardar"),l.Ub(),l.Vb(72,"button",26),l.Hc(73,"Cancelar"),l.Ub(),l.Ub(),l.Ub(),l.Ub(),l.Ub(),l.Ub()),2&t&&(l.Bb(4),l.oc("nzSpan",1),l.Bb(16),l.oc("ngForOf",i.transaction.details),l.Bb(8),l.Jc(" ",l.lc(29,29,i.transaction.neto,"S/"),""),l.Bb(9),l.Jc(" ",l.lc(38,32,i.transaction.igv,"S/")," "),l.Bb(9),l.Jc(" ",l.lc(47,35,i.transaction.total,"S/"),""),l.Bb(3),l.oc("formGroup",i.form),l.Bb(3),l.oc("nzSm",6)("nzXs",24),l.Bb(2),l.oc("nzSm",14)("nzXs",24),l.Bb(1),l.oc("nzGutter",8),l.Bb(1),l.oc("nzSpan",16),l.Bb(1),l.oc("nzFormat",l.rc(38,J))("ngModel",i.transaction.dateinit)("ngModelOptions",l.rc(39,X)),l.Bb(2),l.oc("nzSm",6)("nzXs",24),l.Bb(2),l.oc("nzSm",14)("nzXs",24),l.Bb(1),l.oc("ngModel",i.transaction.comment2)("ngModelOptions",l.rc(40,X)),l.Bb(2),l.oc("nzSm",6)("nzXs",24),l.Bb(2),l.oc("nzSm",14)("nzXs",24),l.Bb(1),l.oc("ngModel",i.transaction.employedid)("ngModelOptions",l.rc(41,X)),l.Bb(1),l.oc("ngForOf",i.employeds),l.Bb(2),l.oc("disabled",i.isSubmitted))},directives:[P.c,P.a,D.a,O.a,F.a,T.b,n.n,h.x,h.n,h.h,j.a,h.m,h.p,h.c,k.b,o.f,k.a],pipes:[n.d],styles:[".padding-add[_ngcontent-%COMP%] {\n        padding: 5px;\n      }\n\n      .texto[_ngcontent-%COMP%]{\n\n        font-weight:bold;\n      }\n      .detail-amount[_ngcontent-%COMP%]{\n        width: 15%;\n      }\n\n      nz-select[_ngcontent-%COMP%] {\n        width: 200px;\n      }"]}),t})();var A=e("iAHN");const _=function(){return{standalone:!0}};function W(t,i){if(1&t){const t=l.Wb();l.Vb(0,"div",9),l.Vb(1,"div",21),l.Vb(2,"input",22),l.fc("ngModelChange",function(t){return i.$implicit.product=t}),l.Ub(),l.Ub(),l.Vb(3,"div",23),l.Vb(4,"input",24),l.fc("ngModelChange",function(t){return i.$implicit.amount=t})("blur",function(){return l.yc(t),l.ic().calculateTotal()}),l.Ub(),l.Ub(),l.Vb(5,"div",25),l.Vb(6,"input",26),l.fc("ngModelChange",function(t){return i.$implicit.unitpricesale=t})("blur",function(){return l.yc(t),l.ic().calculateTotal()}),l.Ub(),l.Ub(),l.Vb(7,"div",27),l.Hc(8),l.jc(9,"currency"),l.Ub(),l.Vb(10,"div",28),l.Vb(11,"button",29),l.fc("click",function(){l.yc(t);const e=i.$implicit,n=i.index;return l.ic().removeDetail(e,n)}),l.Qb(12,"i",30),l.Ub(),l.Ub(),l.Ub()}if(2&t){const t=i.$implicit;l.Bb(2),l.oc("ngModel",t.product)("ngModelOptions",l.rc(10,_)),l.Bb(2),l.oc("ngModel",t.amount)("ngModelOptions",l.rc(11,_)),l.Bb(2),l.oc("ngModel",t.unitpricesale)("ngModelOptions",l.rc(12,_)),l.Bb(2),l.Ic(l.lc(9,7,t.totalmoney,"S/"))}}function K(t,i){if(1&t&&l.Qb(0,"nz-option",31),2&t){const t=i.$implicit;l.oc("nzValue",t.id)("nzLabel",t.motives)}}const R=[{path:"",component:a.q,data:{title:"Listado Ventas"}},{path:":id/:identitynumber/:vouchertypeid",component:a.p,data:{title:"Venta"}},{path:"pay-sale/:amount/:subtransactionid/:subtransactionstateid",component:a.i,data:{title:"Pago De Venta"}},{path:"cashboxs",component:a.a,data:{title:"Apertura y Cierre de Caja"}},{path:"opening/:id",component:a.h,data:{title:"Apertura Caja"}},{path:"cashboxs/closing/:id/:openingdate",component:a.d,data:{title:"Cierre Caja"}},{path:"cashboxflows",component:w,data:{title:"Movimientos de Caja"}},{path:"expense/:id",component:$,data:{title:"Egresos de Caja"}},{path:"income/:id",component:N,data:{title:"Ingresos de Caja"}},{path:"notecredit/:id/:identitynumber/:vouchertypeid",component:(()=>{class t{constructor(t,i,e,n,o,a,s,c,r,l){this.datepipe=t,this.userService=i,this.clientService=e,this.saleService=n,this.formBuilder=o,this.businessobjectService=s,this.settingsService=c,this.i18n=r,this.router=l,this.load=!0,this.isSubmitted=!1,this.identitynumberdoc="",this.subjectrolid=1,this.transaction={typesaleid:1,email:"",details:[],total:0,employedid:this.userService.employedid,dateinit:new Date},a.params.subscribe(t=>{this.id=t.id,this.identitynumberdoc=t.identitynumber,this.vouchertypeid=t.vouchertypeid,"new"!==this.id&&this.loadSale(this.id)})}ngOnInit(){this.validateFormGroup(),this.listMotives()}validateFormGroup(){this.form=this.formBuilder.group({})}listMotives(){this.load=!0,this.settingsService.listMotivesEntryNote().subscribe(t=>{this.motives=t})}get f(){return this.form.controls}save(){if(this.isSubmitted=!0,!this.form.invalid){if(this.transaction.dateinit&&this.stringDateformatDDMMYY(this.transaction.dateinit),this.transaction.details.length<=0)return alertify.error("No Tiene Detalles... "),void(this.isSubmitted=!1);this.saleService.saveNoteCreditDebit(this.transaction).subscribe({next:t=>(r.a.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0}).fire({icon:"success",title:"Se Guardo la Nota de Venta "}),this.router.navigate(["/sales"])),error:t=>console.error("There was an error!",t)})}}stringDateformatDDMMYY(t){this.transaction.startdate=this.datepipe.transform(t,"dd/MM/yyyy HH:mm:ss")}loadSale(t){this.saleService.loadSale(t).subscribe(t=>{this.transaction=t,this.transaction.dateinit=new Date(t.date),this.transaction.subtransactionidold=t.subtransactionid,this.transaction.subtransactionstateidold=t.subtransactionstateid,delete this.transaction.subtransactionid,delete this.transaction.subtransactionstateid,this.calculateTotal()})}selectClientChange(t){this.transaction.externalsubjectid=t.externalsubjectid,this.transaction.vouchertypeid=t.vouchertypeid,this.transaction.businessname=t.client.subject,this.transaction.address=t.client.address,this.transaction.identitynumber=t.client.identitynumber,this.transaction.email=t.client.email,this.client=t.client}removeDetail(t,i){t.id>0&&this.transaction.detailsremove.push(t),this.transaction.details.splice(i,1),this.calculateTotal()}calculateTotal(){this.transaction.neto=0,this.transaction.total=0;let t=0,i=0,e=this.transaction.details;for(let n=0;n<e.length;n++)e[n].totalmoney=e[n].amount*e[n].unitpricesale,i+=e[n].amount*e[n].unitpricesale,t+=e[n].totalmoney,e[n].total=e[n].totalmoney;this.transaction.neto=0==this.userService.setting.includedigv?t:t/(1*this.userService.igv.valor+1),this.transaction.igv=0==this.userService.setting.includedigv||0==this.transaction.applytax?0:this.transaction.neto*this.userService.igv.valor,this.transaction.total=this.transaction.neto+this.transaction.igv,this.transaction.total=Math.round(100*this.transaction.total)/100,this.transaction.neto=Math.round(100*this.transaction.neto)/100,this.transaction.igv=Math.round(100*this.transaction.igv)/100}}return t.\u0275fac=function(i){return new(i||t)(l.Pb(n.f),l.Pb(d.a),l.Pb(C.a),l.Pb(b.a),l.Pb(h.d),l.Pb(o.a),l.Pb(B.a),l.Pb(x.a),l.Pb(H.e),l.Pb(o.e))},t.\u0275cmp=l.Jb({type:t,selectors:[["app-notecredit"]],decls:61,vars:29,consts:[[1,"container-mobile"],[1,"flex1-mobile"],[1,"card"],[1,"wrapper-mobile"],[1,"table-mobile"],[1,"row-mobile","header-green"],[1,"cell-mobile"],[1,"cell-mobile","detail-amount"],["class","row-mobile",4,"ngFor","ngForOf"],[1,"row-mobile"],[1,"cell-mobile","texto","btn-primary"],[1,"flex2-mobile"],["nz-form","",3,"formGroup"],[1,"padding-add"],[3,"nzSm","nzXs"],[3,"identitynumber","subjectrolid","vouchertypeid","subjectrolcategoryid","transactionclient"],[3,"ngModel","ngModelOptions","ngModelChange"],[3,"nzValue","nzLabel",4,"ngFor","ngForOf"],[1,"floating-button",2,"text-align","center"],["type","button",1,"btn","btn-success","waves-effect","waves-light","m-r-10",3,"disabled","click"],["routerLink","/sales",1,"btn","btn-inverse","waves-effect","waves-light"],["data-title","Descripcion",1,"cell-mobile"],["type","text",1,"form-control",3,"ngModel","ngModelOptions","ngModelChange"],["data-title","Cantidad",1,"cell-mobile"],["type","text",1,"form-control",3,"ngModel","ngModelOptions","ngModelChange","blur"],["data-title","Precio",1,"cell-mobile"],["data-plus-as-tab","true","type","text",1,"form-control",3,"ngModel","ngModelOptions","ngModelChange","blur"],["data-title","Sub Total",1,"cell-mobile"],[1,"cell-mobile",2,"width","120px"],[1,"btn","btn-danger","btn-xs",3,"click"],[1,"fa","fa-trash"],[3,"nzValue","nzLabel"]],template:function(t,i){1&t&&(l.Vb(0,"div",0),l.Vb(1,"div",1),l.Vb(2,"div",2),l.Vb(3,"div",3),l.Vb(4,"div",4),l.Vb(5,"div",5),l.Vb(6,"div",6),l.Hc(7,"Descripcion"),l.Ub(),l.Vb(8,"div",7),l.Hc(9,"Cantidad"),l.Ub(),l.Vb(10,"div",7),l.Hc(11,"Precio"),l.Ub(),l.Vb(12,"div",6),l.Hc(13,"Sub Total"),l.Ub(),l.Vb(14,"div",6),l.Hc(15,"Accion"),l.Ub(),l.Ub(),l.Fc(16,W,13,13,"div",8),l.Vb(17,"div",9),l.Qb(18,"div",6),l.Qb(19,"div",6),l.Qb(20,"div",6),l.Vb(21,"div",6),l.Hc(22," SubTotal"),l.Ub(),l.Vb(23,"div",6),l.Hc(24),l.jc(25,"currency"),l.Ub(),l.Ub(),l.Vb(26,"div",9),l.Qb(27,"div",6),l.Qb(28,"div",6),l.Qb(29,"div",6),l.Vb(30,"div",6),l.Hc(31," IGV "),l.Ub(),l.Vb(32,"div",6),l.Hc(33),l.jc(34,"currency"),l.Ub(),l.Ub(),l.Vb(35,"div",9),l.Qb(36,"div",6),l.Qb(37,"div",6),l.Qb(38,"div",6),l.Vb(39,"div",10),l.Hc(40," TOTAL"),l.Ub(),l.Vb(41,"div",10),l.Hc(42),l.jc(43,"currency"),l.Ub(),l.Ub(),l.Ub(),l.Ub(),l.Ub(),l.Ub(),l.Vb(44,"div",11),l.Vb(45,"form",12),l.Vb(46,"div",2),l.Vb(47,"nz-form-item",13),l.Vb(48,"nz-form-control",14),l.Vb(49,"app-select-person",15),l.fc("transactionclient",function(t){return i.selectClientChange(t)}),l.Ub(),l.Ub(),l.Ub(),l.Vb(50,"nz-form-item",13),l.Vb(51,"nz-form-label",14),l.Hc(52,"Motivos"),l.Ub(),l.Vb(53,"nz-form-control",14),l.Vb(54,"nz-select",16),l.fc("ngModelChange",function(t){return i.transaction.motivesid=t}),l.Fc(55,K,1,2,"nz-option",17),l.Ub(),l.Ub(),l.Ub(),l.Ub(),l.Ub(),l.Vb(56,"div",18),l.Vb(57,"button",19),l.fc("click",function(){return i.save()}),l.Hc(58,"Guardar"),l.Ub(),l.Vb(59,"button",20),l.Hc(60,"Cancelar"),l.Ub(),l.Ub(),l.Ub(),l.Ub()),2&t&&(l.Bb(16),l.oc("ngForOf",i.transaction.details),l.Bb(8),l.Jc(" ",l.lc(25,19,i.transaction.neto,"S/"),""),l.Bb(9),l.Jc(" ",l.lc(34,22,i.transaction.igv,"S/")," "),l.Bb(9),l.Jc(" ",l.lc(43,25,i.transaction.total,"S/"),""),l.Bb(3),l.oc("formGroup",i.form),l.Bb(3),l.oc("nzSm",24)("nzXs",24),l.Bb(1),l.oc("identitynumber",i.identitynumberdoc)("subjectrolid",i.subjectrolid)("vouchertypeid",i.vouchertypeid)("subjectrolcategoryid",2),l.Bb(2),l.oc("nzSm",6)("nzXs",24),l.Bb(2),l.oc("nzSm",14)("nzXs",24),l.Bb(1),l.oc("ngModel",i.transaction.motivesid)("ngModelOptions",l.rc(28,_)),l.Bb(1),l.oc("ngForOf",i.motives),l.Bb(2),l.oc("disabled",i.isSubmitted))},directives:[n.n,h.x,h.n,h.h,P.c,P.a,A.a,k.b,h.m,h.p,o.f,h.c,k.a],pipes:[n.d],styles:[".padding-add[_ngcontent-%COMP%] {\n        padding: 5px;\n      }\n\n      .texto[_ngcontent-%COMP%]{\n\n        font-weight:bold;\n      }\n      .detail-amount[_ngcontent-%COMP%]{\n        width: 15%;\n      }\n\n      nz-select[_ngcontent-%COMP%] {\n        width: 200px;\n      }"]}),t})(),data:{title:"Generar Nota de Credito"}}];let q=(()=>{class t{}return t.\u0275mod=l.Nb({type:t}),t.\u0275inj=l.Mb({factory:function(i){return new(i||t)},imports:[[o.i.forChild(R)],o.i]}),t})(),Z=(()=>{class t{}return t.\u0275mod=l.Nb({type:t}),t.\u0275inj=l.Mb({factory:function(i){return new(i||t)},imports:[[n.c,q]]}),t})()}}]);