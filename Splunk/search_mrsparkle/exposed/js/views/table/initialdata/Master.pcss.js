define(function(){return function(modules){function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={exports:{},id:moduleId,loaded:!1};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}var installedModules={};return __webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.p="",__webpack_require__(0)}({0:function(module,exports,__webpack_require__){var content=__webpack_require__(280);"string"==typeof content&&(content=[[module.id,content,""]]);__webpack_require__(3)(content,{});content.locals&&(module.exports=content.locals)},2:function(module,exports){module.exports=function(){var list=[];return list.toString=function(){for(var result=[],i=0;i<this.length;i++){var item=this[i];item[2]?result.push("@media "+item[2]+"{"+item[1]+"}"):result.push(item[1])}return result.join("")},list.i=function(modules,mediaQuery){"string"==typeof modules&&(modules=[[null,modules,""]]);for(var alreadyImportedModules={},i=0;i<this.length;i++){var id=this[i][0];"number"==typeof id&&(alreadyImportedModules[id]=!0)}for(i=0;i<modules.length;i++){var item=modules[i];"number"==typeof item[0]&&alreadyImportedModules[item[0]]||(mediaQuery&&!item[2]?item[2]=mediaQuery:mediaQuery&&(item[2]="("+item[2]+") and ("+mediaQuery+")"),list.push(item))}},list}},3:function(module,exports,__webpack_require__){function addStylesToDom(styles,options){for(var i=0;i<styles.length;i++){var item=styles[i],domStyle=stylesInDom[item.id];if(domStyle){domStyle.refs++;for(var j=0;j<domStyle.parts.length;j++)domStyle.parts[j](item.parts[j]);for(;j<item.parts.length;j++)domStyle.parts.push(addStyle(item.parts[j],options))}else{for(var parts=[],j=0;j<item.parts.length;j++)parts.push(addStyle(item.parts[j],options));stylesInDom[item.id]={id:item.id,refs:1,parts:parts}}}}function listToStyles(list){for(var styles=[],newStyles={},i=0;i<list.length;i++){var item=list[i],id=item[0],css=item[1],media=item[2],sourceMap=item[3],part={css:css,media:media,sourceMap:sourceMap};newStyles[id]?newStyles[id].parts.push(part):styles.push(newStyles[id]={id:id,parts:[part]})}return styles}function insertStyleElement(options,styleElement){var head=getHeadElement(),lastStyleElementInsertedAtTop=styleElementsInsertedAtTop[styleElementsInsertedAtTop.length-1];if("top"===options.insertAt)lastStyleElementInsertedAtTop?lastStyleElementInsertedAtTop.nextSibling?head.insertBefore(styleElement,lastStyleElementInsertedAtTop.nextSibling):head.appendChild(styleElement):head.insertBefore(styleElement,head.firstChild),styleElementsInsertedAtTop.push(styleElement);else{if("bottom"!==options.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");head.appendChild(styleElement)}}function removeStyleElement(styleElement){styleElement.parentNode.removeChild(styleElement);var idx=styleElementsInsertedAtTop.indexOf(styleElement);idx>=0&&styleElementsInsertedAtTop.splice(idx,1)}function createStyleElement(options){var styleElement=document.createElement("style");return styleElement.type="text/css",insertStyleElement(options,styleElement),styleElement}function createLinkElement(options){var linkElement=document.createElement("link");return linkElement.rel="stylesheet",insertStyleElement(options,linkElement),linkElement}function addStyle(obj,options){var styleElement,update,remove;if(options.singleton){var styleIndex=singletonCounter++;styleElement=singletonElement||(singletonElement=createStyleElement(options)),update=applyToSingletonTag.bind(null,styleElement,styleIndex,!1),remove=applyToSingletonTag.bind(null,styleElement,styleIndex,!0)}else obj.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(styleElement=createLinkElement(options),update=updateLink.bind(null,styleElement),remove=function(){removeStyleElement(styleElement),styleElement.href&&URL.revokeObjectURL(styleElement.href)}):(styleElement=createStyleElement(options),update=applyToTag.bind(null,styleElement),remove=function(){removeStyleElement(styleElement)});return update(obj),function(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap)return;update(obj=newObj)}else remove()}}function applyToSingletonTag(styleElement,index,remove,obj){var css=remove?"":obj.css;if(styleElement.styleSheet)styleElement.styleSheet.cssText=replaceText(index,css);else{var cssNode=document.createTextNode(css),childNodes=styleElement.childNodes;childNodes[index]&&styleElement.removeChild(childNodes[index]),childNodes.length?styleElement.insertBefore(cssNode,childNodes[index]):styleElement.appendChild(cssNode)}}function applyToTag(styleElement,obj){var css=obj.css,media=obj.media;if(media&&styleElement.setAttribute("media",media),styleElement.styleSheet)styleElement.styleSheet.cssText=css;else{for(;styleElement.firstChild;)styleElement.removeChild(styleElement.firstChild);styleElement.appendChild(document.createTextNode(css))}}function updateLink(linkElement,obj){var css=obj.css,sourceMap=obj.sourceMap;sourceMap&&(css+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))+" */");var blob=new Blob([css],{type:"text/css"}),oldSrc=linkElement.href;linkElement.href=URL.createObjectURL(blob),oldSrc&&URL.revokeObjectURL(oldSrc)}var stylesInDom={},memoize=function(fn){var memo;return function(){return"undefined"==typeof memo&&(memo=fn.apply(this,arguments)),memo}},isOldIE=memoize(function(){return/msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase())}),getHeadElement=memoize(function(){return document.head||document.getElementsByTagName("head")[0]}),singletonElement=null,singletonCounter=0,styleElementsInsertedAtTop=[];module.exports=function(list,options){options=options||{},"undefined"==typeof options.singleton&&(options.singleton=isOldIE()),"undefined"==typeof options.insertAt&&(options.insertAt="bottom");var styles=listToStyles(list);return addStylesToDom(styles,options),function(newList){for(var mayRemove=[],i=0;i<styles.length;i++){var item=styles[i],domStyle=stylesInDom[item.id];domStyle.refs--,mayRemove.push(domStyle)}if(newList){var newStyles=listToStyles(newList);addStylesToDom(newStyles,options)}for(var i=0;i<mayRemove.length;i++){var domStyle=mayRemove[i];if(0===domStyle.refs){for(var j=0;j<domStyle.parts.length;j++)domStyle.parts[j]();delete stylesInDom[domStyle.id]}}}};var replaceText=function(){var textStore=[];return function(index,replacement){return textStore[index]=replacement,textStore.filter(Boolean).join("\n")}}()},280:function(module,exports,__webpack_require__){exports=module.exports=__webpack_require__(2)(),exports.push([module.id,".initial-data{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex:1 0 0px;flex:1 0 0px;position:absolute;top:104px;bottom:0;width:100%;font-size:11px;border-right:1px solid #ccc;display:none}.initial-data td{border-top:none}.initial-data .search-bar-wrapper{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;padding:20px;border-bottom:1px solid #ccc;max-height:230px}.initial-data-cancel{position:absolute;right:20px;top:-33px;font-size:12px}.initial-data-vertical-flex-container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;width:100%}.initial-data-horizontal-flex-container{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex:1 0 0px;flex:1 0 0px;min-height:170px}.select-method{min-width:200px}.method-picker{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;background-color:#eee;border-top:1px solid #ccc;border-bottom:1px solid #ccc;min-height:75px;width:100%;min-width:75px;padding:10px 8px 5px;text-decoration:none}.method-picker h3{margin:5px 0 10px 11px;color:#000;font-size:16px}.method-options{width:100%;min-width:700px}.method-option{color:#000;font-size:14px;float:left;width:33%}.method-option svg{fill:#7d7d7d;vertical-align:middle;padding-right:5px;height:58px}.method-option.active svg{fill:#65a637}.method-option:hover{text-decoration:none}.shared-waitspinner{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);z-index:100}.initial-data-sidebar{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex:0 0 420px;flex:0 0 420px;border-right:1px solid #ccc;z-index:2;background-color:#fff}.dataset-content,.indexes-and-sourcetypes-content,.search-content{position:relative;overflow:hidden;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex:1 0 0px;flex:1 0 0px}.dataset-label{padding-bottom:10px}.dataset-picker{border:1px solid #ccc;display:block;line-height:22px;border-radius:4px;position:relative;padding-left:8px;padding-right:14px;margin-bottom:10px;word-wrap:break-word}.dataset-picker .icon-chevron-right{position:absolute;right:8px;top:0}.dataset-picker:hover{text-decoration:none;background-color:rgba(0,0,0,.05)}.dataset-picker:focus{background:#fff;text-decoration:none;border-color:rgba(82,168,236,.8);outline:0;border-collapse:separate;box-shadow:0 0 8px rgba(82,168,236,.6);background-position:0}.dataset-picker .placeholder{position:relative;top:0;left:0}.index-and-sourcetypes-rows{overflow-y:auto;max-height:32%}.add-index-and-sourcetypes,.chosen-dataset{border-bottom:1px solid #ccc;padding:10px}.add-index-and-sourcetypes{border-top:1px solid #ccc}.chosen-dataset{-ms-flex:0 0 auto;flex:0 0 auto}.fields-picker-container{padding-top:10px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex:1 0 0px;flex:1 0 0px}.fields-picker-container .fields-picker{-ms-flex:1 0 0px;flex:1 0 0px;border-bottom:1px solid #ccc}.fields-picker-container .empty-fields,.fields-picker-container .loading-fields{padding:10px;border-top:1px solid #ccc}.fields-picker-header{font-size:16px;padding:10px 8px 5px}.initial-data-datasetinfo,.initial-data-fieldinfo{background-color:#fff}.initial-data-datasetinfo p,.initial-data-fieldinfo p{line-height:20px}.initial-data-datasetinfo table.table-condensed,.initial-data-fieldinfo table.table-condensed{margin:13px -20px -5px}.initial-data-datasetinfo td.value,.initial-data-fieldinfo td.value{max-width:200px;text-overflow:ellipsis;overflow-x:hidden;white-space:nowrap;padding-left:20px}.initial-data-datasetinfo th.value,.initial-data-fieldinfo th.value{padding-left:20px}.initial-data-datasetinfo .popdown-dialog-body,.initial-data-fieldinfo .popdown-dialog-body{padding:0 20px 20px}.initial-data-datasetinfo .shared-datasetcontrols-details,.initial-data-fieldinfo .shared-datasetcontrols-details{margin:0 20px;white-space:normal;word-break:break-all}.initial-data-datasetinfo h2,.initial-data-fieldinfo h2{margin:-1px -21px 10px;line-height:40px;font-size:16px;font-weight:400;color:#333;padding:0 20px;border-bottom:1px solid #ccc;overflow:hidden;text-overflow:ellipsis}.initial-data-datasetinfo .fields-type-icon,.initial-data-fieldinfo .fields-type-icon{font-size:16px;color:#999;padding-right:5px}.initial-data-datasetinfo .close,.initial-data-fieldinfo .close{top:7px;right:7px;position:absolute}.initial-data-fieldinfo{width:300px}.initial-data-datasetinfo{width:400px}.index-and-sourcetypes-row{font-size:11px;position:relative;padding:10px}.index-and-sourcetypes-row:not(:last-child){border-bottom:1px solid #ccc}.index-and-sourcetypes-row .property{color:#999}.index-and-sourcetypes-row .index-and-sourcetypes-row-remove{position:absolute;right:0;top:0;padding:6px 10px;line-height:1}.index-and-sourcetypes-row .index-and-sourcetypes-row-remove :hover{background-color:rgba(0,0,0,.05)}.index-and-sourcetypes-row .index-and-sourcetypes-all{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row}.index-and-sourcetypes-row .index-and-sourcetypes-block{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.initial-data-results-container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;overflow:hidden;-ms-flex:1 0 0px;flex:1 0 0px}.initial-data-results-container svg.dataset,.initial-data-results-container svg.indexes-sourcetypes,.initial-data-results-container svg.search{opacity:.5}.initial-data-job-status{position:relative;-ms-flex:0 0 auto;flex:0 0 auto;background-color:#fff;border-bottom:1px solid #ccc}.initial-data-job-status .job-status-alert{margin:0 10px}.initial-data-job-status .table-count{margin-right:5px}.initial-data-job-status .dataset-diversity{display:inline-block}.initial-data-job-status .status,.initial-data-job-status .table-count{line-height:27px;padding-left:10px;float:left}.initial-data-job-status .status .icon-warning-paused,.initial-data-job-status .table-count .icon-warning-paused{color:#f2b827;font-size:200%;display:inline-block;margin-right:3px;vertical-align:middle;line-height:16px}.initial-data-job-status .status .icon-check,.initial-data-job-status .table-count .icon-check{color:#65a637}.initial-data-done{margin:10px 160px}.empty-datasets,.empty-field,.empty-indexes-and-sourcetypes,.empty-search{-ms-flex-item-align:center;-ms-grid-row-align:center;align-self:center;text-align:center;padding-top:200px}.empty-datasets i[class*=icon-],.empty-datasets i[class^=icon],.empty-field i[class*=icon-],.empty-field i[class^=icon],.empty-indexes-and-sourcetypes i[class*=icon-],.empty-indexes-and-sourcetypes i[class^=icon],.empty-search i[class*=icon-],.empty-search i[class^=icon]{color:#eee;font-size:100px;padding-bottom:20px}.shared-flashmessages{padding:20px}.shared-flashmessages .alert{margin-bottom:0}.extend-clone-radio-wrapper{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.extend-clone-radio-wrapper>label{padding:20px 0 0 20px}.extend-clone-radio{padding-top:10px;width:100%}.extend-clone-radio>div.control{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:distribute;justify-content:space-around}",""])}})});