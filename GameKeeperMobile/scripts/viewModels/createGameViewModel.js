define(["radio"], function (radio) {
    "use strict";

    var validator = $("#create-game-form").kendoValidator().data("kendoValidator");

    var vm = kendo.observable({
        title: "",
        onSaveTapped: function (e) {
            e.preventDefault();
            if (validator.validate()) {
                radio("game/created").broadcast({
                    title: vm.get("title"),
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
