const express=require('express');
const expressLayout=require('express-ejs-layouts')
require('dotenv').config()
const bodyParser = require('body-parser');
const nodemailer = require("nodemailer");
const upload=require('express-fileupload');
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
var butter = require('buttercms')(process.env.BUTTER_KEY);
const fetch = require('node-fetch');
const cors=require('cors');
const { ToadScheduler, SimpleIntervalJob, Task } = require('toad-scheduler')



const app=express();
app.use(require('express-status-monitor')());

const fs = require('fs');
const PORT= process.env.PORT||8080;
var xFrameOptions = require('x-frame-options')
 
app.use(xFrameOptions())
app.use(cors())
const evestRoutes= require('./routes/evest');
const tradingplatform=require('./routes/tradingPlatforms');
const startTrading=require('./routes/startTrading');
const arabicRouting=require('./routes/arabicRouting');
const spainshRouting=require('./routes/spainshRouting');
const marketsRouting=require('./routes/marketsRouting');
const productsRouting=require('./routes/productsRouting');

const mysql = require("mysql");
// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//set views
app.set('views','./views');
app.set('view engine','ejs')
app.use(expressLayout)


app.use(upload())


// Set static folder 
app.use(express.static('public'))
app.use('/css',express.static(__dirname+'/public/css'))
app.use('/images',express.static(__dirname+'/public/images'))
app.use('/fonts',express.static(__dirname+'/public/fonts'))
app.use('/js',express.static(__dirname+'/public/js'))
app.use('/node_modules',express.static(__dirname+'/node_modules'))
app.use('/trade-room',express.static(__dirname+'/public/trade-room'))
app.use('/legal',express.static(__dirname+'/public/legal'))
app.use('/publicFiles',express.static(__dirname+'/public/publicFiles'))


var connection = mysql.createConnection({
  host     : process.env.DB_HOST,
  user     : 'mena-evest_data',
  password : process.env.DB_PASSWORD,
  database : 'panda_db'
});

