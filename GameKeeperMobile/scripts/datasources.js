define(["el"], function (el) {
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

    var eventsDataSource = createEverliveDataSource('Events');
    var gamesDataSource = createEverliveDataSource('Games');
    var playersDataSource = createEverliveDataSource('Players');

    return {
        events: eventsDataSource,
        games: gamesDataSource,
        players: playersDataSource
    };
});
