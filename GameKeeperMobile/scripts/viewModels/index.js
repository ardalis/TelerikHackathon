define([
    "viewModels/recordGameViewModel",
    "viewModels/chooseEventViewModel",
    "viewModels/createEventViewModel",
    "viewModels/chooseGameViewModel"
], function (
    recordGameViewModel,
    chooseEventViewModel,
    createEventViewModel,
    chooseGameViewModel
) {
    "use strict";

    return {
        recordGame: recordGameViewModel,
        chooseEvent: chooseEventViewModel,
        createEvent: createEventViewModel,
        chooseGame: chooseGameViewModel,
        home: kendo.observable({
            gravatarEmail: 'Chris.Wagner@telerik.com'
        })
    };
});