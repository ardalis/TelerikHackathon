define([], function () {
    "use strict";

    return {
        getImageUrlForEmail: function (email, size) {
            var emailHash = CryptoJS.MD5(email.trim().toLowerCase()).toString();
            size = size || 32;
            return kendo.format("http://www.gravatar.com/avatar/{0}?s={1}", emailHash, size);
        }
    };
});
