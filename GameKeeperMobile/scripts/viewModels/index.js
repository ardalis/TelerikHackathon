define([
    "viewModels/recordGameViewModel"
], function (
    recordGameViewModel
) {
    "use strict";

    return {
        recordGame: recordGameViewModel,
        chooseEvent: kendo.observable({}),
        home: kendo.observable({
            gravatarEmail: 'Chris.Wagner@telerik.com'
        })
    };
});