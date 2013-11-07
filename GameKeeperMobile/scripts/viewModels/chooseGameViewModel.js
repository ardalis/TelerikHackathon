define(["viewModels/selectorViewModel"], function (selectorViewModel) {
    "use strict";

    var fakeGames = [];

    ["Entropic", "Green", "Splendid"].forEach(function(adjective) {
        ["Bear", "Moose"].forEach(function(noun) {
            fakeGames.push({
                id: kendo.guid(),
                title: adjective + " " + noun
            });
        });
    });

    var fakeGamesDataSource = new kendo.data.DataSource({
        data: fakeGames
    });

    return selectorViewModel.create('game', fakeGamesDataSource);
});