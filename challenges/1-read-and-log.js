const fs = require('fs/promises')

const readFileContents = (path) =>{
    return fs.readFile(path,'utf8')
    .then(data =>{
        return console.log(data)
    })
    .catch(err =>{
        return console.log(err)
    })
}

readFileContents('challenges/secret-message.txt')