const axios = require('axios');

const endpoint = "https://api.kraken.com";

async function fetchData() {
  try {
    // https://docs.kraken.com/rest/#tag/Spot-Market-Data/operation/getTickerInformation
    let res = await axios.get(endpoint + "/0/public/Ticker", {
      params: {
        pair: "BTCUSDT"
      }
    });
    console.log(res.data.result.XBTUSDT);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchData();
