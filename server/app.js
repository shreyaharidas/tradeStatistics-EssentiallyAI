// DO NOT MODIFY ANYTHING HERE, THE PLACE WHERE YOU NEED TO WRITE CODE IS MARKED CLEARLY BELOW

require('dotenv').config();
const express = require('express');
const bodyParser = require("body-parser");
const axios = require("axios");


const app = express();

app.use(function (req, res, next) {
    const allowedOrigins = ['http://localhost:3000'];
    const origin = req.headers.origin;
    if (allowedOrigins.includes(origin)) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    }
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-credentials", true);
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, UPDATE");
    next();
});

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.enable('trust proxy');




app.post('/api/fetchStockData', async (req, res) => {
    // YOUR CODE GOES HERE, PLEASE DO NOT EDIT ANYTHING OUTSIDE THIS FUNCTION



    let date = req.query.date;
    let symbol = req.query.symbol;
    try { 
    let stockdata = await axios.get("https://api.polygon.io/v1/open-close/" + encodeURIComponent(symbol) + "/" + encodeURIComponent(date) + "?adjusted=true&apiKey=wMm1kytngzbbuiCqZoCvM4LKXSfYBEx4").
        then((data => data.data));
    
 
    const { close, high, low, open, volume } = stockdata;

   
    return res.status(200).json({ close, high, low, open, volume });
    }
    
    catch(error) {
        res.status(error.response.status).json({error:"An error has occured"});
    }

       
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));