define(["md5"], function (md5) {
    "use strict";

    var getImageUrlForEmail = function (email, size) {
        var emailHash = md5(email.trim().toLowerCase()).toString();
        size = size || 32;
        return kendo.format("http://www.gravatar.com/avatar/{0}?s={1}", emailHash, size);
    };

    // HACK: judges
    var overrides = {
        'stephen.forte@telerik.com': 'https://dl.dropboxusercontent.com/u/14515711/hackathon/forte.PNG',
        'mihail.valkov@telerik.com': 'https://dl.dropboxusercontent.com/u/14515711/hackathon/misho.JPG',
        'doug.laird@telerik.com': 'https://dl.dropboxusercontent.com/u/14515711/hackathon/douglaird.PNG',
        'zarko@telerik.com': 'https://dl.dropboxusercontent.com/u/14515711/hackathon/zarko.PNG'
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