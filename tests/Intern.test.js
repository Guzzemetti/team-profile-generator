const Intern = require("../lib/intern");
const Employee = require ("../lib/employee");


it("Set School with constructor arg", () => {
    const school = "schoolzz";
    const int = new Intern("Bucky", 2, "bBarnes@yahoo.com", "schoolzz");
    expect(int.school).toBe(school);
});


// Retrieve School
// Return Intern