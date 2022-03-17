const express = require("express");
const router = express.Router();
const fetch = require('node-fetch');
const yahooFinance = require("yahoo-finance");

router.get('/test',async(req,res)=>{
    const url=`https://script.google.com/macros/s/AKfycbwpBePFAYnwnBxzG4zhtcrzYtauLDYSVPkaMQp7YAenSO8DaVNG_dItbaCOQZF9W0ti/exec`;
    const options = {
      "method": "GET",
    }
    const response = await fetch(url, options).then(res=>res.json()).then(data=>{
        const cdata=data.data;
        cdata.forEach((elem)=>{
            console.log(elem.Symbol)
        })
    });
    res.send("done");
})



router.get('/', (req, res)=>{
    var page={fields:{seo:{meta_description:"test",meta_keyword:"test"},title:"test"}}
    res.render('Markets/markets',{page:page})
})

router.get('/markets',(req, res)=>{
    res.redirect('/markets')
})

router.get('/stocks/us-stocks',async(req,res)=>{
    const url=`https://script.google.com/macros/s/AKfycbx-demXMS4gLaI7KkjVN-GPvHoYEnta8j5WuIIkvxpn94oT7dPEH-wObUgFXatkKN4L/exec`;
    const options = {
      "method": "GET",
    }
    let dataStocks=[]
    const response = await fetch(url, options).then(res=>res.json()).then(data=>{
        const cdata=data.data;
        cdata.forEach(elem=>{
            if(elem.Market=='US Stocks'){
                dataStocks.push(elem);
            }
        })
    });
    var rating=''
    const stocks=dataStocks.map(elem=>{
        
        fetch(`https://yfapi.net/ws/insights/v1/finance/insights?symbol=${elem.Symbol}`,{
            method : 'GET',
            headers:{
                'Content-Type': 'application/json',
                'X-API-KEY' : 'ey1Pl4aShiaVWabUX4hc42GOjOr1ONMK9BRaA9OK'
            }}).then(res=>res.json()).then(data=>{
                rating=
        `<tr class="${elem.Sector} ${elem.Industry}">
        <th>${elem.PandaAssetName}</th>
        <th>${elem.Price}</th>
        <th>${elem.ChangePct}</th>
        <th>${elem.Change}</th>
        <th>${data.finance.result.instrumentInfo.recommendation.rating}</th>
        <th>${elem.Volume.toLocaleString("en-US")}</th>
        <th>${elem.MarketCAP.toLocaleString("en-US")}</th>
        </tr>`
            }).catch(error=>{
                console.log(error)
            })
            console.log(rating)
        return`<tr class="${elem.Sector} ${elem.Industry}">
        <th>${elem.PandaAssetName}</th>
        <th>${elem.Price}</th>
        <th>${elem.ChangePct}</th>
        <th>${elem.Change}</th>
        <th>${rating}</th>
        <th>${elem.Volume.toLocaleString("en-US")}</th>
        <th>${elem.MarketCAP.toLocaleString("en-US")}</th>
        </tr>`
    }).join(' ');
    

    var page={fields:{seo:{meta_description:"test",meta_keyword:"test"},title:"test"}}
    res.render('Markets/usStocks',{page:page,stocks:stocks})
})

module.exports =router;