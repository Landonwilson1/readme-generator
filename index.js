// packages needed for application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./Develop/utils/generateMarkdown.js')


//array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Please enter the project title:',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Give a discription of your project:',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Please provied installation instructions:',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Enter any usage instructions:',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'Please list any collaborators:',
        name: 'contributing'
    },
    {
        type: 'input',
        message: 'Please enter any tests for the project:',
        name: 'tests'
    },
    {
        type: 'list',
        message: 'Chose license for this project',
        name: 'license',
        choices: [
            "Apache",
            "Academic",
            "GNU",
            "ISC",
            "MIT",
            "Mozilla",
        ]
    },
    {
        type: 'input',
        message: 'Please enter your github username:',
        name: 'github'
    },
    {
        type: 'input',
        message: 'Please enter your email address:',
        name: 'email'
    },
];

// function to write README file
function writeToFile(fileName, output, error) { 
    fs.writeFile(fileName, output, error);
}

// function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(output => { 
        writeToFile("readme.md", generateMarkdown(output), error =>
        {
            if(error){
                console.log(error);
            }
            else{
                console.log('Successfully wrote readme file!');
            }
        });
    });

}

// Function call to initialize app
init();
