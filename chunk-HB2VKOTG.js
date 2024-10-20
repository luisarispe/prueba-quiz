import{a as J}from"./chunk-GDD3RMXL.js";import{B as ge,Ca as Y,Fb as K,Ha as j,Ja as _e,Ma as B,Na as v,Zb as A,a as c,b as h,ea as P,ha as f,ia as k,ib as o,ja as G,k as he,la as _,lc as p,nb as R,oa as me,q as fe,ta as T,ua as l,v as pe,wb as d,yc as ve}from"./chunk-JTGICLZP.js";var Fe=(()=>{class i{constructor(e,n){this._renderer=e,this._elementRef=n,this.onChange=r=>{},this.onTouched=()=>{}}setProperty(e,n){this._renderer.setProperty(this._elementRef.nativeElement,e,n)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static{this.\u0275fac=function(n){return new(n||i)(o(R),o(B))}}static{this.\u0275dir=l({type:i})}}return i})(),we=(()=>{class i extends Fe{static{this.\u0275fac=(()=>{let e;return function(r){return(e||(e=j(i)))(r||i)}})()}static{this.\u0275dir=l({type:i,features:[d]})}}return i})(),se=new _("");var Je={provide:se,useExisting:f(()=>Ie),multi:!0};function Qe(){let i=J()?J().getUserAgent():"";return/android (\d+)/.test(i.toLowerCase())}var et=new _(""),Ie=(()=>{class i extends Fe{constructor(e,n,r){super(e,n),this._compositionMode=r,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!Qe())}writeValue(e){let n=e??"";this.setProperty("value",n)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static{this.\u0275fac=function(n){return new(n||i)(o(R),o(B),o(et,8))}}static{this.\u0275dir=l({type:i,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(n,r){n&1&&A("input",function(a){return r._handleInput(a.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(a){return r._compositionEnd(a.target.value)})},features:[p([Je]),d]})}}return i})();function g(i){return i==null||(typeof i=="string"||Array.isArray(i))&&i.length===0}function Se(i){return i!=null&&typeof i.length=="number"}var S=new _(""),N=new _(""),tt=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,ye=class{static min(t){return it(t)}static max(t){return nt(t)}static required(t){return rt(t)}static requiredTrue(t){return st(t)}static email(t){return ot(t)}static minLength(t){return at(t)}static maxLength(t){return lt(t)}static pattern(t){return ut(t)}static nullValidator(t){return Ne(t)}static compose(t){return Te(t)}static composeAsync(t){return je(t)}};function it(i){return t=>{if(g(t.value)||g(i))return null;let e=parseFloat(t.value);return!isNaN(e)&&e<i?{min:{min:i,actual:t.value}}:null}}function nt(i){return t=>{if(g(t.value)||g(i))return null;let e=parseFloat(t.value);return!isNaN(e)&&e>i?{max:{max:i,actual:t.value}}:null}}function rt(i){return g(i.value)?{required:!0}:null}function st(i){return i.value===!0?null:{required:!0}}function ot(i){return g(i.value)||tt.test(i.value)?null:{email:!0}}function at(i){return t=>g(t.value)||!Se(t.value)?null:t.value.length<i?{minlength:{requiredLength:i,actualLength:t.value.length}}:null}function lt(i){return t=>Se(t.value)&&t.value.length>i?{maxlength:{requiredLength:i,actualLength:t.value.length}}:null}function ut(i){if(!i)return Ne;let t,e;return typeof i=="string"?(e="",i.charAt(0)!=="^"&&(e+="^"),e+=i,i.charAt(i.length-1)!=="$"&&(e+="$"),t=new RegExp(e)):(e=i.toString(),t=i),n=>{if(g(n.value))return null;let r=n.value;return t.test(r)?null:{pattern:{requiredPattern:e,actualValue:r}}}}function Ne(i){return null}function Oe(i){return i!=null}function xe(i){return ve(i)?fe(i):i}function Pe(i){let t={};return i.forEach(e=>{t=e!=null?c(c({},t),e):t}),Object.keys(t).length===0?null:t}function ke(i,t){return t.map(e=>e(i))}function ct(i){return!i.validate}function Ge(i){return i.map(t=>ct(t)?t:e=>t.validate(e))}function Te(i){if(!i)return null;let t=i.filter(Oe);return t.length==0?null:function(e){return Pe(ke(e,t))}}function oe(i){return i!=null?Te(Ge(i)):null}function je(i){if(!i)return null;let t=i.filter(Oe);return t.length==0?null:function(e){let n=ke(e,t).map(xe);return ge(n).pipe(pe(Pe))}}function ae(i){return i!=null?je(Ge(i)):null}function Ce(i,t){return i===null?[t]:Array.isArray(i)?[...i,t]:[i,t]}function Be(i){return i._rawValidators}function Re(i){return i._rawAsyncValidators}function Q(i){return i?Array.isArray(i)?i:[i]:[]}function L(i,t){return Array.isArray(i)?i.includes(t):i===t}function Ve(i,t){let e=Q(t);return Q(i).forEach(r=>{L(e,r)||e.push(r)}),e}function De(i,t){return Q(t).filter(e=>!L(i,e))}var $=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(t){this._rawValidators=t||[],this._composedValidatorFn=oe(this._rawValidators)}_setAsyncValidators(t){this._rawAsyncValidators=t||[],this._composedAsyncValidatorFn=ae(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(t){this._onDestroyCallbacks.push(t)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(t=>t()),this._onDestroyCallbacks=[]}reset(t=void 0){this.control&&this.control.reset(t)}hasError(t,e){return this.control?this.control.hasError(t,e):!1}getError(t,e){return this.control?this.control.getError(t,e):null}},u=class extends ${get formDirective(){return null}get path(){return null}},V=class extends ${constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},W=class{constructor(t){this._cd=t}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},dt={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},ii=h(c({},dt),{"[class.ng-submitted]":"isSubmitted"}),ni=(()=>{class i extends W{constructor(e){super(e)}static{this.\u0275fac=function(n){return new(n||i)(o(V,2))}}static{this.\u0275dir=l({type:i,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(n,r){n&2&&K("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},features:[d]})}}return i})(),ri=(()=>{class i extends W{constructor(e){super(e)}static{this.\u0275fac=function(n){return new(n||i)(o(u,10))}}static{this.\u0275dir=l({type:i,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(n,r){n&2&&K("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)("ng-submitted",r.isSubmitted)},features:[d]})}}return i})();var M="VALID",U="INVALID",y="PENDING",E="DISABLED",m=class{},q=class extends m{constructor(t,e){super(),this.value=t,this.source=e}},w=class extends m{constructor(t,e){super(),this.pristine=t,this.source=e}},I=class extends m{constructor(t,e){super(),this.touched=t,this.source=e}},C=class extends m{constructor(t,e){super(),this.status=t,this.source=e}},ee=class extends m{constructor(t){super(),this.source=t}},te=class extends m{constructor(t){super(),this.source=t}};function le(i){return(X(i)?i.validators:i)||null}function ht(i){return Array.isArray(i)?oe(i):i||null}function ue(i,t){return(X(t)?t.asyncValidators:i)||null}function ft(i){return Array.isArray(i)?ae(i):i||null}function X(i){return i!=null&&!Array.isArray(i)&&typeof i=="object"}function Ue(i,t,e){let n=i.controls;if(!(t?Object.keys(n):n).length)throw new P(1e3,"");if(!n[e])throw new P(1001,"")}function He(i,t,e){i._forEachChild((n,r)=>{if(e[r]===void 0)throw new P(1002,"")})}var D=class{constructor(t,e){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=null,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._events=new he,this.events=this._events.asObservable(),this._onDisabledChange=[],this._assignValidators(t),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(t){this._rawValidators=this._composedValidatorFn=t}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(t){this._rawAsyncValidators=this._composedAsyncValidatorFn=t}get parent(){return this._parent}get valid(){return this.status===M}get invalid(){return this.status===U}get pending(){return this.status==y}get disabled(){return this.status===E}get enabled(){return this.status!==E}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(t){this._assignValidators(t)}setAsyncValidators(t){this._assignAsyncValidators(t)}addValidators(t){this.setValidators(Ve(t,this._rawValidators))}addAsyncValidators(t){this.setAsyncValidators(Ve(t,this._rawAsyncValidators))}removeValidators(t){this.setValidators(De(t,this._rawValidators))}removeAsyncValidators(t){this.setAsyncValidators(De(t,this._rawAsyncValidators))}hasValidator(t){return L(this._rawValidators,t)}hasAsyncValidator(t){return L(this._rawAsyncValidators,t)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(t={}){let e=this.touched===!1;this.touched=!0;let n=t.sourceControl??this;this._parent&&!t.onlySelf&&this._parent.markAsTouched(h(c({},t),{sourceControl:n})),e&&t.emitEvent!==!1&&this._events.next(new I(!0,n))}markAllAsTouched(t={}){this.markAsTouched({onlySelf:!0,emitEvent:t.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(t))}markAsUntouched(t={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let n=t.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:t.emitEvent,sourceControl:n})}),this._parent&&!t.onlySelf&&this._parent._updateTouched(t,n),e&&t.emitEvent!==!1&&this._events.next(new I(!1,n))}markAsDirty(t={}){let e=this.pristine===!0;this.pristine=!1;let n=t.sourceControl??this;this._parent&&!t.onlySelf&&this._parent.markAsDirty(h(c({},t),{sourceControl:n})),e&&t.emitEvent!==!1&&this._events.next(new w(!1,n))}markAsPristine(t={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let n=t.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:t.emitEvent})}),this._parent&&!t.onlySelf&&this._parent._updatePristine(t,n),e&&t.emitEvent!==!1&&this._events.next(new w(!0,n))}markAsPending(t={}){this.status=y;let e=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new C(this.status,e)),this.statusChanges.emit(this.status)),this._parent&&!t.onlySelf&&this._parent.markAsPending(h(c({},t),{sourceControl:e}))}disable(t={}){let e=this._parentMarkedDirty(t.onlySelf);this.status=E,this.errors=null,this._forEachChild(r=>{r.disable(h(c({},t),{onlySelf:!0}))}),this._updateValue();let n=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new q(this.value,n)),this._events.next(new C(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(h(c({},t),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(t={}){let e=this._parentMarkedDirty(t.onlySelf);this.status=M,this._forEachChild(n=>{n.enable(h(c({},t),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent}),this._updateAncestors(h(c({},t),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(t,e){this._parent&&!t.onlySelf&&(this._parent.updateValueAndValidity(t),t.skipPristineCheck||this._parent._updatePristine({},e),this._parent._updateTouched({},e))}setParent(t){this._parent=t}getRawValue(){return this.value}updateValueAndValidity(t={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let n=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===M||this.status===y)&&this._runAsyncValidator(n,t.emitEvent)}let e=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new q(this.value,e)),this._events.next(new C(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!t.onlySelf&&this._parent.updateValueAndValidity(h(c({},t),{sourceControl:e}))}_updateTreeValidity(t={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(t)),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?E:M}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(t,e){if(this.asyncValidator){this.status=y,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1};let n=xe(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:e,shouldHaveEmitted:t})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let t=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,t}return!1}setErrors(t,e={}){this.errors=t,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(t){let e=t;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((n,r)=>n&&n._find(r),this)}getError(t,e){let n=e?this.get(e):this;return n&&n.errors?n.errors[t]:null}hasError(t,e){return!!this.getError(t,e)}get root(){let t=this;for(;t._parent;)t=t._parent;return t}_updateControlsErrors(t,e,n){this.status=this._calculateStatus(),t&&this.statusChanges.emit(this.status),(t||n)&&this._events.next(new C(this.status,e)),this._parent&&this._parent._updateControlsErrors(t,e,n)}_initObservables(){this.valueChanges=new v,this.statusChanges=new v}_calculateStatus(){return this._allControlsDisabled()?E:this.errors?U:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(y)?y:this._anyControlsHaveStatus(U)?U:M}_anyControlsHaveStatus(t){return this._anyControls(e=>e.status===t)}_anyControlsDirty(){return this._anyControls(t=>t.dirty)}_anyControlsTouched(){return this._anyControls(t=>t.touched)}_updatePristine(t,e){let n=!this._anyControlsDirty(),r=this.pristine!==n;this.pristine=n,this._parent&&!t.onlySelf&&this._parent._updatePristine(t,e),r&&this._events.next(new w(this.pristine,e))}_updateTouched(t={},e){this.touched=this._anyControlsTouched(),this._events.next(new I(this.touched,e)),this._parent&&!t.onlySelf&&this._parent._updateTouched(t,e)}_registerOnCollectionChange(t){this._onCollectionChange=t}_setUpdateStrategy(t){X(t)&&t.updateOn!=null&&(this._updateOn=t.updateOn)}_parentMarkedDirty(t){let e=this._parent&&this._parent.dirty;return!t&&!!e&&!this._parent._anyControlsDirty()}_find(t){return null}_assignValidators(t){this._rawValidators=Array.isArray(t)?t.slice():t,this._composedValidatorFn=ht(this._rawValidators)}_assignAsyncValidators(t){this._rawAsyncValidators=Array.isArray(t)?t.slice():t,this._composedAsyncValidatorFn=ft(this._rawAsyncValidators)}},b=class extends D{constructor(t,e,n){super(le(e),ue(n,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(t,e){return this.controls[t]?this.controls[t]:(this.controls[t]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(t,e,n={}){this.registerControl(t,e),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}removeControl(t,e={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(t,e,n={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],e&&this.registerControl(t,e),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}contains(t){return this.controls.hasOwnProperty(t)&&this.controls[t].enabled}setValue(t,e={}){He(this,!0,t),Object.keys(t).forEach(n=>{Ue(this,!0,n),this.controls[n].setValue(t[n],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(t,e={}){t!=null&&(Object.keys(t).forEach(n=>{let r=this.controls[n];r&&r.patchValue(t[n],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(t={},e={}){this._forEachChild((n,r)=>{n.reset(t?t[r]:null,{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e)}getRawValue(){return this._reduceChildren({},(t,e,n)=>(t[n]=e.getRawValue(),t))}_syncPendingControls(){let t=this._reduceChildren(!1,(e,n)=>n._syncPendingControls()?!0:e);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_forEachChild(t){Object.keys(this.controls).forEach(e=>{let n=this.controls[e];n&&t(n,e)})}_setUpControls(){this._forEachChild(t=>{t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(t){for(let[e,n]of Object.entries(this.controls))if(this.contains(e)&&t(n))return!0;return!1}_reduceValue(){let t={};return this._reduceChildren(t,(e,n,r)=>((n.enabled||this.disabled)&&(e[r]=n.value),e))}_reduceChildren(t,e){let n=t;return this._forEachChild((r,s)=>{n=e(n,r,s)}),n}_allControlsDisabled(){for(let t of Object.keys(this.controls))if(this.controls[t].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(t){return this.controls.hasOwnProperty(t)?this.controls[t]:null}};var ie=class extends b{};var O=new _("CallSetDisabledState",{providedIn:"root",factory:()=>x}),x="always";function ce(i,t){return[...t.path,i]}function ne(i,t,e=x){de(i,t),t.valueAccessor.writeValue(i.value),(i.disabled||e==="always")&&t.valueAccessor.setDisabledState?.(i.disabled),gt(i,t),_t(i,t),mt(i,t),pt(i,t)}function be(i,t,e=!0){let n=()=>{};t.valueAccessor&&(t.valueAccessor.registerOnChange(n),t.valueAccessor.registerOnTouched(n)),Z(i,t),i&&(t._invokeOnDestroyCallbacks(),i._registerOnCollectionChange(()=>{}))}function z(i,t){i.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(t)})}function pt(i,t){if(t.valueAccessor.setDisabledState){let e=n=>{t.valueAccessor.setDisabledState(n)};i.registerOnDisabledChange(e),t._registerOnDestroy(()=>{i._unregisterOnDisabledChange(e)})}}function de(i,t){let e=Be(i);t.validator!==null?i.setValidators(Ce(e,t.validator)):typeof e=="function"&&i.setValidators([e]);let n=Re(i);t.asyncValidator!==null?i.setAsyncValidators(Ce(n,t.asyncValidator)):typeof n=="function"&&i.setAsyncValidators([n]);let r=()=>i.updateValueAndValidity();z(t._rawValidators,r),z(t._rawAsyncValidators,r)}function Z(i,t){let e=!1;if(i!==null){if(t.validator!==null){let r=Be(i);if(Array.isArray(r)&&r.length>0){let s=r.filter(a=>a!==t.validator);s.length!==r.length&&(e=!0,i.setValidators(s))}}if(t.asyncValidator!==null){let r=Re(i);if(Array.isArray(r)&&r.length>0){let s=r.filter(a=>a!==t.asyncValidator);s.length!==r.length&&(e=!0,i.setAsyncValidators(s))}}}let n=()=>{};return z(t._rawValidators,n),z(t._rawAsyncValidators,n),e}function gt(i,t){t.valueAccessor.registerOnChange(e=>{i._pendingValue=e,i._pendingChange=!0,i._pendingDirty=!0,i.updateOn==="change"&&Le(i,t)})}function mt(i,t){t.valueAccessor.registerOnTouched(()=>{i._pendingTouched=!0,i.updateOn==="blur"&&i._pendingChange&&Le(i,t),i.updateOn!=="submit"&&i.markAsTouched()})}function Le(i,t){i._pendingDirty&&i.markAsDirty(),i.setValue(i._pendingValue,{emitModelToViewChange:!1}),t.viewToModelUpdate(i._pendingValue),i._pendingChange=!1}function _t(i,t){let e=(n,r)=>{t.valueAccessor.writeValue(n),r&&t.viewToModelUpdate(n)};i.registerOnChange(e),t._registerOnDestroy(()=>{i._unregisterOnChange(e)})}function $e(i,t){i==null,de(i,t)}function vt(i,t){return Z(i,t)}function yt(i,t){if(!i.hasOwnProperty("model"))return!1;let e=i.model;return e.isFirstChange()?!0:!Object.is(t,e.currentValue)}function Ct(i){return Object.getPrototypeOf(i.constructor)===we}function We(i,t){i._syncPendingControls(),t.forEach(e=>{let n=e.control;n.updateOn==="submit"&&n._pendingChange&&(e.viewToModelUpdate(n._pendingValue),n._pendingChange=!1)})}function Vt(i,t){if(!t)return null;Array.isArray(t);let e,n,r;return t.forEach(s=>{s.constructor===Ie?e=s:Ct(s)?n=s:r=s}),r||n||e||null}function Dt(i,t){let e=i.indexOf(t);e>-1&&i.splice(e,1)}var bt={provide:u,useExisting:f(()=>At)},F=Promise.resolve(),At=(()=>{class i extends u{constructor(e,n,r){super(),this.callSetDisabledState=r,this.submitted=!1,this._directives=new Set,this.ngSubmit=new v,this.form=new b({},oe(e),ae(n))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){F.then(()=>{let n=this._findContainer(e.path);e.control=n.registerControl(e.name,e.control),ne(e.control,e,this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){F.then(()=>{let n=this._findContainer(e.path);n&&n.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){F.then(()=>{let n=this._findContainer(e.path),r=new b({});$e(r,e),n.registerControl(e.name,r),r.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){F.then(()=>{let n=this._findContainer(e.path);n&&n.removeControl(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,n){F.then(()=>{this.form.get(e.path).setValue(n)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submitted=!0,We(this.form,this._directives),this.ngSubmit.emit(e),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submitted=!1}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static{this.\u0275fac=function(n){return new(n||i)(o(S,10),o(N,10),o(O,8))}}static{this.\u0275dir=l({type:i,selectors:[["form",3,"ngNoForm","",3,"formGroup",""],["ng-form"],["","ngForm",""]],hostBindings:function(n,r){n&1&&A("submit",function(a){return r.onSubmit(a)})("reset",function(){return r.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[p([bt]),d]})}}return i})();function Ae(i,t){let e=i.indexOf(t);e>-1&&i.splice(e,1)}function Me(i){return typeof i=="object"&&i!==null&&Object.keys(i).length===2&&"value"in i&&"disabled"in i}var H=class extends D{constructor(t=null,e,n){super(le(e),ue(n,e)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(t),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),X(e)&&(e.nonNullable||e.initialValueIsDefault)&&(Me(t)?this.defaultValue=t.value:this.defaultValue=t)}setValue(t,e={}){this.value=this._pendingValue=t,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(t,e={}){this.setValue(t,e)}reset(t=this.defaultValue,e={}){this._applyFormState(t),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),this._pendingChange=!1}_updateValue(){}_anyControls(t){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(t){this._onChange.push(t)}_unregisterOnChange(t){Ae(this._onChange,t)}registerOnDisabledChange(t){this._onDisabledChange.push(t)}_unregisterOnDisabledChange(t){Ae(this._onDisabledChange,t)}_forEachChild(t){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(t){Me(t)?(this.value=this._pendingValue=t.value,t.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=t}};var Mt=i=>i instanceof H,Et=(()=>{class i extends u{ngOnInit(){this._checkParentType(),this.formDirective.addFormGroup(this)}ngOnDestroy(){this.formDirective&&this.formDirective.removeFormGroup(this)}get control(){return this.formDirective.getFormGroup(this)}get path(){return ce(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}static{this.\u0275fac=(()=>{let e;return function(r){return(e||(e=j(i)))(r||i)}})()}static{this.\u0275dir=l({type:i,features:[d]})}}return i})();var oi=(()=>{class i{static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275dir=l({type:i,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]})}}return i})();var Ft={provide:se,useExisting:f(()=>It),multi:!0};var wt=(()=>{class i{constructor(){this._accessors=[]}add(e,n){this._accessors.push([e,n])}remove(e){for(let n=this._accessors.length-1;n>=0;--n)if(this._accessors[n][1]===e){this._accessors.splice(n,1);return}}select(e){this._accessors.forEach(n=>{this._isSameGroup(n,e)&&n[1]!==e&&n[1].fireUncheck(e.value)})}_isSameGroup(e,n){return e[0].control?e[0]._parent===n._control._parent&&e[1].name===n.name:!1}static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275prov=k({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})(),It=(()=>{class i extends we{constructor(e,n,r,s){super(e,n),this._registry=r,this._injector=s,this.setDisabledStateFired=!1,this.onChange=()=>{},this.callSetDisabledState=me(O,{optional:!0})??x}ngOnInit(){this._control=this._injector.get(V),this._checkName(),this._registry.add(this._control,this)}ngOnDestroy(){this._registry.remove(this)}writeValue(e){this._state=e===this.value,this.setProperty("checked",this._state)}registerOnChange(e){this._fn=e,this.onChange=()=>{e(this.value),this._registry.select(this)}}setDisabledState(e){(this.setDisabledStateFired||e||this.callSetDisabledState==="whenDisabledForLegacyCode")&&this.setProperty("disabled",e),this.setDisabledStateFired=!0}fireUncheck(e){this.writeValue(e)}_checkName(){this.name&&this.formControlName&&(this.name,this.formControlName),!this.name&&this.formControlName&&(this.name=this.formControlName)}static{this.\u0275fac=function(n){return new(n||i)(o(R),o(B),o(wt),o(_e))}}static{this.\u0275dir=l({type:i,selectors:[["input","type","radio","formControlName",""],["input","type","radio","formControl",""],["input","type","radio","ngModel",""]],hostBindings:function(n,r){n&1&&A("change",function(){return r.onChange()})("blur",function(){return r.onTouched()})},inputs:{name:"name",formControlName:"formControlName",value:"value"},features:[p([Ft]),d]})}}return i})();var qe=new _("");var St={provide:u,useExisting:f(()=>ze)},ze=(()=>{class i extends u{constructor(e,n,r){super(),this.callSetDisabledState=r,this.submitted=!1,this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new v,this._setValidators(e),this._setAsyncValidators(n)}ngOnChanges(e){this._checkFormPresent(),e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(Z(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(e){let n=this.form.get(e.path);return ne(n,e,this.callSetDisabledState),n.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),n}getControl(e){return this.form.get(e.path)}removeControl(e){be(e.control||null,e,!1),Dt(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}getFormArray(e){return this.form.get(e.path)}updateModel(e,n){this.form.get(e.path).setValue(n)}onSubmit(e){return this.submitted=!0,We(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new ee(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submitted=!1,this.form._events.next(new te(this.form))}_updateDomValue(){this.directives.forEach(e=>{let n=e.control,r=this.form.get(e.path);n!==r&&(be(n||null,e),Mt(r)&&(ne(r,e,this.callSetDisabledState),e.control=r))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let n=this.form.get(e.path);$e(n,e),n.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){if(this.form){let n=this.form.get(e.path);n&&vt(n,e)&&n.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){de(this.form,this),this._oldForm&&Z(this._oldForm,this)}_checkFormPresent(){this.form}static{this.\u0275fac=function(n){return new(n||i)(o(S,10),o(N,10),o(O,8))}}static{this.\u0275dir=l({type:i,selectors:[["","formGroup",""]],hostBindings:function(n,r){n&1&&A("submit",function(a){return r.onSubmit(a)})("reset",function(){return r.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[p([St]),d,Y]})}}return i})(),Nt={provide:u,useExisting:f(()=>Ze)},Ze=(()=>{class i extends Et{constructor(e,n,r){super(),this.name=null,this._parent=e,this._setValidators(n),this._setAsyncValidators(r)}_checkParentType(){Ye(this._parent)}static{this.\u0275fac=function(n){return new(n||i)(o(u,13),o(S,10),o(N,10))}}static{this.\u0275dir=l({type:i,selectors:[["","formGroupName",""]],inputs:{name:[0,"formGroupName","name"]},features:[p([Nt]),d]})}}return i})(),Ot={provide:u,useExisting:f(()=>Xe)},Xe=(()=>{class i extends u{constructor(e,n,r){super(),this.name=null,this._parent=e,this._setValidators(n),this._setAsyncValidators(r)}ngOnInit(){this._checkParentType(),this.formDirective.addFormArray(this)}ngOnDestroy(){this.formDirective&&this.formDirective.removeFormArray(this)}get control(){return this.formDirective.getFormArray(this)}get formDirective(){return this._parent?this._parent.formDirective:null}get path(){return ce(this.name==null?this.name:this.name.toString(),this._parent)}_checkParentType(){Ye(this._parent)}static{this.\u0275fac=function(n){return new(n||i)(o(u,13),o(S,10),o(N,10))}}static{this.\u0275dir=l({type:i,selectors:[["","formArrayName",""]],inputs:{name:[0,"formArrayName","name"]},features:[p([Ot]),d]})}}return i})();function Ye(i){return!(i instanceof Ze)&&!(i instanceof ze)&&!(i instanceof Xe)}var xt={provide:V,useExisting:f(()=>Pt)},Pt=(()=>{class i extends V{set isDisabled(e){}static{this._ngModelWarningSentOnce=!1}constructor(e,n,r,s,a){super(),this._ngModelWarningConfig=a,this._added=!1,this.name=null,this.update=new v,this._ngModelWarningSent=!1,this._parent=e,this._setValidators(n),this._setAsyncValidators(r),this.valueAccessor=Vt(this,s)}ngOnChanges(e){this._added||this._setUpControl(),yt(e,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}get path(){return ce(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this._added=!0}static{this.\u0275fac=function(n){return new(n||i)(o(u,13),o(S,10),o(N,10),o(se,10),o(qe,8))}}static{this.\u0275dir=l({type:i,selectors:[["","formControlName",""]],inputs:{name:[0,"formControlName","name"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},features:[p([xt]),d,Y]})}}return i})();var Ke=(()=>{class i{static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275mod=T({type:i})}static{this.\u0275inj=G({})}}return i})(),re=class extends D{constructor(t,e,n){super(le(e),ue(n,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}at(t){return this.controls[this._adjustIndex(t)]}push(t,e={}){this.controls.push(t),this._registerControl(t),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}insert(t,e,n={}){this.controls.splice(t,0,e),this._registerControl(e),this.updateValueAndValidity({emitEvent:n.emitEvent})}removeAt(t,e={}){let n=this._adjustIndex(t);n<0&&(n=0),this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),this.controls.splice(n,1),this.updateValueAndValidity({emitEvent:e.emitEvent})}setControl(t,e,n={}){let r=this._adjustIndex(t);r<0&&(r=0),this.controls[r]&&this.controls[r]._registerOnCollectionChange(()=>{}),this.controls.splice(r,1),e&&(this.controls.splice(r,0,e),this._registerControl(e)),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(t,e={}){He(this,!1,t),t.forEach((n,r)=>{Ue(this,!1,r),this.at(r).setValue(n,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(t,e={}){t!=null&&(t.forEach((n,r)=>{this.at(r)&&this.at(r).patchValue(n,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(t=[],e={}){this._forEachChild((n,r)=>{n.reset(t[r],{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e)}getRawValue(){return this.controls.map(t=>t.getRawValue())}clear(t={}){this.controls.length<1||(this._forEachChild(e=>e._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:t.emitEvent}))}_adjustIndex(t){return t<0?t+this.length:t}_syncPendingControls(){let t=this.controls.reduce((e,n)=>n._syncPendingControls()?!0:e,!1);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_forEachChild(t){this.controls.forEach((e,n)=>{t(e,n)})}_updateValue(){this.value=this.controls.filter(t=>t.enabled||this.disabled).map(t=>t.value)}_anyControls(t){return this.controls.some(e=>e.enabled&&t(e))}_setUpControls(){this._forEachChild(t=>this._registerControl(t))}_allControlsDisabled(){for(let t of this.controls)if(t.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(t){t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)}_find(t){return this.at(t)??null}};function Ee(i){return!!i&&(i.asyncValidators!==void 0||i.validators!==void 0||i.updateOn!==void 0)}var kt=(()=>{class i{constructor(){this.useNonNullable=!1}get nonNullable(){let e=new i;return e.useNonNullable=!0,e}group(e,n=null){let r=this._reduceControls(e),s={};return Ee(n)?s=n:n!==null&&(s.validators=n.validator,s.asyncValidators=n.asyncValidator),new b(r,s)}record(e,n=null){let r=this._reduceControls(e);return new ie(r,n)}control(e,n,r){let s={};return this.useNonNullable?(Ee(n)?s=n:(s.validators=n,s.asyncValidators=r),new H(e,h(c({},s),{nonNullable:!0}))):new H(e,n,r)}array(e,n,r){let s=e.map(a=>this._createControl(a));return new re(s,n,r)}_reduceControls(e){let n={};return Object.keys(e).forEach(r=>{n[r]=this._createControl(e[r])}),n}_createControl(e){if(e instanceof H)return e;if(e instanceof D)return e;if(Array.isArray(e)){let n=e[0],r=e.length>1?e[1]:null,s=e.length>2?e[2]:null;return this.control(n,r,s)}else return this.control(e)}static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275prov=k({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();var ai=(()=>{class i extends kt{group(e,n=null){return super.group(e,n)}control(e,n,r){return super.control(e,n,r)}array(e,n,r){return super.array(e,n,r)}static{this.\u0275fac=(()=>{let e;return function(r){return(e||(e=j(i)))(r||i)}})()}static{this.\u0275prov=k({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();var li=(()=>{class i{static withConfig(e){return{ngModule:i,providers:[{provide:O,useValue:e.callSetDisabledState??x}]}}static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275mod=T({type:i})}static{this.\u0275inj=G({imports:[Ke]})}}return i})(),ui=(()=>{class i{static withConfig(e){return{ngModule:i,providers:[{provide:qe,useValue:e.warnOnNgModelWithFormControl??"always"},{provide:O,useValue:e.callSetDisabledState??x}]}}static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275mod=T({type:i})}static{this.\u0275inj=G({imports:[Ke]})}}return i})();export{se as a,Ie as b,S as c,ye as d,V as e,ni as f,ri as g,b as h,At as i,H as j,oi as k,It as l,ze as m,Ze as n,Xe as o,Pt as p,re as q,kt as r,ai as s,li as t,ui as u};
