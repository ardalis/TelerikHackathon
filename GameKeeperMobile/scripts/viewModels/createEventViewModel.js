define(["radio"], function (radio) {
    "use strict";

    var vm = kendo.observable({
        title: "",
        location: "",
        date: "",

        onUseCurrentLocationTapped: function () {
            navigator.geolocation.getCurrentPosition(function (position) {
                var coordinates = kendo.format("{0}, {1}", position.coords.latitude, position.coords.longitude);
                vm.set("location", coordinates);
                $.get('http://maps.googleapis.com/maps/api/geocode/json?sensor=true&latlng=' + coordinates).then(function (response) {
                    // Opportunity for improvement: could let user pick from the list of likely addresses.
                    vm.set("location", response.results[0].formatted_address);
                }, function () {
                    // slurp errors
                });
            });
        },
        onSaveTapped: function (e) {
            var validator = $("#create-event-form").kendoValidator().data("kendoValidator");
            e.preventDefault();
            if (validator.validate()) {
                radio("event/created").broadcast({
                    Name: vm.get("title"),
                    Location: vm.get("location"),
                    StartDate: vm.get("date")
                });
                vm.clear();
            }
        },
        clear: function() {
            vm.set("title", "");
            vm.set("location", "");
            vm.set("date", "");
        }
    });
    return vm;
});
