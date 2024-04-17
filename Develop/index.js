// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const genearateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'text',
    message: 'What is your projects name??',
    name:'title'
  },
  {
    type: 'text',
    message: 'Please write the description of your project',
    name:'description'
  },
  {
    type: 'text',
    message: 'please give details of the installation instructions',
    name:'instalation'
  },
  {
    type: 'text',
    message: 'Give details of how the project will be used.',
    name:'usage'
  },
  {
    type: 'text',
    message: 'Give detail of how developers can contribute to your project.',
    name:'contributing'
  },
  {
    type: 'text',
    message: 'Give detail of how tests are done on your project.',
    name:'test'
  },
  {
    type: 'list',
    message: 'Which license would you like to use for your project?',
    name:'license',
    choices:['MIT','GNU GPLv3','GNU LGPLv3', 'GNU AGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'Boost Software License 1.0', 'The Unlicense']
  },
  

];

// TODO: Create a function to write README file

function writeToFile(fileName, data) {

  fs.writeFile(fileName, data, (err) =>{
    err ? console.error(err) : console.log('Created new README file')
  });
}

// TODO: Create a function to initialize app
function init() {
  console.log('Initialization of the application....');

    inquirer.prompt(questions).then((response) =>{
      writeToFile('README.md', genearateMarkdown({...response}))

  })
  
}

// Function call to initialize app
init();
