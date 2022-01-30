// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const Markdown = require('./utils/generateMarkdown');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type:'input',
        name: 'gitHUBuser',
         message: "What is your GitHub username?"
    },
    {
        type:'input',
        name: 'email',
        message: "What is your email address?"
    },
    {
        type:'input',
        name: 'projectNAME',
        message: "What is your project's name?"
    },
    {
        type:'input',
        name: 'projectDES',
        message: "Please write a short description of your project."
    },
    {
        type:'list',
        name: 'projectLIC',
        message: "What kind of license should your project have?",
        choices: ["MIT","Apache 2.0","GNU GPL 3.0", "OpenBSD","None"]
    },
    {
        type:'input',
        name: 'dependencies',
        message: "what command should be run to install dependencies?"
    },
    {
        type:'input',
        name: 'test',
        message: "what command should be run to run tests?"
    },
    {
        type:'input',
        name: 'repoMSG',
        message: "what does the user need to know about using the repo?"
    },
    {
        type:'input',
        name: 'contributing',
        message: "what does the user need to know about contributing to the repo?"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, Markdown(data),
    (error) => error ? console.error(error): console.log("Generating README...."))
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((response) =>{
            writeToFile('readtest.md',response);
        })
}

// Function call to initialize app
init();
