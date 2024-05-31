const axios = require('axios');

const endpoint = "https://api.exchange.coinbase.com";

async function fetchData() {
  try {
    let res = await axios.get(endpoint + "/products/btc-usdt/ticker");
    console.log(res.data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchData();
