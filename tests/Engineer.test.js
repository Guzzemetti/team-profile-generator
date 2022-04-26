const Engineer = require("../lib/engineer");

it("Set GitHub with the Engineer Class constructor arg", () => {
    const git = "gitHubMaster";
    const eng = new Engineer("Tony", 1, "No1Pl@boy@stark.mail", "gitHubMaster");
    expect(eng.gitHub).toBe(git);
});

// Retrieve GitHub
// Return Engineer
