const express = require("express");
const router = express.Router();

router.get('/', (req, res)=>{
    var page={fields:{seo:{meta_description:"test",meta_keyword:"test"},title:"test"}}
    res.render('Markets/markets',{page:page})
})

router.get('/markets',(req, res)=>{
    res.redirect('/markets')
})

router.get('/stocks/us-stocks',(req,res)=>{
    var page={fields:{seo:{meta_description:"test",meta_keyword:"test"},title:"test"}}
    res.render('Markets/usStocks',{page:page})
})

module.exports =router;