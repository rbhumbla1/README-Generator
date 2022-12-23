// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

//filename global constant
const fileName = `./README.md`;

// An array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Please provide your GitHub username:',
        name: 'username',
    },
    {
        type: 'input',
        message: 'Please provide name of your GitHub repository:',
        name: 'repo',
    },
    {
        type: 'input',
        message: 'Please provide your email address:',
        name: 'email',
    },
    {
        type: 'input',
        message: 'Please provide the title of your project:',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Please provide a description for your project:',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Would you like a Table of Content in the README?',
        name: 'toc',
        default: 'yes'
    },
    {
        type: 'input',
        message: 'Please provide installation instructions:',
        name: 'installation',
        default: 'npm i',
    },
    {
        type: 'input',
        message: 'Please provide usage information:',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'Please provide the license used:',
        name: 'license',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3-Clause', 'None'],
    },
    {
        type: 'input',
        message: 'Please provide contribution guidelines:',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'Please provide tests instructions:',
        name: 'tests',
        default: 'npm test',
    },
]


// Function to write README file
function writeToFile(data) {

    //create README file and add content to it
    fs.writeFileSync(fileName, generateMarkdown(data), (err) =>
        err ? console.log(err) : console.log('Success!')
    );
}



// Function to initialize app
function init() {

    //get user input
    inquirer
        .prompt(questions)
        .then((response) => {
            // console.log(response);

            //create the readme file
            writeToFile(response);

        }
        );

}

// Function call to initialize app
init();
