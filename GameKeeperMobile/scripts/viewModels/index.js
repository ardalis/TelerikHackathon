﻿define([
    "viewModels/reports/index",
    "viewModels/leaderboards/index",
    "viewModels/recordGameViewModel",
    "viewModels/chooseEventViewModel",
    "viewModels/createEventViewModel",
    "viewModels/chooseGameViewModel",
    "viewModels/createGameViewModel",
    "viewModels/choosePlayersViewModel",
    "viewModels/createPlayerViewModel",
    "viewModels/userProfileViewModel"
], function (
    reports,
    leaderboards,
    recordGameViewModel,
    chooseEventViewModel,
    createEventViewModel,
    chooseGameViewModel,
    createGameViewModel,
    choosePlayersViewModel,
    createPlayerViewModel,
    userProfileViewModel
) {
    "use strict";

    return {
        reports: reports,
        leaders: leaderboards,
        recordGame: recordGameViewModel,
        chooseEvent: chooseEventViewModel,
        createEvent: createEventViewModel,
        chooseGame: chooseGameViewModel,
        createGame: createGameViewModel,
        choosePlayers: choosePlayersViewModel,
        createPlayer: createPlayerViewModel,
        userProfile: userProfileViewModel,
        home: kendo.observable({})
    };
});