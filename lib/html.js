const fs = require("fs");
const Engineer = require("./engineer");
const Intern = require("./intern");
const Manager = require("./manager");
// const Employee = require("./employee");
const Path = require("path");

const pageLayout = `
<!doctype html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <script src="./html.js"></script>
    <title>Team Profile</title>
</head>

<body>
    <header class="container-fluid" style="height: 10rem; padding: 3rem; border-bottom: solid black;">
        <h1 class="text-center">My Team</h1>
    </header>
    <div class="container" id="mainDiv">
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
        crossorigin="anonymous"></script>
</body>
</html>`;
// const mainDiv = getElementbyId("mainDiv");
const employeeCard = (data) =>{

const employee = data.school
    ? new Intern(
        data.employeeName,
        data.id,
        data.email,
        data.school)
    : data.officeNumber
    ? new Manager(
        data.employeeName,
        data.id,
        data.email,
        data.officeNumber)
    : data.gitHub
    new Engineer(
        data.employeeName,
        data.id,
        data.email,
        data.gitHub)

        mainDiv.appendChild( 
`<div class="card text-center" style="width: 18rem; margin: 2rem;">
    <div class="card-body">
        <h5 class="card-title">${employee.name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${employee.role}</h6>
        <ul class="list-group">
            <li class="list-group-item">${employee.id}</li>
            <li class="list-group-item">${employee.email}</li>
            <li class="list-group-item">${employee.getRole() === "Intern"
        ? "School: " + employee.school
        : employee.getRole() === "Manager"
        ? "Office #: " + employee.officeNumber
        : "GitHub: " + employee.github}</li>
        </ul>
    </div>
</div>`);
};

const pageDisplay = (data) => {
    let fullPage = pageLayout;
    fullPage += employeeCard(data);
    fs.writeFile(".dist/index.html", pageDisplay, (error) =>
    error ? console.log(error) : console.log("Success!")
    );
}

