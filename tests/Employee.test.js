const Employee = require("../lib/employee");

// Establishes that Employee is an object
describe("Employee", () => {
    it("Baseline employee class", () => {
        const e = new Employee();
        expect(typeof(e)).toBe("object");
    })
});
// Tests the employee name parameter
it("Sets the employee name", () => {
    const name = "John";
    const e = new Employee("John");
    expect(e.employeeName).toBe(name);
});

// Tests the employee ID parameter
it("Sets the employee ID", () => {
    const id = 12;
    const e = new Employee("John", 12);
    expect(e.id).toBe(id)
})

// Tests the employee email address parameter
it("Sets the employee email address", () => {
    const email = "jGuzz@yahoo.com";
    const e = new Employee("John", 12, "jGuzz@yahoo.com");
    expect(e.email).toBe(email)
})

