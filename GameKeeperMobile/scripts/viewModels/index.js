define([
    "viewModels/recordGameViewModel",
    "viewModels/chooseEventViewModel",
    "viewModels/createEventViewModel",
    "viewModels/chooseGameViewModel",
    "viewModels/createGameViewModel",
    "viewModels/choosePlayersViewModel",
    "viewModels/createPlayerViewModel",
    "viewModels/userProfileViewModel"
], function (
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
        recordGame: recordGameViewModel,
        chooseEvent: chooseEventViewModel,
        createEvent: createEventViewModel,
        chooseGame: chooseGameViewModel,
        createGame: createGameViewModel,
        choosePlayers: choosePlayersViewModel,
        createPlayer: createPlayerViewModel,
        userProfile: userProfileViewModel,
        home: kendo.observable({
            gravatarEmail: 'Chris.Wagner@telerik.com'
        })
    };
});