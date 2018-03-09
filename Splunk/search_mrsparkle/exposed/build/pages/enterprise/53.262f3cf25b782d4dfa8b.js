webpackJsonp([53],{"views/shared/eventsviewerdrilldown/Master":function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;__WEBPACK_AMD_DEFINE_ARRAY__=[__webpack_require__("shim/jquery"),__webpack_require__("require/underscore"),module,__webpack_require__("views/shared/eventsviewer/Master"),__webpack_require__("views/shared/eventsviewerdrilldown/FieldValueDrilldown"),__webpack_require__("views/shared/eventsviewerdrilldown/SegmentationDrilldown"),__webpack_require__("views/shared/eventsviewerdrilldown/TagDrilldown"),__webpack_require__("views/shared/eventsviewer/shared/TimeInfo"),__webpack_require__("models/services/search/IntentionsParser"),__webpack_require__("uri/route")],__WEBPACK_AMD_DEFINE_RESULT__=function($,_,module,EventsViewer,FieldValueDrilldown,SegmentationDrilldown,TagDrilldown,TimeInfoDrilldown,IntentionsParserModel,route){return EventsViewer.extend({initialize:function(options){options=options||{},options.model=options.model||{},options.model.intentions||(options.model.intentions=new IntentionsParserModel,this.createdDrilldownIntentions=!0),EventsViewer.prototype.initialize.call(this,options)},deactivate:function(options){return this.active?(EventsViewer.prototype.deactivate.apply(this,arguments),this.createdDrilldownIntentions&&this.model.intentions.clear(),this.lastTargetElement=void 0,this):EventsViewer.prototype.deactivate.apply(this,arguments)},openTagDrilldown:function(drilldownInfo){var $target=drilldownInfo.$target,stateModel=drilldownInfo.stateModel;this.children.tagDrilldown&&this.children.tagDrilldown.shown&&(this.children.tagDrilldown.hide(),this.children.tagDrilldown.remove(),delete this.children.tagDrilldown,this.lastTargetElement===$target[0])||(stateModel.set("modalizedRow",drilldownInfo.idx),this.children.tagDrilldown=new TagDrilldown({taggedFieldName:drilldownInfo.data.field,value:drilldownInfo.data.value,action:drilldownInfo.data.action,idx:drilldownInfo.idx,usespath:drilldownInfo.data.usespath,onHiddenRemove:!0,model:{application:this.model.application,report:this.model.report,state:stateModel,searchJob:this.model.searchJob},scrollContainer:$target.closest(".scrolling-table-wrapper"),ignoreToggleMouseDown:!0}),this.lastTargetElement=$target[0],this.children.tagDrilldown.render().appendTo($("body")).show($target,{onClickCloseFocus:$target.closest("tr.tabbable-list-row, tr.tabbable-table-primary-row, tr.tabbable-table-secondary-row")}))},openSegmentationDrilldown:function(drilldownInfo){var $target=drilldownInfo.$target,stateModel=drilldownInfo.stateModel;$target.addClass("selected-segment"),this.children.segmentationDrilldown&&this.children.segmentationDrilldown.shown&&(this.children.segmentationDrilldown.hide(),this.children.segmentationDrilldown.remove(),delete this.children.segmentationDrilldown,this.lastTargetElement===$target[0])||(stateModel.set("modalizedRow",drilldownInfo.idx),this.children.segmentationDrilldown=new SegmentationDrilldown({field:drilldownInfo.data.field,value:drilldownInfo.data.value,action:drilldownInfo.data.action,usespath:drilldownInfo.data.usespath,idx:drilldownInfo.idx,onHiddenRemove:!0,model:{application:this.model.application,report:this.model.report,state:stateModel,searchJob:this.model.searchJob},scrollContainer:$target.closest(".scrolling-table-wrapper"),ignoreToggleMouseDown:!0}),this.lastTargetElement=$target[0],this.children.segmentationDrilldown.render().appendTo($("body")).show($target,{$onClickCloseFocus:$target.closest("tr.tabbable-list-row, tr.tabbable-table-primary-row, tr.tabbable-table-secondary-row")}),this.listenToOnce(this.children.segmentationDrilldown,"hidden",function(){$target.removeClass("selected-segment")}))},openFieldDrilldown:function(drilldownInfo){var $pointTo=drilldownInfo.$anchor||drilldownInfo.$target,stateModel=drilldownInfo.stateModel,field=drilldownInfo.data.field,fieldModel=this.model.summary.findByFieldName(field),value=drilldownInfo.data.value,action=drilldownInfo.data.action;this.children.fieldValueDrilldown&&this.children.fieldValueDrilldown.shown&&(this.children.fieldValueDrilldown.hide(),this.children.fieldValueDrilldown.remove(),delete this.children.fieldValueDrilldown,this.lastTargetElement===$pointTo[0])||($pointTo.addClass("selected-segment"),stateModel.set("modalizedRow",drilldownInfo.idx),this.children.fieldValueDrilldown=new FieldValueDrilldown({field:field,value:value,action:action,idx:drilldownInfo.idx,onHiddenRemove:!0,usespath:drilldownInfo.data.usespath,model:{field:fieldModel,application:this.model.application,report:this.model.report,state:stateModel,searchJob:this.model.searchJob},scrollContainer:$pointTo.closest(".scrolling-table-wrapper"),ignoreToggleMouseDown:!0}),this.lastTargetElement=$pointTo[0],this.children.fieldValueDrilldown.render().appendTo($("body")).show($pointTo,{$toggle:drilldownInfo.$target,$onClickCloseFocus:$pointTo.closest("tr.tabbable-list-row, tr.tabbable-table-primary-row, tr.tabbable-table-secondary-row")}),this.listenToOnce(this.children.fieldValueDrilldown,"hidden",function(){$pointTo.removeClass("selected-segment")}))},openTimeInfoDrilldown:function(drilldownInfo){var time=drilldownInfo.$anchor.data().timeIso;return this.children.timeInfoDrilldown&&this.children.timeInfoDrilldown.shown?(this.children.timeInfoDrilldown.hide(),this.children.timeInfoDrilldown.remove(),void delete this.children.timeInfoDrilldown):(drilldownInfo.stateModel.set("modalizedRow",drilldownInfo.idx),this.children.timeInfoDrilldown=new TimeInfoDrilldown({model:{report:this.model.report},header:_("_time").t(),time:time,onHiddenRemove:!0,scrollContainer:drilldownInfo.$anchor.closest(".scrolling-table-wrapper"),ignoreToggleMouseDown:!0}),void this.children.timeInfoDrilldown.render().appendTo($("body")).show(drilldownInfo.$anchor,{$toggle:drilldownInfo.$target,$onClickCloseFocus:drilldownInfo.$anchor.closest("tr.tabbable-list-row, tr.tabbable-table-primary-row, tr.tabbable-table-secondary-row")}))},drilldownHandler:function(drilldownInfo){var newWindow,domEvent,drilldown,ddDeferred;switch(drilldownInfo.type){case"tag":return void this.openTagDrilldown(drilldownInfo);case"segmentation":return void this.openSegmentationDrilldown(drilldownInfo);case"fieldvalue":return void this.openFieldDrilldown(drilldownInfo);case"time":return void this.openTimeInfoDrilldown(drilldownInfo);default:domEvent=drilldownInfo.event,drilldown=this.getDrilldownCallback(drilldownInfo.data,drilldownInfo.noFetch),ddDeferred=drilldown(),drilldownInfo.noFetch||((domEvent.ctrlKey||domEvent.metaKey||drilldownInfo.newTab)&&(newWindow=window.open()),$.when(ddDeferred).then(function(){var search=this.model.intentions.fullSearch(),searchRoute=route.search(this.model.application.get("root"),this.model.application.get("locale"),this.model.application.get("app"),{data:{q:search,earliest:this.model.report.entry.content.get("dispatch.earliest_time"),latest:this.model.report.entry.content.get("dispatch.latest_time")}});newWindow?(this.model.intentions.clear({silent:!0}),newWindow.location=searchRoute):(this.model.state.trigger("unmodalize"),this.options.setLocation?window.location=searchRoute:this.model.report.entry.content.set("search",search))}.bind(this))),this.trigger("drilldown",drilldownInfo,drilldown)}}})}.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__),!(void 0!==__WEBPACK_AMD_DEFINE_RESULT__&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__))},"views/shared/eventsviewerdrilldown/SegmentationDrilldown":function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;__WEBPACK_AMD_DEFINE_ARRAY__=[__webpack_require__("require/underscore"),__webpack_require__("shim/jquery"),module,__webpack_require__("views/shared/PopTart")],__WEBPACK_AMD_DEFINE_RESULT__=function(_,$,module,PopTart){return PopTart.extend({moduleId:module.id,className:"dropdown-menu",initialize:function(options){PopTart.prototype.initialize.apply(this,arguments)},events:{"click .curr_inc_val":function(e){this.segmentationDrilldown(e)},"click .curr_inc_val_secondary":function(e){this.segmentationDrilldown(e,{newTab:!0})},"click .curr_exc_val":function(e){this.segmentationDrilldown(e,{negate:!0})},"click .curr_exc_val_secondary":function(e){this.segmentationDrilldown(e,{negate:!0,newTab:!0})},"click .remove_val":function(e){this.segmentationDrilldown(e,{removing:!0})},"click .remove_val_secondary":function(e){this.segmentationDrilldown(e,{removing:!0,newTab:!0})},"click .only_val":function(e){this.options.action="addterm",this.segmentationDrilldown(e,{search:"*"})},"click .only_val_secondary":function(e){this.options.action="addterm",this.segmentationDrilldown(e,{search:"*",newTab:!0})}},segmentationDrilldown:function(e,options){e.preventDefault(),options=options||{};var q=options.search?options.search:this.model.report.entry.content.get("search");this.model.state.trigger("drilldown",{data:{q:q,stripReportsSearch:!1,negate:options.negate,action:this.options.action,value:this.options.value,app:this.model.application.get("app"),owner:this.model.application.get("owner")},event:e,idx:this.options.idx,newTab:options.newTab}),this.hide()},render:function(){var template=this.compiledTemplate({_:_,removable:"removeterm"===this.options.action});return this.$el.html(PopTart.prototype.template_menu),this.$el.append(template),this},template:'\t                <ul>\t                    <% if (!removable) { %>\t                        <li>\t                            <a class="curr_inc_val primary-link" href="#"><%- _("Add to search").t() %></a>\t                            <a class="curr_inc_val_secondary secondary-link" href="#"><i class="icon-external"></i></a>\t                        </li>\t                        <li>\t                            <a class="curr_exc_val primary-link" href="#"><%- _("Exclude from search").t() %></a>\t                            <a class="curr_exc_val_secondary secondary-link" href="#"><i class="icon-external"></i></a>\t                        </li>\t                    <% } else { %>\t                        <li>\t                            <a class="remove_val primary-link" href="#"><%- _("Remove from search").t() %></a>\t                            <a class="remove_val_secondary secondary-link" href="#"><i class="icon-external"></i></a>\t                        </li>\t                    <% } %>\t                    <li>\t                        <a class="only_val primary-link" href="#"><%- _("New search").t() %></a>\t                        <a class="only_val_secondary secondary-link" href="#"><i class="icon-external"></i></a>\t                    </li>\t                </ul>\t            '})}.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__),!(void 0!==__WEBPACK_AMD_DEFINE_RESULT__&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__))},"views/shared/eventsviewerdrilldown/FieldValueDrilldown":function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;__WEBPACK_AMD_DEFINE_ARRAY__=[__webpack_require__("require/underscore"),__webpack_require__("shim/jquery"),module,__webpack_require__("views/shared/PopTart"),__webpack_require__("shim/splunk.util"),__webpack_require__("stubs/i18n")],__WEBPACK_AMD_DEFINE_RESULT__=function(_,$,module,PopTart,splunkUtil,i18n){return PopTart.extend({moduleId:module.id,className:"dropdown-menu",initialize:function(options){PopTart.prototype.initialize.call(this,options),_.defaults(this.options,{header:splunkUtil.sprintf("Field: %s = %s",this.options.field,this.options.value)}),this.model.field&&(this.fieldsModes=this.model.field.get("modes"),this.fieldMode=_.findWhere(this.fieldsModes,{value:this.options.value}),this.fieldMode&&(this.valueCount=this.fieldMode.count||0,this.notValueCount=(this.model.field.get("count")||0)-this.valueCount,this.notValueCount=this.notValueCount<0?0:this.notValueCount))},events:{"click .curr_inc_val":function(e){this.fieldDrilldown(e)},"click .curr_inc_val_secondary":function(e){this.fieldDrilldown(e,{newTab:!0})},"click .curr_exc_val":function(e){this.fieldDrilldown(e,{negate:!0})},"click .curr_exc_val_secondary":function(e){this.fieldDrilldown(e,{negate:!0,newTab:!0})},"click .remove_val":function(e){this.fieldDrilldown(e)},"click .remove_val_secondary":function(e){this.fieldDrilldown(e,{newTab:!0})},"click .only_val":function(e){this.options.action="fieldvalue",this.fieldDrilldown(e,{search:"*"})},"click .only_val_secondary":function(e){this.options.action="fieldvalue",this.fieldDrilldown(e,{search:"*",newTab:!0})}},fieldDrilldown:function(e,options){e.preventDefault(),options=options||{};var q=options.search?options.search:this.model.report.entry.content.get("search");this.model.state.trigger("drilldown",{data:{q:q,stripReportsSearch:!1,negate:options.negate,action:this.options.action,field:this.options.field,value:this.options.value,app:this.model.application.get("app"),owner:this.model.application.get("owner"),usespath:this.options.usespath},event:e,idx:this.options.idx,newTab:options.newTab,stateModel:this.model.state}),this.hide()},render:function(){var template=this.compiledTemplate({_:_,fieldMode:this.fieldMode,valueCount:i18n.format_decimal(this.valueCount),notValueCount:i18n.format_decimal(this.notValueCount),splunkUtil:splunkUtil,removable:"removefieldvalue"===this.options.action});return this.$el.html(PopTart.prototype.template_menu),this.$el.append(template),this},template:'\t                <ul>\t                    <% if (!removable) { %>\t                        <li>\t                            <a class="curr_inc_val primary-link" href="#">\t                                <%- _("Add to search").t()%>\t                                <% if (fieldMode) { %>\t                                    <span class="info"><%- splunkUtil.sprintf(_("%s events").t(), valueCount) %></span>\t                                <% } %>\t                            </a>\t                            <a class="curr_inc_val_secondary secondary-link" href="#"><i class="icon-external"></i></a>\t                        </li>\t                        <li>\t                            <a class="curr_exc_val primary-link" href="#">\t                                <%- _("Exclude from search").t() %>\t                                <% if (fieldMode) { %>\t                                    <span class="info"><%- splunkUtil.sprintf(_("%s events").t(), notValueCount) %></span>\t                                <% } %>\t                            </a>\t                            <a class="curr_exc_val_secondary secondary-link" href="#"><i class="icon-external"></i></a>\t                        </li>\t                    <% } else { %>\t                        <li>\t                            <a class="remove_val primary-link" href="#"><%- _("Remove from search").t() %></a>\t                            <a class="remove_val_secondary secondary-link" href="#"><i class="icon-external"></i></a>\t                        </li>\t                    <% } %>\t                    <li>\t                        <a class="only_val primary-link" href="#"><%- _("New search").t() %></a>\t                        <a class="only_val_secondary secondary-link" href="#"><i class="icon-external"></i></a>\t                    </li>\t                </ul>\t            '})}.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__),!(void 0!==__WEBPACK_AMD_DEFINE_RESULT__&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__))},"views/shared/eventsviewerdrilldown/TagDrilldown":function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;__WEBPACK_AMD_DEFINE_ARRAY__=[__webpack_require__("require/underscore"),__webpack_require__("shim/jquery"),module,__webpack_require__("views/shared/PopTart"),__webpack_require__("shim/splunk.util")],__WEBPACK_AMD_DEFINE_RESULT__=function(_,$,module,PopTart,splunkUtil){return PopTart.extend({moduleId:module.id,className:"dropdown-menu",initialize:function(options){PopTart.prototype.initialize.apply(this,arguments)},events:{"click .curr_inc_val":function(e){this.tagDrilldown(e)},"click .curr_inc_val_secondary":function(e){this.tagDrilldown(e,{newTab:!0})},"click .curr_exc_val":function(e){this.tagDrilldown(e,{negate:!0})},"click .curr_exc_val_secondary":function(e){this.tagDrilldown(e,{negate:!0,newTab:!0})},"click .remove_val":function(e){this.tagDrilldown(e)},"click .remove_val_secondary":function(e){this.tagDrilldown(e,{newTab:!0})},"click .only_val":function(e){this.tagDrilldown(e,{search:"*"})},"click .only_val_secondary":function(e){this.tagDrilldown(e,{search:"*",newTab:!0})}},tagDrilldown:function(e,options){e.preventDefault(),options=options||{};var q=options.search?options.search:this.model.searchJob.getStrippedEventSearch();this.model.state.trigger("drilldown",{data:{q:q,stripReportsSearch:!0,negate:options.negate,action:this.options.action,field:this.options.taggedFieldName,value:this.options.value,app:this.model.application.get("app"),owner:this.model.application.get("owner"),usespath:this.options.usespath},event:e,idx:this.options.idx,newTab:options.newTab}),this.hide()},render:function(){var template=this.compiledTemplate({_:_,removable:"removefieldvalue"===this.options.action});return this.$el.html(PopTart.prototype.template_menu),this.$el.append(template),this},template:'\t                <ul>\t                    <% if (!removable) { %>\t                        <li>\t                            <a class="curr_inc_val primary-link" href="#"><%- _("Add to search").t() %></a>\t                            <a class="curr_inc_val_secondary secondary-link" href="#"><i class="icon-external"></i></a>\t                        </li>\t                        <li>\t                            <a class="curr_exc_val primary-link" href="#"><%- _("Exclude from search").t() %></a>\t                            <a class="curr_exc_val_secondary secondary-link" href="#"><i class="icon-external"></i></a>\t                        </li>\t                     <% } else { %>\t                        <li>\t                            <a class="remove_val primary-link" href="#"><%- _("Remove from search").t() %></a>\t                            <a class="remove_val_secondary secondary-link" href="#"><i class="icon-external"></i></a>\t                        </li>\t                    <% } %>\t                    <li>\t                        <a class="only_val primary-link" href="#"><%- _("New search").t() %></a>\t                        <a class="only_val_secondary secondary-link" href="#"><i class="icon-external"></i></a>\t                    </li>\t                </ul>\t            '})}.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__),!(void 0!==__WEBPACK_AMD_DEFINE_RESULT__&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__))}});