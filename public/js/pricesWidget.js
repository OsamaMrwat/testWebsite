var currency = document.getElementById("currency");
var stocks = document.getElementById("stocks");
var commoditites = document.getElementById("commoditites");
var indices = document.getElementById("indices");
var cryptobutton = document.getElementById('crypto');


async function showData() {
  clicked(currency);
  const e = document.getElementById("results");
  await fetch("/currency")
    .then((e) => e.json())
    .then((c) => {
      const s = c
        .map(
          (e) =>
            `\n                    <div class="container stockMarket">\n                      <div class="col-8">\n                        <p>NAME</p>\n                        <h6 class="text-uppercase">${
              e.price.shortName.split(" ")[0]
            }</h6>\n                      </div>\n                      <div class="col-4 d-flex">\n                        <div class="col text-uppercase"><p>last price</p> <h6>${
              "$" + e.price.regularMarketPrice.toFixed(5)
            }</h6></div>\n                        <div class="col text-uppercase"><p>change</p> <h6  class="text-success">${
              e.price.regularMarketChange.toFixed(3) + "$"
            }</h6></div>\n                        <div class="col text-uppercase"> <p>change %</p> <h6 class="text-success">${
              (100 * e.price.regularMarketChangePercent).toFixed(3) + "%"
            }</h6></div>\n                      </div>\n                      </div>\n                    `
        )
        .join("");
      e.innerHTML = s;
      changeColor();
      changeColor();
    });
}
showData();
setTimeout(showData, 1000);
function clicked(e) {
  e.style.borderBottom = "2px solid var(--primary-color1)";
}

function unclicked(e) {
   e.style.borderBottom = "0px solid var(--primary-color1)";
}

function changeColor(){
  let changes=document.getElementsByClassName("text-success");
  for(let elem of changes){
      if(elem.innerText.includes("-"))
      {
          elem.classList.remove("text-success");
          elem.classList.add("text-danger");
      }
      }
      for(let elem of changes){
        if(elem.innerText.includes("-"))
        {
            elem.classList.remove("text-success");
            elem.classList.add("text-danger");
        }
        }
}




stocks.addEventListener("click", async function () {
  unclicked(cryptobutton), 
  clicked(stocks),
    unclicked(currency),
    unclicked(commoditites),
    unclicked(indices);
  const e = document.getElementById("results");
  await fetch("/stocks")
    .then((e) => e.json())
    .then((c) => {
      const s = c
        .map(
          (e) =>
            `\n                  <div class="container stockMarket">\n                    <div class="col-8">\n                      <p>NAME</p>\n                      <h6 class="text-uppercase">${
              e.price.shortName.split(" ")[0]
            }</h6>\n                    </div>\n                    <div class="col-4 d-flex">\n                      <div class="col text-uppercase"><p>last price</p> <h6>${
              "$" + e.price.regularMarketPrice.toFixed(2)
            }</h6></div>\n                      <div class="col text-uppercase"><p>change</p> <h6  class="text-success">${
              e.price.regularMarketChange.toFixed(3) + "$"
            }</h6></div>\n                      <div class="col text-uppercase"> <p>change %</p> <h6 class="text-success">${
              (100 * e.price.regularMarketChangePercent).toFixed(3) + "%"
            }</h6></div>\n                    </div>\n                    </div>\n                  `
        )
        .join("");
      e.innerHTML = s;
      changeColor();
      changeColor();
    });
}),
currency.addEventListener("click", async function () {
  unclicked(cryptobutton),   
  unclicked(stocks),
      clicked(currency),
      unclicked(commoditites),
      unclicked(indices);
    const e = document.getElementById("results");
    await fetch("/currency")
      .then((e) => e.json())
      .then((c) => {
        const s = c
          .map(
            (e) =>
              `\n                  <div class="container stockMarket">\n                    <div class="col-8">\n                      <p>NAME</p>\n                      <h6 class="text-uppercase">${
                e.price.shortName.split(" ")[0]
              }</h6>\n                    </div>\n                    <div class="col-4 d-flex">\n                      <div class="col text-uppercase"><p>last price</p> <h6>${
                "$" + e.price.regularMarketPrice.toFixed(5)
              }</h6></div>\n                      <div class="col text-uppercase"><p>change</p> <h6  class="text-success">${
                e.price.regularMarketChange.toFixed(3) + "$"
              }</h6></div>\n                      <div class="col text-uppercase"> <p>change %</p> <h6 class="text-success">${
                (100 * e.price.regularMarketChangePercent).toFixed(3) + "%"
              }</h6></div>\n                    </div>\n                    </div>\n                  `
          )
          .join("");
        e.innerHTML = s;
        changeColor();
        changeColor();
      });
  }),
