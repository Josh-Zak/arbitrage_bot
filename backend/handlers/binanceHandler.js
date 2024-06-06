const axios = require('axios');

const endpoint = "https://api.binance.com";
const name = "Binance";

async function fetchData() {
  try {
    // https://developers.binance.com/docs/binance-spot-api-docs/rest-api#symbol-order-book-ticker
    let res = await axios.get(endpoint + "/api/v3/ticker/bookTicker", {
      params: {
        symbol: "BTCUSDT"
      }
    });

    return {
      name: name,
      ask: res.data.askPrice,
      bid: res.data.bidPrice
    };
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

module.exports = { fetchData };
