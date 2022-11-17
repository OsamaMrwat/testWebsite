const yahooFinance = require("yahoo-finance");
var stocks = [];
var currency = [];
var commodities = [];
var indices = [];
var crypto = [];


//crypto  
yahooFinance.quote({
  symbol: "BTC-USD",
  modules: ["price"] // see the docs for the full list
}, function (err, quotes) {
  crypto.push(quotes);
});

yahooFinance.quote({
  symbol: "ETH-USD",
  modules: ["price"] // see the docs for the full list
}, function (err, quotes) {
  crypto.push(quotes);
});

yahooFinance.quote({
  symbol: "XRP-USD",
  modules: ["price"] // see the docs for the full list
}, function (err, quotes) {
  crypto.push(quotes);
});

yahooFinance.quote({
  symbol: "DOGE-USD",
  modules: ["price"] // see the docs for the full list
}, function (err, quotes) {
  crypto.push(quotes);
})

yahooFinance.quote({
  symbol: "SOL-USD",
  modules: ["price"] // see the docs for the full list
}, function (err, quotes) {
  crypto.push(quotes);
})


//stocks
yahooFinance.quote(
  {
    symbol: "GOOG",
    modules: ["price",], // see the docs for the full list
  },
  function (err, quotes) {
    stocks.push(quotes);
  }
);
yahooFinance.quote(
  {
    symbol: "AAPL",
    modules: ["price"], // see the docs for the full list
  },
  function (err, quotes) {
    stocks.push(quotes);
  }
);
yahooFinance.quote(
  {
    symbol: "META",
    modules: ["price"], // see the docs for the full list
  },
  function (err, quotes) {
    stocks.push(quotes);
  }
);
yahooFinance.quote(
  {
    symbol: "EBAY",
    modules: ["price"], // see the docs for the full list
  },
  function (err, quotes) {
    stocks.push(quotes);
  }
);
yahooFinance.quote(
  {
    symbol: "HPQ",
    modules: ["price"], // see the docs for the full list
  },
  function (err, quotes) {
    stocks.push(quotes);
  }
);

//currency
yahooFinance.quote(
  {
    symbol: "EURUSD=X",
    modules: ["price"], // see the docs for the full list
  },
  function (err, quotes) {
    currency.push(quotes);
  }
);
yahooFinance.quote(
  {
    symbol: "GBPUSD=X",
    modules: ["price"], // see the docs for the full list
  },
  function (err, quotes) {
    currency.push(quotes);
  }
);
yahooFinance.quote(
  {
    symbol: "AUDUSD=X",
    modules: ["price"], // see the docs for the full list
  },
  function (err, quotes) {
    currency.push(quotes);
  }
);
yahooFinance.quote(
  {
    symbol: "EURCHF=X",
    modules: ["price"], // see the docs for the full list
  },
  function (err, quotes) {
    currency.push(quotes);
  }
);
yahooFinance.quote(
  {
    symbol: "TRY=X",
    modules: ["price"], // see the docs for the full list
  },
  function (err, quotes) {
    currency.push(quotes);
  }
);


//commodities
yahooFinance.quote(
  {
    symbol: "GC=F",
    modules: ["price"], // see the docs for the full list
  },
  function (err, quotes) {
    commodities.push(quotes);
  }
);
yahooFinance.quote(
  {
    symbol: "KC=F",
    modules: ["price"], // see the docs for the full list
  },
  function (err, quotes) {
    commodities.push(quotes);
  }
);
yahooFinance.quote(
  {
    symbol: "ZC=F",
    modules: ["price"], // see the docs for the full list
  },
  function (err, quotes) {
    commodities.push(quotes);
  }
);
yahooFinance.quote(
  {
    symbol: "SB=F",
    modules: ["price"], // see the docs for the full list
  },
  function (err, quotes) {
    commodities.push(quotes);
  }
);
yahooFinance.quote(
  {
    symbol: "BZ=F",
    modules: ["price"], // see the docs for the full list
  },
  function (err, quotes) {
    if (err) {
      console.error(err)
    } else {
      commodities.push(quotes);
    }

  }
);

//indices
yahooFinance.quote(
  {
    symbol: "^GSPC",
    modules: ["price"], // see the docs for the full list
  },
  function (err, quotes) {
    indices.push(quotes);
  }
);
yahooFinance.quote(
  {
    symbol: "^IXIC",
    modules: ["price"], // see the docs for the full list
  },
  function (err, quotes) {
    indices.push(quotes);
  }
);
yahooFinance.quote(
  {
    symbol: "^DJI",
    modules: ["price"], // see the docs for the full list
  },
  function (err, quotes) {
    indices.push(quotes);
  }
);
yahooFinance.quote(
  {
    symbol: "^FTSE",
    modules: ["price"], // see the docs for the full list
  },
  function (err, quotes) {
    indices.push(quotes);
  }
);
yahooFinance.quote(
  {
    symbol: "^GDAXI",
    modules: ["price"], // see the docs for the full list
  },
  function (err, quotes) {
    indices.push(quotes);
  }
);

exports.getStocks = stocks;
exports.getCurrency = currency;
exports.getCommodities = commodities;
exports.getIndices = indices;
exports.getCrypto = crypto;