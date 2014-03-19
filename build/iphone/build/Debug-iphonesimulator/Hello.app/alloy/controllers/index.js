function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "red",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.banner = Ti.UI.createImageView({
        top: 20,
        id: "banner",
        image: "images/GlobalComm-horiz-new.png"
    });
    $.__views.index.add($.__views.banner);
    $.__views.map1 = Ti.UI.createImageView({
        top: 80,
        left: 10,
        right: 10,
        id: "map1",
        image: "images/0214map.jpg"
    });
    $.__views.index.add($.__views.map1);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;