define(["radio"], function (radio) {
    "use strict";

    var DEFAULT_BOX_IMAGE_URL = 'http://png-3.findicons.com/files/icons/2118/nuvola/128/package_games_board.png';

    var vm = kendo.observable({
        title: "",
        onSaveTapped: function (e) {
            var validator = $("#create-game-form").kendoValidator().data("kendoValidator");
            e.preventDefault();
            if (validator.validate()) {
                radio("game/created").broadcast({
                    Name: vm.get("title"),
                    BoxImageUrl: DEFAULT_BOX_IMAGE_URL
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
