(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{LFLF:function(t,e,n){"use strict";n("+6po"),n("J1ZC");var r=n("PEXJ"),o=n.n(r),i=n("S2pg"),a=n("mSV1"),s=n("lgG8"),l=i.b.a.withConfig({displayName:"inlineExternalAnchor__StyledAnchor",componentId:"z6fzvo-0"})(["text-decoration:underline;font-style:italic;"]),c=Object(i.b)(a.a).withConfig({displayName:"inlineExternalAnchor__StyledIcon",componentId:"z6fzvo-1"})(["margin-left:0.25rem;"]);e.a=function(t){return o.a.createElement(l,Object.assign({style:t.style,target:"_blank",rel:"noopener noreferrer external",href:t.link},t),t.children,o.a.createElement(c,{icon:s.c,size:"1x"}))}},ePRc:function(t,e,n){var r=n("Fe6i"),o=n("G6h2"),i=n("OE52"),a=n("hZS5"),s=n("nGhD"),l=n("otcc"),c=n("R1QQ"),p=(n("sEBd").Reflect||{}).construct,u=l((function(){function t(){}return!(p((function(){}),[],t)instanceof t)})),d=!l((function(){p((function(){}))}));r(r.S+r.F*(u||d),"Reflect",{construct:function(t,e){i(t),a(e);var n=arguments.length<3?t:i(arguments[2]);if(d&&!u)return p(t,e,n);if(t==n){switch(e.length){case 0:return new t;case 1:return new t(e[0]);case 2:return new t(e[0],e[1]);case 3:return new t(e[0],e[1],e[2]);case 4:return new t(e[0],e[1],e[2],e[3])}var r=[null];return r.push.apply(r,e),new(c.apply(t,r))}var l=n.prototype,f=o(s(l)?l:Object.prototype),m=Function.apply.call(t,f,e);return s(m)?m:f}})},"fs+C":function(t,e,n){n("AlJh")("Uint8",1,(function(t){return function(e,n,r){return t(this,e,n,r)}}))},ifk8:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return It})),n.d(e,"pageQuery",(function(){return zt}));n("2QqW"),n("YPMR"),n("acUJ"),n("uG1i"),n("vqrR"),n("Wd1V"),n("+6po");var r=n("PEXJ"),o=n.n(r),i=n("S2pg"),a=n("Wbzz"),s=n("EfEe"),l=n.n(s),c=n("kS/F"),p=n("XHOq"),u=n("ko/Y"),d=(n("7hzD"),n("GbUq"),n("F/MA"),n("RdHt"),n("j7rQ"),n("Zv3x"),n("swxd"),n("PTpO"),n("1a1p"),n("QAmW"),n("h94r"),n("u4T+"),n("wX7z"),n("VyGE"),n("qoc9"),n("1U3A"),n("J6Iv"),n("xRJz")),f=n.n(d),m=(n("fs+C"),"undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)),h=new Uint8Array(16);function b(){if(!m)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return m(h)}for(var g=[],v=0;v<256;++v)g[v]=(v+256).toString(16).substr(1);var y=function(t,e){var n=e||0,r=g;return[r[t[n++]],r[t[n++]],r[t[n++]],r[t[n++]],"-",r[t[n++]],r[t[n++]],"-",r[t[n++]],r[t[n++]],"-",r[t[n++]],r[t[n++]],"-",r[t[n++]],r[t[n++]],r[t[n++]],r[t[n++]],r[t[n++]],r[t[n++]]].join("")};var w=function(t,e,n){var r=e&&n||0;"string"==typeof t&&(e="binary"===t?new Array(16):null,t=null);var o=(t=t||{}).random||(t.rng||b)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,e)for(var i=0;i<16;++i)e[r+i]=o[i];return e||y(o)};function E(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function x(t,e,n){return e&&E(t.prototype,e),n&&E(t,n),t}function T(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function _(){return(_=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function O(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function C(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?O(Object(n),!0).forEach((function(e){T(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function L(t){return(L=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function S(t,e){return(S=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function P(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}var k={HIDE:"__react_tooltip_hide_event",REBUILD:"__react_tooltip_rebuild_event",SHOW:"__react_tooltip_show_event"},A=function(t,e){var n;"function"==typeof window.CustomEvent?n=new window.CustomEvent(t,{detail:e}):(n=document.createEvent("Event")).initEvent(t,!1,!0,e),window.dispatchEvent(n)};var R=function(t,e){var n=this.state.show,r=this.props.id,o=this.isCapture(e.currentTarget),i=e.currentTarget.getAttribute("currentItem");o||e.stopPropagation(),n&&"true"===i?t||this.hideTooltip(e):(e.currentTarget.setAttribute("currentItem","true"),j(e.currentTarget,this.getTargetArray(r)),this.showTooltip(e))},j=function(t,e){for(var n=0;n<e.length;n++)t!==e[n]?e[n].setAttribute("currentItem","false"):e[n].setAttribute("currentItem","true")},I={id:"9b69f92e-d3fe-498b-b1b4-c5e63a51b0cf",set:function(t,e,n){this.id in t?t[this.id][e]=n:Object.defineProperty(t,this.id,{configurable:!0,value:T({},e,n)})},get:function(t,e){var n=t[this.id];if(void 0!==n)return n[e]}};var z=function(t,e,n){var r=e.respectEffect,o=void 0!==r&&r,i=e.customEvent,a=void 0!==i&&i,s=this.props.id,l=n.target.getAttribute("data-tip")||null,c=n.target.getAttribute("data-for")||null,p=n.target;if(!this.isCustomEvent(p)||a){var u=null==s&&null==c||c===s;if(null!=l&&(!o||"float"===this.getEffect(p))&&u){var d=function(t){var e={};for(var n in t)"function"==typeof t[n]?e[n]=t[n].bind(t):e[n]=t[n];return e}(n);d.currentTarget=p,t(d)}}},H=function(t,e){var n={};return t.forEach((function(t){var r=t.getAttribute(e);r&&r.split(" ").forEach((function(t){return n[t]=!0}))})),n},N=function(){return document.getElementsByTagName("body")[0]};function D(t,e,n,r,o,i,a){for(var s=M(n),l=s.width,c=s.height,p=M(e),u=p.width,d=p.height,f=B(t,e,i),m=f.mouseX,h=f.mouseY,b=U(i,u,d,l,c),g=W(a),v=g.extraOffsetX,y=g.extraOffsetY,w=window.innerWidth,E=window.innerHeight,x=F(n),T=x.parentTop,_=x.parentLeft,O=function(t){var e=b[t].l;return m+e+v},C=function(t){var e=b[t].t;return h+e+y},L=function(t){return function(t){var e=b[t].r;return m+e+v}(t)>w},S=function(t){return function(t){var e=b[t].b;return h+e+y}(t)>E},P=function(t){return function(t){return O(t)<0}(t)||L(t)||function(t){return C(t)<0}(t)||S(t)},k=function(t){return!P(t)},A=["top","bottom","left","right"],R=[],j=0;j<4;j++){var I=A[j];k(I)&&R.push(I)}var z,H=!1,N=o!==r;return k(o)&&N?(H=!0,z=o):R.length>0&&P(o)&&P(r)&&(H=!0,z=R[0]),H?{isNewState:!0,newState:{place:z}}:{isNewState:!1,position:{left:parseInt(O(r)-_,10),top:parseInt(C(r)-T,10)}}}var M=function(t){var e=t.getBoundingClientRect(),n=e.height,r=e.width;return{height:parseInt(n,10),width:parseInt(r,10)}},B=function(t,e,n){var r=e.getBoundingClientRect(),o=r.top,i=r.left,a=M(e),s=a.width,l=a.height;return"float"===n?{mouseX:t.clientX,mouseY:t.clientY}:{mouseX:i+s/2,mouseY:o+l/2}},U=function(t,e,n,r,o){var i,a,s,l;return"float"===t?(i={l:-r/2,r:r/2,t:-(o+3+2),b:-3},s={l:-r/2,r:r/2,t:15,b:o+3+2+12},l={l:-(r+3+2),r:-3,t:-o/2,b:o/2},a={l:3,r:r+3+2,t:-o/2,b:o/2}):"solid"===t&&(i={l:-r/2,r:r/2,t:-(n/2+o+2),b:-n/2},s={l:-r/2,r:r/2,t:n/2,b:n/2+o+2},l={l:-(r+e/2+2),r:-e/2,t:-o/2,b:o/2},a={l:e/2,r:r+e/2+2,t:-o/2,b:o/2}),{top:i,bottom:s,left:l,right:a}},W=function(t){var e=0,n=0;for(var r in"[object String]"===Object.prototype.toString.apply(t)&&(t=JSON.parse(t.toString().replace(/'/g,'"'))),t)"top"===r?n-=parseInt(t[r],10):"bottom"===r?n+=parseInt(t[r],10):"left"===r?e-=parseInt(t[r],10):"right"===r&&(e+=parseInt(t[r],10));return{extraOffsetX:e,extraOffsetY:n}},F=function(t){for(var e=t;e&&"none"===window.getComputedStyle(e).getPropertyValue("transform");)e=e.parentElement;return{parentTop:e&&e.getBoundingClientRect().top||0,parentLeft:e&&e.getBoundingClientRect().left||0}};function X(t,e,n,r){if(e)return e;if(null!=n)return n;if(null===n)return null;var i=/<br\s*\/?>/;return r&&"false"!==r&&i.test(t)?t.split(i).map((function(t,e){return o.a.createElement("span",{key:e,className:"multi-line"},t)})):t}function q(t){var e={};return Object.keys(t).filter((function(t){return/(^aria-\w+$|^role$)/.test(t)})).forEach((function(n){e[n]=t[n]})),e}function J(t){var e=t.length;return t.hasOwnProperty?Array.prototype.slice.call(t):new Array(e).fill().map((function(e){return t[e]}))}!function(t){if(t&&"undefined"!=typeof window){var e=document.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t,document.head.appendChild(e)}}('.__react_component_tooltip {\n  border-radius: 3px;\n  display: inline-block;\n  font-size: 13px;\n  left: -999em;\n  opacity: 0;\n  padding: 8px 21px;\n  position: fixed;\n  pointer-events: none;\n  transition: opacity 0.3s ease-out;\n  top: -999em;\n  visibility: hidden;\n  z-index: 999;\n}\n.__react_component_tooltip.allow_hover, .__react_component_tooltip.allow_click {\n  pointer-events: auto;\n}\n.__react_component_tooltip::before, .__react_component_tooltip::after {\n  content: "";\n  width: 0;\n  height: 0;\n  position: absolute;\n}\n.__react_component_tooltip.show {\n  opacity: 0.9;\n  margin-top: 0;\n  margin-left: 0;\n  visibility: visible;\n}\n.__react_component_tooltip.place-top::before {\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n  bottom: -8px;\n  left: 50%;\n  margin-left: -10px;\n}\n.__react_component_tooltip.place-bottom::before {\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n  top: -8px;\n  left: 50%;\n  margin-left: -10px;\n}\n.__react_component_tooltip.place-left::before {\n  border-top: 6px solid transparent;\n  border-bottom: 6px solid transparent;\n  right: -8px;\n  top: 50%;\n  margin-top: -5px;\n}\n.__react_component_tooltip.place-right::before {\n  border-top: 6px solid transparent;\n  border-bottom: 6px solid transparent;\n  left: -8px;\n  top: 50%;\n  margin-top: -5px;\n}\n.__react_component_tooltip .multi-line {\n  display: block;\n  padding: 2px 0;\n  text-align: center;\n}');var V,Y,Q,G={dark:{text:"#fff",background:"#222",border:"transparent",arrow:"#222"},success:{text:"#fff",background:"#8DC572",border:"transparent",arrow:"#8DC572"},warning:{text:"#fff",background:"#F0AD4E",border:"transparent",arrow:"#F0AD4E"},error:{text:"#fff",background:"#BE6464",border:"transparent",arrow:"#BE6464"},info:{text:"#fff",background:"#337AB7",border:"transparent",arrow:"#337AB7"},light:{text:"#222",background:"#fff",border:"transparent",arrow:"#fff"}};function Z(t,e,n,r){return function(t,e){var n=e.text,r=e.background,o=e.border,i=e.arrow;return"\n  \t.".concat(t," {\n\t    color: ").concat(n,";\n\t    background: ").concat(r,";\n\t    border: 1px solid ").concat(o,";\n  \t}\n\n  \t.").concat(t,".place-top {\n        margin-top: -10px;\n    }\n    .").concat(t,".place-top::before {\n        border-top: 8px solid ").concat(o,";\n    }\n    .").concat(t,".place-top::after {\n        border-left: 8px solid transparent;\n        border-right: 8px solid transparent;\n        bottom: -6px;\n        left: 50%;\n        margin-left: -8px;\n        border-top-color: ").concat(i,";\n        border-top-style: solid;\n        border-top-width: 6px;\n    }\n\n    .").concat(t,".place-bottom {\n        margin-top: 10px;\n    }\n    .").concat(t,".place-bottom::before {\n        border-bottom: 8px solid ").concat(o,";\n    }\n    .").concat(t,".place-bottom::after {\n        border-left: 8px solid transparent;\n        border-right: 8px solid transparent;\n        top: -6px;\n        left: 50%;\n        margin-left: -8px;\n        border-bottom-color: ").concat(i,";\n        border-bottom-style: solid;\n        border-bottom-width: 6px;\n    }\n\n    .").concat(t,".place-left {\n        margin-left: -10px;\n    }\n    .").concat(t,".place-left::before {\n        border-left: 8px solid ").concat(o,";\n    }\n    .").concat(t,".place-left::after {\n        border-top: 5px solid transparent;\n        border-bottom: 5px solid transparent;\n        right: -6px;\n        top: 50%;\n        margin-top: -4px;\n        border-left-color: ").concat(i,";\n        border-left-style: solid;\n        border-left-width: 6px;\n    }\n\n    .").concat(t,".place-right {\n        margin-left: 10px;\n    }\n    .").concat(t,".place-right::before {\n        border-right: 8px solid ").concat(o,";\n    }\n    .").concat(t,".place-right::after {\n        border-top: 5px solid transparent;\n        border-bottom: 5px solid transparent;\n        left: -6px;\n        top: 50%;\n        margin-top: -4px;\n        border-right-color: ").concat(i,";\n        border-right-style: solid;\n        border-right-width: 6px;\n    }\n  ")}(t,function(t,e,n){var r=t.text,o=t.background,i=t.border,a=t.arrow?t.arrow:t.background,s=function(t){return G[t]?C({},G[t]):void 0}(e);r&&(s.text=r);o&&(s.background=o);n&&(s.border=i||("light"===e?"black":"white"));a&&(s.arrow=a);return s}(e,n,r))}var K,$=function(t){t.hide=function(t){A(k.HIDE,{target:t})},t.rebuild=function(){A(k.REBUILD)},t.show=function(t){A(k.SHOW,{target:t})},t.prototype.globalRebuild=function(){this.mount&&(this.unbindListener(),this.bindListener())},t.prototype.globalShow=function(t){if(this.mount){var e=!!(t&&t.detail&&t.detail.target);this.showTooltip({currentTarget:e&&t.detail.target},!0)}},t.prototype.globalHide=function(t){if(this.mount){var e=!!(t&&t.detail&&t.detail.target);this.hideTooltip({currentTarget:e&&t.detail.target},e)}}}(V=function(t){t.prototype.bindWindowEvents=function(t){window.removeEventListener(k.HIDE,this.globalHide),window.addEventListener(k.HIDE,this.globalHide,!1),window.removeEventListener(k.REBUILD,this.globalRebuild),window.addEventListener(k.REBUILD,this.globalRebuild,!1),window.removeEventListener(k.SHOW,this.globalShow),window.addEventListener(k.SHOW,this.globalShow,!1),t&&(window.removeEventListener("resize",this.onWindowResize),window.addEventListener("resize",this.onWindowResize,!1))},t.prototype.unbindWindowEvents=function(){window.removeEventListener(k.HIDE,this.globalHide),window.removeEventListener(k.REBUILD,this.globalRebuild),window.removeEventListener(k.SHOW,this.globalShow),window.removeEventListener("resize",this.onWindowResize)},t.prototype.onWindowResize=function(){this.mount&&this.hideTooltip()}}(V=function(t){t.prototype.isCustomEvent=function(t){return this.state.event||!!t.getAttribute("data-event")},t.prototype.customBindListener=function(t){var e=this,n=this.state,r=n.event,o=n.eventOff,i=t.getAttribute("data-event")||r,a=t.getAttribute("data-event-off")||o;i.split(" ").forEach((function(n){t.removeEventListener(n,I.get(t,n));var r=R.bind(e,a);I.set(t,n,r),t.addEventListener(n,r,!1)})),a&&a.split(" ").forEach((function(n){t.removeEventListener(n,e.hideTooltip),t.addEventListener(n,e.hideTooltip,!1)}))},t.prototype.customUnbindListener=function(t){var e=this.state,n=e.event,r=e.eventOff,o=n||t.getAttribute("data-event"),i=r||t.getAttribute("data-event-off");t.removeEventListener(o,I.get(t,n)),i&&t.removeEventListener(i,this.hideTooltip)}}(V=function(t){t.prototype.isCapture=function(t){return t&&"true"===t.getAttribute("data-iscapture")||this.props.isCapture||!1}}(V=function(t){t.prototype.getEffect=function(t){return t.getAttribute("data-effect")||this.props.effect||"float"}}(V=function(t){t.prototype.isBodyMode=function(){return!!this.props.bodyMode},t.prototype.bindBodyListener=function(t){var e=this,n=this.state,r=n.event,o=n.eventOff,i=n.possibleCustomEvents,a=n.possibleCustomEventsOff,s=N(),l=H(t,"data-event"),c=H(t,"data-event-off");null!=r&&(l[r]=!0),null!=o&&(c[o]=!0),i.split(" ").forEach((function(t){return l[t]=!0})),a.split(" ").forEach((function(t){return c[t]=!0})),this.unbindBodyListener(s);var p=this.bodyModeListeners={};for(var u in null==r&&(p.mouseover=z.bind(this,this.showTooltip,{}),p.mousemove=z.bind(this,this.updateTooltip,{respectEffect:!0}),p.mouseout=z.bind(this,this.hideTooltip,{})),l)p[u]=z.bind(this,(function(t){var n=t.currentTarget.getAttribute("data-event-off")||o;R.call(e,n,t)}),{customEvent:!0});for(var d in c)p[d]=z.bind(this,this.hideTooltip,{customEvent:!0});for(var f in p)s.addEventListener(f,p[f])},t.prototype.unbindBodyListener=function(t){t=t||N();var e=this.bodyModeListeners;for(var n in e)t.removeEventListener(n,e[n])}}((Q=Y=function(t){function e(t){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(n=P(this,L(e).call(this,t))).state={uuid:t.uuid||"t"+w(),place:t.place||"top",desiredPlace:t.place||"top",type:"dark",effect:"float",show:!1,border:!1,customColors:{},offset:{},extraClass:"",html:!1,delayHide:0,delayShow:0,event:t.event||null,eventOff:t.eventOff||null,currentEvent:null,currentTarget:null,ariaProps:q(t),isEmptyTip:!1,disable:!1,possibleCustomEvents:t.possibleCustomEvents||"",possibleCustomEventsOff:t.possibleCustomEventsOff||"",originTooltip:null,isMultiline:!1},n.bind(["showTooltip","updateTooltip","hideTooltip","hideTooltipOnScroll","getTooltipContent","globalRebuild","globalShow","globalHide","onWindowResize","mouseOnToolTip"]),n.mount=!0,n.delayShowLoop=null,n.delayHideLoop=null,n.delayReshow=null,n.intervalUpdateContent=null,n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&S(t,e)}(e,t),x(e,null,[{key:"propTypes",get:function(){return{uuid:f.a.string,children:f.a.any,place:f.a.string,type:f.a.string,effect:f.a.string,offset:f.a.object,multiline:f.a.bool,border:f.a.bool,textColor:f.a.string,backgroundColor:f.a.string,borderColor:f.a.string,arrowColor:f.a.string,insecure:f.a.bool,class:f.a.string,className:f.a.string,id:f.a.string,html:f.a.bool,delayHide:f.a.number,delayUpdate:f.a.number,delayShow:f.a.number,event:f.a.string,eventOff:f.a.string,isCapture:f.a.bool,globalEventOff:f.a.string,getContent:f.a.any,afterShow:f.a.func,afterHide:f.a.func,overridePosition:f.a.func,disable:f.a.bool,scrollHide:f.a.bool,resizeHide:f.a.bool,wrapper:f.a.string,bodyMode:f.a.bool,possibleCustomEvents:f.a.string,possibleCustomEventsOff:f.a.string,clickable:f.a.bool}}}]),x(e,[{key:"bind",value:function(t){var e=this;t.forEach((function(t){e[t]=e[t].bind(e)}))}},{key:"componentDidMount",value:function(){var t=this.props,e=(t.insecure,t.resizeHide);this.bindListener(),this.bindWindowEvents(e)}},{key:"componentWillUnmount",value:function(){this.mount=!1,this.clearTimer(),this.unbindListener(),this.removeScrollListener(this.state.currentTarget),this.unbindWindowEvents()}},{key:"mouseOnToolTip",value:function(){return!(!this.state.show||!this.tooltipRef)&&(this.tooltipRef.matches||(this.tooltipRef.msMatchesSelector?this.tooltipRef.matches=this.tooltipRef.msMatchesSelector:this.tooltipRef.matches=this.tooltipRef.mozMatchesSelector),this.tooltipRef.matches(":hover"))}},{key:"getTargetArray",value:function(t){var e,n=[];if(t){var r=t.replace(/\\/g,"\\\\").replace(/"/g,'\\"');e='[data-tip][data-for="'.concat(r,'"]')}else e="[data-tip]:not([data-for])";return J(document.getElementsByTagName("*")).filter((function(t){return t.shadowRoot})).forEach((function(t){n=n.concat(J(t.shadowRoot.querySelectorAll(e)))})),n.concat(J(document.querySelectorAll(e)))}},{key:"bindListener",value:function(){var t=this,e=this.props,n=e.id,r=e.globalEventOff,o=e.isCapture,i=this.getTargetArray(n);i.forEach((function(e){null===e.getAttribute("currentItem")&&e.setAttribute("currentItem","false"),t.unbindBasicListener(e),t.isCustomEvent(e)&&t.customUnbindListener(e)})),this.isBodyMode()?this.bindBodyListener(i):i.forEach((function(e){var n=t.isCapture(e),r=t.getEffect(e);t.isCustomEvent(e)?t.customBindListener(e):(e.addEventListener("mouseenter",t.showTooltip,n),"float"===r&&e.addEventListener("mousemove",t.updateTooltip,n),e.addEventListener("mouseleave",t.hideTooltip,n))})),r&&(window.removeEventListener(r,this.hideTooltip),window.addEventListener(r,this.hideTooltip,o)),this.bindRemovalTracker()}},{key:"unbindListener",value:function(){var t=this,e=this.props,n=e.id,r=e.globalEventOff;this.isBodyMode()?this.unbindBodyListener():this.getTargetArray(n).forEach((function(e){t.unbindBasicListener(e),t.isCustomEvent(e)&&t.customUnbindListener(e)})),r&&window.removeEventListener(r,this.hideTooltip),this.unbindRemovalTracker()}},{key:"unbindBasicListener",value:function(t){var e=this.isCapture(t);t.removeEventListener("mouseenter",this.showTooltip,e),t.removeEventListener("mousemove",this.updateTooltip,e),t.removeEventListener("mouseleave",this.hideTooltip,e)}},{key:"getTooltipContent",value:function(){var t,e=this.props,n=e.getContent,r=e.children;return n&&(t=Array.isArray(n)?n[0]&&n[0](this.state.originTooltip):n(this.state.originTooltip)),X(this.state.originTooltip,r,t,this.state.isMultiline)}},{key:"isEmptyTip",value:function(t){return"string"==typeof t&&""===t||null===t}},{key:"showTooltip",value:function(t,e){if(!e||this.getTargetArray(this.props.id).some((function(e){return e===t.currentTarget}))){var n=this.props,r=n.multiline,o=n.getContent,i=t.currentTarget.getAttribute("data-tip"),a=t.currentTarget.getAttribute("data-multiline")||r||!1,s=t instanceof window.FocusEvent||e,l=!0;t.currentTarget.getAttribute("data-scroll-hide")?l="true"===t.currentTarget.getAttribute("data-scroll-hide"):null!=this.props.scrollHide&&(l=this.props.scrollHide);var c=t.currentTarget.getAttribute("data-place")||this.props.place||"top",p=s?"solid":this.getEffect(t.currentTarget),u=t.currentTarget.getAttribute("data-offset")||this.props.offset||{},d=D(t,t.currentTarget,this.tooltipRef,c,c,p,u);d.position&&this.props.overridePosition&&(d.position=this.props.overridePosition(d.position,t,t.currentTarget,this.tooltipRef,c,c,p,u));var f=d.isNewState?d.newState.place:c;this.clearTimer();var m=t.currentTarget,h=this.state.show?m.getAttribute("data-delay-update")||this.props.delayUpdate:0,b=this,g=function(){b.setState({originTooltip:i,isMultiline:a,desiredPlace:c,place:f,type:m.getAttribute("data-type")||b.props.type||"dark",customColors:{text:m.getAttribute("data-text-color")||b.props.textColor||null,background:m.getAttribute("data-background-color")||b.props.backgroundColor||null,border:m.getAttribute("data-border-color")||b.props.borderColor||null,arrow:m.getAttribute("data-arrow-color")||b.props.arrowColor||null},effect:p,offset:u,html:(m.getAttribute("data-html")?"true"===m.getAttribute("data-html"):b.props.html)||!1,delayShow:m.getAttribute("data-delay-show")||b.props.delayShow||0,delayHide:m.getAttribute("data-delay-hide")||b.props.delayHide||0,delayUpdate:m.getAttribute("data-delay-update")||b.props.delayUpdate||0,border:(m.getAttribute("data-border")?"true"===m.getAttribute("data-border"):b.props.border)||!1,extraClass:m.getAttribute("data-class")||b.props.class||b.props.className||"",disable:(m.getAttribute("data-tip-disable")?"true"===m.getAttribute("data-tip-disable"):b.props.disable)||!1,currentTarget:m},(function(){l&&b.addScrollListener(b.state.currentTarget),b.updateTooltip(t),o&&Array.isArray(o)&&(b.intervalUpdateContent=setInterval((function(){if(b.mount){var t=b.props.getContent,e=X(i,"",t[0](),a),n=b.isEmptyTip(e);b.setState({isEmptyTip:n}),b.updatePosition()}}),o[1]))}))};h?this.delayReshow=setTimeout(g,h):g()}}},{key:"updateTooltip",value:function(t){var e=this,n=this.state,r=n.delayShow,o=n.disable,i=this.props.afterShow,a=this.getTooltipContent(),s=parseInt(r,10),l=t.currentTarget||t.target;if(!this.mouseOnToolTip()&&!this.isEmptyTip(a)&&!o){var c=function(){if(Array.isArray(a)&&a.length>0||a){var n=!e.state.show;e.setState({currentEvent:t,currentTarget:l,show:!0},(function(){e.updatePosition(),n&&i&&i(t)}))}};clearTimeout(this.delayShowLoop),r?this.delayShowLoop=setTimeout(c,s):c()}}},{key:"listenForTooltipExit",value:function(){this.state.show&&this.tooltipRef&&this.tooltipRef.addEventListener("mouseleave",this.hideTooltip)}},{key:"removeListenerForTooltipExit",value:function(){this.state.show&&this.tooltipRef&&this.tooltipRef.removeEventListener("mouseleave",this.hideTooltip)}},{key:"hideTooltip",value:function(t,e){var n=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{isScroll:!1},o=this.state.disable,i=r.isScroll,a=i?0:this.state.delayHide,s=this.props.afterHide,l=this.getTooltipContent();if(this.mount&&!this.isEmptyTip(l)&&!o){if(e){var c=this.getTargetArray(this.props.id),p=c.some((function(e){return e===t.currentTarget}));if(!p||!this.state.show)return}var u=function(){var e=n.state.show;n.mouseOnToolTip()?n.listenForTooltipExit():(n.removeListenerForTooltipExit(),n.setState({show:!1},(function(){n.removeScrollListener(n.state.currentTarget),e&&s&&s(t)})))};this.clearTimer(),a?this.delayHideLoop=setTimeout(u,parseInt(a,10)):u()}}},{key:"hideTooltipOnScroll",value:function(t,e){this.hideTooltip(t,e,{isScroll:!0})}},{key:"addScrollListener",value:function(t){var e=this.isCapture(t);window.addEventListener("scroll",this.hideTooltipOnScroll,e)}},{key:"removeScrollListener",value:function(t){var e=this.isCapture(t);window.removeEventListener("scroll",this.hideTooltipOnScroll,e)}},{key:"updatePosition",value:function(){var t=this,e=this.state,n=e.currentEvent,r=e.currentTarget,o=e.place,i=e.desiredPlace,a=e.effect,s=e.offset,l=this.tooltipRef,c=D(n,r,l,o,i,a,s);if(c.position&&this.props.overridePosition&&(c.position=this.props.overridePosition(c.position,n,r,l,o,i,a,s)),c.isNewState)return this.setState(c.newState,(function(){t.updatePosition()}));l.style.left=c.position.left+"px",l.style.top=c.position.top+"px"}},{key:"clearTimer",value:function(){clearTimeout(this.delayShowLoop),clearTimeout(this.delayHideLoop),clearTimeout(this.delayReshow),clearInterval(this.intervalUpdateContent)}},{key:"hasCustomColors",value:function(){var t=this;return Boolean(Object.keys(this.state.customColors).find((function(e){return"border"!==e&&t.state.customColors[e]}))||this.state.border&&this.state.customColors.border)}},{key:"render",value:function(){var t=this,n=this.state,r=n.extraClass,i=n.html,a=n.ariaProps,s=n.disable,l=this.getTooltipContent(),c=this.isEmptyTip(l),p=Z(this.state.uuid,this.state.customColors,this.state.type,this.state.border),u="__react_component_tooltip"+" ".concat(this.state.uuid)+(!this.state.show||s||c?"":" show")+(this.state.border?" border":"")+" place-".concat(this.state.place)+" type-".concat(this.hasCustomColors()?"custom":this.state.type)+(this.props.delayUpdate?" allow_hover":"")+(this.props.clickable?" allow_click":""),d=this.props.wrapper;e.supportedWrappers.indexOf(d)<0&&(d=e.defaultProps.wrapper);var f=[u,r].filter(Boolean).join(" ");if(i){var m="".concat(l,"\n<style>").concat(p,"</style>");return o.a.createElement(d,_({className:"".concat(f),id:this.props.id,ref:function(e){return t.tooltipRef=e}},a,{"data-id":"tooltip",dangerouslySetInnerHTML:{__html:m}}))}return o.a.createElement(d,_({className:"".concat(f),id:this.props.id},a,{ref:function(e){return t.tooltipRef=e},"data-id":"tooltip"}),o.a.createElement("style",{dangerouslySetInnerHTML:{__html:p}}),l)}}],[{key:"getDerivedStateFromProps",value:function(t,e){var n=e.ariaProps,r=q(t);return Object.keys(r).some((function(t){return r[t]!==n[t]}))?C({},e,{ariaProps:r}):null}}]),e}(o.a.Component),T(Y,"defaultProps",{insecure:!0,resizeHide:!0,wrapper:"div",clickable:!1}),T(Y,"supportedWrappers",["div","span"]),T(Y,"displayName","ReactTooltip"),(K=V=Q).prototype.bindRemovalTracker=function(){var t=this,e=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver;if(null!=e){var n=new e((function(e){for(var n=0;n<e.length;n++)for(var r=e[n],o=0;o<r.removedNodes.length;o++)if(r.removedNodes[o]===t.state.currentTarget)return void t.hideTooltip()}));n.observe(window.document,{childList:!0,subtree:!0}),this.removalTracker=n}},V=void(K.prototype.unbindRemovalTracker=function(){this.removalTracker&&(this.removalTracker.disconnect(),this.removalTracker=null)})||V))||V)||V)||V)||V)||V)||V,tt=n("9Dj+"),et=n("LFLF"),nt=n("hhmX"),rt=i.b.p.withConfig({displayName:"caption__Caption",componentId:"sc-8vazk8-0"})(["width:var(--mobile-width);color:var(--grey);font-size:1rem;font-style:italic;text-align:center;line-height:100% !important;margin:1rem 0;@media only screen and (min-width:700px){max-width:680px;}"]);function ot(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function it(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var at=i.b.article.withConfig({displayName:"postPageLayout__Article",componentId:"sc-1cdrnm0-0"})(["display:flex;flex-direction:column;align-items:center;"]),st=i.b.div.withConfig({displayName:"postPageLayout__Synopsis",componentId:"sc-1cdrnm0-1"})(["width:var(--mobile-width);@media only screen and (min-width:700px){max-width:680px;}"]),lt=i.b.p.withConfig({displayName:"postPageLayout__Tag",componentId:"sc-1cdrnm0-2"})(["margin:0;color:var(--blue);font-family:'Inter',sans-serif;font-weight:bold;font-size:0.9rem;@media only screen and (min-width:1200px){font-size:1rem;}"]),ct=Object(i.a)(["font-family:'Inter',sans-serif;font-weight:bold;margin:0;"]),pt=i.b.h1.withConfig({displayName:"postPageLayout__Title",componentId:"sc-1cdrnm0-3"})([""," font-size:2.25rem;margin:5px 0 0;@media only screen and (min-width:700px){font-size:2.75rem;@media only screen and (min-width:1200px){font-size:2.8rem;}}"],ct),ut=i.b.p.withConfig({displayName:"postPageLayout__Brief",componentId:"sc-1cdrnm0-4"})(["color:var(--grey);font-size:1.1rem;margin:5vw 0;@media only screen and (min-width:700px){margin:25px 0;font-size:1.25rem;}"]),dt=i.b.p.withConfig({displayName:"postPageLayout__Meta",componentId:"sc-1cdrnm0-5"})(["margin:0;color:var(--blue);font-family:'Inter',sans-serif;font-weight:normal;font-size:0.8rem;@media only screen and (min-width:700px){font-size:1rem;}@media only screen and (min-width:1200px){position:unset;font-size:1rem;}"]),ft=i.b.div.withConfig({displayName:"postPageLayout__PreviewContainer",componentId:"sc-1cdrnm0-6"})(["display:flex;flex-direction:column;align-items:center;margin:5vw 0 2.5vw;width:100vw;@media only screen and (min-width:700px){margin:50px 0;max-width:1200px;}"]),mt=Object(i.b)(l.a).withConfig({displayName:"postPageLayout__Image",componentId:"sc-1cdrnm0-7"})(["width:100%;"]),ht=function(t){return o.a.createElement(ft,null,o.a.createElement(mt,{fluid:t.fluid}),t.caption?o.a.createElement(rt,null,t.caption):o.a.createElement("p",null))},bt=i.b.div.withConfig({displayName:"postPageLayout__Content",componentId:"sc-1cdrnm0-8"})(["display:flex;flex-direction:column;width:var(--mobile-width);font-size:1.1rem;p{line-height:160%;}@media only screen and (min-width:700px){max-width:680px;}"]),gt=i.b.hr.withConfig({displayName:"postPageLayout__EndDivider",componentId:"sc-1cdrnm0-9"})(["width:80%;margin:50px 0;align-self:center;border:1px solid var(--grey);@media only screen and (min-width:700px){max-width:calc(680px * 0.8);margin:50px 0;}"]),vt=i.b.div.withConfig({displayName:"postPageLayout__SharePrompt",componentId:"sc-1cdrnm0-10"})(["display:flex;flex-direction:column;align-items:flex-start;align-self:center;margin-bottom:50px;width:var(--mobile-width);h1{margin:0;font-family:'Inter',sans-serif;}p{margin:20px 0;font-family:'Open Sans',sans-serif;font-size:1.25rem;}@media only screen and (min-width:700px){max-width:680px;p{margin:10px 0 30px;font-size:1.5rem;}}"]),yt=i.b.p.withConfig({displayName:"postPageLayout__StyledP",componentId:"sc-1cdrnm0-11"})(["margin:2.5vw 0;line-height:160%;font-size:1.1rem;@media only screen and (min-width:700px){margin:10px 0;font-size:1.25rem;}"]),wt=i.b.h1.withConfig({displayName:"postPageLayout__StyledH1",componentId:"sc-1cdrnm0-12"})([""," font-size:2rem;margin:5vw 0 2.5vw;@media only screen and (min-width:700px){font-size:2.5rem;margin:30px 0 10px;}"],ct),Et=i.b.h2.withConfig({displayName:"postPageLayout__StyledH2",componentId:"sc-1cdrnm0-13"})([""," font-size:1.5rem;margin:4.5vw 0 2.25vw;@media only screen and (min-width:700px){font-size:1.8rem;margin:25px 0 10px;}"],ct),xt=i.b.h3.withConfig({displayName:"postPageLayout__StyledH3",componentId:"sc-1cdrnm0-14"})([""," font-size:1.25rem;margin:4vw 0 2vw;@media only screen and (min-width:700px){font-size:1.5rem;margin:20px 0 10px;}"],ct),Tt=i.b.h4.withConfig({displayName:"postPageLayout__StyledH4",componentId:"sc-1cdrnm0-15"})([""," font-size:1.2rem;margin:4vw 0 2vw;@media only screen and (min-width:700px){font-size:1.4rem;margin:20px 0 10px;}"],ct),_t=i.b.h5.withConfig({displayName:"postPageLayout__StyledH5",componentId:"sc-1cdrnm0-16"})([""," font-size:1.1rem;margin:4vw 0 2vw;@media only screen and (min-width:700px){font-size:1.3rem;margin:20px 0 10px;}"],ct),Ot=i.b.h6.withConfig({displayName:"postPageLayout__StyledH6",componentId:"sc-1cdrnm0-17"})([""," font-size:1rem;margin:4vw 0 2vw;@media only screen and (min-width:700px){font-size:1.25rem;margin:20px 0 10px;}"],ct),Ct=i.b.blockquote.withConfig({displayName:"postPageLayout__StyledBlockquote",componentId:"sc-1cdrnm0-18"})(["border-left:2px solid var(--grey);margin-left:5vw;padding-left:15px;p{margin:0;}@media only screen and (min-width:700px){margin-left:25px;padding-left:25px;}"]),Lt=Object(i.a)(["padding-left:5vw;@media only screen and (min-width:700px){padding-left:25px;}"]),St=i.b.ul.withConfig({displayName:"postPageLayout__StyledUl",componentId:"sc-1cdrnm0-19"})([""," p{margin:0;}"],Lt),Pt=i.b.ol.withConfig({displayName:"postPageLayout__StyledOl",componentId:"sc-1cdrnm0-20"})([""," p{margin:0;}"],Lt),kt=i.b.table.withConfig({displayName:"postPageLayout__StyledTable",componentId:"sc-1cdrnm0-21"})([""]),At=i.b.hr.withConfig({displayName:"postPageLayout__StyledHr",componentId:"sc-1cdrnm0-22"})(["width:80%;margin:5vw 0;align-self:center;border:1px solid var(--grey);@media only screen and (min-width:700px){margin:50px 0;}"]),Rt={p:function(t){return o.a.createElement(yt,t)},h1:function(t){return o.a.createElement(wt,t)},h2:function(t){return o.a.createElement(Et,t)},h3:function(t){return o.a.createElement(xt,t)},h4:function(t){return o.a.createElement(Tt,t)},h5:function(t){return o.a.createElement(_t,t)},h6:function(t){return o.a.createElement(Ot,t)},blockquote:function(t){return o.a.createElement(Ct,t)},ul:function(t){return o.a.createElement(St,t)},ol:function(t){return o.a.createElement(Pt,t)},table:function(t){return o.a.createElement(kt,t)},hr:function(t){return o.a.createElement(At,t)},a:function(t){return o.a.createElement(et.a,Object.assign({link:t.href},t))}},jt=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?ot(Object(n),!0).forEach((function(e){it(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ot(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({Link:a.a,Caption:rt},Rt);function It(t){var e=t.data.mdx,n=Object(c.useLocation)().href,i=Object(r.useState)("Click to Copy"),a=i[0],s=i[1];return o.a.createElement(tt.a,null,o.a.createElement(at,null,o.a.createElement(st,null,o.a.createElement(lt,null,e.frontmatter.tags[0].toUpperCase()),o.a.createElement(pt,null,e.frontmatter.title),o.a.createElement(ut,null,e.frontmatter.brief),o.a.createElement(dt,null,e.frontmatter.date.toUpperCase()," • ",e.frontmatter.readingTime," MIN READ")),o.a.createElement(ht,{caption:"My COVID-19 home workstation.",fluid:e.frontmatter.cover.childImageSharp.fluid}),o.a.createElement(bt,null,o.a.createElement(p.MDXProvider,{components:jt},o.a.createElement(u.MDXRenderer,null,e.body)))),o.a.createElement(gt,null),o.a.createElement(vt,null,o.a.createElement("h1",null,"Liked this post?"),o.a.createElement("p",null,"Share it with a friend, or discuss with me on"," ",o.a.createElement(et.a,{link:"https://twitter.com/walsquared",style:{fontStyle:"normal"}},"Twitter"),"!"),o.a.createElement(nt.a,{"data-tip":!0,"data-for":"copyToClipboard",color:"var(--blue)",label:"Copy Link to Post",action:function(){s("Copying..."),navigator.clipboard.writeText(n).then((function(){s("Copied!")}),(function(t){s("Failed to Copy :("),console.error(t)}))}}),o.a.createElement($,{id:"copyToClipboard",type:"info",effect:"solid",getContent:function(){return a}})))}var zt="3810621003"},"ko/Y":function(t,e,n){var r=n("yvZR");t.exports={MDXRenderer:r}},yvZR:function(t,e,n){function r(t,e,n){return(r=o()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&i(o,n.prototype),o}).apply(null,arguments)}function o(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function i(t,e){return(i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function a(t){return function(t){if(Array.isArray(t))return s(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return s(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return s(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){p(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n("2QqW"),n("uG1i"),n("Wd1V"),n("acUJ"),n("4S+F"),n("YPMR"),n("6/6d"),n("bQPi"),n("KjoO"),n("PTpO"),n("vqrR"),n("ePRc"),n("ePRc"),n("KjoO"),n("PTpO"),n("6/6d"),n("bQPi"),n("4S+F"),n("2QqW"),n("YPMR"),n("acUJ"),n("uG1i"),n("vqrR"),n("Wd1V");var u=n("PEXJ"),d=n("XHOq"),f=d.useMDXComponents,m=d.mdx,h=n("PYcf").useMDXScope;t.exports=function(t){var e=t.scope,n=t.components,o=t.children,i=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,["scope","components","children"]),s=f(n),l=h(e),p=u.useMemo((function(){if(!o)return null;var t=c({React:u,mdx:m},l),e=Object.keys(t),n=e.map((function(e){return t[e]}));return r(Function,["_fn"].concat(a(e),[""+o])).apply(void 0,[{}].concat(a(n)))}),[o,e]);return u.createElement(p,c({components:s},i))}}}]);
//# sourceMappingURL=component---src-components-post-page-layout-tsx-8e3ec4377c040f3c6a44.js.map