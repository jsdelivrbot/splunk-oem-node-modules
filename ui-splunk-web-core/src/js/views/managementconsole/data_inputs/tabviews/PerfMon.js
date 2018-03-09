/**
 * Created by rtran on 5/25/16.
 */
define([
    'underscore',
    'jquery',
    'module',
    'backbone',
    './BaseDetailsView'
], function (
    _,
    $,
    module,
    Backbone,
    BaseDetailsView
) {
    return BaseDetailsView.extend({
        moduleId: module.id,
        className: 'perfmon-details',

        getTableColumns: function () {
            var columns = BaseDetailsView.prototype.getTableColumns.apply(this, arguments);
            columns.unshift({
                label: this.strings.TBL_NAME,
                key: 'entry.name',
                type: 'link',
                fires: 'editEntity',
                sortable: true,
                sortKey: 'name',
                enabled: _(this.canEdit).bind(this)
            });
            return columns;
        }
    });
});