const axios = require('axios');

const endpoint = "https://api.huobi.pro";
const name = "HTX";

async function fetchData() {
  try {
    // https://www.htx.com/en-us/opend/newApiPages/?id=7ec4a3b6-7773-11ed-9966-0242ac110003
    let res = await axios.get(endpoint + "/market/detail/merged", {
      params: {
        symbol: "btcusdt"
      }
    });

    return {
      name: name,
      ask: res.data.tick.ask[0],
      bid: res.data.tick.bid[0]
    };
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

module.exports = { fetchData };
