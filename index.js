// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
// const questions = [,
//     "Please provide your email address:",
//     "What is the title of your project?",
//     "Please provide a description for your project:",
//     "Would you like a Table of Content in the README?",
//     "Please provide installation instructions:",
//     "Please provide usage information:",
//     "Please provide contribution guidelines:",
//     "Please provide test instructions:",
//     "Please provide the license used:"];

const questions = [
    {
        type: 'input',
        message: 'Please provie your Github uername:',
        name: 'username',
    },
    {
        type: 'input',
        message: 'Please provide your email address:',
        name: 'email',
    },
    {
        type: 'input',
        message:'Please provide the title of your project:',
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
        default:'yes'
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
    {
        type: 'list',
        message: 'Please provide the license used:',
        name: 'license',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3-Clause', 'None'],
    },
]

const fileName = `TEST.md`;
let counter = 0;

// TODO: Create a function to write README file
function writeToFile(data) {
  
        fs.writeFileSync(fileName, generateMarkdown(data), (err) =>
            err ? console.log(err) : console.log('Success!')
        );
}



// TODO: Create a function to initialize app
function init() {
;

    inquirer
        .prompt(questions)
        .then((response) => {
            console.log(response);

            writeToFile(response);

        }
        );

}

// Function call to initialize app
init();


// ======================archive
// async function getContent() {
//     for (const question of questions) {
//         counter = question.count;
//         let data;

//         switch (counter) {
//             case 0:
//                 data = await inquirer.prompt([
//                     {
//                         type: 'input',
//                         name: 'title',
//                         message: question,
//                     }
//                 ]);
//                 //  writeToFile(data);
//                 break;
//             case 2:
//                 data = await inquirer.prompt([
//                     {
//                         type: 'input',
//                         name: 'TOC',
//                         message: question,
//                         default: 'yes'
//                     }
//                 ]);
//                 // writeToFile(toc);
//                 break;
           
                 
//         }

//         // if(counter != 0)
//         //  writeToFile(question.section);
//         // let data;
//         // if(counter === questions.length - 1){
//         //     data = await inquirer.prompt([
//         //         {
//         //             type: 'input',
//         //             name: 'userInput',
//         //             message: question,
//         //             default: 'npm test',
//         //         }
//         //     ]);
//         // }
//         // else{
//         // data = await inquirer.prompt([
//         //         {
//         //             type: 'input',
//         //             name: 'userInput',
//         //             message: question,
//         //         }
//         //     ]);
//         // }
//         //   //  .then((data) => {
//         //         writeToFile(data);
//         //   //  });
//     }
// }