define([
    "viewModels/recordGameViewModel"
], function (
    recordGameViewModel
) {
    "use strict";

    return {
        recordGame: recordGameViewModel,
        chooseEvent: kendo.observable({})
    };
});