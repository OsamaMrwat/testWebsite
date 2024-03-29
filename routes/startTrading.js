const express = require('express');
const router = express.Router();
var butter = require('buttercms')('eabb7d00a1cecacc7a57f771cc86fb0126ad94d8');
const fetch = require('node-fetch');

router.get('/trading-account-types', (req, res) => {
    butter.page.retrieve('*', 'trading-account-types')
        .then(function (resp) {
            var page1 = resp.data.data;
            res.render('StartTrading/accountTypes', {
                page: page1
            })
        })
        .catch(function (resp) {
            console.log(resp)
        });
})

router.get('/trading-demo-account', (req, res) => {
    butter.page.retrieve('*', 'trading-demo-account')
        .then(function (resp) {
            var page1 = resp.data.data;
            res.render('StartTrading/demoAccount', {
                page: page1
            })
        }).catch(function (resp) {
            console.log(resp)
        }
        )
})

router.get('/islamic-trading-account', (req, res) => {
    butter.page.retrieve('*', 'islamic-trading-account')
        .then(function (resp) {
            var page1 = resp.data.data;
            res.render('StartTrading/islamic', {
                page: page1
            })
        }).catch(function (resp) {
            console.log(resp)
        }
        )
})

router.get('/documents-policies', (req, res) => {
    butter.page.retrieve('*', 'documents-policies')
        .then(function (resp) {
            var page1 = resp.data.data;
            res.render('StartTrading/documentsPolicies', {
                page: page1
            })
        }).catch(function (resp) {
            console.log(resp)
        }
        )
})

router.get('/trading-fees', (req, res) => {
    butter.page.retrieve('*', 'trading-fees')
        .then(function (resp) {
            var page1 = resp.data.data;
            res.render('StartTrading/tradingFees', {
                page: page1
            })
        }).catch(function (resp) {
            console.log(resp)
        }
        )
})


router.get('/trading-hours', (req, res) => {
    butter.page.retrieve('*', 'trading-hours')
        .then(function (resp) {
            var page1 = resp.data.data;
            res.render('StartTrading/tradingHours', {
                page: page1
            })
        }).catch(function (resp) {
            console.log(resp)
        }
        )
})


router.get('/trading-calculator', (req, res) => {
    butter.page.retrieve('*', 'trading-calculator')
        .then(function (resp) {
            var page1 = resp.data.data;
            res.render('StartTrading/tradingCalculator', {
                page: page1
            })
        }).catch(function (resp) {
            console.log(resp)
        }
        )
})

router.get('/deposit-withdrawal', (req, res) => {
    butter.page.retrieve('*', 'deposit-withdrawal')
        .then(function (resp) {
            var page1 = resp.data.data;
            res.render('StartTrading/depositAndWithdrawal', {
                page: page1
            })
        }).catch(function (resp) {
            console.log(resp)
        }
        )
})


router.get('/0-commission-on-stocks', (req, res) => {
    butter.page.retrieve('*', '0-commission-on-stocks')
        .then(function (resp) {
            var page1 = resp.data.data;
            res.render('StartTrading/zeroCommission', {
                page: page1
            })
        }).catch(function (resp) {
            console.log(resp)
        }
        )
});

router.get('/cryptocurrency', async (req, res) => {
    const url = `https://evest.com/crypto`;
    const options = {
        "method": "GET",
    }
    const response = await fetch(url, options).then(res => res.json()).then(data => {

    });

    butter.page.retrieve('*', 'crypto')
        .then(function (resp) {
            var page1 = resp.data.data;
            res.render('StartTrading/crypto', {
                page: page1
            })
        }).catch(function (resp) {
            console.log(resp)
        }
        )
})

router.get('/eib', (req, res) => {
    butter.page.retrieve('*', 'eib')
        .then(function (resp) {
            var page1 = resp.data.data;
            res.render('StartTrading/EIBS', {
                page: page1
            })
        }).catch(function (resp) {
            console.log(resp)
        }
        )
})
module.exports = router;