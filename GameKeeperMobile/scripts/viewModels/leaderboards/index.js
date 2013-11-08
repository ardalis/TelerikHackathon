define(["viewModels/leaderboards/leaderboardViewModel", "azure-client"], function (leaderboardViewModel, azureClient) {
    "use strict";

    var globalWins = leaderboardViewModel.create(function() {
        return azureClient.invokeApi('leaderboardbywins', { method: 'get' });
    }, 'Wins');

    return {
        globalWins: globalWins
    };
});