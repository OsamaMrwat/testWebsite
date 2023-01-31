const express = require("express");
const expressLayout = require("express-ejs-layouts");
require("dotenv").config();
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const upload = require("express-fileupload");
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
var butter = require("buttercms")("eabb7d00a1cecacc7a57f771cc86fb0126ad94d8");
const fetch = require("node-fetch");
const cors = require("cors");
const { ToadScheduler, SimpleIntervalJob, Task } = require("toad-scheduler");
const helmet = require("helmet");
//Cheque Zone Implementation
const config = require("./config");
const cookieParser = require("cookie-parser");
const request = require("request");
var http = require("http");
const IP = require('ip');
/*SiteMaps*/
const axios = require("axios");

const app = express();
app.use(require("express-status-monitor")());
//cheqZone Implementation for cheque zone
app.use(cookieParser());

const fs = require("fs");
const PORT = process.env.PORT || 8080;
var xFrameOptions = require("x-frame-options");

app.use(xFrameOptions());
app.use(cors());
const evestRoutes = require("./routes/evest");
const tradingplatform = require("./routes/tradingPlatforms");
const startTrading = require("./routes/startTrading");
const arabicRouting = require("./routes/arabicRouting");
const spainshRouting = require("./routes/spainshRouting");
const marketsRouting = require("./routes/marketsRouting");
const productsRouting = require("./routes/productsRouting");

//helemet for security
app.use(helmet.frameguard({ action: "sameorigin" }));

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//set views
app.set("views", "./views");
app.set("view engine", "ejs");
app.use(expressLayout);

app.use(upload());

// Set static folder
app.use(express.static("public"));
app.use("/css", express.static(__dirname + "/public/css"));
app.use("/images", express.static(__dirname + "/public/images"));
app.use("/fonts", express.static(__dirname + "/public/fonts"));
app.use("/js", express.static(__dirname + "/public/js"));
app.use("/node_modules", express.static(__dirname + "/node_modules"));
app.use("/trade-room", express.static(__dirname + "/public/trade-room"));
app.use("/legal", express.static(__dirname + "/public/legal"));
app.use("/publicFiles", express.static(__dirname + "/public/publicFiles"));

var count = 0;


// app.use("*", async (req, res, next) => {
//   let ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
//   const form = {
//     ApiKey: "84f32934-b799-442e-b155-38903b4ef453",
//     TagHash: "2ec062e11ff1c8d7427ff441a149affa",
//     ClientIP: ip.split(",")[0],
//     RequestURL: `${req.protocol}://${req.get("host")}${req.originalUrl}`,
//     ResourceType: req.headers["content-type"] || req.headers["Content-Type"],
//     Method: req.method,
//     Host: req.headers["host"] || req.headers["Host"],
//     UserAgent: req.headers["user-agent"] || req.headers["User-Agent"],
//     Accept: req.headers["accept"] || req.headers["Accept"],
//     AcceptLanguage:
//       req.headers["accept-language"] || req.headers["Accept-Language"],
//     AcceptEncoding:
//       req.headers["accept-encoding"] || req.headers["Accept-Encoding"],
//     HeaderNames:
//       "Host,User-Agent,Accept,Accept-Langauge,Accept-Encoding,Cookie",
//     CheqCookie: req.cookies["_cheq_rti"],
//     EventType: "page_load",
//   };

//   request.post(
//     {
//       url: "https://obs.cheqzone.com/v1/realtime-interception",
//       headers: { "Content-Type": "application/x-www-form-urlencoded" },
//       form,
//     },
//     (error, response) => {
//       if (error) {
//         console.log("error: ", error);
//       }
//       try {
//         console.log(response.body);
//         JSON.parse(response.body);
//         next();
//       } catch (err) {
//         console.error(err);
//         next();
//       }
//     }
//   );


// });


/*Arabic Routing*/
app.use("/ar", arabicRouting);

/*Spainsh Routing*/
// app.use("/es", spainshRouting);



app.use('/documents', (req, res) => {


  const reject = () => {
    res.setHeader("www-authenticate", "Basic");
    res.sendStatus(401);
  };

  const authorization = req.headers.authorization;
  if (!authorization) {
    return reject();
  }

  const [username, password] = Buffer.from(
    authorization.replace("Basic ", ""),
    "base64"
  )
    .toString()
    .split(":");

  if (!(username === process.env.DOCUMENTS_USER_NAME && password === process.env.DOCUMENTS_USER_PASS)) {
    return reject();
  }


  var page = {
    fields: {
      seo: {
        meta_description: "",
        meta_keywords: ``,
        page_title: `upload file to get public link`,
      },
    },
  };
  res.render("documents", { page: page, link: "", uploaded: false });
})


app.post('/documentUpload', (req, res) => {
  const data = req.body;

  const filesNames = {
    'COMPLAINTS': { en: 'EN-Complaint_Policy.pdf', ar: 'AR-Atria financial Ltd-Complaint Policy.pdf' },
    'RISK_DISCLOSURE': { en: 'EN-RISK_DISCLOSURE.pdf', ar: 'AR-Atria Financial Ltd-RISK DISCLOSURES.pdf' },
    'KYC': { en: 'EN-KNOW-YOUR-CUSTOMER-REQUIREMENTS.pdf', ar: 'AR-KNOW-YOUR-CUSTOMER-REQUIREMENTS.pdf' },
    'TERMS_AND_CONDITIONS': { en: 'EN-TERMS_AND_CONDITIONS.pdf', ar: 'AR-Atria financial-TERMS_AND_CONDITIONS.pdf' },
    'Privacy_Policy': { en: 'EN-Privacy_Policy.pdf', ar: 'AR-Atria_financial__Privacy_Policy.pdf' },
    'Cookies_Policy': { en: 'EN-Cookies_Policy.pdf', ar: 'AR-Atria_financial-Ltd-Cookies-Policy.pdf' },
    'Bonus_Policy': { en: 'ATRIAFINANCIAL_LTD_Bonus_Policy.pdf', ar: 'ATRIAFINANCIAL_LTD_Bonus_Policy.pdf' },
  }

  const knownLanguage = data.language === 'en' ? true : data.language === 'ar' ? true : false

  let path;

  if (!req.files || Object.keys(req.files).length === 0 || data.files === 'none' || data.language === 'none' || !knownLanguage) {
    return res.status(400).send("No files were uploaded.");
  }

  var page = {
    fields: {
      seo: {
        meta_description: "",
        meta_keywords: ``,
        page_title: `upload file to get public link`,
      },
    },
  };

  if (filesNames[data.files]) {

    path = `./public/legal/${data.language}/${filesNames[data.files][data.language]}`
    let attachment = req.files.cv.data.toString("base64");

    fs.writeFile(path, attachment, { encoding: 'base64' }, function (err) {
      console.log('File created');
    });

    return res.render("documents", { page: page, link: "", uploaded: true });
  }

  res.render("documents", { page: page, link: "", uploaded: false });

})

