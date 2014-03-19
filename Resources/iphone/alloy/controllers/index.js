function Controller() {
    function openWindow1() {
        var blurbWin = Alloy.createController("blurbWin").getView();
        blurbWin.open();
    }
    function openWindow2() {
        var quizWin = Alloy.createController("quizWin").getView();
        quizWin.open();
    }
    function openWindow3() {
        var mapWin = Alloy.createController("mapWin").getView();
        mapWin.open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "red",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.banner = Ti.UI.createImageView({
        top: 30,
        id: "banner",
        image: "images/GlobalComm-horiz-new.png"
    });
    $.__views.index.add($.__views.banner);
    $.__views.map1 = Ti.UI.createImageView({
        top: 100,
        left: 10,
        right: 10,
        id: "map1",
        image: "images/0214map.jpg"
    });
    $.__views.index.add($.__views.map1);
    $.__views.blurbButton = Ti.UI.createButton({
        backgroundColor: "black",
        top: 400,
        left: 10,
        right: 10,
        id: "blurbButton",
        title: "What Is Globalization?"
    });
    $.__views.index.add($.__views.blurbButton);
    openWindow1 ? $.__views.blurbButton.addEventListener("click", openWindow1) : __defers["$.__views.blurbButton!click!openWindow1"] = true;
    $.__views.quizButton = Ti.UI.createButton({
        backgroundColor: "black",
        top: 450,
        left: 10,
        right: 10,
        id: "quizButton",
        title: "How Global Are You?"
    });
    $.__views.index.add($.__views.quizButton);
    openWindow2 ? $.__views.quizButton.addEventListener("click", openWindow2) : __defers["$.__views.quizButton!click!openWindow2"] = true;
    $.__views.mapButton = Ti.UI.createButton({
        backgroundColor: "black",
        top: 500,
        left: 10,
        right: 10,
        id: "mapButton",
        title: "Interactive Map"
    });
    $.__views.index.add($.__views.mapButton);
    openWindow3 ? $.__views.mapButton.addEventListener("click", openWindow3) : __defers["$.__views.mapButton!click!openWindow3"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    __defers["$.__views.blurbButton!click!openWindow1"] && $.__views.blurbButton.addEventListener("click", openWindow1);
    __defers["$.__views.quizButton!click!openWindow2"] && $.__views.quizButton.addEventListener("click", openWindow2);
    __defers["$.__views.mapButton!click!openWindow3"] && $.__views.mapButton.addEventListener("click", openWindow3);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;