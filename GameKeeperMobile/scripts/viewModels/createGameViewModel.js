define(["radio"], function (radio) {
    "use strict";

    var vm = kendo.observable({
        title: "",
        onSaveTapped: function (e) {
            var validator = $("#create-game-form").kendoValidator().data("kendoValidator");
            e.preventDefault();
            if (validator.validate()) {
                radio("game/created").broadcast({
                    Name: vm.get("title"),
                });
                vm.clear();
            }
        },
        clear: function () {
            vm.set("title", "");
        }
    });
    return vm;
});
