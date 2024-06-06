const axios = require('axios');

const endpoint = "https://api.upbit.com";
const name = "Upbit";

async function fetchData() {
  try {
    let res = await axios.get(endpoint + "/v1/orderbook", {
      params: {
        markets: "USDT-BTC"
      }
    });

    return {
      name: name,
      ask: res.data[0].orderbook_units[0].ask_price,
      bid: res.data[0].orderbook_units[0].bid_price
    };
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

module.exports = { fetchData };
