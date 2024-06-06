const axios = require('axios');

const endpoint = "https://api.exchange.coinbase.com";
const name = "Coinbase";

async function fetchData() {
  try {
    let res = await axios.get(endpoint + "/products/btc-usdt/ticker");
    
    return {
      name: name,
      ask: res.data.ask,
      bid: res.data.bid
    };
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

module.exports = { fetchData };