commoditites.addEventListener("click", async function () {
  unclicked(cryptobutton),   
  unclicked(stocks),
      unclicked(currency),
      clicked(commoditites),
      unclicked(indices);
    const e = document.getElementById("results");
    await fetch("/commodities")
      .then((e) => e.json())
      .then((c) => {
        const s = c
          .map(
            (e) =>
              `\n                  <div class="container stockMarket">\n                    <div class="col-8">\n                      <p>NAME</p>\n                      <h6 class="text-uppercase">${
                e.price.shortName.split(" ")[0]
              }</h6>\n                    </div>\n                    <div class="col-4 d-flex">\n                      <div class="col text-uppercase"><p>last price</p> <h6>${
                "$" + e.price.regularMarketPrice.toFixed(2)
              }</h6></div>\n                      <div class="col text-uppercase"><p>change</p> <h6  class="text-success">${
                e.price.regularMarketChange.toFixed(3) + "$"
              }</h6></div>\n                      <div class="col text-uppercase"> <p>change %</p> <h6 class="text-success">${
                (100 * e.price.regularMarketChangePercent).toFixed(3) + "%"
              }</h6></div>\n                    </div>\n                    </div>\n                  `
          )
          .join("");
        e.innerHTML = s;
        changeColor();
        changeColor();
      });
  }),
indices.addEventListener("click", async function () {
  unclicked(cryptobutton),    
  unclicked(stocks),
      unclicked(currency),
      unclicked(commoditites),
      clicked(indices);
    const e = document.getElementById("results");
    await fetch("/indices")
      .then((e) => e.json())
      .then((c) => {
        const s = c
          .map(
            (e) =>
              `\n                  <div class="container stockMarket">\n                    <div class="col-8">\n                      <p>NAME</p>\n                      <h6 class="text-uppercase">${
                e.price.shortName.split(" ")[0]
              }</h6>\n                    </div>\n                    <div class="col-4 d-flex">\n                      <div class="col text-uppercase"><p>last price</p> <h6>${
                "$" + e.price.regularMarketPrice.toFixed(2)
              }</h6></div>\n                      <div class="col text-uppercase"><p>change</p> <h6 class="text-success">${
                e.price.regularMarketChange.toFixed(3) + "$"
              }</h6></div>\n                      <div class="col text-uppercase"> <p>change %</p> <h6  class="text-success">${
                (100 * e.price.regularMarketChangePercent).toFixed(3) + "%"
              }</h6></div>\n                    </div>\n                    </div>\n                  `
          )
          .join("");
        e.innerHTML = s;
        changeColor();
        changeColor();
      });
  }),
cryptobutton.addEventListener("click", async function () {
      clicked(cryptobutton),
      unclicked(currency),
      unclicked(commoditites),
      unclicked(indices),
      unclicked(stocks);
    const e = document.getElementById("results");
    await fetch("/crypto")
      .then((e) => e.json())
      .then((c) => {
        const s = c
          .map(
            (e) =>
              `\n                  <div class="container stockMarket">\n                    <div class="col-8">\n                      <p>NAME</p>\n                      <h6 class="text-uppercase">${
                e.price.shortName.split(" ")[0]
              }</h6>\n                    </div>\n                    <div class="col-4 d-flex">\n                      <div class="col text-uppercase"><p>last price</p> <h6>${
                "$" + e.price.regularMarketPrice.toFixed(2)
              }</h6></div>\n                      <div class="col text-uppercase"><p>change</p> <h6  class="text-success">${
                e.price.regularMarketChange.toFixed(3) + "$"
              }</h6></div>\n                      <div class="col text-uppercase"> <p>change %</p> <h6 class="text-success">${
                (100 * e.price.regularMarketChangePercent).toFixed(3) + "%"
              }</h6></div>\n                    </div>\n                    </div>\n                  `
          )
          .join("");
        e.innerHTML = s;
        changeColor();
        changeColor();
      });
      
  }
  );

  

