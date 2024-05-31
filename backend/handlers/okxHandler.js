const axios = require('axios');

const endpoint = "https://www.okx.com";

async function fetchData() {
  try {
    let res = await axios.get(endpoint + "/api/v5/market/ticker", {
      params: {
        instId: "BTC-USDT"
      }
    });
    console.log(res.data.data[0]);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchData();
