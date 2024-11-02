!function(a,b){"object"==typeof exports?module.exports=b(a):"function"==typeof define&&define.amd?define("colors",[],function(){return b(a)}):a.Colors=b(a)}(this,function(a,b){"use strict";function c(a,c,d,f,g){if("string"==typeof c){var c=v.txt2color(c);d=c.type,p[d]=c[d],g=g!==b?g:c.alpha}else if(c)for(var h in c)a[d][h]=k(c[h]/l[d][h][1],0,1);return g!==b&&(a.alpha=k(+g,0,1)),e(d,f?a:b)}function d(a,b,c){var d=o.options.grey,e={};return e.RGB={r:a.r,g:a.g,b:a.b},e.rgb={r:b.r,g:b.g,b:b.b},e.alpha=c,e.equivalentGrey=n(d.r*a.r+d.g*a.g+d.b*a.b),e.rgbaMixBlack=i(b,{r:0,g:0,b:0},c,1),e.rgbaMixWhite=i(b,{r:1,g:1,b:1},c,1),e.rgbaMixBlack.luminance=h(e.rgbaMixBlack,!0),e.rgbaMixWhite.luminance=h(e.rgbaMixWhite,!0),o.options.customBG&&(e.rgbaMixCustom=i(b,o.options.customBG,c,1),e.rgbaMixCustom.luminance=h(e.rgbaMixCustom,!0),o.options.customBG.luminance=h(o.options.customBG,!0)),e}function e(a,b){var c,e,k,q=b||p,r=v,s=o.options,t=l,u=q.RND,w="",x="",y={hsl:"hsv",rgb:a},z=u.rgb;if("alpha"!==a){for(var A in t)if(!t[A][A]){a!==A&&(x=y[A]||"rgb",q[A]=r[x+"2"+A](q[x])),u[A]||(u[A]={}),c=q[A];for(w in c)u[A][w]=n(c[w]*t[A][w][1])}z=u.rgb,q.HEX=r.RGB2HEX(z),q.equivalentGrey=s.grey.r*q.rgb.r+s.grey.g*q.rgb.g+s.grey.b*q.rgb.b,q.webSave=e=f(z,51),q.webSmart=k=f(z,17),q.saveColor=z.r===e.r&&z.g===e.g&&z.b===e.b?"web save":z.r===k.r&&z.g===k.g&&z.b===k.b?"web smart":"",q.hueRGB=v.hue2RGB(q.hsv.h),b&&(q.background=d(z,q.rgb,q.alpha))}var B,C,D,E=q.rgb,F=q.alpha,G="luminance",H=q.background;return B=i(E,{r:0,g:0,b:0},F,1),B[G]=h(B,!0),q.rgbaMixBlack=B,C=i(E,{r:1,g:1,b:1},F,1),C[G]=h(C,!0),q.rgbaMixWhite=C,s.customBG&&(D=i(E,H.rgbaMixCustom,F,1),D[G]=h(D,!0),D.WCAG2Ratio=j(D[G],H.rgbaMixCustom[G]),q.rgbaMixBGMixCustom=D,D.luminanceDelta=m.abs(D[G]-H.rgbaMixCustom[G]),D.hueDelta=g(H.rgbaMixCustom,D,!0)),q.RGBLuminance=h(z),q.HUELuminance=h(q.hueRGB),s.convertCallback&&s.convertCallback(q,a),q}function f(a,b){var c={},d=0,e=b/2;for(var f in a)d=a[f]%b,c[f]=a[f]+(d>e?b-d:-d);return c}function g(a,b,c){return(m.max(a.r-b.r,b.r-a.r)+m.max(a.g-b.g,b.g-a.g)+m.max(a.b-b.b,b.b-a.b))*(c?255:1)/765}function h(a,b){for(var c=b?1:255,d=[a.r/c,a.g/c,a.b/c],e=o.options.luminance,f=d.length;f--;)d[f]=d[f]<=.03928?d[f]/12.92:m.pow((d[f]+.055)/1.055,2.4);return e.r*d[0]+e.g*d[1]+e.b*d[2]}function i(a,c,d,e){var f={},g=d!==b?d:1,h=e!==b?e:1,i=g+h*(1-g);for(var j in a)f[j]=(a[j]*g+c[j]*h*(1-g))/i;return f.a=i,f}function j(a,b){var c=1;return c=a>=b?(a+.05)/(b+.05):(b+.05)/(a+.05),n(100*c)/100}function k(a,b,c){return a>c?c:b>a?b:a}var l={rgb:{r:[0,255],g:[0,255],b:[0,255]},hsv:{h:[0,360],s:[0,100],v:[0,100]},hsl:{h:[0,360],s:[0,100],l:[0,100]},alpha:{alpha:[0,1]},HEX:{HEX:[0,16777215]}},m=a.Math,n=m.round,o={},p={},q={r:.298954,g:.586434,b:.114612},r={r:.2126,g:.7152,b:.0722},s=function(a){this.colors={RND:{}},this.options={color:"rgba(0,0,0,0)",grey:q,luminance:r,valueRanges:l},t(this,a||{})},t=function(a,d){var e,f=a.options;u(a);for(var g in d)d[g]!==b&&(f[g]=d[g]);e=f.customBG,f.customBG="string"==typeof e?v.txt2color(e).rgb:e,p=c(a.colors,f.color,b,!0)},u=function(a){o!==a&&(o=a,p=a.colors)};s.prototype.setColor=function(a,d,f){return u(this),a?c(this.colors,a,d,b,f):(f!==b&&(this.colors.alpha=k(f,0,1)),e(d))},s.prototype.setCustomBackground=function(a){return u(this),this.options.customBG="string"==typeof a?v.txt2color(a).rgb:a,c(this.colors,b,"rgb")},s.prototype.saveAsBackground=function(){return u(this),c(this.colors,b,"rgb",!0)},s.prototype.toString=function(a,b){return v.color2text((a||"rgb").toLowerCase(),this.colors,b)};var v={txt2color:function(a){var b={},c=a.replace(/(?:#|\)|%)/g,"").split("("),d=(c[1]||"").split(/,\s*/),e=c[1]?c[0].substr(0,3):"rgb",f="";if(b.type=e,b[e]={},c[1])for(var g=3;g--;)f=e[g]||e.charAt(g),b[e][f]=+d[g]/l[e][f][1];else b.rgb=v.HEX2rgb(c[0]);return b.alpha=d[3]?+d[3]:1,b},color2text:function(a,b,c){var d=c!==!1&&n(100*b.alpha)/100,e="number"==typeof d&&c!==!1&&(c||1!==d),f=b.RND.rgb,g=b.RND.hsl,h="hex"===a&&e,i="hex"===a&&!h,j="rgb"===a||h,k=j?f.r+", "+f.g+", "+f.b:i?"#"+b.HEX:g.h+", "+g.s+"%, "+g.l+"%";return i?k:(h?"rgb":a)+(e?"a":"")+"("+k+(e?", "+d:"")+")"},RGB2HEX:function(a){return((a.r<16?"0":"")+a.r.toString(16)+(a.g<16?"0":"")+a.g.toString(16)+(a.b<16?"0":"")+a.b.toString(16)).toUpperCase()},HEX2rgb:function(a){return a=a.split(""),{r:+("0x"+a[0]+a[a[3]?1:0])/255,g:+("0x"+a[a[3]?2:1]+(a[3]||a[1]))/255,b:+("0x"+(a[4]||a[2])+(a[5]||a[2]))/255}},hue2RGB:function(a){var b=6*a,c=~~b%6,d=6===b?0:b-c;return{r:n(255*[1,1-d,0,0,d,1][c]),g:n(255*[d,1,1,1-d,0,0][c]),b:n(255*[0,0,d,1,1,1-d][c])}},rgb2hsv:function(a){var b,c,d,e=a.r,f=a.g,g=a.b,h=0;return g>f&&(f=g+(g=f,0),h=-1),c=g,f>e&&(e=f+(f=e,0),h=-2/6-h,c=m.min(f,g)),b=e-c,d=e?b/e:0,{h:1e-15>d?p&&p.hsl&&p.hsl.h||0:b?m.abs(h+(f-g)/(6*b)):0,s:e?b/e:p&&p.hsv&&p.hsv.s||0,v:e}},hsv2rgb:function(a){var b=6*a.h,c=a.s,d=a.v,e=~~b,f=b-e,g=d*(1-c),h=d*(1-f*c),i=d*(1-(1-f)*c),j=e%6;return{r:[d,h,g,g,i,d][j],g:[i,d,d,h,g,g][j],b:[g,g,i,d,d,h][j]}},hsv2hsl:function(a){var b=(2-a.s)*a.v,c=a.s*a.v;return c=a.s?1>b?b?c/b:0:c/(2-b):0,{h:a.h,s:a.v||c?c:p&&p.hsl&&p.hsl.s||0,l:b/2}},rgb2hsl:function(a,b){var c=v.rgb2hsv(a);return v.hsv2hsl(b?c:p.hsv=c)},hsl2rgb:function(a){var b=6*a.h,c=a.s,d=a.l,e=.5>d?d*(1+c):d+c-c*d,f=d+d-e,g=e?(e-f)/e:0,h=~~b,i=b-h,j=e*g*i,k=f+j,l=e-j,m=h%6;return{r:[e,l,f,f,k,e][m],g:[k,e,e,l,f,f][m],b:[f,f,k,e,e,l][m]}}};return s}),function(a,b){"object"==typeof exports?module.exports=b(a,require("jquery"),require("colors")):"function"==typeof define&&define.amd?define(["jquery","colors"],function(c,d){return b(a,c,d)}):b(a,a.jQuery,a.Colors)}(this,function(a,b,c,d){"use strict";function e(a){return a.value||a.getAttribute("value")||b(a).css("background-color")||"#FFF"}function f(a){return a=a.originalEvent&&a.originalEvent.touches?a.originalEvent.touches[0]:a,a.originalEvent?a.originalEvent:a}function g(a){return b(a.find(r.doRender)[0]||a[0])}function h(c){var d=b(this),f=d.offset(),h=b(a),k=r.gap;c?(s=g(d),s._colorMode=s.data("colorMode"),p.$trigger=d,(t||i()).css(r.positionCallback.call(p,d)||{left:(t._left=f.left)-((t._left+=t._width-(h.scrollLeft()+h.width()))+k>0?t._left+k:0),top:(t._top=f.top+d.outerHeight())-((t._top+=t._height-(h.scrollTop()+h.height()))+k>0?t._top+k:0)}).show(r.animationSpeed,function(){c!==!0&&(y.toggle(!!r.opacity)._width=y.width(),v._width=v.width(),v._height=v.height(),u._height=u.height(),q.setColor(e(s[0])),n(!0))}).off(".tcp").on(D,".cp-xy-slider,.cp-z-slider,.cp-alpha",j)):p.$trigger&&b(t).hide(r.animationSpeed,function(){n(!1),p.$trigger=null}).off(".tcp")}function i(){return b("head")[r.cssPrepend?"prepend":"append"]('<style type="text/css" id="tinyColorPickerStyles">'+(r.css||I)+(r.cssAddon||"")+"</style>"),b(H).css({margin:r.margin}).appendTo("body").show(0,function(){p.$UI=t=b(this),F=r.GPU&&t.css("perspective")!==d,u=b(".cp-z-slider",this),v=b(".cp-xy-slider",this),w=b(".cp-xy-cursor",this),x=b(".cp-z-cursor",this),y=b(".cp-alpha",this),z=b(".cp-alpha-cursor",this),r.buildCallback.call(p,t),t.prepend("<div>").children().eq(0).css("width",t.children().eq(0).width()),t._width=this.offsetWidth,t._height=this.offsetHeight}).hide()}function j(a){var c=this.className.replace(/cp-(.*?)(?:\s*|$)/,"$1").replace("-","_");(a.button||a.which)>1||(a.preventDefault&&a.preventDefault(),a.returnValue=!1,s._offset=b(this).offset(),(c="xy_slider"===c?k:"z_slider"===c?l:m)(a),n(),A.on(E,function(){A.off(".tcp")}).on(C,function(a){c(a),n()}))}function k(a){var b=f(a),c=b.pageX-s._offset.left,d=b.pageY-s._offset.top;q.setColor({s:c/v._width*100,v:100-d/v._height*100},"hsv")}function l(a){var b=f(a).pageY-s._offset.top;q.setColor({h:360-b/u._height*360},"hsv")}function m(a){var b=f(a).pageX-s._offset.left,c=b/y._width;q.setColor({},"rgb",c)}function n(a){var b=q.colors,c=b.hueRGB,e=(b.RND.rgb,b.RND.hsl,r.dark),f=r.light,g=q.toString(s._colorMode,r.forceAlpha),h=b.HUELuminance>.22?e:f,i=b.rgbaMixBlack.luminance>.22?e:f,j=(1-b.hsv.h)*u._height,k=b.hsv.s*v._width,l=(1-b.hsv.v)*v._height,m=b.alpha*y._width,n=F?"translate3d":"",p=s[0].value,t=s[0].hasAttribute("value")&&""===p&&a!==d;v._css={backgroundColor:"rgb("+c.r+","+c.g+","+c.b+")"},w._css={transform:n+"("+k+"px, "+l+"px, 0)",left:F?"":k,top:F?"":l,borderColor:b.RGBLuminance>.22?e:f},x._css={transform:n+"(0, "+j+"px, 0)",top:F?"":j,borderColor:"transparent "+h},y._css={backgroundColor:"#"+b.HEX},z._css={transform:n+"("+m+"px, 0, 0)",left:F?"":m,borderColor:i+" transparent"},s._css={backgroundColor:t?"":g,color:t?"":b.rgbaMixBGMixCustom.luminance>.22?e:f},s.text=t?"":p!==g?g:"",a!==d?o(a):G(o)}function o(a){v.css(v._css),w.css(w._css),x.css(x._css),y.css(y._css),z.css(z._css),r.doRender&&s.css(s._css),s.text&&s.val(s.text),r.renderCallback.call(p,s,"boolean"==typeof a?a:d)}var p,q,r,s,t,u,v,w,x,y,z,A=b(document),B=b(),C="touchmove.tcp mousemove.tcp pointermove.tcp",D="touchstart.tcp mousedown.tcp pointerdown.tcp",E="touchend.tcp mouseup.tcp pointerup.tcp",F=!1,G=a.requestAnimationFrame||a.webkitRequestAnimationFrame||function(a){a()},H='<div class="cp-color-picker"><div class="cp-z-slider"><div class="cp-z-cursor"></div></div><div class="cp-xy-slider"><div class="cp-white"></div><div class="cp-xy-cursor"></div></div><div class="cp-alpha"><div class="cp-alpha-cursor"></div></div></div>',I=".cp-color-picker{position:absolute;overflow:hidden;padding:6px 6px 0;background-color:#444;color:#bbb;font-family:Arial,Helvetica,sans-serif;font-size:12px;font-weight:400;cursor:default;border-radius:5px}.cp-color-picker>div{position:relative;overflow:hidden}.cp-xy-slider{float:left;height:128px;width:128px;margin-bottom:6px;background:linear-gradient(to right,#FFF,rgba(255,255,255,0))}.cp-white{height:100%;width:100%;background:linear-gradient(rgba(0,0,0,0),#000)}.cp-xy-cursor{position:absolute;top:0;width:10px;height:10px;margin:-5px;border:1px solid #fff;border-radius:100%;box-sizing:border-box}.cp-z-slider{float:right;margin-left:6px;height:128px;width:20px;background:linear-gradient(red 0,#f0f 17%,#00f 33%,#0ff 50%,#0f0 67%,#ff0 83%,red 100%)}.cp-z-cursor{position:absolute;margin-top:-4px;width:100%;border:4px solid #fff;border-color:transparent #fff;box-sizing:border-box}.cp-alpha{clear:both;width:100%;height:16px;margin:6px 0;background:linear-gradient(to right,#444,rgba(0,0,0,0))}.cp-alpha-cursor{position:absolute;margin-left:-4px;height:100%;border:4px solid #fff;border-color:#fff transparent;box-sizing:border-box}",J=function(a){q=this.color=new c(a),r=q.options,p=this};J.prototype={render:n,toggle:h},b.fn.colorPicker=function(c){var d=this,f=function(){};return c=b.extend({animationSpeed:150,GPU:!0,doRender:!0,customBG:"#FFF",opacity:!0,renderCallback:f,buildCallback:f,positionCallback:f,body:document.body,scrollResize:!0,gap:4,dark:"#222",light:"#DDD"},c),!p&&c.scrollResize&&b(a).on("resize.tcp scroll.tcp",function(){p.$trigger&&p.toggle.call(p.$trigger[0],!0)}),B=B.add(this),this.colorPicker=p||new J(c),this.options=c,b(c.body).off(".tcp").on(D,function(a){-1===B.add(t).add(b(t).find(a.target)).index(a.target)&&h()}),this.on("focusin.tcp click.tcp",function(a){p.color.options=b.extend(p.color.options,r=d.options),h.call(this,a)}).on("change.tcp",function(){q.setColor(this.value||"#FFF"),d.colorPicker.render(!0)}).each(function(){var a=e(this),d=a.split("("),f=g(b(this));f.data("colorMode",d[1]?d[0].substr(0,3):"HEX").attr("readonly",r.preventFocus),c.doRender&&f.css({"background-color":a,color:function(){return q.setColor(a).rgbaMixBGMixCustom.luminance>.22?c.dark:c.light}})})},b.fn.colorPicker.destroy=function(){b("*").off(".tcp"),p.toggle(!1),B=b()}});

!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.Clipboard=e()}}(function(){var e,t,n;return function e(t,n,i){function o(a,c){if(!n[a]){if(!t[a]){var l="function"==typeof require&&require;if(!c&&l)return l(a,!0);if(r)return r(a,!0);var s=new Error("Cannot find module '"+a+"'");throw s.code="MODULE_NOT_FOUND",s}var u=n[a]={exports:{}};t[a][0].call(u.exports,function(e){var n=t[a][1][e];return o(n?n:e)},u,u.exports,e,t,n,i)}return n[a].exports}for(var r="function"==typeof require&&require,a=0;a<i.length;a++)o(i[a]);return o}({1:[function(e,t,n){function i(e,t){for(;e&&e!==document;){if(e.matches(t))return e;e=e.parentNode}}if(Element&&!Element.prototype.matches){var o=Element.prototype;o.matches=o.matchesSelector||o.mozMatchesSelector||o.msMatchesSelector||o.oMatchesSelector||o.webkitMatchesSelector}t.exports=i},{}],2:[function(e,t,n){function i(e,t,n,i,r){var a=o.apply(this,arguments);return e.addEventListener(n,a,r),{destroy:function(){e.removeEventListener(n,a,r)}}}function o(e,t,n,i){return function(n){n.delegateTarget=r(n.target,t),n.delegateTarget&&i.call(e,n)}}var r=e("./closest");t.exports=i},{"./closest":1}],3:[function(e,t,n){n.node=function(e){return void 0!==e&&e instanceof HTMLElement&&1===e.nodeType},n.nodeList=function(e){var t=Object.prototype.toString.call(e);return void 0!==e&&("[object NodeList]"===t||"[object HTMLCollection]"===t)&&"length"in e&&(0===e.length||n.node(e[0]))},n.string=function(e){return"string"==typeof e||e instanceof String},n.fn=function(e){var t=Object.prototype.toString.call(e);return"[object Function]"===t}},{}],4:[function(e,t,n){function i(e,t,n){if(!e&&!t&&!n)throw new Error("Missing required arguments");if(!c.string(t))throw new TypeError("Second argument must be a String");if(!c.fn(n))throw new TypeError("Third argument must be a Function");if(c.node(e))return o(e,t,n);if(c.nodeList(e))return r(e,t,n);if(c.string(e))return a(e,t,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function o(e,t,n){return e.addEventListener(t,n),{destroy:function(){e.removeEventListener(t,n)}}}function r(e,t,n){return Array.prototype.forEach.call(e,function(e){e.addEventListener(t,n)}),{destroy:function(){Array.prototype.forEach.call(e,function(e){e.removeEventListener(t,n)})}}}function a(e,t,n){return l(document.body,e,t,n)}var c=e("./is"),l=e("delegate");t.exports=i},{"./is":3,delegate:2}],5:[function(e,t,n){function i(e){var t;if("SELECT"===e.nodeName)e.focus(),t=e.value;else if("INPUT"===e.nodeName||"TEXTAREA"===e.nodeName)e.focus(),e.setSelectionRange(0,e.value.length),t=e.value;else{e.hasAttribute("contenteditable")&&e.focus();var n=window.getSelection(),i=document.createRange();i.selectNodeContents(e),n.removeAllRanges(),n.addRange(i),t=n.toString()}return t}t.exports=i},{}],6:[function(e,t,n){function i(){}i.prototype={on:function(e,t,n){var i=this.e||(this.e={});return(i[e]||(i[e]=[])).push({fn:t,ctx:n}),this},once:function(e,t,n){function i(){o.off(e,i),t.apply(n,arguments)}var o=this;return i._=t,this.on(e,i,n)},emit:function(e){var t=[].slice.call(arguments,1),n=((this.e||(this.e={}))[e]||[]).slice(),i=0,o=n.length;for(i;i<o;i++)n[i].fn.apply(n[i].ctx,t);return this},off:function(e,t){var n=this.e||(this.e={}),i=n[e],o=[];if(i&&t)for(var r=0,a=i.length;r<a;r++)i[r].fn!==t&&i[r].fn._!==t&&o.push(i[r]);return o.length?n[e]=o:delete n[e],this}},t.exports=i},{}],7:[function(t,n,i){!function(o,r){if("function"==typeof e&&e.amd)e(["module","select"],r);else if("undefined"!=typeof i)r(n,t("select"));else{var a={exports:{}};r(a,o.select),o.clipboardAction=a.exports}}(this,function(e,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=n(t),r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),c=function(){function e(t){i(this,e),this.resolveOptions(t),this.initSelection()}return a(e,[{key:"resolveOptions",value:function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=t.action,this.emitter=t.emitter,this.target=t.target,this.text=t.text,this.trigger=t.trigger,this.selectedText=""}},{key:"initSelection",value:function e(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function e(){var t=this,n="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return t.removeFake()},this.fakeHandler=document.body.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[n?"right":"left"]="-9999px";var i=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.addEventListener("focus",window.scrollTo(0,i)),this.fakeElem.style.top=i+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,document.body.appendChild(this.fakeElem),this.selectedText=(0,o.default)(this.fakeElem),this.copyText()}},{key:"removeFake",value:function e(){this.fakeHandler&&(document.body.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(document.body.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function e(){this.selectedText=(0,o.default)(this.target),this.copyText()}},{key:"copyText",value:function e(){var t=void 0;try{t=document.execCommand(this.action)}catch(e){t=!1}this.handleResult(t)}},{key:"handleResult",value:function e(t){this.emitter.emit(t?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function e(){this.target&&this.target.blur(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function e(){this.removeFake()}},{key:"action",set:function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=t,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function e(){return this._action}},{key:"target",set:function e(t){if(void 0!==t){if(!t||"object"!==("undefined"==typeof t?"undefined":r(t))||1!==t.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&t.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(t.hasAttribute("readonly")||t.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=t}},get:function e(){return this._target}}]),e}();e.exports=c})},{select:5}],8:[function(t,n,i){!function(o,r){if("function"==typeof e&&e.amd)e(["module","./clipboard-action","tiny-emitter","good-listener"],r);else if("undefined"!=typeof i)r(n,t("./clipboard-action"),t("tiny-emitter"),t("good-listener"));else{var a={exports:{}};r(a,o.clipboardAction,o.tinyEmitter,o.goodListener),o.clipboard=a.exports}}(this,function(e,t,n,i){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e,t){var n="data-clipboard-"+e;if(t.hasAttribute(n))return t.getAttribute(n)}var s=o(t),u=o(n),f=o(i),d=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),h=function(e){function t(e,n){r(this,t);var i=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return i.resolveOptions(n),i.listenClick(e),i}return c(t,e),d(t,[{key:"resolveOptions",value:function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof t.action?t.action:this.defaultAction,this.target="function"==typeof t.target?t.target:this.defaultTarget,this.text="function"==typeof t.text?t.text:this.defaultText}},{key:"listenClick",value:function e(t){var n=this;this.listener=(0,f.default)(t,"click",function(e){return n.onClick(e)})}},{key:"onClick",value:function e(t){var n=t.delegateTarget||t.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new s.default({action:this.action(n),target:this.target(n),text:this.text(n),trigger:n,emitter:this})}},{key:"defaultAction",value:function e(t){return l("action",t)}},{key:"defaultTarget",value:function e(t){var n=l("target",t);if(n)return document.querySelector(n)}},{key:"defaultText",value:function e(t){return l("text",t)}},{key:"destroy",value:function e(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}]),t}(u.default);e.exports=h})},{"./clipboard-action":7,"good-listener":4,"tiny-emitter":6}]},{},[8])(8)});

var _chkBoxich = function(data){
    if(typeof(Boxich) == 'undefined') setTimeout(function(){ _chkBoxich(data); }, 1000);
    else Boxich.getQuestion(data);
	console.log('will try: ', data);
};

function _boxichSendFrameMessage(targetFrame, msgData) {
    targetFrame.contentWindow.postMessage(JSON.stringify(msgData), '*');
}

function boxichSubmitLogin(){
    var _data = {
        _origin: 'boxichWPdemoPlugin',
        _name: jQuery('[name="wpRegName"]').val(),
        _email: jQuery('[name="wpRegMail"]').val(),
        _site: pluginDomain,
        _offer: '3 Months Demo'
    };

    var el_loader = document.querySelector('#loader'),
        el_loaderSvg = document.querySelector('#loaderSvg'),
        el_perLoader = document.querySelector('#perLoader'),
        el_login = document.querySelector('#login'),
        boxichFrame = document.querySelector('#_boxichSettingsFrame');


        el_loaderSvg.style.display = 'block';
    el_perLoader.style.display = 'none';
    jQuery(el_loader).show();

    jQuery.ajax({ url: 'http://boxich.a2hosted.com/boxich/mailer', type: "POST", data: _data  }).done(function(_data){
        jQuery(el_loader).hide();
        var data = JSON.parse(_data);
        if(typeof(data.err) != 'undefined'){
        	if(typeof(data.trailEnd) != 'undefined')  el_login.innerHTML = 'Boxich trail ended.. contact go@boxich.com for plans';
        	else alert(data.error);
        }
        else _boxichSendFrameMessage(boxichFrame, {boxich_action: 1, toEval:
        "$('[name=\"username\"]').val('" + data.username + "');" +
        "$('[name=\"password\"]').val('12345');" +
        "$(el_login.querySelector('[type=\"submit\"]')).trigger('tap').click();"
        });
    }).fail(function(){
        jQuery(el_loader).hide();
        alert('server error. please try again or mail directly to go@boxich.com');
    });
}

var _boxichWP = function(_kw, _kwt, _category, _color, _target, apiKey){
    function getBoxich(_kw, _kwt, _category, _color, _target, apiKey){
        var data = {target: document.querySelector('.' +_target), kwt:document.querySelector('.' +_target).parentNode};
        if(_kw != null && _kw != 'null'){
            _kw = _kw.split(',');
            for(var _k in _kw) _kw[_k] = _kw[_k].trim();
            data.keywords = _kw;
        }
        if(_category != null && _category != 'null') data.category = parseInt(_category);
        if(_color != null && _color != 'null') data.color = _color;
        _chkBoxich(data);
    }

    if(document.querySelector('#boxich_api') == null){
        var s = document.createElement('script');
        s.apiKey = apiKey;
        s.id = 'boxich_api';
        s.onload = function(){ getBoxich(_kw, _kwt, _category, _color, _target, apiKey); };
        s.src = 'http://boxich.a2hosted.com/boxich/boxApi';
        document.querySelector('head').appendChild(s);
    }
    else getBoxich(_kw, _kwt, _category, _color, _target, apiKey);
};
	
(function(){
		var el_loader = document.querySelector('#loader'),
            el_loaderSvg = document.querySelector('#loaderSvg'),
			el_login = document.querySelector('#login'),
			el_wpRegisterForm = document.querySelector('#wpRegisterForm'),
			el_wpRegister = document.querySelector('#wpRegister'),
			el_perLoader = document.querySelector('#perLoader'),
			el_leftMenuButton = document.querySelector('#leftMenuButton'),
			el_main = document.querySelector('main'),
			el_leftMenu = document.querySelector('#leftMenu'),
			el_extendScreen = document.querySelector('#extendScreen'),
			el_loaderSpan = document.querySelector('#loaderSpan'),
			el_generateScript = document.querySelector('#generateScript'),
			fingerPrint,
			pagesConfig = {},
			getJSONCalled = false,
			pagesIndex = {},
			isWP = window.location.hash.indexOf('wordpress') > -1,
			isMobile =(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(navigator.userAgent)),
			$consoleDialog = jQuery('#consoleDialog'),
			deviceWH = [0,0, ''],
			$metaPort = jQuery('[name="viewport"]'),
			pagesSrc = [],
			el_scriptGen = document.querySelector('#scriptsGen'),
			el_boxichLogout = document.querySelector('#boxichLogout'),
			srcArr = [],
			nameArr = [],
			styleArr = [],
			isLoaded = false;
		
		var boxichFrame = document.querySelector('#_boxichSettingsFrame');

		function _boxichReceiveFrameMessage(event) {
			var data = {};
			try{ data = JSON.parse(event.data); } catch(err){ return console.log(err); }
			if(typeof(data['boxich_action']) != 'undefined'){
				if(data['boxich_action'] == 0){
					if(curJwt == '' || curUid != data.uid){
						document.querySelector('[name="boxich_jwt"]').value = data.jwt;
						document.querySelector('[name="boxich_uid"]').value = data.uid;
						document.querySelector('#boxich_form').submit();
					}
				}
				if(data['boxich_action'] == 1) {
					eval(data['toEval'])
				}
				if(data['boxich_action'] == 2) {
					jQuery('#boxichResults').val(data.snippet);
				}
					
			}
		}


		
		jQuery(el_login).find('[type="submit"]').on('click', function(e){ 
			_boxichSendFrameMessage(boxichFrame, {boxich_action: 1, toEval: 
				"$('[name=\"username\"]').val('" + el_login.querySelector('[name="username"]').value + "');" +
				"$('[name=\"password\"]').val('" + el_login.querySelector('[name="password"]').value + "');" +
				"$(el_login.querySelector('[type=\"submit\"]')).trigger('tap').click();" 
			}); 
			e.preventDefault();
			return false;
		});		
		
		jQuery(el_boxichLogout).on('click', function(e){ 
			_boxichSendFrameMessage(boxichFrame, {boxich_action: 1, toEval: "hammerTaps.logout();"  }); 
			//el_wpRegister.style.display = 'block';
			//el_login.style.display = 'block';
		});
		
		jQuery(el_generateScript).on('click', function(e){ 
			var generateObj = {
				boxich_action: 2, 
				readKw: jQuery('#readKw').prop('checked'), readKwText: jQuery('#readKwText').val(), 
				readKwDiff: jQuery('#readKwDiff').prop('checked'), readKwDiffText: jQuery('#readKwDiffText').val(), 
				addCat: jQuery('#addCat').prop('checked'), addCatSelect: jQuery('#addCatSelect').val(), 
				addKw: jQuery('#addKw').prop('checked'), addKwText: jQuery('#addKwText').val(), 
				addColor: jQuery('#addColor').prop('checked'), addColorVal: jQuery('#addColorVal').val()  
			};
			
			if(generateObj.readKw == true) jQuery('#boxichPreviewText').html(generateObj.readKwText);
				
			_boxichSendFrameMessage(boxichFrame, generateObj);
				_boxichWP( 
					(generateObj.addKw == false ? null : generateObj.addKwText),
					(generateObj.readKwDiff == false ? true : generateObj.readKwDiff),
					(generateObj.addCat == false ? null : generateObj.addCatSelect) ,
					(generateObj.addColor == false ? null : generateObj.addColorVal),
					'boxichPreview',
					curJwt);
			
		});
		
		jQuery(el_wpRegister).on('click', function(e){
			if(el_wpRegister.getAttribute('data-back') == 'false'){
			//	el_wpRegisterForm.style.display = 'block';
				el_wpRegister.innerHTML = 'Back';
				el_wpRegister.setAttribute('data-back', 'true');
			}
			else{
				//el_wpRegisterForm.style.display = 'none';
				el_wpRegister.setAttribute('data-back', 'false');
				el_wpRegister.innerHTML = 'not registered? click for free quick 3 month free demo register';
			}
		});
		
		el_wpRegisterForm.addEventListener('submit', function(e){
			e.preventDefault();
			boxichSubmitLogin();
			return false;
			
		}, false);
		
		jQuery('#addColorVal').colorPicker();
		
		jQuery('#readKw, #addColor').prop('checked', true);
		
		new Clipboard('.clipCopy');
		
		window.addEventListener("message", _boxichReceiveFrameMessage, false);
		
	})();
