const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Please input your name'
    }
  ])
  .then((answer) => {
    console.log(`Hello ${answer.name}!`);
  })
  .catch((error) => {
    console.log("Arrrrrrrgggggg")
  });
