define([], function () {
    "use strict";

    var vm = kendo.observable({
        selectedEvent: null,
        hasSelectedEvent: function () {
            return vm.get("selectedEvent") !== null;
        },
        selectedEventTitle: function () {
            return vm.hasSelectedEvent() ? vm.get("selectedEvent").title : "";
        }
    });
    return vm;
});
