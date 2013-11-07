﻿define([], function () {
    "use strict";

    return kendo.observable ({
        id: kendo.guid(),
        name: "Joe Bag O'Donuts",
        email: "joe.bagodonuts@telerik.com",
        gravatar: "http://www.gravatar.com/avatar/cb1dd14d527aa08f0d983a3d8feb96cd.png",
        createdAt: new Date(2013, 10, 6)
    });

});