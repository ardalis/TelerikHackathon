define(["radio", "viewModels/chooseEventViewModel"], function (radio, chooseEventDialog) {
    "use strict";

    var vm = kendo.observable({
        selectedEvent: null,

        hasSelectedEvent: function () {
            return vm.get("selectedEvent") !== null;
        },
        selectedEventTitle: function () {
            return vm.hasSelectedEvent() ? vm.get("selectedEvent").title : "";
        },

        onChooseEventTapped: function () {
            chooseEventDialog.show(function (event) {
                vm.set("selectedEvent", event);
            });
        }
    });

    radio("event/created").subscribe(function (event) {
        fakeEventsDataSource.add(event);
        window.app.application.navigate("#:back");
    });

    return vm;
});