app.get("/coins/:id", (req, res) => {
  const startDate=Date.parse('2022-04-01T21:00:00')/1000;
  const endDate=Date.parse('2022-04-30T21:00:00')/1000;
  const assetsForbeding = ['BTCUSD','ETHUSD','LTCUSD','ETCUSD','DSHUSD','XRPUSD','YCCUSD','SHBUSD','ADAUSD','SOLUSD','XLMUSD','DOTUSD','DOGUST',
  '3M',
'ACTBLIZARD',
'ANGLO',
'B.PETROL',
'BARCLAYS',
'BATS',
'DOMINOS',
'MARKS',
'VODAFONE',
'BTGROUP',
'INVESTEC',
'HSBC',
'Lloyds',
'NatWest',
'AS-ROMA',
'ADS',
'ALLI',
'BASF',
'ANZ-ASX',
'BAYER',
'BMW',
'Beiersdorf',
'CONTINENTAL',
'CTX-ASX',
'DBFRA',
'MERCEDES',
'DPW',
'EOAN',
'DTELE',
'FRESENIUS',
'HEN',
'HM',
'HONDA',
'LAZIO',
'LUKOIL',
'MITSUBISHI',
'METRO',
'MTNGroup',
'NISSAN',
'REPSOL',
'SAP',
'ORG-ASX',
'Rosneft',
'RIO-ASX',
'SAND',
'SIE',
'Sberbank',
'TELFON',
'TELIA',
'TOSHIBA',
'TOTAL',
'VINCI',
'VOLV',
'VOWGEN',
'Alibaba-HK',
'FDJ',
'WOW-ASX',
'XIAOMI',
'GAZPROM',
'Lufthansa',
'SiemensH',
'HERO',
'LPKFLASER',
'Aramco',
'BERKSHIRE',
'AMAZON',
'HASBRO',
'AIG',
'ALCOA',
'APPLE',
'AMEX',
'ARCELOR',
'BAIDU',
'ArmourInc',
'AURORA',
'ATT',
'BOEING',
'Alibaba',
'B.A.Tobaco',
'BOA',
'CAT',
'CHEVRON',
'CITI',
'CISCO',
'DISNEY',
'COMCAST',
'COKE',
'CRONOS',
'Dropbox',
'EBAY',
'ESTEE',
'EXXM',
'ElectArts',
'FACEBOOK',
'FEDEX',
'FERRARI',
'FIREEYE',
'FOX',
'Ford',
'GAP',
'GE',
'GM',
'GOLDSACHS',
'GOOGLE',
'GOPRO',
'HPACK',
'HARLEY',
'INTEL',
'IBM',
'HILTON',
'JD',
'JNJ',
'JPM',
'KraftHeinz',
'LOCKHEED',
'LYFT',
'LibertyGlob',
'MA',
'MACYS',
'MANU',
'MCDON',
'MORGAN_STA',
'MSFT',
'NIKE',
'NOKIA',
'NSDQ_COMP',
'NTDOY',
'NVIDIA',
'Netflix',
'Oracle',
'PFIZER',
'PG',
'PepsiCo',
'QUALCOMM',
'RALPH',
'SONY',
'SBUX',
'SNAP',
'TEVA',
'Spotify',
'TESLA',
'TLRY-NSDQ',
'TOYOTA',
'TRIPADVISOR',
'UBER',
'RAYTHEON',
'UBS',
'VERIZON',
'TWITTER',
'Visa',
'VMWARE',
'WMART',
'WellFargo',
'WEED',
'Yandex',
'YELP',
'Delta',
'Vipshop',
'BIOGEN',
'BIONTECH',
'GILD',
'MODERNA',
'VIRBIOTECH',
'Vertex',
'ARCUS',
'CLOROX',
'COST',
'INOVIO',
'NANOVIR',
'ZOOM',
'AMGEN',
'SOUTHWEST',
'SPIRIT',
'CopaHold',
'AirTransp',
'SkyWest',
'HawaiianHL',
'Ryanair',
'Allegiant',
'WMusic',
'TakeTwo',
'Lululemon',
'DriveShack',
'ShakeShack',
'AMCentr',
'FreshPet',
'SRNETherap',
'Chewy',
'Carnival',
'GNUS',
'CarMax',
'HomeDepot',
'BlackBerry',
'DraftKings',
'CRIPSR',
'Splunk',
'DISCA',
'Zscaler',
'VirginG',
'Zuora',
'StitchFix',
'BeyondMeat',
'Pinterest',
'Twilio',
'Roku',
'Salesforce',
'SQUARE',
'ZYNGA',
'DicksSp',
'FootLocker',
'ETSY',
'DataDog',
'Workday',
'Fastly',
'Wayfair',
'AutoDesk',
'Redfin',
'Okta',
'Nutanix',
'ULTA',
'DollarTree',
'DocuSign',
'Teladoc',
'IntuitiveS',
'WIX',
'LEMONADE',
'NIKOLA',
'GOHEALTH',
'NCINO',
'UNG',
'UnileverNY',
'BlackRock',
'Shopify',
'HARMONY',
'HONEYWELL',
'NIO',
'RIOTINTO',
'BHPGROUP',
'Peloton',
'SNOWFLAKE',
'PROSUS',
'BOOHOO',
'EVOTEC',
'ADOBE',
'PAYPAL',
'PM',
'AIRBNB',
'INTESA',
'UNICREDIT',
'MEDIASET',
'SAIPEM',
'JUVENTUS',
'Stellantis',
'AMD',
'WASTE',
'JAGUARH',
'MICRONT',
'ENPHASE',
'FORTINET',
'NOVAVAX',
'ELECTRAMV',
'GAMESTOP',
'A.AIRLINES',
'COINBASE',
'VERANO',
'ROLLS-ROYCE',
'BAKER',
'TAIWANSMC',
'SPDR500',
'OCUGEN',
'ZIVOBIO',
'TORCHLIGHT',
'FIRSTSOLAR',
'SolarEdge',
'FISKER',
'EHANG',
'NEXTERA',
'BROOKFIELD',
'PlugPower',
'Opendoor',
'LucidGroup',
'AvePoint',
'ROBINHOOD',
'AGNCInvest',
'CANOO',
'BOOTBARN',
'ELEMENTS',
'INNOVATIVE',
'KORNIT',
'VERITIV',
'DOXIMITY',
'ALTRIA',
'UNICORP',
'LVMH',
'COUPANG',
'COHENCOMP',
'CHINAREC',
'THENINE',
'LithiumAmericas',
'Livent',
'RiotBlock',
'Marathon',
'Lightning',
'DidiGlobal',
'Bilibili',
'Canann',
'NewChinaIns',
'Fortress',
'MRK',
'CHEMOCEN',
'EQONEX',
'RIVIAN',
'YALLAGROUP',
'JUNIPER',
'MOODYS',
'DAVITA',
'VERISIGN',
'SIRIUS',
'CHARTER',
'STONECO',
'Dior',
'Hermes',
'Kering',
'Airbus',
'Unity ',
'NUHOLDS',
'OXYPETRO',
'KROGER',
'CHIPOTILE',
'ANGHAMI',
'HPACKEnt'];
  connection.query(
    `select * from panda_db.trading_trades where login=${req.params.id} and volume>0 and open_time>=${startDate} and open_time<=${endDate}`,
    function (error, results, fields) {
      if (error) throw error;
      var volumeCount=0;
      results.forEach(element => {
        if(!(assetsForbeding.includes(element.symbol))){
          volumeCount+=element.volume;
        }
        
      })
      var dataToSend={
        coins:(volumeCount*5)
      }
      res.send(dataToSend);
    }
  );
});
var count=0;

