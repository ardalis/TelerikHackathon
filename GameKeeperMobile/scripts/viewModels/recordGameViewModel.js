define([], function () {
    "use strict";

    var fakeEventsDataSource = new kendo.data.DataSource({
        data: _.range(1, 12).map(function (i) {
            return {
                id: kendo.guid(),
                title: kendo.format("BOGA {0}/{0}", i)
            };
        })
    });

    var vm = kendo.observable({
        selectedEvent: null,
        hasSelectedEvent: function () {
            return vm.get("selectedEvent") !== null;
        },
        selectedEventTitle: function () {
            return vm.hasSelectedEvent() ? vm.get("selectedEvent").title : "";
        },
        eventFilter: "",
        eventsDataSource: fakeEventsDataSource,
        onEventSelected: function (e) {
            vm.set("selectedEvent", e.dataItem);
            window.app.application.navigate("#:back");
        }
    });
    return vm;
});
