const express=require('express');
const router = express.Router();
var butter = require('buttercms')('eabb7d00a1cecacc7a57f771cc86fb0126ad94d8');

router.get('/mobile-trading',(req,res)=>{
    butter.page.retrieve('*', 'mobile-trading')
    .then(function(resp) {
        var page1 = resp.data.data;
        res.render('Platforms/mobile', {
            page:page1
        })
    })
    .catch(function(resp) {
        console.log(resp)
    });
})

router.get('/web-trading',(req,res)=>{
    butter.page.retrieve('*', 'web-trading')
    .then(function(resp) {
        var page1 = resp.data.data;
        res.render('Platforms/web', {
            page:page1
        })
    })
    .catch(function(resp) {
        console.log(resp)
    });
})

router.get('/metatrader-5',(req,res)=>{
    butter.page.retrieve('*', 'metatrader-5')
    .then(function(resp) {
        var page1 = resp.data.data;
        res.render('Platforms/metatrader', {
            page:page1
        })
    })
    .catch(function(resp) {
        console.log(resp)
    });
})

router.get('/trading-app',(req,res)=>{
    butter.page.retrieve('*', 'trading-app')
    .then(function(resp) {
        var page1 = resp.data.data;
        res.render('Platforms/tradingApp', {
            page:page1
        })
    })
    .catch(function(resp) {
        console.log(resp)
    });
})

module.exports = router;