define(["viewModels/selectorViewModel"], function (selectorViewModel) {
    "use strict";

    var gameDataSource = new kendo.data.DataSource({
        type: 'everlive',
        transport: {
            typeName: 'Games'
        },
        schema: {
            model: { id: Everlive.idField }
        },
        sort: { field: "Name", dir: "asc" }
    });

    //var fakeGames = [];

    //["Entropic", "Green", "Splendid"].forEach(function(adjective) {
    //    ["Bear", "Moose"].forEach(function(noun) {
    //        fakeGames.push({
    //            Id: kendo.guid(),
    //            Name: adjective + " " + noun
    //        });
    //    });
    //});

    //var fakeGamesDataSource = new kendo.data.DataSource({
    //    data: fakeGames
    //});

    return selectorViewModel.create('game', gameDataSource);
});