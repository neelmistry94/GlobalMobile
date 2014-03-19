function Controller() {
    function back() {
        $.quizWin.close();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "quizWin";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.quizWin = Ti.UI.createWindow({
        backgroundColor: "red",
        id: "quizWin"
    });
    $.__views.quizWin && $.addTopLevelView($.__views.quizWin);
    $.__views.back = Ti.UI.createButton({
        backgroundColor: "black",
        bottom: 10,
        left: 10,
        right: 10,
        id: "back",
        title: "Previous Page"
    });
    $.__views.quizWin.add($.__views.back);
    back ? $.__views.back.addEventListener("click", back) : __defers["$.__views.back!click!back"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.back!click!back"] && $.__views.back.addEventListener("click", back);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;