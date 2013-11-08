define([
    "radio",
    "viewModels/chooseEventViewModel",
    "viewModels/chooseGameViewModel",
    "viewModels/choosePlayersViewModel",
    "datasources"
], function (
    radio,
    chooseEventDialog,
    chooseGameDialog,
    choosePlayersDialog,
    datasources
) {
    "use strict";

    var vm = kendo.observable({
        selectedEvent: null,
        selectedGame: null,
        selectedPlayerIds: [],
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
                var selectedPlayerViewModels = datasources.players.data().filter(function (player) {
                    return playerIds.indexOf(player.ID) >= 0;
                }).map(function (player) {
                    return vm.get("selectedPlayers").filter(function (pvm) { return pvm.ID === player.ID; })[0] || {
                        ID: player.ID,
                        Name: player.Name,
                        EmailAddress: player.EmailAddress,
                        IsWinner: false
                    };
                });
                vm.set("selectedPlayerIds", playerIds);
                vm.set("selectedPlayers", selectedPlayerViewModels);
            }, vm.get("selectedPlayerIds"));
        },
        onPlayerIconTapped: function (e) {
            var tappedPlayer = e.target.kendoBindingTarget.source;
            tappedPlayer.set("IsWinner", !tappedPlayer.get("IsWinner"));
        },
        onSaveButtonTapped: function (e) {
            debugger;
        }
    });

    return vm;
});
