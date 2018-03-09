define(function(){return function(modules){function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={exports:{},id:moduleId,loaded:!1};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}var installedModules={};return __webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.p="",__webpack_require__(0)}({0:function(module,exports,__webpack_require__){var content=__webpack_require__(246);"string"==typeof content&&(content=[[module.id,content,""]]);__webpack_require__(3)(content,{});content.locals&&(module.exports=content.locals)},2:function(module,exports){module.exports=function(){var list=[];return list.toString=function(){for(var result=[],i=0;i<this.length;i++){var item=this[i];item[2]?result.push("@media "+item[2]+"{"+item[1]+"}"):result.push(item[1])}return result.join("")},list.i=function(modules,mediaQuery){"string"==typeof modules&&(modules=[[null,modules,""]]);for(var alreadyImportedModules={},i=0;i<this.length;i++){var id=this[i][0];"number"==typeof id&&(alreadyImportedModules[id]=!0)}for(i=0;i<modules.length;i++){var item=modules[i];"number"==typeof item[0]&&alreadyImportedModules[item[0]]||(mediaQuery&&!item[2]?item[2]=mediaQuery:mediaQuery&&(item[2]="("+item[2]+") and ("+mediaQuery+")"),list.push(item))}},list}},3:function(module,exports,__webpack_require__){function addStylesToDom(styles,options){for(var i=0;i<styles.length;i++){var item=styles[i],domStyle=stylesInDom[item.id];if(domStyle){domStyle.refs++;for(var j=0;j<domStyle.parts.length;j++)domStyle.parts[j](item.parts[j]);for(;j<item.parts.length;j++)domStyle.parts.push(addStyle(item.parts[j],options))}else{for(var parts=[],j=0;j<item.parts.length;j++)parts.push(addStyle(item.parts[j],options));stylesInDom[item.id]={id:item.id,refs:1,parts:parts}}}}function listToStyles(list){for(var styles=[],newStyles={},i=0;i<list.length;i++){var item=list[i],id=item[0],css=item[1],media=item[2],sourceMap=item[3],part={css:css,media:media,sourceMap:sourceMap};newStyles[id]?newStyles[id].parts.push(part):styles.push(newStyles[id]={id:id,parts:[part]})}return styles}function insertStyleElement(options,styleElement){var head=getHeadElement(),lastStyleElementInsertedAtTop=styleElementsInsertedAtTop[styleElementsInsertedAtTop.length-1];if("top"===options.insertAt)lastStyleElementInsertedAtTop?lastStyleElementInsertedAtTop.nextSibling?head.insertBefore(styleElement,lastStyleElementInsertedAtTop.nextSibling):head.appendChild(styleElement):head.insertBefore(styleElement,head.firstChild),styleElementsInsertedAtTop.push(styleElement);else{if("bottom"!==options.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");head.appendChild(styleElement)}}function removeStyleElement(styleElement){styleElement.parentNode.removeChild(styleElement);var idx=styleElementsInsertedAtTop.indexOf(styleElement);idx>=0&&styleElementsInsertedAtTop.splice(idx,1)}function createStyleElement(options){var styleElement=document.createElement("style");return styleElement.type="text/css",insertStyleElement(options,styleElement),styleElement}function createLinkElement(options){var linkElement=document.createElement("link");return linkElement.rel="stylesheet",insertStyleElement(options,linkElement),linkElement}function addStyle(obj,options){var styleElement,update,remove;if(options.singleton){var styleIndex=singletonCounter++;styleElement=singletonElement||(singletonElement=createStyleElement(options)),update=applyToSingletonTag.bind(null,styleElement,styleIndex,!1),remove=applyToSingletonTag.bind(null,styleElement,styleIndex,!0)}else obj.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(styleElement=createLinkElement(options),update=updateLink.bind(null,styleElement),remove=function(){removeStyleElement(styleElement),styleElement.href&&URL.revokeObjectURL(styleElement.href)}):(styleElement=createStyleElement(options),update=applyToTag.bind(null,styleElement),remove=function(){removeStyleElement(styleElement)});return update(obj),function(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap)return;update(obj=newObj)}else remove()}}function applyToSingletonTag(styleElement,index,remove,obj){var css=remove?"":obj.css;if(styleElement.styleSheet)styleElement.styleSheet.cssText=replaceText(index,css);else{var cssNode=document.createTextNode(css),childNodes=styleElement.childNodes;childNodes[index]&&styleElement.removeChild(childNodes[index]),childNodes.length?styleElement.insertBefore(cssNode,childNodes[index]):styleElement.appendChild(cssNode)}}function applyToTag(styleElement,obj){var css=obj.css,media=obj.media;if(media&&styleElement.setAttribute("media",media),styleElement.styleSheet)styleElement.styleSheet.cssText=css;else{for(;styleElement.firstChild;)styleElement.removeChild(styleElement.firstChild);styleElement.appendChild(document.createTextNode(css))}}function updateLink(linkElement,obj){var css=obj.css,sourceMap=obj.sourceMap;sourceMap&&(css+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))+" */");var blob=new Blob([css],{type:"text/css"}),oldSrc=linkElement.href;linkElement.href=URL.createObjectURL(blob),oldSrc&&URL.revokeObjectURL(oldSrc)}var stylesInDom={},memoize=function(fn){var memo;return function(){return"undefined"==typeof memo&&(memo=fn.apply(this,arguments)),memo}},isOldIE=memoize(function(){return/msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase())}),getHeadElement=memoize(function(){return document.head||document.getElementsByTagName("head")[0]}),singletonElement=null,singletonCounter=0,styleElementsInsertedAtTop=[];module.exports=function(list,options){options=options||{},"undefined"==typeof options.singleton&&(options.singleton=isOldIE()),"undefined"==typeof options.insertAt&&(options.insertAt="bottom");var styles=listToStyles(list);return addStylesToDom(styles,options),function(newList){for(var mayRemove=[],i=0;i<styles.length;i++){var item=styles[i],domStyle=stylesInDom[item.id];domStyle.refs--,mayRemove.push(domStyle)}if(newList){var newStyles=listToStyles(newList);addStylesToDom(newStyles,options)}for(var i=0;i<mayRemove.length;i++){var domStyle=mayRemove[i];if(0===domStyle.refs){for(var j=0;j<domStyle.parts.length;j++)domStyle.parts[j]();delete stylesInDom[domStyle.id]}}}};var replaceText=function(){var textStore=[];return function(index,replacement){return textStore[index]=replacement,textStore.filter(Boolean).join("\n")}}()},152:function(module,exports,__webpack_require__){exports=module.exports=__webpack_require__(2)(),exports.push([module.id,'.view------dev---1F6Mn{background-color:#eee;border:none;filter:e(%("progid:DXImageTransform.Microsoft.gradient(enabled = false)"));box-shadow:1px 2px 5px rgba(0,0,0,.2);border-radius:3px;top:100%;left:50%;margin:8px 0 0 -103px;display:none;position:absolute;z-index:1060;white-space:normal}.view------dev---1F6Mn[data-popdown-point=down]{margin-top:0}.view------dev---1F6Mn[data-popdown-point=left]{margin-left:5px;margin-top:0}.view------dev---1F6Mn.[data-popdown-state=open]{display:block}.view------dev---1F6Mn:after{content:"";font-size:0;display:inline;overflow:hidden}.dialogPadded------dev---3Etxg{padding:10px}.arrow------dev---1rZ6p{width:0;height:0;border:none;border-left:8px solid transparent;border-right:8px solid transparent;border-bottom:8px solid #7191a8;position:absolute;top:-8px;left:50%;margin-left:-4px}.arrow------dev---1rZ6p:before{content:"";display:block;width:0;height:0;border-left:8px solid transparent;border-right:8px solid transparent;border-bottom:8px solid #7191a8;position:absolute;top:1px;left:0;margin-left:-8px}[data-placement=over]>.arrow------dev---1rZ6p{//:8px solid #bfbfbf;border-bottom:none;top:auto;bottom:-8px}[data-placement=over]>.arrow------dev---1rZ6p:before{border-top:8px solid #fff;border-bottom:none;position:absolute;top:auto;bottom:1px}.arrow------dev---1rZ6p[data-placement=right]>.arrow------dev---1rZ6p{//:8px solid #bfbfbf;border-top:8px solid transparent;border-bottom:8px solid transparent;border-left:none;top:50%;left:-8px;margin:-8px 0 0}.arrow------dev---1rZ6p[data-placement=right]>.arrow------dev---1rZ6p:before{border-right:8px solid #fff;border-top:8px solid transparent;border-bottom:8px solid transparent;border-left:none;position:absolute;top:0;left:1px;margin:-8px 0 0}.body------dev---6bqKO{margin:0;border-radius:3px;background-color:#7191a8}.body------dev---6bqKO:after,.body------dev---6bqKO:before{display:table;content:"";line-height:0}.body------dev---6bqKO:after{clear:both}.footer------dev---dc23M{border-top:1px solid #ccc;padding:5px;border-bottom-left-radius:3px;border-bottom-right-radius:3px}.footer------dev---dc23M:after,.footer------dev---dc23M:before{display:table;content:"";line-height:0}.footer------dev---dc23M:after{clear:both}.dropdown------dev---1pYO_,.dropup------dev---2hId4{position:relative}.dropdown-toggle------dev---1fzio:active,.open------dev---11ubD .dropdown-toggle------dev---1fzio{outline:0}.menu------dev---DVMXj{width:auto;word-wrap:break-word;line-height:21.33333px;padding:0;background-clip:padding-box;min-width:120px;list-style:none;overflow-x:hidden;overflow-y:auto;max-width:100%;max-height:270px;box-sizing:border-box;border-radius:0 0 4px 4px}.menu------dev---DVMXj+.menu------dev---DVMXj{border-top:1px solid #bfbfbf}.menu------dev---DVMXj li{position:relative}.menu------dev---DVMXj li:focus{outline:none}.menu------dev---DVMXj li>a{display:block;clear:both;font-weight:400;position:relative;color:#fff;padding:5px 10px;white-space:normal;text-decoration:none;line-height:16px}.menu------dev---DVMXj li>a:focus:not(.disabled------dev---3M56F){background:transparent;box-shadow:none}.menu------dev---DVMXj li>a:hover:not(.disabled------dev---3M56F){background-color:rgba(0,0,0,.05);background-image:linear-gradient(180deg,rgba(0,0,0,.05),rgba(0,0,0,.05));background-repeat:repeat-x;background:#3890ff}.menu------dev---DVMXj li>a.disabled------dev---3M56F{color:#bbb}.menu------dev---DVMXj li+li>a{border-top:1px solid hsla(0,0%,100%,.1)}.title------dev---1BzHQ{color:#999;text-transform:uppercase;padding:3px 10px}.info------dev---MqWhR{display:block;font-size:10.2px}li>a.primaryLink------dev---3cF1A{margin-right:40px;border-top-right-radius:0;border-bottom-right-radius:0;border-right:1px dotted #ccc;white-space:nowrap;-ms-flex:1 0 0px;flex:1 0 0}li>a.secondaryLink------dev---3s2eI{position:absolute;right:0;top:0;bottom:0;width:40px;padding-left:0;padding-right:0;font-size:16px;text-align:center;border-top-left-radius:0;border-bottom-left-radius:0;white-space:nowrap;font-size:14px}.menu------dev---DVMXj .divider------dev---3mmRI+li>a,.menu------dev---DVMXj>li.startGroup------dev---1EOls>a{border-top-style:solid;border-color:#ccc}.selected------dev---2r81o:before{content:"";position:absolute;left:9px;top:7px;height:8px;width:4px;border-right:.15em solid currentColor;border-bottom:.15em solid currentColor;transform:rotate(42deg) scaleX(.9)}.menuNarrow------dev---3FcyX{max-width:10em}.menuLarge------dev---xEqRp{max-width:25em}.menuLarger------dev---1EQet{max-width:30em}.menuSelectable------dev---2VtMv li>a{font-size:14px;box-sizing:border-box;line-height:16px;height:30px;padding:7px 10px;cursor:pointer}.header------dev---2CZi4{display:block;padding:3px 20px;font-size:12px;line-height:1.42857143;color:#999}.menuTall------dev---3wyyv ul{max-height:20em;overflow:auto}.menuShort------dev---16Bli ul{max-height:10em;overflow:auto}.typeahead------dev---1JvdM{z-index:1051;margin-top:2px;border-radius:4px}',""]),exports.locals={view:"view------dev---1F6Mn",dialogPadded:"dialogPadded------dev---3Etxg view------dev---1F6Mn",arrow:"arrow------dev---1rZ6p",body:"body------dev---6bqKO",footer:"footer------dev---dc23M",dropup:"dropup------dev---2hId4",dropdown:"dropdown------dev---1pYO_","dropdown-toggle":"dropdown-toggle------dev---1fzio",open:"open------dev---11ubD",menu:"menu------dev---DVMXj body------dev---6bqKO",disabled:"disabled------dev---3M56F",title:"title------dev---1BzHQ",info:"info------dev---MqWhR",primaryLink:"primaryLink------dev---3cF1A",secondaryLink:"secondaryLink------dev---3s2eI",startGroup:"startGroup------dev---1EOls",divider:"divider------dev---3mmRI",selected:"selected------dev---2r81o",menuNarrow:"menuNarrow------dev---3FcyX menu------dev---DVMXj body------dev---6bqKO",menuLarge:"menuLarge------dev---xEqRp menu------dev---DVMXj body------dev---6bqKO",menuLarger:"menuLarger------dev---1EQet menu------dev---DVMXj body------dev---6bqKO",menuSelectable:"menuSelectable------dev---2VtMv menu------dev---DVMXj body------dev---6bqKO",header:"header------dev---2CZi4",menuTall:"menuTall------dev---3wyyv",menuShort:"menuShort------dev---16Bli",typeahead:"typeahead------dev---1JvdM"}},246:function(module,exports,__webpack_require__){exports=module.exports=__webpack_require__(2)(),exports.i(__webpack_require__(152),void 0),exports.push([module.id,".view------dev---3nFOd{background-color:#1f2126;border-radius:0 0 5px 5px;opacity:.94;min-width:160px}.appsList------dev---2Tc1X{max-height:calc(100vh - 120px);background-color:#1f2126}.label------dev---3GV-u{padding-right:30px}.icon------dev---3q68G{height:18px;position:absolute;right:10px;top:4px}",""]),exports.locals={view:"view------dev---3nFOd "+__webpack_require__(152).locals.body,appsList:"appsList------dev---2Tc1X "+__webpack_require__(152).locals.menuSelectable,menu:"menu------dev---3oqmn "+__webpack_require__(152).locals.menuSelectable,label:"label------dev---3GV-u",icon:"icon------dev---3q68G",selected:"selected------dev---3IJaY "+__webpack_require__(152).locals.selected}}})});