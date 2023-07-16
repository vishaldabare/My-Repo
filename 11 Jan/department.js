"use strict";
exports.__esModule = true;
exports.Department = void 0;
var Department = /** @class */ (function () {
    function Department(r) {
        this.jobrole = r;
    }
    Department.prototype.getJobrole = function () {
        return this.jobrole;
    };
    Department.prototype.setJobrole = function (jobrole) {
        this.jobrole = jobrole;
    };
    return Department;
}());
exports.Department = Department;
