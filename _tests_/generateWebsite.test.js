const { generateHTMLText, generateEmployeeCards } = require('../src/generateWebsite');

const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

test('Tests generateHTMLText()', () => {
    expect(generateHTMLText()).toBe(
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
            <div class="row">
            </div>
        </div>
    </body>
    </html>`);
});

test('Tests generateEmployeeCards()', () => {
    let testMembers = [
        testManager = new Manager("John Manager Doe", 4, "ManagerDoe@gmail.com", 100),
        testEngineer = new Engineer("John Engineer Doe", 2, "EngineerDoe@gmail.com", "EngineerDoe"),
        testIntern = new Intern("John Intern Doe", 3, "InternDoe@gmail.com", "UC Berkeley")
    ];

    let expectedCards = [
        `<div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">John Manager Doe</h5>
                <h6 class="card-subtitle mb-2 text-muted">Manager</h6>
                <p class="card-text">ID: 4</p>
                <p class="card-text">Email: <a href="mailto: ManagerDoe@gmail.com">ManagerDoe@gmail.com</a></p>
                <p class="card-text">Office Number: 100</p>
            </div>
        </div>`,
        `<div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">John Engineer Doe</h5>
                <h6 class="card-subtitle mb-2 text-muted">Engineer</h6>
                <p class="card-text">ID: 2</p>
                <p class="card-text">Email: <a href="mailto: EngineerDoe@gmail.com">EngineerDoe@gmail.com</a></p>
                <p class="card-text">GitHub: <a href="https://github.com/EngineerDoe">EngineerDoe</a></p>
            </div>
        </div>`,
        `<div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">John Intern Doe</h5>
                <h6 class="card-subtitle mb-2 text-muted">Intern</h6>
                <p class="card-text">ID: 3</p>
                <p class="card-text">Email: <a href="mailto: InternDoe@gmail.com">InternDoe@gmail.com</a></p>
                <p class="card-text">School: UC Berkeley</p>
            </div>
        </div>`];

    expect(generateEmployeeCards(testMembers)).toStrictEqual(expectedCards);
});