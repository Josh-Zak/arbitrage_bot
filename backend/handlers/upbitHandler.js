const axios = require('axios');

const endpoint = "https://api.upbit.com";

async function fetchData() {
  try {
    let res = await axios.get(endpoint + "/v1/orderbook", {
      params: {
        markets: "USDT-BTC"
      }
    });
    console.log(res.data[0].orderbook_units[0]);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchData();
