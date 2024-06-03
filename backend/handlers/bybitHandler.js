const axios = require('axios');

const endpoint = "https://api.bybit.com";

async function fetchData() {
  try {
    let res = await axios.get(endpoint + "/v5/market/tickers", {
      params: {
        category: "spot",
        symbol: "BTCUSDT"
      }
    });
    console.log(res.data.result.list[0]);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchData();
