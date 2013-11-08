define(["azure-client", "datasources"], function (azureClient, datasources) {
    "use strict";

    var vm = kendo.observable ({
        id: kendo.guid(),
        name: "Joe Bag O'Donuts",
        email: "jeff.fritz@telerik.com",
        createdAt: new Date(2013, 10, 6),
        recentMatches: 14,
        recentWins: 3,
        topGames: new kendo.data.DataSource({
            data: [
                { name: "Chess", wins: 10 },
                { name: "Checkers", wins: 8 },
                { name: "Backgammon", wins: 6 },
                { name: "Dominoes", wins: 4 },
                { name: "Settlers of Catan", wins: 3 }
            ]
        }),
        winLoss: new kendo.data.DataSource({
            data: [
                { name: "Wins", count: 20},
                { name: "Losses", count: 10 }
            ]
        }),
        formattedCreateDate: function () {
            return kendo.toString(vm.createdAt, "MMM d, yyyy");
        },
        frequentOpp: "Mary Contrary",
        frequentOppWins: 10,
        frequentOppLosses: 8,
        winOpp: "Jeff Fritz",
        winOppWins: 13,
        winOppLosses: 3,
        lossOpp: "Phil Japikse",
        lossOppWins: 4,
        lossOppLosses: 8,

        onBeforeShow: function () {
            var playerId = 5;

            var playerTable = azureClient.getTable('player');
            var winTable = azureClient.getTable('matchwinner');
            var loseTable = azureClient.getTable('matchloser');

            // HACK: right now, the "last 90 days" is a total lie.
            winTable.where({ PlayerID: playerId }).read().done(function(wins) {
                loseTable.where({ PlayerID: playerId }).read().done(function(losses) {
                    vm.set("recentWins", wins.length);
                    vm.set("recentMatches", wins.length + losses.length);
                });
            });

            playerTable.lookup(playerId).done(function (player) {
                vm.set("name", player.Name);
                vm.set("email", player.EmailAddress);
                vm.set("createdAt", player.CreatedDate);
            });

            datasources.players.read();
        }
    });

    return vm;

});