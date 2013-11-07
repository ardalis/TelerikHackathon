define(["viewModels/selectorViewModel", "datasources"], function (selectorViewModel, datasources) {
    "use strict";

    return selectorViewModel.create('game', datasources.games);
});