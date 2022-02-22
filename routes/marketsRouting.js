const express = require("express");
const router = express.Router();
const fetch = require('node-fetch');


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
                console.log(elem.Symbol)
            }
        })
    });
    // console.log(dataStocks.length)
    const stocks=dataStocks.map(elem=>{
        return`<tr>
        <th>${elem.PandaAssetName}</th>
        <th>${elem.Price}</th>
        <th>${elem.Change}</th>
        <th>${elem.ChangePct}</th>
        <th>${elem.Volume}</th>
        <th>${elem.MarketCAP}</th>
        </tr>`
    }).join(' ');
    var page={fields:{seo:{meta_description:"test",meta_keyword:"test"},title:"test"}}
    res.render('Markets/usStocks',{page:page,stocks:stocks})
})

module.exports =router;