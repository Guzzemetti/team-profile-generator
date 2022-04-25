const inquirer = require("inquirer")
// Initial prompts that apply to all employees
const employeeInfoRequest = [
    {
        type: "input",
        name: "employeeName",
        message: "Please enter the name of this employee"
    },
    {
        type: "list",
        name: "employeeRole",
        message: "Please select their role",
        choices: ["Intern", "Engineer", "Manager"]
    },
    {
        type: "input",
        name: "employeeEmail",
        message: "Please enter their email address"
    },
    {
        type: "input",
        name: "employeeID",
        message: "Please enter their employee ID"
    }
];
// Prompt for engineers
const githubRequest = [
    {
        type: "input",
        name: "githubLink",
        message: "Please enter the URL to your GitHub Profile"
    },
];
// Prompt for interns
const schoolRequest = [
    {
        type: "input",
        name: "schoolName",
        message: "Please enter the name of the School they attend"
    },
];
// Prompt for manager
const officeNumberReq = [
    {
        type: "input",
        name: "officeNumber",
        message: "Please enter their office phone number"
    },
]
// Function to prompt user to fill out the employeeInfoRequest request
function roleInfo() {
    inquirer.prompt(employeeInfoRequest)
        // Depending on what role the employee falls under, they get prompted with an additional question specific to their role
        .then(employeeInfoRequest => {
            if (employeeInfoRequest.employeeRole === "Engineer") {
                inquirer.prompt(githubRequest);
            }
            if (employeeInfoRequest.employeeRole === "Intern") {
                inquirer.prompt(schoolRequest);
            }
            if (employeeInfoRequest.employeeRole === "Manager") {
                inquirer.prompt(officeNumberReq);
            }
        });
};
roleInfo();