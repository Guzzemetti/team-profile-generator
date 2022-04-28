# team-profile-generator
---

## Table of Contents
  * [Objective](#objective)
  * [Usage](#usage)
  * [Contributors](#contributors)
  * [Contact](#contact)
  * [Repository](#repository)
  * [Demonstration](#demonstration)

---
## Objective

```md
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```

---

## Usage
To install this program, please copy the below SSH Link to clone it to your machine. Once cloned, you should then use your command terminal and enter "node index.js", this will initiate the main script. 

`git@github.com:Guzzemetti/team-profile-generator.git`

After initiating the index.js, the user will be prompted to selec the Manager role and subsequnetly be asked to fill in information pertinent to filling out the manager card for the team page. 

Once the manager prompts are completed, the user will then be prompted to add a second employee, by being asked to select from an "Intern" or "Engineer" option. After the first employee (not inlcuding the manager) has been entered into the system, the user will have the option to add another employee or to stop the script. 

Once the script has been stopped, the html.js file will write the html for a dynamic webpage which can be accessible through the dist folder.

---

## Contributors

John Guzzetta

---
## Contact

Email: johnguzzettaiv@gmail.com

GitHub: [Guzzemetti](#https://github.com/Guzzemetti/)

---
## Repository

`https://github.com/Guzzemetti/readme-generator`

---
## Demonstration

https://drive.google.com/file/d/1HKSp1e6pk8t6lbeMb30--V5p1WgkEmuJ/view