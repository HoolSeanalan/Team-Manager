const inquirer = require('inquirer');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const { generateWebsite } = require('./src/generateWebsite');

//Questions used by inquirer to prompt
const managerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "What is the manager's name?"
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the manager's id?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the manager's email?"
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "What is the manager's office number?"
    }
];

const engineerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "What is the engineer's name?"
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the engineer's id?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the engineer's email?"
    },
    {
        type: 'input',
        name: 'github',
        message: "What is the engineer's GitHub username?"
    }
];

const internQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "What is the intern's name?"
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the intern's id?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the intern's email?"
    },
    {
        type: 'input',
        name: 'school',
        message: "What is the intern's school?"
    }
];

//Array used to store employee objects
let teamMembers = [];

//Initial prompt for manager information
const promptManager = () => {
    inquirer.prompt(managerQuestions).then(answers => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        teamMembers.push(manager);
        promptNewMember();
    });
}

//Prompts user if they would like to add another employee
const promptNewMember = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'memberType',
            message: 'What type of team member would you like to add?',
            choices: ['Engineer', 'Intern', "I don't want to add any more team members"]
        }
    ]).then(answers => {
        switch (answers.memberType) {
            case 'Engineer':
                promptEngineer();
                break;
            case 'Intern':
                promptIntern();
                break;
            default:
                generateWebsite(teamMembers);
                break;
        }
    });
}

//Prompts user for engineer information
const promptEngineer = () => {
    inquirer.prompt(engineerQuestions).then(answers => {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
        teamMembers.push(engineer);
        promptNewMember();
    });
}

//Prompts user for intern information
const promptIntern = () => {
    inquirer.prompt(internQuestions).then(answers => {
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        teamMembers.push(intern);
        promptNewMember();
    });
}

//Initializes program
const init = () => {
    promptManager();
}

//Starts program
init();