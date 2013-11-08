﻿define(["azure-client"], function (azureClient) {
    "use strict";

    var lineChart = null;
    var global = window;

    var drawChart = function (dataRows) {
        var $lineChart;

        if (lineChart !== null) {
            lineChart.destroy();
        }

        $lineChart = $("#line-chart").empty();

        $lineChart.kendoChart({
            //theme: global.app.chartsTheme,
            renderAs: "svg",
            dataSource: {
                data: dataRows,
                schema: {
                    model: {
                        fields: {
                            DateCreated: {
                                type: 'date'
                            }
                        }
                    }
                }
            },
            title: {
                position: "top",
                text: "Wins and Losses"
            },
            legend: {
                position: "bottom"
            },
            seriesDefaults: {
                type: "line"
            },
            dateField: "DateCreated",
            series: [
                {
                    field: "Win",
                    name: "Wins",
                    categoryField: 'DateCreated',
                }, {
                    field: "Loss",
                    name: "Losses",
                    categoryField: 'DateCreated'
                }
            ],
            valueAxis: {
                line: {
                    visible: false
                }
            },
            categoryAxis: {
                field: "DateCreated",
                baseUnit: "months",
                majorGridLines: {
                    visible: false
                }
            }
        });
        lineChart = $lineChart.data("kendoChart");
    };

    var vm = kendo.observable({
        onShow: function () {
            var playerId = 5;
            azureClient.invokeApi('winsbyplayer', {
                method: 'get',
                parameters: { playerid: playerId }
            }).then(function (result) {
                drawChart(JSON.parse(result.response));
            });
        },
        onHide: function () {
        }
    });
    return vm;
});