/*SiteMaps*/
const axios=require('axios')
async function getPostSiteMaps(){
  let all_links=[];
  for (let page = 1; page < 10; page++) {
    await axios
      .get(
        `https://cms.evest.com/wp-json/wp/v2/posts?page=${page}&per_page=100`
      )
      .then((res) => {
        // push all links into our all_links variable
        for (let ele in res.data) {
          if(!res.data[ele].link.includes('commodities')){
          all_links.push(res.data[ele].link.substring(22,));}
        }
      })
      .catch((error) => {
        return;
      });
  }
  for (let page = 1; page < 10; page++) {
    await axios
      .get(
        `https://cms.evest.com/ar/wp-json/wp/v2/posts?page=${page}&per_page=100`
      )
      .then((res) => {
        // push all links into our all_links variable
        for (let ele in res.data) {
          all_links.push(res.data[ele].link.substring(22,));
        }
      })
      .catch((error) => {
        return;
      });
  }
  let sitemap_entries = all_links.map((link) => {
    // you got access to every property of those links here. Note the \n I've added to format it in the output - you don't need that in the real XML.
    return `\n<url><loc>https://www.evest.com/${link}</loc></url>`
  })
00
  // the actual sitemap with all it's entries.
  let sitemap = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
xmlns:image="http://www.sitemaps.org/schemas/sitemap-image/1.1" 
xmlns:video="http://www.sitemaps.org/schemas/sitemap-video/1.1">${sitemap_entries.join('')}
</urlset>`

// writeFile function with filename, content and callback function
fs.writeFile('./public/post-sitemap.xml', sitemap, function (err) {
  
  if (err) throw err;
  console.log(' Post Sitemap -File is created successfully.'+" "+count++);
});

}
async function getPagesSiteMaps(){
  let all_links=[];
  for (let page = 1; page < 10; page++) {
    await axios
      .get(
        `https://cms.evest.com/wp-json/wp/v2/pages?page=${page}&per_page=100`
      )
      .then((res) => {
        // push all links into our all_links variable
        for (let ele in res.data) {
          all_links.push(res.data[ele].link.substring(22,));
        }
      })
      .catch((error) => {
        return;
      });
  }
  for (let page = 1; page < 10; page++) {
    await axios
      .get(
        `https://cms.evest.com/ar/wp-json/wp/v2/pages?page=${page}&per_page=100`
      )
      .then((res) => {
        // push all links into our all_links variable
        for (let ele in res.data) {
          all_links.push(res.data[ele].link.substring(22,));
        }
      })
      .catch((error) => {
        return;
      });
  }
  let sitemap_entries = all_links.map((link) => {
    // you got access to every property of those links here. Note the \n I've added to format it in the output - you don't need that in the real XML.
    return `\n<url><loc>https://www.evest.com/${link}</loc></url>`
  })

  // the actual sitemap with all it's entries.
  let sitemap = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
xmlns:image="http://www.sitemaps.org/schemas/sitemap-image/1.1" 
xmlns:video="http://www.sitemaps.org/schemas/sitemap-video/1.1">${sitemap_entries.join('')}
</urlset>`

// writeFile function with filename, content and callback function
fs.writeFile('./public/page-sitemap.xml', sitemap, function (err) {
  if (err) throw err;
  console.log('File is created successfully.');
});
}
async function getCategoriesSiteMaps(){
  let all_links=[];
  for (let page = 1; page < 10; page++) {
    await axios
      .get(
        `https://cms.evest.com/wp-json/wp/v2/categories?page=${page}&per_page=100`
      )
      .then((res) => {
        // push all links into our all_links variable
        for (let ele in res.data) {
          all_links.push(res.data[ele].link.substring(22,));
        }
      })
      .catch((error) => {
        return;
      });
  }
  for (let page = 1; page < 10; page++) {
    await axios
      .get(
        `https://cms.evest.com/ar/wp-json/wp/v2/categories?page=${page}&per_page=100`
      )
      .then((res) => {
        // push all links into our all_links variable
        for (let ele in res.data) {
          all_links.push(res.data[ele].link.substring(22,));
        }
      })
      .catch((error) => {
        return;
      });
  }
  let sitemap_entries = all_links.map((link) => {
    // you got access to every property of those links here. Note the \n I've added to format it in the output - you don't need that in the real XML.
    return `\n<url><loc>https://www.evest.com/${link}</loc></url>`
  })

  // the actual sitemap with all it's entries.
  let sitemap = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
