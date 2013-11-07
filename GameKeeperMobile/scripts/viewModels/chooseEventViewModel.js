define(["viewModels/selectorViewModel"], function (selectorViewModel) {
    "use strict";

    var fakeEventsDataSource = new kendo.data.DataSource({
        data: _.range(1, 3).map(function (i) {
            return {
                Id: kendo.guid(),
                Name: kendo.format("BOGA {0}/{0}", i),
                Location: "",
                StartDate: ""
            };
        })
    });

    return selectorViewModel.create('event', fakeEventsDataSource);
});