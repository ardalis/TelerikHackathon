define(["viewModels/chooseGameViewModel", "azure-client"], function (chooseGameDialog, azureClient) {
    "use strict";

    var vm = kendo.observable({
        show: function () {
            chooseGameDialog.show(function (game) {
                azureClient.invokeApi('matchesbygame', { method: 'get', parameters: { gameid: game.id } }).done(function (result) {
                    var datesPlayed = JSON.parse(result.response);
                    //$("#game-popularity-line-chart");
                    setTimeout(function () {
                        window.app.application.navigate("#matches-by-game");
                    }, 100);
                });
            });
        },
        onShow: function () {
            //var playerId = 5;
            //azureClient.invokeApi('winsbyplayer', {
            //    method: 'get',
            //    parameters: { playerid: playerId }
            //}).then(function (result) {
            //    drawChart(JSON.parse(result.response));
            //    $(window).on("resize.lineChart", function () {
            //        drawChart(result.response);
            //    });
            //});
            //setTimeout(function () {
            //});
        },
        onHide: function () {
            //$(window).off("resize.lineChart");
        }
    });
    return vm;
});