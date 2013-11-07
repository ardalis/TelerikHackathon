define([
    "viewModels/recordGameViewModel",
    "viewModels/chooseEventViewModel",
    "viewModels/createEventViewModel"
], function (
    recordGameViewModel,
    chooseEventViewModel,
    createEventViewModel
) {
    "use strict";

    return {
        recordGame: recordGameViewModel,
        chooseEvent: chooseEventViewModel,
        createEvent: createEventViewModel,
        home: kendo.observable({
            gravatarEmail: 'Chris.Wagner@telerik.com'
        })
    };
});