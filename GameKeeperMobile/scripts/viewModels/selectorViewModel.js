define(["radio"], function (radio) {
    "use strict";

    var createSelectorViewModel = function(type, dataSource) {
        var selectedCallback;

        var vm = kendo.observable({
            dataSource: dataSource,

            show: function (callback) {
                selectedCallback = callback;
                window.app.application.navigate("#choose-" + type);
            },

            onItemSelected: function (e) {
                selectedCallback(e.dataItem);
                window.app.application.navigate("#:back");
            }
        });

        radio(type + "/created").subscribe(function (item) {
            dataSource.add(item);
            window.app.application.navigate("#:back");
        });

        return vm;
    };

    return {
        create: createSelectorViewModel
    };
});
