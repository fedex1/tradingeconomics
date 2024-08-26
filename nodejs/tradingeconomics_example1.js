const te = require('tradingeconomics');
(async () => {

    te.login(process.env.TRADING_ECONOMICS_APIKEY)
    // const data = await te.getHistoricalData(country = 'United States', indicator = 'Money Supply M2', start_date = '2015-01-01') 
    const data = await te.getHistoricalData(country = 'Sweden', indicator = 'Money Supply M2', start_date = '2015-01-01')
    // console.log(data)
    console.log(JSON.stringify(data,"",3));
})();
