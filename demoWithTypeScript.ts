function additionWithTypeScript(a: number, b: number) {

    return a + b;
}

var outputWithTypeScript = additionWithTypeScript(1, 3);

console.log(outputWithTypeScript);


class empinfo {

    empid: number;
    empLocation: string;
    skillSet: string[];

    constructor(Emploeeid: number, employeeLocation: string, skilInfo: string[]) {

        this.empid = Emploeeid;
        this.empLocation = employeeLocation;
        this.skillSet = skilInfo;

    }

    addSkillSet(skillInfo: string) {

        this.skillSet.push(skillInfo);
    }



}

const Emp1 = new empinfo(12345, 'Hyderabad', ['Angular']);

console.log(Emp1.empLocation);

console.log('before');
console.log(Emp1.skillSet);

Emp1.addSkillSet('React');

console.log('after');
console.log(Emp1.skillSet);


interface IEmpInfo{
    empid: number;
    empLocation: string;
    skillSet: string[];   
}

let emp2:IEmpInfo;

emp2 = {

    empid:11111,
    empLocation:'bangalore',
    skillSet:['.net core']
}

console.log(emp2.empLocation);

const addmethod2 = (a:number,b:number)=>{
    return a+b;
}

const addmethod3 = (a:number,b:number) => a+b;