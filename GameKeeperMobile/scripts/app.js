/** 
Everlive Credentials:

Application Name: GameKeeper
API Key: syRNNMNu6044zxPT

**/
require([], function () {
    "use strict";

    var global = window,
        mobileSkin = "",
        app = global.app = global.app || {},
        os = kendo.support.mobileOS,
        statusBarStyle = os.ios && os.flatVersion >= 700 ? "black-translucent" : "black";

    document.addEventListener('deviceready', function () {
        navigator.splashscreen.hide();
    }, false);

    app.application = new kendo.mobile.Application(document.body, {
        layout: "tabstrip-layout",
        statusBarStyle: statusBarStyle,
        skin: "flat"
    });
});