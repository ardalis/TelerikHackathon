define(["viewModels/selectorViewModel"], function (selectorViewModel) {
    "use strict";

    var eventsDataSource = new kendo.data.DataSource({
        type: 'everlive',
        transport: {
            typeName: 'Events'
        },
        schema: {
            model: { id: Everlive.idField }
        }
    });

    //var fakeEventsDataSource = new kendo.data.DataSource({
    //    data: _.range(1, 3).map(function (i) {
    //        return {
    //            Id: kendo.guid(),
    //            Name: kendo.format("BOGA {0}/{0}", i),
    //            Location: "",
    //            StartDate: ""
    //        };
    //    })
    //});

    return selectorViewModel.create('event', eventsDataSource);
});