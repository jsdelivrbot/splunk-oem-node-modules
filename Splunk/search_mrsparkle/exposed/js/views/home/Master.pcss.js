define(function(){return function(modules){function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={exports:{},id:moduleId,loaded:!1};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}var installedModules={};return __webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.p="",__webpack_require__(0)}({0:function(module,exports,__webpack_require__){var content=__webpack_require__(88);"string"==typeof content&&(content=[[module.id,content,""]]);__webpack_require__(3)(content,{});content.locals&&(module.exports=content.locals)},2:function(module,exports){module.exports=function(){var list=[];return list.toString=function(){for(var result=[],i=0;i<this.length;i++){var item=this[i];item[2]?result.push("@media "+item[2]+"{"+item[1]+"}"):result.push(item[1])}return result.join("")},list.i=function(modules,mediaQuery){"string"==typeof modules&&(modules=[[null,modules,""]]);for(var alreadyImportedModules={},i=0;i<this.length;i++){var id=this[i][0];"number"==typeof id&&(alreadyImportedModules[id]=!0)}for(i=0;i<modules.length;i++){var item=modules[i];"number"==typeof item[0]&&alreadyImportedModules[item[0]]||(mediaQuery&&!item[2]?item[2]=mediaQuery:mediaQuery&&(item[2]="("+item[2]+") and ("+mediaQuery+")"),list.push(item))}},list}},3:function(module,exports,__webpack_require__){function addStylesToDom(styles,options){for(var i=0;i<styles.length;i++){var item=styles[i],domStyle=stylesInDom[item.id];if(domStyle){domStyle.refs++;for(var j=0;j<domStyle.parts.length;j++)domStyle.parts[j](item.parts[j]);for(;j<item.parts.length;j++)domStyle.parts.push(addStyle(item.parts[j],options))}else{for(var parts=[],j=0;j<item.parts.length;j++)parts.push(addStyle(item.parts[j],options));stylesInDom[item.id]={id:item.id,refs:1,parts:parts}}}}function listToStyles(list){for(var styles=[],newStyles={},i=0;i<list.length;i++){var item=list[i],id=item[0],css=item[1],media=item[2],sourceMap=item[3],part={css:css,media:media,sourceMap:sourceMap};newStyles[id]?newStyles[id].parts.push(part):styles.push(newStyles[id]={id:id,parts:[part]})}return styles}function insertStyleElement(options,styleElement){var head=getHeadElement(),lastStyleElementInsertedAtTop=styleElementsInsertedAtTop[styleElementsInsertedAtTop.length-1];if("top"===options.insertAt)lastStyleElementInsertedAtTop?lastStyleElementInsertedAtTop.nextSibling?head.insertBefore(styleElement,lastStyleElementInsertedAtTop.nextSibling):head.appendChild(styleElement):head.insertBefore(styleElement,head.firstChild),styleElementsInsertedAtTop.push(styleElement);else{if("bottom"!==options.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");head.appendChild(styleElement)}}function removeStyleElement(styleElement){styleElement.parentNode.removeChild(styleElement);var idx=styleElementsInsertedAtTop.indexOf(styleElement);idx>=0&&styleElementsInsertedAtTop.splice(idx,1)}function createStyleElement(options){var styleElement=document.createElement("style");return styleElement.type="text/css",insertStyleElement(options,styleElement),styleElement}function createLinkElement(options){var linkElement=document.createElement("link");return linkElement.rel="stylesheet",insertStyleElement(options,linkElement),linkElement}function addStyle(obj,options){var styleElement,update,remove;if(options.singleton){var styleIndex=singletonCounter++;styleElement=singletonElement||(singletonElement=createStyleElement(options)),update=applyToSingletonTag.bind(null,styleElement,styleIndex,!1),remove=applyToSingletonTag.bind(null,styleElement,styleIndex,!0)}else obj.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(styleElement=createLinkElement(options),update=updateLink.bind(null,styleElement),remove=function(){removeStyleElement(styleElement),styleElement.href&&URL.revokeObjectURL(styleElement.href)}):(styleElement=createStyleElement(options),update=applyToTag.bind(null,styleElement),remove=function(){removeStyleElement(styleElement)});return update(obj),function(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap)return;update(obj=newObj)}else remove()}}function applyToSingletonTag(styleElement,index,remove,obj){var css=remove?"":obj.css;if(styleElement.styleSheet)styleElement.styleSheet.cssText=replaceText(index,css);else{var cssNode=document.createTextNode(css),childNodes=styleElement.childNodes;childNodes[index]&&styleElement.removeChild(childNodes[index]),childNodes.length?styleElement.insertBefore(cssNode,childNodes[index]):styleElement.appendChild(cssNode)}}function applyToTag(styleElement,obj){var css=obj.css,media=obj.media;if(media&&styleElement.setAttribute("media",media),styleElement.styleSheet)styleElement.styleSheet.cssText=css;else{for(;styleElement.firstChild;)styleElement.removeChild(styleElement.firstChild);styleElement.appendChild(document.createTextNode(css))}}function updateLink(linkElement,obj){var css=obj.css,sourceMap=obj.sourceMap;sourceMap&&(css+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))+" */");var blob=new Blob([css],{type:"text/css"}),oldSrc=linkElement.href;linkElement.href=URL.createObjectURL(blob),oldSrc&&URL.revokeObjectURL(oldSrc)}var stylesInDom={},memoize=function(fn){var memo;return function(){return"undefined"==typeof memo&&(memo=fn.apply(this,arguments)),memo}},isOldIE=memoize(function(){return/msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase())}),getHeadElement=memoize(function(){return document.head||document.getElementsByTagName("head")[0]}),singletonElement=null,singletonCounter=0,styleElementsInsertedAtTop=[];module.exports=function(list,options){options=options||{},"undefined"==typeof options.singleton&&(options.singleton=isOldIE()),"undefined"==typeof options.insertAt&&(options.insertAt="bottom");var styles=listToStyles(list);return addStylesToDom(styles,options),function(newList){for(var mayRemove=[],i=0;i<styles.length;i++){var item=styles[i],domStyle=stylesInDom[item.id];domStyle.refs--,mayRemove.push(domStyle)}if(newList){var newStyles=listToStyles(newList);addStylesToDom(newStyles,options)}for(var i=0;i<mayRemove.length;i++){var domStyle=mayRemove[i];if(0===domStyle.refs){for(var j=0;j<domStyle.parts.length;j++)domStyle.parts[j]();delete stylesInDom[domStyle.id]}}}};var replaceText=function(){var textStore=[];return function(index,replacement){return textStore[index]=replacement,textStore.filter(Boolean).join("\n")}}()},88:function(module,exports,__webpack_require__){exports=module.exports=__webpack_require__(2)(),exports.push([module.id,'body{overflow:hidden;bottom:0}.navbar-splunkbar,body{position:absolute;top:0;right:0;left:0}.navbar .brand.active{cursor:default;background:none!important}.section-home{border-top:none}.section-home .apps{position:absolute;top:25px;left:0;bottom:0;width:200px}.section-home .app-title{padding-left:20px;padding-top:2px;height:35px;box-sizing:border-box;color:#333;background-color:#c3c3c3}.section-home .app-title h3{margin-top:3px}.section-home .list-apps{text-align:center}.section-home .scrolling-bar{overflow-y:auto;width:200px;position:absolute;top:35px;left:0;right:0;bottom:0;background-color:#c3c3c3}.section-home .scrolling-bar-dashboard{overflow-y:auto;overflow-x:auto}.section-home .dashboard{border:0;float:left;position:absolute;top:25px;left:200px;right:0;bottom:0;background-color:#eee;border-left:1px solid #ccc}.section-home .dashboard-error{position:absolute;left:30%;top:30%;right:0;height:0}.section-home .icon-error{display:inline-block}.section-home .app{position:relative;border-bottom:1px solid rgba(0,0,0,.1);background-color:#aaa}.section-home .app:after,.section-home .app:before{display:table;content:"";line-height:0}.section-home .app:after{clear:both}.section-home .app:first-child{border-top:1px solid rgba(0,0,0,.1)}.section-home .app a{color:#fff;text-decoration:none;display:block;padding:20px 10px;transition:background-color .15s linear;background-color:hsla(0,0%,100%,0);position:relative}.section-home .app a:after,.section-home .app a:before{display:table;content:"";line-height:0}.section-home .app a:after{clear:both}.section-home .app a .drag-handle{position:absolute;left:4px;top:4px;width:8px;bottom:4px;opacity:0;background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAJCAYAAAAPU20uAAAAFElEQVQYlWP4TwAwEMJEKRj6VgAAEuPvEVHP/EIAAAAASUVORK5CYII=");transition:opacity .15s linear;cursor:more;cursor:ns-resize}.section-home .app a:hover{background-color:hsla(0,0%,100%,.15)}.section-home .app a:hover .drag-handle{opacity:.4}.section-home .app a:focus{box-shadow:inset 0 0 5px 2px hsla(0,0%,100%,.6);outline:none}.section-home .app .app-update-link{color:hsla(0,0%,100%,.6);font-size:11px;text-transform:uppercase;text-align:center;line-height:20px;padding:0;background-color:hsla(0,0%,100%,.1);text-decoration:none;margin:-1px 0;transition:background-color .15s linear}.section-home .app .app-update-link:hover{background-color:hsla(0,0%,100%,.3)}.section-home .app img{height:36px;width:36px}.section-home .app-icon{width:72px;height:72px;margin-left:auto;margin-right:auto}.section-home .add-more-apps{padding-top:10px;padding-bottom:35px}.section-home .add-more-apps .add-more-apps-link{text-decoration:none;padding:23px 0;border:2px dashed #fff;display:block;margin:10px 20px;transition:opacity .15s linear;opacity:.65}.section-home .add-more-apps .add-more-apps-link:hover{opacity:1}.section-home .add-more-apps .add-more-apps-link:focus{border-color:rgba(82,168,236,.8);outline:0;border-collapse:separate;box-shadow:0 0 8px rgba(82,168,236,.6);background-position:0}.section-home .add-more-apps svg{display:block;margin:0 auto}.section-home .add-more-apps path{fill:#fff}.section-home .add-more-apps-icon{text-align:center}.section-home .helper{display:inline-block;height:100%;vertical-align:middle}.section-home .app-icon img{vertical-align:middle}.section-home .app-name{padding-top:10px;padding-left:10px;padding-right:10px;font-size:14px}.section-home .home-dashboard{height:100%;min-width:960px}.home-dashboard-empty{padding:50px 100px}.home-dashboard-empty .alert{text-align:center;font-size:14px}.home-dashboard-empty .alert i{left:auto;margin-left:-27px}.home-dashboard-empty a{font-size:24px;font-weight:200;display:block;border:2px dashed #ccc;padding:120px 0 80px;text-align:center;line-height:60px;text-decoration:none;background:hsla(0,0%,100%,.4);color:hsla(0,0%,47%,.92);opacity:.8;transition:color .1s linear,opacity .1s linear,background .1s linear}.home-dashboard-empty a:hover{opacity:1;color:#777;background:hsla(0,0%,100%,.6)}.home-dashboard-empty a:focus{border-color:rgba(82,168,236,.8);outline:0;border-collapse:separate;box-shadow:0 0 8px rgba(82,168,236,.6);background-position:0}.home-dashboard-empty svg{display:block;margin:0 auto 20px}.home-dashboard-empty path.stroke{stroke:#777;stroke-width:3px}.home-dashboard-empty circle,.home-dashboard-empty path:not(.stroke),.home-dashboard-empty rect{fill:#777}.home-gettingstarted{position:relative;min-width:934px;padding:2px 0 2px 26px;border-bottom:1px solid #ccc;background-color:#fff}.home-gettingstarted:after,.home-gettingstarted:before{display:table;content:"";line-height:0}.home-gettingstarted:after{clear:both}.home-gettingstarted h3{padding-bottom:8px}.home-gettingstarted .close{position:absolute;top:7px;right:9px}.home-gettingstarted .toggle{position:absolute;right:170px;bottom:-29px;padding:6px 20px;text-align:center;background:#fff;border-bottom-left-radius:4px;border-bottom-right-radius:4px;border-left:1px solid #ccc;border-bottom:1px solid #ccc;border-right:1px solid #ccc;color:#333;text-decoration:none}.home-gettingstarted .toggle:focus{border-color:rgba(82,168,236,.8);outline:0;border-collapse:separate;box-shadow:0 0 8px rgba(82,168,236,.6);background-position:0}.home-gettingstarted-shared-item{width:240px;max-width:25%;box-sizing:border-box;text-align:center;padding-bottom:34px;padding-left:20px;padding-right:20px;display:inline-block;white-space:normal;vertical-align:top}.home-gettingstarted-shared-item .hoverable-area{display:block;padding:10px 0 7px;margin-bottom:3px;position:relative;color:#65a637;font-size:14px;text-decoration:none}.home-gettingstarted-shared-item .hoverable-area:after,.home-gettingstarted-shared-item .hoverable-area:before{display:table;content:"";line-height:0}.home-gettingstarted-shared-item .hoverable-area:after{clear:both}.home-gettingstarted-shared-item svg{display:block;padding-bottom:12px;margin:0 auto}.home-gettingstarted-shared-item .description{font-size:11px}.home-gettingstarted-shared-item .description a{color:#1e93c6;white-space:nowrap}.mask{position:absolute;top:0;bottom:0;left:0;right:0;opacity:0;border-radius:4px;cursor:pointer;background-color:#65a637;transition:opacity .15s linear}.mask:hover{opacity:.1}.home-gettingstarted-admin,.home-gettingstarted-user{padding:0;margin-left:-20px;text-align:center;white-space:nowrap;overflow-y:hidden;overflow-x:hidden}.home-gettingstarted-admin:after,.home-gettingstarted-admin:before,.home-gettingstarted-user:after,.home-gettingstarted-user:before{display:table;content:"";line-height:0}.home-gettingstarted-admin:after,.home-gettingstarted-user:after{clear:both}.home-dashboard-title{padding-left:20px;padding-top:10px}.home-dashboard-title h3{font-weight:400;font-size:16px;margin:10px 0 0}.home-dashboard-title .dashboard-title{padding-right:10px}.home-dashboard-title p{margin:0}.home-dashboard-shared-dashboardselector-autosuggest{position:relative;width:310px}.home-dashboard-shared-dashboardselector-autosuggest input{width:318px}.home-dashboard-shared-dashboardselector-autosuggest .selected{width:300px;padding-left:24px;background:url("/static/img/icon_dashboard.png") no-repeat 7px 6px}.home-dashboard-shared-dashboardselector-autosuggest .btn{position:absolute;top:0;right:-21px;width:15px;height:16px;padding:4px;margin:0}.home-dashboard-shared-dashboardselector-autosuggest .caret{padding:0}.home-dashboard-autosuggest{width:330px}.home-dashboard-autosuggest .truncated{padding:5px 10px;text-align:center}.home-dashboard-autosuggest .icon-dashboard{margin-right:3px}.home-dashboard-autosuggest .no-results{line-height:26px;text-align:center;background-color:#fff}.home-dashboard-autosuggest ul{max-height:400px}',""])}})});