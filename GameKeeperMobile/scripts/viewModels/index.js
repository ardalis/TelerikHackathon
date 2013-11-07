define([
    "viewModels/recordGameViewModel",
    "viewModels/chooseEventViewModel",
    "viewModels/createEventViewModel",
    "viewModels/chooseGameViewModel",
    "viewModels/createGameViewModel",
    "viewModels/choosePlayersViewModel"
], function (
    recordGameViewModel,
    chooseEventViewModel,
    createEventViewModel,
    chooseGameViewModel,
    createGameViewModel,
    choosePlayersViewModel
) {
    "use strict";

    return {
        recordGame: recordGameViewModel,
        chooseEvent: chooseEventViewModel,
        createEvent: createEventViewModel,
        chooseGame: chooseGameViewModel,
        createGame: createGameViewModel,
        choosePlayersViewModel: choosePlayersViewModel,
        home: kendo.observable({
            gravatarEmail: 'Chris.Wagner@telerik.com'
        })
    };
});