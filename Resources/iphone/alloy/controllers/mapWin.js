function Controller() {
    function back() {
        $.mapWin.close();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "mapWin";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.mapWin = Ti.UI.createWindow({
        backgroundColor: "red",
        id: "mapWin"
    });
    $.__views.mapWin && $.addTopLevelView($.__views.mapWin);
    $.__views.map = Ti.UI.createImageView({
        top: 200,
        left: 10,
        right: 10,
        id: "map",
        image: "images/World-Map.png"
    });
    $.__views.mapWin.add($.__views.map);
    $.__views.back = Ti.UI.createButton({
        backgroundColor: "black",
        bottom: 10,
        left: 10,
        right: 10,
        id: "back",
        title: "Previous Page"
    });
    $.__views.mapWin.add($.__views.back);
    back ? $.__views.back.addEventListener("click", back) : __defers["$.__views.back!click!back"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.back!click!back"] && $.__views.back.addEventListener("click", back);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;