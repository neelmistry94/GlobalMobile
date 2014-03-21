function Controller() {
    function back() {
        $.blurbWin.close();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "blurbWin";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.blurbWin = Ti.UI.createWindow({
        backgroundColor: "red",
        id: "blurbWin"
    });
    $.__views.blurbWin && $.addTopLevelView($.__views.blurbWin);
    $.__views.blurb = Ti.UI.createTextField({
        backgroundColor: "white",
        top: 200,
        height: 200,
        left: 10,
        right: 10,
        id: "blurb"
    });
    $.__views.blurbWin.add($.__views.blurb);
    $.__views.back = Ti.UI.createButton({
        backgroundColor: "black",
        bottom: 10,
        left: 10,
        right: 10,
        id: "back",
        title: "Previous Page"
    });
    $.__views.blurbWin.add($.__views.back);
    back ? $.__views.back.addEventListener("click", back) : __defers["$.__views.back!click!back"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.back!click!back"] && $.__views.back.addEventListener("click", back);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;