xmlns:image="http://www.sitemaps.org/schemas/sitemap-image/1.1" 
xmlns:video="http://www.sitemaps.org/schemas/sitemap-video/1.1">${sitemap_entries.join('')}
</urlset>`

// writeFile function with filename, content and callback function
fs.writeFile('./public/category-sitemap.xml', sitemap, function (err) {
  if (err) throw err;
  console.log('File is created successfully.');
});
}
async function getTagsSiteMaps(){
  let all_links=[];
  for (let page = 1; page < 10; page++) {
    await axios
      .get(
        `https://cms.evest.com/wp-json/wp/v2/tags?page=${page}&per_page=100`
      )
      .then((res) => {
        // push all links into our all_links variable
        for (let ele in res.data) {
          all_links.push(res.data[ele].link.substring(22,));
        }
      })
      .catch((error) => {
        return;
      });
  }
  for (let page = 1; page < 10; page++) {
    await axios
      .get(
        `https://cms.evest.com/ar/wp-json/wp/v2/tags?page=${page}&per_page=100`
      )
      .then((res) => {
        // push all links into our all_links variable
        for (let ele in res.data) {
          all_links.push(res.data[ele].link.substring(22,));
        }
      })
      .catch((error) => {
        return;
      });
  }
  let sitemap_entries = all_links.map((link) => {
    // you got access to every property of those links here. Note the \n I've added to format it in the output - you don't need that in the real XML.
    return `\n<url><loc>https://www.evest.com/${link}</loc></url>`
  })

  // the actual sitemap with all it's entries.
  let sitemap = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
xmlns:image="http://www.sitemaps.org/schemas/sitemap-image/1.1" 
xmlns:video="http://www.sitemaps.org/schemas/sitemap-video/1.1">${sitemap_entries.join('')}
</urlset>`

// writeFile function with filename, content and callback function
fs.writeFile('./public/post_tag-sitemap.xml', sitemap, function (err) {
  if (err) throw err;
  console.log('File is created successfully.');
});
}
async function getCommoditiesSiteMaps(){
  let all_links=[];
  for (let page = 1; page < 10; page++) {
    await axios
      .get(
        `https://cms.evest.com/wp-json/wp/v2/commodities?page=${page}&per_page=100`
      )
      .then((res) => {
        // push all links into our all_links variable
        for (let ele in res.data) {
          all_links.push(res.data[ele].link.substring(22,));
        }
      })
      .catch((error) => {
        return;
      });
  }
  for (let page = 1; page < 10; page++) {
    await axios
      .get(
        `https://cms.evest.com/ar/wp-json/wp/v2/commodities?page=${page}&per_page=100`
      )
      .then((res) => {
        // push all links into our all_links variable
        for (let ele in res.data) {
          all_links.push(res.data[ele].link.substring(22,));
        }
      })
      .catch((error) => {
        return;
      });
  }
  let sitemap_entries = all_links.map((link) => {
    // you got access to every property of those links here. Note the \n I've added to format it in the output - you don't need that in the real XML.
    return `\n<url><loc>https://www.evest.com/${link}</loc></url>`
  })

  // the actual sitemap with all it's entries.
  let sitemap = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
xmlns:image="http://www.sitemaps.org/schemas/sitemap-image/1.1" 
xmlns:video="http://www.sitemaps.org/schemas/sitemap-video/1.1">${sitemap_entries.join('')}
</urlset>`

// writeFile function with filename, content and callback function
fs.writeFile('./public/commodities-sitemap.xml', sitemap, function (err) {
  if (err) throw err;
  console.log('File is created successfully.');
});
}

getPostSiteMaps();
getPagesSiteMaps();
getCategoriesSiteMaps();
getTagsSiteMaps();
getCommoditiesSiteMaps();

// const postSitemap=

const scheduler = new ToadScheduler()

const task = new Task('simple task', getPostSiteMaps)
const job = new SimpleIntervalJob({ hours:2, }, task)

scheduler.addSimpleIntervalJob(job)

const SitemapGenerator = require('sitemap-generator');
// create generator

const generator = SitemapGenerator('http://www.evest.com', {
    maxDepth: 0,
  filepath: './public/sitemap.xml',
  maxEntriesPerFile: 50000,
  stripQuerystring: true
});

// register event listeners
generator.on('done', () => {
  // sitemaps created
});

// start the crawler
generator.start();


app.get('/post-sitemap.xml', async(req, res)=>{
  let all_links=[];
  for (let page = 1; page < 10; page++) {
    await axios
      .get(
        `https://cms.evest.com/wp-json/wp/v2/posts?page=${page}&per_page=100`
      )
      .then((res) => {
        // push all links into our all_links variable
        for (let ele in res.data) {
          if(!res.data[ele].link.includes('commodities')){
          all_links.push(res.data[ele].link.substring(22,));}
        }
      })
      .catch((error) => {
        return;
      });
  }
  for (let page = 1; page < 10; page++) {
    await axios
      .get(
        `https://cms.evest.com/ar/wp-json/wp/v2/posts?page=${page}&per_page=100`
      )
      .then((res) => {
        // push all links into our all_links variable
        for (let ele in res.data) {
          all_links.push(res.data[ele].link.substring(22,));
        }
      })
      .catch((error) => {
        return;
      });
  }
  let sitemap_entries = all_links.map((link) => {
    // you got access to every property of those links here. Note the \n I've added to format it in the output - you don't need that in the real XML.
    return `\n<url><loc>https://www.evest.com/${link}</loc></url>`
  })

  // the actual sitemap with all it's entries.
  let sitemap = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
