!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function i(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{U1Ny:function(e,n,o){"use strict";o.r(n),o.d(n,"SalesModule",function(){return rt});var a=o("ofXK"),c=o("tyNb"),r=o("VKBe"),s=o("1kSV"),l=o("PSD3"),b=o.n(l),d=o("fXoL"),u=o("NCuw"),h=o("CFL1"),m=o("ed8r"),v=o("3Pt+");function f(t,e){1&t&&(d.Vb(0,"div",2),d.Vb(1,"div",3),d.Vb(2,"div",4),d.Vb(3,"span"),d.Hc(4,"Caja Cerrada. "),d.Ub(),d.Vb(5,"span"),d.Hc(6,"Para generar una transaccion debe aperturar su caja"),d.Ub(),d.Ub(),d.Ub(),d.Ub())}var p=function(){return["../expense/","new"]};function g(t,e){1&t&&(d.Vb(0,"div",22),d.Vb(1,"button",23),d.Hc(2," Salida de Dinero "),d.Ub(),d.Ub()),2&t&&(d.Bb(1),d.oc("routerLink",d.rc(1,p)))}var y=function(){return["../income/","new"]};function V(t,e){1&t&&(d.Vb(0,"div",22),d.Vb(1,"button",24),d.Hc(2," Ingreso de Dinero "),d.Ub(),d.Ub()),2&t&&(d.Bb(1),d.oc("routerLink",d.rc(1,y)))}var U=function(t){return[t]};function M(t,e){if(1&t&&(d.Vb(0,"button",36),d.Hc(1," Salida"),d.Ub()),2&t){var i=d.ic().$implicit;d.oc("routerLink",d.sc(1,U,"../expense/"+i.subtransactionid))}}function S(t,e){if(1&t&&(d.Vb(0,"button",37),d.Hc(1,"Ingreso"),d.Ub()),2&t){var i=d.ic().$implicit;d.oc("routerLink",d.sc(1,U,"../income/"+i.subtransactionid))}}function z(t,e){if(1&t){var i=d.Wb();d.Vb(0,"div",25),d.Vb(1,"div",26),d.Fc(2,M,2,3,"button",27),d.Fc(3,S,2,3,"button",28),d.Vb(4,"button",29),d.fc("click",function(){d.yc(i);var t=e.$implicit;return d.ic(2).prepareDelete(t)}),d.Qb(5,"i",30),d.Ub(),d.Ub(),d.Vb(6,"div",31),d.Hc(7),d.Ub(),d.Vb(8,"div",32),d.Hc(9),d.jc(10,"date"),d.Ub(),d.Vb(11,"div",33),d.Hc(12),d.Ub(),d.Vb(13,"div",34),d.Hc(14),d.Ub(),d.Vb(15,"div",35),d.Hc(16),d.Ub(),d.Ub()}if(2&t){var n=e.$implicit;d.Bb(2),d.oc("ngIf",4==n.transationtypeid),d.Bb(1),d.oc("ngIf",31==n.transationtypeid),d.Bb(4),d.Ic(n.name),d.Bb(2),d.Ic(d.lc(10,7,n.date,"dd/MM/yyyy HH:mm:ss")),d.Bb(3),d.Ic(n.comment2),d.Bb(2),d.Ic(n.employed),d.Bb(2),d.Ic(n.total)}}function w(t,e){if(1&t){var i=d.Wb();d.Vb(0,"ngb-pagination",38),d.fc("pageChange",function(t){return d.yc(i),d.ic(2).page=t})("pageChange",function(t){return d.yc(i),d.ic(2).loadPage(t)}),d.Ub()}if(2&t){var n=d.ic(2);d.oc("collectionSize",n.totalItems)("page",n.page)}}function C(t,e){if(1&t){var i=d.Wb();d.Vb(0,"div"),d.Vb(1,"div",5),d.Vb(2,"div",6),d.Vb(3,"label",7),d.Hc(4,"Fecha Inicio"),d.Ub(),d.Vb(5,"div",8),d.Vb(6,"ejs-datetimepicker",9),d.fc("ngModelChange",function(t){return d.yc(i),d.ic().dateinit=t}),d.Ub(),d.Ub(),d.Vb(7,"label",10),d.Hc(8,"Fecha Final"),d.Ub(),d.Vb(9,"div",8),d.Vb(10,"ejs-datetimepicker",11),d.fc("ngModelChange",function(t){return d.yc(i),d.ic().dateend=t}),d.Ub(),d.Ub(),d.Vb(11,"div",10),d.Vb(12,"button",12),d.fc("click",function(){return d.yc(i),d.ic().search("")}),d.Hc(13,"Buscar"),d.Ub(),d.Ub(),d.Fc(14,g,3,2,"div",13),d.Fc(15,V,3,2,"div",13),d.Ub(),d.Vb(16,"h3",14),d.Hc(17,"Registrados ("),d.Vb(18,"small"),d.Hc(19),d.Ub(),d.Hc(20,")"),d.Ub(),d.Vb(21,"div",15),d.Vb(22,"div",16),d.Vb(23,"div",17),d.Vb(24,"div",18),d.Hc(25,"Accion"),d.Ub(),d.Vb(26,"div",18),d.Hc(27,"Estado"),d.Ub(),d.Vb(28,"div",18),d.Hc(29,"Fecha"),d.Ub(),d.Vb(30,"div",18),d.Hc(31,"Descripcion"),d.Ub(),d.Vb(32,"div",18),d.Hc(33,"Empleado"),d.Ub(),d.Vb(34,"div",18),d.Hc(35,"Monto"),d.Ub(),d.Ub(),d.Fc(36,z,17,10,"div",19),d.Ub(),d.Ub(),d.Vb(37,"div",20),d.Fc(38,w,1,2,"ngb-pagination",21),d.Ub(),d.Ub(),d.Ub()}if(2&t){var n=d.ic();d.Bb(6),d.oc("ngModel",n.dateinit),d.Bb(4),d.oc("ngModel",n.dateend),d.Bb(4),d.oc("ngIf",n.salesService.statusCashbox),d.Bb(1),d.oc("ngIf",n.salesService.statusCashbox),d.Bb(4),d.Ic(n.totalItems),d.Bb(17),d.oc("ngForOf",n.transactions),d.Bb(2),d.oc("ngIf",n.showPagination)}}var B,x=((B=function(){function e(i,n,o,a){t(this,e),this.ngbPaginationConfig=i,this.salesService=n,this.datepipe=o,this.userService=a,this.today=new Date,this.dateinit=new Date(this.today.getFullYear(),this.today.getMonth()),this.dateend=new Date(this.today.getFullYear(),this.today.getMonth()+1,0),this.totalItems=0,this.page=1,this.previousPage=1,this.showPagination=!0,this.size=10,this.order="id",this.filter="",this.asc=!0,this.load=!0,this.statecashbox=!1,this.ngbPaginationConfig.boundaryLinks=!0}return i(e,[{key:"ngOnInit",value:function(){this.list(this.page-1)}},{key:"list",value:function(t){var e=this;this.load=!0,this.salesService.listCashboxflow(t,this.size,this.order,this.asc,this.filter,this.datepipe.transform(this.dateinit,"dd/MM/yyyy"),this.datepipe.transform(this.dateend,"dd/MM/yyyy"),this.userService.subsidiaryid).subscribe(function(t){t.content.length>0&&(e.totalItems=t.totalElements,e.showPagination=!0,e.transactions=t.content),e.load=!1})}},{key:"loadPage",value:function(t){t!==this.previousPage&&(this.previousPage=t,this.list(this.page-1))}},{key:"search",value:function(t){this.filter=t,this.previousPage=1,this.page=1,this.filter.length<=0&&(this.filter=""),this.list(0)}},{key:"prepareDelete",value:function(t){var e=this;b.a.fire({title:"Esta a punto de el Flujo de Caja",showCancelButton:!0,confirmButtonText:"Si, Deseo Eliminar"}).then(function(i){i.isConfirmed&&(e.salesService.deleteCashboxflow(t.id),e.previousPage=1,e.page=1,e.list(0))})}}]),e}()).\u0275fac=function(t){return new(t||B)(d.Pb(s.c),d.Pb(u.a),d.Pb(a.f),d.Pb(h.a))},B.\u0275cmp=d.Jb({type:B,selectors:[["app-cashboxflows"]],features:[d.Ab([s.c])],decls:2,vars:2,consts:[["class","row animated fadeIn",4,"ngIf"],[4,"ngIf"],[1,"row","animated","fadeIn"],[1,"col-sm-12"],[1,"alert","alert-danger","text-center"],[1,"card",2,"padding","2px"],[1,"col-md-12","row"],["col-md-2",""],[1,"col-md-2","form-group"],["id","dateinit","placeholder","Select a datetime ","format","dd/MM/yyyy",3,"ngModel","ngModelChange"],[1,"col-md-1"],["id","dateend","placeholder","Select a datetime ","format","dd/MM/yyyy",3,"ngModel","ngModelChange"],["type","submit",1,"btn","btn-success","waves-effect","waves-light",3,"click"],["class","text-right col-md-2",4,"ngIf"],[1,"card-title"],[1,"wrapper-mobile"],[1,"table-mobile"],[1,"row-mobile","header-mobile"],[1,"cell-mobile"],["class","row-mobile",4,"ngFor","ngForOf"],[2,"position","relative","left","30%"],[3,"collectionSize","page","pageChange",4,"ngIf"],[1,"text-right","col-md-2"],["type","button",1,"btn","waves-effect","waves-light","btn-rounded","btn-danger",3,"routerLink"],["type","button",1,"btn","waves-effect","waves-light","btn-rounded","btn-primary",3,"routerLink"],[1,"row-mobile"],["data-title","Accion",1,"cell-mobile",2,"width","180px"],["title","Egresos","class","btn btn-danger btn-xs waves-effect waves-light w-50",3,"routerLink",4,"ngIf"],["title","Ingresos","class","btn btn-primary btn-xs waves-effect waves-light  w-50",3,"routerLink",4,"ngIf"],["title","Eliminar Caja",1,"btn","btn-danger","btn-xs","waves-effect","waves-light","m-l-10",3,"click"],[1,"fa","fa-trash"],["data-title","Estado",1,"cell-mobile"],["data-title","Fecha",1,"cell-mobile"],["data-title","Descripcion",1,"cell-mobile"],["data-title","Empleado",1,"cell-mobile"],["data-title","Monto",1,"cell-mobile"],["title","Egresos",1,"btn","btn-danger","btn-xs","waves-effect","waves-light","w-50",3,"routerLink"],["title","Ingresos",1,"btn","btn-primary","btn-xs","waves-effect","waves-light","w-50",3,"routerLink"],[3,"collectionSize","page","pageChange"]],template:function(t,e){1&t&&(d.Fc(0,f,7,0,"div",0),d.Fc(1,C,39,7,"div",1)),2&t&&(d.oc("ngIf",0==e.salesService.statusCashbox),d.Bb(1),d.oc("ngIf",!e.load))},directives:[a.o,m.a,v.m,v.p,a.n,c.f,s.b],pipes:[a.f],styles:[""]}),B),k=o("/67R"),H=o("K7Ed"),P=o("LjSU"),D=o("Rm4T"),O=o("B+r4"),F=o("OzZK"),T=o("RwU8"),j=o("C2AL"),I=o("FwiY"),Q=o("0lU3"),L=o("zAKX"),G=function(){return{standalone:!0}};function $(t,e){if(1&t){var i=d.Wb();d.Vb(0,"div",12),d.Vb(1,"div",27),d.Vb(2,"input",21),d.fc("ngModelChange",function(t){return e.$implicit.product=t}),d.Ub(),d.Ub(),d.Vb(3,"div",28),d.Vb(4,"input",29),d.fc("ngModelChange",function(t){return e.$implicit.amount=t})("blur",function(){return d.yc(i),d.ic().calculateTotal()}),d.Ub(),d.Ub(),d.Vb(5,"div",30),d.Vb(6,"input",31),d.fc("ngModelChange",function(t){return e.$implicit.unitpricesale=t})("blur",function(){return d.yc(i),d.ic().calculateTotal()}),d.Ub(),d.Ub(),d.Vb(7,"div",32),d.Hc(8),d.jc(9,"currency"),d.Ub(),d.Vb(10,"div",33),d.Vb(11,"button",34),d.fc("click",function(){d.yc(i);var t=e.$implicit,n=e.index;return d.ic().removeDetail(t,n)}),d.Qb(12,"i",35),d.Ub(),d.Ub(),d.Ub()}if(2&t){var n=e.$implicit;d.Bb(2),d.oc("ngModel",n.product)("ngModelOptions",d.rc(10,G)),d.Bb(2),d.oc("ngModel",n.amount)("ngModelOptions",d.rc(11,G)),d.Bb(2),d.oc("ngModel",n.unitpricesale)("ngModelOptions",d.rc(12,G)),d.Bb(2),d.Ic(d.lc(9,7,n.totalmoney,"S/"))}}function X(t,e){if(1&t&&d.Qb(0,"nz-option",36),2&t){var i=e.$implicit;d.oc("nzValue",i.employedid)("nzLabel",i.businessname)}}var E,Y=function(){return["dd/MM/yyyy"]},J=((E=function(){function e(i,n,o,a,c,r,s,l,b,d){var u=this;t(this,e),this.datepipe=i,this.userService=n,this.clientService=o,this.saleService=a,this.formBuilder=c,this.router=r,this.businessobjectService=l,this.settingsService=b,this.i18n=d,this.employeds=[],this.load=!0,this.isSubmitted=!1,this.identitynumberdoc="",this.subjectrolid=1,this.configurationUser={},this.transaction={email:"",details:[],total:0,employedid:this.userService.employedid,dateinit:new Date,vouchertypeid:16,transactiontypeid:4},s.params.subscribe(function(t){u.id=t.id,"new"!==u.id&&u.loadCashboxflow(u.id)})}return i(e,[{key:"ngOnInit",value:function(){this.validateFormGroup(),this.listEmployeds(),this.saleService.statusCashboxs(this.userService.subsidiaryid,this.datepipe.transform(new Date,"dd/MM/yyyy"),this.datepipe.transform(new Date,"dd/MM/yyyy")),console.log(this.saleService.statusCashbox)}},{key:"validateFormGroup",value:function(){this.form=this.formBuilder.group({})}},{key:"save",value:function(){var t=this;if(this.isSubmitted=!0,!this.form.invalid){if(this.transaction.dateinit&&this.stringDateformatDDMMYY(this.transaction.dateinit),this.transaction.details.length<=0)return alertify.error("No Tiene Detalles... "),void(this.isSubmitted=!1);this.saleService.saveCashboxflow(this.transaction,"sales/pay-sale").subscribe({next:function(e){return b.a.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0}).fire({icon:"success",title:"Se Guardo la salida de Dinero"}),t.isSubmitted=!1,t.router.navigate(["/sales/cashboxflows"])},error:function(e){console.error("There was an error!",e),t.isSubmitted=!1}})}}},{key:"stringDateformatDDMMYY",value:function(t){this.transaction.startdate=this.datepipe.transform(t,"dd/MM/yyyy HH:mm:ss")}},{key:"loadCashboxflow",value:function(t){var e=this;this.saleService.loadCashboxflow(t).subscribe(function(t){e.transaction=t,e.transaction.dateinit=new Date(t.date),e.calculateTotal()})}},{key:"removeDetail",value:function(t,e){t.id>0&&this.transaction.detailsremove.push(t),this.transaction.details.splice(e,1),this.calculateTotal()}},{key:"addProductToDetailsbasic",value:function(){var t=new Date;new Date(t.getFullYear(),t.getMonth(),1),new Date(t.getFullYear(),t.getMonth()+1,0),this.transaction.details.push({comment:"",amount:1,unitmeasure:"NIU",product:"",stock:0,businessobjectid:1,businessobjectdetailid:1,valuedbusinessobjectid:1,unitpricesale:0,unitpricereal:0,totalmoney:0,subtransactionid:0,subtransactionorderid:0,nameobjectrole:"Servicio",id:0,unitpricepurchase:0,operationaffectedid:30,minimalPrice:0,stockTemp:0,code:""}),this.calculateTotal()}},{key:"calculateTotal",value:function(){this.transaction.neto=0,this.transaction.total=0;for(var t=0,e=this.transaction.details,i=0;i<e.length;i++)e[i].totalmoney=e[i].amount*e[i].unitpricesale,e[i].amount,e[i].unitpricesale,t+=e[i].totalmoney,e[i].total=e[i].totalmoney;this.transaction.neto=0==this.userService.setting.includedigv?t:t/(1*this.userService.igv.valor+1),this.transaction.igv=0==this.userService.setting.includedigv||0==this.transaction.applytax?0:this.transaction.neto*this.userService.igv.valor,this.transaction.total=this.transaction.neto+this.transaction.igv,this.transaction.total=Math.round(100*this.transaction.total)/100,this.transaction.neto=Math.round(100*this.transaction.neto)/100,this.transaction.igv=Math.round(100*this.transaction.igv)/100}},{key:"listEmployeds",value:function(){var t=this;this.load=!0,this.settingsService.listEployed().subscribe(function(e){t.employeds=e})}},{key:"f",get:function(){return this.form.controls}}]),e}()).\u0275fac=function(t){return new(t||E)(d.Pb(a.f),d.Pb(h.a),d.Pb(k.a),d.Pb(u.a),d.Pb(v.d),d.Pb(c.e),d.Pb(c.a),d.Pb(H.a),d.Pb(P.a),d.Pb(D.e))},E.\u0275cmp=d.Jb({type:E,selectors:[["app-expense"]],decls:74,vars:42,consts:[[1,"container-mobile"],[1,"flex1-mobile"],[1,"card"],[3,"nzSpan"],["nz-button","","nzType","primary","nzShape","circle",3,"click"],["nz-icon","","nzType","plus-circle","nzTheme","twotone"],[1,"wrapper-mobile"],[1,"table-mobile"],[1,"row-mobile","header-green"],[1,"cell-mobile"],[1,"cell-mobile","detail-amount"],["class","row-mobile",4,"ngFor","ngForOf"],[1,"row-mobile"],[1,"cell-mobile","texto","btn-primary"],[1,"flex2-mobile"],["nz-form","",3,"formGroup"],[1,"padding-add"],[3,"nzSm","nzXs"],["nz-row","",3,"nzGutter"],["nz-col","",3,"nzSpan"],[3,"nzFormat","ngModel","ngModelOptions","ngModelChange"],["type","text",1,"form-control",3,"ngModel","ngModelOptions","ngModelChange"],[3,"ngModel","ngModelOptions","ngModelChange"],[3,"nzValue","nzLabel",4,"ngFor","ngForOf"],[1,"floating-button",2,"text-align","center"],["type","button",1,"btn","btn-primary","waves-effect","waves-light","m-r-10",3,"disabled","click"],["routerLink","/sales/cashboxflows",1,"btn","btn-inverse","waves-effect","waves-light"],["data-title","Descripcion",1,"cell-mobile"],["data-title","Cantidad",1,"cell-mobile"],["type","text",1,"form-control",3,"ngModel","ngModelOptions","ngModelChange","blur"],["data-title","Precio",1,"cell-mobile"],["data-plus-as-tab","true","type","text",1,"form-control",3,"ngModel","ngModelOptions","ngModelChange","blur"],["data-title","Sub Total",1,"cell-mobile"],[1,"cell-mobile",2,"width","120px"],[1,"btn","btn-danger","btn-xs",3,"click"],[1,"fa","fa-trash"],[3,"nzValue","nzLabel"]],template:function(t,e){1&t&&(d.Vb(0,"div",0),d.Vb(1,"div",1),d.Vb(2,"div",2),d.Vb(3,"nz-form-item"),d.Vb(4,"nz-form-control",3),d.Vb(5,"button",4),d.fc("click",function(){return e.addProductToDetailsbasic()}),d.Qb(6,"i",5),d.Ub(),d.Ub(),d.Ub(),d.Vb(7,"div",6),d.Vb(8,"div",7),d.Vb(9,"div",8),d.Vb(10,"div",9),d.Hc(11,"Descripcion"),d.Ub(),d.Vb(12,"div",10),d.Hc(13,"Cantidad"),d.Ub(),d.Vb(14,"div",10),d.Hc(15,"Precio"),d.Ub(),d.Vb(16,"div",9),d.Hc(17,"Sub Total"),d.Ub(),d.Vb(18,"div",9),d.Hc(19,"Accion"),d.Ub(),d.Ub(),d.Fc(20,$,13,13,"div",11),d.Vb(21,"div",12),d.Qb(22,"div",9),d.Qb(23,"div",9),d.Qb(24,"div",9),d.Vb(25,"div",9),d.Hc(26," SubTotal"),d.Ub(),d.Vb(27,"div",9),d.Hc(28),d.jc(29,"currency"),d.Ub(),d.Ub(),d.Vb(30,"div",12),d.Qb(31,"div",9),d.Qb(32,"div",9),d.Qb(33,"div",9),d.Vb(34,"div",9),d.Hc(35," IGV "),d.Ub(),d.Vb(36,"div",9),d.Hc(37),d.jc(38,"currency"),d.Ub(),d.Ub(),d.Vb(39,"div",12),d.Qb(40,"div",9),d.Qb(41,"div",9),d.Qb(42,"div",9),d.Vb(43,"div",13),d.Hc(44," TOTAL"),d.Ub(),d.Vb(45,"div",13),d.Hc(46),d.jc(47,"currency"),d.Ub(),d.Ub(),d.Ub(),d.Ub(),d.Ub(),d.Ub(),d.Vb(48,"div",14),d.Vb(49,"form",15),d.Vb(50,"div",2),d.Vb(51,"nz-form-item",16),d.Vb(52,"nz-form-label",17),d.Hc(53,"Fecha"),d.Ub(),d.Vb(54,"nz-form-control",17),d.Vb(55,"div",18),d.Vb(56,"div",19),d.Vb(57,"nz-date-picker",20),d.fc("ngModelChange",function(t){return e.transaction.dateinit=t}),d.Ub(),d.Ub(),d.Ub(),d.Ub(),d.Ub(),d.Vb(58,"nz-form-item",16),d.Vb(59,"nz-form-label",17),d.Hc(60,"Documento"),d.Ub(),d.Vb(61,"nz-form-control",17),d.Vb(62,"input",21),d.fc("ngModelChange",function(t){return e.transaction.comment2=t}),d.Ub(),d.Ub(),d.Ub(),d.Vb(63,"nz-form-item",16),d.Vb(64,"nz-form-label",17),d.Hc(65,"Usuario"),d.Ub(),d.Vb(66,"nz-form-control",17),d.Vb(67,"nz-select",22),d.fc("ngModelChange",function(t){return e.transaction.employedid=t}),d.Fc(68,X,1,2,"nz-option",23),d.Ub(),d.Ub(),d.Ub(),d.Vb(69,"div",24),d.Vb(70,"button",25),d.fc("click",function(){return e.save()}),d.Hc(71,"Guardar"),d.Ub(),d.Vb(72,"button",26),d.Hc(73,"Cancelar"),d.Ub(),d.Ub(),d.Ub(),d.Ub(),d.Ub(),d.Ub()),2&t&&(d.Bb(4),d.oc("nzSpan",1),d.Bb(16),d.oc("ngForOf",e.transaction.details),d.Bb(8),d.Jc(" ",d.lc(29,29,e.transaction.neto,"S/"),""),d.Bb(9),d.Jc(" ",d.lc(38,32,e.transaction.igv,"S/")," "),d.Bb(9),d.Jc(" ",d.lc(47,35,e.transaction.total,"S/"),""),d.Bb(3),d.oc("formGroup",e.form),d.Bb(3),d.oc("nzSm",6)("nzXs",24),d.Bb(2),d.oc("nzSm",14)("nzXs",24),d.Bb(1),d.oc("nzGutter",8),d.Bb(1),d.oc("nzSpan",16),d.Bb(1),d.oc("nzFormat",d.rc(38,Y))("ngModel",e.transaction.dateinit)("ngModelOptions",d.rc(39,G)),d.Bb(2),d.oc("nzSm",6)("nzXs",24),d.Bb(2),d.oc("nzSm",14)("nzXs",24),d.Bb(1),d.oc("ngModel",e.transaction.comment2)("ngModelOptions",d.rc(40,G)),d.Bb(2),d.oc("nzSm",6)("nzXs",24),d.Bb(2),d.oc("nzSm",14)("nzXs",24),d.Bb(1),d.oc("ngModel",e.transaction.employedid)("ngModelOptions",d.rc(41,G)),d.Bb(1),d.oc("ngForOf",e.employeds),d.Bb(2),d.oc("disabled",e.isSubmitted))},directives:[O.c,O.a,F.a,T.a,j.a,I.b,a.n,v.x,v.n,v.h,Q.a,v.m,v.p,v.c,L.b,c.f,L.a],pipes:[a.d],styles:[".padding-add[_ngcontent-%COMP%] {\n        padding: 5px;\n      }\n\n      .texto[_ngcontent-%COMP%]{\n\n        font-weight:bold;\n      }\n      .detail-amount[_ngcontent-%COMP%]{\n        width: 15%;\n      }\n\n      nz-select[_ngcontent-%COMP%] {\n        width: 200px;\n      }"]}),E),N=function(){return{standalone:!0}};function A(t,e){if(1&t){var i=d.Wb();d.Vb(0,"div",12),d.Vb(1,"div",27),d.Vb(2,"input",21),d.fc("ngModelChange",function(t){return e.$implicit.product=t}),d.Ub(),d.Ub(),d.Vb(3,"div",28),d.Vb(4,"input",29),d.fc("ngModelChange",function(t){return e.$implicit.amount=t})("blur",function(){return d.yc(i),d.ic().calculateTotal()}),d.Ub(),d.Ub(),d.Vb(5,"div",30),d.Vb(6,"input",31),d.fc("ngModelChange",function(t){return e.$implicit.unitpricesale=t})("blur",function(){return d.yc(i),d.ic().calculateTotal()}),d.Ub(),d.Ub(),d.Vb(7,"div",32),d.Hc(8),d.jc(9,"currency"),d.Ub(),d.Vb(10,"div",33),d.Vb(11,"button",34),d.fc("click",function(){d.yc(i);var t=e.$implicit,n=e.index;return d.ic().removeDetail(t,n)}),d.Qb(12,"i",35),d.Ub(),d.Ub(),d.Ub()}if(2&t){var n=e.$implicit;d.Bb(2),d.oc("ngModel",n.product)("ngModelOptions",d.rc(10,N)),d.Bb(2),d.oc("ngModel",n.amount)("ngModelOptions",d.rc(11,N)),d.Bb(2),d.oc("ngModel",n.unitpricesale)("ngModelOptions",d.rc(12,N)),d.Bb(2),d.Ic(d.lc(9,7,n.totalmoney,"S/"))}}function _(t,e){if(1&t&&d.Qb(0,"nz-option",36),2&t){var i=e.$implicit;d.oc("nzValue",i.employedid)("nzLabel",i.businessname)}}var W,K=function(){return["dd/MM/yyyy"]},R=((W=function(){function e(i,n,o,a,c,r,s,l,b,d){var u=this;t(this,e),this.datepipe=i,this.userService=n,this.clientService=o,this.saleService=a,this.formBuilder=c,this.router=r,this.businessobjectService=l,this.settingsService=b,this.i18n=d,this.employeds=[],this.load=!0,this.isSubmitted=!1,this.identitynumberdoc="",this.subjectrolid=1,this.configurationUser={},this.transaction={email:"",details:[],total:0,employedid:this.userService.employedid,dateinit:new Date,vouchertypeid:35,transactiontypeid:31},s.params.subscribe(function(t){u.id=t.id,"new"!==u.id&&u.loadCashboxflow(u.id)})}return i(e,[{key:"ngOnInit",value:function(){this.validateFormGroup(),this.listEmployeds(),this.saleService.statusCashboxs(this.userService.subsidiaryid,this.datepipe.transform(new Date,"dd/MM/yyyy"),this.datepipe.transform(new Date,"dd/MM/yyyy")),console.log(this.saleService.statusCashbox)}},{key:"validateFormGroup",value:function(){this.form=this.formBuilder.group({})}},{key:"save",value:function(){var t=this;if(this.isSubmitted=!0,!this.form.invalid){if(this.transaction.dateinit&&this.stringDateformatDDMMYY(this.transaction.dateinit),this.transaction.details.length<=0)return alertify.error("No Tiene Detalles... "),void(this.isSubmitted=!1);this.saleService.saveCashboxflow(this.transaction,"sales/pay-sale").subscribe({next:function(e){return b.a.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0}).fire({icon:"success",title:"Se Guardo el ingreso de dinero"}),t.isSubmitted=!1,t.router.navigate(["/sales/cashboxflows"])},error:function(e){console.error("There was an error!",e),t.isSubmitted=!1}})}}},{key:"stringDateformatDDMMYY",value:function(t){this.transaction.startdate=this.datepipe.transform(t,"dd/MM/yyyy HH:mm:ss")}},{key:"loadCashboxflow",value:function(t){var e=this;this.saleService.loadCashboxflow(t).subscribe(function(t){e.transaction=t,e.transaction.dateinit=new Date(t.date),e.calculateTotal()})}},{key:"removeDetail",value:function(t,e){t.id>0&&this.transaction.detailsremove.push(t),this.transaction.details.splice(e,1),this.calculateTotal()}},{key:"addProductToDetailsbasic",value:function(){var t=new Date;new Date(t.getFullYear(),t.getMonth(),1),new Date(t.getFullYear(),t.getMonth()+1,0),this.transaction.details.push({comment:"",amount:1,unitmeasure:"NIU",product:"",stock:0,businessobjectid:1,businessobjectdetailid:1,valuedbusinessobjectid:1,unitpricesale:0,unitpricereal:0,totalmoney:0,subtransactionid:0,subtransactionorderid:0,nameobjectrole:"Servicio",id:0,unitpricepurchase:0,operationaffectedid:30,minimalPrice:0,stockTemp:0,code:""}),this.calculateTotal()}},{key:"calculateTotal",value:function(){this.transaction.neto=0,this.transaction.total=0;for(var t=0,e=this.transaction.details,i=0;i<e.length;i++)e[i].totalmoney=e[i].amount*e[i].unitpricesale,e[i].amount,e[i].unitpricesale,t+=e[i].totalmoney,e[i].total=e[i].totalmoney;this.transaction.neto=0==this.userService.setting.includedigv?t:t/(1*this.userService.igv.valor+1),this.transaction.igv=0==this.userService.setting.includedigv||0==this.transaction.applytax?0:this.transaction.neto*this.userService.igv.valor,this.transaction.total=this.transaction.neto+this.transaction.igv,this.transaction.total=Math.round(100*this.transaction.total)/100,this.transaction.neto=Math.round(100*this.transaction.neto)/100,this.transaction.igv=Math.round(100*this.transaction.igv)/100}},{key:"listEmployeds",value:function(){var t=this;this.load=!0,this.settingsService.listEployed().subscribe(function(e){t.employeds=e})}},{key:"f",get:function(){return this.form.controls}}]),e}()).\u0275fac=function(t){return new(t||W)(d.Pb(a.f),d.Pb(h.a),d.Pb(k.a),d.Pb(u.a),d.Pb(v.d),d.Pb(c.e),d.Pb(c.a),d.Pb(H.a),d.Pb(P.a),d.Pb(D.e))},W.\u0275cmp=d.Jb({type:W,selectors:[["app-income"]],decls:74,vars:42,consts:[[1,"container-mobile"],[1,"flex1-mobile"],[1,"card"],[3,"nzSpan"],["nz-button","","nzType","primary","nzShape","circle",3,"click"],["nz-icon","","nzType","plus-circle","nzTheme","twotone"],[1,"wrapper-mobile"],[1,"table-mobile"],[1,"row-mobile","header-green"],[1,"cell-mobile"],[1,"cell-mobile","detail-amount"],["class","row-mobile",4,"ngFor","ngForOf"],[1,"row-mobile"],[1,"cell-mobile","texto","btn-primary"],[1,"flex2-mobile"],["nz-form","",3,"formGroup"],[1,"padding-add"],[3,"nzSm","nzXs"],["nz-row","",3,"nzGutter"],["nz-col","",3,"nzSpan"],[3,"nzFormat","ngModel","ngModelOptions","ngModelChange"],["type","text",1,"form-control",3,"ngModel","ngModelOptions","ngModelChange"],[3,"ngModel","ngModelOptions","ngModelChange"],[3,"nzValue","nzLabel",4,"ngFor","ngForOf"],[1,"floating-button",2,"text-align","center"],["type","button",1,"btn","btn-primary","waves-effect","waves-light","m-r-10",3,"disabled","click"],["routerLink","/sales/cashboxflows",1,"btn","btn-inverse","waves-effect","waves-light"],["data-title","Descripcion",1,"cell-mobile"],["data-title","Cantidad",1,"cell-mobile"],["type","text",1,"form-control",3,"ngModel","ngModelOptions","ngModelChange","blur"],["data-title","Precio",1,"cell-mobile"],["data-plus-as-tab","true","type","text",1,"form-control",3,"ngModel","ngModelOptions","ngModelChange","blur"],["data-title","Sub Total",1,"cell-mobile"],[1,"cell-mobile",2,"width","120px"],[1,"btn","btn-danger","btn-xs",3,"click"],[1,"fa","fa-trash"],[3,"nzValue","nzLabel"]],template:function(t,e){1&t&&(d.Vb(0,"div",0),d.Vb(1,"div",1),d.Vb(2,"div",2),d.Vb(3,"nz-form-item"),d.Vb(4,"nz-form-control",3),d.Vb(5,"button",4),d.fc("click",function(){return e.addProductToDetailsbasic()}),d.Qb(6,"i",5),d.Ub(),d.Ub(),d.Ub(),d.Vb(7,"div",6),d.Vb(8,"div",7),d.Vb(9,"div",8),d.Vb(10,"div",9),d.Hc(11,"Descripcion"),d.Ub(),d.Vb(12,"div",10),d.Hc(13,"Cantidad"),d.Ub(),d.Vb(14,"div",10),d.Hc(15,"Precio"),d.Ub(),d.Vb(16,"div",9),d.Hc(17,"Sub Total"),d.Ub(),d.Vb(18,"div",9),d.Hc(19,"Accion"),d.Ub(),d.Ub(),d.Fc(20,A,13,13,"div",11),d.Vb(21,"div",12),d.Qb(22,"div",9),d.Qb(23,"div",9),d.Qb(24,"div",9),d.Vb(25,"div",9),d.Hc(26," SubTotal"),d.Ub(),d.Vb(27,"div",9),d.Hc(28),d.jc(29,"currency"),d.Ub(),d.Ub(),d.Vb(30,"div",12),d.Qb(31,"div",9),d.Qb(32,"div",9),d.Qb(33,"div",9),d.Vb(34,"div",9),d.Hc(35," IGV "),d.Ub(),d.Vb(36,"div",9),d.Hc(37),d.jc(38,"currency"),d.Ub(),d.Ub(),d.Vb(39,"div",12),d.Qb(40,"div",9),d.Qb(41,"div",9),d.Qb(42,"div",9),d.Vb(43,"div",13),d.Hc(44," TOTAL"),d.Ub(),d.Vb(45,"div",13),d.Hc(46),d.jc(47,"currency"),d.Ub(),d.Ub(),d.Ub(),d.Ub(),d.Ub(),d.Ub(),d.Vb(48,"div",14),d.Vb(49,"form",15),d.Vb(50,"div",2),d.Vb(51,"nz-form-item",16),d.Vb(52,"nz-form-label",17),d.Hc(53,"Fecha"),d.Ub(),d.Vb(54,"nz-form-control",17),d.Vb(55,"div",18),d.Vb(56,"div",19),d.Vb(57,"nz-date-picker",20),d.fc("ngModelChange",function(t){return e.transaction.dateinit=t}),d.Ub(),d.Ub(),d.Ub(),d.Ub(),d.Ub(),d.Vb(58,"nz-form-item",16),d.Vb(59,"nz-form-label",17),d.Hc(60,"Documento"),d.Ub(),d.Vb(61,"nz-form-control",17),d.Vb(62,"input",21),d.fc("ngModelChange",function(t){return e.transaction.comment2=t}),d.Ub(),d.Ub(),d.Ub(),d.Vb(63,"nz-form-item",16),d.Vb(64,"nz-form-label",17),d.Hc(65,"Usuario"),d.Ub(),d.Vb(66,"nz-form-control",17),d.Vb(67,"nz-select",22),d.fc("ngModelChange",function(t){return e.transaction.employedid=t}),d.Fc(68,_,1,2,"nz-option",23),d.Ub(),d.Ub(),d.Ub(),d.Vb(69,"div",24),d.Vb(70,"button",25),d.fc("click",function(){return e.save()}),d.Hc(71,"Guardar"),d.Ub(),d.Vb(72,"button",26),d.Hc(73,"Cancelar"),d.Ub(),d.Ub(),d.Ub(),d.Ub(),d.Ub(),d.Ub()),2&t&&(d.Bb(4),d.oc("nzSpan",1),d.Bb(16),d.oc("ngForOf",e.transaction.details),d.Bb(8),d.Jc(" ",d.lc(29,29,e.transaction.neto,"S/"),""),d.Bb(9),d.Jc(" ",d.lc(38,32,e.transaction.igv,"S/")," "),d.Bb(9),d.Jc(" ",d.lc(47,35,e.transaction.total,"S/"),""),d.Bb(3),d.oc("formGroup",e.form),d.Bb(3),d.oc("nzSm",6)("nzXs",24),d.Bb(2),d.oc("nzSm",14)("nzXs",24),d.Bb(1),d.oc("nzGutter",8),d.Bb(1),d.oc("nzSpan",16),d.Bb(1),d.oc("nzFormat",d.rc(38,K))("ngModel",e.transaction.dateinit)("ngModelOptions",d.rc(39,N)),d.Bb(2),d.oc("nzSm",6)("nzXs",24),d.Bb(2),d.oc("nzSm",14)("nzXs",24),d.Bb(1),d.oc("ngModel",e.transaction.comment2)("ngModelOptions",d.rc(40,N)),d.Bb(2),d.oc("nzSm",6)("nzXs",24),d.Bb(2),d.oc("nzSm",14)("nzXs",24),d.Bb(1),d.oc("ngModel",e.transaction.employedid)("ngModelOptions",d.rc(41,N)),d.Bb(1),d.oc("ngForOf",e.employeds),d.Bb(2),d.oc("disabled",e.isSubmitted))},directives:[O.c,O.a,F.a,T.a,j.a,I.b,a.n,v.x,v.n,v.h,Q.a,v.m,v.p,v.c,L.b,c.f,L.a],pipes:[a.d],styles:[".padding-add[_ngcontent-%COMP%] {\n        padding: 5px;\n      }\n\n      .texto[_ngcontent-%COMP%]{\n\n        font-weight:bold;\n      }\n      .detail-amount[_ngcontent-%COMP%]{\n        width: 15%;\n      }\n\n      nz-select[_ngcontent-%COMP%] {\n        width: 200px;\n      }"]}),W),q=o("iAHN"),Z=function(){return{standalone:!0}};function tt(t,e){if(1&t){var i=d.Wb();d.Vb(0,"div",9),d.Vb(1,"div",21),d.Vb(2,"input",22),d.fc("ngModelChange",function(t){return e.$implicit.product=t}),d.Ub(),d.Ub(),d.Vb(3,"div",23),d.Vb(4,"input",24),d.fc("ngModelChange",function(t){return e.$implicit.amount=t})("blur",function(){return d.yc(i),d.ic().calculateTotal()}),d.Ub(),d.Ub(),d.Vb(5,"div",25),d.Vb(6,"input",26),d.fc("ngModelChange",function(t){return e.$implicit.unitpricesale=t})("blur",function(){return d.yc(i),d.ic().calculateTotal()}),d.Ub(),d.Ub(),d.Vb(7,"div",27),d.Hc(8),d.jc(9,"currency"),d.Ub(),d.Vb(10,"div",28),d.Vb(11,"button",29),d.fc("click",function(){d.yc(i);var t=e.$implicit,n=e.index;return d.ic().removeDetail(t,n)}),d.Qb(12,"i",30),d.Ub(),d.Ub(),d.Ub()}if(2&t){var n=e.$implicit;d.Bb(2),d.oc("ngModel",n.product)("ngModelOptions",d.rc(10,Z)),d.Bb(2),d.oc("ngModel",n.amount)("ngModelOptions",d.rc(11,Z)),d.Bb(2),d.oc("ngModel",n.unitpricesale)("ngModelOptions",d.rc(12,Z)),d.Bb(2),d.Ic(d.lc(9,7,n.totalmoney,"S/"))}}function et(t,e){if(1&t&&d.Qb(0,"nz-option",31),2&t){var i=e.$implicit;d.oc("nzValue",i.id)("nzLabel",i.motives)}}var it,nt,ot,at=[{path:"",component:r.q,data:{title:"Listado Ventas"}},{path:":id/:identitynumber/:vouchertypeid",component:r.p,data:{title:"Venta"}},{path:"pay-sale/:amount/:subtransactionid/:subtransactionstateid",component:r.i,data:{title:"Pago De Venta"}},{path:"cashboxs",component:r.a,data:{title:"Apertura y Cierre de Caja"}},{path:"opening/:id",component:r.h,data:{title:"Apertura Caja"}},{path:"cashboxs/closing/:id/:openingdate",component:r.d,data:{title:"Cierre Caja"}},{path:"cashboxflows",component:x,data:{title:"Movimientos de Caja"}},{path:"expense/:id",component:J,data:{title:"Egresos de Caja"}},{path:"income/:id",component:R,data:{title:"Ingresos de Caja"}},{path:"notecredit/:id/:identitynumber/:vouchertypeid",component:(it=function(){function e(i,n,o,a,c,r,s,l,b,d){var u=this;t(this,e),this.datepipe=i,this.userService=n,this.clientService=o,this.saleService=a,this.formBuilder=c,this.businessobjectService=s,this.settingsService=l,this.i18n=b,this.router=d,this.load=!0,this.isSubmitted=!1,this.identitynumberdoc="",this.subjectrolid=1,this.transaction={typesaleid:1,email:"",details:[],total:0,employedid:this.userService.employedid,dateinit:new Date},r.params.subscribe(function(t){u.id=t.id,u.identitynumberdoc=t.identitynumber,u.vouchertypeid=t.vouchertypeid,"new"!==u.id&&u.loadSale(u.id)})}return i(e,[{key:"ngOnInit",value:function(){this.validateFormGroup(),this.listMotives()}},{key:"validateFormGroup",value:function(){this.form=this.formBuilder.group({})}},{key:"listMotives",value:function(){var t=this;this.load=!0,this.settingsService.listMotivesEntryNote().subscribe(function(e){t.motives=e})}},{key:"save",value:function(){var t=this;if(this.isSubmitted=!0,!this.form.invalid){if(this.transaction.dateinit&&this.stringDateformatDDMMYY(this.transaction.dateinit),this.transaction.details.length<=0)return alertify.error("No Tiene Detalles... "),void(this.isSubmitted=!1);this.saleService.saveNoteCreditDebit(this.transaction).subscribe({next:function(e){return b.a.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0}).fire({icon:"success",title:"Se Guardo la Nota de Venta "}),t.router.navigate(["/sales"])},error:function(t){return console.error("There was an error!",t)}})}}},{key:"stringDateformatDDMMYY",value:function(t){this.transaction.startdate=this.datepipe.transform(t,"dd/MM/yyyy HH:mm:ss")}},{key:"loadSale",value:function(t){var e=this;this.saleService.loadSale(t).subscribe(function(t){e.transaction=t,e.transaction.dateinit=new Date(t.date),e.transaction.subtransactionidold=t.subtransactionid,e.transaction.subtransactionstateidold=t.subtransactionstateid,delete e.transaction.subtransactionid,delete e.transaction.subtransactionstateid,e.calculateTotal()})}},{key:"selectClientChange",value:function(t){this.transaction.externalsubjectid=t.externalsubjectid,this.transaction.vouchertypeid=t.vouchertypeid,this.transaction.businessname=t.client.subject,this.transaction.address=t.client.address,this.transaction.identitynumber=t.client.identitynumber,this.transaction.email=t.client.email,this.client=t.client}},{key:"removeDetail",value:function(t,e){t.id>0&&this.transaction.detailsremove.push(t),this.transaction.details.splice(e,1),this.calculateTotal()}},{key:"calculateTotal",value:function(){this.transaction.neto=0,this.transaction.total=0;for(var t=0,e=this.transaction.details,i=0;i<e.length;i++)e[i].totalmoney=e[i].amount*e[i].unitpricesale,e[i].amount,e[i].unitpricesale,t+=e[i].totalmoney,e[i].total=e[i].totalmoney;this.transaction.neto=0==this.userService.setting.includedigv?t:t/(1*this.userService.igv.valor+1),this.transaction.igv=0==this.userService.setting.includedigv||0==this.transaction.applytax?0:this.transaction.neto*this.userService.igv.valor,this.transaction.total=this.transaction.neto+this.transaction.igv,this.transaction.total=Math.round(100*this.transaction.total)/100,this.transaction.neto=Math.round(100*this.transaction.neto)/100,this.transaction.igv=Math.round(100*this.transaction.igv)/100}},{key:"f",get:function(){return this.form.controls}}]),e}(),it.\u0275fac=function(t){return new(t||it)(d.Pb(a.f),d.Pb(h.a),d.Pb(k.a),d.Pb(u.a),d.Pb(v.d),d.Pb(c.a),d.Pb(H.a),d.Pb(P.a),d.Pb(D.e),d.Pb(c.e))},it.\u0275cmp=d.Jb({type:it,selectors:[["app-notecredit"]],decls:61,vars:29,consts:[[1,"container-mobile"],[1,"flex1-mobile"],[1,"card"],[1,"wrapper-mobile"],[1,"table-mobile"],[1,"row-mobile","header-green"],[1,"cell-mobile"],[1,"cell-mobile","detail-amount"],["class","row-mobile",4,"ngFor","ngForOf"],[1,"row-mobile"],[1,"cell-mobile","texto","btn-primary"],[1,"flex2-mobile"],["nz-form","",3,"formGroup"],[1,"padding-add"],[3,"nzSm","nzXs"],[3,"identitynumber","subjectrolid","vouchertypeid","subjectrolcategoryid","transactionclient"],[3,"ngModel","ngModelOptions","ngModelChange"],[3,"nzValue","nzLabel",4,"ngFor","ngForOf"],[1,"floating-button",2,"text-align","center"],["type","button",1,"btn","btn-success","waves-effect","waves-light","m-r-10",3,"disabled","click"],["routerLink","/sales",1,"btn","btn-inverse","waves-effect","waves-light"],["data-title","Descripcion",1,"cell-mobile"],["type","text",1,"form-control",3,"ngModel","ngModelOptions","ngModelChange"],["data-title","Cantidad",1,"cell-mobile"],["type","text",1,"form-control",3,"ngModel","ngModelOptions","ngModelChange","blur"],["data-title","Precio",1,"cell-mobile"],["data-plus-as-tab","true","type","text",1,"form-control",3,"ngModel","ngModelOptions","ngModelChange","blur"],["data-title","Sub Total",1,"cell-mobile"],[1,"cell-mobile",2,"width","120px"],[1,"btn","btn-danger","btn-xs",3,"click"],[1,"fa","fa-trash"],[3,"nzValue","nzLabel"]],template:function(t,e){1&t&&(d.Vb(0,"div",0),d.Vb(1,"div",1),d.Vb(2,"div",2),d.Vb(3,"div",3),d.Vb(4,"div",4),d.Vb(5,"div",5),d.Vb(6,"div",6),d.Hc(7,"Descripcion"),d.Ub(),d.Vb(8,"div",7),d.Hc(9,"Cantidad"),d.Ub(),d.Vb(10,"div",7),d.Hc(11,"Precio"),d.Ub(),d.Vb(12,"div",6),d.Hc(13,"Sub Total"),d.Ub(),d.Vb(14,"div",6),d.Hc(15,"Accion"),d.Ub(),d.Ub(),d.Fc(16,tt,13,13,"div",8),d.Vb(17,"div",9),d.Qb(18,"div",6),d.Qb(19,"div",6),d.Qb(20,"div",6),d.Vb(21,"div",6),d.Hc(22," SubTotal"),d.Ub(),d.Vb(23,"div",6),d.Hc(24),d.jc(25,"currency"),d.Ub(),d.Ub(),d.Vb(26,"div",9),d.Qb(27,"div",6),d.Qb(28,"div",6),d.Qb(29,"div",6),d.Vb(30,"div",6),d.Hc(31," IGV "),d.Ub(),d.Vb(32,"div",6),d.Hc(33),d.jc(34,"currency"),d.Ub(),d.Ub(),d.Vb(35,"div",9),d.Qb(36,"div",6),d.Qb(37,"div",6),d.Qb(38,"div",6),d.Vb(39,"div",10),d.Hc(40," TOTAL"),d.Ub(),d.Vb(41,"div",10),d.Hc(42),d.jc(43,"currency"),d.Ub(),d.Ub(),d.Ub(),d.Ub(),d.Ub(),d.Ub(),d.Vb(44,"div",11),d.Vb(45,"form",12),d.Vb(46,"div",2),d.Vb(47,"nz-form-item",13),d.Vb(48,"nz-form-control",14),d.Vb(49,"app-select-person",15),d.fc("transactionclient",function(t){return e.selectClientChange(t)}),d.Ub(),d.Ub(),d.Ub(),d.Vb(50,"nz-form-item",13),d.Vb(51,"nz-form-label",14),d.Hc(52,"Motivos"),d.Ub(),d.Vb(53,"nz-form-control",14),d.Vb(54,"nz-select",16),d.fc("ngModelChange",function(t){return e.transaction.motivesid=t}),d.Fc(55,et,1,2,"nz-option",17),d.Ub(),d.Ub(),d.Ub(),d.Ub(),d.Ub(),d.Vb(56,"div",18),d.Vb(57,"button",19),d.fc("click",function(){return e.save()}),d.Hc(58,"Guardar"),d.Ub(),d.Vb(59,"button",20),d.Hc(60,"Cancelar"),d.Ub(),d.Ub(),d.Ub(),d.Ub()),2&t&&(d.Bb(16),d.oc("ngForOf",e.transaction.details),d.Bb(8),d.Jc(" ",d.lc(25,19,e.transaction.neto,"S/"),""),d.Bb(9),d.Jc(" ",d.lc(34,22,e.transaction.igv,"S/")," "),d.Bb(9),d.Jc(" ",d.lc(43,25,e.transaction.total,"S/"),""),d.Bb(3),d.oc("formGroup",e.form),d.Bb(3),d.oc("nzSm",24)("nzXs",24),d.Bb(1),d.oc("identitynumber",e.identitynumberdoc)("subjectrolid",e.subjectrolid)("vouchertypeid",e.vouchertypeid)("subjectrolcategoryid",2),d.Bb(2),d.oc("nzSm",6)("nzXs",24),d.Bb(2),d.oc("nzSm",14)("nzXs",24),d.Bb(1),d.oc("ngModel",e.transaction.motivesid)("ngModelOptions",d.rc(28,Z)),d.Bb(1),d.oc("ngForOf",e.motives),d.Bb(2),d.oc("disabled",e.isSubmitted))},directives:[a.n,v.x,v.n,v.h,O.c,O.a,q.a,L.b,v.m,v.p,c.f,v.c,L.a],pipes:[a.d],styles:[".padding-add[_ngcontent-%COMP%] {\n        padding: 5px;\n      }\n\n      .texto[_ngcontent-%COMP%]{\n\n        font-weight:bold;\n      }\n      .detail-amount[_ngcontent-%COMP%]{\n        width: 15%;\n      }\n\n      nz-select[_ngcontent-%COMP%] {\n        width: 200px;\n      }"]}),it),data:{title:"Generar Nota de Credito"}}],ct=((ot=function e(){t(this,e)}).\u0275mod=d.Nb({type:ot}),ot.\u0275inj=d.Mb({factory:function(t){return new(t||ot)},imports:[[c.i.forChild(at)],c.i]}),ot),rt=((nt=function e(){t(this,e)}).\u0275mod=d.Nb({type:nt}),nt.\u0275inj=d.Mb({factory:function(t){return new(t||nt)},imports:[[a.c,ct]]}),nt)}}])}();