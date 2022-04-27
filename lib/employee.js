// The main class that applies to all employees
// This ensures that each employee gets a name, Id and email address and is then passed down to the extended classes
class Employee {
    constructor(employeeName, id, email){
    this.employeeName = employeeName;
    this.id = id;
    this.email = email;
    }

    // getRole() {
    //     return this.constructor.name;
    //   }
      
    getName(){
        return this.employeeName;
    }

    getId(){
        return this.id;
    }

    getEmail(){
        return this.email;
    }
}

module.exports = Employee;



