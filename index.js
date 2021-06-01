// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const inq = require('inquirer');
const mdGenerator = require('./utils/generateMarkdown');
const fs = require =('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Provide a small desciption of your project?"
    },
    {
        type: "input",
        name: "installation",
        message: "How should the dependencies be installed via command?"
    },
    {
        type: "input",
        name: "usage",
        message: "What information needs to be displayed for the user?"
    },
    {
        type: "input",
        name: "contributing",
        message: "Please describe the contribution guidelines?"
    },
    {
        type: "input",
        name: "tests",
        message: "Please state how the test should be initiated via command."
    },
    {
        type: "list",
        name: "license",
        message: "Please select the licese you wish your project to have.",
        choices: ["APACHE", "ISC", "MIT", "GPL 3", "None of The Above"]
    },
    {
        type: "input",
        name: "questions",
        message: "How shopuld I contact you when this is an issue?"
    },
    {
        type: "input",
        name: "github",
        message: "What is your github username?"
    },
    {
        type: "input",
        name: "email",
        message: "PLease provide  your email address?"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.genToFile(fileName,data, err => {
        if(err) console.log(err)
        else console.log("Success!")
    })
}

// TODO: Create a function to initialize app
const genFileAsync = mdGenerator.promisify(writeToFile);

function init() {
try {
    let userInput = await inquirer.prompt(questions)
}
}

// Function call to initialize app
init();
