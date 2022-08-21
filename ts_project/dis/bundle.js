!function(){"use strict";var e={485:function(e,t,n){var o=n(81),i=n.n(o),r=n(645),a=n.n(r)()(i());a.push([e.id,'* {\n  margin: 0;\n  padding: 0;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.main {\n  width: 360px;\n  height: 420px;\n  background-color: #b7d4a8;\n  margin: 100px auto;\n  border: 10px solid black;\n  border-radius: 40px;\n}\n.stage {\n  width: 300px;\n  height: 300px;\n  border: 2px solid black;\n  margin: 20px auto;\n  position: relative;\n}\n.score-panel {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  font: bold 20px "Courier";\n  margin: 20px;\n}\n#snake > div {\n  width: 10px;\n  height: 10px;\n  background-color: black;\n  border: 1px solid #b7d4a8;\n  position: absolute;\n}\n#food {\n  width: 10px;\n  height: 10px;\n  position: absolute;\n  top: 100px;\n  left: 40px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row wrap;\n          flex-flow: row wrap;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -ms-flex-line-pack: justify;\n      align-content: space-between;\n}\n#food > div {\n  width: 4px;\n  height: 4px;\n  background-color: black;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n}\n',""]),t.Z=a},645:function(e){e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,i,r){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(o)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var l=0;l<e.length;l++){var f=[].concat(e[l]);o&&a[f[0]]||(void 0!==r&&(void 0===f[5]||(f[1]="@layer".concat(f[5].length>0?" ".concat(f[5]):""," {").concat(f[1],"}")),f[5]=r),n&&(f[2]?(f[1]="@media ".concat(f[2]," {").concat(f[1],"}"),f[2]=n):f[2]=n),i&&(f[4]?(f[1]="@supports (".concat(f[4],") {").concat(f[1],"}"),f[4]=i):f[4]="".concat(i)),t.push(f))}},t}},81:function(e){e.exports=function(e){return e[1]}},379:function(e){var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var r={},a=[],s=0;s<e.length;s++){var c=e[s],l=o.base?c[0]+o.base:c[0],f=r[l]||0,u="".concat(l," ").concat(f);r[l]=f+1;var d=n(u),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==d)t[d].references++,t[d].updater(h);else{var p=i(h,o);o.byIndex=s,t.splice(s,0,{identifier:u,updater:p,references:1})}a.push(u)}return a}function i(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,i){var r=o(e=e||[],i=i||{});return function(e){e=e||[];for(var a=0;a<r.length;a++){var s=n(r[a]);t[s].references--}for(var c=o(e,i),l=0;l<r.length;l++){var f=n(r[l]);0===t[f].references&&(t[f].updater(),t.splice(f,1))}r=c}}},569:function(e){var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:function(e){e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:function(e,t,n){e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:function(e){e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var i=void 0!==n.layer;i&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,i&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:function(e){e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var r=t[o]={id:o,exports:{}};return e[o](r,r.exports,n),r.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.nc=void 0,function(){var e=n(379),t=n.n(e),o=n(795),i=n.n(o),r=n(569),a=n.n(r),s=n(565),c=n.n(s),l=n(216),f=n.n(l),u=n(589),d=n.n(u),h=n(485),p={};function v(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}p.styleTagTransform=d(),p.setAttributes=c(),p.insert=a().bind(null,"head"),p.domAPI=i(),p.insertStyleElement=f(),t()(h.Z,p),h.Z&&h.Z.locals&&h.Z.locals;var b=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.element=document.getElementById("snake"),this.head=document.querySelector("#snake>div"),this.bodies=this.element.getElementsByTagName("div")}var t,n;return t=e,(n=[{key:"X",get:function(){return this.head.offsetLeft},set:function(e){if(this.X!==e){if(e<0||e>290)throw new Error("Game over!");this.bodies[1]&&this.bodies[1].offsetLeft===e&&(e=e>this.X?this.X-10:this.X+10),this.moveBody(),this.head.style.left=e+"px",this.checkHeadBody()}}},{key:"Y",get:function(){return this.head.offsetTop},set:function(e){if(this.Y!==e){if(e<0||e>290)throw new Error("Game over!");this.bodies[1]&&this.bodies[1].offsetTop===e&&(e=e>this.Y?this.Y-10:this.Y+10),this.moveBody(),this.head.style.top=e+"px",this.checkHeadBody()}}},{key:"addBody",value:function(){this.element.insertAdjacentHTML("beforeend","<div></div>")}},{key:"moveBody",value:function(){for(var e=this.bodies.length-1;e>0;e--){var t=this.bodies[e-1].offsetLeft,n=this.bodies[e-1].offsetTop;this.bodies[e].style.left=t+"PX",this.bodies[e].style.top=n+"PX"}}},{key:"checkHeadBody",value:function(){for(var e=1;e<this.bodies.length;e++){var t=this.bodies[e];if(this.X===t.offsetLeft&&this.Y===t.offsetTop)throw new Error("撞到自己了")}}}])&&v(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function y(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var m=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.element=document.getElementById("food")}var t,n;return t=e,(n=[{key:"X",get:function(){return this.element.offsetLeft}},{key:"Y",get:function(){return this.element.offsetTop}},{key:"change",value:function(){var e=10*Math.floor(30*Math.random()),t=10*Math.floor(30*Math.random());this.element.style.left=t+"px",this.element.style.top=e+"px"}}])&&y(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function w(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function g(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var x=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;w(this,e),this.score=0,this.level=1,this.upScore=n,this.maxLevel=t,this.scoreEle=document.getElementById("score"),this.levelEle=document.getElementById("level")}var t,n;return t=e,(n=[{key:"addScore",value:function(){this.scoreEle.innerHTML=++this.score+"",this.score%this.upScore==0&&this.addLevel()}},{key:"addLevel",value:function(){this.level<this.maxLevel&&(this.levelEle.innerHTML=++this.level+"")}}])&&g(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),k=x;function E(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.direction="",this.isLive=!0,this.snake=new b,this.food=new m,this.scorePanel=new k,this.init()}var t,n;return t=e,(n=[{key:"init",value:function(){document.addEventListener("keydown",this.keydownHandler.bind(this))}},{key:"keydownHandler",value:function(e){this.direction=e.key,this.run()}},{key:"run",value:function(){var e=this.snake.X,t=this.snake.Y;switch(this.direction){case"ArrowUp":case"Up":t-=10;break;case"ArrowDown":case"Down":t+=10;break;case"ArrowLeft":case"Left":e-=10;break;case"ArrowRight":case"Right":e+=10}this.checkEat(e,t);try{this.snake.X=e,this.snake.Y=t}catch(e){alert(e.message),this.isLive=!1}this.isLive&&setTimeout(this.run.bind(this),300-30*(this.scorePanel.level-1))}},{key:"checkEat",value:function(e,t){e===this.food.X&&t===this.food.Y&&(this.food.change(),this.scorePanel.addScore(),this.snake.addBody())}}])&&E(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}())}()}();