app.post("/sendEvestTalk", async (req, res) => {
  // const ipAddress = IP.address();

  const msg = {
    to: ["seo@evest.com", "rossol.kadhem@evest.com"],
    from: `${req.body.email}`, // Use the email address or domain you verified above
    subject: `New Message from the Evest Talk website page`,
    html: `<h1>You Got New Message</h1>
    <p>EMAIL: ${req.body.email}.<br><br>
    First NAME: ${req.body.firstName}.<br><br>
    Last NAME: ${req.body.lastName}.<br><br>
    Phone: ${req.body.phonenumber}.<br><br>
    Job: ${req.body.job}.<br><br>
    MESSAGE: ${req.body.message}.<br><br></p>`,
    // replyTo: `${req.body.email}`,
  };


  sgMail.send(msg).then(
    (res) => { console.log(res) },
    (error) => {
      console.error(error);

      if (error.response) {
        console.error(error.response.body);
      }
    }
  );

  res.redirect("/evest/evest-talk-en");
});

async function getPostSiteMaps() {
  let all_links_en = [];
  let categories_en = [
    // "trading-news", "oil-news", "gold-news", "market-news",
    8,
    21,
    19
  ];

  var status = new Promise((resolve, reject) => {
    categories_en.forEach(async (elem) => {
      for (let page = 1; page < 8; page++) {
        await axios
          .get(
            `https://evest.blog/wp-json/wp/v2/posts?categories=${elem}&per_page=100&page=${page}`
          )
          .then((res) => {
            // push all links into our all_links variable
            for (let ele in res.data) {
              if (elem === 8) { // if it trading news
                all_links_en.push(`trading-news${res.data[ele].link.split('trading-news')[1]}`);
                // console.log(res.data[ele].link.split('trading-news')[1])
              } else if (elem === 21) { // if it is oil news
                if (res.data[ele].link.includes('trading-news'))
                  continue;
                else
                  all_links_en.push(`oil-news${res.data[ele].link.split('oil-news')[1]}`)
                // console.log(`oil-news${res.data[ele].link.split('oil-news')[1]}`)
              } else if (elem === 19) {
                all_links_en.push(`gold-news${res.data[ele].link.split('gold-news')[1]}`)
              }
            }
          })
          .catch((error) => {
            return;
          });
      }

      let sitemap_entries = all_links_en.map((link) => {
        // you got access to every property of those links here. Note the \n I've added to format it in the output - you don't need that in the real XML.
        return `\n<url><loc>https://www.evest.com/${link}</loc></url>`;
      });
      // the actual sitemap with all it's entries.
      let sitemap = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
        xmlns:image="http://www.sitemaps.org/schemas/sitemap-image/1.1" 
        xmlns:video="http://www.sitemaps.org/schemas/sitemap-video/1.1">${sitemap_entries.join(
        ""
      )}
        </urlset>`;

      fs.writeFile("./public/news_en.xml", sitemap, function (err) {
        if (err) throw err;
        console.log("File is created successfully. news_en.xml");
      });
    });
  });
  // status.then(() => {

  let all_links_ar = [];
  let categories_ar = [
    1,
    15,
    13
  ];

  categories_ar.forEach(async (elem) => {
    for (let page = 1; page < 8; page++) {
      await axios
        .get(
          // اخبار التداولnews
          `https://evest.blog/wp-json/wp/v2/posts?categories=${elem}&per_page=100&page=${page}`
        )
        .then((res) => {
          // push all links into our all_links variable
          for (let ele in res.data) {
            all_links_ar.push(res.data[ele].link.substring(22));
          }
        })
        .catch((error) => {
          return;
        });


      let sitemap_entries2 = all_links_ar.map((link) => {
        // you got access to every property of those links here. Note the \n I've added to format it in the output - you don't need that in the real XML.
        return `\n<url><loc>https://www.evest.com${link}</loc></url>`;
      });
      // the actual sitemap with all it's entries.
      let sitemap2 = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
      xmlns:image="http://www.sitemaps.org/schemas/sitemap-image/1.1" 
      xmlns:video="http://www.sitemaps.org/schemas/sitemap-video/1.1">${sitemap_entries2.join(
        ""
      )}
      </urlset>`;

      fs.writeFile("./public/news_ar.xml", sitemap2, function (err) {
        if (err) throw err;
        console.log("File is created successfully. news_ar.xml");
      });
    }
  });
}

async function getPagesSiteMaps() {
  let all_links = [`evest/evest-talk-en`, 'evest/why-evest', 'evest/regulatory-authorisation', 'evest/evest-ambassador', 'ceo', 'evest/careers', 'evest/help-desk', 'start-trading/eib', 'start-trading/cryptocurrency', 'trading-products',
    'trade-room/?asset=EURUSD',
    'trade-room/?asset=BTCUSD',
    'trade-room/?asset=GOLD',
    'trade-room/?asset=USOIL',
    'trade-room/?asset=APPLE',
    'trade-room/?asset=TESLA',
    'trading-academy', 'trading-news', 'faq'];
  let all_links_ar = [
    'ar/إيڤست/ايفست-توك?lang=ar', 'trade-room/?lang=ar', 'ar/%D8%A5%D9%8A%DA%A4%D8%B3%D8%AA?lang=ar',
    'ar/%D8%A5%D9%8A%DA%A4%D8%B3%D8%AA/%D8%AA%D8%B1%D8%A7%D8%AE%D9%8A%D8%B5-%D8%A7%D9%84%D8%AA%D8%AF%D8%A7%D9%88%D9%84?lang=ar',
    'ar/%D8%A5%D9%8A%DA%A4%D8%B3%D8%AA/%D9%84%D9%85%D8%A7%D8%B0%D8%A7-%D8%A5%D9%8A%DA%A4%D8%B3%D8%AA?lang=ar',
    'ar/%D8%A5%D9%8A%DA%A4%D8%B3%D8%AA/%D8%B3%D9%81%D9%8A%D8%B1-%D8%A5%D9%8A%DA%A4%D8%B3%D8%AA?lang=ar',
    'ar/%D8%A7%D9%84%D9%85%D8%AF%D9%8A%D8%B1-%D8%A7%D9%84%D8%AA%D9%86%D9%81%D9%8A%D8%B0%D9%8A?lang=ar',
    'ar/%D8%A5%D9%8A%DA%A4%D8%B3%D8%AA/%D8%A7%D8%AA%D8%B5%D9%84-%D8%A8%D9%86%D8%A7?lang=ar',
    'ar/%D8%A5%D9%8A%DA%A4%D8%B3%D8%AA/%D9%88%D8%B8%D8%A7%D8%A6%D9%81-%D8%A5%D9%8A%DA%A4%D8%B3%D8%AA?lang=ar',
    'ar/%D8%A5%D9%8A%DA%A4%D8%B3%D8%AA/%D9%85%D8%B1%D9%83%D8%B2-%D8%A7%D9%84%D9%85%D8%B3%D8%A7%D8%B9%D8%AF%D8%A9?lang=ar',
    'ar/%D8%A7%D8%A8%D8%AF%D8%A7-%D8%A7%D9%84%D8%AA%D8%AF%D8%A7%D9%88%D9%84/%D8%A7%D9%86%D9%88%D8%A7%D8%B9-%D8%A7%D9%84%D8%AD%D8%B3%D8%A7%D8%A8%D8%A7%D8%AA?lang=ar',
    'ar/%D8%A7%D8%A8%D8%AF%D8%A7-%D8%A7%D9%84%D8%AA%D8%AF%D8%A7%D9%88%D9%84/%D8%AD%D8%B3%D8%A7%D8%A8-%D8%AA%D8%AF%D8%A7%D9%88%D9%84-%D8%AA%D8%AC%D8%B1%D9%8A%D8%A8%D9%8A?lang=ar',
    'ar/%D8%A7%D8%A8%D8%AF%D8%A7-%D8%A7%D9%84%D8%AA%D8%AF%D8%A7%D9%88%D9%84/%D8%AD%D8%B3%D8%A7%D8%A8-%D8%AA%D8%AF%D8%A7%D9%88%D9%84-%D8%AA%D8%AC%D8%B1%D9%8A%D8%A8%D9%8A?lang=ar',
    'ar/%D8%A7%D8%A8%D8%AF%D8%A7-%D8%A7%D9%84%D8%AA%D8%AF%D8%A7%D9%88%D9%84/%D8%B3%D9%8E%D9%84%D8%A7%D9%91%D9%8E%D8%AA-%D8%AA%D8%AF%D8%A7%D9%88%D9%84-%D8%A7%D8%B3%D8%AA%D8%AB%D9%85%D8%A7%D8%B1%D9%8A%D8%A9?lang=ar',
    'ar/%D8%A7%D8%A8%D8%AF%D8%A7-%D8%A7%D9%84%D8%AA%D8%AF%D8%A7%D9%88%D9%84/%D8%A7%D9%84%D8%B9%D9%85%D9%84%D8%A7%D8%AA-%D8%A7%D9%84%D8%B1%D9%82%D9%85%D9%8A%D8%A9?lang=ar',
    'ar/%D8%A7%D8%A8%D8%AF%D8%A7-%D8%A7%D9%84%D8%AA%D8%AF%D8%A7%D9%88%D9%84/%D8%AD%D8%B3%D8%A7%D8%A8-%D8%AA%D8%AF%D8%A7%D9%88%D9%84-%D8%A5%D8%B3%D9%84%D8%A7%D9%85%D9%8A?lang=ar',
    'ar/%D8%A7%D8%A8%D8%AF%D8%A7-%D8%A7%D9%84%D8%AA%D8%AF%D8%A7%D9%88%D9%84/%D8%A7%D9%84%D9%88%D8%AB%D8%A7%D8%A6%D9%82-%D9%88-%D8%A7%D9%84%D8%B3%D9%8A%D8%A7%D8%B3%D8%A7%D8%AA?lang=ar',
    'ar/%D8%A7%D8%A8%D8%AF%D8%A7-%D8%A7%D9%84%D8%AA%D8%AF%D8%A7%D9%88%D9%84/%D8%A7%D9%84%D8%A5%D9%8A%D8%AF%D8%A7%D8%B9-%D9%88-%D8%A7%D9%84%D8%B3%D8%AD%D8%A8?lang=ar',
    'ar/%D8%A7%D8%A8%D8%AF%D8%A7-%D8%A7%D9%84%D8%AA%D8%AF%D8%A7%D9%88%D9%84/%D8%B1%D8%B3%D9%88%D9%85-%D8%A7%D9%8A%D9%81%D8%B3%D8%AA?lang=ar',
    'ar/%D8%A7%D8%A8%D8%AF%D8%A7-%D8%A7%D9%84%D8%AA%D8%AF%D8%A7%D9%88%D9%84/%D8%A7%D9%88%D9%82%D8%A7%D8%AA-%D8%A7%D9%84%D8%AA%D8%AF%D8%A7%D9%88%D9%84?lang=ar',
    'ar/%D8%A7%D8%A8%D8%AF%D8%A7-%D8%A7%D9%84%D8%AA%D8%AF%D8%A7%D9%88%D9%84/%D8%AD%D8%A7%D8%B3%D8%A8%D8%A7%D8%AA-%D8%A7%D9%84%D8%AA%D8%AF%D8%A7%D9%88%D9%84?lang=ar',
    'ar/%D8%A7%D9%84%D8%AA%D8%AF%D8%A7%D9%88%D9%84-%D9%85%D9%86-%D8%A7%D9%84%D8%AC%D9%88%D8%A7%D9%84?lang=ar',
    'ar/%D8%AA%D8%AF%D8%A7%D9%88%D9%84-%D9%85%D9%86-%D8%A7%D9%84%D9%85%D8%AA%D8%B5%D9%81%D8%AD?lang=ar',
    'ar/%D8%AA%D8%AF%D8%A7%D9%88%D9%84-%D9%85%D9%86-%D8%A7%D9%84%D9%85%D8%AA%D8%B5%D9%81%D8%AD?lang=ar',
    'ar/%D9%85%D9%8A%D8%AA%D8%A7%D8%AA%D8%B1%D9%8A%D8%AF%D8%B1-5?lang=ar',
    'ar/%D8%AA%D8%B7%D8%A8%D9%8A%D9%82-%D8%AA%D8%AF%D8%A7%D9%88%D9%84-%D8%A7%D9%8A%D9%81%D8%B3%D8%AA?lang=ar',
    'ar/%D9%85%D9%86%D8%AA%D8%AC%D8%A7%D8%AA-%D8%A7%D9%84%D8%AA%D8%AF%D8%A7%D9%88%D9%84?lang=ar',
    'trade-room/?asset=EURUSD',
    'trade-room/?asset=BTCUSD',
    'trade-room/?asset=GOLD',
    'trade-room/?asset=USOIL',
    'trade-room/?asset=APPLE',
    'trade-room/?asset=TESLA',
    'ar/%D8%A3%D9%83%D8%A7%D8%AF%D9%8A%D9%85%D9%8A%D8%A9-%D8%A7%D9%84%D8%AA%D8%AF%D8%A7%D9%88%D9%84?lang=ar',
    'ar/%D8%A3%D8%AE%D8%A8%D8%A7%D8%B1-%D8%A7%D9%84%D8%AA%D8%AF%D8%A7%D9%88%D9%84?lang=ar',
    'ar/%D9%85%D8%AF%D9%88%D9%86%D8%A9-%D8%A7%D9%84%D8%AA%D8%AF%D8%A7%D9%88%D9%84?lang=ar',
    'ar/%D8%A7%D8%AE%D8%A8%D8%A7%D8%B1-%D8%A7%D9%84%D8%B3%D9%88%D9%82?lang=ar',
    'ar/%D8%A7%D8%AE%D8%A8%D8%A7%D8%B1-%D8%A7%D9%84%D8%B3%D9%88%D9%82?lang=ar',
    'ar/%D9%85%D8%AF%D9%88%D9%86%D8%A9-%D8%A7%D9%84%D8%AA%D8%AF%D8%A7%D9%88%D9%84?lang=ar',
    'ar/%D8%A3%D8%B3%D8%A6%D9%84%D8%A9-%D8%B4%D8%A7%D8%A6%D8%B9%D8%A9?lang=ar',
    'ar/%D8%A5%D9%8A%DA%A4%D8%B3%D8%AA/%D8%A7%D9%8A%D9%81%D8%B3%D8%AA-%D8%AA%D9%88%D9%83?lang=ar'];

  await axios
    .get(`https://cms.evest.com/wp-json/wp/v2/pages?page=1&per_page=100`)
    .then((res) => {
      // push all links into our all_links variable

      for (let ele in res.data) {
        all_links.push(res.data[ele].link.substring(22));
      }
    })
    .catch((error) => {
      return;
    });

  // for (let page = 1; page < 10; page++) {
  // await axios
  //   .get(`https://cms.evest.com/ar/wp-json/wp/v2/pages?page=1&per_page=100`)
  //   .then((res) => {
  //     // push all links into our all_links variable
  //     for (let ele in res.data) {
  //       all_links_ar.push(res.data[ele].link.substring(22));
  //     }
  //   })
  //   .catch((error) => {
  //     return;
  //   });
  // }

  let sitemap_entries = all_links.map((link) => {
    // you got access to every property of those links here. Note the \n I've added to format it in the output - you don't need that in the real XML.
    return `\n<url><loc>https://www.evest.com/${link}</loc></url>`;
  });


  // the actual sitemap with all it's entries.
  let sitemap = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
xmlns:image="http://www.sitemaps.org/schemas/sitemap-image/1.1" 
xmlns:video="http://www.sitemaps.org/schemas/sitemap-video/1.1">${sitemap_entries.join(
    ""
  )}
</urlset>`;

  // writeFile function with filename, content and callback function
  fs.writeFile("./public/sitemap_en.xml", sitemap, function (err) {
    if (err) throw err;
    console.log("File is created successfully.");
  });

  let sitemap_entries2 = all_links_ar.map((link) => {
    // you got access to every property of those links here. Note the \n I've added to format it in the output - you don't need that in the real XML.
    return `\n<url><loc>https://www.evest.com/${link}</loc></url>`;
  });

  let sitemap2 = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
xmlns:image="http://www.sitemaps.org/schemas/sitemap-image/1.1" 
xmlns:video="http://www.sitemaps.org/schemas/sitemap-video/1.1">${sitemap_entries2.join(
    ""
  )}
</urlset>`;

  // writeFile function with filename, content and callback function
  fs.writeFile("./public/sitemap_ar.xml", sitemap2, function (err) {
    if (err) throw err;
    console.log("File is created successfully.");
  });
}

// https://cms.evest.com/ar/wp-json/wp/v2/blog-ar?page=1&per_page=100

async function getArabicBlogs() {
  let all_links = [];
  for (let page = 1; page < 8; page++) {
    await axios
      .get(
        `https://evest.blog/wp-json/wp/v2/posts?categories=17&per_page=100&page=${page}`
      )
      .then((res) => {
        for (let ele in res.data) {
          all_links.push(res.data[ele].slug);
        }
      })
      .catch((error) => {
        return;
      });
  }

  let sitemap_entries = all_links.map((link) => {
    // you got access to every property of those links here. Note the \n I've added to format it in the output - you don't need that in the real XML.
    return `\n<url><loc>https://www.evest.com/ar/مدونة-التداول/${link}</loc></url>`;
  });

  // the actual sitemap with all it's entries.
  let sitemap = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
