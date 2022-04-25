const inquirer = require("inquirer")
// Initial prompts that apply to all employees
const employeeInfoRequest = [
    {
        type: "input",
        name: "empName",
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
    {
        type: "confirm",
        name: "addEmployee",
        message: "Would you like to add another employee?"
    }
];
// Prompt for interns
const schoolRequest = [
    {
        type: "input",
        name: "schoolName",
        message: "Please enter the name of the School they attend"
    },
    {
        type: "confirm",
        name: "addEmployee",
        message: "Would you like to add another employee?"
    }
];
// Prompt for manager
const officeNumberReq = [
    {
        type: "input",
        name: "officeNumber",
        message: "Please enter their office phone number"
    },
    {
        type: "confirm",
        name: "addEmployee",
        message: "Would you like to add another employee?"
    }
]
// Function to prompt user to fill out the employeeInfoRequest request
function roleInfo(data) {
    inquirer.prompt(employeeInfoRequest)
        // Depending on what role the employee falls under, they get prompted with an additional question specific to their role
        .then(data => {
            if (data.employeeRole === "Engineer") {
                inquirer.prompt(githubRequest);
            }
            if (data.employeeRole === "Intern") {
                inquirer.prompt(schoolRequest);
            }
            if (data.employeeRole === "Manager") {
                inquirer.prompt(officeNumberReq);
            }  
        })
        return data;
};
roleInfo();


// async function addEmployee(data) {
//     await roleInfo(data)
//     .then(data => {
//         if (data.addEmployee === true) {
//             inquirer.prompt(employeeInfoRequest);
// }});
// }

