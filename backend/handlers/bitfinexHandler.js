const axios = require('axios');

const endpoint = "https://api-pub.bitfinex.com";
const name = "Bitfinex";

async function fetchData() {
  try {
    // https://docs.bitfinex.com/reference/rest-public-ticker
    let res = await axios.get(endpoint + "/v2/ticker/tBTCUSD");

    return {
      name: name,
      ask: res.data[2],
      bid: res.data[0],
    };
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

module.exports = { fetchData };