xmlns:image="http://www.sitemaps.org/schemas/sitemap-image/1.1" 
xmlns:video="http://www.sitemaps.org/schemas/sitemap-video/1.1">${sitemap_entries.join('')}
</urlset>`

// writeFile function with filename, content and callback function
fs.writeFile('./public/post-sitemap.xml', sitemap, function (err) {
  var count=0;
  if (err) throw err;
  console.log('File is created successfully.'+" "+count++);
  res.sendFile(__dirname+'/public/post-sitemap.xml');
});

  // getPagesSiteMaps();
  // res.sendFile(__dirname+'/public/post_sitemap.xml');
})



/*StockWidget API*/
const myapi=require('./pricesAPI');
const { start } = require('repl');
app.get('/stocks',(req,res)=>{
res.send(myapi.getStocks);
})
app.get('/currency',(req,res)=>{
  res.send(myapi.getCurrency)
})
app.get('/commodities',(req,res)=>{
  res.send(myapi.getCommodities)
})
app.get('/indices',(req,res)=>{
  res.send(myapi.getIndices);
})
app.get('/crypto',(req,res)=>{
  res.send(myapi.getCrypto);
})

// Routes
app.get('/', (req, res) => {
  res.get('X-Frame-Options') // === 'Deny'
  butter.page.retrieve('*','homepage-en')
  .then(function(resp){
    var page1=resp.data.data;
    res.render('index',{page:page1});
  })
})

app.get('/ceo',(req,res)=>{
  butter.page.retrieve('*', 'meet-ceo')
  .then(function(resp) {
    var page1 = resp.data.data;
    res.render('ceo', {
      page:page1
    })
  })
  .catch(function(resp) {
      console.log(resp)
  }); 
})

app.get('/trade-room',(req,res)=>{
    res.sendFile(__dirname+'/public/trade-room/static.html');
})

app.get('/mobile',(req,res)=>{
  res.sendFile(__dirname+'/public/mobile/index.html');
});

app.get('/trading-academy/:loginStatus',(req,res)=>{
  butter.page.retrieve('*', 'trading-academy')
  .then(function(resp) {
    var page1 = resp.data.data;
    if(req.params.loginStatus=='true'){
      res.render('tradingAcademyLoggedin', {
        page:page1
      })
    }else{
      res.render('tradingAcademy', {
        page:page1
      }) 
    }
  })
  .catch(function(resp) {
      console.log(resp)
  });
})
app.get('/trading-academy',(req,res)=>{
  butter.page.retrieve('*', 'trading-academy')
  .then(function(resp) {
    var page1 = resp.data.data;
      res.render('tradingAcademy', {
        page:page1
      }) 
    })
  .catch(function(resp) {
      console.log(resp)
  });
})

app.get('/faq',(req,res)=>{
  butter.page.retrieve('*', 'faq')
  .then(function(resp) {
    var page1 = resp.data.data;
    res.render('faq', {
      page:page1
    })
  })
  .catch(function(resp) {
      console.log(resp)
  });
})



app.get('/oil-news',async (req,res)=>{
  const url="https://cms.evest.com/wp-json/wp/v2/posts?_embed&categories=42&per_page=6&page=1";
  const options = {
    method: 'GET',
  };
  const response = await fetch(url, options)
  .then(res=>res.json())
  .then((data)=>{
    var page={fields:{seo:{meta_description:`Oil news, stay up to date with the latest updates with Evest on the latest Oil news and updates including the economy, the stock`,
    meta_keywords:`Oil News`,page_title:`Oil News - Evest latest updates and news about oil trading`}}};
    
    const article = data.map(post => {
      let date=post.date.split('T')[0];
        return `<div class="card">
          <div> 
                <a href="${post.link}"> <img class="card-img-top" src="${post.featured_image_url}" alt="Card image cap"></a>
