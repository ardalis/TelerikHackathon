/// <reference path="ams.js" />
/// <reference path="MobileServices.Web-1.0.0.min.js" />

define(["ams"], function (ams) {
    "use strict";

    var createAzureDataSource = function(typeName) {
        
        return new kendo.data.DataSource({
            transport: {
                read: function(options) {
                    var ams = new WindowsAzure.MobileServiceClient();
                    return ams.getTable(typeName);
                }
            }
        })

    }

    var eventsDataSource = createAzureDataSource('Events');
    var gamesDataSource = createAzureDataSource('Games');
    var playersDataSource = createAzureDataSource('Players');

    return {
        events: eventsDataSource,
        games: gamesDataSource,
        players: playersDataSource
    };


});