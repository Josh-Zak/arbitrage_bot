const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

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
  origin: 'http://localhost:5173'
}));

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});



app.get('/tableData', async (req, res) => {
  try{
    const data = await Promise.all([
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

    res.send(data);
  }catch(error){
    console.error('Error fetching data: ', error);
    res.status(500).send('Internal Server Error');
  }
});

