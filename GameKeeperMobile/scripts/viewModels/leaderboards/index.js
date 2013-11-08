define([
    "viewModels/leaderboards/leaderboardViewModel",
    "azure-client",
    "viewModels/chooseGameViewModel"
], function (
    leaderboardViewModel,
    azureClient,
    chooseGameDialog
) {
    "use strict";

    var globalWins = leaderboardViewModel.create(function() {
        return azureClient.invokeApi('leaderboardbywins', { method: 'get' });
    }, 'Wins');

    var winsByGame = leaderboardViewModel.create(function (params) {
        var gameId = parseInt(params.gameId, 10);
        azureClient.getTable('game').lookup(gameId).done(function (game) {
            winsByGame.set("game", game);
        });
        return azureClient.invokeApi('leaderboardbywins', { method: 'get', parameters: { gameid: gameId } });
    }, 'Wins');
    winsByGame.show = function () {
        chooseGameDialog.show(null, { displayLinks: "#wins-by-game" });
    };

    return {
        globalWins: globalWins,
        winsByGame: winsByGame
    };
});