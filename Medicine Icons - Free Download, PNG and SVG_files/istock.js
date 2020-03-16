// 1.0.7
/*
Copyright 2019 Getty Images

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
"use strict";function _typeof(obj){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj})(obj)}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}function _possibleConstructorReturn(self,call){return!call||"object"!==_typeof(call)&&"function"!=typeof call?_assertThisInitialized(self):call}function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),superClass&&_setPrototypeOf(subClass,superClass)}function _wrapNativeSuper(Class){var _cache="function"==typeof Map?new Map:void 0;return(_wrapNativeSuper=function(Class){if(null===Class||!_isNativeFunction(Class))return Class;if("function"!=typeof Class)throw new TypeError("Super expression must either be null or a function");if(void 0!==_cache){if(_cache.has(Class))return _cache.get(Class);_cache.set(Class,Wrapper)}function Wrapper(){return _construct(Class,arguments,_getPrototypeOf(this).constructor)}return Wrapper.prototype=Object.create(Class.prototype,{constructor:{value:Wrapper,enumerable:!1,writable:!0,configurable:!0}}),_setPrototypeOf(Wrapper,Class)})(Class)}function isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}function _construct(Parent,args,Class){return(_construct=isNativeReflectConstruct()?Reflect.construct:function(Parent,args,Class){var a=[null];a.push.apply(a,args);var instance=new(Function.bind.apply(Parent,a));return Class&&_setPrototypeOf(instance,Class.prototype),instance}).apply(null,arguments)}function _isNativeFunction(fn){return-1!==Function.toString.call(fn).indexOf("[native code]")}function _setPrototypeOf(o,p){return(_setPrototypeOf=Object.setPrototypeOf||function(o,p){return o.__proto__=p,o})(o,p)}function _getPrototypeOf(o){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(o){return o.__proto__||Object.getPrototypeOf(o)})(o)}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}!function(){var cssHref,head,link;cssHref=document.currentScript.attributes.src.value.replace(".js",".css"),head=document.getElementsByTagName("head")[0],(link=document.createElement("link")).rel="stylesheet",link.type="text/css",link.href=cssHref,link.media="screen",head.appendChild(link);var IStockSearchGrid=function(){function IStockSearchGrid(){var _this;return _classCallCheck(this,IStockSearchGrid),_defineProperty(_assertThisInitialized(_this=_possibleConstructorReturn(this,_getPrototypeOf(IStockSearchGrid).call(this))),"_isConnected",!1),_this}return _inherits(IStockSearchGrid,_wrapNativeSuper(HTMLElement)),_createClass(IStockSearchGrid,[{key:"connectedCallback",value:function(){this._updateRendering(),this.isConnected=!0}},{key:"attributeChangedCallback",value:function(name,oldValue,newValue){if("title"!==name)this.isConnected&&this._updateRendering();else{var e=document.getElementsByClassName("istock-grid-title");null!==e&&(e[0].innerText=newValue)}}},{key:"_updateRendering",value:function(){var _this2=this,instanceIndex=document.getElementsByTagName("istock-affiliate").length;if(20<instanceIndex*this.itemCount-this.itemCount)console.log("Invalid combination of widgets ("+instanceIndex+") and item-count ("+this.itemCount+")");else{var requestUri="https://api.gettyimages.com/v3/affiliates/search/images?&phrase="+this.searchPhrase;this.imageStyle&&(requestUri+="&style="+this.imageStyle),requestUri+="&w=1.0.7";var request=new XMLHttpRequest;request.open("GET",requestUri),request.onreadystatechange=function(){if(200==request.status||0==request.status){if(200==request.status&&4==request.readyState){var response=JSON.parse(request.responseText);window.sessionStorage.setItem(requestUri,JSON.stringify(response)),_this2.populateGrid(instanceIndex,response)}}else{var message=request.status,span=document.createElement("span");console.log(request.responseText);var errorResponse=JSON.parse(request.responseText);errorResponse&&errorResponse.ErrorMessage&&(message+=": "+errorResponse.ErrorMessage),span.innerText=message;var wrapper=document.createElement("div");for(_this2.appendChild(wrapper);wrapper.firstChild;)wrapper.firstChild.remove();wrapper.appendChild(span)}},request.setRequestHeader("Api-Key",this.apiKey),request.send()}}},{key:"populateGrid",value:function(instanceIndex,response){for(var _this3=this;this.firstChild;)this.firstChild.remove();var wrapper=document.createElement("div");this.appendChild(wrapper);var title=document.createElement("div");title.className="istock-grid-title",title.innerText=this.customTitle?this.customTitle:"Premium Images by iStock",wrapper.appendChild(title);var imageContainer=document.createElement("div");imageContainer.className="istock-container istock-"+this.orientation,wrapper.appendChild(imageContainer);var startIndex=(instanceIndex-1)*this.itemCount,itemCount=instanceIndex*this.itemCount;response.images.slice(startIndex,0<this.itemCount&&this.itemCount<=20?itemCount:10).forEach(function(image){if(image.destination_url){var figure=document.createElement("div");figure.className="istock-figure",figure.title=image.title;var img=document.createElement("img");img.src=image.preview_urls.medium,img.alt=image.caption,img.className="istock-image";var link=document.createElement("a");link.href="https://istockphoto.6q33.net/c/"+_this3.affiliateId+"/258824/4205?u="+encodeURIComponent(image.destination_url),link.target="_blank",link.appendChild(img),figure.appendChild(link),imageContainer.appendChild(figure)}})}},{key:"isConnected",get:function(){return this._isConnected},set:function(value){this._isConnected=value}},{key:"apiKey",get:function(){return this.getAttribute("api-key")},set:function(value){this.setAttribute("api-key",value)}},{key:"affiliateId",get:function(){return this.getAttribute("affiliate-id")},set:function(value){this.setAttribute("affiliate-id",value)}},{key:"searchPhrase",get:function(){return this.getAttribute("search-phrase")},set:function(value){this.setAttribute("search-phrase",value)}},{key:"itemCount",get:function(){return this.getAttribute("item-count")},set:function(value){this.setAttribute("item-count",value)}},{key:"orientation",get:function(){return this.getAttribute("orientation")},set:function(value){this.setAttribute("orientation",value)}},{key:"imageStyle",get:function(){return this.getAttribute("image-style")},set:function(value){this.setAttribute("image-style",value)}},{key:"customTitle",get:function(){return this.getAttribute("title")},set:function(value){this.setAttribute("title",value)}}],[{key:"observedAttributes",get:function(){return["search-phrase","page-size","orientation","image-style","title"]}}]),IStockSearchGrid}();window.customElements.define("istock-affiliate",IStockSearchGrid)}();