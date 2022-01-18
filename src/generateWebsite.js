const fs = require('fs');

const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

//Calls other methods to generate the HTML file using an array of employee objects
const generateWebsite = teamMembers => {
    let employeeCards = generateEmployeeCards(teamMembers);
    let htmlText = generateHTMLText(employeeCards);
    writeHTMLFile(htmlText);
}

//Uses the fs module to write the paramater string to an HTML file in the dist folder
const writeHTMLFile = htmlText => {
    fs.writeFile("./dist/team.html", htmlText, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    });
}

//Generates the HTML text for the HTML file using an array of html strings
const generateHTMLText = employeeCards => {
    employeeCards = employeeCards || [];
    let html =
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <title>Team Profile</title>
    </head>
    <body style="background-color: #202124">
        <div class="container">
            <div class="row">
                <div class="col-sm">
                    <h1 style="color: white;">My Team</h1>
                </div>
            </div>
            <div class="row">${employeeCards.join("")}
            </div>
        </div>
    </body>
    </html>`;
    return html;
}

//Generates the HTML text for each employee card using each employee object in an array
const generateEmployeeCards = teamMembers => {
    teamMembers = teamMembers || [];
    let employeeCards = [];

    for (let i = 0; i < teamMembers.length; i++) {
        let employee = teamMembers[i];
        let roleSpecific;
        switch (employee.getRole()) {
            case "Manager":
                roleSpecific = `<p class="card-text">Office Number: ${employee.getOfficeNumber()}</p>`;
                break;
            case "Engineer":
                roleSpecific = `<p class="card-text">GitHub: <a href="https://github.com/${employee.getGitHub()}">${employee.getGitHub()}</a></p>`;
                break;
            case "Intern":
                roleSpecific = `<p class="card-text">School: ${employee.getSchool()}</p>`;
                break;
        };
        let employeeCard =
        `<div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${employee.getName()}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${employee.getRole()}</h6>
                <p class="card-text">ID: ${employee.getId()}</p>
                <p class="card-text">Email: <a href="mailto: ${employee.getEmail()}">${employee.getEmail()}</a></p>
                ${roleSpecific}
            </div>
        </div>`;
        employeeCards.push(employeeCard);
    }
    return employeeCards;
}

module.exports = {
    generateWebsite: generateWebsite,
    generateHTMLText: generateHTMLText,
    generateEmployeeCards: generateEmployeeCards
}