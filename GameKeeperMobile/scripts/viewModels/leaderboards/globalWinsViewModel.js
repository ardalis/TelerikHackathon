define(["azure-client"], function (azureClient) {
    "use strict";

    var vm = kendo.observable({
        rankings: [],
        dimension: "",
        onBeforeShow: function () {
            vm.set("dimension", "Wins");
            azureClient.invokeApi('leaderboardbywins', { method: 'get' }).done(function (result) {
                var wins = JSON.parse(result.response).filter(function (player) {
                    return player.Wins > 0;
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
});
