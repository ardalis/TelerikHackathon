/** 
Everlive Credentials:

Application Name: GameKeeper
API Key: syRNNMNu6044zxPT

**/
require.config({
    paths: {
        radio: "radio.min"
    },
    shim: {
        radio: {
            exports: "radio"
        }
    }
});

require(["gravatar", "radio"], function (gravatar, radio) {
    "use strict";

    var global = window,
        mobileSkin = "",
        app = global.app = global.app || {},
        os = kendo.support.mobileOS,
        statusBarStyle = os.ios && os.flatVersion >= 700 ? "black-translucent" : "black";

    document.addEventListener('deviceready', function () {
        navigator.splashscreen.hide();
    }, false);

    app.home = {
        viewModel: kendo.observable({
            testGravatarUrl: gravatar.getImageUrlForEmail("Chris.wagner@telerik.com")
        })
    };

    app.application = new kendo.mobile.Application(document.body, {
        layout: "default-layout",
        statusBarStyle: statusBarStyle
    });
});