<div class="card-body">
<a href="${post.link}"><h5 class="card-title">${post.title.rendered}</h5></a>
<div class="card-text description">${post.excerpt.rendered}</div>
<a class="btn btn-filled readmore" href="${post.link}">Read more</a>
</div></div>
<div class="card-footer dateCreated">
${date}
</div>
</div>`
    }).join("");
    res.render('Education/oil',{page:page,articles:article});
  })
});
app.get('/oil-news/:slug', async (req,res)=>{
  const url=`https://cms.evest.com/wp-json/wp/v2/posts?_embed&slug=${req.params.slug}`;
  const options = {
    "method": "GET",
  }
  const response = await fetch(url, options).then(res=>res.json()).then(data=>{
    var article=data;
    const data_tags=Object.keys(data[0].yoast_head_json.schema).map(function(key){return data[0].yoast_head_json.schema[key];});
    const tags=data_tags[1][5]?data_tags[1][5].keywords.map(tag=>{
    return `<a class="badge bg-secondary text-decoration-none link-light" href="/tag/${tag}">${tag}</a>`
  }).join(' '):" ";
  

    var page={fields:{seo:{meta_description:`${article[0].yoast_head_json.og_description}`,meta_keyword:`${data_tags[1][5].keywords}`,page_title:`${article[0].yoast_head_json.og_title}`}}};
    res.render('Education/article',{page:page,content:article[0].content.rendered,
      titleArticle:article[0].title.rendered,
      imgUrl:article[0].featured_image_url,
      date:article[0].date,
      url:article[0].link,
      tags:tags,
      og_img:`${article[0].yoast_head_json.og_image.url}`});
  }).catch(err=>console.log(err));
  
});



app.get('/gold-news', async(req,res)=>{
  const url='https://cms.evest.com/wp-json/wp/v2/posts?_embed&categories=41&per_page=6&page=1';
  const options = {
    method: 'GET',
  };
  const response = await fetch(url, options)
  .then(res=>res.json())
  .then((data)=>{
    var page={fields:{seo:{meta_description:`Gold trading news, stay up to date with the latest updates with Evest on the latest gold news and economy, stock, share market online`,
    meta_keywords:`Gold News`,page_title:`Gold Trading News - Evest latest news and updates on gold trading`}}};
    const article = data.map(post => {
      let date=post.date.split('T')[0];
        return `<div class="card">
          <div> 
                 <a href="${post.link}"><img class="card-img-top" src="${post.featured_image_url}" alt="Card image cap"></a>
<div class="card-body">
<a hef="${post.link}"><h5 class="card-title">${post.title.rendered}</h5></a>
<div class="card-text description">${post.excerpt.rendered}</div>
<a class="btn btn-filled readmore" href="${post.link}">Read more</a>
</div></div>
<div class="card-footer dateCreated">
${date}
</div>
</div>`
    }).join("");
    
    res.render('Education/gold',{page:page,articles: article});
  });

});
app.get('/gold-news/:slug', async (req,res)=>{
  const url=`https://cms.evest.com/wp-json/wp/v2/posts?_embed&slug=${req.params.slug}`;
  const options = {
    "method": "GET",
  }
  const response = await fetch(url, options).then(res=>res.json()).then(data=>{
    var article=data;
    const data_tags=Object.keys(data[0].yoast_head_json.schema).map(function(key){return data[0].yoast_head_json.schema[key];});
    const tags=data_tags[1][5]?data_tags[1][5].keywords.map(tag=>{
    return `<a class="badge bg-secondary text-decoration-none link-light" href="/tag/${tag}">${tag}</a>`
  }).join(' '):" ";
  

    var page={fields:{seo:{meta_description:`${article[0].yoast_head_json.og_description}`,meta_keyword:`${data_tags[1][5].keywords}`,page_title:`${article[0].yoast_head_json.og_title}`}}};
    res.render('Education/article',{page:page,content:article[0].content.rendered,
      titleArticle:article[0].title.rendered,
      imgUrl:article[0].featured_image_url,
      date:article[0].date,
      url:article[0].link,
      tags:tags,
      og_img:`${article[0].yoast_head_json.og_image.url}`});
  }).catch(err=>console.log(err));
  
  
});


