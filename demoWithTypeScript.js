function additionWithTypeScript(a, b) {
    return a + b;
}
var outputWithTypeScript = additionWithTypeScript(1, 3);
console.log(outputWithTypeScript);
var empinfo = /** @class */ (function () {
    function empinfo(Emploeeid, employeeLocation, skilInfo) {
        this.empid = Emploeeid;
        this.empLocation = employeeLocation;
        this.skillSet = skilInfo;
    }
    empinfo.prototype.addSkillSet = function (skillInfo) {
        this.skillSet.push(skillInfo);
    };
    return empinfo;
}());
var Emp1 = new empinfo(12345, 'Hyderabad', ['Angular']);
console.log(Emp1.empLocation);
console.log('before');
console.log(Emp1.skillSet);
Emp1.addSkillSet('React');
console.log('after');
console.log(Emp1.skillSet);
var emp2;
emp2 = {
    empid: 11111,
    empLocation: 'bangalore',
    skillSet: ['.net core']
};
console.log(emp2.empLocation);
