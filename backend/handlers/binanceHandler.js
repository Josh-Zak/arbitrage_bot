const axios = require('axios');

const endpoint = "https://api.binance.com";

async function fetchData() {
  try {
    let res = await axios.get(endpoint + "/api/v3/ticker/bookTicker", {
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
