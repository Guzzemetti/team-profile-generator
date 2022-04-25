class Employee {
    constructor(employeeName, id, email){
    this.employeeName = employeeName;
    this.id = id;
    this.email = email;
    }

    getRole() {
        return this.constructor.name;
      }
      
    getName(data){
        employeeName = data.empName;
        return this.employeeName;
    }

    getId(data){
        id = data.employeeID;
        return this.id;
    }

    getEmail(data){
        email = data.employeeEmail;
        return this.email;
    }
}

module.exports = Employee;



