define(["md5"], function (md5) {
    "use strict";

    var getImageUrlForEmail = function (email, size) {
        var emailHash = md5(email.trim().toLowerCase()).toString();
        size = size || 32;
        return kendo.format("http://www.gravatar.com/avatar/{0}?s={1}", emailHash, size);
    };

    // HACK: judges
    var overrides = {
        'stephen.forte@telerik.com': '',
        'mihail.valkov@telerik.com': '',
        'doug.laird@telerik.com': '',
        'zarko@telerik.com': ''
    };

    kendo.data.binders.gravatar = kendo.data.Binder.extend({
        refresh: function () {
            var el = $(this.element);
            var email = this.bindings["gravatar"].get() || "";
            var size = parseInt(el.attr("data-gravatar-size"), 10);

            el.attr("src", overrides[email] || getImageUrlForEmail(email, size));
        }
    });
});