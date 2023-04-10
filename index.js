// packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// Array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
        validate: (title) => title !== ''
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project. Please answer the following questions in paragraph form:\nWhat was your motivation?\nWhy did you build this project?\nWhat problem does it solve?\nWhat did you learn?\nWhat makes your project stand out?\n',
        validate: (description) => description !== ''
    },
    {
        type: 'list',
        name: 'includeFeatures',
        message: 'Would you like to list specific features of your project?',
        choices: ['Yes', 'No']
    },
    {
        type: 'input',
        name: 'features',
        message: 'Please list the features of your project. (comma separated list)',
        when: (answers) => answers.includeFeatures === 'Yes',
        validate: (credited) => credited !== ''
    },
    {
        type: 'list',
        name: 'includeDeployed',
        message: 'Is your project deployed?',
        choices: ['Yes', 'No']
    },
    {
        type: 'input',
        name: 'deployed',
        message: 'Where is your project deployed?',
        when: (answers) => answers.includeDeployed === 'Yes',
        validate: (deployed) => deployed !== ''
    },
    {
        type: 'list',
        name: 'includeInstall',
        message: 'Does your project need to be installed?',
        choices: ['Yes', 'No']
    },
    {
        type: 'input',
        name: 'install',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running. (comma separated list)',
        when: (answers) => answers.includeInstall === 'Yes',
        validate: (install) => install !== ''
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use. (paragraph form)',
        validate: (usage) => usage !== ''
    },
    {
        type: 'list',
        name: 'includeCredits',
        message: 'Would you like to credit other users?',
        choices: ['Yes', 'No']
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Please list your collaborators. (comma separated list)',
        when: (answers) => answers.includeCredits === 'Yes',
        validate: (credits) => credits !== ''
    },
    {
        type: 'list',
        name: 'includeChallenges',
        message: 'Would you like to include a list of challenges you faced?',
        choices: ['Yes', 'No']
    },
    {
        type: 'input',
        name: 'challenges',
        message: 'What challenges did you face? (comma separated list)',
        when: (answers) => answers.includeChallenges === 'Yes',
        validate: (challenges) => challenges !== ''
    },
    {
        type: 'input',
        name: 'future',
        message: 'What features do you plan to implement in the future? (comma separated list)',
        validate: (future) => future !== ''
    },
    {
        type: 'list',
        name: 'includeContribute',
        message: 'Would you like to tell others how they can contribute to your project?',
        choices: ['Yes', 'No']
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'Please provide guidelines for how other users can contribute to your project. (paragraph form)',
        when: (answers) => answers.includeContribute === 'Yes',
        validate: (contribute) => contribute !== ''
    },
    {
        type: 'list',
        name: 'includeTests',
        message: 'Would you like to include an explanation on how to utilize included tests for your project?',
        choices: ['Yes', 'No']
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please provide guidelines for how other users can contribute to your project. (comma separated list)',
        when: (answers) => answers.includeTests === 'Yes',
        validate: (tests) => tests !== ''
    },
    {
        type: 'input',
        name: 'license',
        message: 'Finally, what license does your project use?',
        default: "Please refer to the LICENSE in the repo.",
        validate: (license) => license !== ''
    }
];

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (error) => error ? console.log(error) : console.log(`Success!\n\nDon't forget to add screenshots to your Usage section and links to your collaborators' GitHub profiles (if applicable)!!`));
}

// Function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((answers) => {
        console.log(answers);
        writeToFile('READMEtest.md', answers);
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
            console.log(error);
        } else {
            // Something else went wrong
            console.log(error);
        }
    });
}

// Function call to initialize app
init();