(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{PTPi:function(t,e,n){"use strict";n.r(e),n.d(e,"AuthLayoutModule",(function(){return l}));var o=n("tyNb"),b=n("ofXK"),i=n("3Pt+"),r=n("fXoL"),c=function(){return["/login"]},a=function(){return["/emergencies"]},s=[{path:"home",component:function(){function t(t){this.router=t,this.test=new Date,this.isCollapsed=!0}return t.prototype.ngOnInit=function(){var t=this;document.getElementsByTagName("html")[0].classList.add("auth-layout"),document.getElementsByTagName("body")[0].classList.add("bg-default"),this.router.events.subscribe((function(e){t.isCollapsed=!0}))},t.prototype.ngOnDestroy=function(){document.getElementsByTagName("html")[0].classList.remove("auth-layout"),document.getElementsByTagName("body")[0].classList.remove("bg-default")},t.\u0275fac=function(e){return new(e||t)(r.Mb(o.a))},t.\u0275cmp=r.Gb({type:t,selectors:[["app-home"]],decls:38,vars:6,consts:[[2,"background-color","white !important"],[1,"navbar","navbar-top","navbar-horizontal","navbar-expand-md"],[1,"container","px-4"],["routerLinkActive","active",1,"navbar-brand",3,"routerLink"],["src","assets/img/brand/logo.png"],["type","button","aria-controls","sidenav-collapse-main",1,"navbar-toggler",3,"click"],[1,"navbar-toggler-icon"],["id","sidenav-collapse-main",1,"collapse","navbar-collapse"],[1,"navbar-collapse-header","d-md-none"],[1,"row"],[1,"col-6","collapse-brand"],["routerLinkActive","active",3,"routerLink"],[1,"col-6","collapse-close"],["type","button",1,"navbar-toggler",3,"click"],[1,"navbar-nav","ml-auto"],[1,"nav-item"],["routerLinkActive","active",1,"nav-link","nav-link-icon",3,"routerLink"],[1,"ni","ni-key-25"],[1,"nav-link-inner--text"],[1,"header","py-8","py-lg-8"],[1,"container","mt--8","pb-5",2,"background-color","white !important"],[1,"row","justify-content-center"],[1,"col-lg-5","col-md-7"],[1,"card",2,"border","0"],["src","assets/img/brand/heart-clinics.jpg"],[1,"links",2,"text-align","center"],[2,"color","#bd5c5c"]],template:function(t,e){1&t&&(r.Rb(0,"div",0),r.Rb(1,"nav",1),r.Rb(2,"div",2),r.Rb(3,"a",3),r.Nb(4,"img",4),r.Qb(),r.Rb(5,"button",5),r.cc("click",(function(){return e.isCollapsed=!e.isCollapsed})),r.Nb(6,"span",6),r.Qb(),r.Rb(7,"div",7),r.Rb(8,"div",8),r.Rb(9,"div",9),r.Rb(10,"div",10),r.Rb(11,"a",11),r.Nb(12,"img",4),r.Qb(),r.Qb(),r.Rb(13,"div",12),r.Rb(14,"button",13),r.cc("click",(function(){return e.isCollapsed=!e.isCollapsed})),r.Nb(15,"span"),r.Nb(16,"span"),r.Qb(),r.Qb(),r.Qb(),r.Qb(),r.Rb(17,"ul",14),r.Rb(18,"li",15),r.Rb(19,"a",16),r.Nb(20,"i",17),r.Rb(21,"span",18),r.Fc(22,"INICIAR SESSION"),r.Qb(),r.Qb(),r.Qb(),r.Qb(),r.Qb(),r.Qb(),r.Qb(),r.Nb(23,"div",19),r.Rb(24,"div",20),r.Rb(25,"div",21),r.Rb(26,"div",22),r.Rb(27,"div",23),r.Nb(28,"img",24),r.Rb(29,"div",25),r.Rb(30,"h1"),r.Fc(31,"Hospital "),r.Rb(32,"span",26),r.Fc(33,"Tingo Mar\xeda"),r.Qb(),r.Qb(),r.Rb(34,"h4"),r.Fc(35,"Servicio de Calidad en la Atenci\xf3n en Salud"),r.Qb(),r.Rb(36,"h5"),r.Fc(37,"Creaci\xf3n e implementaci\xf3n: Mg. Alexander Encarnacion Ramirez"),r.Qb(),r.Qb(),r.Qb(),r.Qb(),r.Qb(),r.Qb(),r.Qb()),2&t&&(r.zb(3),r.mc("routerLink",r.pc(3,c)),r.zb(8),r.mc("routerLink",r.pc(4,c)),r.zb(8),r.mc("routerLink",r.pc(5,c)))},directives:[o.d,o.c],styles:[""]}),t}()},{path:"login",component:function(){function t(){}return t.prototype.ngOnInit=function(){},t.prototype.ngOnDestroy=function(){},t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Gb({type:t,selectors:[["app-login"]],decls:32,vars:2,consts:[[1,"header","py-7","py-lg-8"],[1,"container","mt--8","pb-5",2,"background-color","white !important"],[1,"row","justify-content-center"],[1,"col-lg-5","col-md-7"],[1,"card","bg-secondary","border-4"],[1,"card-body","px-lg-5","py-lg-5"],[1,"text-center","text-muted","mb-4"],["src","assets/img/brand/logo.png"],["role","form"],[1,"form-group","mb-3"],[1,"input-group","input-group-alternative"],[1,"input-group-prepend"],[1,"input-group-text"],[1,"ni","ni-email-83"],["placeholder","Email","type","email",1,"form-control"],[1,"form-group"],[1,"ni","ni-lock-circle-open"],["placeholder","Password","type","password",1,"form-control"],[1,"custom-control","custom-control-alternative","custom-checkbox"],["id"," customCheckLogin","type","checkbox",1,"custom-control-input"],["for"," customCheckLogin",1,"custom-control-label"],[1,"text-muted"],[1,"text-center"],["type","button",1,"btn","btn-primary","my-4",3,"routerLink"]],template:function(t,e){1&t&&(r.Nb(0,"div",0),r.Rb(1,"div",1),r.Rb(2,"div",2),r.Rb(3,"div",3),r.Rb(4,"div",4),r.Rb(5,"div",5),r.Rb(6,"div",6),r.Rb(7,"small"),r.Fc(8,"Ingrese sus Credenciales"),r.Qb(),r.Qb(),r.Rb(9,"div",6),r.Nb(10,"img",7),r.Qb(),r.Rb(11,"form",8),r.Rb(12,"div",9),r.Rb(13,"div",10),r.Rb(14,"div",11),r.Rb(15,"span",12),r.Nb(16,"i",13),r.Qb(),r.Qb(),r.Nb(17,"input",14),r.Qb(),r.Qb(),r.Rb(18,"div",15),r.Rb(19,"div",10),r.Rb(20,"div",11),r.Rb(21,"span",12),r.Nb(22,"i",16),r.Qb(),r.Qb(),r.Nb(23,"input",17),r.Qb(),r.Qb(),r.Rb(24,"div",18),r.Nb(25,"input",19),r.Rb(26,"label",20),r.Rb(27,"span",21),r.Fc(28,"Recordar"),r.Qb(),r.Qb(),r.Qb(),r.Rb(29,"div",22),r.Rb(30,"button",23),r.Fc(31,"Iniciar Sesion"),r.Qb(),r.Qb(),r.Qb(),r.Qb(),r.Qb(),r.Qb(),r.Qb(),r.Qb()),2&t&&(r.zb(30),r.mc("routerLink",r.pc(1,a)))},directives:[i.n,i.i,i.j,o.b],styles:[""]}),t}()},{path:"register",component:function(){function t(){}return t.prototype.ngOnInit=function(){},t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Gb({type:t,selectors:[["app-register"]],decls:71,vars:0,consts:[[1,"header","bg-gradient-danger","py-7","py-lg-8"],[1,"container"],[1,"header-body","text-center","mb-7"],[1,"row","justify-content-center"],[1,"col-lg-5","col-md-6"],[1,"text-white"],[1,"text-lead","text-light"],[1,"separator","separator-bottom","separator-skew","zindex-100"],["x","0","y","0","viewBox","0 0 2560 100","preserveAspectRatio","none","version","1.1","xmlns","http://www.w3.org/2000/svg"],["points","2560 0 2560 100 0 100",1,"fill-default"],[1,"container","mt--8","pb-5"],[1,"col-lg-6","col-md-8"],[1,"card","bg-secondary","shadow","border-0"],[1,"card-header","bg-transparent","pb-5"],[1,"text-muted","text-center","mt-2","mb-4"],[1,"text-center"],["href","javascript:void(0)",1,"btn","btn-neutral","btn-icon","mr-4"],[1,"btn-inner--icon"],["src","assets/img/icons/common/github.svg"],[1,"btn-inner--text"],["href","javascript:void(0)",1,"btn","btn-neutral","btn-icon"],["src","assets/img/icons/common/google.svg"],[1,"card-body","px-lg-5","py-lg-5"],[1,"text-center","text-muted","mb-4"],["role","form"],[1,"form-group"],[1,"input-group","input-group-alternative","mb-3"],[1,"input-group-prepend"],[1,"input-group-text"],[1,"ni","ni-hat-3"],["placeholder","Name","type","text",1,"form-control"],[1,"ni","ni-email-83"],["placeholder","Email","type","email",1,"form-control"],[1,"input-group","input-group-alternative"],[1,"ni","ni-lock-circle-open"],["placeholder","Password","type","password",1,"form-control"],[1,"text-muted","font-italic"],[1,"text-success","font-weight-700"],[1,"row","my-4"],[1,"col-12"],[1,"custom-control","custom-control-alternative","custom-checkbox"],["id","customCheckRegister","type","checkbox",1,"custom-control-input"],["for","customCheckRegister",1,"custom-control-label"],[1,"text-muted"],["href","#!"],["type","button",1,"btn","btn-primary","mt-4"]],template:function(t,e){1&t&&(r.Rb(0,"div",0),r.Rb(1,"div",1),r.Rb(2,"div",2),r.Rb(3,"div",3),r.Rb(4,"div",4),r.Rb(5,"h1",5),r.Fc(6,"Welcome!"),r.Qb(),r.Rb(7,"p",6),r.Fc(8,"Use these awesome forms to login or create new account in your project for free."),r.Qb(),r.Qb(),r.Qb(),r.Qb(),r.Qb(),r.Rb(9,"div",7),r.fc(),r.Rb(10,"svg",8),r.Nb(11,"polygon",9),r.Qb(),r.Qb(),r.Qb(),r.ec(),r.Rb(12,"div",10),r.Rb(13,"div",3),r.Rb(14,"div",11),r.Rb(15,"div",12),r.Rb(16,"div",13),r.Rb(17,"div",14),r.Rb(18,"small"),r.Fc(19,"Sign up with"),r.Qb(),r.Qb(),r.Rb(20,"div",15),r.Rb(21,"a",16),r.Rb(22,"span",17),r.Nb(23,"img",18),r.Qb(),r.Rb(24,"span",19),r.Fc(25,"Github"),r.Qb(),r.Qb(),r.Rb(26,"a",20),r.Rb(27,"span",17),r.Nb(28,"img",21),r.Qb(),r.Rb(29,"span",19),r.Fc(30,"Google"),r.Qb(),r.Qb(),r.Qb(),r.Qb(),r.Rb(31,"div",22),r.Rb(32,"div",23),r.Rb(33,"small"),r.Fc(34,"Or sign up with credentials"),r.Qb(),r.Qb(),r.Rb(35,"form",24),r.Rb(36,"div",25),r.Rb(37,"div",26),r.Rb(38,"div",27),r.Rb(39,"span",28),r.Nb(40,"i",29),r.Qb(),r.Qb(),r.Nb(41,"input",30),r.Qb(),r.Qb(),r.Rb(42,"div",25),r.Rb(43,"div",26),r.Rb(44,"div",27),r.Rb(45,"span",28),r.Nb(46,"i",31),r.Qb(),r.Qb(),r.Nb(47,"input",32),r.Qb(),r.Qb(),r.Rb(48,"div",25),r.Rb(49,"div",33),r.Rb(50,"div",27),r.Rb(51,"span",28),r.Nb(52,"i",34),r.Qb(),r.Qb(),r.Nb(53,"input",35),r.Qb(),r.Qb(),r.Rb(54,"div",36),r.Rb(55,"small"),r.Fc(56,"password strength: "),r.Rb(57,"span",37),r.Fc(58,"strong"),r.Qb(),r.Qb(),r.Qb(),r.Rb(59,"div",38),r.Rb(60,"div",39),r.Rb(61,"div",40),r.Nb(62,"input",41),r.Rb(63,"label",42),r.Rb(64,"span",43),r.Fc(65,"I agree with the "),r.Rb(66,"a",44),r.Fc(67,"Privacy Policy"),r.Qb(),r.Qb(),r.Qb(),r.Qb(),r.Qb(),r.Qb(),r.Rb(68,"div",15),r.Rb(69,"button",45),r.Fc(70,"Create account"),r.Qb(),r.Qb(),r.Qb(),r.Qb(),r.Qb(),r.Qb(),r.Qb(),r.Qb())},directives:[i.n,i.i,i.j],styles:[""]}),t}()}],l=function(){function t(){}return t.\u0275mod=r.Kb({type:t}),t.\u0275inj=r.Jb({factory:function(e){return new(e||t)},imports:[[b.c,o.e.forChild(s),i.d]]}),t}()}}]);