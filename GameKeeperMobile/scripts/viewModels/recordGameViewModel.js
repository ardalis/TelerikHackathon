define(["radio"], function (radio) {
    "use strict";

    var fakeEventsDataSource = new kendo.data.DataSource({
        data: _.range(1, 3).map(function (i) {
            return {
                id: kendo.guid(),
                title: kendo.format("BOGA {0}/{0}", i),
                location: "",
                date: ""
            };
        })
    });

    var vm = kendo.observable({
        selectedEvent: null,
        eventFilter: "",
        eventsDataSource: fakeEventsDataSource,

        hasSelectedEvent: function () {
            return vm.get("selectedEvent") !== null;
        },
        selectedEventTitle: function () {
            return vm.hasSelectedEvent() ? vm.get("selectedEvent").title : "";
        },

        onEventSelected: function (e) {
            vm.set("selectedEvent", e.dataItem);
            window.app.application.navigate("#:back");
        }
    });

    radio("event/created").subscribe(function (event) {
        fakeEventsDataSource.add(event);
        window.app.application.navigate("#:back");
    });

    return vm;
});
