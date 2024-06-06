const axios = require('axios');

const endpoint = "https://api.kucoin.com";
const name = "Kucoin";

async function fetchData() {
  try {
    // https://www.kucoin.com/docs/rest/spot-trading/market-data/get-ticker
    let res = await axios.get(endpoint + "/api/v1/market/orderbook/level1", {
      params: {
        symbol: "BTC-USDT"
      }
    });

    return {
      name: name,
      ask: res.data.data.bestAsk,
      bid: res.data.data.bestBid
    };
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

module.exports = { fetchData };
