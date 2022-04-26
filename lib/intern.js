const Employee = require("./employee");

class Intern extends Employee{
    constructor(employeeName, id, email, school){
        // the params for the super apply to all employees
        super(employeeName, id, email)
        // the school param applies only to Interns
        this.school = school;
    }
}

module.exports = Intern;