define([
    "radio",
    "viewModels/chooseEventViewModel",
    "viewModels/chooseGameViewModel"
], function (
    radio,
    chooseEventDialog,
    chooseGameDialog
) {
    "use strict";

    var vm = kendo.observable({
        selectedEvent: null,
        selectedGame: null,

        hasSelectedEvent: function () {
            return vm.get("selectedEvent") !== null;
        },
        selectedEventTitle: function () {
            return vm.hasSelectedEvent() ? vm.get("selectedEvent").Name : "";
        },
        
        hasSelectedGame: function () {
            return vm.get("selectedGame") !== null;
        },
        selectedGameTitle: function () {
            return vm.hasSelectedGame() ? vm.get("selectedGame").Name : "";
        },

        onChooseEventTapped: function () {
            chooseEventDialog.show(function (event) {
                vm.set("selectedEvent", event);
            });
        },
        onChooseGameTapped: function () {
            chooseGameDialog.show(function (game) {
                vm.set("selectedGame", game);
            });
        }
    });

    return vm;
});
