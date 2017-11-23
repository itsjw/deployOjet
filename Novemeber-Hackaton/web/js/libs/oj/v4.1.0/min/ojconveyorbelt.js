/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore","jquery","ojs/ojcomponentcore"],function(a,g){function c(a,c,e,f,g,k,l,m){this.Pf=a;this.pUa=c;this.xD=e;this.kQ=f;g&&(g.D4a&&(this.HUa=g.D4a),g.n4a&&(this.WTa=g.n4a),g.Sya&&(this.IUa=g.Sya),g.yya&&(this.XTa=g.yya),g.Rya&&(this.GUa=g.Rya),g.xya&&(this.VTa=g.xya));k&&(k.wza&&(this.nra=k.wza),k.g1a&&(this.i2=k.g1a),k.U_a&&(this.Hz=k.U_a),k.em&&(this.dQ=k.em),k.vm&&(this.KT=k.vm),k.gM&&(this.kr=k.gM),k.GN&&(this.Rr=k.GN),k.Wwa&&(this.rS=k.Wwa),k.cva&&(this.X1=k.cva),k.Ug&&(this.cF=
k.Ug),k.rd&&(this.bF=k.rd),k.Vc&&(this.wp=k.Vc));l&&(l.Kya&&(this.Apa=l.Kya),l.yua&&(this.Sha=l.yua),l.uxa&&(this.tA=l.uxa),l.Zwa&&(this.lE=l.Zwa));this.iQ=!0;this.RD=0;m&&(this.mga=m.browserVersion);a=navigator.userAgent.toLowerCase();if(-1!==a.indexOf("gecko/"))this.RHa=!0;else if(-1!==a.indexOf("opera"))this.SHa=!0;else if(m&&"safari"===m.browser)this.zga=!0;else if(!m||"edge"!==m.browser)if(-1!==a.indexOf("applewebkit")||-1!==a.indexOf("safari"))this.THa=!0}c.prototype.Hq=function(a){var d=this;
if(a){this.WJa();this.hKa(this.HUa,this.IUa,this.GUa);this.$Ja(this.WTa,this.XTa,this.VTa);var e=this.Xl;this.Qga=e.offsetWidth;this.Pga=e.offsetHeight;this.yS();this.wS();this.HK=function(a){d.xQa(a)};c.Et(this.Pf,"mousewheel",this.HK);c.Et(this.Pf,"wheel",this.HK);this.D7=function(a){d.q4(a)};c.Et(this.Mh,"touchstart",this.D7);this.C7=function(a){d.p4(a)};c.Et(this.Mh,"touchmove",this.C7);this.PL=function(a){d.n4(a)};c.Et(this.Mh,"touchend",this.PL);c.Et(this.Mh,"touchcancel",this.PL);this.F5=0}else this.pqa();
this.Q0();this.hga(a);this.Jh(!0);a&&(this.dQ&&(this.Rl=function(){d.Jh(!1)},this.dQ.call(this.Hz,this.Pf,this.Rl),this.dQ.call(this.Hz,this.bn,this.Rl)),this.bF&&this.bF(this.bn))};c.prototype.destroy=function(){this.xf();var a=this.Pf;c.MA(a,"mousewheel",this.HK);c.MA(a,"wheel",this.HK);c.MA(this.Mh,"touchstart",this.D7);c.MA(this.Mh,"touchmove",this.C7);c.MA(this.Mh,"touchend",this.PL);c.MA(this.Mh,"touchcancel",this.PL);c.MA(this.Mh,"scroll",this.B6);this.B6=this.PL=this.C7=this.D7=this.HK=null;
this.KT&&this.Rl&&(this.KT.call(this.Hz,a,this.Rl),this.KT.call(this.Hz,this.bn,this.Rl));this.Rl=null;this.DWa(this.bn,a);a.removeChild(this.Mh);a.removeChild(this.Xl);a.removeChild(this.Ee);this.bn=this.Mh=this.Ee=this.Xl=null;this.Q0();this.xD=this.Hz=this.wp=this.bF=this.cF=this.X1=this.rS=this.Rr=this.kr=this.KT=this.dQ=this.i2=this.nra=this.Pf=null};c.prototype.bG=function(){this.Jh(!1)};c.prototype.J5a=function(a){this.SA(a,!0)};c.prototype.Y1a=function(){return this.Tk()};c.prototype.EWa=
function(a,c){for(var e=a.childNodes;0<e.length;){var f=e[0];this.cF&&this.cF(f);c.appendChild(f);1===f.nodeType&&this.tA&&this.kr(f,this.tA)}};c.prototype.DWa=function(a,c){if(a)for(var e=a.childNodes;0<e.length;){var f=e[0];c.appendChild(f);1===f.nodeType&&this.tA&&this.Rr(f,this.tA)}};c.AJ=function(a){var c=a.ownerDocument.defaultView,e=null;return e=c?c.getComputedStyle(a,null):a.currentStyle};c.eNa=function(a){a=c.AJ(a);return c.Ih(a.width)};c.dNa=function(a){a=c.AJ(a);return c.Ih(a.height)};
c.Ih=function(a){return 0<a.length&&"auto"!=a?(a=parseInt(a,10),isNaN(a)&&(a=0),a):0};c.Et=function(a,c,e){a.addEventListener?a.addEventListener(c,e,!1):a.attachEvent&&a.attachEvent("on"+c,e)};c.MA=function(a,c,e){a.removeEventListener?a.removeEventListener(c,e,!1):a.detachEvent&&a.detachEvent("on"+c,e)};c.JOa=function(a){var c=0;return c=null!=a.wheelDelta?a.wheelDelta:null!=a.deltaY?-a.deltaY:-a.detail};c.x7a=function(){var a=document.createElement("div");a.style.display="table";return a};c.y7a=
function(){var a=document.createElement("div");a.style.display="table-row";return a};c.w7a=function(){var a=document.createElement("div");a.style.display="table-cell";return a};c.v8a=function(a,c,e,f){var g=document.createElement("div"),k=g.style;k.display="inline-block";g.appendChild(a);c.appendChild(g);e&&(k.maxWidth=g.offsetWidth+"px");f&&(k.maxHeight=g.offsetHeight+"px");return g};c.prototype.re=function(){return"horizontal"===this.pUa};c.prototype.mSa=function(){return!this.qka().hasChildNodes()};
c.prototype.pqa=function(){this.F5=this.Tk();this.T6(0);this.yS();this.wS()};c.prototype.Q0=function(){this.tU=this.lh=null};c.prototype.Jh=function(a){a||this.pqa();this.Q0();this.lh&&this.tU||(this.lh=this.Roa());a||this.hga(!1);this.sHa()};c.prototype.sHa=function(){var a=this.Xl.style,c=this.Ee.style,e=this.bn,f=this.lh;this.re()?(e=.5*(f.jm-e.offsetHeight),a.top=e+"px",c.top=e+"px"):(e=.5*(f.zk-e.offsetWidth),this.kQ&&(e=-e),a.left=e+"px",c.left=e+"px")};c.prototype.hga=function(a){var d=this.bn,
e=this.re(),f=e?c.eNa(this.Pf):c.dNa(this.Pf);this.FK=0;this.DK=e?d.offsetWidth-f+this.Qga:d.offsetHeight-f+this.Pga;0>this.DK&&(this.DK=0);this.yS();this.wS();this.SA(a?this.FK:this.F5,!0);this.F5=0};c.prototype.WJa=function(){var a=this,d=this.Pf,e=document.createElement("div");this.Mh=e;this.Apa&&this.kr(e,this.Apa);var f=document.createElement("div");this.bn=f;this.Sha&&this.kr(f,this.Sha);this.EWa(d,f);d.appendChild(e);e.appendChild(f);this.B6=function(){a.JQa()};c.Et(e,"scroll",this.B6)};c.prototype.SMa=
function(){for(var a=[],c=this.xD?this.xD:this.bn,e=c.children,f=e.length,g=0;g<f;g++){var k=e[g];1===k.nodeType&&a.push(k)}this.X1&&(g=this.X1,a=g(a));if(c===this.bn&&this.tA)for(g=0;g<a.length;g++)c=a[g],this.rS(c,this.tA)||this.kr(c,this.tA);return a};c.prototype.hKa=function(a,d,e){var f=this,g=document.createElement("div");this.Ee=g;a&&g.setAttribute("id",a);g.setAttribute("class",d);g.setAttribute("aria-hidden","true");c.Et(g,"click",function(){f.pra()});e&&g.appendChild(e);this.Pf.insertBefore(g,
this.Mh)};c.prototype.$Ja=function(a,d,e){var f=this,g=document.createElement("div");this.Xl=g;a&&g.setAttribute("id",a);g.setAttribute("class",d);g.setAttribute("aria-hidden","true");c.Et(g,"click",function(){f.ora()});e&&g.appendChild(e);this.Pf.appendChild(g)};c.prototype.qka=function(){var a=this.xD;a||(a=this.bn);return a};c.prototype.Roa=function(){var a=this.qka(),c=this.SMa(),e={zk:0,jm:0},f=[];if(a.hasChildNodes()&&c&&0<c.length)for(var a=this.re(),g=0,g=this.bn.offsetWidth,k=0,l=null,m=
0;m<c.length;m++){var p=c[m];if(1===p.nodeType){var t=p.offsetWidth,s=p.offsetHeight,n={zk:t,jm:s,id:p.id};if(a){var q=p.offsetLeft;this.xD||0!==q||(p=p.parentNode,q=p.offsetLeft);n.start=this.kQ?g-(q+t):q;0===m&&(k=n.start);n.start-=k;e.zk=n.start+t;e.jm=Math.max(e.jm,s);n.end=e.zk-1}else q=p.offsetTop,this.xD||0!==q||(p=p.parentNode,q=p.offsetTop),n.start=q,e.zk=Math.max(e.zk,t),e.jm=n.start+s,n.end=e.jm-1;l&&l.end>=n.start&&(t=l.end-(n.start-1),l.end-=t,a?l.zk-=t:l.jm-=t);f.push(n);l=n}}this.tU=
f;return e};c.prototype.hE=function(){if(!this.tU){var a=this.Roa();this.lh||(this.lh=a)}return this.tU};c.prototype.DYa=function(){this.Rr(this.Xl,this.lE)};c.prototype.EYa=function(){this.Rr(this.Ee,this.lE)};c.prototype.wS=function(){this.kr(this.Xl,this.lE)};c.prototype.yS=function(){this.kr(this.Ee,this.lE)};c.prototype.rE=function(){return!this.rS(this.Xl,this.lE)};c.prototype.qK=function(){return!this.rS(this.Ee,this.lE)};c.prototype.r2=function(){return this.re()?this.Qga:this.Pga};c.prototype.EZa=
function(a){var c=this.r2(),e=this.Tk(),f=this.mT();a<=this.FK?(this.qK()&&(e-=c),this.yS()):f&&(this.qK()||(e+=c),this.EYa());a>=this.DK?(this.rE(),this.wS()):f&&(this.rE(),this.DYa());this.T6(e)};c.prototype.T6=function(a){var c=this.Mh;this.re()?c.scrollLeft=this.b1(a):c.scrollTop=a};c.prototype.DJ=function(){var a=this.Mh;return this.re()?a.offsetWidth:a.offsetHeight};c.prototype.SA=function(a,c){this.dw||(this.iQ=!1,this.Hra(a,c))};c.prototype.Hra=function(a,d){if(!this.mSa()){this.dw=!0;a=this.sJa(a);
this.EZa(a);var e=this.nra;if(d||!e||a===this.Tk())this.spa(this.iQ?this.Tk():a);else{this.wp&&(this.Il=this.wp("scrolling"));var f=this;e.call(this.Hz,this.Mh,this.b1(a),Math.abs(this.Tk()-a)/c.oFa,function(){f.spa(a);f.xf()})}}};c.prototype.xf=function(){this.Il&&(this.Il(),this.Il=null)};c.prototype.Tk=function(){var a=this.Mh;return this.re()?this.AJa(a.scrollLeft):a.scrollTop};c.prototype.mT=function(){var a=this.bn,c=this.Mh;return this.re()?a.offsetWidth>c.offsetWidth:a.offsetHeight>c.offsetHeight};
c.prototype.sJa=function(a){!this.mT()||a<this.FK?a=this.FK:a>this.DK&&(a=this.DK);return a};c.prototype.xQa=function(a){var d=this.dw;if(this.mT()&&!this.dw){var e=c.JOa(a);0>e&&this.rE()?(d=!0,this.ora()):0<e&&this.qK()&&(d=!0,this.pra())}d&&(a.preventDefault(),a.stopPropagation())};c.prototype.q4=function(a){a=a.touches;this.mT()&&!this.dw&&1===a.length&&(this.eo=!0,a=a[0],this.zU=this.re()?a.pageX:a.pageY,this.E7=this.Tk(),this.mZa=this.$ga(),this.nZa=this.aha(),this.ota=this.rE(),this.pta=this.qK())};
c.prototype.p4=function(a){var d=this.re(),e=a.touches[0],e=(d?e.pageX:e.pageY)-this.zU,f=d&&this.kQ?0<e:0>e,g=f&&this.ota||!f&&this.pta;if(this.eo&&g){g=this.Mh;if(Math.abs(e)<c.GFa*(d?g.offsetWidth:g.offsetHeight)){if(this.SA(this.E7-e,!0),this.ota&&!this.rE()||this.pta&&!this.qK())this.eo=!1}else this.SA(f?this.mZa:this.nZa,!1),this.eo=!1;this.RA=!0}this.RA&&(a.preventDefault(),a.stopPropagation())};c.prototype.n4=function(){this.eo&&this.SA(this.E7,!1);this.RA=this.eo=!1};c.prototype.JQa=function(){this.iQ&&
!this.dw&&this.Hra(this.Tk(),!0)};c.prototype.spa=function(a){this.T6(a);this.iQ=!0;this.dw=!1;if(this.i2){this.RD=this.Yga();a=this.Zga();var c=this.hE(),e=c[this.RD];this.RD!==a&&this.Tk()>e.start&&this.RD<c.length-2&&(this.RD++,e=c[this.RD]);this.iMa=e.id;this.i2.call(this.Hz,this.iMa)}};c.prototype.ora=function(){this.dw||this.SA(this.$ga(),!1)};c.prototype.pra=function(){this.dw||this.SA(this.aha(),!1)};c.prototype.$ga=function(){var a=this.mIa(),c=0;return c=a===this.Yga()?this.Tk()+this.DJ():
this.oIa(a)};c.prototype.aha=function(){var a=this.nIa(),c=0,c=a===this.Zga()?this.Tk()-this.DJ():this.lIa(a);this.rE()||(c+=this.r2());c<this.r2()&&(c=this.FK);return c};c.prototype.oIa=function(a){return this.hE()[a].start};c.prototype.lIa=function(a){return this.hE()[a].end-this.DJ()+1};c.prototype.Yga=function(){var a=this.oQ(this.Tk());return 0>a?0:a};c.prototype.Zga=function(){var a=this.oQ(this.Tk()+this.DJ()-1),c=this.hE();return 0>a?c.length-1:a};c.prototype.nIa=function(){var a=this.oQ(this.Tk()-
1);return 0>a?0:a};c.prototype.mIa=function(){var a=this.oQ(this.Tk()+this.DJ()),c=this.hE();return 0>a?c.length-1:a};c.prototype.oQ=function(a){for(var c=this.hE(),e=0;e<c.length;e++)if(a<=c[e].end)return e;return-1};c.prototype.b1=function(a){var c=a;if(this.kQ&&this.re())if(this.RHa||this.zga&&10<=this.mga)c=-a;else if(this.THa||this.SHa||this.zga&&10>this.mga)c=this.bn.offsetWidth-this.Mh.offsetWidth-a;return c};c.prototype.AJa=function(a){return this.b1(a)};c.oFa=1.1;c.GFa=.33;(function(){a.hb("oj.ojConveyorBelt",
g.oj.baseComponent,{defaultElement:"\x3cdiv\x3e",widgetEventPrefix:"oj",options:{orientation:"horizontal",contentParent:null},qc:function(){this._super();this.element.addClass("oj-conveyorbelt oj-component");this.options.disabled&&a.D.warn(b);this.qb(!0)},refresh:function(){this._super();var a="rtl"===this.Uc(),a=this.Jj!=a,b;a||(b=this.or.Y1a());this.A1();this.qb(!0);a||this.or.J5a(b)},cr:function(){this._super();this.Sf?this.qb(this.Sf[0]):this.or&&this.or.bG()},$n:function(){this._super();this.Sf?
this.qb(this.Sf[0]):this.or&&this.or.bG()},qb:function(b){var f=this,h=this.element,k=this.options,l=k.orientation;"vertical"===l?h.addClass("oj-conveyorbelt-vertical"):h.removeClass("oj-conveyorbelt-vertical");if(this.FI()){this.Sf=null;this.Jj="rtl"===this.Uc();if(b&&!this.or){var m=null,p=null,t=null,s=null,n=null;"vertical"!==l?(m="oj-enabled oj-conveyorbelt-overflow-indicator oj-start oj-default",p="oj-enabled oj-conveyorbelt-overflow-indicator oj-end oj-default",t=this.DQ("oj-conveyorbelt-overflow-icon oj-start"),
s=this.DQ("oj-conveyorbelt-overflow-icon oj-end"),n=this.wHa):(m="oj-enabled oj-conveyorbelt-overflow-indicator oj-top oj-default",p="oj-enabled oj-conveyorbelt-overflow-indicator oj-bottom oj-default",t=this.DQ("oj-conveyorbelt-overflow-icon oj-top"),s=this.DQ("oj-conveyorbelt-overflow-icon oj-bottom"),n=this.xHa);var q={};q.Sya=m;q.yya=p;q.Rya=t;q.xya=s;m={em:function(b,c){a.T.em(b,c,d)}};m.vm=a.T.vm;m.gM=this.eHa;m.GN=this.mWa;m.Wwa=this.t4;m.cva=function(a){return f.YLa(a)};m.Ug=a.Components.Ug;
m.rd=a.Components.rd;m.Vc=function(a){return f.Bg(a)};"enabled"!==a.ra.d9()&&(m.wza=n);n=null;k.contentParent&&(n=g(k.contentParent)[0]);k=a.Va.Ho(navigator.userAgent);this.or=new c(h[0],l,n,this.Jj,q,m,{Kya:"oj-conveyorbelt-overflow-container",yua:"oj-conveyorbelt-content-container",uxa:"oj-conveyorbelt-item",Zwa:"oj-helper-hidden"},k)}this.or.Hq(b);if(b)for(b=h.find(".oj-conveyorbelt-overflow-indicator"),h=0;h<b.length;h++)this.oYa(g(b[h]))}else h=!1,this.Sf&&(h=this.Sf[0]),this.Sf=[b||h]},_destroy:function(){this.A1();
this.element.removeClass("oj-conveyorbelt oj-component oj-conveyorbelt-vertical");this._super()},_setOption:function(c,d,g){var k=!1,l=this.options;switch(c){case "containerParent":case "orientation":k=l.orientation!=d;break;case "disabled":a.D.warn(b)}k&&this.A1();this._super(c,d,g);k&&this.qb(!0)},A1:function(){var a=this.or;a&&(this.element.find(".oj-conveyorbelt-overflow-indicator").off(this.eventNamespace),a.destroy());this.or=null},FI:function(){var a=document.createElement("div"),b=a.style;
b.width="10px";b.height="10px";b["-webkit-flex"]="0 0 auto";b.flex="0 0 auto";b=this.element[0];b.appendChild(a);var c=!1;try{c=0<a.offsetWidth&&0<a.offsetHeight}catch(d){}b.removeChild(a);return c},oYa:function(a){this.xg({element:a,afterToggle:function(b){"mouseenter"===b?a.removeClass("oj-default"):"mouseleave"===b&&a.addClass("oj-default")}});this.Cl({element:a,afterToggle:function(b){"mousedown"===b||"touchstart"===b||"mouseenter"===b?a.removeClass("oj-default"):"mouseup"!==b&&"touchend"!==b&&
"touchcancel"!==b&&"mouseleave"!==b||a.addClass("oj-default")}})},DQ:function(a){var b=document.createElement("span");b.setAttribute("class","oj-component-icon "+a);return b},wHa:function(a,b,c,d){var l={};l.scrollLeft=b;g(a).animate(l,c,"swing",d)},xHa:function(a,b,c,d){var l={};l.scrollTop=b;g(a).animate(l,c,"swing",d)},eHa:function(a,b){g(a).addClass(b)},mWa:function(a,b){g(a).removeClass(b)},t4:function(a,b){return g(a).hasClass(b)},YLa:function(a){for(var b=[],c=0;c<a.length;c++){var d=a[c];
this.t4(d,"oj-helper-detect-expansion")||this.t4(d,"oj-helper-detect-contraction")||b.push(d)}return b},Bg:function(b){var c=this.element,d=a.Context.getContext(c[0]).Rc(),g="ConveyorBelt",c=c.attr("id"),g=g+(" (id\x3d'"+c+"')")+(": "+b);return d.Vc({description:g})},getNodeBySubId:function(a){if(null==a)return this.element?this.element[0]:null;a=a.subId;return"oj-conveyorbelt-start-overflow-indicator"===a?this.widget().find(".oj-conveyorbelt-overflow-indicator.oj-start")[0]:"oj-conveyorbelt-end-overflow-indicator"===
a?this.widget().find(".oj-conveyorbelt-overflow-indicator.oj-end")[0]:"oj-conveyorbelt-top-overflow-indicator"===a?this.widget().find(".oj-conveyorbelt-overflow-indicator.oj-top")[0]:"oj-conveyorbelt-bottom-overflow-indicator"===a?this.widget().find(".oj-conveyorbelt-overflow-indicator.oj-bottom")[0]:null},getSubIdByNode:function(a){for(var b=this.getNodeBySubId({subId:"oj-conveyorbelt-start-overflow-indicator"}),c=this.getNodeBySubId({subId:"oj-conveyorbelt-end-overflow-indicator"}),d=this.getNodeBySubId({subId:"oj-conveyorbelt-top-overflow-indicator"}),
g=this.getNodeBySubId({subId:"oj-conveyorbelt-bottom-overflow-indicator"}),m=this.element[0];a&&a!=m;){if(a===b)return{subId:"oj-conveyorbelt-start-overflow-indicator"};if(a===c)return{subId:"oj-conveyorbelt-end-overflow-indicator"};if(a===d)return{subId:"oj-conveyorbelt-top-overflow-indicator"};if(a===g)return{subId:"oj-conveyorbelt-bottom-overflow-indicator"};a=a.parentElement}return null}});var b="JET ConveyorBelt: 'disabled' property not supported",d=25})();a.J.Ua("oj-conveyor-belt","baseComponent",
{properties:{contentParent:{type:"string"},orientation:{type:"string",enumValues:["horizontal","vertical"]}},extension:{Xa:"ojConveyorBelt"}});a.J.register("oj-conveyor-belt",{metadata:a.J.getMetadata("oj-conveyor-belt")})});