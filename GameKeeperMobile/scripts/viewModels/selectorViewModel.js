define(["radio"], function (radio) {
    "use strict";

    var createSelectorViewModel = function(type, dataSource, extension) {
        var selectedCallback;
        var currentOptions;

        var vm = kendo.observable(_.extend({
            dataSource: dataSource,
            displayLinks: false,

            show: function (callback, options) {
                currentOptions = options || {};
                selectedCallback = callback;
                if (vm.get("displayLinks") !== currentOptions.displayLinks) {
                    vm.set("displayLinks", currentOptions.displayLinks);
                    // HACK: need to force rebind...
                    dataSource.read();
                }
                window.app.application.navigate(kendo.format("views/choose-{0}.html", type));
            },

            complete: function (result) {
                selectedCallback(result);
            },

            onItemSelected: function (e) {
                if (vm.get("displayLinks"))
                    return;
                vm.complete(e.dataItem);
                if (!currentOptions.stayOpen) {
                    window.app.application.navigate("#:back");
                }
            }
        }, extension || {}));

        radio(type + "/created").subscribe(function (item) {
            dataSource.add(item);
            dataSource.sync();
            window.app.application.navigate("#:back");
        });

        return vm;
    };

    return {
        create: createSelectorViewModel
    };
});
