const axios = require('axios');

const endpoint = "https://api.gateio.ws";

async function fetchData() {
  try {
    // https://www.gate.io/docs/developers/apiv4/#retrieve-ticker-information
    let res = await axios.get(endpoint + "/api/v4/spot/tickers", {
      params: {
        currency_pair: "BTC_USDT"
      }
    });
    console.log(res.data[0]);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchData();
