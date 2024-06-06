const axios = require('axios');

const endpoint = "https://api.kraken.com";
const name = "Kraken";

async function fetchData() {
  try {
    // https://docs.kraken.com/rest/#tag/Spot-Market-Data/operation/getTickerInformation
    let res = await axios.get(endpoint + "/0/public/Ticker", {
      params: {
        pair: "BTCUSDT"
      }
    });

    return {
      name: name,
      ask: res.data.result.XBTUSDT.a[0],
      bid: res.data.result.XBTUSDT.b[0]
    };
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

module.exports = { fetchData };
