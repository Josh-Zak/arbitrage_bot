const axios = require('axios');

const endpoint = "https://api.bybit.com";
const name = "Bybit";

async function fetchData() {
  try {
    let res = await axios.get(endpoint + "/v5/market/tickers", {
      params: {
        category: "spot",
        symbol: "BTCUSDT"
      }
    });
    return {
      name: name,
      ask: res.data.result.list[0].bid1Price,
      bid: res.data.result.list[0].ask1Price
    };
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

module.exports = { fetchData };
