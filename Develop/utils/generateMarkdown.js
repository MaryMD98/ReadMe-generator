// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//"MIT","Apache 2.0","GNU GPL 3.0", "OpenBSD","None"
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `## [License](#license)

${license}`;
}

// TODO: Create a function to generate markdown for README
// 'gitHUBuser', 'email', 'projectNAME', 'projectDES', 'projectLIC',
// 'dependencies', 'test', 'repoMSG', 'contributing',
//## [License](#license)
//
//${data.projectLIC}
//
function generateMarkdown(data) {
  return `
<img align="right" width="60" alt="MIT Logo" src="../Assets/pictures/MIT-logo.png" >

# ${data.projectNAME}

## [Description](#description)

${data.projectDES}

## Table of Content

* [Description](#description)
* [Installation](#installation)
* [Test](#test)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Questions](#questions)

## [Installation](#installation)
To initialie, run the following command.

    ${data.dependencies}

## [Test](#test)
To run tests, run the following command

    ${data.test}

## [Usage](#usage)

${data.repoMSG}

${renderLicenseSection(data.projectLIC)}

## [Contributing](#contributing)

${data.contributing}

## [Questions](#questions)

If you have any questions about the repo, open an issue or would like to contact me directly at ${data.email}. You cn find more of my work at [Maribel Montes](https://github.com/${data.gitHUBuser}).

`;
}

module.exports = generateMarkdown;
