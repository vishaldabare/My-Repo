"use strict";
exports.__esModule = true;
exports.Employeedetails = void 0;
var department_1 = require("./department");
var Employeedetails = /** @class */ (function () {
    function Employeedetails(f, l, s, role) {
        this.fname = f;
        this.lname = l;
        this.salary = s;
        this.dept = new department_1.Department(role);
    }
    Employeedetails.prototype.display = function () {
        console.log("\n    First Name :: ".concat(this.fname, "\n    Last Name :: ").concat(this.lname, "\n    Salary    :: ").concat(this.salary, "\n    Role      :: ").concat(this.dept.getJobrole(), "\n    "));
    };
    return Employeedetails;
}());
exports.Employeedetails = Employeedetails;
