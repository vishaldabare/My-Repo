"use strict";
exports.__esModule = true;
exports.substract = exports.get = exports.Myclass = void 0;
var Myclass = /** @class */ (function () {
    function Myclass(id, fname, lname) {
        this.id = id;
        this.fname = fname;
        this.lname = lname;
    }
    Myclass.prototype.display = function (a, b) {
        console.log("\n\n        Addition  :: ".concat(a + b, "\n        \n        "));
    };
    return Myclass;
}());
exports.Myclass = Myclass;
var obj = new Myclass(1, "vishal", "dabare");
obj.display(10, 10);
//obj.fname;
obj.id;
//obj.lname;
exports.get = 100;
function substract(c, d) {
    console.log("\n    Substraction :: ".concat(c - d, "\n    "));
}
exports.substract = substract;
