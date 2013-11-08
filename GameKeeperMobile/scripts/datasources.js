define(["el", "azure-client"], function (el, azureClient) {
    "use strict";

    var createEverliveDataSource = function (typeName) {
        return new kendo.data.DataSource({
            type: 'everlive',
            transport: {
                typeName: typeName
            },
            schema: {
                model: { id: Everlive.idField }
            },
            sort: { field: "Name", dir: "asc" }
        });
    };

    var createAzureDataSource = function (typeName) {
        var table = azureClient.getTable(typeName);
        return new kendo.data.DataSource({
            schema: {
                model: { id: "ID" }
            },
            autosync: true,
            transport: {
                read: function (options) {
                    table.read().done(function (results) {
                        options.success(results);
                    });
                },
                update: function (options) {
                    debugger;
                    options.fail("ph no");
                }
            }
        });
    };

    var eventsDataSource = createEverliveDataSource('Events');
    var gamesDataSource = createEverliveDataSource('Games');
    var playersDataSource = createAzureDataSource('player');

    return {
        events: eventsDataSource,
        games: gamesDataSource,
        players: playersDataSource
    };
});
