define(["viewModels/selectorViewModel", "datasources"], function (selectorViewModel, datasources) {
    "use strict";

    return selectorViewModel.create('event', datasources.events);
});