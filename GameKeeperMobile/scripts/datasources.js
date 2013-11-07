define(["el"], function (el) {
    "use strict";

    var eventsDataSource = new kendo.data.DataSource({
        type: 'everlive',
        transport: {
            typeName: 'Events'
        },
        schema: {
            model: { id: Everlive.idField }
        },
        sort: { field: "Name", dir: "asc" }
    });

    var gamesDataSource = new kendo.data.DataSource({
        type: 'everlive',
        transport: {
            typeName: 'Games'
        },
        schema: {
            model: { id: Everlive.idField }
        },
        sort: { field: "Name", dir: "asc" }
    });

    return {
        events: eventsDataSource,
        games: gamesDataSource
    };
});