xmlns:image="http://www.sitemaps.org/schemas/sitemap-image/1.1" 
xmlns:video="http://www.sitemaps.org/schemas/sitemap-video/1.1">${sitemap_entries.join(
    ""
  )}
</urlset>`;

  // writeFile function with filename, content and callback function
  fs.writeFile("./public/blog_ar.xml", sitemap, function (err) {
    if (err) throw err;
    console.log("File is created successfully.");
  });
}


async function getCategoriesSiteMaps() {
  let all_links = [];
  for (let page = 1; page < 10; page++) {
    await axios
      .get(
        `https://cms.evest.com/wp-json/wp/v2/categories?page=${page}&per_page=100`
      )
      .then((res) => {
        // push all links into our all_links variable
        for (let ele in res.data) {
          all_links.push(res.data[ele].link.substring(22));
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
          all_links.push(res.data[ele].link.substring(22));
        }
      })
      .catch((error) => {
        return;
      });
  }
  let sitemap_entries = all_links.map((link) => {
    // you got access to every property of those links here. Note the \n I've added to format it in the output - you don't need that in the real XML.
    return `\n<url><loc>https://www.evest.com/${link}</loc></url>`;
  });

  // the actual sitemap with all it's entries.
  let sitemap = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
xmlns:image="http://www.sitemaps.org/schemas/sitemap-image/1.1" 
xmlns:video="http://www.sitemaps.org/schemas/sitemap-video/1.1">${sitemap_entries.join(
    ""
  )}
