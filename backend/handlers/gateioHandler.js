const axios = require('axios');

const endpoint = "https://api.gateio.ws";
const name = "Gate.io";

async function fetchData() {
  try {
    // https://www.gate.io/docs/developers/apiv4/#retrieve-ticker-information
    let res = await axios.get(endpoint + "/api/v4/spot/tickers", {
      params: {
        currency_pair: "BTC_USDT"
      }
    });

    return {
      name: name,
      ask: res.data[0].lowest_ask,
      bid: res.data[0].highest_bid
    };
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

module.exports = { fetchData };
