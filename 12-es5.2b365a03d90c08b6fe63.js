!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function i(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{XgrR:function(e,n,o){"use strict";o.r(n),o.d(n,"ReportsalesModule",function(){return ht});var a=o("ofXK"),c=o("tyNb"),r=o("R4wn"),l=o("1kSV"),s=o("fXoL"),b=o("K7Ed");function d(t,e){1&t&&(s.Vb(0,"div",1),s.Vb(1,"div",2),s.Vb(2,"div",11),s.Vb(3,"strong"),s.Hc(4,"Cargando"),s.Ub(),s.Qb(5,"br"),s.Qb(6,"i",12),s.Qb(7,"br"),s.Vb(8,"span"),s.Hc(9,"Por Favor Espere"),s.Ub(),s.Ub(),s.Ub(),s.Ub())}function u(t,e){if(1&t&&(s.Vb(0,"div",22),s.Vb(1,"div",23),s.Hc(2),s.Ub(),s.Vb(3,"div",24),s.Hc(4),s.Ub(),s.Vb(5,"div",25),s.Hc(6),s.Ub(),s.Vb(7,"div",26),s.Hc(8),s.Ub(),s.Vb(9,"div",27),s.Hc(10),s.Ub(),s.Vb(11,"div",28),s.Hc(12),s.Ub(),s.Ub()),2&t){var i=e.$implicit;s.Bb(2),s.Ic(i.code),s.Bb(2),s.Ic(i.barcode),s.Bb(2),s.Ic(i.nameconcat),s.Bb(2),s.Ic(i.stock),s.Bb(2),s.Ic(i.unitpricepurchase),s.Bb(2),s.Ic(i.unitpricesale)}}function h(t,e){if(1&t){var i=s.Wb();s.Vb(0,"ngb-pagination",29),s.fc("pageChange",function(t){return s.yc(i),s.ic(2).page=t})("pageChange",function(t){return s.yc(i),s.ic(2).loadPage(t)}),s.Ub()}if(2&t){var n=s.ic(2);s.oc("collectionSize",n.totalItems)("page",n.page)}}function p(t,e){if(1&t&&(s.Vb(0,"div",1),s.Vb(1,"div",13),s.Vb(2,"div",3),s.Vb(3,"h3",14),s.Hc(4,"Reporte Stock Producto ("),s.Vb(5,"small"),s.Hc(6),s.Ub(),s.Hc(7,")"),s.Ub(),s.Vb(8,"div",15),s.Vb(9,"div",16),s.Vb(10,"div",17),s.Vb(11,"div",18),s.Hc(12,"Codigo"),s.Ub(),s.Vb(13,"div",18),s.Hc(14,"Codigo Barra"),s.Ub(),s.Vb(15,"div",18),s.Hc(16,"Producto"),s.Ub(),s.Vb(17,"div",18),s.Hc(18,"Stock"),s.Ub(),s.Vb(19,"div",18),s.Hc(20,"Precio Costo"),s.Ub(),s.Vb(21,"div",18),s.Hc(22,"Precio Venta"),s.Ub(),s.Ub(),s.Fc(23,u,13,6,"div",19),s.Ub(),s.Ub(),s.Vb(24,"div",20),s.Fc(25,h,1,2,"ngb-pagination",21),s.Ub(),s.Ub(),s.Ub(),s.Ub()),2&t){var i=s.ic();s.Bb(6),s.Ic(i.totalItems),s.Bb(17),s.oc("ngForOf",i.transactions),s.Bb(2),s.oc("ngIf",i.showPagination)}}var f,g=((f=function(){function e(i,n,o){t(this,e),this.ngbPaginationConfig=i,this.businessobjectService=n,this.datepipe=o,this.totalItems=0,this.page=1,this.previousPage=1,this.showPagination=!0,this.size=10,this.order="id",this.filter="",this.asc=!0,this.load=!0,this.ngbPaginationConfig.boundaryLinks=!0}return i(e,[{key:"ngOnInit",value:function(){this.list(this.page-1)}},{key:"list",value:function(t){var e=this;this.load=!0,this.businessobjectService.listProductSales(t,this.size,this.order,this.asc,this.filter).subscribe(function(t){e.totalItems=t.totalElements,e.showPagination=!0,e.transactions=t.content,e.load=!1})}},{key:"loadPage",value:function(t){t!==this.previousPage&&(this.previousPage=t,this.list(this.page-1))}},{key:"search",value:function(t){this.filter=t,this.previousPage=1,this.page=1,this.filter.length<=0&&(this.filter=""),this.list(0)}}]),e}()).\u0275fac=function(t){return new(t||f)(s.Pb(l.c),s.Pb(b.a),s.Pb(a.f))},f.\u0275cmp=s.Jb({type:f,selectors:[["app-report-stock"]],features:[s.Ab([l.c])],decls:13,vars:2,consts:[[1,"card"],[1,"row","animated","fadeIn"],[1,"col-sm-12"],[1,"card-body"],[1,"form-row"],[1,"form-group","col-md-4"],["type","text","placeholder","Buscar",1,"form-control",3,"keyup.enter"],["input",""],[1,"form-group","col-md-1"],["type","submit",1,"btn","btn-success","waves-effect","waves-light","m-r-10",3,"click"],["class","row animated fadeIn",4,"ngIf"],[1,"alert","alert-warning","text-center"],[1,"fa","fa-refresh","fa-spin","fa-2x"],[1,"col-12"],[1,"card-title"],[1,"wrapper-mobile"],[1,"table-mobile"],[1,"row-mobile","header-mobile"],[1,"cell-mobile"],["class","row-mobile",4,"ngFor","ngForOf"],[2,"position","relative","left","30%"],[3,"collectionSize","page","pageChange",4,"ngIf"],[1,"row-mobile"],["data-title","Codigo",1,"cell-mobile"],["data-title","Codigo Barra",1,"cell-mobile"],["data-title","Producto",1,"cell-mobile"],["data-title","Stock",1,"cell-mobile"],["data-title","Precio costo",1,"cell-mobile"],["data-title","Precio Venta",1,"cell-mobile"],[3,"collectionSize","page","pageChange"]],template:function(t,e){if(1&t){var i=s.Wb();s.Vb(0,"div",0),s.Vb(1,"div",1),s.Vb(2,"div",2),s.Vb(3,"div",3),s.Vb(4,"div",4),s.Vb(5,"div",5),s.Vb(6,"input",6,7),s.fc("keyup.enter",function(){s.yc(i);var t=s.xc(7);return e.search(t.value)}),s.Ub(),s.Ub(),s.Vb(8,"div",8),s.Vb(9,"button",9),s.fc("click",function(){s.yc(i);var t=s.xc(7);return e.search(t.value)}),s.Hc(10,"Buscar"),s.Ub(),s.Ub(),s.Ub(),s.Ub(),s.Ub(),s.Ub(),s.Fc(11,d,10,0,"div",10),s.Fc(12,p,26,3,"div",10),s.Ub()}2&t&&(s.Bb(11),s.oc("ngIf",e.load),s.Bb(1),s.oc("ngIf",!e.load))},directives:[a.o,a.n,l.b],encapsulation:2}),f),v=o("xfKL"),m=o("ed8r"),y=o("3Pt+"),V=o("rMZv");function U(t,e){1&t&&(s.Vb(0,"div",2),s.Vb(1,"div",3),s.Vb(2,"div",4),s.Vb(3,"strong"),s.Hc(4,"Cargando"),s.Ub(),s.Qb(5,"br"),s.Qb(6,"i",5),s.Qb(7,"br"),s.Vb(8,"span"),s.Hc(9,"Por Favor Espere"),s.Ub(),s.Ub(),s.Ub(),s.Ub())}function C(t,e){if(1&t&&(s.Vb(0,"div",27),s.Vb(1,"div",35),s.Hc(2),s.Ub(),s.Vb(3,"div",36),s.Hc(4),s.Ub(),s.Ub()),2&t){var i=e.$implicit;s.Bb(2),s.Ic(i.nameconcat),s.Bb(2),s.Ic(i.totalamount)}}function P(t,e){if(1&t){var i=s.Wb();s.Vb(0,"ngb-pagination",37),s.fc("pageChange",function(t){return s.yc(i),s.ic(2).page=t})("pageChange",function(t){return s.yc(i),s.ic(2).loadPage(t)}),s.Ub()}if(2&t){var n=s.ic(2);s.oc("collectionSize",n.totalItems)("page",n.page)}}var H=function(t){return{odd:t}};function I(t,e){if(1&t&&(s.Vb(0,"tr",38),s.Vb(1,"td"),s.Hc(2),s.Ub(),s.Vb(3,"td"),s.Hc(4),s.Ub(),s.Ub()),2&t){var i=e.$implicit;s.oc("ngClass",s.sc(3,H,e.odd)),s.Bb(2),s.Ic(null==i?null:i.nameconcat),s.Bb(2),s.Ic(null==i?null:i.totalamount)}}function w(t,e){if(1&t){var i=s.Wb();s.Vb(0,"div",2),s.Vb(1,"div",6),s.Vb(2,"div",7),s.Vb(3,"div",8),s.Vb(4,"div",9),s.Vb(5,"input",10,11),s.fc("keyup.enter",function(){s.yc(i);var t=s.xc(6);return s.ic().search(t.value)}),s.Ub(),s.Ub(),s.Vb(7,"label",12),s.Hc(8,"Fecha Inicio"),s.Ub(),s.Vb(9,"div",13),s.Vb(10,"ejs-datetimepicker",14),s.fc("ngModelChange",function(t){return s.yc(i),s.ic().dateinit=t}),s.Ub(),s.Ub(),s.Vb(11,"label",15),s.Hc(12,"Fecha Final"),s.Ub(),s.Vb(13,"div",13),s.Vb(14,"ejs-datetimepicker",16),s.fc("ngModelChange",function(t){return s.yc(i),s.ic().dateend=t}),s.Ub(),s.Ub(),s.Vb(15,"div",15),s.Vb(16,"button",17),s.fc("click",function(){s.yc(i);var t=s.xc(6);return s.ic().search(t.value)}),s.Qb(17,"i",18),s.Ub(),s.Vb(18,"button",19),s.fc("click",function(){return s.yc(i),s.ic().listExportAll("export")}),s.Qb(19,"i",20),s.Ub(),s.Ub(),s.Ub(),s.Vb(20,"h3",21),s.Hc(21,"Reporte de Ventas por Productos ("),s.Vb(22,"small"),s.Hc(23),s.Ub(),s.Hc(24,")"),s.Ub(),s.Vb(25,"div",22),s.Vb(26,"div",23),s.Vb(27,"div",24),s.Vb(28,"div",25),s.Hc(29,"Producto"),s.Ub(),s.Vb(30,"div",25),s.Hc(31,"Cantidad Vendida"),s.Ub(),s.Ub(),s.Fc(32,C,5,2,"div",26),s.Vb(33,"div",27),s.Vb(34,"div",25),s.Vb(35,"strong"),s.Hc(36," Total: "),s.Ub(),s.Ub(),s.Vb(37,"div",28),s.Vb(38,"strong"),s.Hc(39),s.Ub(),s.Ub(),s.Ub(),s.Ub(),s.Ub(),s.Vb(40,"div",29),s.Fc(41,P,1,2,"ngb-pagination",30),s.Ub(),s.Vb(42,"table",31),s.Vb(43,"tr",32),s.Vb(44,"th"),s.Hc(45,"Producto"),s.Ub(),s.Vb(46,"th"),s.Hc(47,"Cantidad Vendida"),s.Ub(),s.Ub(),s.Fc(48,I,5,5,"tr",33),s.Vb(49,"tr",34),s.Qb(50,"td"),s.Qb(51,"td"),s.Qb(52,"td"),s.Qb(53,"td"),s.Qb(54,"td"),s.Vb(55,"td"),s.Hc(56,"Total: "),s.Ub(),s.Vb(57,"td"),s.Hc(58),s.Ub(),s.Ub(),s.Ub(),s.Ub(),s.Ub(),s.Ub()}if(2&t){var n=s.ic();s.Bb(10),s.oc("ngModel",n.dateinit),s.Bb(4),s.oc("ngModel",n.dateend),s.Bb(9),s.Ic(n.totalItems),s.Bb(9),s.oc("ngForOf",n.transactions),s.Bb(7),s.Ic(n.totalProduct),s.Bb(2),s.oc("ngIf",n.showPagination),s.Bb(1),s.oc("hidden",!n.exportall),s.Bb(6),s.oc("ngForOf",n.transactionExportall),s.Bb(10),s.Ic(n.totalProduct)}}var M,B,x=((B=function(){function e(i,n,o,a){t(this,e),this.businessobjectService=i,this.ngbPaginationConfig=n,this.reportService=o,this.datepipe=a,this.today=new Date,this.dateinit=new Date(this.today.getFullYear(),this.today.getMonth()),this.dateend=new Date(this.today.getFullYear(),this.today.getMonth()+1,0),this.exportall=!1,this.totalItems=0,this.totalProduct=0,this.page=1,this.previousPage=1,this.showPagination=!0,this.size=10,this.order="id",this.filter="",this.asc=!0,this.load=!0,this.ngbPaginationConfig.boundaryLinks=!0}return i(e,[{key:"ngOnInit",value:function(){this.list(this.page-1)}},{key:"list",value:function(t){var e=this;this.load=!0,this.reportService.listReportsalexproduct(t,this.size,this.order,this.asc,this.filter,this.datepipe.transform(this.dateinit,"dd/MM/yyyy"),this.datepipe.transform(this.dateend,"dd/MM/yyyy")).subscribe(function(t){e.totalItems=t.List.totalElements,e.showPagination=!0,e.transactions=t.List.content,e.totalProduct=t.totalproduct,e.load=!1})}},{key:"listExportAll",value:function(t){var e=this;this.reportService.listReportsalexproduct(0,200,this.order,this.asc,this.filter,this.datepipe.transform(this.dateinit,"dd/MM/yyyy"),this.datepipe.transform(this.dateend,"dd/MM/yyyy")).subscribe(function(i){setTimeout(function(){e.exportData(t)},3e3),e.transactionExportall=i.List.content,e.totalProduct=i.totalproduct})}},{key:"loadPage",value:function(t){t!==this.previousPage&&(this.previousPage=t,this.list(this.page-1))}},{key:"search",value:function(t){this.filter=t,this.previousPage=1,this.page=1,this.filter.length<=0&&(this.filter=""),this.list(0)}},{key:"exportData",value:function(t){this.businessobjectService.exportToFile("Reporte Ventas x Productos","export")}}]),e}()).\u0275fac=function(t){return new(t||B)(s.Pb(b.a),s.Pb(l.c),s.Pb(v.a),s.Pb(a.f))},B.\u0275cmp=s.Jb({type:B,selectors:[["app-report-sales-product"]],decls:3,vars:2,consts:[[1,"card"],["class","row animated fadeIn",4,"ngIf"],[1,"row","animated","fadeIn"],[1,"col-sm-12"],[1,"alert","alert-warning","text-center"],[1,"fa","fa-refresh","fa-spin","fa-2x"],[1,"col-12"],[1,"card-body"],[1,"col-md-12","row"],[1,"col-md-3"],["type","text","placeholder","Buscar",1,"form-control",3,"keyup.enter"],["input",""],["col-md-2",""],[1,"col-md-2","form-group"],["id","dateinit","placeholder","Select a datetime ","format","dd/MM/yyyy",3,"ngModel","ngModelChange"],[1,"col-md-2"],["id","dateend","placeholder","Select a datetime ","format","dd/MM/yyyy",3,"ngModel","ngModelChange"],["type","button","title","Buscar Por Filtro, Fecha  ",1,"btn","btn-success","form-group","waves-effect","waves-light","btn-xs","m-r-10",3,"click"],["aria-hidden","true",1,"fa","fa-search-plus"],["type","button","title","Exportar Por Fecha Seleccionada ",1,"btn","btn-primary","form-group","waves-effect","btn-xs",3,"click"],["aria-hidden","true",1,"fa","fa-file-excel-o"],[1,"card-title"],[1,"wrapper-mobile"],[1,"table-mobile"],[1,"row-mobile","header-mobile"],[1,"cell-mobile"],["class","row-mobile",4,"ngFor","ngForOf"],[1,"row-mobile"],["data-title","Cantidad Total",1,"cell-mobile"],[2,"position","relative","left","30%"],[3,"collectionSize","page","pageChange",4,"ngIf"],["id","export",1,"table",3,"hidden"],[1,"thead"],["class","tbody",3,"ngClass",4,"ngFor","ngForOf"],[1,"tbody"],["data-title","Producto",1,"cell-mobile"],["data-title","Cantidad Vendida",1,"cell-mobile"],[3,"collectionSize","page","pageChange"],[1,"tbody",3,"ngClass"]],template:function(t,e){1&t&&(s.Vb(0,"div",0),s.Fc(1,U,10,0,"div",1),s.Fc(2,w,59,9,"div",1),s.Ub()),2&t&&(s.Bb(1),s.oc("ngIf",e.load),s.Bb(1),s.oc("ngIf",!e.load))},directives:[a.o,m.a,y.m,y.p,a.n,V.g,V.a,V.e,l.b,a.m],encapsulation:2}),B),F=((M=function(){function e(){t(this,e)}return i(e,[{key:"ngOnInit",value:function(){}}]),e}()).\u0275fac=function(t){return new(t||M)},M.\u0275cmp=s.Jb({type:M,selectors:[["app-report-sales-client"]],decls:2,vars:0,template:function(t,e){1&t&&(s.Vb(0,"p"),s.Hc(1,"report-sales-client works!"),s.Ub())},encapsulation:2}),M),k=o("B+r4"),S=o("2Vo4"),z=o("lJxs"),j=o("Kj3r"),E=o("eIep"),Q=o("0np6"),L=o("tk/3"),O=o("vWu4"),D=o("zAKX"),T=o("C2AL"),R=o("FwiY");function A(t,e){if(1&t&&s.Qb(0,"nz-option",5),2&t){var i=s.ic().$implicit;s.oc("nzValue",i)("nzLabel",i.identitynumber+" "+i.businessname)}}function $(t,e){if(1&t&&(s.Tb(0),s.Fc(1,A,1,2,"nz-option",4),s.Sb()),2&t){var i=s.ic();s.Bb(1),s.oc("ngIf",!i.isLoading)}}function J(t,e){1&t&&(s.Vb(0,"nz-option",6),s.Qb(1,"i",7),s.Hc(2," Loading Data... "),s.Ub())}var W,X=((W=function(){function e(i,n,o,a){t(this,e),this.http=i,this.userService=n,this.settingsService=o,this.clientService=a,this.searchChange$=new S.a(""),this.optionList=[],this.clientnew={companyid:1,districtid:1,paymodeid:2,provinceid:1,rateid:2,regionid:1,subjectrolcategoryid:2,subjecttypeid:3,subjectrolid:1},this.identitynumber="11111111",this.subjectrolcategoryid=3,this.subjectrolid=4,this.selectedClient={},this.isLoading=!1,this.filter="",this.transactionclient=new s.n,this.randomUserUrl=Q.b+"subject/employed?page=0&size=5&order=id&asc=true&filter="}return i(e,[{key:"onSearch",value:function(t){this.isLoading=!0,this.filter=t,this.searchChange$.next(t)}},{key:"ngOnInit",value:function(){var t=this;console.log(this.identitynumber+"cat"+this.subjectrolcategoryid),this.filter=this.identitynumber,this.searchChange$.asObservable().pipe(Object(j.a)(500)).pipe(Object(E.a)(function(e){return t.http.get(""+(t.randomUserUrl+t.filter),t.userService.getHeaderAuth()).pipe(Object(z.a)(function(t){return t.content})).pipe(Object(z.a)(function(t){return t.map(function(t){return t})}))})).subscribe(function(e){t.optionList=e;var i=e.find(function(e){return e.identitynumber==t.identitynumber});i&&(t.selectedClient=i,t.transactionclient.emit({client:t.selectedClient,externalsubjectid:t.selectedClient.businesssubjectid})),e.length<=0&&(8!=t.filter.length&&11!=t.filter.length||t.searchClient(t.filter)),t.isLoading=!1})}},{key:"searchClient",value:function(t){var e=this;this.isLoading=!0,11==t.length?(this.clientnew.identitydocumentid=6,"20"==t.substring(2,-1)&&(this.clientnew.subjecttypeid=1)):this.clientnew.identitydocumentid=1,this.clientService.searchClient(t,this.clientnew.identitydocumentid).subscribe(function(t){t.businesssubjectid=t.id;var i=[];i.push(t),e.optionList=i,e.selectedClient=t,e.transactionclient.emit({client:e.selectedClient,externalsubjectid:e.selectedClient.businesssubjectid}),e.isLoading=!1},function(t){e.isLoading=!1,alertify.error("Documento Invalido")})}},{key:"selectClientChange",value:function(t){this.transactionclient.emit({client:this.selectedClient,externalsubjectid:this.selectedClient.businesssubjectid})}}]),e}()).\u0275fac=function(t){return new(t||W)(s.Pb(L.b),s.Pb(O.l),s.Pb(O.h),s.Pb(O.b))},W.\u0275cmp=s.Jb({type:W,selectors:[["app-select-person-employed"]],inputs:{identitynumber:"identitynumber",subjectrolcategoryid:"subjectrolcategoryid",subjectrolid:"subjectrolid"},outputs:{transactionclient:"transactionclient"},decls:8,vars:7,consts:[[3,"nzSm","nzXs"],["nzPlaceHolder","selected Employed","nzAllowClear","","nzShowSearch","","nzServerSearch","",1,"widthclient",3,"ngModel","ngModelChange","nzOnSearch"],[4,"ngFor","ngForOf"],["nzDisabled","","nzCustomContent","",4,"ngIf"],[3,"nzValue","nzLabel",4,"ngIf"],[3,"nzValue","nzLabel"],["nzDisabled","","nzCustomContent",""],["nz-icon","","nzType","loading",1,"loading-icon"]],template:function(t,e){1&t&&(s.Vb(0,"div"),s.Vb(1,"nz-form-item"),s.Vb(2,"nz-form-label",0),s.Hc(3,"Empleado"),s.Ub(),s.Vb(4,"nz-form-control",0),s.Vb(5,"nz-select",1),s.fc("ngModelChange",function(t){return e.selectedClient=t})("nzOnSearch",function(t){return e.onSearch(t)})("ngModelChange",function(t){return e.selectClientChange(t)}),s.Fc(6,$,2,1,"ng-container",2),s.Fc(7,J,3,0,"nz-option",3),s.Ub(),s.Ub(),s.Ub(),s.Ub()),2&t&&(s.Bb(2),s.oc("nzSm",6)("nzXs",24),s.Bb(2),s.oc("nzSm",14)("nzXs",24),s.Bb(1),s.oc("ngModel",e.selectedClient),s.Bb(1),s.oc("ngForOf",e.optionList),s.Bb(1),s.oc("ngIf",e.isLoading))},directives:[k.c,k.a,D.b,y.m,y.p,a.n,a.o,D.a,T.a,R.b],styles:[".widthclient[_ngcontent-%COMP%]{\n      margin-right: 8px;\n      width: 240px;\n    }\n    \n      .loading-icon[_ngcontent-%COMP%] {\n        margin-right: 8px;\n      }"]}),W);function Y(t,e){1&t&&(s.Vb(0,"div",2),s.Vb(1,"div",3),s.Vb(2,"div",4),s.Vb(3,"strong"),s.Hc(4,"Cargando"),s.Ub(),s.Qb(5,"br"),s.Qb(6,"i",5),s.Qb(7,"br"),s.Vb(8,"span"),s.Hc(9,"Por Favor Espere"),s.Ub(),s.Ub(),s.Ub(),s.Ub())}function N(t,e){if(1&t&&(s.Vb(0,"div",30),s.Vb(1,"div",38),s.Hc(2),s.Ub(),s.Vb(3,"div",39),s.Hc(4),s.Ub(),s.Vb(5,"div",40),s.Hc(6),s.Ub(),s.Vb(7,"div",41),s.Hc(8),s.Ub(),s.Vb(9,"div",42),s.Hc(10),s.Ub(),s.Vb(11,"div",43),s.Hc(12),s.jc(13,"currency"),s.Ub(),s.Vb(14,"div",44),s.Hc(15),s.Ub(),s.Ub()),2&t){var i=e.$implicit;s.Bb(2),s.Ic(i.code),s.Bb(2),s.Ic(i.vouchertype),s.Bb(2),s.Ic(i.date),s.Bb(2),s.Ic(i.identitynumber),s.Bb(2),s.Ic(i.name),s.Bb(2),s.Ic(s.lc(13,7,i.total,"S/")),s.Bb(3),s.Ic(i.states)}}function K(t,e){if(1&t){var i=s.Wb();s.Vb(0,"ngb-pagination",45),s.fc("pageChange",function(t){return s.yc(i),s.ic(2).page=t})("pageChange",function(t){return s.yc(i),s.ic(2).loadPage(t)}),s.Ub()}if(2&t){var n=s.ic(2);s.oc("collectionSize",n.totalItems)("page",n.page)}}var _=function(t){return{odd:t}};function Z(t,e){if(1&t&&(s.Vb(0,"tr",46),s.Vb(1,"td"),s.Hc(2),s.Ub(),s.Vb(3,"td"),s.Hc(4),s.Ub(),s.Vb(5,"td"),s.Hc(6),s.Ub(),s.Vb(7,"td"),s.Hc(8),s.Ub(),s.Vb(9,"td"),s.Hc(10),s.Ub(),s.Vb(11,"td"),s.Hc(12),s.jc(13,"currency"),s.Ub(),s.Vb(14,"td"),s.Hc(15),s.Ub(),s.Ub()),2&t){var i=e.$implicit;s.oc("ngClass",s.sc(11,_,e.odd)),s.Bb(2),s.Ic(null==i?null:i.code),s.Bb(2),s.Ic(null==i?null:i.vouchertype),s.Bb(2),s.Ic(null==i?null:i.date),s.Bb(2),s.Ic(null==i?null:i.identitynumber),s.Bb(2),s.Ic(null==i?null:i.name),s.Bb(2),s.Ic(s.lc(13,8,null==i?null:i.total,"S/")),s.Bb(3),s.Ic(null==i?null:i.states)}}function q(t,e){if(1&t){var i=s.Wb();s.Vb(0,"div",2),s.Vb(1,"div",6),s.Vb(2,"div",7),s.Vb(3,"div",8),s.Vb(4,"nz-form-item",9),s.Vb(5,"nz-form-control",10),s.Vb(6,"app-select-person-employed",11),s.fc("transactionclient",function(t){return s.yc(i),s.ic().selectClientChange(t)}),s.Ub(),s.Ub(),s.Ub(),s.Vb(7,"div",12),s.Vb(8,"input",13,14),s.fc("keyup.enter",function(){s.yc(i);var t=s.xc(9);return s.ic().search(t.value)}),s.Ub(),s.Ub(),s.Vb(10,"label",15),s.Hc(11,"Fecha Inicio"),s.Ub(),s.Vb(12,"div",16),s.Vb(13,"ejs-datetimepicker",17),s.fc("ngModelChange",function(t){return s.yc(i),s.ic().dateinit=t}),s.Ub(),s.Ub(),s.Vb(14,"label",18),s.Hc(15,"Fecha Final"),s.Ub(),s.Vb(16,"div",16),s.Vb(17,"ejs-datetimepicker",19),s.fc("ngModelChange",function(t){return s.yc(i),s.ic().dateend=t}),s.Ub(),s.Ub(),s.Vb(18,"div",18),s.Vb(19,"button",20),s.fc("click",function(){s.yc(i);var t=s.xc(9);return s.ic().search(t.value)}),s.Qb(20,"i",21),s.Ub(),s.Vb(21,"button",22),s.fc("click",function(){return s.yc(i),s.ic().listExportAll("export")}),s.Qb(22,"i",23),s.Ub(),s.Ub(),s.Ub(),s.Vb(23,"h3",24),s.Hc(24,"Cantidad Registradas ("),s.Vb(25,"small"),s.Hc(26),s.Ub(),s.Hc(27,")"),s.Ub(),s.Vb(28,"div",25),s.Vb(29,"div",26),s.Vb(30,"div",27),s.Vb(31,"div",28),s.Hc(32,"Documento"),s.Ub(),s.Vb(33,"div",28),s.Hc(34,"Tipo"),s.Ub(),s.Vb(35,"div",28),s.Hc(36,"Fecha"),s.Ub(),s.Vb(37,"div",28),s.Hc(38,"DNI/RUC"),s.Ub(),s.Vb(39,"div",28),s.Hc(40,"Cliente"),s.Ub(),s.Vb(41,"div",28),s.Hc(42,"Monto"),s.Ub(),s.Vb(43,"div",28),s.Hc(44,"Estado"),s.Ub(),s.Ub(),s.Fc(45,N,16,10,"div",29),s.Vb(46,"div",30),s.Qb(47,"div",28),s.Qb(48,"div",28),s.Qb(49,"div",28),s.Qb(50,"div",28),s.Qb(51,"div",28),s.Vb(52,"div",28),s.Vb(53,"strong"),s.Hc(54," Total: "),s.Ub(),s.Ub(),s.Vb(55,"div",31),s.Vb(56,"strong"),s.Hc(57),s.jc(58,"currency"),s.Ub(),s.Ub(),s.Ub(),s.Ub(),s.Ub(),s.Vb(59,"div",32),s.Fc(60,K,1,2,"ngb-pagination",33),s.Ub(),s.Vb(61,"table",34),s.Vb(62,"tr",35),s.Vb(63,"th"),s.Hc(64,"Documento"),s.Ub(),s.Vb(65,"th"),s.Hc(66,"Tipo"),s.Ub(),s.Vb(67,"th"),s.Hc(68,"Fecha"),s.Ub(),s.Vb(69,"th"),s.Hc(70,"DNI/RUC"),s.Ub(),s.Vb(71,"th"),s.Hc(72,"Cliente"),s.Ub(),s.Vb(73,"th"),s.Hc(74,"Monto"),s.Ub(),s.Vb(75,"th"),s.Hc(76,"Estado"),s.Ub(),s.Ub(),s.Fc(77,Z,16,13,"tr",36),s.Vb(78,"tr",37),s.Qb(79,"td"),s.Qb(80,"td"),s.Qb(81,"td"),s.Qb(82,"td"),s.Qb(83,"td"),s.Vb(84,"td"),s.Hc(85,"Total: "),s.Ub(),s.Vb(86,"td"),s.Hc(87),s.Ub(),s.Ub(),s.Ub(),s.Ub(),s.Ub(),s.Ub()}if(2&t){var n=s.ic();s.Bb(5),s.oc("nzSm",24)("nzXs",24),s.Bb(1),s.oc("identitynumber",n.identitynumberdoc)("subjectrolid",4)("subjectrolcategoryid",3),s.Bb(7),s.oc("ngModel",n.dateinit),s.Bb(4),s.oc("ngModel",n.dateend),s.Bb(9),s.Ic(n.totalItems),s.Bb(19),s.oc("ngForOf",n.transactions),s.Bb(12),s.Ic(s.lc(58,14,n.totalMoney,"S/")),s.Bb(3),s.oc("ngIf",n.showPagination),s.Bb(1),s.oc("hidden",!n.exportall),s.Bb(16),s.oc("ngForOf",n.transactionExportall),s.Bb(10),s.Ic(n.totalMoney)}}var G,tt=((G=function(){function e(i,n,o,a){t(this,e),this.businessobjectService=i,this.ngbPaginationConfig=n,this.reportService=o,this.datepipe=a,this.today=new Date,this.dateinit=new Date(this.today.getFullYear(),this.today.getMonth()),this.dateend=new Date(this.today.getFullYear(),this.today.getMonth()+1,0),this.exportall=!1,this.totalItems=0,this.totalMoney=0,this.identitynumberdoc="",this.subjectrolid=1,this.employedid=0,this.page=1,this.previousPage=1,this.showPagination=!0,this.size=10,this.order="id",this.filter="",this.asc=!0,this.load=!0,this.ngbPaginationConfig.boundaryLinks=!0}return i(e,[{key:"ngOnInit",value:function(){this.list(this.page-1)}},{key:"list",value:function(t){var e=this;this.load=!0,this.reportService.listReportsalexemployed(t,this.size,this.order,this.asc,this.filter,this.datepipe.transform(this.dateinit,"dd/MM/yyyy"),this.datepipe.transform(this.dateend,"dd/MM/yyyy"),this.employedid).subscribe(function(t){e.totalItems=t.List.totalElements,e.showPagination=!0,e.transactions=t.List.content,e.totalMoney=t.totalmoney,e.load=!1})}},{key:"listExportAll",value:function(t){var e=this;this.reportService.listReportsalexemployed(0,200,this.order,this.asc,this.filter,this.datepipe.transform(this.dateinit,"dd/MM/yyyy"),this.datepipe.transform(this.dateend,"dd/MM/yyyy"),this.employedid).subscribe(function(i){setTimeout(function(){e.exportData(t)},3e3),e.transactionExportall=i.List.content,e.totalMoney=i.totalmoney})}},{key:"loadPage",value:function(t){t!==this.previousPage&&(this.previousPage=t,this.list(this.page-1))}},{key:"search",value:function(t){this.filter=t,this.previousPage=1,this.page=1,this.filter.length<=0&&(this.filter=""),this.list(0)}},{key:"exportData",value:function(t){this.businessobjectService.exportToFile("Reporte Ventas por Empleado","export")}},{key:"selectClientChange",value:function(t){this.employedid=t.client.employedid,this.list(0)}}]),e}()).\u0275fac=function(t){return new(t||G)(s.Pb(b.a),s.Pb(l.c),s.Pb(v.a),s.Pb(a.f))},G.\u0275cmp=s.Jb({type:G,selectors:[["app-report-sales-employed"]],decls:3,vars:2,consts:[[1,"card"],["class","row animated fadeIn",4,"ngIf"],[1,"row","animated","fadeIn"],[1,"col-sm-12"],[1,"alert","alert-warning","text-center"],[1,"fa","fa-refresh","fa-spin","fa-2x"],[1,"col-12"],[1,"card-body"],[1,"col-md-12","row"],[1,"padding-add"],[3,"nzSm","nzXs"],[3,"identitynumber","subjectrolid","subjectrolcategoryid","transactionclient"],[1,"col-md-3"],["type","text","placeholder","Buscar",1,"form-control",3,"keyup.enter"],["input",""],["col-md-2",""],[1,"col-md-2","form-group"],["id","dateinit","placeholder","Select a datetime ","format","dd/MM/yyyy",3,"ngModel","ngModelChange"],[1,"col-md-2"],["id","dateend","placeholder","Select a datetime ","format","dd/MM/yyyy",3,"ngModel","ngModelChange"],["type","button","title","Buscar Por Filtro, Fecha  ",1,"btn","btn-success","form-group","waves-effect","waves-light","btn-xs","m-r-10",3,"click"],["aria-hidden","true",1,"fa","fa-search-plus"],["type","button","title","Exportar Por Fecha Seleccionada ",1,"btn","btn-primary","form-group","waves-effect","btn-xs",3,"click"],["aria-hidden","true",1,"fa","fa-file-excel-o"],[1,"card-title"],[1,"wrapper-mobile"],[1,"table-mobile"],[1,"row-mobile","header-mobile"],[1,"cell-mobile"],["class","row-mobile",4,"ngFor","ngForOf"],[1,"row-mobile"],["data-title","Venta Total",1,"cell-mobile"],[2,"position","relative","left","30%"],[3,"collectionSize","page","pageChange",4,"ngIf"],["id","export",1,"table",3,"hidden"],[1,"thead"],["class","tbody",3,"ngClass",4,"ngFor","ngForOf"],[1,"tbody"],["data-title","Documento",1,"cell-mobile"],["data-title","Tipo",1,"cell-mobile"],["data-title","Fecha",1,"cell-mobile"],["data-title","DNI/RUC",1,"cell-mobile"],["data-title","Cliente",1,"cell-mobile"],["data-title","Monto",1,"cell-mobile"],["data-title","Estado",1,"cell-mobile"],[3,"collectionSize","page","pageChange"],[1,"tbody",3,"ngClass"]],template:function(t,e){1&t&&(s.Vb(0,"div",0),s.Fc(1,Y,10,0,"div",1),s.Fc(2,q,88,17,"div",1),s.Ub()),2&t&&(s.Bb(1),s.oc("ngIf",e.load),s.Bb(1),s.oc("ngIf",!e.load))},directives:[a.o,k.c,k.a,X,m.a,y.m,y.p,a.n,V.g,V.a,V.e,l.b,a.m],pipes:[a.d],encapsulation:2}),G),et=o("CFL1");function it(t,e){1&t&&(s.Vb(0,"div",2),s.Vb(1,"div",3),s.Vb(2,"div",4),s.Vb(3,"strong"),s.Hc(4,"Cargando"),s.Ub(),s.Qb(5,"br"),s.Qb(6,"i",5),s.Qb(7,"br"),s.Vb(8,"span"),s.Hc(9,"Por Favor Espere"),s.Ub(),s.Ub(),s.Ub(),s.Ub())}function nt(t,e){if(1&t&&(s.Vb(0,"div",27),s.Vb(1,"div",35),s.Hc(2),s.Ub(),s.Vb(3,"div",36),s.Hc(4),s.Ub(),s.Ub()),2&t){var i=e.$implicit;s.Bb(2),s.Ic(i.businessname),s.Bb(2),s.Ic(i.total)}}function ot(t,e){if(1&t){var i=s.Wb();s.Vb(0,"ngb-pagination",37),s.fc("pageChange",function(t){return s.yc(i),s.ic(2).page=t})("pageChange",function(t){return s.yc(i),s.ic(2).loadPage(t)}),s.Ub()}if(2&t){var n=s.ic(2);s.oc("collectionSize",n.totalItems)("page",n.page)}}var at=function(t){return{odd:t}};function ct(t,e){if(1&t&&(s.Vb(0,"tr",38),s.Vb(1,"td"),s.Hc(2),s.Ub(),s.Vb(3,"td"),s.Hc(4),s.Ub(),s.Ub()),2&t){var i=e.$implicit;s.oc("ngClass",s.sc(3,at,e.odd)),s.Bb(2),s.Ic(null==i?null:i.businessname),s.Bb(2),s.Ic(null==i?null:i.total)}}function rt(t,e){if(1&t){var i=s.Wb();s.Vb(0,"div",2),s.Vb(1,"div",6),s.Vb(2,"div",7),s.Vb(3,"div",8),s.Vb(4,"div",9),s.Vb(5,"input",10,11),s.fc("keyup.enter",function(){s.yc(i);var t=s.xc(6);return s.ic().search(t.value)}),s.Ub(),s.Ub(),s.Vb(7,"label",12),s.Hc(8,"Fecha Inicio"),s.Ub(),s.Vb(9,"div",13),s.Vb(10,"ejs-datetimepicker",14),s.fc("ngModelChange",function(t){return s.yc(i),s.ic().dateinit=t}),s.Ub(),s.Ub(),s.Vb(11,"label",15),s.Hc(12,"Fecha Final"),s.Ub(),s.Vb(13,"div",13),s.Vb(14,"ejs-datetimepicker",16),s.fc("ngModelChange",function(t){return s.yc(i),s.ic().dateend=t}),s.Ub(),s.Ub(),s.Vb(15,"div",15),s.Vb(16,"button",17),s.fc("click",function(){s.yc(i);var t=s.xc(6);return s.ic().search(t.value)}),s.Qb(17,"i",18),s.Ub(),s.Vb(18,"button",19),s.fc("click",function(){return s.yc(i),s.ic().listExportAll("export")}),s.Qb(19,"i",20),s.Ub(),s.Ub(),s.Ub(),s.Vb(20,"h3",21),s.Hc(21,"Cantidad Registradas ("),s.Vb(22,"small"),s.Hc(23),s.Ub(),s.Hc(24,")"),s.Ub(),s.Vb(25,"div",22),s.Vb(26,"div",23),s.Vb(27,"div",24),s.Vb(28,"div",25),s.Hc(29,"Empleado"),s.Ub(),s.Vb(30,"div",25),s.Hc(31,"Monto Total"),s.Ub(),s.Ub(),s.Fc(32,nt,5,2,"div",26),s.Vb(33,"div",27),s.Vb(34,"div",25),s.Vb(35,"strong"),s.Hc(36," Total: "),s.Ub(),s.Ub(),s.Vb(37,"div",28),s.Vb(38,"strong"),s.Hc(39),s.jc(40,"currency"),s.Ub(),s.Ub(),s.Ub(),s.Ub(),s.Ub(),s.Vb(41,"div",29),s.Fc(42,ot,1,2,"ngb-pagination",30),s.Ub(),s.Vb(43,"table",31),s.Vb(44,"tr",32),s.Vb(45,"th"),s.Hc(46,"Empleado"),s.Ub(),s.Vb(47,"th"),s.Hc(48,"Monto Total"),s.Ub(),s.Ub(),s.Fc(49,ct,5,5,"tr",33),s.Vb(50,"tr",34),s.Vb(51,"td"),s.Hc(52,"Total: "),s.Ub(),s.Vb(53,"td"),s.Hc(54),s.Ub(),s.Ub(),s.Ub(),s.Ub(),s.Ub(),s.Ub()}if(2&t){var n=s.ic();s.Bb(10),s.oc("ngModel",n.dateinit),s.Bb(4),s.oc("ngModel",n.dateend),s.Bb(9),s.Ic(n.totalItems),s.Bb(9),s.oc("ngForOf",n.transactions),s.Bb(7),s.Ic(s.lc(40,9,n.totalMoney,"S/")),s.Bb(3),s.oc("ngIf",n.showPagination),s.Bb(1),s.oc("hidden",!n.exportall),s.Bb(6),s.oc("ngForOf",n.transactionExportall),s.Bb(5),s.Ic(n.totalMoney)}}var lt,st,bt,dt=[{path:"",component:r.m,data:{title:"Reporte de Ventas "}},{path:"stock",component:g,data:{title:"Reporte de Stock "}},{path:"saleproducts",component:x,data:{title:"Reporte de Ventas Por Productos "}},{path:"saleclients",component:F,data:{title:"Reporte de Ventas Por Cliente"}},{path:"saleemployed",component:tt,data:{title:"Reporte de Ventas Por Empleado"}},{path:"saletotal4employed",component:(lt=function(){function e(i,n,o,a,c){t(this,e),this.businessobjectService=i,this.ngbPaginationConfig=n,this.userService=o,this.reportService=a,this.datepipe=c,this.today=new Date,this.dateinit=new Date(this.today.getFullYear(),this.today.getMonth()),this.dateend=new Date(this.today.getFullYear(),this.today.getMonth()+1,0),this.exportall=!1,this.totalItems=0,this.totalMoney=0,this.page=1,this.previousPage=1,this.showPagination=!0,this.size=10,this.order="id",this.filter="",this.asc=!0,this.load=!0,this.ngbPaginationConfig.boundaryLinks=!0}return i(e,[{key:"ngOnInit",value:function(){this.list(this.page-1)}},{key:"list",value:function(t){var e=this;this.load=!0,this.reportService.totalbyemployeds(t,this.size,this.order,this.asc,this.filter,this.datepipe.transform(this.dateinit,"dd/MM/yyyy"),this.datepipe.transform(this.dateend,"dd/MM/yyyy"),this.userService.subsidiaryid).subscribe(function(t){e.totalItems=t.List.totalElements,e.showPagination=!0,e.transactions=t.List,e.totalMoney=t.totalmoney,e.load=!1})}},{key:"listExportAll",value:function(t){var e=this;this.reportService.totalbyemployeds(0,200,this.order,this.asc,this.filter,this.datepipe.transform(this.dateinit,"dd/MM/yyyy"),this.datepipe.transform(this.dateend,"dd/MM/yyyy"),this.userService.subsidiaryid).subscribe(function(i){setTimeout(function(){e.exportData(t)},3e3),e.transactionExportall=i.List,e.totalMoney=i.totalmoney})}},{key:"loadPage",value:function(t){t!==this.previousPage&&(this.previousPage=t,this.list(this.page-1))}},{key:"search",value:function(t){this.filter=t,this.previousPage=1,this.page=1,this.filter.length<=0&&(this.filter=""),this.list(0)}},{key:"exportData",value:function(t){this.businessobjectService.exportToFile("Reporte Ventas por Empleado Acumulados ","export")}}]),e}(),lt.\u0275fac=function(t){return new(t||lt)(s.Pb(b.a),s.Pb(l.c),s.Pb(et.a),s.Pb(v.a),s.Pb(a.f))},lt.\u0275cmp=s.Jb({type:lt,selectors:[["app-sumtotal-employeds"]],decls:3,vars:2,consts:[[1,"card"],["class","row animated fadeIn",4,"ngIf"],[1,"row","animated","fadeIn"],[1,"col-sm-12"],[1,"alert","alert-warning","text-center"],[1,"fa","fa-refresh","fa-spin","fa-2x"],[1,"col-12"],[1,"card-body"],[1,"col-md-12","row"],[1,"col-md-3"],["type","text","placeholder","Buscar",1,"form-control",3,"keyup.enter"],["input",""],["col-md-2",""],[1,"col-md-2","form-group"],["id","dateinit","placeholder","Select a datetime ","format","dd/MM/yyyy",3,"ngModel","ngModelChange"],[1,"col-md-2"],["id","dateend","placeholder","Select a datetime ","format","dd/MM/yyyy",3,"ngModel","ngModelChange"],["type","button","title","Buscar Por Filtro, Fecha  ",1,"btn","btn-success","form-group","waves-effect","waves-light","btn-xs","m-r-10",3,"click"],["aria-hidden","true",1,"fa","fa-search-plus"],["type","button","title","Exportar Por Fecha Seleccionada ",1,"btn","btn-primary","form-group","waves-effect","btn-xs",3,"click"],["aria-hidden","true",1,"fa","fa-file-excel-o"],[1,"card-title"],[1,"wrapper-mobile"],[1,"table-mobile"],[1,"row-mobile","header-mobile"],[1,"cell-mobile"],["class","row-mobile",4,"ngFor","ngForOf"],[1,"row-mobile"],["data-title","Venta Total",1,"cell-mobile"],[2,"position","relative","left","30%"],[3,"collectionSize","page","pageChange",4,"ngIf"],["id","export",1,"table",3,"hidden"],[1,"thead"],["class","tbody",3,"ngClass",4,"ngFor","ngForOf"],[1,"tbody"],["data-title","Empleado",1,"cell-mobile"],["data-title","Total",1,"cell-mobile"],[3,"collectionSize","page","pageChange"],[1,"tbody",3,"ngClass"]],template:function(t,e){1&t&&(s.Vb(0,"div",0),s.Fc(1,it,10,0,"div",1),s.Fc(2,rt,55,12,"div",1),s.Ub()),2&t&&(s.Bb(1),s.oc("ngIf",e.load),s.Bb(1),s.oc("ngIf",!e.load))},directives:[a.o,m.a,y.m,y.p,a.n,V.g,V.a,V.e,l.b,a.m],pipes:[a.d],styles:[""]}),lt),data:{title:"Reporte de Ventas Por Empleado Acumulados"}}],ut=((bt=function e(){t(this,e)}).\u0275mod=s.Nb({type:bt}),bt.\u0275inj=s.Mb({factory:function(t){return new(t||bt)},imports:[[c.i.forChild(dt)],c.i]}),bt),ht=((st=function e(){t(this,e)}).\u0275mod=s.Nb({type:st}),st.\u0275inj=s.Mb({factory:function(t){return new(t||st)},imports:[[a.c,ut]]}),st)}}])}();