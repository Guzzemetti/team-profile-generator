const Manager = require("../lib/manager");
const Employee = require ("../lib/employee");

describe("Set office number with constructor arg", () => {
    const officeNum = officeNum;
    const newMan = new Manager("Steve", 1, "sRogers@gmail.com", officeNumber);
    expect(newMan.officeNumber).toBe(officeNum);
});

// Can get office number
// Role function that returns Manager