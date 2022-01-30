// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const markdown = require('./utils/generateMarkdown');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    "What is your GitHub username?",
    "What is your email address?",
    "What is your project's name?",
    "Please write a short description of your project.",
    "What kind of license should your project have?",
// ** MIT APACHE BSD NONE missing multiple choice*/
    "what command should be run to install dependencies?",
    "what command should be run to run tests?",
    "what does the user need to know about using the repo?",
    "what does the user need to know about contributing to the repo?"
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,generateREADme(data),
    (error) => error ? console.error(error): console.log("Generating README...."))
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([
            {
                type:'input',
                name: 'gitHUBuser',
                message: questions[0]
            },
            {
                type:'input',
                name: 'email',
                message: questions[1]
            },
            {
                type:'input',
                name: 'projectNAME',
                message: questions[2]
            },
            {
                type:'input',
                name: 'projectDES',
                message: questions[3]
            },
            {
                type:'input',
                name: 'projectLIC',
                message: questions[4]
            },
            {
                type:'input',
                name: 'dependencies',
                message: questions[5]
            },
            {
                type:'input',
                name: 'test',
                message: questions[6]
            },
            {
                type:'input',
                name: 'repoMSG',
                message: questions[7]
            },
            {
                type:'input',
                name: 'contributing',
                message: questions[8]
            },
        ])
        .then((response) =>{
            writeToFile('readtest.md',response);
        })
}

// Function call to initialize app
init();

// function to write the readme
// 'gitHUBuser', 'email', 'projectNAME', 'projectDES', 'projectLIC',
// 'dependencies', 'test', 'repoMSG', 'contributing', 
var generateREADme = (data) =>{
    return ` # heading
    hello i am working gitHUBuser?  ${data.gitHUBuser}
    hello i am working email?  ${data.email}
    hello i am working projectNAME?  ${data.projectNAME}
    hello i am working projectDES?  ${data.projectDES}
    hello i am working projectLIC?  ${data.projectLIC}
    hello i am working dependencies?  ${data.dependencies}
    hello i am working test?  ${data.test}
    hello i am working repoMSG?  ${data.repoMSG}
    hello i am working contributing?  ${data.contributing}`
}

