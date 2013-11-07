define(["viewModels/selectorViewModel"], function (selectorViewModel) {
    "use strict";

    var fakeEventsDataSource = new kendo.data.DataSource({
        data: _.range(1, 3).map(function (i) {
            return {
                id: kendo.guid(),
                title: kendo.format("BOGA {0}/{0}", i),
                location: "",
                date: ""
            };
        })
    });

    return selectorViewModel.create('event', fakeEventsDataSource);
});