const write = require("fs");
const inquirer = require("inquirer");

// TODOS
// Need to re-write prompt arrays
// Make one array for Manager questions, this will run once
// Create a second array for employee prompts, using the "when" function below to display certain prompts only when the specific role is determined
// use the blog linked to loop through the array repeatedly


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
            when(answers) {
                return (
                    answers.employeeRole === 'Engineer' ||
                    answers.employeeRole === 'Intern'
                );
            }
        },
        {
            type: "input",
            name: "employeeEmail",
            message: "Please enter this Employee's Email Address:",
            filter: (input) => {
                return input.trim();
            },
            when(answers) {
                return (
                    answers.employeeRole === 'Engineer' ||
                    answers.employeeRole === 'Intern'
                );
            }
        },
        {
            type: "input",
            name: "employeeID",
            message: "Please enter this Employee's ID:",
            when(answers) {
                return (
                    answers.employeeRole === 'Engineer' ||
                    answers.employeeRole === 'Intern'
                );
            }
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
    const employeeInputs = JSON.stringify(answers) === `{}` ? inputs : [...inputs, answers];
    return addEmployee === false ? employeeInputs : addingEmployees(employeeInputs);
};

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





// Function to prompt user to fill out the employeeInfoRequest request
// function roleInfo() {
//     inquirer.prompt(employeeInfoRequest)
//         // Depending on what role the employee falls under, they get prompted with an additional question specific to their role
//         .then(data => {
//             if (data.employeeRole === "Engineer") {
//                 inquirer.prompt(githubRequest);
//             }
//             if (data.employeeRole === "Intern") {
//                 inquirer.prompt(schoolRequest);
//             }
//             if (data.employeeRole === "Manager") {
//                 inquirer.prompt(officeNumberReq);
//             }
//         })
//         .then((data) => {write(data)})
// };
// roleInfo();