</urlset>`;

  // writeFile function with filename, content and callback function
  fs.writeFile("./public/category-sitemap.xml", sitemap, function (err) {
    if (err) throw err;
    console.log("File is created successfully.");
  });
}
async function getTagsSiteMaps() {
  let all_links = [];
  for (let page = 1; page < 10; page++) {
    await axios
      .get(`https://cms.evest.com/wp-json/wp/v2/tags?page=${page}&per_page=100`)
      .then((res) => {
        // push all links into our all_links variable
        for (let ele in res.data) {
          all_links.push(res.data[ele].link.substring(22));
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
          all_links.push(res.data[ele].link.substring(22));
        }
      })
      .catch((error) => {
        return;
      });
  }
  let sitemap_entries = all_links.map((link) => {
    // you got access to every property of those links here. Note the \n I've added to format it in the output - you don't need that in the real XML.
    return `\n<url><loc>https://www.evest.com/${link}</loc></url>`;
  });

  // the actual sitemap with all it's entries.
  let sitemap = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
xmlns:image="http://www.sitemaps.org/schemas/sitemap-image/1.1" 
xmlns:video="http://www.sitemaps.org/schemas/sitemap-video/1.1">${sitemap_entries.join(
    ""
  )}
</urlset>`;

  // writeFile function with filename, content and callback function
  fs.writeFile("./public/post_tag-sitemap.xml", sitemap, function (err) {
    if (err) throw err;
    console.log("File is created successfully.");
  });
}
async function getCommoditiesSiteMaps() {
  let all_links = [];
  for (let page = 1; page < 10; page++) {
    await axios
      .get(
        `https://cms.evest.com/wp-json/wp/v2/commodities?page=${page}&per_page=100`
      )
      .then((res) => {
        // push all links into our all_links variable
        for (let ele in res.data) {
          all_links.push(res.data[ele].link.substring(22));
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
          all_links.push(res.data[ele].link.substring(22));
        }
      })
      .catch((error) => {
        return;
      });
  }
  let sitemap_entries = all_links.map((link) => {
    // you got access to every property of those links here. Note the \n I've added to format it in the output - you don't need that in the real XML.
    return `\n<url><loc>https://www.evest.com/${link}</loc></url>`;
  });

  // the actual sitemap with all it's entries.
  let sitemap = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
