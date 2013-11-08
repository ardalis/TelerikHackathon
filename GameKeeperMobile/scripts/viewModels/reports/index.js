define([
    "viewModels/reports/gameplayHistoryViewModel",
    "viewModels/reports/matchesByGameViewModel"
], function (
    gameplayHistoryViewModel,
    matchesByGameViewModel
) {
    "use strict";

    return {
        gameplayHistory: gameplayHistoryViewModel,
        matchesByGame: matchesByGameViewModel
    };
});