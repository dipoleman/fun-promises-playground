const inquirer = require("inquirer");
const axios = require("axios");
const fs = require("fs/promises");

inquirer
  .prompt([
    {
      type: "input",
      name: "book",
      message: "\n\nPlease input a book title\n\n",
    },
    {
      type: "input",
      name: "author",
      message: "\n\nPlease input an author\n\n",
    },
  ])
  .then((answer) => {
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${answer.book}+inauthor:${answer.author}`
      )
      .then((response) => {

        const title = response.data.items[0].volumeInfo.title
        const author = response.data.items[0].volumeInfo.authors
        const description = response.data.items[0].volumeInfo.description
        const textToWrite = `Title: ${title}\nAuthors: ${author}\nDescription:\n${description}`
        fs.writeFile(`challenges/${author}-${title}.txt`, textToWrite)
          .then(() => {
            return console.log("File written successfully");
          })
          .catch((err) => {
            return console.log(err);
          });
      })
      .catch((error) => {
        console.log(
          "Hey, I'm sorry but that book is proving difficult to track down?"
        );
      });
  });

// const book ="Complex Analysis"
// const author = "Ian Stewart"
