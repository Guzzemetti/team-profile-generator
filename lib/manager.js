const Employee = require("./employee");

class Manager extends Employee{
    constructor(employeeName, id, email, officeNumber){
        // the params for the super apply to all employees
        super(employeeName, id, email)
        // the office number param only applies to the manager
        this.officeNumber = officeNumber;
    }
    getRole() {
        return "Manager"
      }
}

module.exports = Manager;