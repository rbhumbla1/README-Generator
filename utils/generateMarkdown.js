// function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'Apache 2.0':
      license = 'Apache_2.0';
      break;
    case 'BSD 3-Clause':
      license = 'BSD_3--Clause';
      break;
    case 'GPL 3.0':
      license = 'GPL_3.0';
      break;
    default:
      license = license;
      break;
  }
  let badge = `![GitHub License](https://img.shields.io/badge/License-${license}-blue.svg)`;
  return badge;
}

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return 'https://opensource.org/licenses/MIT';
      break;
    case 'Apache 2.0':
      return 'https://opensource.org/licenses/Apache-2.0';
      break;
    case 'GPL 3.0':
      return 'https://opensource.org/licenses/GPL-3.0';
      break;
    case 'BSD 3-Clause':
      return 'https://opensource.org/licenses/BSD-3-Clause';
      break;
    default:
      return '';
      break;
  }
}

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let lic = "";
  if (license === 'None') {
    lic = `## License\n
  This project is not licensed.\n\n`;
  }
  else {
    lic = `## License\n
  This project is licensed under ${license} license.\n\n`;
  }
  return lic;
}

// Function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);

  //add title
  let content = `# ${data.title}\n\n`;

  //add license badge
  let badge = renderLicenseBadge(data.license);
  let link = renderLicenseLink(data.license);
  if (link !== '')
    content += `[${badge}](${link})\n\n`;
  else
    content += `${badge}\n\n`;

  //add description section
  let descr = `## Description\n
  ${data.description}\n\n`;

  content += descr;

  //add table of content section if user wants
  let toc = "";

  if (data.toc === 'yes') {
    toc = `## Table of Contents\n
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Mockup](#mockup)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)\n\n`;

    content += toc;
  }

 //add installation section
  let install = `## Installation\n
  To install necessary dependencies, run the following command:
  \`\`\`
  ${data.installation}
  \`\`\`\n\n`;

  content += install;

  //add usage section
  let use = `## Usage\n
  GitHub Repository: ${data.repolink}\n
  ${data.usage}\n\n`;

  content += use;

  //add license section
  let lic = renderLicenseSection(data.license);

  content += lic;

  //add Mock up section
  let mock = `## Mockup
  * Screenshots of the projects are available here: ${data.sshot}\n\n
  * Walkthrough Video:\n
    ![demo](${data.video})\n\n`;

  content += mock;

  //add contributing section
  let contribute = `## Contributing\n
  ${data.contribution}\n`;

  content += contribute;

  //add tests section
  let tests = `## Tests\n
  To run tests, please run the following command:
  \`\`\`
  ${data.tests}
  \`\`\`\n\n`;

  content += tests;

  //add questions section
  let ques = `## Questions\n
  If you have any questions about the repository and project, or would like to open an issue or would like to contact me for contributing or any other subject, you can do so at ${data.email}. You can welcome to see more ofmy work at ${data.username}. \n\n`;

  content += ques;

  //return the content for readme file
  return content;

}

module.exports = generateMarkdown;


