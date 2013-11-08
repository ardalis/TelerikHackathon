define([], function () {
    "use strict";

    var client = new WindowsAzure.MobileServiceClient(
        "https://gamekeeper.azure-mobile.net/",
        "ZgGvfoafTTwUmMfqWXBNnObqSJsfeL31"
    );
    return client;
});