const Engineer = require("../lib/engineer");
const Employee = require ("../lib/employee");


it("Set GitHub with constructor arg", () => {
    const git = "gitHubMaster";
    const eng = new Engineer("Tony", 1, "No1Pl@boy@stark.mail", "gitHubMaster");
    expect(eng.gitHub).toBe(git);
});

// Retrieve GitHub
// Return Engineer
