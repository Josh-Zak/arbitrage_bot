// ===== ENV CONFIG =====
const port = process.env.PORT || 3000;
const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:5173';


const express = require('express');
const cors = require('cors');
const app = express();


const binance = require("./handlers/binanceHandler");
const bitfinex = require("./handlers/bitfinexHandler");
const bybit = require("./handlers/bybitHandler");
const coinbase = require("./handlers/coinbaseHandler");
const gateio = require("./handlers/gateioHandler");
const htx = require("./handlers/htxHandler");
const kraken = require("./handlers/krakenHandler");
const kucoin = require("./handlers/kucoinHandler");
const okx = require("./handlers/okxHandler");
const upbit = require("./handlers/upbitHandler");


app.use(cors({
  origin: frontendUrl
}));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get('/', (req, res) => {
  res.json({ message: 'Hello World!' });
});

app.get('/health', (req, res) => res.status(200).send('OK'));


app.get('/tableData', async (req, res) => {
  try{
    const results = await Promise.allSettled([
      binance.fetchData(),
      bitfinex.fetchData(),
      bybit.fetchData(),
      coinbase.fetchData(),
      gateio.fetchData(),
      htx.fetchData(),
      kraken.fetchData(),
      kucoin.fetchData(),
      okx.fetchData(),
      upbit.fetchData()
    ]);

    const successful = [];

    results.forEach((result, index) => {
      if (result.status === "fulfilled") {
        successful.push(result.value);
      }
    });

    res.json(successful);
  }catch(error){
    console.error('Error fetching data: ', error);
    res.status(500).send('Internal Server Error');
  }
});

