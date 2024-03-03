// function returns license badge for selected license
function renderLicenseBadge(license) {
    console.log('License:', license);
    // map key and value based on license selected
    const badgeURL = {
        'MIT': 'MIT-yellow',
        'ISC': 'ISC-blue',
        'MPL 2.0': 'MPL_2.0-brightgreen',
    };
    //no license, return empty string
    if (license === 'none') {
        return '';
    } else {
        return `![License: ${license}](https://img.shields.io/badge/License-${badgeURL[license]}.svg)`
    }
}

// returns link for selected license
function renderLicenseLink(license) {
    // map key and value for license selected
    const licenseURLs = {
        'MIT': 'MIT',
        'ISC': 'ISC',
        'MPL 2.0': 'MPL-2.0',
    };
    // no license, return empty string
    if (license === 'none') {
        return '';
    } else {
        return `[License: ${license}](https://opensource.org/licenses/${licenseURLs[license]})`
    }
}

// returns the license section of README
function renderLicenseSection(license) {
    // no license, return empty string
    if (license === 'none') {
        return '';
    } else {
        return `[License](#license)`
    }
}

// generates markdown for README
function generateMarkdown(data) {
    // return template literal with data from input
    return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* ${renderLicenseSection(data.license)}
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
Visit the live URL here: [${data.installation}](${data.installation})

## Usage
${data.usage}

[${data.screenshot}](${data.image})

## License
${renderLicenseLink(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
${data.questions}

Github - [${data.github}](https://github.com/${data.github})

For additional questions, you may contact me at ${data.email}.
`;
}

module.exports = generateMarkdown;