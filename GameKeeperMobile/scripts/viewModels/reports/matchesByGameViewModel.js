define(["viewModels/chooseGameViewModel", "azure-client"], function (chooseGameDialog, azureClient) {
    "use strict";

    var lineChart = null;

    var drawChart = function (datesPlayed) {
        var $lineChart;
        if (lineChart !== null) {
            lineChart.destroy();
        }

        $lineChart = $("#game-popularity-line-chart").empty();
        $lineChart.kendoChart({
            renderAs: "svg",
            dataSource: {
                data: datesPlayed
            },
            title: {
                position: "top",
                text: "Times Played"
            },
            legend: {
                position: "bottom"
            },
            series: [
                {
                    type: "line",
                    name: "Times Played",
                    categoryField: 'DateCreated',
                    field: 'DateCreated',
                    aggregate: "count"
                }
            ],
            categoryAxis: {
                baseUnit: "days"
            }
        });

        lineChart = $lineChart.data("kendoChart");
    };

    var datesPlayed;

    var vm = kendo.observable({
        show: function () {
            chooseGameDialog.show(function (game) {
                azureClient.invokeApi('matchesbygame', { method: 'get', parameters: { gameid: game.id } }).done(function (result) {
                    datesPlayed = JSON.parse(result.response);
                    window.app.application.navigate("#matches-by-game");
                }, { stayOpen: true });
            });
        },
        onShow: function () {
            drawChart(datesPlayed);
        },
        onHide: function () {
            $(lineChart.element).empty();
            lineChart.destroy();
        }
    });
    return vm;
});