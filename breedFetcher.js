const request = require('request');

const breed = process.argv[2];
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;
const breedFetcher = (url) => {
  request(url, (error, response, body) => {
    if (error) {
      return console.log(`Failed to retrieve data: ${error}`);
    }
    const data = JSON.parse(body);
    if (data[0] === undefined) {
      return console.log(`Sorry, ${breed} does not have database currently, try a different breed.`);
    }
    return console.log(data[0].description);
  });
};

breedFetcher(url);

