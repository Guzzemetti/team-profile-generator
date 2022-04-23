const Intern = require("../lib/intern");
const Employee = require ("../lib/employee");


describe("Set School with constructor arg", () => {
    const school = sName;
    const int = new Intern("Bucky", 2, "bBarnes@yahoo.com", school);
    expect(int.school).toBe(sName);
});


// Retrieve School
// Return Intern