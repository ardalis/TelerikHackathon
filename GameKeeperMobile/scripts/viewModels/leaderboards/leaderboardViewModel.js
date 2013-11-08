define([], function () {
    "use strict";

    var createLeaderboardViewModel = function (createPromise, dimension) {
        var vm = kendo.observable({
            rankings: [],
            dimension: dimension,
            onBeforeShow: function () {
                vm.update();
            },
            update: function () {
                createPromise().done(function (result) {
                    var wins = JSON.parse(result.response).filter(function (player) {
                        return player[vm.dimension] > 0;
                    });
                    wins.forEach(function (player, i) {
                        player.Score = player[vm.dimension];
                        player.Rank = i + 1;
                    });
                    vm.set("rankings", wins);
                });
            }
        });
        return vm;
    }
    return {
        create: createLeaderboardViewModel
    };
});
