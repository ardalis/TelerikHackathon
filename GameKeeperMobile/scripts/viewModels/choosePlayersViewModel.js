define(["viewModels/selectorViewModel"], function (selectorViewModel) {
    "use strict";

    var gameDataSource = new kendo.data.DataSource({
        type: 'everlive',
        transport: {
            typeName: 'Players'
        },
        schema: {
            model: { id: Everlive.idField }
        },
        sort: { field: "Name", dir: "asc" }
    });

    var vm = selectorViewModel.create('players', gameDataSource);
    return vm;
});