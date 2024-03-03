// packages needed for application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Type in a description of your project.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Enter Deployed App URL Here.',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Enter Technology Usage Information.',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Enter URL or path to image you would like to include in your README',
        name: 'image',
    },
    {
        type: 'input',
        message: 'Enter a short description of the image',
        name: 'screenshot',
    },
    {
        type: 'rawlist',
        message: 'Please select a license for this project.',
        choices: ['none', 'MIT', 'ISC', 'MPL 2.0'],
        name: 'license',
    },
    {
        type: 'input',
        message: 'List contributers here (use Github usernames).',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'Enter tests.',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'Enter Questions Here',
        name: 'questions',
    },
    {
        type: 'input',
        message: 'Enter Your Github Username',
        name: 'github',
    },
    {
        type: 'input',
        message: 'Enter Your Email',
        name: 'email',
    },
];

// function to write README file
function writeToFile() {
    inquirer
        .prompt(questions)
        .then((response) => {
            const markdown = generateMarkdown(response)
            fs.writeFileSync("./utils/README.md", markdown);
            console.log(`README.md file generated successfully!`);
        })
        .catch((err) => {
            console.error(`Error generating README.md file`, err);
        })
}

// function to initialize app
function init() {
    // call writeToFile function
    writeToFile();
}


// Function call to initialize app
init();

module.exports = questions