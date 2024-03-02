
// TODO: Create a function that returns a license badge based on which license is passed in

// If there is no license, return an empty string
function renderLicenseBadge(license) {
    const badgeURL = {
        'MIT': 'MIT',
        'ISC': 'ISC',
        'MLP 2.0': 'MLP_2.0',
    };
    if (license === 'none') {
        return '';
    } else {
        return `![Github license](https://img.shields.io/badge/License-${badgeURL[license]}-lightblue.svg)`;
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    const licenseURLs = {
        'MIT': 'MIT',
        'ISC': 'ISC',
        'MPL 2.0': 'MPL-2.0',
    };
    if (license === 'none') {
        return '';
    } else {
        return `[License: ${license}](https://opensource.org/licenses/${licenseURLs[license]})`
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license === 'none') {
        return '';
    } else {
        return `[License](#license)`
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    console.log('data received for generatemd function', data);
    return `#${data.title}
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