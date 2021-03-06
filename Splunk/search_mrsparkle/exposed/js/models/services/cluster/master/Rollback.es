import $ from 'jquery';
import Backbone from 'backbone';
import BaseModel from 'models/StaticIdBase';
import splunkDUtils from 'util/splunkd_utils';
import splunkUtils from 'splunk.util';

export default BaseModel.extend(
    {
        initialize(...args) {
            BaseModel.prototype.initialize.apply(this, args);
        },
        sync(method, model, options) {
            const defaults = {
                data: {
                    output_mode: 'json',
                },
            };
            switch (method) {
                case 'update':
                    defaults.processData = true;
                    defaults.type = 'POST';
                    defaults.url = splunkDUtils.fullpath(model.id);
                    $.extend(true, defaults, options);
                    break;
                default:
                    throw new Error(splunkUtils.sprintf('invalid method: %s', method));
            }
            return Backbone.sync.call(this, method, model, defaults);
        },
    },
    {
        id: 'cluster/master/control/control/rollback',
    },
);