xmlns:image="http://www.sitemaps.org/schemas/sitemap-image/1.1" 
xmlns:video="http://www.sitemaps.org/schemas/sitemap-video/1.1">${sitemap_entries.join(
    ""
  )}
</urlset>`;

  // writeFile function with filename, content and callback function
  fs.writeFile("./public/commodities-sitemap.xml", sitemap, function (err) {
    if (err) throw err;
    console.log("File is created successfully.");
  });
}

try {
  getPostSiteMaps();
  getArabicBlogs()
  getPagesSiteMaps();

  setInterval(() => {
    getPagesSiteMaps();
    getPostSiteMaps();
    getArabicBlogs();
  }, 86400000);

} catch (e) {
  console.log(e)
}


const SitemapGenerator = require("sitemap-generator");
// create generator

const generator = SitemapGenerator("http://www.evest.com", {
  maxDepth: 0,
  filepath: "./public/sitemap.xml",
  maxEntriesPerFile: 50000,
  stripQuerystring: true,
});

// register event listeners
generator.on("done", () => {
  // sitemaps created
});

// start the crawler
generator.start();

/*StockWidget API*/
const myapi = require("./pricesAPI");
app.get("/stocks", (req, res) => {
  res.send(myapi.getStocks);
});
app.get("/currency", (req, res) => {
  res.send(myapi.getCurrency);
});
app.get("/commodities", (req, res) => {
  res.send(myapi.getCommodities);
});
app.get("/indices", (req, res) => {
  res.send(myapi.getIndices);
});
app.get("/crypto", (req, res) => {
  res.send(myapi.getCrypto);
});




app.get("/ceo", (req, res) => {
  butter.page
    .retrieve("*", "meet-ceo")
    .then(function (resp) {
      var page1 = resp.data.data;
      res.render("ceo", {
        page: page1,
      });
    })
    .catch(function (resp) {
      console.log(resp);
    });
});

app.get("/trade-room", (req, res) => {
  res.sendFile(__dirname + "/public/trade-room/static.html");
});

app.get("/mobile", (req, res) => {
  res.sendFile(__dirname + "/public/mobile/index.html");
});

app.get("/trading-academy/:loginStatus", (req, res) => {
  butter.page
    .retrieve("*", "trading-academy")
    .then(function (resp) {
      var page1 = resp.data.data;
      if (req.params.loginStatus == "true") {
        res.render("tradingAcademyLoggedin", {
          page: page1,
        });
      } else {
        res.render("tradingAcademy", {
          page: page1,
        });
      }
    })
    .catch(function (resp) {
      console.log(resp);
    });
});
app.get("/trading-academy", (req, res) => {
  butter.page
    .retrieve("*", "trading-academy")
    .then(function (resp) {
      var page1 = resp.data.data;
      res.render("tradingAcademy", {
        page: page1,
      });
    })
    .catch(function (resp) {
      console.log(resp);
    });
});

app.get("/faq", (req, res) => {
  butter.page
    .retrieve("*", "faq")
    .then(function (resp) {
      var page1 = resp.data.data;
      res.render("faq", {
        page: page1,
      });
    })
    .catch(function (resp) {
      console.log(resp);
    });
});

app.get("/oil-news", async (req, res) => {
  // const url = 'https://cms.evest.com/wp-json/wp/v2/oil-news?_embed&per_page=6&page=1';
  const url =
    "https://evest.blog/wp-json/wp/v2/posts?categories=21&per_page=6&page=1";

  const options = {
    method: "GET",
  };
  const response = await fetch(url, options)
    .then((res) => res.json())
    .then((data) => {
      var page = {
        fields: {
          seo: {
            meta_description: `Trading News, Get the latest Trading News of the market now from anywhere in the world directly to you! Top and latest news about stock market`,
            meta_keywords: `Trading News`,
            page_title: `Trading News - Evest Top and latest news about stock market`,
          },
        },
      };
      const article = data
        .map((post) => {
          let date = post.date.split("T")[0];
          let image;
          if (post.yoast_head_json.og_image) {
            image = post.yoast_head_json.og_image[0].url;
          } else image = "/images/build/logo.png";

          return `<div class="card">
          <div> 
                 <a href="/oil-news/${post.slug}"><img class="card-img-top" src="${image}" alt="Card image cap"></a>
