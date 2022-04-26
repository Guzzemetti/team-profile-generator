const write = require("fs");
const inquirer = require("inquirer");
// First prompts that are given upon initiation. This gathers information for the Team Manager
const managerInfo = [
    {
        type: "input",
        name: "empName",
        message: "Please enter the Team Manager's Name:",
        filter: (input) => {
            return input.trim();
        }
    },
    {
        type: "input",
        name: "employeeID",
        message: "Please enter the Team Manager's ID:"
    },
    {
        type: "input",
        name: "employeeEmail",
        message: "Please enter the Team Manager's Email Address:",
        filter: (input) => {
            return input.trim();
        }
    },
    {
        type: "input",
        name: "officeNumber",
        message: "Please enter the Team Manager's Office Number:"
    }
];
// This set of prompts initiate after the managerInfo array has been completed, this is set to loop if the last question is marked as true, allowing us to generate multiple employees
const addingEmployees = async (inputs = []) => {
    const employeeInfoRequest = [
        {
            type: "list",
            name: "employeeRole",
            message: "Please select this Employee's Job Title:",
            choices: ["Intern", "Engineer"]
        },
        {
            type: "input",
            name: "empName",
            message: "Please enter the Name of this Employee:",
            filter: (input) => {
                return input.trim();
            },
            // when(answers) {
            //     return (
            //         answers.employeeRole === 'Engineer' ||
            //         answers.employeeRole === 'Intern'
            //     );
            // }
        },
        {
            type: "input",
            name: "employeeEmail",
            message: "Please enter this Employee's Email Address:",
            filter: (input) => {
                return input.trim();
            },
            // when(answers) {
            //     return (
            //         answers.employeeRole === 'Engineer' ||
            //         answers.employeeRole === 'Intern'
            //     );
            // }
        },
        {
            type: "input",
            name: "employeeID",
            message: "Please enter this Employee's ID:",
            // when(answers) {
            //     return (
            //         answers.employeeRole === 'Engineer' ||
            //         answers.employeeRole === 'Intern'
            //     );
            // }
        },
        {
            type: "input",
            name: "githubLink",
            message: "Please enter this Engineer's GitHub Profile URL:",
            when(answer) {
                return answer.employeeRole === "Engineer"
            },
            filter: (input) => {
                return input.trim();
            }
        },
        {
            type: "input",
            name: "schoolName",
            message: "Please enter this Intern's School Name:",
            when(answer) {
                return answer.employeeRole === "Intern"
            },
            filter: (input) => {
                return input.trim();
            }
        },
        {
            type: "confirm",
            name: "addEmployee",
            message: "Would you like to add another employee?",
        }
    ];


    const { addEmployee, ...answers } = await inquirer.prompt(employeeInfoRequest);
    // Stringifies the answers for the employeeInputs array and then pushes them into the overal array that we pull data from
    const employeeInputs = JSON.stringify(answers) === `{}` ? inputs : [...inputs, answers];
    // Checks the answer to the last question in the employeeInputs array. If false, the prompts stop, if true, it loops through the prompts again
    return addEmployee === false ? employeeInputs : addingEmployees(employeeInputs);
};


// Initiates functions to propt users to input employee information
const init = () => {
    inquirer.prompt(managerInfo)
        .then((results) => {
            return addingEmployees([results]);
        })
        .then((data) => {
            generateHtml(data);
        })
        .catch((err) => {
            console.log(err);
        })
};

init();