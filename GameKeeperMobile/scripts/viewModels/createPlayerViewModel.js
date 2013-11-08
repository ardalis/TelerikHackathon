define(["radio"], function (radio) {
    "use strict";

    var vm = kendo.observable({
        name: "",
        email: "",
        onSaveTapped: function (e) {
            var validator = $("#create-player-form").kendoValidator().data("kendoValidator");
            e.preventDefault();
            if (validator.validate()) {
                radio("player/created").broadcast({
                    Name: vm.get("name"),
                    EmailAddress: vm.get("email")
                });
                vm.clear();
            }
        },
        clear: function () {
            vm.set("name", "");
            vm.set("email", "");
        }
    });
    return vm;
});
