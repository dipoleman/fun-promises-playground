const axios = require('axios'); 

// Make a request for a user with a given ID
axios.get('https://pokeapi.co/api/v2/pokemon')
  .then(function (response) {
    // handle success
    console.log(response.data.results);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });



