const inquirer = require("inquirer");
const axios = require("axios");

inquirer
  .prompt([
    {
      type: "input",
      name: "number",
      message: "Please input your pokemon number",
    },
  ])
  .then((answer) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${answer.number}`)
      .then(function (response) {
        console.log(response.data.name);
      })
      .catch((error) => {
        console.log(
          "Hey, I'm sorry but that pokemon is in pre-existence phase, maybe come back in 100 years time?"
        );
      });
  });
