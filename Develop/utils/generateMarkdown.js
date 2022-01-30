// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//"MIT","Apache 2.0","GNU GPL 3.0", "OpenBSD","None"
function renderLicenseBadge(license) {
//<img align="right" width="60" alt="MIT Logo" src="../Assets/pictures/MIT-logo.png" >
  if(license === "MIT"){
    return `<img align="right" width="60" alt="MIT Logo" src="../Assets/pictures/MIT-logo.png" >`;
  } else if(license === "Apache 2.0"){
    return `<img align="right" width="100" alt="MIT Logo" src="../Assets/pictures/apache-logo.png" >`;
  } else if(license === "GNU GPL 3.0"){
    return `<img align="right" width="80" alt="MIT Logo" src="../Assets/pictures/GPLv3-Logo.png" >`;
  } else if(license === "OpenBSD"){
    return `<img align="right" width="60" alt="MIT Logo" src="../Assets/pictures/bsd-logo.png" >`;
  } else {// None
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
//## [License](#license)
//
//${data.projectLIC}
//
function generateMarkdown(data) {
  return `
${renderLicenseBadge(data.projectLIC)}

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
