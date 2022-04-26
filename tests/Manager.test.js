const Manager = require("../lib/manager");
const Employee = require ("../lib/employee");

it("Set office number with constructor arg", () => {
    const officeNum = 555;
    const newMan = new Manager("Steve", 1, "sRogers@gmail.com", 555);
    expect(newMan.officeNumber).toBe(officeNum);
});

// Can get office number
// Role function that returns Manager