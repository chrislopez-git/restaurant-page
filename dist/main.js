(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>r});var o=t(645),i=t.n(o)()((function(e){return e[1]}));i.push([e.id,"a {\n    display: block;\n    padding: 8px;\n    \n  }\n  \n  /* header {\n    box-sizing: border-box;\n    background-color: var(--khaki);\n    margin-bottom: 45px;\n    height: 50px;\n    padding-top: 5px;\n\n} */\n\nbody {\n    background-color: #C5D1EB;\n}\nli {\n    display: inline;\n    float: left;\n}\n\nli a {\n    display: block;\n    color: white;\n    text-align: center;\n    padding: 14px 16px;\n    text-decoration: none;\n\n}\n\nli a:hover {\n    background-color: #56E39F;\n    \n  }\n\nul {\n    border-radius: 10px;\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n    overflow: hidden;\n    background-color: #8A4F7D;\n    \n  }\n\n.header {\n    display: block;\n    font-size: 1.5em;\n    margin-top: 0.83em;\n    margin-bottom: 0.83em;\n    margin-left: 0;\n    margin-right: 0;\n    font-weight: bold;\n}\n\n.mainContainer {\n    display: flexbox;\n    flex-direction: column;\n    padding-top: 20px;\n    padding-left: 15px;\n    padding-right: 15px;\n\n}\n\n#navCon {\n    display: flex;\n    flex-direction: column;\n    align-content: center;\n    justify-content: center;\n    background-color: #8A4F7D;\n}",""]);const r=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,o){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(o)for(var r=0;r<this.length;r++){var a=this[r][0];null!=a&&(i[a]=!0)}for(var d=0;d<e.length;d++){var c=[].concat(e[d]);o&&i[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),n.push(c))}},n}},379:(e,n,t)=>{var o,i=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),r=[];function a(e){for(var n=-1,t=0;t<r.length;t++)if(r[t].identifier===e){n=t;break}return n}function d(e,n){for(var t={},o=[],i=0;i<e.length;i++){var d=e[i],c=n.base?d[0]+n.base:d[0],l=t[c]||0,s="".concat(c," ").concat(l);t[c]=l+1;var u=a(s),m={css:d[1],media:d[2],sourceMap:d[3]};-1!==u?(r[u].references++,r[u].updater(m)):r.push({identifier:s,updater:p(m,n),references:1}),o.push(s)}return o}function c(e){var n=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var r=t.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(e){n.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(n);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}return n}var l,s=(l=[],function(e,n){return l[e]=n,l.filter(Boolean).join("\n")});function u(e,n,t,o){var i=t?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=s(n,i);else{var r=document.createTextNode(i),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(r,a[n]):e.appendChild(r)}}function m(e,n,t){var o=t.css,i=t.media,r=t.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var f=null,h=0;function p(e,n){var t,o,i;if(n.singleton){var r=h++;t=f||(f=c(n)),o=u.bind(null,t,r,!1),i=u.bind(null,t,r,!0)}else t=c(n),o=m.bind(null,t,n),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return o(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;o(e=n)}else i()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o));var t=d(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<t.length;o++){var i=a(t[o]);r[i].references--}for(var c=d(e,n),l=0;l<t.length;l++){var s=a(t[l]);0===r[s].references&&(r[s].updater(),r.splice(s,1))}t=c}}}}},n={};function t(o){var i=n[o];if(void 0!==i)return i.exports;var r=n[o]={id:o,exports:{}};return e[o](r,r.exports,t),r.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{function e(){for(;document.getElementById("content").firstChild;)document.getElementById("content").removeChild(document.getElementById("content").firstChild);console.log("I get called from start.js!");const e=document.createElement("div");e.classList.add("mainContainer"),e.innerHTML="Coley's Pizza Serves the best pizza in all of South Florida! ";const n=document.createElement("div");n.classList.add("header"),n.innerHTML="Coley's Pizza",e.appendChild(n);const t=new Image;t.src="https://fastly.4sqi.net/img/general/width960/vLJi_iIYM2ZWOJSHhE6WqBnPHvGb1sNE_qVfQ04FWjE.jpg",t.setAttribute("height","500"),t.setAttribute("width","500"),e.appendChild(t),document.getElementById("content").appendChild(e)}var n=t(379),o=t.n(n),i=t(426);o()(i.Z,{insert:"head",singleton:!1}),i.Z.locals,console.log("hello nice to meet you!"),e(),document.getElementById("home").addEventListener("click",e),document.getElementById("menu").addEventListener("click",(function(){for(;document.getElementById("content").firstChild;)document.getElementById("content").removeChild(document.getElementById("content").firstChild);console.log("I get called from menu.js!");const e=document.createElement("div");e.classList.add("mainContainer"),e.innerHTML="The menu of what you can get at Coley's Pizza! ";const n=document.createElement("div");n.classList.add("header"),n.innerHTML="Coley's Pizza Menu",e.appendChild(n);const t=new Image;t.src="https://fastly.4sqi.net/img/general/width960/vLJi_iIYM2ZWOJSHhE6WqBnPHvGb1sNE_qVfQ04FWjE.jpg",t.setAttribute("height","500"),t.setAttribute("width","500"),e.appendChild(t),document.getElementById("content").appendChild(e)})),document.getElementById("contact").addEventListener("click",(function(){for(;document.getElementById("content").firstChild;)document.getElementById("content").removeChild(document.getElementById("content").firstChild);console.log("I get called from contact.js!");const e=document.createElement("div");e.classList.add("mainContainer"),e.innerHTML="Contact information for Coley's Pizza! ";const n=document.createElement("div");n.classList.add("header"),n.innerHTML="Contact Us!",e.appendChild(n);const t=new Image;t.src="https://fastly.4sqi.net/img/general/width960/vLJi_iIYM2ZWOJSHhE6WqBnPHvGb1sNE_qVfQ04FWjE.jpg",t.setAttribute("height","500"),t.setAttribute("width","500"),e.appendChild(t),document.getElementById("content").appendChild(e)})),document.getElementById("about").addEventListener("click",(function(){for(;document.getElementById("content").firstChild;)document.getElementById("content").removeChild(document.getElementById("content").firstChild);console.log("I get called from contact.js!");const e=document.createElement("div");e.classList.add("mainContainer"),e.innerHTML="About our team at Coley's Pizza! ";const n=document.createElement("div");n.classList.add("header"),n.innerHTML="Learn about our team at Coley's Pizza!",e.appendChild(n);const t=new Image;t.src="https://fastly.4sqi.net/img/general/width960/vLJi_iIYM2ZWOJSHhE6WqBnPHvGb1sNE_qVfQ04FWjE.jpg",t.setAttribute("height","500"),t.setAttribute("width","500"),e.appendChild(t),document.getElementById("content").appendChild(e)}))})()})();