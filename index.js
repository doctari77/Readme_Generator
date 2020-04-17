






const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const util = require("util");
const apiCall = require('./utils/api.js');

const writeFileAsync = util.promisify(fs.writeFile);


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
      name: "tableOfContents",
      message: "Table of Contents?"
    },
    {
      type: "input",
      name: "installation",
      message: "Installation?"
    },
    {
      type: "input",
      name: "usage",
      message: "Usage"
    },
    {
      type: "input",
      name: "license",
      message: "License info"
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
    },
    {
      type: "input",
      name: "questions",
      message: "Questions?"
    }
  ];
  
    

function generateMarkDown (answers) {
 
}
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