app.get('/market-news', async(req,res)=>{
  const url='https://cms.evest.com/wp-json/wp/v2/posts?_embed&categories=46&per_page=6&page=1';
  const options = {
    method: 'GET',
  };
  const response = await fetch(url, options)
  .then(res=>res.json())
  .then((data)=>{
    var page={fields:{seo:{meta_description:`Stock market news, stay up to date with the latest updates with Evest on the economy stock market and share market, ٍstock news`,
    meta_keywords:`Stock Market News`,page_title:`Stock Market News - Evest latest financial news and updates`}}};
    const article = data.map(post => {
      let date=post.date.split('T')[0];
        return `<div class="card">
          <div> 
              <a href="${post.link}"><img class="card-img-top" src="${post.featured_image_url}" alt="Card image cap"></a>
<div class="card-body">
<a href="${post.link}"><h5 class="card-title">${post.title.rendered}</h5></a>
<div class="card-text description">${post.excerpt.rendered}</div>
<a class="btn btn-filled readmore" href="${post.link}">Read more</a>
</div></div>
<div class="card-footer dateCreated">
${date}
</div>
</div>`
    }).join("");
    res.render('Education/market',{page:page, articles: article});
  });


});
app.get('/market-news/:slug', async(req,res)=>{
  const url=`https://cms.evest.com/wp-json/wp/v2/posts?_embed&slug=${req.params.slug}`;
  const options = {
    "method": "GET",
  }
  const response = await fetch(url, options).then(res=>res.json()).then(data=>{
    var article=data;
    const data_tags=Object.keys(data[0].yoast_head_json.schema).map(function(key){return data[0].yoast_head_json.schema[key];});
    const tags=data_tags[1][5]?data_tags[1][5].keywords.map(tag=>{
    return `<a class="badge bg-secondary text-decoration-none link-light" href="/tag/${tag}">${tag}</a>`
  }).join(' '):" ";
  

    var page={fields:{seo:{meta_description:`${article[0].yoast_head_json.og_description}`,meta_keyword:`${data_tags[1][5].keywords}`,page_title:`${article[0].yoast_head_json.og_title}`}}};
    res.render('Education/article',{page:page,content:article[0].content.rendered,
      titleArticle:article[0].title.rendered,
      imgUrl:article[0].featured_image_url,
      date:article[0].date,
      url:article[0].link,
      tags:tags,
      og_img:`${article[0].yoast_head_json.og_image.url}`});
  }).catch(err=>console.log(err));
  
});


app.get('/trading-news',async(req,res)=>{
  const url='https://cms.evest.com/wp-json/wp/v2/posts?_embed&per_page=6&page=1';
  const options = {
    method: 'GET',
  };
  const response = await fetch(url, options)
  .then(res=>res.json())
  .then((data)=>{
    var page={fields:{seo:{meta_description:`Trading News, Get the latest Trading News of the market now from anywhere in the world directly to you! Top and latest news about stock market`,
    meta_keywords:`Trading News`,page_title:`Trading News - Evest Top and latest news about stock market`}}};
    const article = data.map(post => {
      let date=post.date.split('T')[0];
        return `<div class="card">
          <div> 
                 <a href="${post.link}"><img class="card-img-top" src="${post.featured_image_url}" alt="Card image cap"></a>
<div class="card-body">
<a href="${post.link}"><h5 class="card-title">${post.title.rendered}</h5></a>
<div class="card-text description">${post.excerpt.rendered}</div>
<a class="btn btn-filled readmore" href="${post.link}">Read more</a>
</div></div>
<div class="card-footer dateCreated">
${date}
</div>
</div>`
    }).join('');
    res.render('Education/tradingNews',{page:page ,articles:article});
  });


});
app.get('/trading-news/:slug',async (req,res)=>{
  const url=`https://cms.evest.com/wp-json/wp/v2/posts?_embed&slug=${req.params.slug}`;
  const options = {
    "method": "GET",
  }
  const response = await fetch(url, options).then(res=>res.json()).then(data=>{
    var article=data;
    const data_tags=Object.keys(data[0].yoast_head_json.schema).map(function(key){return data[0].yoast_head_json.schema[key];});
    const tags=data_tags[1][5]?data_tags[1][5].keywords.map(tag=>{
    return `<a class="badge bg-secondary text-decoration-none link-light" href="/tag/${tag}">${tag}</a>`
  }).join(' '):" ";
  

    var page={fields:{seo:{meta_description:`${article[0].yoast_head_json.og_description}`,meta_keyword:`${data_tags[1][5].keywords}`,page_title:`${article[0].yoast_head_json.og_title}`}}};
    res.render('Education/article',{page:page,content:article[0].content.rendered,
      titleArticle:article[0].title.rendered,
      imgUrl:article[0].featured_image_url,
      date:article[0].date,
      url:article[0].link,
      tags:tags,
      og_img:`${article[0].yoast_head_json.og_image.url}`});
  }).catch(err=>console.log(err));
  
});





app.post('/send',(req,res)=>{
  const msg = {
    to: 'support@evest.com',
    from: 'no-replay@customers-evest.com', // Use the email address or domain you verified above
    subject: `${req.body.email} Send You New Message from the support website page`,
    html: `  <h1>You Got New Message</h1>
    <p>EMAIL: ${req.body.email}.<br><br>
    FULL NAME: ${req.body.fullName}.<br><br>
    SUBJECT: ${req.body.subject}.<br><br>
    MESSAGE: ${req.body.message}.<br></p>`,
    replyTo: `${req.body.email}`
  };
  //ES6
  sgMail
    .send(msg)
    .then(() => {}, error => {
      console.error(error);
  
      if (error.response) {
        console.error(error.response.body)
      }
    });
butter.page.retrieve('*', 'contact-us')
.then(function(resp) {
    var page1 = resp.data.data;
    res.render('Evest/contactUs', {
        page:page1,
        message:'Message Sent Thank You,We will contact you soon .'
    })
})
.catch(function(resp) {
    console.log(resp)
});
})

