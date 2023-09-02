const fs = require("fs/promises");

const readFileContents = (path) => {
  return fs
    .readFile(path, "utf8")
    .then((data) => {
      return [data, path.split(/\//)[1], data.length];
    })
    .catch((err) => {
      return console.log(err);
    });
};

const promise1 = readFileContents("challenges/secret-message.txt");
const promise2 = readFileContents("challenges/super-secret-message.txt");

Promise.all([promise1, promise2]).then((values) => {
  if (values[0][2] > values[1][2]) {
    console.log(
      `"${values[0][0]}" has ${
        values[0][2] - values[1][2]
      } more characters than "${values[1][0]}"`
    );
  } else {
    console.log(
      `"${values[1][0]}" has ${
        values[1][2] - values[0][2]
      } more characters than "${values[0][0]}"`
    );
  }
  const secretText = values[0][0] + "\n" + values[1][0];
  fs.writeFile("challenges/mega-secret-message.txt", secretText)
    .then(() => {
      return console.log("File written successfully");
    })
    .catch((err) => {
      return console.log(err);
    });
});
