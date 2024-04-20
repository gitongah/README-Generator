// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const genearateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'What is your projects name??',
    name:'title',
    default: 'Project Title',
    validate: ((answer)=>{
      if( answer.length < 1){
        return console.log('A valid project title is required. ')
      }
      return true;
    })
  },
  {
    type: 'input',
    message: 'Please write the description of your project',
    name:'description',
    default: 'Project Description',
    validate: ((answer)=>{
      if( answer.length < 1){
        return console.log('A valid project description is required. ')
      }
      return true;
    })
  },
  {
    type: 'input',
    message: 'If applicable, please give details of the installation instructions',
    name:'instalation'
  },
  {
    type: 'input',
    message: 'Give details of how the project will be used.',
    name:'usage'
  },
  {
    type: 'input',
    message: 'Give detail of how developers can contribute to your project.',
    name:'contributing'
  },
  {
    type: 'input',
    message: 'Give detail of how tests are done on your project.',
    name:'test'
  },
  {
    type: 'list',
    message: 'Which license would you like to use for your project?',
    name:'license',
    choices:['MIT','ISC','GNU', 'Eclipse', 'None']
  },
  {
    type: 'text',
    message: 'Enter your Github username',
    name:'userName'
  },
    {
    type: 'text',
    message: 'Please enter your email',
    name:'email'
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
      console.log(response)
      writeToFile('README.md', genearateMarkdown({...response}))

  })
  
}

// Function call to initialize app
init();
