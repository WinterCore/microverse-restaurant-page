(()=>{"use strict";const t=function(){function t(t,n,e){this.name=t,this.body=n,this.attrs=e}return t.prototype.appendTo=function(t){var n=document.createElement(this.name);if(this.attrs)for(var e in this.attrs){var o=document.createAttribute(e);o.value=this.attrs[e],n.attributes.setNamedItem(o)}this.body&&this.body.appendTo(n),t.appendChild(n)},t}(),n=function(){function n(t,n){this.body=t,this.attrs=n}return n.prototype.appendTo=function(n){new t("div",this.body,this.attrs).appendTo(n)},n}(),e=function(){function t(t){this.components=t}return t.prototype.appendTo=function(t){this.components.forEach((function(n){return n.appendTo(t)}))},t}(),o=function(){function t(t){this.text=t}return t.prototype.appendTo=function(t){t.appendChild(document.createTextNode(this.text))},t}(),i=function(){function n(t,n){this.body=t,this.attrs=n}return n.prototype.appendTo=function(n){new t("h1",this.body,this.attrs).appendTo(n)},n}(),s=function(){function t(){}return t.prototype.appendTo=function(t){new n(new i(new o("Fresh And Delicious Food For Your Health"),{class:"title"}),{class:"tab home flex justify-center align-center"}).appendTo(t)},t}(),r=function(){function n(t,n){this.body=t,this.attrs=n}return n.prototype.appendTo=function(n){new t("nav",this.body,this.attrs).appendTo(n)},n}(),p=function(){function n(t,n){this.body=t,this.attrs=n}return n.prototype.appendTo=function(n){new t("header",this.body,this.attrs).appendTo(n)},n}(),a=function(){function n(t,n){this.src=t,this.attrs=n}return n.prototype.appendTo=function(n){new t("img",null,Object.assign({src:this.src},this.attrs)).appendTo(n)},n}();var c=document.querySelector("#content");new p(new e([new n(new a("img/logo.png",{class:"logo"})),new r(new e([new n(new o("Home")),new n(new o("Menu")),new n(new o("About"))]),{class:"flex"}),new n(null,{style:"width: 100px"})]),{class:"flex justify-between align-center"}).appendTo(c),(new s).appendTo(document.querySelector("#content"))})();
//# sourceMappingURL=bundle.js.map