const Engineer = require("../lib/engineer");
const Employee = require ("../lib/employee");


describe("Set GitHub with constructor arg", () => {
    const git = gVal;
    const eng = new Engineer("Tony", 1, "No1Pl@boy@stark.mail", git);
    expect(eng.git).toBe(gVal);
});

// Retrieve GitHub
// Return Engineer