<div class="card-body">
<a href="/oil-news/${post.slug}"><h5 class="card-title">${post.title.rendered}</h5></a>
<div class="card-text description">${post.yoast_head_json.og_description}</div>
<a class="btn btn-filled readmore" href="/oil-news/${post.slug}">Read more</a>
</div></div>
<div class="card-footer dateCreated">
${date}
</div>
</div>`;
        })
        .join("");
      res.render("Education/oil", { page: page, articles: article });
    });
});

app.get("/oil-news/:slug", async (req, res) => {
  const url = `https://evest.blog/wp-json/wp/v2/posts?categories=21&slug=${req.params.slug}`;
  const options = {
    method: "GET",
  };
  const response = await fetch(url, options)
    .then((res) => res.json())
    .then((data) => {
      var article = data;
      const tags = article[0].tags
        .map((tag) => {
          // const tag_name = getTag.englishTags.find(elem => elem.tag_id === tag).Name;
          // return `<a class="badge bg-secondary text-decoration-none link-light" href="/tag/${tag_name}">${tag_name}</a>`
        })
        .join(" ");

      let image;
      if (article[0].yoast_head_json.og_image) {
        image = article[0].yoast_head_json.og_image[0].url;
      } else image = "/images/build/logo.png";

      var page = {
        fields: {
          seo: {
            meta_description: `${article[0].yoast_head_json.og_description}`,
            meta_keyword: ``,
            page_title: `${article[0].yoast_head_json.og_title}`,
          },
        },
      };
      res.render("Education/article", {
        page: page,
        content: article[0].content.rendered,
        titleArticle: article[0].title.rendered,
        imgUrl: image,
        date: article[0].date,
        url: article[0].link,
        tags: tags,
        og_img: image,
      });
    })
    .catch((err) => console.log(err));
});

app.get("/gold-news", async (req, res) => {
  // const url = 'https://cms.evest.com/wp-json/wp/v2/gold-news?_embed&per_page=6&page=1';
  const url =
    "https://evest.blog/wp-json/wp/v2/posts?categories=19&per_page=6&page=1";
  const options = {
    method: "GET",
  };
  const response = await fetch(url, options)
    .then((res) => res.json())
    .then((data) => {
      var page = {
        fields: {
          seo: {
            meta_description: `Trading News, Get the latest Trading News of the market now from anywhere in the world directly to you! Top and latest news about stock market`,
            meta_keywords: `Trading News`,
            page_title: `Trading News - Evest Top and latest news about stock market`,
          },
        },
      };
      const article = data
        .map((post) => {
          let date = post.date.split("T")[0];

          let image;
          if (post.yoast_head_json.og_image) {
            image = post.yoast_head_json.og_image[0].url;
          } else image = "/images/build/logo.png";

          return `<div class="card">
          <div> 
                 <a href="/gold-news/${post.slug}"><img class="card-img-top" src="${image}" alt="Card image cap"></a>
<div class="card-body">
<a href="/gold-news/${post.slug}"><h5 class="card-title">${post.title.rendered}</h5></a>
<div class="card-text description">${post.yoast_head_json.og_description}</div>
<a class="btn btn-filled readmore" href="/gold-news/${post.slug}">Read more</a>
</div></div>
<div class="card-footer dateCreated">
${date}
</div>
</div>`;
        })
        .join("");
      res.render("Education/gold", { page: page, articles: article });
    });
});
app.get("/gold-news/:slug", async (req, res) => {
  const url = `https://evest.blog/wp-json/wp/v2/posts?categories=19&slug=${req.params.slug}`;
  const options = {
    method: "GET",
  };
  const response = await fetch(url, options)
    .then((res) => res.json())
    .then((data) => {
      var article = data;
      const tags = article[0].tags
        .map((tag) => {
          // const tag_name = getTag.englishTags.find(elem => elem.tag_id === tag).Name;
          // return `<a class="badge bg-secondary text-decoration-none link-light" href="/tag/${tag_name}">${tag_name}</a>`
        })
        .join(" ");

      let image;
      if (article[0].yoast_head_json.og_image) {
        image = article[0].yoast_head_json.og_image[0].url;
      } else image = "/images/build/logo.png";

      var page = {
        fields: {
          seo: {
            meta_description: `${article[0].yoast_head_json.og_description}`,
            meta_keyword: ``,
            page_title: `${article[0].yoast_head_json.og_title}`,
          },
        },
      };
      res.render("Education/article", {
        page: page,
        content: article[0].content.rendered,
        titleArticle: article[0].title.rendered,
        imgUrl: image,
        date: article[0].date,
        url: article[0].link,
        tags: tags,
        og_img: image,
      });
    })
    .catch((err) => console.log(err));
});

