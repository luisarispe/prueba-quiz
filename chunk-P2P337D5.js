import{f as s,g as l,h as n,i as m,j as d,k as f}from"./chunk-TAMNRW63.js";import{ha as i,p as e}from"./chunk-WU3ENG2A.js";var p={user:{id:"",fullName:"No usuario",email:"nousuario@test.com",isActive:!0,createdAt:new Date},authenticated:!1,token:localStorage.getItem("accessToken")??""};var a=class c{add({getState:t,patchState:o},{payload:u}){console.log(u),o({user:u,authenticated:!0})}addToken({patchState:t},{token:o}){localStorage.setItem("accessToken",o),t({token:o})}signOut({patchState:t}){localStorage.removeItem("accessToken"),t({token:"",authenticated:!1})}static{this.\u0275fac=function(o){return new(o||c)}}static{this.\u0275prov=i({token:c,factory:c.\u0275fac})}};e([s(m)],a.prototype,"add",null);e([s(d)],a.prototype,"addToken",null);e([s(f)],a.prototype,"signOut",null);a=e([l({name:"user",defaults:p})],a);var r=class{static getData(t){return t}static getUser(t){return t.user}static getToken(t){return t.token}static getAuthenticated(t){return t.authenticated}};e([n([a])],r,"getData",null);e([n([a])],r,"getUser",null);e([n([a])],r,"getToken",null);e([n([a])],r,"getAuthenticated",null);export{a,r as b};