app.post('/ceo',(req,res)=>{
  const msg = {
    to: 'ceo@evest.com',
    from: '"CEO Page"<no-replay@customers-evest.com>', // Use the email address or domain you verified above
    subject: ` ${req.body.email} Send You New Message from the CEO website page`,
    html: `  <h1>You Got New Message</h1>
    <p>EMAIL: ${req.body.email}.<br><br>
    FULL NAME: ${req.body.fullName}.<br><br>
    SUBJECT: ${req.body.subject}.<br><br>
    MESSAGE: ${req.body.message}.<br></p>`,
    replyTo: `${req.body.email}`,
    
  };
  //ES6
  sgMail
    .send(msg)
    .then(() => {}, error => {
      console.error(error);
  
      if (error.response) {
        console.error(error.response.body)
      }
    });
  res.redirect('/ceo')
})


const getTag=require('./tagsApi')
app.get('/tag/:tag',async (req,res)=>{ 
  const tag_id=getTag.englishTags.find(elem=>elem.Name === req.params.tag).tag_id;
  console.log(+req.params.tag+" "+tag_id);
  if(tag_id === undefined){
    res.redirect('/');
  }
          const url = `https://cms.evest.com/wp-json/wp/v2/posts?_embed&tags=${tag_id}&per_page=6&page=1`;
          const options = {
            method: "GET",
          };
          const response = fetch(url, options)
            .then((res) => res.json())
            .then((data) => {
              var page = {
                fields: {
                  seo: {
                    meta_description: `Archive of ${req.params.tag}`,
                    meta_keyword: `${req.params.tag}`,
                    page_title: `Evest- ${req.params.tag} Archive`,
                  },
                },
              };
              const article = data
                .map((post) => {
                  let date = post.date.split("T")[0];
                  return `<div class="card">
                    <div> 
                           <a href='${post.link}'>  <img class="card-img-top" src="${post.featured_image_url}" alt="Card image cap" title="${post.title.rendered}"> </a>
        <div class="card-body">
        <a href='${post.link}' ><h5 class="card-title">${post.title.rendered}</h5></a>
        <div class="card-text description">${post.excerpt.rendered}</div>
        <a class="btn btn-filled readmore" href='${post.link}'>read more</a>
        </div></div>
        <div class="card-footer dateCreated">
        ${date}
        </div>
        </div>`;
                })
                .join("");
              res.render("Education/tags", {
                page: page,
                articles: article,
                pageTitle: `Evest- ${req.params.tag} Archive`,
                tagId: tag_id,
              });
            })
            .catch((err) => {
              console.log("this is error from tag in index page");
              res.redirect("/");
            });
});


app.use('/evest',evestRoutes);
app.use('/',tradingplatform);
app.use('/start-trading',startTrading);
app.use('/markets',marketsRouting);
app.use('/trading-products',productsRouting);



/*Arabic Routing*/
app.use('/ar',arabicRouting);

/*Spainsh Routing*/
app.use('/es',spainshRouting);



//upload Files to Fees
app.get('/upload',(req,res)=>{
  const reject = () => {
    res.setHeader('www-authenticate', 'Basic')
    res.sendStatus(401)
  }

  const authorization = req.headers.authorization

  if(!authorization) {
    return reject()
  }

  const [username, password] = Buffer.from(authorization.replace('Basic ', ''), 'base64').toString().split(':')

  if(! (username === 'admin' && password === 'q53hh=-Y5Sat?vUj')) {
    return reject()
  }
  var page = {
    fields: {
      seo: {
        meta_description:
          "",
        meta_keywords: ``,
        page_title: `upload file to get public link`,
      },
    },
  };
  res.render('upload',{page:page,link:""});
})


app.post('/upload',(req,res)=>{
  if(req.files){
    var file = req.files.file;
    var filename= file.name;
    file.mv('./public/publicFiles/'+filename,function(err){
      if(err){
        res.send(err)
      }else{
        var page = {
          fields: {
            seo: {
              meta_description:
                "",
              meta_keywords: ``,
              page_title: `upload file to get public link`,
            },
          },
        };
        res.render('upload',{page:page,link:`https://evest.com/publicFiles/${filename}`})
      }
    })
  }
})


/* redirect for not found routes*/
app.get("*",(req,res) => {
  res.redirect('/');
})


app.listen(PORT,()=>{
    console.log(`server start on PORT:${PORT}`)
})