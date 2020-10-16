(()=>{"use strict";const t=function(){function t(t,e,n){this.name=t,this.body=e,this.attrs=n}return t.prototype.appendTo=function(t){var e=document.createElement(this.name);if(this.attrs)for(var n in this.attrs){var i=document.createAttribute(n);i.value=this.attrs[n],e.attributes.setNamedItem(i)}this.body&&this.body.appendTo(e),t.appendChild(e)},t}(),e=function(){function e(t,e){this.body=t,this.attrs=e}return e.prototype.appendTo=function(e){new t("div",this.body,this.attrs).appendTo(e)},e}(),n=function(){function t(t){this.components=t}return t.prototype.appendTo=function(t){this.components.forEach((function(e){return e.appendTo(t)}))},t}(),i=function(){function t(t){this.text=t}return t.prototype.appendTo=function(t){t.appendChild(document.createTextNode(this.text))},t}(),o=function(){function e(t,e){this.body=t,this.attrs=e}return e.prototype.appendTo=function(e){new t("h1",this.body,this.attrs).appendTo(e)},e}(),a=function(){function t(){}return t.prototype.appendTo=function(t){new e(new o(new i("Fresh And Delicious Food For Your Health"),{class:"title"}),{class:"tab home flex justify-center align-center"}).appendTo(t)},t}(),s=function(){function e(t,e){this.body=t,this.attrs=e}return e.prototype.appendTo=function(e){new t("nav",this.body,this.attrs).appendTo(e)},e}(),r=function(){function e(t,e){this.body=t,this.attrs=e}return e.prototype.appendTo=function(e){new t("header",this.body,this.attrs).appendTo(e)},e}(),c=function(){function e(t,e){this.src=t,this.attrs=e}return e.prototype.appendTo=function(e){new t("img",null,Object.assign({src:this.src},this.attrs)).appendTo(e)},e}();var p=[{name:"#12. Chicken Chilis",description:"Craft beer elit seitan exercitation photo booth et 8-bit kale chips.",price:20,image:"img/1.png"},{name:"#10. Fried Rice",description:"Craft beer elit seitan exercitation photo booth et 8-bit kale chips.",price:33,image:"img/2.png"},{name:"#13. Mashed Onions",description:"Craft beer elit seitan exercitation photo booth et 8-bit kale chips.",price:23,image:"img/3.png"},{name:"#32. Vegetable fry",description:"Craft beer elit seitan exercitation photo booth et 8-bit kale chips.",price:10,image:"img/4.png"},{name:"#15. Burger Cury",description:"Craft beer elit seitan exercitation photo booth et 8-bit kale chips.",price:15,image:"img/5.png"},{name:"#9. Potato Soup",description:"Craft beer elit seitan exercitation photo booth et 8-bit kale chips.",price:57,image:"img/6.png"}];const u=function(){function e(t,e){this.body=t,this.attrs=e}return e.prototype.appendTo=function(e){new t("h2",this.body,this.attrs).appendTo(e)},e}(),h=function(){function e(t,e){this.body=t,this.attrs=e}return e.prototype.appendTo=function(e){new t("p",this.body,this.attrs).appendTo(e)},e}(),d=function(){function t(t,e,n,i,o){this.name=t,this.description=e,this.price=n,this.image=i,this.attrs=o}return t.prototype.appendTo=function(t){new e(new n([new e(new c(this.image),{class:"menu-item-thumb"}),new e(new n([new u(new i(this.name)),new h(new i(this.description)),new e(new i("$"+this.price),{class:"price"})]),{class:"menu-item-data"})]),Object.assign({class:"menu-item"},this.attrs||{})).appendTo(t)},t}(),w=function(){function t(){}return t.prototype.appendTo=function(t){new e(new n([new u(new i("Delicious Food For You"),{class:"title"}),new e(new n(p.map((function(t){var e=t.name,n=t.price,i=t.description,o=t.image;return new d(e,i,n,o)}))),{class:"menu-items-outer"})]),{class:"tab menu flex align-center column"}).appendTo(t)},t}(),l=function(){function e(t,e){this.src=t,this.attrs=e}return e.prototype.appendTo=function(e){new t("iframe",null,Object.assign({src:this.src},this.attrs||{})).appendTo(e)},e}(),f=function(){function t(){}return t.prototype.appendTo=function(t){new e(new n([new e(new o(new i("Contact"),{class:"title"}),{class:"about-heading flex justify-center align-center"}),new e(new n([new l("https://www.google.com/maps/embed/v1/place?q=paris&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8",{id:"map"}),new e(new n([new e(new n([new e(new i("Paris, France")),new e(new i("Potato Road 91770"))])),new e(new n([new e(new i("+1 253 565 2365")),new e(new i("Mon to Fri 9am to 6pm"))])),new e(new n([new e(new i("support@colorlib.com")),new e(new i("Send us your query anytime!"))]))]),{class:"about-info flex justify-between"})]),{class:"about-container"})]),{class:"tab about"}).appendTo(t)},t}();var b=document.querySelector("#content");new r(new n([new e(new c("img/logo.png",{class:"logo"})),new s(new n([new e(new i("Home"),{class:"tab-button","data-tab":1}),new e(new i("Menu"),{class:"tab-button","data-tab":2}),new e(new i("About"),{class:"tab-button","data-tab":3})]),{class:"flex"}),new e(null,{style:"width: 100px"})]),{class:"flex justify-between align-center"}).appendTo(b);var m=[a,w,f];(new m[0]).appendTo(b),document.querySelectorAll("header nav .tab-button").forEach((function(t){t.addEventListener("click",(function(){document.querySelector("#content .tab").remove(),(new m[+this.dataset.tab-1]).appendTo(b)}))}))})();
//# sourceMappingURL=bundle.js.map