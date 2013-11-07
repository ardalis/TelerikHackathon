define(["radio"], function (radio) {
    "use strict";

    var vm = kendo.observable({
        name: "",
        email: "",
        onSaveTapped: function (e) {
            var validator = $("#create-player-form").kendoValidator().data("kendoValidator");
            e.preventDefault();
            if (validator.validate()) {
                radio("players/created").broadcast({
                    Name: vm.get("name"),
                    Email: vm.get("email")
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
