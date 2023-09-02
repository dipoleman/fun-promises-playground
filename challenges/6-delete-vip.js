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
      let noVips = names.length;
      const remaining = names.filter((person) => {
        return person !== answer.name;
      });
      console.log(remaining);
      if (remaining.length === noVips) {
        console.log(
          `\n\nThe person you have decided to delete is: ${answer.name} ---they are not a VIP!!!\n\n`
        );
      } else {
        console.log(
          `\n\nThe VIP you have decided to delete is: ${answer.name}\n\n`
        );

        let vips = "";
        remaining.forEach((vip) => {
          vips += `${vip}\n`;
        });

        fs.writeFile("challenges/vip-list.txt", vips)
          .then(() => {
            console.log(
              `\n\nVIP ${answer.name} has been successfully deleted!\n\n\n`
            );
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
});
