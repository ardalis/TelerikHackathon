define(["radio", "datasources"], function (radio, datasources) {
    "use strict";

    var selectedCallback;

    var vm = kendo.observable({
        dataSource: datasources.players,
        selectedPlayers: [],

        show: function (callback, selectedPlayers) {
            this.set("selectedPlayers", selectedPlayers);
            selectedCallback = callback;
            window.app.application.navigate(kendo.format("views/choose-players.html"));
        },

        complete: function (result) {
            selectedCallback(result);
        },

        // HACK :(
        onBackTapped: function () {
            // BUG: Kendo isn't updating this binding unless we navigate to a subview, so we need to work around it.
            var selectedPlayers = $.makeArray($("#choose-players input[type=checkbox]:checked").map(function () {
                return this.value;
            }));
            vm.complete(selectedPlayers);
            window.app.application.navigate("#:back");
        }
    });

    radio("player/created").subscribe(function (item) {
        dataSource.add(item);
        dataSource.sync();
        window.app.application.navigate("#:back");
    });

    return vm;
});