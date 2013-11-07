define([
    "viewModels/recordGameViewModel",
    "viewModels/userProfileViewModel"
], function (
    recordGameViewModel,
    userProfileViewModel
) {
    "use strict";

    return {
        recordGame: recordGameViewModel,
        userProfile: userProfileViewModel,
        chooseEvent: kendo.observable({}),
        home: kendo.observable({
            gravatarEmail: 'Chris.Wagner@telerik.com'
        })
    };
});