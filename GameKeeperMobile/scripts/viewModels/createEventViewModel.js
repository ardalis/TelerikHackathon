define(["radio"], function (radio) {
    "use strict";

    var vm = kendo.observable({
        title: "",
        location: "",
        date: "",
        onUseCurrentLocationTapped: function () {
            navigator.geolocation.getCurrentPosition(function (position) {
                vm.set("location", kendo.format("{0}, {1}", position.coords.latitude, position.coords.longitude));
            });
        }
    });
    return vm;
});
