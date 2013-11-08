define(["radio", "datasources"], function (radio, datasources) {
    "use strict";

    var selectedCallback;

    var vm = kendo.observable({
        dataSource: datasources.players,

        show: function (callback, selectedPlayers) {
            vm.dataSource.data().filter(function (p) {
                p.isChecked = selectedPlayers.indexOf(p.ID) >= 0;
            });
            selectedCallback = callback;
            window.app.application.navigate(kendo.format("views/choose-players.html"));
        },

        complete: function (result) {
            selectedCallback(result);
        },

        // HACK :(
        onBackTapped: function () {
            var selectedPlayers = $.makeArray(vm.dataSource.data().filter(function (p) {
                return p.isChecked;
            }).map(function (p) {
                return p.ID;
            }));
            vm.complete(selectedPlayers);
            window.app.application.navigate("#:back");
        }
    });

    radio("player/created").subscribe(function (item) {
        datasources.players.add(item);
        datasources.players.sync();
        window.app.application.navigate("#:back");
    });

    return vm;
});