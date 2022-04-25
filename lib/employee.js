class Employee {
    constructor(employeeName, id, email){
    this.employeeName = employeeName;
    this.id = id;
    this.email = email;
    }

    getName(data){
        employeeName = data.empName;
    }

    getId(data){
        id = data.employeeID;
    }

    getEmail(data){
        email = data.employeeEmail;
    }
}
console.log(Employee)
module.exports = Employee;