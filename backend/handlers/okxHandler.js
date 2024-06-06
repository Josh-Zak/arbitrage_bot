const axios = require('axios');

const endpoint = "https://www.okx.com";
const name = "OKX";

async function fetchData() {
  try {
    let res = await axios.get(endpoint + "/api/v5/market/ticker", {
      params: {
        instId: "BTC-USDT"
      }
    });

    return {
      name: name,
      ask: res.data.data[0].askPx,
      bid: res.data.data[0].bidPx
    };
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

module.exports = { fetchData };
