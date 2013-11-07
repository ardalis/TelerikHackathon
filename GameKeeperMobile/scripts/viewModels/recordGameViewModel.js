define([
    "radio",
    "viewModels/chooseEventViewModel",
    "viewModels/chooseGameViewModel",
    "viewModels/choosePlayersViewModel"
], function (
    radio,
    chooseEventDialog,
    chooseGameDialog,
    choosePlayersDialog
) {
    "use strict";

    var vm = kendo.observable({
        selectedEvent: null,
        selectedGame: null,
        selectedPlayers: [],

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
        },
        onChoosePlayersTapped: function () {
            choosePlayersDialog.show(function (playerIds) {
                // hooray!
                vm.set("selectedPlayers", playerIds);
                console.log(playerIds);
            });
        }
    });

    return vm;
});
