define([
    "viewModels/recordGameViewModel",
    "viewModels/createEventViewModel"
], function (
    recordGameViewModel,
    createEventViewModel
) {
    "use strict";

    return {
        recordGame: recordGameViewModel,
        createEvent: createEventViewModel,
        home: kendo.observable({
            gravatarEmail: 'Chris.Wagner@telerik.com'
        })
    };
});