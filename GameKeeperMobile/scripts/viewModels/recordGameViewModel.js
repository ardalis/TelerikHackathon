define([
    "radio",
    "viewModels/chooseEventViewModel",
    "viewModels/chooseGameViewModel",
    "viewModels/choosePlayersViewModel",
    "datasources",
    "azure-client"
], function (
    radio,
    chooseEventDialog,
    chooseGameDialog,
    choosePlayersDialog,
    datasources,
    azureClient
) {
    "use strict";

    var vm = kendo.observable({
        selectedEvent: null,
        selectedGame: null,
        selectedPlayerIds: [],
        selectedPlayers: [],

        clear: function () {
            this.set("selectedEvent", null);
            this.set("selectedGame", null);
            this.set("selectedPlayerIds", []);
            this.set("selectedPlayers", []);
        },

        hasSelectedEvent: function () {
            return vm.get("selectedEvent") !== null;
        },
        selectedEventTitle: function () {
            return vm.hasSelectedEvent() ? vm.get("selectedEvent").Name : "";
        },
        selectedEventLocation: function () {
            return vm.hasSelectedEvent() ? vm.get("selectedEvent").Location : "";
        },
        selectedEventStartDate: function () {
            return vm.hasSelectedEvent() ? vm.get("selectedEvent").StartDate : "";
        },
        
        hasSelectedGame: function () {
            return vm.get("selectedGame") !== null;
        },
        selectedGameTitle: function () {
            return vm.hasSelectedGame() ? vm.get("selectedGame").Name : "";
        },
        selectedGameBoxImageUrl: function () {
            return vm.hasSelectedGame() ? vm.get("selectedGame").BoxImageUrl : "";
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
            azureClient.getTable('match').insert({
                GameID: vm.selectedGame.id,
                DateCreated: new Date()
            }).then(function (match) {
                app.application.showLoading();
                // HACK: here be dragons.
                var winnersTable = azureClient.getTable('matchwinner');
                var losersTable = azureClient.getTable('matchloser');
                var saveWinners = vm.selectedPlayers.filter(function (player) { return player.IsWinner; }).map(function (player) {
                    return winnersTable.insert({
                        MatchID: match.id,
                        PlayerID: player.ID,
                        Score: 1
                    });
                });
                var saveLosers = vm.selectedPlayers.filter(function (player) { return !player.IsWinner; }).map(function (player) {
                    return losersTable.insert({
                        MatchID: match.id,
                        PlayerID: player.ID,
                        Score: 0
                    });
                });
                $.when.apply($, saveWinners).then(function (winners) {
                    $.when.apply($, saveLosers).then(function (losers) {
                        app.application.hideLoading();
                        app.application.navigate("#:back");
                        vm.clear();
                    });
                });
            });
        }
    });

    return vm;
});
