const starter = require("../index");
const employeeCards = [];

function pageDisplay(employeeList){
    console.log(employeeList)
    employeeList.forEach(() => {
        if(newEmployee.getRole() === "Intern"){
            internCard(newEmployee)
        }
        if(newEmployee.getRole() === "Engineer"){
            engineerCard(newEmployee)
        }
        if(newManager.getRole() === "Manager"){
            managerCard(newManager)
        }
    }
)

return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
    <link rel="stylesheet" href="./style.css">
    <title>Team Profiles</title>
</head>
<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron bg-danger text-white mb-3 team-heading">
                <h1 class="text-center">Work Force</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="team-area col-12 d-flex justify-content-center">
                <div class="card-deck pt-4 d-flex justify-content-center">
                    
                ${employeeCards.join('')}

                </div> 
            </div>
        </div>
    </div>
</body>
</html>`};

// The below are the functions that create the employee cards that display on the HTML.

// Manager Card
function managerCard(Manager) {
    employeeCards.push(
    `<div class="card text-center" style="width: 18rem; margin: 2rem;">
    <div class="card-body">
        <h5 class="card-title">${Manager.employeeName}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${Manager.getRole()}</h6>
        <ul class="list-group">
            <li class="list-group-item">Id: ${Manager.id}</li>
            <li class="list-group-item">Email: ${Manager.email}</li>
            <li class="list-group-item">Office #${Manager.officeNumber}</li>
        </ul>
    </div>
</div>`
)};

// Intern Card
function internCard(Intern) {
    employeeCards.push( `<div class="card text-center" style="width: 18rem; margin: 2rem;">
    <div class="card-body">
        <h5 class="card-title">${Intern.employeeName}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${Intern.getRole()}</h6>
        <ul class="list-group">
            <li class="list-group-item">Id: ${Intern.id}</li>
            <li class="list-group-item">Email: ${Intern.email}</li>
            <li class="list-group-item">School: ${Intern.school}</li>
        </ul>
    </div>
</div>`
)};

// Engineer Card
function engineerCard(Engineer) {
    employeeCards.push( `<div class="card text-center" style="width: 18rem; margin: 2rem;">
    <div class="card-body">
        <h5 class="card-title">${Engineer.employeeName}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${Engineer.getRole()}</h6>
        <ul class="list-group">
            <li class="list-group-item">Id: ${Engineer.id}</li>
            <li class="list-group-item">Email: ${Engineer.email}</li>
            <li class="list-group-item">Github: ${Engineer.gitHub}</li>
        </ul>
    </div>
</div>`
)};


module.exports = pageDisplay;