app.get("/market-news", async (req, res) => {
  // const url = 'https://cms.evest.com/wp-json/wp/v2/market-news?_embed&per_page=6&page=1';
  const url =
    "https://evest.blog/wp-json/wp/v2/posts?categories=23&per_page=6&page=1";
  const options = {
    method: "GET",
  };
  const response = await fetch(url, options)
    .then((res) => res.json())
    .then((data) => {
      var page = {
        fields: {
          seo: {
            meta_description: `Trading News, Get the latest Trading News of the market now from anywhere in the world directly to you! Top and latest news about stock market`,
            meta_keywords: `Trading News`,
            page_title: `Trading News - Evest Top and latest news about stock market`,
          },
        },
      };
      const article = data
        .map((post) => {
          let date = post.date.split("T")[0];
          let image;

          if (post.yoast_head_json.og_image) {
            image = post.yoast_head_json.og_image[0].url;
          } else image = "/images/build/logo.png";

          return `<div class="card">
          <div> 
                 <a href="/market-news/${post.slug}"><img class="card-img-top" src="${image}" alt="Card image cap"></a>
<div class="card-body">
<a href="/market-news/${post.slug}"><h5 class="card-title">${post.title.rendered}</h5></a>
<div class="card-text description">${post.yoast_head_json.og_description}</div>
<a class="btn btn-filled readmore" href="/market-news/${post.slug}">Read more</a>
</div></div>
<div class="card-footer dateCreated">
${date}
</div>
</div>`;
        })
        .join("");
      res.render("Education/market", { page: page, articles: article });
    });
});
app.get("/market-news/:slug", async (req, res) => {
  const url = `https://evest.blog/wp-json/wp/v2/posts?categories=23&slug=${req.params.slug}`;
  const options = {
    method: "GET",
  };
  const response = await fetch(url, options)
    .then((res) => res.json())
    .then((data) => {
      var article = data;
      const tags = article[0].tags
        .map((tag) => {
          // const tag_name = getTag.englishTags.find(elem => elem.tag_id === tag).Name;
          // return `<a class="badge bg-secondary text-decoration-none link-light" href="/tag/${tag_name}">${tag_name}</a>`
        })
        .join(" ");

      let image;
      if (article[0].yoast_head_json.og_image) {
        image = article[0].yoast_head_json.og_image[0].url;
      } else image = "/images/build/logo.png";

      var page = {
        fields: {
          seo: {
            meta_description: `${article[0].yoast_head_json.og_description}`,
            meta_keyword: ``,
            page_title: `${article[0].yoast_head_json.og_title}`,
          },
        },
      };
      res.render("Education/article", {
        page: page,
        content: article[0].content.rendered,
        titleArticle: article[0].title.rendered,
        imgUrl: image,
        date: article[0].date,
        url: article[0].link,
        tags: tags,
        og_img: image,
      });
    })
    .catch((err) => console.log(err));
});

app.get("/trading-news", async (req, res) => {
  // const url = 'https://cms.evest.com/wp-json/wp/v2/trading-news?_embed&per_page=6&page=1';
  const url =
    "https://evest.blog/wp-json/wp/v2/posts?categories=8&per_page=5&page=1";
  const options = {
    method: "GET",
  };
  fetch(url, options)
    .then((res) => res.json())
    .then((data) => {
      var page = {
        fields: {
          seo: {
            meta_description: `Trading News, Get the latest Trading News of the market now from anywhere in the world directly to you! Top and latest news about stock market`,
            meta_keywords: `Trading News`,
            page_title: `Trading News - Evest Top and latest news about stock market`,
          },
        },
      };
      const article = data
        .map((post) => {
          let date = post.date.split("T")[0];
          let image;
          if (post.yoast_head_json.og_image) {
            image = post.yoast_head_json.og_image[0].url;
          } else image = "/images/build/logo.png";
          return `<div class="card">
            <div> 
            <a href="/trading-news/${post.slug}"><img class="card-img-top" src="${image}" alt="Card image cap" /></a>

  <div class="card-body">
  <a href="/trading-news/${post.slug}"><h5 class="card-title">${post.title.rendered}</h5></a>
  <div class="card-text description">${post.yoast_head_json.og_description}</div>
  <a class="btn btn-filled readmore" href="/trading-news/${post.slug}">Read more</a>
  </div></div>
  <div class="card-footer dateCreated">
  ${date}
  </div>
  </div>`;
        })
        .join("");
      res.render("Education/tradingNews", { page: page, articles: article });
    });
});
app.get("/trading-news/:slug", async (req, res) => {
  const url = `https://evest.blog/wp-json/wp/v2/posts?categories=8&slug=${req.params.slug}`;
  const options = {
    method: "GET",
  };
  const response = await fetch(url, options)
    .then((res) => res.json())
    .then((data) => {
      // console.log(data)
      var article = data;
      const tags = article[0].tags
        .map((tag) => {
          // const tag_name = getTag.englishTags.find(elem => elem.tag_id === tag).Name;
          // return `<a class="badge bg-secondary text-decoration-none link-light" href="/tag/${tag_name}">${tag_name}</a>`
        })
        .join(" ");

      let image;
      if (article[0].yoast_head_json.og_image) {
        image = article[0].yoast_head_json.og_image[0].url;
      } else image = "/images/build/logo.png";

      var page = {
        fields: {
          seo: {
            meta_description: `${article[0].yoast_head_json.og_description}`,
            meta_keyword: ``,
            page_title: `${article[0].yoast_head_json.og_title}`,
          },
        },
      };
      res.render("Education/article", {
        page: page,
        content: article[0].content.rendered,
        titleArticle: article[0].title.rendered,
        imgUrl: image,
        date: article[0].date,
        url: article[0].link,
        tags: tags,
        og_img: image,
      });
    })
    .catch((err) => console.log(err));
});

app.post("/cvUpload", (req, res) => {
  const data = req.body;

  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No files were uploaded.");
  }

  let attachment = req.files.cv.data.toString("base64");

  const msg = {
    // change mail to required mail
    to: ["osama.ba@evest.com", "ismael.h@evest.com", "hr.cy@evest.com"],
    from: "no-replay@customers-evest.com", // Use the email address or domain you verified above
    subject: `New CV for position ${data.jobTitle} , location: ${data.jobLocation}`,
    html: `  <h1>Job Position : ${data.jobTitle} In ${data.jobLocation}</h1>
    CANDITATE NAME: ${data.fullNameInput} .<br><br>
    <p>EMAIL: ${data.emailInput}.<br><br>
    CANDITATE LOCATION: ${data.countryInput}.<br><br>
    CURRENT POSITION : ${data.currentPositionInput} .<br><br>
    Linkedin : ${data.linkedinInput} . <br><br>
    TEL: ${data.TelephoneInput} . <br><br>
    Notes: ${data.textAreaInput}.<br></p>`,
    attachments: [
      {
        content: attachment,
        filename: req.files.cv.name,
        type: req.files.cv.mimetype,
        disposition: "attachment",
      },
    ],
    replyTo: `${data.emailInput}`,
  };

  sgMail.send(msg).then(
    () => { },
    (error) => {
      console.error(error);

      if (error.response) {
        console.error(error.response.body);
      }
    }
  );

  res.redirect("/");
});

