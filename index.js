const inquirer = require("inquirer")

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
const githubRequest = [
    {
        type: "input",
        name: "githubLink",
        message: "Please enter the URL to your GitHub Profile"
    },
];
const schoolRequest = [
    {
        type: "input",
        name: "schoolName",
        message: "Please enter the name of the School they attend"
    },
];
const officeNumberReq = [
    {
        type: "input",
        name: "officeNumber",
        message: "Please enter their office phone number"
    },
]