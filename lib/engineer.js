const Employee = require("./employee");

class Engineer extends Employee{
    constructor(employeeName, id, email, gitHub){
        // the params for the super apply to all employees
        super(employeeName, id, email)
        // the below only applies to Engineers
        this.gitHub = gitHub;
    }
    getRole() {
        return "Engineer";
      }
}

// const martin = new Engineer("Martin", 15-1, "amart", "github")
// console.log(martin);
module.exports = Engineer;