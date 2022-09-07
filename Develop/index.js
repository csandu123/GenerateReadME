// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

const generateMarkdown = require('./utils/generateMarkdown');
const README_FILENAME = `README.md`;
// TODO: Create an array of questions for user input
inquirer.prompt([
    {
        type: "input",
        name: "author",
        message: "What is your name?"
    },
    {
        type: "input",
        name: "username",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    },
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Enter project description:"
    },
    {
        type: "list",
        name: "license",
        message: "What kind of license do you want to add?",
        choices: ["MIT","APACHE 2.0","BSD 3","None"]
    },
    {
        type: "input",
        name: "installation",
        message: "What does the user need to install?"
    },
    {
        type: "input",
        name: "usage",
        message: "What should the user know about the usage of this repo?"
    },
    {
        type: "input",
        name: "testing",
        message: "How would a user run tests?"
    },
    {
        type: "input",
        name: "contribute",
        message: "How would a user contribute to this repo?",
    },
  ])
  .then((data) => {
    const fullReadmePath = path.resolve(__dirname, `${README_FILENAME}`);
    fs.writeFile(fullReadmePath, generateMarkdown(data), (err) =>
       err
         ? console.log(err)
         : console.log(`Your ${README_FILENAME} has been generated!`)
     );
 });

