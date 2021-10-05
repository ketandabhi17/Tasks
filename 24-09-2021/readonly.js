var Employee = /** @class */ (function () {
    function Employee(code, name) {
        this.empCode = code;
        this.empName = name;
    }
    return Employee;
}());
var emp = new Employee(10, "ketan");
// emp.empCode = 20; //Compiler Error
emp.empName = 'dabhi';
console.log(emp.empName);
