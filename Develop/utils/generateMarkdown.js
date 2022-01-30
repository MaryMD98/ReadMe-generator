// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectNAME}
   
hello i am working gitHUBuser?  ${data.gitHUBuser}
hello i am working email?  ${data.email}
hello i am working projectDES?  ${data.projectDES}
hello i am working projectLIC?  ${data.projectLIC}
hello i am working dependencies?  ${data.dependencies}
hello i am working test?  ${data.test}
hello i am working repoMSG?  ${data.repoMSG}
hello i am working contributing?  ${data.contributing}
`;
}

module.exports = generateMarkdown;
