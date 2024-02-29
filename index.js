// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
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
        message: 'Enter Table of Contents.',
        name: 'contents',
    },
    {
        type: 'input',
        message: 'Enter Installation Information.',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Enter Technology Usage Information.',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Enter License Here.',
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
        name: 'name',
    },
    {
        type: 'input',
        message: 'Enter Your Email',
        name: 'email',
    },
];
// readme needs
// title of project
// description
// table of contents
// installation
// usage
// license
// contributing
// tests
// questions


// TODO: Create a function to write README file
function writeToFile() {
    inquirer
    .prompt(questions)
        .then((data) => {
        const markdown = generateMarkdown(data);
        fs.writeFileSync(`README.md`, markdown);
        console.log(`README.md file generated successfully!`);
    })
    .catch((err) => {
        console.error(`Error generating README.md file`, err);
    });
}

// TODO: Create a function to initialize app
// function init() {
//     writeToFile()

//     }

// Function call to initialize app
// init();

module.exports = questions
writeToFile()