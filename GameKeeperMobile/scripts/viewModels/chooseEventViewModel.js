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

    var selectedCallback;

    var vm = kendo.observable({
        eventFilter: "",
        eventsDataSource: fakeEventsDataSource,

        show: function (callback) {
            selectedCallback = callback;
            window.app.application.navigate("#choose-event");
        },

        onEventSelected: function (e) {
            selectedCallback(e.dataItem);
            window.app.application.navigate("#:back");
        }
    });

    radio("event/created").subscribe(function (event) {
        fakeEventsDataSource.add(event);
        window.app.application.navigate("#:back");
    });

    return vm;
});