define(["azure-client"], function (azureClient) {
    "use strict";

    var createAzureDataSource = function (typeName, idColumn) {
        var table = azureClient.getTable(typeName);
        return new kendo.data.DataSource({
            schema: {
                model: { id: idColumn }
            },
            sort: { field: "Name", dir: "asc" },
            transport: {
                read: function (options) {
                    table.read().done(function (results) {
                        options.success(results);
                    });
                },
                update: function (options) {
                    table.update(options.data).done(function (results) {
                        options.success(results);
                    });
                },
                create: function (options) {
                    delete options.data[idColumn];
                    table.insert(options.data).done(function (results) {
                        options.success(results);
                    });
                }
            }
        });
    };

    var eventsDataSource = createAzureDataSource('event', 'ID');
    var gamesDataSource = createAzureDataSource('game', 'id');
    var playersDataSource = createAzureDataSource('player', 'ID');

    return {
        events: eventsDataSource,
        games: gamesDataSource,
        players: playersDataSource
    };
});
