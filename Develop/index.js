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
function init() {}

// Function call to initialize app
init();

// function to write the readme
var generateREADme = (data) =>{
    return ` hello i am working ${data.hello}`
}