// TODO: Create a function to generate markdown for README
function generateMarkdown(data, license) {
  let licenseText;
  let licenseBadge;

  console.log(license);

  if(license) {
    licenseText = license 
  } else {
    licenseText = "No licese was found for this url"
  }

  if(data.license === "MIT") {
    licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  } else if (data.license === "APACHE") {
    licenseBadge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  } else if (data.license === "ISC") {
    licenseBadge = "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"
  } else if (data.license === "GPL 3") {
    licenseBadge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
  } else {
    licenseBadge = null;
  }

  return `# ${data.title}
  ## Table of Contents
  * [Repository Description](#description)
  * [Installation Instructions](#installation)
  * [Usage Information](#usage)
  *[Contribution Guidelines](#contributing)
  * [Test Instructions](#tests)
  * [Screenshots](#Screenshots)
  * [License](#license)
  * [Questions](#Questions)

  ##Repository Description
  ${data.description}
  ##Installation
  ${data.installation}
  ##Usage
  ${data.usage}
  ##Contributing
  ${data.contributing}
  ##Tests
  ${data.tests}
  ##Screenshots
  ##License
  ${data.license}
  ${licenseText}
  ${licenseBadge}
  ###Questions
  Please feel free to contact me via email at ${data.email} or view more projects via github ${data.github}!
`;
}

module.exports = generateMarkdown;
