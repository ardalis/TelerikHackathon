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
        },
        md5: {
            exports: "CryptoJS.MD5"
        }
    }
});

require(["viewModels/index", "radio", "el", "binders/gravatar"], function (viewModels, radio, el) {
    "use strict";

    var global = window,
        mobileSkin = "",
        app = global.app = global.app || {},
        os = kendo.support.mobileOS,
        statusBarStyle = os.ios && os.flatVersion >= 700 ? "black-translucent" : "black";

    global.reqwest = global.reqwest || reqwest;

    document.addEventListener('deviceready', function () {
        navigator.splashscreen.hide();
    }, false);

    app.viewModels = viewModels;

    app.application = new kendo.mobile.Application(document.body, {
        layout: "default-layout",
        statusBarStyle: statusBarStyle,
        transition: "slide"
    });
});