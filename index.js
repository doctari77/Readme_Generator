const questions = [

];







const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
  return inquirer.prompt([
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
      message: "Useage"
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
  ]);
}

function generateMarkDown (answers) {
  /*return `
  
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Hi! My name is ${answers.name}</h1>
    <p class="lead">I am from ${answers.location}.</p>
    <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
      <li class="list-group-item">My GitHub username is ${answers.github}</li>
      <li class="list-group-item">LinkedIn: ${answers.linkedin}</li>
    </ul>
  </div>
</div>
</body>
</html>`;*/
}

async function init() {
  
  try {
    const answers = await promptUser();

    const markDown = generatemarkDown(answers);

    await writeFileAsync("readMe.md", Text);

    
    console.log(err);
  }
}

init();
