const Employee = require(".employee");

class Engineer extends Employee{
    constructor(employeeName, id, email, gitHub){
        super(employeeName, id, email)
        this.gitHub = gitHub;
    }
}

module.exports = Engineer;