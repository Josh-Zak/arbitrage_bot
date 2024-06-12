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
    let data = [];
    data.push(await binance.fetchData());
    data.push(await bitfinex.fetchData());
    data.push(await bybit.fetchData());
    data.push(await coinbase.fetchData());
    data.push(await gateio.fetchData());
    data.push(await htx.fetchData());
    data.push(await kraken.fetchData());
    data.push(await kucoin.fetchData());
    data.push(await okx.fetchData());
    data.push(await upbit.fetchData());

    res.send(data);
  }catch(error){
    console.error('Error fetching data: ', error);
    res.status(500).send('Internal Server Error');
  }
});

