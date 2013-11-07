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
        chooseEvent: kendo.observable({}),
        createEvent: createEventViewModel
    };
});