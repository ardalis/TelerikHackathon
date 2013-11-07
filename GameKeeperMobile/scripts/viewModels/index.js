define([
    "viewModels/recordGameViewModel",
    "viewModels/chooseEventViewModel",
    "viewModels/createEventViewModel",
    "viewModels/chooseGameViewModel",
    "viewModels/createGameViewModel",
], function (
    recordGameViewModel,
    chooseEventViewModel,
    createEventViewModel,
    chooseGameViewModel,
    createGameViewModel
) {
    "use strict";

    return {
        recordGame: recordGameViewModel,
        chooseEvent: chooseEventViewModel,
        createEvent: createEventViewModel,
        chooseGame: chooseGameViewModel,
        createGame: createGameViewModel,
        home: kendo.observable({
            gravatarEmail: 'Chris.Wagner@telerik.com'
        })
    };
});