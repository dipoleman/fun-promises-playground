const inquirer = require("inquirer");
const fs = require("fs/promises");

const readFileContents = (path) => {
  return fs.readFile(path, "utf8");
};

Promise.all([readFileContents("challenges/vip-list.txt")]).then((data) => {
  const names = data[0].split("\n");
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: `\n\nPlease select one VIP to delete..\n\n${names}\n\n`,
      },
    ])
    .then((answer) => {
      console.log(
        `\n\nThe person you have decided to delete is: ${answer.name}\n\n`
      );
      const remaining = names.filter((person) => {
        return person !== answer.name;
      });
      let secretText = `${remaining[0]}\n${remaining[1]}`;
      fs.writeFile("challenges/vip-list.txt", secretText).then(() => {
        console.log(
          `\n\nVIP ${answer.name} has been successfully deleted!\n\n\n`
        );
      });
    });
});
