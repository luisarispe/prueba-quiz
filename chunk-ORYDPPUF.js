import{a as oe,b as re}from"./chunk-NDTWJPS7.js";import{a as te,b as ie,c as ne}from"./chunk-5NHOMGQN.js";import{a as V,b as q,c as B,e as P,f as A,i as z,k as f,l as O,m as H,n as J,o as K,p as W,q as X,r as Y,s as Z,t as $,u as ee}from"./chunk-JYIOHFZO.js";import{J as L,L as D,M as G,O as Q,P as R}from"./chunk-ZQHRCJLC.js";import{m as j}from"./chunk-HECFBYTN.js";import{w as N,x as T}from"./chunk-RV2WNGAU.js";import{$b as x,Bb as r,Ca as g,Da as C,Hb as s,Kb as i,Lb as t,Mb as p,Qb as E,Tb as _,Ub as F,Yb as U,Zb as M,_b as b,ac as o,cc as I,ec as k,fc as S,gb as n,hb as v,ra as h,zb as u}from"./chunk-WU3ENG2A.js";var le=["signUpNgForm"],ae=()=>["./"];function se(e,c){if(e&1&&(i(0,"fuse-alert",9),o(1),t()),e&2){let d=F();r("appearance","outline")("showIcon",!1)("type",d.alert.type)("@shake",d.alert.type==="error"),n(),I(" ",d.alert.message," ")}}function pe(e,c){e&1&&(i(0,"mat-error"),o(1," Full name is required "),t())}function de(e,c){e&1&&(i(0,"mat-error"),o(1," Email address is required "),t())}function ce(e,c){e&1&&(i(0,"mat-error"),o(1," Please enter a valid email address "),t())}function ue(e,c){e&1&&p(0,"mat-icon",16),e&2&&r("svgIcon","heroicons_solid:eye")}function fe(e,c){e&1&&p(0,"mat-icon",16),e&2&&r("svgIcon","heroicons_solid:eye-slash")}function ge(e,c){e&1&&(i(0,"span"),o(1," Create your free account "),t())}function Ce(e,c){e&1&&p(0,"mat-progress-spinner",22),e&2&&r("diameter",24)("mode","indeterminate")}var me=(()=>{class e{constructor(d,m){this._formBuilder=d,this._router=m,this.alert={type:"success",message:""},this.showAlert=!1}ngOnInit(){this.signUpForm=this._formBuilder.group({name:["",f.required],email:["",[f.required,f.email]],password:["",f.required],company:[""],agreements:["",f.requiredTrue]})}signUp(){}signIn(){this._router.navigateByUrl("auth/sign-in")}static{this.\u0275fac=function(m){return new(m||e)(v(X),v(N))}}static{this.\u0275cmp=h({type:e,selectors:[["sign-up-classic"]],viewQuery:function(m,a){if(m&1&&U(le,5),m&2){let l;M(l=b())&&(a.signUpNgForm=l.first)}},standalone:!0,features:[k],decls:52,vars:21,consts:[["passwordField",""],[1,"flex","min-w-0","flex-auto","flex-col","items-center","sm:justify-center"],[1,"w-full","px-4","py-8","sm:bg-card","sm:w-auto","sm:rounded-2xl","sm:p-12","sm:shadow"],[1,"mx-auto","w-full","max-w-80","sm:mx-0","sm:w-80"],[1,"w-12"],["src","images/logo/logo.svg"],[1,"mt-8","text-4xl","font-extrabold","leading-tight","tracking-tight"],[1,"mt-0.5","flex","items-baseline","font-medium"],[1,"ml-1","text-primary-500","hover:underline",3,"click"],[1,"mt-8",3,"appearance","showIcon","type"],[1,"mt-8",3,"formGroup"],[1,"w-full"],["id","name","matInput","",3,"formControlName"],["id","email","matInput","",3,"formControlName"],["id","password","matInput","","type","password",3,"formControlName"],["mat-icon-button","","type","button","matSuffix","",3,"click"],[1,"icon-size-5",3,"svgIcon"],["id","company-confirm","matInput","",3,"formControlName"],[1,"mt-1.5","inline-flex","w-full","items-end"],[1,"-ml-2",3,"color","formControlName"],[1,"ml-1","text-primary-500","hover:underline",3,"routerLink"],["mat-flat-button","",1,"fuse-mat-button-large","mt-6","w-full",3,"click","color","disabled"],[3,"diameter","mode"]],template:function(m,a){if(m&1){let l=E();i(0,"div",1)(1,"div",2)(2,"div",3)(3,"div",4),p(4,"img",5),t(),i(5,"div",6),o(6," Sign up "),t(),i(7,"div",7)(8,"div"),o(9,"Already have an account?"),t(),i(10,"a",8),_("click",function(){return g(l),C(a.signIn())}),o(11,"Sign in "),t()(),u(12,se,2,5,"fuse-alert",9),i(13,"form",10)(14,"mat-form-field",11)(15,"mat-label"),o(16,"Full name"),t(),p(17,"input",12),u(18,pe,2,0,"mat-error"),t(),i(19,"mat-form-field",11)(20,"mat-label"),o(21,"Email address"),t(),p(22,"input",13),u(23,de,2,0,"mat-error")(24,ce,2,0,"mat-error"),t(),i(25,"mat-form-field",11)(26,"mat-label"),o(27,"Password"),t(),p(28,"input",14,0),i(30,"button",15),_("click",function(){g(l);let y=x(29);return C(y.type==="password"?y.type="text":y.type="password")}),u(31,ue,1,1,"mat-icon",16)(32,fe,1,1,"mat-icon",16),t(),i(33,"mat-error"),o(34," Password is required "),t()(),i(35,"mat-form-field",11)(36,"mat-label"),o(37,"Company"),t(),p(38,"input",17),t(),i(39,"div",18)(40,"mat-checkbox",19)(41,"span"),o(42,"I agree with"),t(),i(43,"a",20),o(44,"Terms "),t(),i(45,"span"),o(46,"and"),t(),i(47,"a",20),o(48,"Privacy Policy "),t()()(),i(49,"button",21),_("click",function(){return g(l),C(a.signUp())}),u(50,ge,2,0,"span")(51,Ce,1,2,"mat-progress-spinner",22),t()()()()()}if(m&2){let l=x(29);n(12),s(a.showAlert?12:-1),n(),r("formGroup",a.signUpForm),n(4),r("formControlName","name"),n(),s(a.signUpForm.get("name").hasError("required")?18:-1),n(4),r("formControlName","email"),n(),s(a.signUpForm.get("email").hasError("required")?23:-1),n(),s(a.signUpForm.get("email").hasError("email")?24:-1),n(4),r("formControlName","password"),n(3),s(l.type==="password"?31:-1),n(),s(l.type==="text"?32:-1),n(6),r("formControlName","company"),n(2),r("color","primary")("formControlName","agreements"),n(3),r("routerLink",S(19,ae)),n(4),r("routerLink",S(20,ae)),n(2),r("color","primary")("disabled",a.signUpForm.disabled),n(),s(a.signUpForm.disabled?-1:50),n(),s(a.signUpForm.disabled?51:-1)}},dependencies:[T,ne,Y,J,z,O,H,Z,K,W,A,P,V,q,B,ee,$,G,L,D,R,Q,re,oe,ie,te],encapsulation:2,data:{animation:j}})}}return e})();var Le=[{path:"",component:me}];export{Le as default};
