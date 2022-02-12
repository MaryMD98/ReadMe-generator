// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//"MIT","Apache 2.0","GNU GPL 3.0", "OpenBSD","None"
function renderLicenseBadge(license) {
//<img align="right" width="100" alt="MIT Logo" src="../Assets/pictures/apache-logo.png" >
switch(license){
  case "MIT":
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  case "Apache 2.0":
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  case "GNU GPL 3.0":
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
  case "OpenBSD":
    return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
  default:// None
    return " ";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  switch(license){
    case "MIT":
      return "https://opensource.org/licenses/MIT";
    case "Apache 2.0":
      return "https://www.apache.org/licenses/LICENSE-2.0";
    case "GNU GPL 3.0":
      return "https://www.gnu.org/licenses/gpl-3.0.en.html";
    case "OpenBSD":
      return "https://opensource.org/licenses/BSD-3-Clause";
    default:
      return " ";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  switch(license){
    case "MIT":
      return `## [License](#license)

[MIT](${renderLicenseLink(license)}) License.`;

    case "Apache 2.0":
      return `## [License](#license)

[Apache 2.0](${renderLicenseLink(license)}) License.`;

    case "GNU GPL 3.0":
      return `## [License](#license)

[GNU GPL 3.0](${renderLicenseLink(license)}) License.`;

    case "OpenBSD":
      return `## [License](#license)

[BSD](${renderLicenseLink(license)}) License.`;

    default:
      return `## [License](#license)`;
  }
}

// TODO: Create a function to generate markdown for README
// 'gitHUBuser', 'email', 'projectNAME', 'projectDES', 'projectLIC',
// 'dependencies', 'test', 'repoMSG', 'contributing',
function generateMarkdown(data) {
  return `
${renderLicenseBadge(data.projectLIC)}

# ${data.projectNAME}

## [Description](#description)

${data.projectDES}

### Link to application:
Here is a screencapture video demostrating the functionality of the [application](). If this link does not work, you can try [this one]().

To deploy the application, I am using Heroku. Here is the Link to the deployment of the [application]().

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

### Screenshot of Employee Tracker Comand Lines:
![image of ](./screenshots/Screenshot1.png)
![image of ](./screenshots/Screenshot2.png)

${renderLicenseSection(data.projectLIC)}

## [Contributing](#contributing)

${data.contributing}

## [Questions](#questions)

If you have any questions about the repo, or would like to contact me directly, 
here is my email: ${data.email}. You can find more of my work at [Maribel Montes](https://github.com/${data.gitHUBuser}).

`;
}

module.exports = generateMarkdown;
