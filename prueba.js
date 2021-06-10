//1. Import coingecko-api
const CoinGecko = require('coingecko-api');

//2. Initiate the CoinGecko API Client
const CoinGeckoClient = new CoinGecko();

let vrar = true;

//3. Make calls
if (vrar === true) {
    var func = async () => {
        let data = await CoinGeckoClient.coins.markets();
    }

    console.log(data )
}