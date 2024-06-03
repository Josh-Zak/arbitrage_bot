const axios = require('axios');

const endpoint = "https://api.kucoin.com";

async function fetchData() {
  try {
    // https://www.kucoin.com/docs/rest/spot-trading/market-data/get-ticker
    let res = await axios.get(endpoint + "/api/v1/market/orderbook/level1", {
      params: {
        symbol: "BTC-USDT"
      }
    });
    console.log(res.data.data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchData();
