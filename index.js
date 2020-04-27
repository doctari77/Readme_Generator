






const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const util = require("util");
const apiCall = require('./utils/api.js');
const generateMarkDown = require('./utils/generateMarkdown')



  const questions=[
    { type: "input",
      name: "user",
      message: "What's your username:"
    },
    {
      type: "input",
      name: "title",
      message: "Title?"
    },
    {
      type: "input",
      name: "description",
      message: "Provide a description?"
    },
    
    {
      type: "input",
      name: "installation",
      message: "Installation?",
      default: 'npm i'
    },
    {
      type: "input",
      name: "usage",
      message: "Usage"
    },
    {
      type: "list",
      name: "license",
      message: "What type of license should you have for your project?",
      choices: ['MIT','Apache 2.0','BSD3','None']
    },
    {
      type: "input",
      name: "contributing",
      message: "Contributing?"
    },
    {
      type: "input",
      name: "tests",
      message: "Tests?"
    }
   
  ];
  
    


function writeToFile (filename, data){
  return fs.writeFileSync(path.join (process.cwd(),filename),data)
} 
 function init() {
   inquirer.prompt(questions).then (response => {
     apiCall.getUser(response.user).then(({data})=>{
     writeToFile("README.md", generateMarkDown({...response, ...data}) )  
     })
   })
  
  
}
init();
