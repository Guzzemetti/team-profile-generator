const Employee = require("../lib/employee");

// Establishes that Employee is an object
describe("Employee", () => {
    it("Baseline employee class", () => {
        const e = new Employee();
        expect(typeof(e)).toBe("object");
    })
});
// Establishes the employee name
it("Sets the employee name", () => {
    const name = "John";
    const e = new Employee("John");
    expect(e.employeeName).toBe(name);
});

// Establishes the name and ID
it("Sets the employee ID", () => {
    const id = 12;
    const e = new Employee("John", 12);
    expect(e.id).toBe(id)
})

// Establishes the email address
it("Sets the employee email address", () => {
    const email = "jGuzz@yahoo.com";
    const e = new Employee("John", 12, "jGuzz@yahoo.com");
    expect(e.email).toBe(email)
})