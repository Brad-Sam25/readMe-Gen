// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const mdGenerator = require('./utils/generateMarkdown');
const fs = require('fs');
const axios = require('axios');


inquirer.prompt([
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
        message: "How should I contact you when this is an issue?"
    },
    {
        type: "input",
        name: "github",
        message: "What is your github username?"
    },
    {
        type: "input",
        name: "email",
        message: "Please provide  your email address?"
    }
])
    .then(response => {
        // console.log(response)
        
        let queryUrl = `https://api.github.com/licenses/${response.license}`
        let endUrl = null;

        axios.get(queryUrl)
            .then(res => {
                console.log(res.data.html_url);
                    endUrl = res.data.html_url
                    fs.writeFileSync(`./utils/generateMarkdown.md`,mdGenerator(response, endUrl), err => {
                        if(err) console.log(err)
                        else console.log("Success!")
                    })
            })
    })