app.post("/send", (req, res) => {
  const ipAddress = IP.address()

  const msg = {
    to: "support@evest.com",
    // to: "osama.ba@evest.com",
    from: `${req.body.email}`, // Use the email address or domain you verified above
    subject: `${req.body.fullName} sent you a new message from the support website page`,
    html: `  <h1>You Got New Message</h1>
    <p>EMAIL: ${req.body.email}.<br><br>
    FULL NAME: ${req.body.fullName}.<br><br>
    SUBJECT: ${req.body.subject}.<br><br>
    MESSAGE: ${req.body.message}.<br>
    IP : ${ipAddress} <br><br>
    </p>`
  };
  //ES6
  sgMail.send(msg).then(
    () => { },
    (error) => {
      console.error(error);

      if (error.response) {
        console.error(error.response.body);
      }
    }
  );
  butter.page
    .retrieve("*", "contact-us")
    .then(function (resp) {
      var page1 = resp.data.data;
      res.render("Evest/contactUs", {
        page: page1,
        message: "Message Sent Thank You,We will contact you soon .",
      });
    })
    .catch(function (resp) {
      console.log(resp);
    });
});

app.post("/ceo", async (req, res) => {

  // const response_key = req.body["g-recaptcha-response"];

  // const secret_key = "6LfTXJIiAAAAACtU8BpQ9_8p1BeG4SnsEexmpz-S";

  // console.log(response_key)
  // console.log('-------------------')

  // console.log(secret_key)
  // const url =
  //   `https://www.google.com/recaptcha/api/siteverify?secret=${secret_key}&response=${response_key}`;

  // await fetch(url, {
  //   method: "POST",
  // })
  //   .then((response) => response.json())
  //   .then((google_response) => {
  //     console.log(google_response)
  //     // google_response is the object return by
  //     // google as a response
  //     if (google_response.success == true) {
  //       //   if captcha is verified

  //       return res.send({ response: "Successful" });

  //     } else {

  //       // if captcha is not verified
  //       return res.send({ response: "Failed" });
  //       // res.redirect("/ceo");

  //     }
  //   })
  //   .catch((error) => {
  //     // Some error while verify captcha
  //     return res.json({ error });
  //   });
  const ipAddress = IP.address()
  console.log(ipAddress)
  const msg = {
    to: "ceo@evest.com",
    // to: "osama.ba@evest.com",
    from: '"CEO Page"<no-replay@customers-evest.com>', // Use the email address or domain you verified above
    subject: ` ${req.body.email} Send You New Message from the CEO website page`,
    html: `  <h1>You Got New Message</h1>
    <p>EMAIL: ${req.body.email}.<br><br>
    FULL NAME: ${req.body.fullName}.<br><br>
    SUBJECT: ${req.body.subject}.<br><br>
    MESSAGE: ${req.body.message}.<br><br>
    IP : ${ipAddress}</p>`
    ,

    replyTo: `${req.body.email}`,
  };


  //ES6
  sgMail.send(msg).then(
    () => { },
    (error) => {
      console.error(error);

      if (error.response) {
        console.error(error.response.body);
      }
    }
  );
  res.redirect("/ceo");


});

const getTag = require("./tagsApi");
const { type } = require("os");
const { post } = require("request");
app.get("/tag/:tag", async (req, res) => {
  const tag_id = getTag.englishTags.find(
    (elem) => elem.Name === req.params.tag
  ).tag_id;
  console.log(+req.params.tag + " " + tag_id);
  if (tag_id === undefined) {
    res.redirect("/");
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

app.use("/evest", evestRoutes);
app.use("/", tradingplatform);
app.use("/start-trading", startTrading);
app.use("/markets", marketsRouting);
app.use("/trading-products", productsRouting);

//upload Files to Fees
app.get("/upload", (req, res) => {
  const reject = () => {
    res.setHeader("www-authenticate", "Basic");
    res.sendStatus(401);
  };

  const authorization = req.headers.authorization;

  if (!authorization) {
    return reject();
  }

  const [username, password] = Buffer.from(
    authorization.replace("Basic ", ""),
    "base64"
  )
    .toString()
    .split(":");

  if (!(username === "admin" && password === "q53hh=-Y5Sat?vUj")) {
    return reject();
  }
  var page = {
    fields: {
      seo: {
        meta_description: "",
        meta_keywords: ``,
        page_title: `upload file to get public link`,
      },
    },
  };
  res.render("upload", { page: page, link: "" });
});

app.post("/upload", (req, res) => {
  if (req.files) {
    var file = req.files.file;
    var filename = file.name;
    file.mv("./public/publicFiles/" + filename, function (err) {
      if (err) {
        res.send(err);
      } else {
        var page = {
          fields: {
            seo: {
              meta_description: "",
              meta_keywords: ``,
              page_title: `upload file to get public link`,
            },
          },
        };
        res.render("upload", {
          page: page,
          link: `https://evest.com/publicFiles/${filename}`,
        });
      }
    });
  }
});

app.get("/log", (req, res) => {
  const reject = () => {
    res.setHeader("www-authenticate", "Basic");
    res.sendStatus(401);
  };

  const authorization = req.headers.authorization;

  if (!authorization) {
    return reject();
  }

  const [username, password] = Buffer.from(
    authorization.replace("Basic ", ""),
    "base64"
  )
    .toString()
    .split(":");

  if (!(username === "admin" && password === "q53hh=-Y5Sat?vUj")) {
    return reject();
  }
  res.sendFile(__dirname + "/public/logForPost.txt");
});


// Routes
app.get("/", async (req, res) => {

  butter.page.retrieve("*", "homepage-en").then((resp) => {
    var page1 = resp.data.data;
    res.render("index", { page: page1, tagHash: config.tagHash });
  });
});

/* redirect for not found routes*/
app.get("*", (req, res) => {
  res.redirect("/");
});

app.listen(PORT, () => {
  console.log(`server start on PORT:${PORT}`);
});
