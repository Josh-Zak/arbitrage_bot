const axios = require('axios');

const endpoint = "https://api-pub.bitfinex.com";

async function fetchData() {
  try {
    // https://docs.bitfinex.com/reference/rest-public-ticker
    let res = await axios.get(endpoint + "/v2/ticker", {
      params: {
        symbol: "BTCUSDT"
      }
    });
    console.log(res.data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchData();
