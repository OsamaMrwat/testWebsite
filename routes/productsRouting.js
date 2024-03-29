const express=require('express');
const router = express.Router();
var butter = require('buttercms')(process.env.BUTTER_KEY);

router.get('/',(req, res) => {
     butter.page.retrieve('*', 'tools')
     .then(function(resp) {
        var page1 = resp.data.data;
        res.render('TradingProducts/products', {
            page:page1
        })
    })
    .catch(function(resp) {
        console.log(resp)
    });
})

module.exports = router;